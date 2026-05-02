import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("https://ecomseo.co/tools/core-web-vitals", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);

// Fill input
await page.fill('main input[type="text"]', "https://www.gymshark.com");

// Click Check Core Web Vitals (the primary one)
await page.evaluate(() => {
  const btn = Array.from(document.querySelectorAll("main button")).find((b) =>
    /^Check Core Web Vitals$/i.test((b.textContent || "").trim())
  );
  if (btn) btn.click();
});

console.log("Clicked, waiting for PSI…");
// Wait up to 120s for a numeric metric value (e.g. "2.4s", "0.05")
try {
  await page.waitForFunction(
    () => /\b\d+(\.\d+)?\s*(s|ms)\b/i.test(document.body.innerText),
    null,
    { timeout: 120000, polling: 1000 }
  );
  console.log("Numeric metric detected");
} catch {
  console.log("No numeric metric within 120s");
}
await page.waitForTimeout(2000);

// Now scan the DOM for elements whose textContent includes both LCP and a numeric "s" value
const matches = await page.evaluate(() => {
  const main = document.querySelector("main");
  const all = Array.from(main.querySelectorAll("div, section, article"));
  return all
    .filter((el) => {
      const t = el.textContent || "";
      return /LCP/i.test(t) && /\b\d+(\.\d+)?\s*(s|ms)\b/i.test(t) && t.length < 4000;
    })
    .slice(0, 8)
    .map((el) => {
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        cls: (el.className || "").slice(0, 100),
        height: Math.round(r.height),
        width: Math.round(r.width),
        top: Math.round(r.top + window.scrollY),
        textPreview: (el.textContent || "").slice(0, 160).replace(/\s+/g, " "),
      };
    });
});
console.log("LCP + metric matches:");
matches.forEach((m, i) => {
  console.log(`  [${i}] ${m.tag}.${m.cls.slice(0, 50)} (${m.width}x${m.height})  top=${m.top}`);
  console.log(`      ${m.textPreview}`);
});

await page.screenshot({ path: "/tmp/cwv-full.png", fullPage: true });
console.log("\nFull-page screenshot saved to /tmp/cwv-full.png");

await browser.close();
