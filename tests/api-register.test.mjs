import test from "node:test";
import assert from "node:assert/strict";

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:3000";

test("Registration System Security & Validation Integration Suite", async (t) => {
  await t.test("1. POST /api/register - Valid registration", async () => {
    const payload = {
      tab: "influencer",
      name: "@test_creator_" + Date.now(),
      location: "Kochi, Kerala",
      socialLink: "https://instagram.com/test_creator",
      followerCount: "50k - 200k",
      hp_website: "",
    };

    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "10.0.1.1",
      },
      body: JSON.stringify(payload),
    });

    // Accept 200 (if webhook configured), 502/503 (if in test without live webhook credentials)
    assert.ok([200, 502, 503].includes(res.status), `Unexpected status: ${res.status}`);
    const json = await res.json();
    if (res.status === 200) {
      assert.equal(json.success, true);
      assert.ok(json.record, "Expected record in response");
    }
  });

  await t.test("2. POST /api/register - Validation error on missing required fields", async () => {
    const payload = {
      tab: "influencer",
      name: "",
      location: "",
      socialLink: "",
    };

    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "10.0.1.2",
      },
      body: JSON.stringify(payload),
    });

    assert.equal(res.status, 400, "Expected 400 for empty fields");
    const json = await res.json();
    assert.equal(json.success, false);
    assert.ok(json.errors, "Expected errors object in response");
    assert.ok(json.errors.name, "Expected name error");
  });

  await t.test("3. POST /api/register - Regex validation for invalid social link", async () => {
    const payload = {
      tab: "influencer",
      name: "@valid_user",
      location: "Kochi, Kerala",
      socialLink: "not a valid url or handle @@@",
      followerCount: "Under 10k",
    };

    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "10.0.1.3",
      },
      body: JSON.stringify(payload),
    });

    assert.equal(res.status, 400, "Expected 400 for invalid social link");
    const json = await res.json();
    assert.equal(json.success, false);
    assert.ok(json.errors.socialLink, "Expected socialLink error");
  });

  await t.test("4. Anti-Bot Honeypot: POST /api/register with filled honeypot should silently return success", async () => {
    const payload = {
      tab: "influencer",
      name: "@spambot",
      location: "Bot City",
      socialLink: "https://spam.com",
      followerCount: "Under 10k",
      hp_website: "http://hidden-bot-link.com",
    };

    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "10.0.1.4",
      },
      body: JSON.stringify(payload),
    });

    assert.equal(res.status, 200, "Honeypot should silently return 200 OK without triggering backend webhook");
    const json = await res.json();
    assert.equal(json.success, true);
  });

  await t.test("5. Security Check: GET /api/register should be blocked (405 Method Not Allowed)", async () => {
    const res = await fetch(`${BASE_URL}/api/register`);
    assert.equal(res.status, 405, "GET /api/register must not be permitted");
  });

  await t.test("6. Security Headers Verification on Home Page", async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.equal(res.status, 200);

    // Verify X-Powered-By is disabled
    assert.equal(res.headers.get("x-powered-by"), null, "X-Powered-By header should be removed");

    // Verify essential security headers
    assert.equal(res.headers.get("x-content-type-options"), "nosniff");
    assert.equal(res.headers.get("x-frame-options"), "DENY");
    assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert.ok(res.headers.get("permissions-policy"));
    assert.ok(res.headers.get("content-security-policy"));
  });

  await t.test("7. Permanent Redirect Check: /terms-and-conditions -> /terms", async () => {
    const res = await fetch(`${BASE_URL}/terms-and-conditions`, {
      redirect: "manual",
    });

    assert.equal(res.status, 308, "Expected HTTP 308 Permanent Redirect for /terms-and-conditions");
    const location = res.headers.get("location");
    assert.ok(location?.endsWith("/terms"), `Expected redirect to /terms, got ${location}`);
  });
});
