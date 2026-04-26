/* global React, ReactDOM */

const STUDIES = [{
  client: "Ballymaloe",
  n: "01",
  title: "Production line",
  sector: "Food & Beverage",
  year: "2024",
  scale: "38m line",
  tone: "steel"
}, {
  client: "Croke Park",
  n: "02",
  title: "Tap. Take. Go. bar fabrication",
  sector: "Bespoke",
  year: "2021",
  scale: "12 stations",
  tone: "navy"
}, {
  client: "Dale Farm",
  n: "03",
  title: "Co-op silo install",
  sector: "Farming",
  year: "2023",
  scale: "60,000 L",
  tone: "steel"
}, {
  client: "Hot Box Wellness",
  n: "04",
  title: "Plunge pool suite",
  sector: "Leisure",
  year: "2025",
  scale: "8 units",
  tone: "navy"
}, {
  client: "Confidential pharma",
  n: "05",
  title: "Passivated vessel run",
  sector: "Pharmaceuticals",
  year: "2024",
  scale: "GMP grade",
  tone: "steel"
}, {
  client: "Kerry creamery",
  n: "06",
  title: "Buffer tank upgrade",
  sector: "Farming",
  year: "2022",
  scale: "40,000 L",
  tone: "navy"
}];
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    borderBottom: `1px solid ${TOKENS.hairline}`,
    padding: "100px 0 80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 32
  }
}, "Selected work")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(56px, 8vw, 120px)",
    lineHeight: 0.92,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase",
    maxWidth: 1100
  }
}, "Case studies.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 220
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 18,
    lineHeight: 1.55,
    color: TOKENS.body,
    maxWidth: 640,
    marginTop: 32
  }
}, "A small selection of recent projects. Many of our pharmaceutical and bespoke clients are under NDA \u2014 these are the ones we are allowed to show."))));
const Grid = () => /*#__PURE__*/React.createElement("section", {
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
  className: "industries-hub-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48
  }
}, STUDIES.map((s, i) => /*#__PURE__*/React.createElement(FadeUp, {
  key: s.client,
  delay: i % 2 * 100
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    display: "block",
    textDecoration: "none",
    color: "inherit"
  },
  onMouseEnter: e => {
    const img = e.currentTarget.querySelector(".cs-img");
    if (img) img.style.transform = "scale(1.04)";
  },
  onMouseLeave: e => {
    const img = e.currentTarget.querySelector(".cs-img");
    if (img) img.style.transform = "scale(1)";
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    overflow: "hidden",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "cs-img",
  style: {
    transition: "transform 600ms cubic-bezier(.2,.7,.2,1)"
  }
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: `CASE · ${s.client} ${s.title}`,
  ratio: "4/3",
  tone: s.tone
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: TOKENS.steel,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 9999,
    padding: "7px 14px",
    border: `0.5px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: TOKENS.steel,
    flexShrink: 0
  }
}), s.n, " \xB7 ", s.sector), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body
  }
}, s.year)), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 44,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: "0 0 8px 0",
    textTransform: "uppercase",
    lineHeight: 1
  }
}, s.client), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    lineHeight: 1.5,
    color: TOKENS.body,
    marginBottom: 16
  }
}, s.title, " \xB7 ", s.scale), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: TOKENS.navy,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    borderBottom: `1px solid ${TOKENS.steel}`,
    paddingBottom: 4
  }
}, "Read the study \u2192"))))))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "case-studies.html"
}), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Grid, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));