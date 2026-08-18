import test from "node:test";
import assert from "node:assert/strict";
import { validateRegistration, sanitizeInput } from "../src/lib/validation.ts";

test("Unit Test: Input Sanitization", () => {
  assert.equal(sanitizeInput("  Hello <script>alert(1)</script> World  "), "Hello alert(1) World");
  assert.equal(sanitizeInput("Clean String"), "Clean String");
  assert.equal(sanitizeInput("Line\x00Break\x1FTest"), "LineBreakTest");
  assert.equal(sanitizeInput(null), "");
  assert.equal(sanitizeInput(undefined), "");
});

test("Unit Test: Influencer Registration Validation", () => {
  // Valid Influencer
  const valid = validateRegistration({
    tab: "influencer",
    name: "@travel_with_amal",
    location: "Kochi, Kerala",
    socialLink: "https://instagram.com/travel_with_amal",
    followerCount: "50k - 200k",
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.isBot, false);
  assert.equal(valid.sanitizedData.name, "@travel_with_amal");

  // Invalid Name
  const invalidName = validateRegistration({
    tab: "influencer",
    name: "!",
    location: "Kochi, Kerala",
    socialLink: "https://instagram.com/travel",
    followerCount: "Under 10k",
  });
  assert.equal(invalidName.isValid, false);
  assert.ok(invalidName.errors.name);

  // Invalid Location
  const invalidLoc = validateRegistration({
    tab: "influencer",
    name: "Amal",
    location: "",
    socialLink: "https://instagram.com/travel",
    followerCount: "Under 10k",
  });
  assert.equal(invalidLoc.isValid, false);
  assert.ok(invalidLoc.errors.location);

  // Invalid Social Link
  const invalidSocial = validateRegistration({
    tab: "influencer",
    name: "Amal",
    location: "Kochi",
    socialLink: "not a link @#$%",
    followerCount: "Under 10k",
  });
  assert.equal(invalidSocial.isValid, false);
  assert.ok(invalidSocial.errors.socialLink);
});

test("Unit Test: Brand Registration Validation", () => {
  // Valid Brand
  const valid = validateRegistration({
    tab: "brand",
    name: "Acme Media & Co.",
    location: "Bangalore, Karnataka",
    socialLink: "https://acmestudio.in",
    followerCount: "200k - 1M",
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.isBot, false);
  assert.equal(valid.sanitizedData.tab, "brand");

  // Invalid Brand Tab
  const invalidTab = validateRegistration({
    tab: "unknown",
    name: "Acme",
    location: "Bangalore",
    socialLink: "https://acme.com",
  });
  assert.equal(invalidTab.isValid, false);
  assert.ok(invalidTab.errors.tab);
});

test("Unit Test: Anti-Bot Honeypot Detection", () => {
  // Populated honeypot should flag isBot: true
  const botResult = validateRegistration({
    tab: "influencer",
    name: "SpamBot 3000",
    location: "Nowhere",
    socialLink: "https://spam.com",
    followerCount: "1M+",
    hp_website: "https://malicious-bot-link.xyz",
  });
  assert.equal(botResult.isBot, true);

  // Empty honeypot should NOT flag isBot
  const humanResult = validateRegistration({
    tab: "influencer",
    name: "@human_creator",
    location: "Kochi, Kerala",
    socialLink: "instagram.com/human_creator",
    followerCount: "Under 10k",
    hp_website: "",
  });
  assert.equal(humanResult.isBot, false);
});
