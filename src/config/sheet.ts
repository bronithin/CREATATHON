/**
 * Google Sheet & Admin Configuration Module (Server-Side Only)
 *
 * Reads values exclusively from server environment variables (.env / .env.local):
 * - GOOGLE_SHEET_URL
 * - GOOGLE_SHEET_ID
 * - GOOGLE_SHEET_WEBHOOK_URL
 * - GOOGLE_SHEET_WEBHOOK_SECRET / WEBHOOK_SECRET
 * - ADMIN_MAIL / ADMIN_EMAIL
 */

function extractSheetId(urlOrId: string): string {
  if (!urlOrId) return "";
  const match = urlOrId.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : urlOrId;
}

export const GOOGLE_SHEET_CONFIG = {
  get sheetUrl(): string {
    return process.env.GOOGLE_SHEET_URL?.trim() || "";
  },

  get sheetId(): string {
    if (process.env.GOOGLE_SHEET_ID?.trim()) {
      return process.env.GOOGLE_SHEET_ID.trim();
    }
    return extractSheetId(this.sheetUrl);
  },

  /**
   * Secure server-side webhook URL only.
   * No fallback to any client-exposed NEXT_PUBLIC_ variable.
   */
  get webhookUrl(): string {
    return process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim() || "";
  },

  /**
   * Shared secret for authenticating with Google Apps Script doPost webhook
   */
  get webhookSecret(): string {
    return (
      process.env.GOOGLE_SHEET_WEBHOOK_SECRET?.trim() ||
      process.env.WEBHOOK_SECRET?.trim() ||
      ""
    );
  },

  /**
   * Administrator recipient email for registration alerts.
   * Configured on the server side / Apps Script properties.
   */
  get adminMail(): string {
    return (
      process.env.ADMIN_MAIL?.trim() ||
      process.env.ADMIN_EMAIL?.trim() ||
      ""
    );
  },

  /**
   * Checks whether the necessary server-side configuration is active
   */
  get isConfigured(): boolean {
    return Boolean(this.webhookUrl && this.webhookUrl.length > 0);
  },
};

