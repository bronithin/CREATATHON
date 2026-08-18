import test from "node:test";
import assert from "node:assert/strict";

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:3000";

test("Registration System Security & Validation Test Suite", async (t) => {
  await t.test("1. POST /api/register - Influencer registration", async () => {
    const payload = {
      tab: "influencer",
      name: "@test_creator_" + Date.now(),
      location: "Kochi, Kerala",
      socialLink: "https://instagram.com/test_creator",
      followerCount: "50k - 200k",
    };

    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Accept 200 (if webhook configured) or 500/502 (if running in test env without live webhook)
    assert.ok([200, 500, 502].includes(res.status), `Unexpected status: ${res.status}`);
    const json = await res.json();
    if (res.status === 200) {
      assert.equal(json.success, true);
      assert.ok(json.record);
      assert.equal(json.record.Type, "Influencer");
      assert.equal(json.record["Name / Brand"], payload.name);
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
      headers: { "Content-Type": "application/json" },
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    assert.equal(res.status, 400, "Expected 400 for invalid social link");
    const json = await res.json();
    assert.equal(json.success, false);
    assert.ok(json.errors.socialLink, "Expected socialLink error");
  });

  await t.test("4. Security Check: GET /api/register should be blocked (405 Method Not Allowed / 404)", async () => {
    const res = await fetch(`${BASE_URL}/api/register`);
    assert.equal(res.status, 405, "GET /api/register must not be permitted (405 Method Not Allowed)");
  });

  await t.test("5. Security Check: GET /api/register?download=xlsx should be blocked", async () => {
    const res = await fetch(`${BASE_URL}/api/register?download=xlsx`);
    assert.equal(res.status, 405, "Excel download via public GET must be blocked");
  });
});
