/**
 * Take screenshots of key pages at mobile + desktop viewports.
 * Output: /tmp/cortijuelo-screenshots/<page>-<viewport>.png
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE || "http://localhost:3457";
const OUT = "/tmp/cortijuelo-screenshots";

const PAGES = [
  { name: "home", path: "/es/" },
  { name: "menu", path: "/es/menu/" },
  { name: "restaurant", path: "/es/restaurant/" },
  { name: "gallery", path: "/es/gallery/" },
  { name: "contact", path: "/es/contact/" },
];

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const results = [];

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 2,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    for (const pg of PAGES) {
      const url = BASE + pg.path;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
        // Force-show any elements that framer-motion hid with opacity:0 before
        // scroll-triggered reveal. Playwright's fullPage screenshot doesn't
        // scroll, so whileInView-gated elements stay hidden.
        await page.addStyleTag({
          content: `*, *::before, *::after { animation: none !important; }
                    [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; }
                    [style*="transform"] { transform: none !important; }`,
        });
        await page.waitForTimeout(2500);
        const file = path.join(OUT, `${pg.name}-${viewport.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        const hasOverflow = pageWidth > clientWidth + 2;
        results.push({
          page: pg.name,
          viewport: viewport.name,
          file,
          pageWidth,
          clientWidth,
          hasOverflow,
        });
        console.log(
          `✓ ${pg.name} @ ${viewport.name}  —  doc=${pageWidth}px client=${clientWidth}px${
            hasOverflow ? "  ⚠ OVERFLOW" : ""
          }`
        );
      } catch (e) {
        console.log(`✗ ${pg.name} @ ${viewport.name}  —  ${e.message}`);
        results.push({
          page: pg.name,
          viewport: viewport.name,
          error: e.message,
        });
      }
    }
    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(results, null, 2));
  const overflows = results.filter((r) => r.hasOverflow);
  if (overflows.length) {
    console.log(`\n⚠ ${overflows.length} page(s) have horizontal overflow:`);
    overflows.forEach((r) => console.log(`   ${r.page} @ ${r.viewport}`));
  } else {
    console.log("\n✓ No horizontal overflow detected");
  }
})();
