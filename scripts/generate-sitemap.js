#!/usr/bin/env node
// Regenerates sitemap.xml from the file system + product catalogue.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://liscarrollengineering.ie";

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "product-data.js"), "utf8"), sandbox);
const PRODUCTS = sandbox.window.PRODUCTS;

const pages = [
  { loc: "/",                   freq: "weekly",  pri: "1.0" },
  { loc: "/industries.html",    freq: "monthly", pri: "0.9" },
  { loc: "/industry-farming.html",  freq: "monthly", pri: "0.8" },
  { loc: "/industry-food.html",     freq: "monthly", pri: "0.8" },
  { loc: "/industry-pharma.html",   freq: "monthly", pri: "0.8" },
  { loc: "/industry-leisure.html",  freq: "monthly", pri: "0.8" },
  { loc: "/industry-bespoke.html",  freq: "monthly", pri: "0.8" },
];
for (const key of Object.keys(PRODUCTS)) {
  const p = PRODUCTS[key];
  pages.push({ loc: `/product-${p.industrySlug}-${p.slug}.html`, freq: "monthly", pri: p.industrySlug === "farming" ? "0.7" : "0.65" });
}
pages.push(
  { loc: "/case-studies.html", freq: "monthly", pri: "0.7" },
  { loc: "/our-family.html",   freq: "monthly", pri: "0.6" },
  { loc: "/our-heritage.html", freq: "monthly", pri: "0.6" },
  { loc: "/contact.html",      freq: "monthly", pri: "0.8" },
  { loc: "/privacy.html",      freq: "yearly",  pri: "0.2" },
  { loc: "/terms.html",        freq: "yearly",  pri: "0.2" },
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.pri}</priority>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml);
console.log(`Wrote sitemap.xml with ${pages.length} URLs.`);
