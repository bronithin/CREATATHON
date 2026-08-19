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

    var row = [timestamp, type, name, location, socialLink, followers];

    // 1. Master Sheet: All Registrations
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

    // 3. Send Notification Email to Admin
    var emailSent = false;
    var emailError = null;
    try {
      sendAdminNotificationEmail(
        {
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
 * Sends a rich, responsive Neo-Brutalist HTML email notification to the Admin
 */
function sendAdminNotificationEmail(record, adminEmail, sheetUrl) {
  if (!adminEmail) return;

  var isBrand = record.type === "Brand";
  var badgeColor = isBrand ? "#FF0052" : "#0054D9";
  var badgeText = isBrand ? "🏢 BRAND / COMPANY" : "✨ CREATOR / INFLUENCER";
  var subject = "🔥 [Creatathon 2026] New " + record.type + ": " + record.name;

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
    '<body style="margin: 0; padding: 24px 12px; background-color: #F6F3E7; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #18181B; -webkit-font-smoothing: antialiased;">' +
    '  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; margin: 0 auto; background-color: #FFFFFF; border: 3px solid #18181B; border-radius: 18px; overflow: hidden; box-shadow: 6px 6px 0px #18181B;">' +
    
    '    <!-- 1. Top Pink Festival Marquee Bar -->' +
    '    <tr>' +
    '      <td style="background-color: #FF0052; padding: 8px 16px; text-align: center; border-bottom: 2px solid #18181B;">' +
    '        <span style="color: #FFFFFF; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block;">' +
    '          🎪 KERALA\'S FIRST CREATOR FESTIVAL &bull; KOCHI 2026' +
    '        </span>' +
    '      </td>' +
    '    </tr>' +

    '    <!-- 2. Hero Yellow Banner -->' +
    '    <tr>' +
    '      <td style="background-color: #FCD60B; padding: 26px 20px 22px 20px; text-align: center; border-bottom: 3px solid #18181B;">' +
    '        <div style="display: inline-block; background-color: #18181B; color: #FCD60B; font-size: 11px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 6px; margin-bottom: 8px;">' +
    '          ⚡ ADMIN DISPATCH ⚡' +
    '        </div>' +
    '        <h1 style="color: #18181B; font-size: 26px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.1;">' +
    '          NEW REGISTRATION RECEIVED!' +
    '        </h1>' +
    '      </td>' +
    '    </tr>' +

    '    <!-- 3. Main Content Area -->' +
    '    <tr>' +
    '      <td style="padding: 24px 20px 20px 20px;">' +

    '        <!-- Type Badge -->' +
    '        <div style="text-align: center; margin-bottom: 16px;">' +
    '          <span style="display: inline-block; padding: 6px 16px; background-color: ' + badgeColor + '; color: #FFFFFF; border: 2px solid #18181B; border-radius: 999px; font-size: 12px; font-weight: 800; letter-spacing: 1px; box-shadow: 2px 2px 0px #18181B;">' +
    badgeText +
    '          </span>' +
    '        </div>' +

    '        <!-- Participant Details Card -->' +
    '        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFDF5; border: 2.5px solid #18181B; border-radius: 14px; box-shadow: 4px 4px 0px #18181B; margin-bottom: 22px;">' +
    '          <tr>' +
    '            <td style="padding: 18px 20px;">' +

    '              <!-- Name Header -->' +
    '              <div style="border-bottom: 2px dashed #E4E4E7; padding-bottom: 12px; margin-bottom: 12px;">' +
    '                <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #71717A; display: block; margin-bottom: 2px;">' +
    (isBrand ? 'BRAND / COMPANY NAME' : 'CREATOR HANDLE') +
    '                </span>' +
    '                <span style="font-size: 20px; font-weight: 900; color: #18181B; display: block; word-break: break-word;">' +
    record.name +
    '                </span>' +
    '              </div>' +

    '              <!-- Detail Rows -->' +
    '              <table border="0" cellpadding="6" cellspacing="0" width="100%" style="font-size: 13px;">' +
    '                <tr>' +
    '                  <td width="35%" style="color: #71717A; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">' +
    '                    📍 Location' +
    '                  </td>' +
    '                  <td style="font-weight: 700; color: #18181B;">' +
    record.location +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">' +
    (isBrand ? '🎯 Audience Reach' : '👥 Follower Tier') +
    '                  </td>' +
    '                  <td style="font-weight: 700; color: #18181B;">' +
    '                    <span style="display: inline-block; background-color: #FCD60B; color: #18181B; padding: 2px 8px; border: 1.5px solid #18181B; border-radius: 6px; font-size: 12px; font-weight: 800;">' +
    record.followers +
    '                    </span>' +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">' +
    '                    🔗 Profile / Link' +
    '                  </td>' +
    '                  <td style="font-weight: 700; word-break: break-all;">' +
    '                    <a href="' + socialHref + '" target="_blank" style="color: #0054D9; text-decoration: underline; font-weight: 800;">' +
    record.socialLink + ' &rarr;' +
    '                    </a>' +
    '                  </td>' +
    '                </tr>' +
    '                <tr>' +
    '                  <td style="color: #71717A; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">' +
    '                    🕒 Submitted At' +
    '                  </td>' +
    '                  <td style="font-weight: 600; color: #52525B; font-size: 12px;">' +
    record.timestamp +
    '                  </td>' +
    '                </tr>' +
    '              </table>' +

    '            </td>' +
    '          </tr>' +
    '        </table>' +

    '        <!-- Primary CTA Button -->' +
    '        <div style="text-align: center; margin: 10px 0 14px 0;">' +
    '          <a href="' + sheetUrl + '" target="_blank" style="display: inline-block; background-color: #FCD60B; color: #18181B; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; padding: 14px 28px; text-decoration: none; border-radius: 12px; border: 2.5px solid #18181B; box-shadow: 4px 4px 0px #18181B;">' +
    '            📊 OPEN GOOGLE SHEET &rarr;' +
    '          </a>' +
    '        </div>' +

    '      </td>' +
    '    </tr>' +

    '    <!-- 4. Footer -->' +
    '    <tr>' +
    '      <td style="background-color: #F6F3E7; padding: 14px 16px; text-align: center; border-top: 2.5px solid #18181B;">' +
    '        <p style="font-size: 11px; font-weight: 700; color: #71717A; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">' +
    '          CREATATHON 2026 &bull; KOCHI, KERALA &bull; ADMIN NOTIFICATION' +
    '        </p>' +
    '      </td>' +
    '    </tr>' +

    '  </table>' +
    '</body>' +
    '</html>';

  var plainBody =
    "🚀 NEW CREATATHON 2026 REGISTRATION\n\n" +
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
