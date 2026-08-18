/**
 * Google Apps Script for Creatathon 2026 Registration Sync
 *
 * Instructions:
 * 1. Open your target Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code into `Code.gs`
 * 4. Click "Deploy" > "New deployment"
 * 5. Select Type: "Web app"
 * 6. Set "Execute as": "Me"
 * 7. Set "Who has access": "Anyone"  <-- CRITICAL!
 * 8. Click "Deploy", copy the Web App URL, and paste it into `.env` as `GOOGLE_SHEET_WEBHOOK_URL`
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.waitLock(30000); // Prevent concurrent write collisions

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    // Backend Sanitization
    function sanitize(val) {
      if (!val) return "";
      return String(val).replace(/[\x00-\x1F\x7F]/g, "").replace(/<[^>]*>?/gm, "").trim();
    }

    var timestamp = sanitize(data.Timestamp) || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var type = sanitize(data.Type);
    if (type !== "Brand" && type !== "Influencer") {
      type = "Influencer";
    }

    var name = sanitize(data["Name / Brand"]);
    var location = sanitize(data.Location);
    var socialLink = sanitize(data["Social Link / Website"]);
    var followers = sanitize(data["Audience / Followers"]) || "Under 10k";

    // Backend Regex Validations
    var nameRegex = type === "Brand" ? /^[\p{L}\p{N}\s_.,&'()+/#\-]{2,100}$/u : /^@?[\p{L}\p{N}\s_.\-']{2,60}$/u;
    var locationRegex = /^[\p{L}\p{N}\s,.'()/\-]{2,100}$/u;
    var socialRegex = /^(https?:\/\/)?((([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,})|(@[a-zA-Z0-9_.]{2,30}))(\/[^\s<>"']*)?$/i;

    if (!name || !nameRegex.test(name)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", error: "Invalid Name/Handle format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (!location || !locationRegex.test(location)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", error: "Invalid Location format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (!socialLink || !socialRegex.test(socialLink)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", error: "Invalid Social Link or Website format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var row = [timestamp, type, name, location, socialLink, followers];

    // 1. Master Sheet: All Registrations
    var allSheet = ss.getSheetByName("All Registrations") || ss.getActiveSheet();
    if (allSheet.getLastRow() === 0) {
      allSheet.appendRow(["Timestamp", "Type", "Name / Brand", "Location", "Social Link / Website", "Audience / Followers"]);
      allSheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#FFD200");
    }
    allSheet.appendRow(row);

    // 2. Specific Sheet: Influencers or Brands
    var targetSheetName = type === "Brand" ? "Brands" : "Influencers";
    var targetSheet = ss.getSheetByName(targetSheetName);
    if (!targetSheet) {
      targetSheet = ss.insertSheet(targetSheetName);
      targetSheet.appendRow(["Timestamp", "Type", "Name / Brand", "Location", "Social Link / Website", "Audience / Followers"]);
      targetSheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground(type === "Brand" ? "#FF0052" : "#0054D9").setFontColor("#FFFFFF");
    }
    targetSheet.appendRow(row);

    lock.releaseLock();

    return ContentService.createTextOutput(JSON.stringify({ result: "success", row: row }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
