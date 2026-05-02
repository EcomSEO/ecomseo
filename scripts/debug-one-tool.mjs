import { chromium } from "playwright";
const slug = process.argv[2] || "meta-tags-checker";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(`https://ecomseo.co/tools/${slug}`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);

// List all visible buttons inside main
const buttons = await page.$$eval("main button", (els) =>
  els.map((e) => ({ text: (e.textContent || "").trim().slice(0, 80), disabled: e.disabled }))
);
console.log("Buttons in main:");
buttons.forEach((b, i) => console.log(`  [${i}] ${b.disabled ? "DISABLED " : ""}${b.text}`));

// List inputs/textareas
const inputs = await page.$$eval("main input, main textarea", (els) =>
  els.map((e) => ({ tag: e.tagName, type: e.type || "", placeholder: e.placeholder || "", name: e.name || "" }))
);
console.log("\nInputs/textareas:");
inputs.forEach((i) => console.log(`  ${i.tag}[type=${i.type}] placeholder="${i.placeholder}" name="${i.name}"`));

await browser.close();
