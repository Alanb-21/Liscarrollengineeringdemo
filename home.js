/* global React, ReactDOM */

// HERO
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
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center",
    minHeight: "82vh",
    paddingTop: 80,
    paddingBottom: 80
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 32
  }
}, "Est. 1973 \xB7 Liscarroll, Co. Cork")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(56px, 8vw, 120px)",
    lineHeight: 0.92,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, "Stainless", /*#__PURE__*/React.createElement("br", null), "steel, built", /*#__PURE__*/React.createElement("br", null), "to outlast.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 240
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 17,
    lineHeight: 1.55,
    color: TOKENS.body,
    maxWidth: 460,
    marginTop: 36,
    marginBottom: 0
  }
}, "Fifty years of precision manufacturing for farming, food, pharma, leisure and bespoke. Made in Cork. Trusted nationwide.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 340
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    marginTop: 40,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "contact.html",
  style: ctaPrimary
}, "Start a Project"), /*#__PURE__*/React.createElement("a", {
  href: "case-studies.html",
  style: ctaSecondary
}, "View our work")))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 200
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: "HERO \xB7 weld in progress, plant floor",
  ratio: "4/5",
  tone: "navy"
}), /*#__PURE__*/React.createElement("div", {
  className: "hero-badge",
  style: {
    position: "absolute",
    left: -28,
    bottom: -28,
    background: TOKENS.white,
    padding: "20px 24px",
    border: `0.5px solid ${TOKENS.brushed}`,
    borderRadius: 18,
    maxWidth: 240
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 56,
    color: TOKENS.navy,
    lineHeight: 1,
    letterSpacing: "0.02em"
  }
}, "50+"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: TOKENS.body,
    marginTop: 6,
    lineHeight: 1.4
  }
}, "Years of stainless steel engineering, in continuous operation since 1973.")))))), /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: `1px solid ${TOKENS.hairline}`,
    borderBottom: `1px solid ${TOKENS.hairline}`,
    background: TOKENS.white
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 60,
    padding: "22px 32px",
    maxWidth: 1440,
    margin: "0 auto",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body,
    fontWeight: 500
  }
}, "Trusted by"), ["Ballymaloe", "Dale Farm", "Hot Box", "Croke Park", "Kerry Group", "Glanbia"].map(c => /*#__PURE__*/React.createElement("span", {
  key: c,
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 22,
    letterSpacing: "0.05em",
    color: TOKENS.navy,
    opacity: 0.65
  }
}, c))))));

// INDUSTRIES PREVIEW
const IndustriesPreview = () => {
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: TOKENS.white,
      padding: "120px 0",
      borderBottom: `1px solid ${TOKENS.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ind-header",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      marginBottom: 80,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 28
    }
  }, "Our industries"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "clamp(44px, 5.5vw, 84px)",
      lineHeight: 0.95,
      letterSpacing: "0.02em",
      color: TOKENS.navy,
      margin: 0,
      textTransform: "uppercase"
    }
  }, "Five sectors.", /*#__PURE__*/React.createElement("br", null), "One standard.")), /*#__PURE__*/React.createElement(FadeUp, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 17,
      lineHeight: 1.6,
      color: TOKENS.body,
      margin: 0,
      maxWidth: 480,
      justifySelf: "end"
    }
  }, "Whether we're cooling milk in Kerry or fabricating for a cleanroom in Dublin, every project receives the same fifty-year-old standard of precision. No tier system. No exceptions."))), /*#__PURE__*/React.createElement("div", {
    className: "ind-split",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${TOKENS.hairline}`
    }
  }, INDUSTRIES.map((ind, i) => /*#__PURE__*/React.createElement(FadeUp, {
    key: ind.n,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("a", {
    href: ind.href,
    onMouseEnter: () => setActive(i),
    style: {
      display: "grid",
      gridTemplateColumns: "60px 1fr auto",
      gap: 24,
      padding: "32px 0",
      borderBottom: `1px solid ${TOKENS.hairline}`,
      cursor: "pointer",
      alignItems: "start",
      opacity: active === i ? 1 : 0.55,
      transition: "opacity 200ms ease",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 24,
      color: active === i ? TOKENS.steel : TOKENS.navy,
      letterSpacing: "0.05em",
      transition: "color 200ms ease"
    }
  }, ind.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "clamp(28px, 3vw, 44px)",
      letterSpacing: "0.02em",
      color: TOKENS.navy,
      margin: "0 0 12px 0",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, ind.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: TOKENS.body,
      margin: 0,
      maxWidth: 420
    }
  }, ind.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 18,
      color: active === i ? TOKENS.steel : TOKENS.brushed,
      transition: "color 200ms ease",
      marginTop: 8
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "ind-image-wrap",
    style: {
      position: "sticky",
      top: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, INDUSTRIES.map((ind, i) => /*#__PURE__*/React.createElement("div", {
    key: ind.slug,
    style: {
      position: i === 0 ? "relative" : "absolute",
      inset: 0,
      opacity: active === i ? 1 : 0,
      transition: "opacity 400ms ease"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: ind.image,
    ratio: "4/5",
    tone: i % 2 === 0 ? "navy" : "steel"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 11,
      letterSpacing: "0.20em",
      textTransform: "uppercase",
      color: TOKENS.body,
      fontWeight: 500
    }
  }, INDUSTRIES[active].n, " / 05"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 18,
      letterSpacing: "0.04em",
      color: TOKENS.navy
    }
  }, INDUSTRIES[active].name.toUpperCase())))), /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "industries.html",
    style: ctaSecondary
  }, "All industries \u2192")))));
};

// CASE STUDY (signature dark)
const CaseStudy = () => /*#__PURE__*/React.createElement("section", {
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
  className: "case-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 80,
    alignItems: "stretch"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  dark: true,
  style: {
    marginBottom: 28
  }
}, "Case study \xB7 01")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(44px, 5.5vw, 88px)",
    lineHeight: 0.92,
    letterSpacing: "0.02em",
    color: "#fff",
    margin: 0,
    textTransform: "uppercase"
  }
}, "Ballymaloe", /*#__PURE__*/React.createElement("br", null), "Production", /*#__PURE__*/React.createElement("br", null), "Line.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 220
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16.5,
    lineHeight: 1.65,
    color: "#9DBED5",
    marginTop: 36,
    maxWidth: 480
  }
}, "Stainless steel fabrication for one of Ireland's most recognised food brands. Designed, built and delivered from our Cork facility \u2014 every weld ISO-compliant, the whole job on schedule."))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 300
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    borderTop: "1px solid rgba(192,200,209,0.25)",
    paddingTop: 32,
    gap: 24
  }
}, [["38m", "Continuous run length"], ["AISI 304", "Food-grade stainless"], ["12 wks", "Designed to delivered"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 36,
    color: "#fff",
    letterSpacing: "0.02em",
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "#9DBED5",
    marginTop: 8,
    lineHeight: 1.4
  }
}, l))))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 400
}, /*#__PURE__*/React.createElement("a", {
  href: "case-studies.html",
  style: {
    marginTop: 40,
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: "#fff",
    textDecoration: "none",
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    borderBottom: `1px solid ${TOKENS.steel}`,
    paddingBottom: 8,
    alignSelf: "flex-start",
    width: "fit-content",
    display: "inline-block"
  }
}, "Read the full study \u2192"))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Placeholder, {
  label: "CASE STUDY \xB7 Ballymaloe production line \u2014 full bleed",
  ratio: "4/3",
  tone: "steel"
}), /*#__PURE__*/React.createElement("div", {
  className: "case-thumbs",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
    marginTop: 16
  }
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: "weld detail",
  ratio: "1/1",
  tone: "navy"
}), /*#__PURE__*/React.createElement(Placeholder, {
  label: "install",
  ratio: "1/1",
  tone: "steel"
}), /*#__PURE__*/React.createElement(Placeholder, {
  label: "delivery",
  ratio: "1/1",
  tone: "navy"
})))))));

// CLOSING CTA BAND
const ContactBand = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "140px 0 120px",
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 32px",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex"
  }
}, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 32
  }
}, "Start a project"))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(48px, 7vw, 110px)",
    lineHeight: 0.92,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: "0 auto",
    textTransform: "uppercase",
    maxWidth: 980
  }
}, "Tell us what you need to build.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 220
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 17,
    lineHeight: 1.6,
    color: TOKENS.body,
    maxWidth: 560,
    margin: "32px auto 0"
  }
}, "Talk to a team that has been engineering stainless steel since 1973. Initial consultation is direct, free, and on the phone.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 320
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    justifyContent: "center",
    marginTop: 40,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "contact.html",
  style: ctaPrimary
}, "Start a Project"), /*#__PURE__*/React.createElement("a", {
  href: "tel:+35302248200",
  style: ctaSecondary
}, "+353 (0)22 48200")))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: ""
}), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(IndustriesPreview, null), /*#__PURE__*/React.createElement(CaseStudy, null), /*#__PURE__*/React.createElement(ContactBand, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));