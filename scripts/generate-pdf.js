/**
 * Generate menu PDF from the rendered /es/menu page.
 * Output: public/menu/carta.pdf
 *
 * If a custom menu image exists at public/menu/source.png (or .jpg),
 * it will be embedded as the single-page PDF instead.
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE || "http://localhost:3457";
const SITE_PATH = "/es/menu/";
const OUT_DIR = path.join(__dirname, "..", "public", "menu");
const OUT_PDF = path.join(OUT_DIR, "carta.pdf");

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Prefer a pre-made image if present
  const sourceCandidates = ["source.png", "source.jpg", "source.jpeg", "source.webp"].map((n) =>
    path.join(OUT_DIR, n)
  );
  const srcImage = sourceCandidates.find((f) => fs.existsSync(f));

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 1600 } });
  const page = await context.newPage();

  if (srcImage) {
    console.log(`Using source image: ${path.basename(srcImage)}`);
    // Render the image full-bleed to an A4 portrait PDF
    const html = `<!doctype html>
      <html><head><style>
        @page { size: A4 portrait; margin: 0; }
        html, body { margin: 0; padding: 0; background: #1b1410; }
        img { display: block; width: 100%; height: 100vh; object-fit: contain; }
      </style></head>
      <body><img src="file://${srcImage}" /></body></html>`;
    await page.setContent(html, { waitUntil: "load" });
    await page.pdf({ path: OUT_PDF, format: "A4", printBackground: true });
  } else {
    console.log(`Rendering ${BASE}${SITE_PATH} to PDF`);
    await page.goto(BASE + SITE_PATH, { waitUntil: "networkidle", timeout: 30000 });
    // Force-show animated elements
    await page.addStyleTag({
      content: `*, *::before, *::after { animation: none !important; transition: none !important; }
                [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; }
                [style*="transform"] { transform: none !important; }
                /* Hide nav + footer in print */
                header[class*="fixed"], footer { display: none !important; }
                main { margin-top: 0 !important; }`,
    });
    await page.waitForTimeout(2000);
    await page.emulateMedia({ media: "screen" });
    await page.pdf({
      path: OUT_PDF,
      format: "A4",
      printBackground: true,
      margin: { top: "12mm", bottom: "12mm", left: "12mm", right: "12mm" },
    });
  }

  await browser.close();
  const stat = fs.statSync(OUT_PDF);
  console.log(`✓ Wrote ${OUT_PDF}  (${(stat.size / 1024).toFixed(1)} KB)`);
})();
