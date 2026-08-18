/**
 * Google Sheet Configuration Module
 *
 * Reads values from .env / .env.local:
 * - GOOGLE_SHEET_URL
 * - GOOGLE_SHEET_ID
 * - GOOGLE_SHEET_WEBHOOK_URL
 *
 * If you ever change the sheet in the future, you only need to change
 * the variables in your `.env` or `.env.local` file!
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

  get webhookUrl(): string {
    return (
      process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim() ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL?.trim() ||
      ""
    );
  },
};
