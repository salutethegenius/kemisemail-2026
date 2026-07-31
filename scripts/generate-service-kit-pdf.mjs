import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = path.join(root, "public/service-kit/KemisEmail-Service-Kit-2026.pdf");
const baseUrl = process.env.SERVICE_KIT_BASE_URL || "http://127.0.0.1:3000";

async function main() {
  await mkdir(path.dirname(outPath), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
  });

  const url = `${baseUrl.replace(/\/$/, "")}/service-kit/print`;
  console.log(`Opening ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });

  await page.pdf({
    path: outPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
