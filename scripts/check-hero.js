const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-hero";
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  for (const v of [{ name: "mobile", w: 390, h: 844 }, { name: "desktop", w: 1440, h: 900 }]) {
    const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    await page.goto(BASE + "/es/");
    await page.waitForTimeout(5000); // wait for splash to fully leave
    await page.screenshot({ path: `${OUT}/hero-${v.name}.png` });
    await ctx.close();
  }
  await browser.close();
  console.log("Wrote hero screenshots to", OUT);
})();
