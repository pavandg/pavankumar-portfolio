import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "resume", "resume.html");
const publicPdf = path.join(root, "public", "Pavan_Kumar_Resume.pdf");
const rootPdf = path.join(root, "Pavan_Kumar_Resume.pdf");

// Fail closed: empty/near-empty PDFs mean fonts or HTML did not load.
const MIN_BYTES = 50_000;

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle", timeout: 60_000 });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
// Extra beat for webfonts after fonts.ready
await page.waitForTimeout(1500);

const textLen = await page.evaluate(() => document.body?.innerText?.trim().length ?? 0);
if (textLen < 500) {
  await browser.close();
  throw new Error(
    `Resume HTML rendered almost no text (${textLen} chars). Check resume/resume.html before generating PDF.`
  );
}

await page.pdf({
  path: publicPdf,
  format: "Letter",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

const size = fs.statSync(publicPdf).size;
if (size < MIN_BYTES) {
  await browser.close();
  throw new Error(
    `Generated PDF is too small (${size} bytes; expected >= ${MIN_BYTES}). ` +
      `Likely fonts failed to load — re-run with network access.`
  );
}

fs.copyFileSync(publicPdf, rootPdf);
console.log(`Wrote ${publicPdf} (${size} bytes)`);
console.log(`Wrote ${rootPdf}`);

await browser.close();
