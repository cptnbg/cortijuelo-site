const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-logo-check";
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();

  for (const v of [{ name: "mobile", w: 390, h: 800 }, { name: "desktop", w: 1200, h: 800 }]) {
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    await page.goto(BASE + "/es/");
    await page.waitForTimeout(3200);

    // Non-scrolled (over hero)
    await page.screenshot({ path: `${OUT}/nav-hero-${v.name}.png`, clip: { x: 0, y: 0, width: v.w, height: 90 } });

    // Scrolled (linen bg)
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/nav-scrolled-${v.name}.png`, clip: { x: 0, y: 0, width: v.w, height: 90 } });

    // On restaurant page (page header has dark bg)
    await page.goto(BASE + "/es/restaurant/");
    await page.waitForTimeout(3200);
    await page.screenshot({ path: `${OUT}/nav-restaurant-${v.name}.png`, clip: { x: 0, y: 0, width: v.w, height: 90 } });

    await ctx.close();
  }
  await browser.close();
  console.log("Wrote nav screenshots to", OUT);
})();
