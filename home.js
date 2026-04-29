/* global React, ReactDOM */

// HERO — premium pass: real photo, ken burns, staggered load motion, anchored stat card.
// Unsplash hero image: a moody industrial / stainless plant frame.
// TODO: replace Unsplash URL with real Liscarroll plant-floor photography once shot.
const HERO_IMG = "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80";
const HERO_IMG_FALLBACKS = ["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80", "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"];
const HEADLINE_WORDS = [{
  text: "Stainless",
  lineEnd: false
}, {
  text: "Steel.",
  lineEnd: true
}, {
  text: "Built",
  lineEnd: false
}, {
  text: "to",
  lineEnd: false
}, {
  text: "Outlast.",
  lineEnd: false
}];
const Hero = () => {
  const onImgError = e => {
    const tried = Number(e.currentTarget.dataset.tried || 0);
    if (tried < HERO_IMG_FALLBACKS.length) {
      e.currentTarget.dataset.tried = String(tried + 1);
      e.currentTarget.src = HERO_IMG_FALLBACKS[tried];
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: TOKENS.white,
      borderBottom: `1px solid ${TOKENS.hairline}`,
      position: "relative"
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-anim hero-anim-eyebrow"
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 32
    }
  }, "Est. 1973 \xB7 Liscarroll, Co. Cork")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline",
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "clamp(56px, 8vw, 120px)",
      lineHeight: 0.92,
      letterSpacing: "0.02em",
      color: TOKENS.navy,
      margin: 0,
      textTransform: "uppercase",
      textWrap: "balance",
      WebkitTextWrap: "balance"
    }
  }, HEADLINE_WORDS.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-anim hero-anim-word",
    style: {
      display: "inline-block",
      animationDelay: `${400 + i * 60}ms`
    }
  }, w.text), i < HEADLINE_WORDS.length - 1 && (w.lineEnd ? /*#__PURE__*/React.createElement("br", null) : " ")))), /*#__PURE__*/React.createElement("p", {
    className: "hero-anim hero-anim-body",
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 17,
      lineHeight: 1.55,
      color: TOKENS.body,
      maxWidth: 460,
      marginTop: 36,
      marginBottom: 0
    }
  }, "Fifty years of precision stainless steel engineering for farming, food, pharma, leisure and bespoke. Built in Cork. Shipped worldwide."), /*#__PURE__*/React.createElement("div", {
    className: "hero-anim hero-anim-cta",
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
  }, "View our work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-image-wrap",
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "4/5",
      overflow: "hidden",
      borderRadius: 4,
      background: TOKENS.navy
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO_IMG,
    onError: onImgError,
    "data-tried": "0",
    alt: "Stainless steel fabrication on the Liscarroll Engineering plant floor \u2014 sparks from a TIG weld",
    className: "hero-anim hero-anim-image hero-image-kenburns",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,22,40,0.40) 0%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.20) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-caption",
    style: {
      position: "absolute",
      left: 24,
      bottom: 24,
      display: "flex",
      alignItems: "center",
      gap: 12,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 2,
      height: 14,
      background: TOKENS.steel
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.8)",
      fontFamily: "Inter, sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, "Plant Floor \xB7 Liscarroll"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge hero-anim hero-anim-card",
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      transform: "translate(-30%, 50%)",
      background: TOKENS.white,
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 4,
      height: 4,
      background: TOKENS.steel
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-num",
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      color: TOKENS.navy,
      lineHeight: 1,
      letterSpacing: "0.02em"
    }
  }, "50+"), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-label",
    style: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      color: TOKENS.body
    }
  }, "Years of stainless steel engineering, in continuous operation since 1973.")))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll-indicator",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-scroll-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-scroll-square"
  })));
};

// TRUST STRIP — wordmark stand-ins, full SVG logos to follow.
// TODO: Replace text wordmarks with actual SVG client logos once licensed.
const TRUST_CLIENTS = ["Croke Park", "Glanbia", "Dairygold", "Kerry Group", "Musgrave"];
const TrustStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "trust-strip",
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
  style: {
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#6B7785",
    marginBottom: 24
  }
}, "Trusted across Ireland's leading industries"), /*#__PURE__*/React.createElement("div", {
  className: "trust-row"
}, TRUST_CLIENTS.map(name => /*#__PURE__*/React.createElement("span", {
  key: name,
  className: "trust-mark",
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: TOKENS.navy,
    opacity: 0.4,
    transition: "opacity 200ms ease",
    maxHeight: 36,
    lineHeight: "36px",
    whiteSpace: "nowrap"
  },
  onMouseEnter: e => {
    e.currentTarget.style.opacity = 1;
  },
  onMouseLeave: e => {
    e.currentTarget.style.opacity = 0.4;
  }
}, name)))));

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

// LOCATION MAP
const LocationMap = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px 80px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 24,
    marginBottom: 32
  }
}, /*#__PURE__*/React.createElement(Kicker, null, "Find us"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 4.5vw, 64px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase"
  }
}, "Rockspring, Liscarroll, Co. Cork."))), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    paddingTop: "42%",
    border: `0.5px solid ${TOKENS.hairline}`,
    borderRadius: 12,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("iframe", {
  title: "Liscarroll Engineering \u2014 Rockspring, Liscarroll, Co. Cork",
  src: "https://www.google.com/maps?q=Liscarroll+Engineering,+Rockspring,+Liscarroll,+Co.+Cork,+Ireland&output=embed",
  loading: "lazy",
  referrerPolicy: "no-referrer-when-downgrade",
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: 0
  }
})))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: ""
}), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(IndustriesPreview, null), /*#__PURE__*/React.createElement(CaseStudy, null), /*#__PURE__*/React.createElement(ContactBand, null), /*#__PURE__*/React.createElement(LocationMap, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));