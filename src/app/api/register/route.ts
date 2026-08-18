import { NextRequest, NextResponse, after } from "next/server";
import { GOOGLE_SHEET_CONFIG } from "@/config/sheet";
import { validateRegistration } from "@/lib/validation";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface RegistrationRecord {
  Timestamp: string;
  Type: "Influencer" | "Brand";
  "Name / Brand": string;
  Location: string;
  "Social Link / Website": string;
  "Audience / Followers": string;
}

/**
 * Background worker to sync the registration record to Google Sheet
 */
async function syncToGoogleSheet(record: RegistrationRecord, webhookUrl: string) {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(record),
      redirect: "follow",
    });

    if (!res.ok) {
      console.warn("Google Sheet Webhook returned non-ok status:", res.status);
    } else {
      console.log(`✅ [Google Sheet] Synced record for "${record["Name / Brand"]}"`);
    }
  } catch (err) {
    console.error("❌ [Google Sheet] Error syncing record:", err);
  }
}

// POST: Validate and instantly respond to client while syncing to Google Sheet in background
export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    // Backend validation with regex & sanitization (< 1ms)
    const validation = validateRegistration(body);
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

    const { tab, name, location, socialLink, followerCount } =
      validation.sanitizedData;

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

    const webhookUrl = GOOGLE_SHEET_CONFIG.webhookUrl;

    if (webhookUrl && webhookUrl.trim().length > 0) {
      // Execute background sync without holding up the user's HTTP request
      after(async () => {
        await syncToGoogleSheet(newRecord, webhookUrl);
      });
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set in environment variables.");
    }

    // Return instant 200 OK to the client in milliseconds
    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully.",
      record: newRecord,
    });
  } catch (error) {
    console.error("API /api/register error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error saving registration." },
      { status: 500 }
    );
  }
}
