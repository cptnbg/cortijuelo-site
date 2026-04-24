/**
 * Capture the loading splash at several frames so I can see the animation.
 */
const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-splash";
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 900, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const frames = [500, 900, 1400, 2000, 2500, 3200];
  await page.goto(BASE + "/es/");
  const start = Date.now();
  for (const ms of frames) {
    while (Date.now() - start < ms) await page.waitForTimeout(20);
    await page.screenshot({ path: `${OUT}/splash-${ms}.png` });
    console.log(`captured frame at ${ms}ms`);
  }
  await browser.close();
})();
