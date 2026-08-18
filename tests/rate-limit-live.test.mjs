import test from "node:test";
import assert from "node:assert/strict";

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:3000";

test("Live Rate Limiting Protection Test", async () => {
  // Use a custom IP header or sequential requests to verify 429 on exhaustion
  const results = [];
  const testIp = "203.0.113." + Math.floor(Math.random() * 200 + 1);

  for (let i = 1; i <= 6; i++) {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": testIp,
      },
      body: JSON.stringify({
        tab: "influencer",
        name: `@creator_ratetest_${i}`,
        location: "Kochi, Kerala",
        socialLink: `https://instagram.com/creator_${i}`,
        followerCount: "Under 10k",
        hp_website: "bot", // trigger honeypot so we don't spam Google Sheets
      }),
    });

    results.push({
      attempt: i,
      status: res.status,
      retryAfter: res.headers.get("retry-after"),
      rateLimitLimit: res.headers.get("x-ratelimit-limit"),
      rateLimitRemaining: res.headers.get("x-ratelimit-remaining"),
    });
  }

  // First 5 attempts must succeed (status 200 from honeypot)
  for (let i = 0; i < 5; i++) {
    assert.equal(results[i].status, 200, `Attempt ${i + 1} should have succeeded`);
  }

  // 6th attempt must be blocked with HTTP 429 and Retry-After
  const blocked = results[5];
  assert.equal(blocked.status, 429, "6th attempt should be rate limited (429)");
  assert.ok(blocked.retryAfter, "Expected Retry-After header on 429 response");
  assert.equal(blocked.rateLimitRemaining, "0");
});
