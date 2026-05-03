#!/usr/bin/env node
// Generates an HTML shell for every product across every industry, by
// reading the catalogue from product-data.js. Idempotent — re-running
// overwrites existing shells.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://liscarrollengineering.ie";

// product-data.js relies on `window.PRODUCTS = ...` so we evaluate it in
// a sandboxed context to extract the catalogue.
const vm = require("vm");
const dataSrc = fs.readFileSync(path.join(ROOT, "product-data.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataSrc, sandbox);
const PRODUCTS = sandbox.window.PRODUCTS;

const escape = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const breadcrumb = (p) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries.html` },
    { "@type": "ListItem", position: 3, name: p.industryName, item: `${SITE}/industry-${p.industrySlug}.html` },
    { "@type": "ListItem", position: 4, name: p.name },
  ],
});

const productLd = (p) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.desc,
  category: `${p.industryName} / ${p.name}`,
  brand: { "@type": "Brand", name: "Liscarroll Engineering" },
  manufacturer: { "@type": "Organization", name: "Liscarroll Engineering", url: SITE },
  image: `${SITE}/assets/og-image.svg`,
  url: `${SITE}/product-${p.industrySlug}-${p.slug}.html`,
});

const shell = (p) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escape(p.name)} — ${escape(p.industryName)} — Liscarroll Engineering</title>
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />
<link rel="alternate icon" href="assets/liscarroll-logo.png" />
<link rel="apple-touch-icon" href="assets/liscarroll-logo.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="site.css" />
<meta name="description" content="${escape(p.tagline)} ${escape(p.desc.split(".")[0])}." />
<meta name="keywords" content="${escape(p.name.toLowerCase())}, ${escape(p.industryName.toLowerCase())}, stainless steel, AISI 304, AISI 316L, Cork, Ireland" />
<meta name="robots" content="index, follow" />
<meta name="author" content="Liscarroll Engineering" />
<link rel="canonical" href="${SITE}/product-${p.industrySlug}-${p.slug}.html" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Liscarroll Engineering" />
<meta property="og:title" content="${escape(p.name)} — ${escape(p.industryName)} — Liscarroll Engineering" />
<meta property="og:description" content="${escape(p.tagline)}" />
<meta property="og:url" content="${SITE}/product-${p.industrySlug}-${p.slug}.html" />
<meta property="og:image" content="${SITE}/assets/og-image.svg" />
<meta property="og:locale" content="en_IE" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(p.name)} — ${escape(p.industryName)} — Liscarroll Engineering" />
<meta name="twitter:description" content="${escape(p.tagline)}" />
<meta name="twitter:image" content="${SITE}/assets/og-image.svg" />
<script type="application/ld+json" data-le-jsonld="1">${JSON.stringify(breadcrumb(p))}</script>
<script type="application/ld+json" data-le-jsonld="1">${JSON.stringify(productLd(p))}</script>
</head>
<body>
<div id="root"></div>
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<script src="shared.js"></script>
<script src="product-data.js"></script>
<script>window.__INDUSTRY_SLUG="${p.industrySlug}";window.__PRODUCT_SLUG="${p.slug}";</script>
<script src="product.js"></script>
</body>
</html>
`;

let written = 0;
for (const key of Object.keys(PRODUCTS)) {
  const p = PRODUCTS[key];
  const file = path.join(ROOT, `product-${p.industrySlug}-${p.slug}.html`);
  fs.writeFileSync(file, shell(p));
  written++;
  console.log(`  ✓ product-${p.industrySlug}-${p.slug}.html`);
}
console.log(`\nWrote ${written} product shells.`);
