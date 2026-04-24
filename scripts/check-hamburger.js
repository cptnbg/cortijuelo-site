const { chromium } = require("playwright");
const fs = require("fs");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-hero";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(BASE + "/es/");
  await page.waitForTimeout(5000);
  // Top of page
  await page.screenshot({ path: `${OUT}/nav-top.png`, clip: { x: 0, y: 0, width: 390, height: 80 } });
  // Scroll down
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/nav-scrolled.png`, clip: { x: 0, y: 0, width: 390, height: 80 } });
  // Open the menu via actual click
  await page.click('button[aria-label="Open menu"]');
  await page.waitForTimeout(600);
  // Dump the drawer HTML + computed bg
  const info = await page.evaluate(() => {
    const d = document.querySelector('[class*="fixed inset-0 z-[60]"]');
    if (!d) return { found: false };
    const style = getComputedStyle(d);
    return {
      found: true,
      bg: style.backgroundColor,
      inlineStyle: d.getAttribute('style'),
      className: d.className,
    };
  });
  console.log("drawer:", JSON.stringify(info));
  await page.screenshot({ path: `${OUT}/menu-open.png` });
  await browser.close();
  console.log("Wrote nav states to", OUT);
})();
