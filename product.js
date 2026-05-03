/* global React, ReactDOM */

// Reads window.__INDUSTRY_SLUG and window.__PRODUCT_SLUG to look up the
// product entry in the global PRODUCTS catalogue (set by product-data.js).
const indSlug = window.__INDUSTRY_SLUG || "farming";
const prodSlug = window.__PRODUCT_SLUG || "milk-cooling-tanks";
const key = `${indSlug}/${prodSlug}`;
const product = window.PRODUCTS[key] || window.PRODUCTS["farming/milk-cooling-tanks"];
const list = window.PRODUCTS_BY_INDUSTRY[indSlug] || [];
const idx = list.findIndex(p => p.slug === product.slug);
const prev = list[(idx - 1 + list.length) % list.length];
const next = list[(idx + 1) % list.length];
document.title = `${product.name} — ${product.industryName} — Liscarroll Engineering`;
const indHref = `industry-${product.industrySlug}.html`;
const prodHref = p => `product-${p.industrySlug}-${p.slug}.html`;
const ctxQuery = `?industry=${product.industrySlug}&product=${product.slug}`;
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 60,
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: TOKENS.body,
    letterSpacing: "0.10em",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "industries.html",
  style: {
    color: TOKENS.body,
    textDecoration: "none"
  }
}, "Industries"), /*#__PURE__*/React.createElement("span", {
  style: {
    margin: "0 10px",
    color: TOKENS.brushed
  }
}, "/"), /*#__PURE__*/React.createElement("a", {
  href: indHref,
  style: {
    color: TOKENS.body,
    textDecoration: "none"
  }
}, product.industryName), /*#__PURE__*/React.createElement("span", {
  style: {
    margin: "0 10px",
    color: TOKENS.brushed
  }
}, "/"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: TOKENS.navy
  }
}, product.name))), /*#__PURE__*/React.createElement("div", {
  className: "ind-detail-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 80,
    alignItems: "center",
    padding: "60px 0 100px"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 28
  }
}, product.industryName, " \xB7 ", product.n, " / ", product.of)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(48px, 8vw, 120px)",
    lineHeight: 0.9,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, product.name)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 180
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    fontWeight: 500,
    color: TOKENS.steel,
    marginTop: 24,
    marginBottom: 0,
    letterSpacing: "0.01em"
  }
}, product.tagline)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 260
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 17,
    lineHeight: 1.65,
    color: TOKENS.body,
    maxWidth: 520,
    marginTop: 20,
    marginBottom: 0
  }
}, product.desc)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 340
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    marginTop: 40,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: `contact.html${ctxQuery}`,
  style: ctaPrimary
}, "Request a quote"), /*#__PURE__*/React.createElement("a", {
  href: `contact.html${ctxQuery}&kind=specsheet`,
  style: ctaSecondary
}, "Request spec sheet")))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 200
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: product.standaloneLabel,
  ratio: "4/5",
  tone: "navy"
})))));
const Drawings = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "100px 0",
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 20
  }
}, "Technical drawings")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 100
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 4.5vw, 64px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, "Engineering documentation."))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 150
}, /*#__PURE__*/React.createElement("a", {
  href: `contact.html${ctxQuery}&kind=drawings`,
  style: ctaSecondary
}, "Request full drawing pack \u2192"))), /*#__PURE__*/React.createElement("div", {
  className: "product-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Placeholder, {
  label: product.drawing1,
  ratio: "3/4",
  tone: "light",
  style: {
    borderRadius: 12
  }
})), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 80
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: product.drawing2,
  ratio: "3/4",
  tone: "light",
  style: {
    borderRadius: 12
  }
})), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 160
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: product.drawing3,
  ratio: "3/4",
  tone: "light",
  style: {
    borderRadius: 12
  }
})))));
const Specifications = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.navy,
    color: "#E8ECF1",
    padding: "120px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  dark: true,
  style: {
    marginBottom: 20
  }
}, "Specifications")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 100
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 4.5vw, 64px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: "#fff",
    margin: 0,
    textTransform: "uppercase"
  }
}, "Standard build specification.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 160
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    lineHeight: 1.6,
    color: "#9DBED5",
    marginTop: 20,
    maxWidth: 560
  }
}, "Custom specifications available on request. All deviations are documented and priced at quotation stage."))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: "1px solid rgba(192,200,209,0.25)"
  }
}, product.specs.map(([label, value], i) => /*#__PURE__*/React.createElement(FadeUp, {
  key: label,
  delay: i * 40
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 40,
    padding: "24px 0",
    borderBottom: "1px solid rgba(192,200,209,0.15)",
    alignItems: "baseline"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: "#9DBED5"
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontSize: 15,
    letterSpacing: "0.04em",
    color: "#fff"
  }
}, value)))))));
const Installed = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "100px 0",
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 40
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 20
  }
}, "Installed"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 4.5vw, 64px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, "In the field."))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 80
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: product.installedLabel,
  ratio: "21/9",
  tone: "steel",
  style: {
    borderRadius: 12
  }
})), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 140
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13.5,
    color: TOKENS.body,
    marginTop: 18,
    letterSpacing: "0.01em",
    lineHeight: 1.5
  }
}, product.installedCaption))));
const NextPrev = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "60px 0 100px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderTop: `1px solid ${TOKENS.hairline}`,
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("a", {
  href: prodHref(prev),
  style: {
    display: "block",
    padding: "40px 32px 40px 0",
    borderRight: `1px solid ${TOKENS.hairline}`,
    textDecoration: "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body
  }
}, "\u2190 Previous product"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 40,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    marginTop: 12,
    textTransform: "uppercase",
    lineHeight: 1
  }
}, prev.name)), /*#__PURE__*/React.createElement("a", {
  href: prodHref(next),
  style: {
    display: "block",
    padding: "40px 0 40px 32px",
    textDecoration: "none",
    textAlign: "right"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body
  }
}, "Next product \u2192"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 40,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    marginTop: 12,
    textTransform: "uppercase",
    lineHeight: 1
  }
}, next.name))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: indHref,
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: TOKENS.body,
    textDecoration: "none",
    letterSpacing: "0.10em",
    textTransform: "uppercase"
  }
}, "\u2190 Back to all ", product.industryName.toLowerCase(), " products"))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "industries.html"
}), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Drawings, null), /*#__PURE__*/React.createElement(Specifications, null), /*#__PURE__*/React.createElement(Installed, null), /*#__PURE__*/React.createElement(NextPrev, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));