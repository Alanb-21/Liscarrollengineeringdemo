/* global React, ReactDOM */

// Reads ?slug=farming or window.__INDUSTRY_SLUG
const slug = window.__INDUSTRY_SLUG || "farming";
const ind = INDUSTRIES.find(x => x.slug === slug) || INDUSTRIES[0];
const idx = INDUSTRIES.findIndex(x => x.slug === ind.slug);
const prev = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];
const next = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
document.title = `${ind.name} — Liscarroll Engineering`;
const FARMING_PRODUCT_DATA = [{
  name: "Milk Cooling Tanks",
  slug: "milk-cooling-tanks",
  desc: "Direct-expansion and ice-bank tanks from 1,000–30,000 L. Exceeds EN13732. Built in Cork since 1973."
}, {
  name: "Ice Builders",
  slug: "ice-builders",
  desc: "Build ice overnight on off-peak tariffs and deploy cooling capacity on demand at milking time."
}, {
  name: "Milk Silos",
  slug: "milk-silos",
  desc: "Vertical and horizontal silos from 10,000–200,000 L for creameries and co-op collection points."
}, {
  name: "Buffer Tanks",
  slug: "buffer-tanks",
  desc: "Absorb warm milk between parlour and bulk cooling — protecting your cooling capacity at peak flow."
}, {
  name: "Heat Recovery Units",
  slug: "heat-recovery-units",
  desc: "Recover waste refrigeration heat. Typical saving: 40–60% of water heating costs per installation."
}, {
  name: "Used Equipment",
  slug: "used-equipment",
  desc: "Factory-reconditioned, re-certified dairy equipment. 12-month warranty. Available from stock."
}];
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
const Products = () => {
  const isFarming = slug === "farming";
  const farmingMap = isFarming ? Object.fromEntries(FARMING_PRODUCT_DATA.map(p => [p.name, p])) : {};
  return /*#__PURE__*/React.createElement("section", {
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
    const pData = farmingMap[it];
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
    }, pData ? pData.desc : "Built to AISI 304 standard at our Cork facility. Specifications available on request."), pData && /*#__PURE__*/React.createElement("span", {
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
      href: `product-farming-${pData.slug}.html`,
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
};
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