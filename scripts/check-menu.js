const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-logo-check";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1.5 });
  const page = await ctx.newPage();
  await page.goto(BASE + "/es/menu/");
  // Let splash fade, scroll through to trigger reveals
  await page.waitForTimeout(3500);
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  // Screenshot at several scroll positions
  await page.screenshot({ path: OUT + "/menu-top.png" });
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/menu-mid.png" });
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + "/menu-vinos.png" });
  await browser.close();
  console.log("Wrote menu screenshots to", OUT);
})();
