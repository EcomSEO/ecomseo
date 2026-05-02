import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("https://ecomseo.co/tools/core-web-vitals", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);

await page.fill('main input[type="text"]', "https://www.gymshark.com");
await page.evaluate(() => {
  const btn = Array.from(document.querySelectorAll("main button")).find((b) =>
    /^Check Core Web Vitals$/i.test((b.textContent || "").trim())
  );
  if (btn) btn.click();
});

// Poll every 5 seconds for up to 3 min, logging what's on screen
for (let i = 0; i < 36; i++) {
  await page.waitForTimeout(5000);
  const state = await page.evaluate(() => {
    const main = document.querySelector("main");
    const t = main.innerText;
    return {
      analyzing: /Analyzing page performance/.test(t),
      hasGoodOrImp: /\b(Good|Needs Improvement|Poor)\b/.test(t),
      hasNumericS: /\b\d+(\.\d+)?\s*s\b/.test(t),
      hasScore100: /\b\d{1,3}\/100\b/.test(t),
      firstFewLines: t.split("\n").slice(0, 50).join(" | ").slice(0, 500),
    };
  });
  console.log(`t=${(i + 1) * 5}s analyzing=${state.analyzing} good=${state.hasGoodOrImp} numS=${state.hasNumericS} score=${state.hasScore100}`);
  if (!state.analyzing && (state.hasGoodOrImp || state.hasNumericS || state.hasScore100)) {
    console.log("✓ results rendered");
    break;
  }
}

await page.screenshot({ path: "/tmp/cwv-final.png", fullPage: true });
console.log("saved /tmp/cwv-final.png");
await browser.close();
