const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-logo-check";
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(BASE + "/es/");
  // Wait for splash to fade
  await page.waitForTimeout(3500);
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(600);
  await page.screenshot({ path: OUT + "/nav-sticky.png", clip: { x: 0, y: 0, width: 1200, height: 100 } });
  await browser.close();
  console.log("Wrote", OUT + "/nav-sticky.png");
})();
