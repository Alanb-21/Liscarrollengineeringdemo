function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;

// =========================================================================
// DESIGN TOKENS
// =========================================================================
const TOKENS = {
  white: "#FFFFFF",
  navy: "#0A1628",
  body: "#4A5568",
  steel: "#2E86AB",
  hairline: "#ECEEF1",
  brushed: "#C0C8D1",
  paper: "#FAFAFA"
};

// =========================================================================
// REDUCED MOTION HOOK
// =========================================================================
const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);
  return reduced;
};

// =========================================================================
// FADE-UP — IntersectionObserver-driven scroll reveal
// Honours prefers-reduced-motion: reveal immediately, no transform.
// =========================================================================
const FadeUp = ({
  children,
  delay = 0,
  y = 24,
  as = "div",
  style = {},
  ...rest
}) => {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    if (!ref.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduced]);
  const Tag = as;
  const motionStyle = reduced ? {
    opacity: 1,
    transform: "none"
  } : {
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    willChange: "opacity, transform"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      ...motionStyle,
      ...style
    }
  }, rest), children);
};

// =========================================================================
// PAGE FADE — entry fade only. Navigation is no longer intercepted, so
// internal links work at full browser speed (no artificial 320ms delay).
// =========================================================================
const PageFade = ({
  children
}) => {
  const [entered, setEntered] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 30);
    return () => clearTimeout(t);
  }, []);
  if (reduced) return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: entered ? 1 : 0,
      transform: entered ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 380ms cubic-bezier(.2,.7,.2,1), transform 380ms cubic-bezier(.2,.7,.2,1)",
      minHeight: "100vh"
    }
  }, children);
};

// =========================================================================
// PLACEHOLDER IMAGE
// =========================================================================
const Placeholder = ({
  label,
  ratio = "4/3",
  tone = "navy",
  style = {}
}) => {
  const tones = {
    navy: {
      bg: "#0A1628",
      stripe: "#15243B",
      text: "#8AA0BD"
    },
    steel: {
      bg: "#1B3A52",
      stripe: "#234862",
      text: "#9DBED5"
    },
    light: {
      bg: "#ECEEF1",
      stripe: "#E1E5EA",
      text: "#6B7785"
    },
    paper: {
      bg: "#F4F5F7",
      stripe: "#EAECEF",
      text: "#6B7785"
    }
  };
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: ratio,
      background: t.bg,
      backgroundImage: `repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 28px)`,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: t.text,
      background: "rgba(0,0,0,0.18)",
      padding: "5px 9px",
      borderRadius: 2
    }
  }, label)));
};

// =========================================================================
// KICKER
// =========================================================================
const Kicker = ({
  children,
  dark = false,
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-block",
    width: 22,
    height: 1,
    background: TOKENS.steel
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: dark ? "#9DBED5" : TOKENS.steel
  }
}, children));

// =========================================================================
// CTA STYLES
// =========================================================================
const ctaPrimary = {
  display: "inline-block",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  background: TOKENS.navy,
  color: "#fff",
  padding: "12px 22px",
  borderRadius: 9999,
  textDecoration: "none",
  letterSpacing: "0.02em"
};
const ctaSecondary = {
  display: "inline-block",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  background: TOKENS.white,
  color: TOKENS.navy,
  padding: "12px 22px",
  borderRadius: 9999,
  textDecoration: "none",
  letterSpacing: "0.02em",
  border: `0.5px solid ${TOKENS.brushed}`
};

// =========================================================================
// COUNT-UP — animates a number from 0 to a target value when it scrolls
// into view. Honours prefers-reduced-motion.
// Usage:
//   <Stat value={50} suffix="+" />
//   <Stat value={38} suffix="m" />
//   <Stat value={12} suffix=" wks" />
// =========================================================================
const Stat = ({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  style = {}
}) => {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(reduced ? value : 0);
  useEffect(() => {
    if (reduced) {
      setN(value);
      return;
    }
    if (!ref.current) return;
    let raf = 0;
    let start = 0;
    let done = false;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !done) {
          done = true;
          const step = ts => {
            if (!start) start = ts;
            const t = Math.min(1, (ts - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(Math.round(eased * value));
            if (t < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          obs.disconnect();
        }
      });
    }, {
      threshold: 0.4
    });
    obs.observe(ref.current);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, reduced]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: style,
    "aria-label": `${prefix}${value}${suffix}`
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, prefix, n, suffix));
};

// =========================================================================
// MARQUEE — infinite-loop horizontal scroll. Pauses on hover.
// Honours prefers-reduced-motion (renders a static centred row instead).
// =========================================================================
const Marquee = ({
  items,
  speed = 38,
  gap = 56,
  dark = false
}) => {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: gap,
        padding: "0 24px"
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: dark ? "marquee-pill marquee-pill--dark" : "marquee-pill"
    }, it)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track",
    style: {
      animationDuration: `${speed}s`,
      gap: `${gap}px`
    }
  }, [0, 1].map(dup => /*#__PURE__*/React.createElement("div", {
    key: dup,
    className: "marquee-row",
    style: {
      gap: `${gap}px`
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: dark ? "marquee-pill marquee-pill--dark" : "marquee-pill"
  }, it))))));
};

// =========================================================================
// SKIP LINK — visible on focus, jumps to <main id="main">
// =========================================================================
const SkipLink = () => /*#__PURE__*/React.createElement("a", {
  href: "#main",
  style: {
    position: "absolute",
    left: 16,
    top: 16,
    transform: "translateY(-200%)",
    transition: "transform 150ms ease",
    background: TOKENS.navy,
    color: "#fff",
    padding: "10px 16px",
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 4,
    zIndex: 200,
    textDecoration: "none"
  },
  onFocus: e => {
    e.currentTarget.style.transform = "translateY(0)";
  },
  onBlur: e => {
    e.currentTarget.style.transform = "translateY(-200%)";
  }
}, "Skip to main content");

// =========================================================================
// LOGO
// =========================================================================
const Logo = ({
  height = 36,
  dark = false
}) => /*#__PURE__*/React.createElement("a", {
  href: "index.html",
  style: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none"
  },
  "aria-label": "Liscarroll Engineering \u2014 home"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/liscarroll-logo.png",
  alt: "Liscarroll Engineering",
  style: {
    height,
    width: "auto",
    display: "block",
    mixBlendMode: dark ? "lighten" : "multiply",
    filter: dark ? "brightness(1.05)" : "none"
  }
}));

// =========================================================================
// NAV LINKS
// =========================================================================
const NAV_LINKS = [{
  label: "Industries",
  href: "industries.html"
}, {
  label: "Our Family",
  href: "our-family.html"
}, {
  label: "Case Studies",
  href: "case-studies.html"
}, {
  label: "Our Heritage",
  href: "our-heritage.html"
}, {
  label: "Contact",
  href: "contact.html"
}];

// =========================================================================
// NAV — sticky header with focus-trapped mobile menu
// =========================================================================
const Nav = ({
  current = ""
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const openerRef = useRef(null);
  const closerRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Focus trap + Esc to close
  useEffect(() => {
    if (!mobileOpen) return;
    const node = menuRef.current;
    if (!node) return;
    const focusables = () => Array.from(node.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute("disabled"));
    const first = focusables()[0];
    if (first) first.focus();
    const onKey = e => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        if (openerRef.current) openerRef.current.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const f = focusables();
      if (f.length === 0) return;
      const firstEl = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SkipLink, null), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "14px 24px",
      background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `0.5px solid ${TOKENS.hairline}` : "0.5px solid transparent",
      transition: "background 200ms ease, backdrop-filter 200ms ease, border-color 200ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      padding: "0"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 36
  }), /*#__PURE__*/React.createElement("nav", {
    className: "desktop-nav",
    style: {
      display: "flex",
      gap: 2,
      alignItems: "center"
    },
    "aria-label": "Primary"
  }, NAV_LINKS.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href,
    className: `nav-link${current === item.href ? " is-current" : ""}`,
    "aria-current": current === item.href ? "page" : undefined
  }, item.label)), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "nav-cta"
  }, "Start a Project")), /*#__PURE__*/React.createElement("button", {
    ref: openerRef,
    className: "mobile-menu-btn",
    onClick: () => setMobileOpen(true),
    style: {
      display: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 8
    },
    "aria-label": "Open menu",
    "aria-expanded": mobileOpen,
    "aria-controls": "mobile-menu"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: TOKENS.navy,
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: TOKENS.navy,
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 1,
      background: TOKENS.navy
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    id: "mobile-menu",
    role: "dialog",
    "aria-modal": mobileOpen ? "true" : undefined,
    "aria-label": "Site navigation",
    style: {
      position: "fixed",
      inset: 0,
      background: TOKENS.white,
      zIndex: 100,
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      opacity: mobileOpen ? 1 : 0,
      pointerEvents: mobileOpen ? "auto" : "none",
      transition: "opacity 240ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 32
  }), /*#__PURE__*/React.createElement("button", {
    ref: closerRef,
    onClick: () => {
      setMobileOpen(false);
      if (openerRef.current) openerRef.current.focus();
    },
    style: {
      background: "transparent",
      border: "none",
      fontSize: 28,
      color: TOKENS.navy,
      cursor: "pointer",
      lineHeight: 1
    },
    "aria-label": "Close menu"
  }, "\xD7")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    "aria-label": "Mobile primary"
  }, NAV_LINKS.map((item, i) => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href,
    "aria-current": current === item.href ? "page" : undefined,
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 36,
      letterSpacing: "0.03em",
      color: TOKENS.navy,
      textDecoration: "none",
      padding: "22px 0",
      borderTop: i === 0 ? `1px solid ${TOKENS.hairline}` : "none",
      borderBottom: `1px solid ${TOKENS.hairline}`,
      display: "flex",
      alignItems: "baseline",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 11,
      letterSpacing: "0.20em",
      color: TOKENS.steel
    }
  }, "0", i + 1), item.label))), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    style: {
      ...ctaPrimary,
      marginTop: "auto",
      textAlign: "center",
      padding: "18px 22px"
    }
  }, "Start a Project")));
};

// =========================================================================
// CONSENT — first-party cookie storing the user's banner choice.
// Used to gate Google Maps embeds. Stored in localStorage to avoid
// setting any cookie until the user opts in.
// =========================================================================
const CONSENT_KEY = "le_consent_v1";
const getConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};
const setConsent = v => {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {}
  document.dispatchEvent(new CustomEvent("le:consent", {
    detail: v
  }));
};

// =========================================================================
// COOKIE BANNER — shown until the user accepts or declines.
// =========================================================================
const CookieBanner = () => {
  const [choice, setChoice] = useState(undefined);
  useEffect(() => {
    setChoice(getConsent());
  }, []);
  if (choice === undefined) return null;
  if (choice === "accepted" || choice === "declined") return null;
  const decide = v => {
    setConsent(v);
    setChoice(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "region",
    "aria-label": "Cookie consent",
    style: {
      position: "fixed",
      left: 16,
      right: 16,
      bottom: 16,
      zIndex: 150,
      maxWidth: 720,
      margin: "0 auto",
      background: TOKENS.navy,
      color: "#E8ECF1",
      borderRadius: 10,
      padding: "20px 22px",
      boxShadow: "0 30px 80px -20px rgba(10,22,40,0.45)",
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Inter, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: "#9DBED5",
      flex: "1 1 320px",
      minWidth: 240
    }
  }, "We use a single first-party cookie to remember this choice. Embedded maps load only after you accept.", " ", /*#__PURE__*/React.createElement("a", {
    href: "privacy.html",
    style: {
      color: "#fff",
      textDecoration: "underline"
    }
  }, "Privacy policy"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => decide("declined"),
    style: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.35)",
      padding: "10px 18px",
      borderRadius: 9999,
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      letterSpacing: "0.02em"
    }
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    onClick: () => decide("accepted"),
    style: {
      background: TOKENS.steel,
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: 9999,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      letterSpacing: "0.02em"
    }
  }, "Accept")));
};

// =========================================================================
// FOOTER
// =========================================================================
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: TOKENS.navy,
    color: "#9DBED5",
    padding: "100px 0 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
    gap: 56,
    marginBottom: 80
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
  src: "assets/liscarroll-logo.png",
  alt: "Liscarroll Engineering",
  style: {
    height: 56,
    width: "auto",
    marginBottom: 24,
    filter: "brightness(1.05)"
  }
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    lineHeight: 1.6,
    color: "#9DBED5",
    maxWidth: 320,
    margin: 0
  }
}, "Precision stainless steel manufacturing. Built in Cork since 1973. Trusted nationwide and exporting internationally.")), [{
  title: "Industries",
  items: [["Farming", "industry-farming.html"], ["Food & Beverage", "industry-food.html"], ["Pharmaceuticals", "industry-pharma.html"], ["Leisure", "industry-leisure.html"], ["Bespoke", "industry-bespoke.html"]]
}, {
  title: "Company",
  items: [["Our Family", "our-family.html"], ["Our Heritage", "our-heritage.html"], ["Case Studies", "case-studies.html"], ["Contact", "contact.html"]]
}, {
  title: "Contact",
  items: [["+353 (0)22 48200", "tel:+35302248200"], ["info@liscarrollengineering.ie", "mailto:info@liscarrollengineering.ie"], ["Rockspring, Liscarroll", null], ["Mallow, Co. Cork", null]]
}].map(col => /*#__PURE__*/React.createElement("div", {
  key: col.title
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 24
  }
}, col.title), col.items.map(([label, href]) => {
  const style = {
    fontFamily: "Inter, sans-serif",
    fontSize: 13.5,
    lineHeight: 1.5,
    color: "#9DBED5",
    marginBottom: 10,
    textDecoration: "none",
    display: "block"
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: style
  }, label) : /*#__PURE__*/React.createElement("div", {
    key: label,
    style: style
  }, label);
})))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bottom",
  style: {
    borderTop: "1px solid rgba(192,200,209,0.18)",
    paddingTop: 32,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "#9DBED5",
    letterSpacing: "0.02em"
  }
}, "\xA9 2026 Liscarroll Engineering Limited. All rights reserved."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "privacy.html",
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "#9DBED5",
    textDecoration: "none",
    letterSpacing: "0.02em"
  }
}, "Privacy"), /*#__PURE__*/React.createElement("a", {
  href: "terms.html",
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "#9DBED5",
    textDecoration: "none",
    letterSpacing: "0.02em"
  }
}, "Terms"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    color: "#9DBED5",
    letterSpacing: "0.10em",
    textTransform: "uppercase"
  }
}, "Simply better by design")))), /*#__PURE__*/React.createElement(CookieBanner, null));

// =========================================================================
// SHARED INDUSTRY DATA
// =========================================================================
const INDUSTRIES = [{
  n: "01",
  slug: "farming",
  name: "Farming",
  desc: "Milk cooling tanks, ice banks, silos and buffer tanks engineered to Irish dairy standards.",
  items: ["Milk Cooling Tanks", "Ice Builders", "Milk Silos", "Buffer Tanks", "Heat Recovery Units", "Used Equipment"],
  image: "Dairy plant — silo install",
  long: "Since 1973 we have built milk cooling tanks for Irish dairy farms — every one engineered to AISI 304 food-grade stainless steel and exceeding the EN13732 international cooling standard. Our farming range covers everything from a 1,000-litre direct-expansion tank for a single-herd setup to a full milk silo and buffer system for a co-op.",
  href: "industry-farming.html"
}, {
  n: "02",
  slug: "food",
  name: "Food & Beverage",
  desc: "Precision fabrications for butter producers, creameries and food exporters across Ireland.",
  items: ["Production Lines", "Vessels & Tanks", "Conveyor Systems", "Cleanroom Fittings", "Mixing Equipment", "Bespoke Process Lines"],
  image: "Polished production line",
  long: "Our food and beverage work spans butter producers, creameries, breweries and exporters. We design and fabricate full production lines — from the receiving tank to the packing-line conveyor — finished to a hygiene standard our food-industry clients audit regularly.",
  href: "industry-food.html"
}, {
  n: "03",
  slug: "pharma",
  name: "Pharmaceuticals",
  desc: "Cleanability, traceability and compliance for pharmaceutical manufacturers.",
  items: ["Passivated Vessels", "Sterile Pipework", "Mixing Tanks", "GMP Surfaces", "Validation Documentation", "Mirror-Polished Finishes"],
  image: "Pharma cleanroom vessel",
  long: "For pharmaceutical clients we deliver passivated vessels, sterile pipework and mirror-polished GMP surfaces — every job documented to the traceability standards your auditors expect. Material certificates, weld logs, surface-roughness reports — included as standard, not a paid add-on.",
  href: "industry-pharma.html"
}, {
  n: "04",
  slug: "leisure",
  name: "Leisure",
  desc: "Bespoke stainless steel pools, spas and wellness installations.",
  items: ["Plunge Pools", "Hot & Cold Tubs", "Spa Surrounds", "Wellness Suites", "Architectural Water Features", "Custom Finishes"],
  image: "Stainless plunge pool",
  long: "Stainless steel is the right material for water — it does not rot, it does not stain, it does not need replacing in a decade. Our leisure work covers plunge pools, hot and cold therapy tubs, full wellness suites and architectural water features — every weld polished to remove every visual seam.",
  href: "industry-leisure.html"
}, {
  n: "05",
  slug: "bespoke",
  name: "Bespoke",
  desc: "Anything outside the standard catalogue — including signature work for Croke Park.",
  items: ["Bar Installations", "Architectural", "Sculpture", "One-Offs", "Hospitality Fit-Out", "Public Realm"],
  image: "Bespoke bar fabrication",
  long: "If it can be drawn in stainless steel, it can be made in our Cork facility. Our bespoke work has been specified for Croke Park, hospitality fit-outs across Dublin, and one-off architectural pieces for projects we are not contractually allowed to name. Bring us a sketch — we will engineer the rest.",
  href: "industry-bespoke.html"
}];

// =========================================================================
// EXPORT GLOBALS
// =========================================================================
Object.assign(window, {
  TOKENS,
  FadeUp,
  PageFade,
  Placeholder,
  Kicker,
  ctaPrimary,
  ctaSecondary,
  Logo,
  Nav,
  Footer,
  CookieBanner,
  Stat,
  Marquee,
  getConsent,
  setConsent,
  usePrefersReducedMotion,
  INDUSTRIES,
  useState,
  useEffect,
  useRef
});