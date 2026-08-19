import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_SHEET_CONFIG } from "@/config/sheet";
import { validateRegistration } from "@/lib/validation";
import { getClientIp, checkRateLimitAsync, isDuplicateSubmission } from "@/lib/rateLimit";

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

interface AppsScriptPayload extends RegistrationRecord {
  secret?: string;
}

interface SyncResult {
  success: boolean;
  error?: string;
}

/**
 * Validates Origin and Referer headers to mitigate CSRF attacks on registration
 */
function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  if (!origin) {
    // If Origin is omitted (e.g. same-origin GET/POST in some browsers or server tests), check Referer
    const referer = req.headers.get("referer");
    if (!referer) return true; // Standard safe direct client
    try {
      const refererUrl = new URL(referer);
      return refererUrl.host === host;
    } catch {
      return false;
    }
  }

  try {
    const originUrl = new URL(origin);
    if (host && originUrl.host === host) {
      return true;
    }
    // Allow local development & testing origins
    if (
      originUrl.hostname === "localhost" ||
      originUrl.hostname === "127.0.0.1" ||
      originUrl.hostname === "0.0.0.0"
    ) {
      return true;
    }
  } catch {
    return false;
  }

  return false;
}

/**
 * Securely syncs the registration record to Google Apps Script webhook with shared secret
 */
async function syncToGoogleSheet(
  payload: AppsScriptPayload,
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
      signal: AbortSignal.timeout(20000), // 20s timeout
    });

    if (!res.ok) {
      return {
        success: false,
        error: "Registration service is temporarily busy. Please try again in a few moments.",
      };
    }

    const responseText = await res.text();
    let data: { result?: string; error?: string; status?: string } | null = null;
    try {
      data = JSON.parse(responseText);
    } catch {
      // Non-JSON response
    }

    if (data && (data.result === "error" || data.status === "error" || data.status === "unauthorized")) {
      return {
        success: false,
        error: "Unable to save your registration right now. Please try again in a few moments.",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    const isTimeout = errorMsg.toLowerCase().includes("timeout");
    return {
      success: false,
      error: isTimeout
        ? "Registration request timed out. Please check your internet connection and try again."
        : "Unable to connect to the registration service. Please try again in a few moments.",
    };
  }
}


// Method Not Allowed handler for non-POST HTTP methods
function methodNotAllowed() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST." },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    }
  );
}

export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function PATCH() {
  return methodNotAllowed();
}

export async function HEAD() {
  return methodNotAllowed();
}

// POST: Rate-limited, spam-protected, validated registration submission
export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type Header Verification
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Invalid submission format. Please submit via the registration form." },
        { status: 415 }
      );
    }

    // 2. CSRF / Origin Verification
    if (!isAllowedOrigin(req)) {
      return NextResponse.json(
        { success: false, error: "Session expired. Please refresh the page and try submitting again." },
        { status: 403 }
      );
    }

    // 3. Distributed & Memory Rate Limiting by Client IP (5 requests / 10 min window)
    const clientIp = getClientIp(req);
    const rateLimit = await checkRateLimitAsync(clientIp, 5, 10 * 60 * 1000);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many registration attempts. Please wait a few minutes before trying again.",
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

    // 4. Request Body Size & Malformed JSON Protection
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, error: "Submission details are too long. Please shorten your input and try again." },
        { status: 413 }
      );
    }

    let rawBody: unknown;
    try {
      const text = await req.text();
      if (text.length > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { success: false, error: "Submission details are too long. Please shorten your input and try again." },
          { status: 413 }
        );
      }
      rawBody = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid registration data. Please refresh and try again." },
        { status: 400 }
      );
    }

    if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
      return NextResponse.json(
        { success: false, error: "Invalid registration data. Please try again." },
        { status: 400 }
      );
    }

    // 5. Validation, Sanitization, and Anti-Bot Honeypot Check
    const validation = validateRegistration(rawBody);

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
          error: firstError || "Please check your details and try again.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { tab, name, location, socialLink, followerCount } = validation.sanitizedData;

    // 6. Duplicate Submission Protection (60-second window per user)
    const dedupKey = `${clientIp}:${tab}:${name.toLowerCase()}:${socialLink.toLowerCase()}`;
    if (isDuplicateSubmission(dedupKey, 60 * 1000)) {
      return NextResponse.json({
        success: true,
        message: "Registration already received.",
      });
    }

    // 7. Server Environment Configuration Verification
    const webhookUrl = GOOGLE_SHEET_CONFIG.webhookUrl;
    const webhookSecret = GOOGLE_SHEET_CONFIG.webhookSecret;

    if (!webhookUrl || webhookUrl.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Registration service is temporarily undergoing maintenance. Please try again shortly.",
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

    // 8. Write Record to Google Sheets with Authenticated Secret
    const syncResult = await syncToGoogleSheet(
      {
        ...newRecord,
        ...(webhookSecret ? { secret: webhookSecret } : {}),
      },
      webhookUrl
    );

    if (!syncResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: syncResult.error || "Unable to save registration. Please try again shortly.",
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
    return NextResponse.json(
      { success: false, error: "Something went wrong on our end. Please try again in a few moments." },
      { status: 500 }
    );
  }
}


