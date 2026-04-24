/**
 * Screenshot the loading splash and the nav logo so I can see how the
 * HR monogram actually renders.
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-logo-check";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Go to home, catch splash very early
  await page.goto(BASE + "/es/");
  await page.waitForTimeout(1200); // let splash reveal
  await page.screenshot({ path: path.join(OUT, "splash.png") });

  // Wait for splash to finish, then screenshot the nav
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(OUT, "nav.png"), clip: { x: 0, y: 0, width: 1200, height: 100 } });

  // Scroll to footer, screenshot the medallion
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  const footerHeight = await page.evaluate(() => document.querySelector("footer")?.clientHeight || 800);
  await page.screenshot({
    path: path.join(OUT, "footer.png"),
    clip: { x: 0, y: Math.max(0, 900 - 800), width: 1200, height: 800 },
  });

  await browser.close();
  console.log(`✓ Wrote screenshots to ${OUT}`);
})();
