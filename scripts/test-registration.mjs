/**
 * Creatathon 2026 - Registration Test Script
 *
 * Runs a live test submission to verify:
 * 1. API endpoint `/api/register`
 * 2. Google Sheet Webhook connectivity
 *
 * Usage:
 *   node scripts/test-registration.mjs
 *   node scripts/test-registration.mjs brand
 */

const typeArg = process.argv[2]?.toLowerCase() === "brand" ? "brand" : "influencer";
const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:3000";

const testPayload =
  typeArg === "brand"
    ? {
        tab: "brand",
        name: "Acme Media Studio",
        location: "Kochi, Kerala",
        socialLink: "https://acmestudio.in",
        followerCount: "200k - 1M",
      }
    : {
        tab: "influencer",
        name: "@kerala_vlogger",
        location: "Ernakulam, Kerala",
        socialLink: "https://instagram.com/kerala_vlogger",
        followerCount: "50k - 200k",
      };

console.log("\n=======================================================");
console.log("🚀 CREATATHON 2026 - REGISTRATION TEST");
console.log("=======================================================");
console.log(`Target URL: ${BASE_URL}/api/register`);
console.log(`Submitting as: ${testPayload.tab.toUpperCase()}`);
console.log("Payload:", JSON.stringify(testPayload, null, 2));
console.log("-------------------------------------------------------");

async function run() {
  try {
    const startTime = Date.now();
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testPayload),
    });

    const elapsed = Date.now() - startTime;
    const data = await res.json();

    if (res.ok && data.success) {
      console.log(`✅ [${res.status} OK] Submission Successful (${elapsed}ms)!`);
      console.log("\n📊 Server Response:");
      console.log(`- Message: ${data.message}`);
      console.log("- Saved Record:", data.record);
      console.log("\n✨ Test completed successfully! Data sent to Google Sheet.\n");
    } else {
      console.error(`❌ [${res.status} Error] Submission Failed:`, data);
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Failed to connect to server:", err.message);
    console.error(`Ensure your dev server is running on ${BASE_URL} (npm run dev)`);
    process.exit(1);
  }
}

run();
