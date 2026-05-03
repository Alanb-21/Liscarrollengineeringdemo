/* global React, ReactDOM */

// Reads ?slug=farming or window.__INDUSTRY_SLUG
const slug = window.__INDUSTRY_SLUG || "farming";
const ind = INDUSTRIES.find(x => x.slug === slug) || INDUSTRIES[0];
const idx = INDUSTRIES.findIndex(x => x.slug === ind.slug);
const prev = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];
const next = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
document.title = `${ind.name} — Liscarroll Engineering`;

// Look up product entries for this industry from the global PRODUCTS
// catalogue (set by product-data.js). Falls back to a label-only cell
// when no product page exists yet.
const productList = window.PRODUCTS_BY_INDUSTRY && window.PRODUCTS_BY_INDUSTRY[ind.slug] || [];
const productByName = Object.fromEntries(productList.map(p => [p.name, p]));
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
}, "/"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: TOKENS.navy
  }
}, ind.name))), /*#__PURE__*/React.createElement("div", {
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
}, "Industry \xB7 ", ind.n, " / 05")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(56px, 9vw, 140px)",
    lineHeight: 0.9,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, ind.name)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 220
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 18,
    lineHeight: 1.6,
    color: TOKENS.body,
    maxWidth: 540,
    marginTop: 32
  }
}, ind.long)), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 320
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    marginTop: 36,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: `contact.html?industry=${ind.slug}`,
  style: ctaPrimary
}, "Discuss your project"), /*#__PURE__*/React.createElement("a", {
  href: "case-studies.html",
  style: ctaSecondary
}, "See related work")))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 200
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: ind.image,
  ratio: "4/5",
  tone: idx % 2 === 0 ? "navy" : "steel"
})))));
const Products = () => /*#__PURE__*/React.createElement("section", {
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
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 64,
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 28
  }
}, "What we build for ", ind.name.toLowerCase())), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(40px, 5vw, 72px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, "The full range."))), /*#__PURE__*/React.createElement("div", {
  className: "product-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    borderTop: `1px solid ${TOKENS.hairline}`
  }
}, ind.items.map((it, i) => {
  const pData = productByName[it];
  const cellStyle = {
    padding: "32px 28px 32px 0",
    paddingLeft: i % 3 === 0 ? 0 : 28,
    borderRight: (i + 1) % 3 === 0 ? "none" : `1px solid ${TOKENS.hairline}`,
    borderBottom: `1px solid ${TOKENS.hairline}`,
    minHeight: 180,
    display: "block",
    textDecoration: "none",
    color: "inherit",
    transition: "background 150ms ease"
  };
  const desc = pData ? pData.tagline || "Built to spec at our Cork facility. Specifications available on request." : "Built to AISI 304 standard at our Cork facility. Specifications available on request.";
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.20em",
      textTransform: "uppercase",
      color: TOKENS.steel
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 32,
      letterSpacing: "0.02em",
      color: TOKENS.navy,
      margin: "16px 0 12px 0",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, it), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 13.5,
      lineHeight: 1.6,
      color: TOKENS.body,
      margin: "0 0 16px 0"
    }
  }, desc), pData && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      fontWeight: 500,
      color: TOKENS.steel,
      letterSpacing: "0.10em",
      textTransform: "uppercase"
    }
  }, "View product \u2192"));
  return /*#__PURE__*/React.createElement(FadeUp, {
    key: it,
    delay: i % 3 * 60
  }, pData ? /*#__PURE__*/React.createElement("a", {
    href: `product-${ind.slug}-${pData.slug}.html`,
    style: cellStyle,
    onMouseEnter: e => {
      e.currentTarget.style.background = TOKENS.paper;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
    }
  }, inner) : /*#__PURE__*/React.createElement("div", {
    style: cellStyle
  }, inner));
}))));
const NextPrev = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "60px 0 120px"
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
    gap: 0,
    borderTop: `1px solid ${TOKENS.hairline}`,
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("a", {
  href: prev.href,
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
}, "\u2190 Previous"), /*#__PURE__*/React.createElement("div", {
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
  href: next.href,
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
}, "Next \u2192"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 40,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    marginTop: 12,
    textTransform: "uppercase",
    lineHeight: 1
  }
}, next.name)))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "industries.html"
}), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Products, null), /*#__PURE__*/React.createElement(NextPrev, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));