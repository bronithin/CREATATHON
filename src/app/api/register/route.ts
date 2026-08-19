import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_SHEET_CONFIG } from "@/config/sheet";
import { validateRegistration } from "@/lib/validation";
import { getClientIp, checkRateLimit, isDuplicateSubmission } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_PAYLOAD_BYTES = 32 * 1024; // 32 KB safety threshold

interface RegistrationRecord {
  Timestamp: string;
  Type: "Influencer" | "Brand";
  "Name / Brand": string;
  Location: string;
  "Social Link / Website": string;
  "Audience / Followers": string;
}

interface RegistrationPayload extends RegistrationRecord {
  adminEmail?: string;
}

interface SyncResult {
  success: boolean;
  error?: string;
}

/**
 * Synchronously syncs the registration record to Google Sheet and triggers admin email notification
 */
async function syncToGoogleSheet(
  payload: RegistrationPayload,
  webhookUrl: string
): Promise<SyncResult> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(30000), // 30s timeout for Google Apps Script execution
    });

    if (!res.ok) {
      console.error(`[Google Sheet Sync] Remote server responded with status: ${res.status}`);
      return {
        success: false,
        error: `Google Sheet service returned status ${res.status}.`,
      };
    }

    const responseText = await res.text();
    let data: { result?: string; error?: string; emailSent?: boolean; emailError?: string } | null = null;
    try {
      data = JSON.parse(responseText);
    } catch {
      // Non-JSON response
    }

    if (data && data.result === "error") {
      console.error("[Google Sheet Sync] Script returned an error response");
      return {
        success: false,
        error: data.error || "Failed to update Google Sheet.",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[Google Sheet Sync] Connection error occurred");
    return {
      success: false,
      error: errorMsg.includes("timeout")
        ? "Registration service timed out while saving. Please try again."
        : "Failed to connect to registration service.",
    };
  }
}

// POST: Rate-limited, spam-protected, validated registration submission
export async function POST(req: NextRequest) {
  try {
    // 1. Production-Safe Rate Limiting by Client IP (5 requests / 10 min window)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp, 5, 10 * 60 * 1000);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many registration attempts. Please wait a few minutes and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.resetSeconds),
            "X-RateLimit-Limit": String(rateLimit.limit),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimit.resetSeconds),
          },
        }
      );
    }

    // 2. Request Body Size & Malformed JSON Protection
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        { success: false, error: "Request payload must be a JSON object." },
        { status: 400 }
      );
    }

    // 3. Validation, Sanitization, and Anti-Bot Honeypot Check
    const validation = validateRegistration(rawBody as Record<string, unknown>);

    // Honeypot tripped: silently return success without invoking Google Apps Script
    if (validation.isBot) {
      return NextResponse.json({
        success: true,
        message: "Registration received successfully.",
      });
    }

    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      return NextResponse.json(
        {
          success: false,
          error: firstError || "Validation failed.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { tab, name, location, socialLink, followerCount } = validation.sanitizedData;

    // 4. Duplicate Submission Protection (60-second window per user)
    const dedupKey = `${clientIp}:${tab}:${name.toLowerCase()}:${socialLink.toLowerCase()}`;
    if (isDuplicateSubmission(dedupKey, 60 * 1000)) {
      return NextResponse.json({
        success: true,
        message: "Registration already received.",
      });
    }

    // 5. Server Environment Configuration Verification
    const webhookUrl = GOOGLE_SHEET_CONFIG.webhookUrl;
    const adminEmail = GOOGLE_SHEET_CONFIG.adminMail;

    if (!webhookUrl || webhookUrl.length === 0) {
      console.error("[Register API] GOOGLE_SHEET_WEBHOOK_URL is not configured in environment.");
      return NextResponse.json(
        {
          success: false,
          error: "Registration service is temporarily unavailable. Please try again shortly.",
        },
        { status: 503 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    const newRecord: RegistrationRecord = {
      Timestamp: timestamp,
      Type: tab === "brand" ? "Brand" : "Influencer",
      "Name / Brand": name,
      Location: location,
      "Social Link / Website": socialLink,
      "Audience / Followers": followerCount,
    };

    // 6. Write Record to Google Sheets
    const syncResult = await syncToGoogleSheet(
      {
        ...newRecord,
        ...(adminEmail ? { adminEmail } : {}),
      },
      webhookUrl
    );

    if (!syncResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: syncResult.error || "Failed to save registration. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registration saved successfully.",
      record: newRecord,
    });
  } catch {
    console.error("[Register API] Unhandled exception processing registration");
    return NextResponse.json(
      { success: false, error: "Internal server error saving registration." },
      { status: 500 }
    );
  }
}
