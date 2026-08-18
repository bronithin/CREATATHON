import test from "node:test";
import assert from "node:assert/strict";
import { checkRateLimit, isDuplicateSubmission } from "../src/lib/rateLimit.ts";

test("Unit Test: Sliding Window Rate Limiter", () => {
  const testIp = "192.168.1.100";
  const limit = 3;
  const windowMs = 60000;

  // 1st request
  const r1 = checkRateLimit(testIp, limit, windowMs);
  assert.equal(r1.success, true);
  assert.equal(r1.remaining, 2);

  // 2nd request
  const r2 = checkRateLimit(testIp, limit, windowMs);
  assert.equal(r2.success, true);
  assert.equal(r2.remaining, 1);

  // 3rd request (hits limit)
  const r3 = checkRateLimit(testIp, limit, windowMs);
  assert.equal(r3.success, true);
  assert.equal(r3.remaining, 0);

  // 4th request (exceeded -> blocked)
  const r4 = checkRateLimit(testIp, limit, windowMs);
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
