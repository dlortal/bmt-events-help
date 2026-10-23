// Renders public/og.png (1200x630 share card), favicon-32.png and apple-touch-icon.png from the lockup and
// favicon.svg, using the site's fonts. Run after changing site.config.ts or the logo (needs Playwright with Chromium,
// e.g. npx -p playwright node --experimental-strip-types scripts/brand-assets.mjs). Output files are committed.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { site } from "../site.config.ts";

const logo = readFileSync("public/logo.png").toString("base64");
const favicon = readFileSync("public/favicon.svg", "utf8");
const font = (f) => readFileSync(`public/fonts/${f}`).toString("base64");
const css = `
@font-face{font-family:"GT Walsheim Pro";font-weight:100;src:url(data:font/woff2;base64,${font("GTWalsheimPro-Thin.woff2")}) format("woff2")}
@font-face{font-family:"GT Walsheim Pro";font-weight:400;src:url(data:font/woff2;base64,${font("GTWalsheimPro-Regular.woff2")}) format("woff2")}
*{margin:0;box-sizing:border-box} body{background:#101010;color:#fff;font-family:"GT Walsheim Pro",Arial,sans-serif;-webkit-font-smoothing:antialiased}
.card{width:1200px;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;background:#101010}
.rule{width:72px;height:4px;background:#D09705;margin-bottom:28px}
h1{font-weight:100;font-size:92px;letter-spacing:.02em;text-transform:uppercase;line-height:1}
p{font-weight:400;font-size:30px;color:rgba(255,255,255,.72);max-width:900px;line-height:1.35;margin-top:22px}
img{width:300px;display:block}`;
const html = `<style>${css}</style><div class="card"><img src="data:image/png;base64,${logo}"><div><div class="rule"></div><h1>${site.name}</h1><p>${site.description}</p></div></div>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html); await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
for (const [file, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180]]) {
  const p = await browser.newPage({ viewport: { width: size, height: size } });
  await p.setContent(`<style>*{margin:0}html,body{background:#000}svg{display:block;width:${size}px;height:${size}px}</style>${favicon}`);
  await p.screenshot({ path: `public/${file}`, omitBackground: false });
}
await browser.close();
console.log("wrote public/og.png, favicon-32.png, apple-touch-icon.png");
