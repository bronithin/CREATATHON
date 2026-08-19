import test from "node:test";
import assert from "node:assert/strict";
import {
  checkRateLimit,
  checkRateLimitAsync,
  isDuplicateSubmission,
  normalizeIp,
  getClientIp,
} from "../src/lib/rateLimit.ts";

test("Unit Test: IP Address Normalization & Validation", () => {
  // Valid IPv4
  assert.equal(normalizeIp("192.168.1.1"), "192.168.1.1");
  assert.equal(normalizeIp("  203.0.113.195  "), "203.0.113.195");
  assert.equal(normalizeIp("10.0.0.1:8080"), "10.0.0.1");

  // IPv4-mapped IPv6
  assert.equal(normalizeIp("::ffff:192.0.2.1"), "192.0.2.1");

  // Valid IPv6
  assert.equal(normalizeIp("2001:0db8:85a3:0000:0000:8a2e:0370:7334"), "2001:0db8:85a3:0000:0000:8a2e:0370:7334");
  assert.equal(normalizeIp("[2001:db8::1]:443"), "2001:db8::1");

  // Invalid / Malformed IP strings
  assert.equal(normalizeIp("not-an-ip"), null);
  assert.equal(normalizeIp("999.999.999.999"), null);
  assert.equal(normalizeIp(""), null);
  assert.equal(normalizeIp(null), null);
  assert.equal(normalizeIp(undefined), null);
});

test("Unit Test: Client IP Extraction Priority & Spoofing Guard", () => {
  // Helper to create mock NextRequest-like object
  const createMockReq = (headersObj) => ({
    headers: {
      get: (key) => headersObj[key.toLowerCase()] || null,
    },
  });

  // 1. Vercel trusted header takes priority
  const vercelReq = createMockReq({
    "x-vercel-forwarded-for": "198.51.100.5",
    "x-forwarded-for": "1.2.3.4, 5.6.7.8",
    "cf-connecting-ip": "9.10.11.12",
  });
  assert.equal(getClientIp(vercelReq), "198.51.100.5");

  // 2. Cloudflare trusted header
  const cfReq = createMockReq({
    "cf-connecting-ip": "203.0.113.50",
    "x-forwarded-for": "1.1.1.1",
  });
  assert.equal(getClientIp(cfReq), "203.0.113.50");

  // 3. Fallback when headers missing or malformed
  const emptyReq = createMockReq({});
  assert.equal(getClientIp(emptyReq), "127.0.0.1");

  const spoofReq = createMockReq({
    "x-forwarded-for": "invalid-ip-string",
  });
  assert.equal(getClientIp(spoofReq), "127.0.0.1");
});

test("Unit Test: Sliding Window Rate Limiter (Sync & Async)", async () => {
  const testIp = "192.168.1.100";
  const limit = 3;
  const windowMs = 60000;

  // 1st request
  const r1 = await checkRateLimitAsync(testIp, limit, windowMs);
  assert.equal(r1.success, true);
  assert.equal(r1.remaining, 2);

  // 2nd request
  const r2 = await checkRateLimitAsync(testIp, limit, windowMs);
  assert.equal(r2.success, true);
  assert.equal(r2.remaining, 1);

  // 3rd request (hits limit)
  const r3 = await checkRateLimitAsync(testIp, limit, windowMs);
  assert.equal(r3.success, true);
  assert.equal(r3.remaining, 0);

  // 4th request (exceeded -> blocked)
  const r4 = await checkRateLimitAsync(testIp, limit, windowMs);
  assert.equal(r4.success, false);
  assert.equal(r4.remaining, 0);
  assert.ok(r4.resetSeconds > 0);

  // Different IP should not be blocked
  const rOther = checkRateLimit("192.168.1.101", limit, windowMs);
  assert.equal(rOther.success, true);
});

test("Unit Test: Duplicate Submission Protection", () => {
  const submissionKey = "ip:influencer:testcreator:instagram.com/test";

  // First submission is not a duplicate
  const isDup1 = isDuplicateSubmission(submissionKey, 5000);
  assert.equal(isDup1, false);

  // Immediate repeat submission is detected as duplicate
  const isDup2 = isDuplicateSubmission(submissionKey, 5000);
  assert.equal(isDup2, true);
});

