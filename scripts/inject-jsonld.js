#!/usr/bin/env node
// One-off injection script: adds BreadcrumbList JSON-LD to every page
// and Product JSON-LD to every farming product page. Idempotent —
// existing blocks (marked with data-le-jsonld) are replaced.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://liscarrollengineering.ie";

const FARMING_PRODUCTS = {
  "milk-cooling-tanks": {
    name: "Milk Cooling Tanks",
    description: "Direct-expansion and ice-bank milk cooling tanks from 1,000–30,000 L. Built to AISI 304 and exceeds EN13732. Made in Cork.",
    category: "Dairy / Milk cooling",
  },
  "ice-builders": {
    name: "Ice Builders",
    description: "Ice builders that accumulate cooling capacity overnight on off-peak power and discharge it at milking time.",
    category: "Dairy / Refrigeration",
  },
  "milk-silos": {
    name: "Milk Silos",
    description: "Vertical and horizontal milk silos from 10,000–200,000 L for creameries and co-op collection points.",
    category: "Dairy / Storage",
  },
  "buffer-tanks": {
    name: "Buffer Tanks",
    description: "Buffer tanks that smooth flow between parlour and bulk cooling. AISI 304, hygienically welded, integrated CIP.",
    category: "Dairy / Process",
  },
  "heat-recovery-units": {
    name: "Heat Recovery Units",
    description: "Recover waste refrigeration heat to cut water heating costs by 40–60%. Retrofit-friendly, CE marked.",
    category: "Dairy / Energy recovery",
  },
  "used-equipment": {
    name: "Used Equipment",
    description: "Factory-reconditioned, re-certified dairy equipment with a 12-month warranty. Available from stock.",
    category: "Dairy / Reconditioned",
  },
};

const INDUSTRY_NAMES = {
  farming: "Farming",
  food: "Food & Beverage",
  pharma: "Pharmaceuticals",
  leisure: "Leisure",
  bespoke: "Bespoke",
};

const breadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    ...(it.url ? { item: it.url } : {}),
  })),
});

const product = (slug, data) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: data.name,
  description: data.description,
  category: data.category,
  brand: { "@type": "Brand", name: "Liscarroll Engineering" },
  manufacturer: { "@type": "Organization", name: "Liscarroll Engineering", url: SITE },
  image: `${SITE}/assets/og-image.svg`,
  url: `${SITE}/product-farming-${slug}.html`,
});

const stamp = (obj) =>
  `<script type="application/ld+json" data-le-jsonld="1">${JSON.stringify(obj)}</script>`;

const write = (file, jsonldBlocks) => {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return false;
  let html = fs.readFileSync(p, "utf8");
  // Remove any previous injections
  html = html.replace(
    /\s*<script type="application\/ld\+json" data-le-jsonld="1">[\s\S]*?<\/script>/g,
    ""
  );
  const block = "\n" + jsonldBlocks.map(stamp).join("\n") + "\n";
  // Inject before </head>
  if (!html.includes("</head>")) return false;
  html = html.replace("</head>", `${block}</head>`);
  fs.writeFileSync(p, html);
  return true;
};

const home = () => ["index.html"];
const root = { name: "Home", url: `${SITE}/` };

const targets = [
  // Industries hub
  {
    file: "industries.html",
    blocks: [
      breadcrumb([root, { name: "Industries" }]),
    ],
  },
  // Each industry detail
  ...Object.entries(INDUSTRY_NAMES).map(([slug, name]) => ({
    file: `industry-${slug}.html`,
    blocks: [
      breadcrumb([
        root,
        { name: "Industries", url: `${SITE}/industries.html` },
        { name },
      ]),
    ],
  })),
  // Each farming product
  ...Object.entries(FARMING_PRODUCTS).map(([slug, data]) => ({
    file: `product-farming-${slug}.html`,
    blocks: [
      breadcrumb([
        root,
        { name: "Industries", url: `${SITE}/industries.html` },
        { name: "Farming", url: `${SITE}/industry-farming.html` },
        { name: data.name },
      ]),
      product(slug, data),
    ],
  })),
  // Other top-level pages
  { file: "case-studies.html", blocks: [breadcrumb([root, { name: "Case Studies" }])] },
  { file: "our-family.html", blocks: [breadcrumb([root, { name: "Our Family" }])] },
  { file: "our-heritage.html", blocks: [breadcrumb([root, { name: "Our Heritage" }])] },
  { file: "contact.html", blocks: [breadcrumb([root, { name: "Contact" }])] },
  { file: "privacy.html", blocks: [breadcrumb([root, { name: "Privacy" }])] },
  { file: "terms.html", blocks: [breadcrumb([root, { name: "Terms" }])] },
];

let updated = 0;
for (const t of targets) {
  if (write(t.file, t.blocks)) {
    updated++;
    console.log(`  ✓ ${t.file}`);
  } else {
    console.log(`  ✗ ${t.file} (missing or no </head>)`);
  }
}
console.log(`\nInjected JSON-LD into ${updated}/${targets.length} files.`);
