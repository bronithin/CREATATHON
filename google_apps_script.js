/**
 * Google Apps Script for Creatathon 2026 Registration Sync & Instant Admin Email Alerts
 *
 * ==============================================================================
 * ONE-TIME SETUP & AUTHORIZATION INSTRUCTIONS:
 * ==============================================================================
 * 1. Open your target Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1o9nypcXxpjMYTYPZE5mEcMzYoMZBJGULFMv2d-we6bk/edit
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Replace all code in `Code.gs` with this file's code and click Save (💾).
 * 
 * 4. IMPORTANT - GRANT EMAIL PERMISSION (One-Time Step):
 *    - In the top toolbar, select the function "testAdminEmail" from the dropdown.
 *    - Click "Run" (▶️).
 *    - A popup titled "Authorization required" will appear.
 *    - Click "Review permissions" -> Select your Google Account.
 *    - Click "Advanced" (at bottom left of popup) -> Click "Go to Creatathon (unsafe)".
 *    - Click "Allow".
 *
 * 5. DEPLOY AS WEB APP:
 *    - Click "Deploy" > "Manage deployments".
 *    - Click the Edit (pencil) icon on your active deployment.
 *    - Under "Version", select "New version".
 *    - Ensure "Execute as" is "Me" and "Who has access" is "Anyone".
 *    - Click "Deploy" > "Done".
 * ==============================================================================
 */

// Fallback admin email if not provided in payload (set in script properties or via payload)
var DEFAULT_ADMIN_EMAIL = "";

/**
 * Run this function once inside Google Apps Script to authorize email sending!
 */
function testAdminEmail() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetEmail = DEFAULT_ADMIN_EMAIL || Session.getActiveUser().getEmail();
  if (!targetEmail) {
    Logger.log("⚠️ No admin email configured. Skipping test email.");
    return;
  }
  sendAdminNotificationEmail(
    {
      registrationId: "CRT1000",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      type: "Influencer",
      name: "@test_creator_sample",
      location: "Kochi, Kerala",
      socialLink: "https://instagram.com/test_creator_sample",
      followers: "50k - 200k"
    },
    targetEmail,
    ss.getUrl()
  );
  Logger.log("✅ Test email sent successfully to " + targetEmail);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // Wait up to 10s to acquire lock

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    // Backend Sanitization
    function sanitize(val) {
      if (!val) return "";
      return String(val).replace(/[\x00-\x1F\x7F]/g, "").replace(/<[^>]*>?/gm, "").trim();
    }

    var allSheet = ss.getSheetByName("All Registrations") || ss.getActiveSheet();
    var fallbackId = "CRT" + (1000 + (allSheet.getLastRow() > 0 ? allSheet.getLastRow() : 0));
    var registrationId = sanitize(data["Registration ID"] || data.id) || fallbackId;

    var timestamp = sanitize(data.Timestamp) || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var type = sanitize(data.Type);
    if (type !== "Brand" && type !== "Influencer") {
      type = "Influencer";
    }

    var name = sanitize(data["Name / Brand"]);
    var location = sanitize(data.Location);
    var socialLink = sanitize(data["Social Link / Website"]);
    var followers = sanitize(data["Audience / Followers"]) || "Under 10k";
    var adminEmail = sanitize(data.adminEmail) || DEFAULT_ADMIN_EMAIL;

    // Backend Regex Validations
    var nameRegex = type === "Brand" ? /^[\p{L}\p{N}\s_.,&'()+/#\-]{2,100}$/u : /^@?[\p{L}\p{N}\s_.\-']{2,60}$/u;
    var locationRegex = /^[\p{L}\p{N}\s,.'()/\-]{2,100}$/u;
    var socialRegex = /^(https?:\/\/)?((([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,})|(@[a-zA-Z0-9_.]{2,30}))(\/[^\s<>"']*)?$/i;

    if (!name || !nameRegex.test(name)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", status: "error", error: "Invalid Name/Handle format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (!location || !locationRegex.test(location)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", status: "error", error: "Invalid Location format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (!socialLink || !socialRegex.test(socialLink)) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", status: "error", error: "Invalid Social Link or Website format." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var row = [registrationId, timestamp, type, name, location, socialLink, followers];

    // 1. Master Sheet: All Registrations
    if (allSheet.getLastRow() === 0) {
      allSheet.appendRow(["Registration ID", "Timestamp", "Type", "Name / Brand", "Location", "Social Link / Website", "Audience / Followers"]);
      allSheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#FFD200");
    }
    allSheet.appendRow(row);

    // 2. Specific Sheet: Influencers or Brands
    var targetSheetName = type === "Brand" ? "Brands" : "Influencers";
    var targetSheet = ss.getSheetByName(targetSheetName);
    if (!targetSheet) {
      targetSheet = ss.insertSheet(targetSheetName);
      targetSheet.appendRow(["Registration ID", "Timestamp", "Type", "Name / Brand", "Location", "Social Link / Website", "Audience / Followers"]);
      targetSheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground(type === "Brand" ? "#FF0052" : "#0054D9").setFontColor("#FFFFFF");
    }
    targetSheet.appendRow(row);

    // 3. Send Notification Email to Admin
    var emailSent = false;
    var emailError = null;
    try {
      sendAdminNotificationEmail(
        {
          registrationId: registrationId,
          timestamp: timestamp,
          type: type,
          name: name,
          location: location,
          socialLink: socialLink,
          followers: followers,
        },
        adminEmail,
        ss.getUrl()
      );
      emailSent = true;
    } catch (mailErr) {
      emailError = mailErr.toString();
      console.warn("Could not send admin email:", emailError);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        status: "success",
        registrationId: registrationId,
        row: row,
        emailSent: emailSent,
        emailError: emailError,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    try {
      lock.releaseLock();
    } catch (e) { }
  }
}

/**
 * Sends a rich, responsive HTML email notification to the Admin
 */
function sendAdminNotificationEmail(record, adminEmail, sheetUrl) {
  if (!adminEmail) return;

  var isBrand = record.type === "Brand";
  var typeColor = isBrand ? "#FF0052" : "#0054D9";
  var typeBadgeBg = isBrand ? "#FFE5EC" : "#E8F1FF";
  var subject = "🔥 [Creatathon 2026] [" + record.registrationId + "] New " + record.type + " Registration: " + record.name;

  var socialHref = record.socialLink;
  if (!socialHref.startsWith("http://") && !socialHref.startsWith("https://")) {
    if (socialHref.startsWith("@")) {
      socialHref = "https://instagram.com/" + socialHref.substring(1);
    } else {
      socialHref = "https://" + socialHref;
    }
  }

  var htmlBody =
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '  <meta charset="utf-8">' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '  <title>New Registration - Creatathon 2026</title>' +
    '</head>' +
    '<body style="margin: 0; padding: 0; background-color: #F4F4F5; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #18181B;">' +
    '  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 30px auto; background-color: #FFFFFF; border: 3px solid #18181B; border-radius: 16px; overflow: hidden; box-shadow: 6px 6px 0px #18181B;">' +
    '    <!-- Header -->' +
    '    <tr>' +
    '      <td style="background-color: #0054D9; padding: 28px 24px; text-align: center; border-bottom: 3px solid #18181B;">' +
    '        <span style="color: #FFD200; font-size: 13px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; display: block; margin-bottom: 6px;">' +
    '          CREATATHON 2026' +
    '        </span>' +
    '        <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">' +
    '          New Registration Received! 🚀' +
    '        </h1>' +
    '      </td>' +
    '    </tr>' +
    '    <!-- Content -->' +
    '    <tr>' +
    '      <td style="padding: 28px 24px;">' +
    '        <!-- Badge -->' +
    '        <div style="text-align: center; margin-bottom: 20px;">' +
    '          <span style="display: inline-block; padding: 6px 16px; background-color: ' + typeBadgeBg + '; color: ' + typeColor + '; border: 2px solid ' + typeColor + '; border-radius: 20px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">' +
    (isBrand ? '🏢 Brand / Company' : '✨ Creator / Influencer') +
    '          </span>' +
    '        </div>' +
    '        <p style="font-size: 15px; line-height: 1.5; color: #3F3F46; text-align: center; margin: 0 0 24px 0;">' +
    '          A new registration has arrived for <strong>Creatathon 2026</strong>. Here are the participant details:' +
    '        </p>' +
    '        <!-- Details Box -->' +
    '        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FDF9EB; border: 2px solid #18181B; border-radius: 12px; margin-bottom: 24px;">' +
    '          <tr>' +
    '            <td style="padding: 16px 20px;">' +
    '              <table border="0" cellpadding="8" cellspacing="0" width="100%" style="font-size: 14px;">' +
    '                <tr>' +
    '                  <td width="38%" style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    '                    Registration ID' +
    '                  </td>' +
    '                  <td style="font-weight: 900; color: #FF0052; font-size: 16px; border-bottom: 1px dashed #E4E4E7; font-family: monospace;">' +
    record.registrationId +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    (isBrand ? 'Company Name' : 'Creator / Handle') +
    '                  </td>' +
    '                  <td style="font-weight: 800; color: #18181B; font-size: 15px; border-bottom: 1px dashed #E4E4E7;">' +
    record.name +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    '                    Category' +
    '                  </td>' +
    '                  <td style="font-weight: 700; color: ' + typeColor + '; border-bottom: 1px dashed #E4E4E7;">' +
    record.type +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    '                    Location' +
    '                  </td>' +
    '                  <td style="font-weight: 600; color: #18181B; border-bottom: 1px dashed #E4E4E7;">' +
    record.location +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    '                    Social / Website' +
    '                  </td>' +
    '                  <td style="font-weight: 600; color: #0054D9; border-bottom: 1px dashed #E4E4E7; word-break: break-all;">' +
    '                    <a href="' + socialHref + '" target="_blank" style="color: #0054D9; text-decoration: underline;">' +
    record.socialLink +
    '                    </a>' +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px dashed #E4E4E7;">' +
    (isBrand ? 'Target Audience' : 'Follower Count') +
    '                  </td>' +
    '                  <td style="font-weight: 700; color: #18181B; border-bottom: 1px dashed #E4E4E7;">' +
    record.followers +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">' +
    '                    Registered At' +
    '                  </td>' +
    '                  <td style="font-weight: 600; color: #52525B;">' +
    record.timestamp +
    '                  </td>' +
    '                </tr>' +
    '              </table>' +
    '            </td>' +
    '          </tr>' +
    '        </table>' +
    '        <!-- Action Button -->' +
    '        <div style="text-align: center; margin: 24px 0 10px 0;">' +
    '          <a href="' + sheetUrl + '" target="_blank" style="display: inline-block; background-color: #FFD300; color: #18181B; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 24px; text-decoration: none; border-radius: 30px; border: 2px solid #18181B; box-shadow: 3px 3px 0px #18181B;">' +
    '            📊 Open Google Sheet &rarr;' +
    '          </a>' +
    '        </div>' +
    '      </td>' +
    '    </tr>' +
    '    <!-- Footer -->' +
    '    <tr>' +
    '      <td style="background-color: #F4F4F5; padding: 16px 24px; text-align: center; border-top: 2px solid #E4E4E7;">' +
    '        <p style="font-size: 12px; color: #71717A; margin: 0;">' +
    '          Creatathon 2026 Admin Notification &bull; ID: ' + record.registrationId +
    '        </p>' +
    '      </td>' +
    '    </tr>' +
    '  </table>' +
    '</body>' +
    '</html>';

  var plainBody =
    "🚀 NEW CREATATHON 2026 REGISTRATION\n\n" +
    "Registration ID: " + record.registrationId + "\n" +
    "Type: " + record.type + "\n" +
    "Name / Brand: " + record.name + "\n" +
    "Location: " + record.location + "\n" +
    "Social / Website: " + record.socialLink + "\n" +
    "Audience / Followers: " + record.followers + "\n" +
    "Time: " + record.timestamp + "\n\n" +
    "Open Google Sheet: " + sheetUrl;

  MailApp.sendEmail({
    to: adminEmail,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
    name: "Creatathon 2026"
  });
}
