/* global React, ReactDOM */

const TIMELINE = [["1973", "Founded in Liscarroll", "Liscarroll Engineering opens a small fabrication shop in Liscarroll, Co. Cork. First job: a milk cooling tank for a neighbouring dairy farm."], ["1981", "First export contract", "Refurbished equipment shipped to a creamery in the United Kingdom. The export business begins quietly."], ["1989", "Into food production", "Expansion from dairy farming into full food-production fabrication. Butter producers and creameries become long-term clients."], ["1996", "Operations professionalised", "A full-time operations function is established. Scheduling, supplier relations and quality controls move onto a formal footing."], ["2004", "Move to Rockspring", "Relocation to the current 20,000 sq ft facility at Rockspring. CNC machinery and full craneage installed."], ["2011", "Pharmaceutical work begins", "First passivated vessels delivered to an Irish pharmaceutical client. Mirror-polished GMP work becomes a core capability."], ["2017", "ISO accreditation", "Quality management system audited and certified to ISO 9001 across every manufacturing process."], ["2021", "Croke Park", "Bespoke 'Tap. Take. Go.' bar fabrication delivered for one of Ireland's most-watched venues."], ["2026", "Five sectors, shipped worldwide", "Farming, food, pharma, leisure and bespoke — all from the same Cork plant, with the same team carrying the standard forward."]];
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
}, "Fifty-three years")), /*#__PURE__*/React.createElement(FadeUp, {
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
}, "Our heritage.")), /*#__PURE__*/React.createElement(FadeUp, {
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
}, "One Cork plant. One team. Fifty-three years of stainless steel manufacturing \u2014 and counting."))));
const HeritageImages = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "0 0 120px",
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Placeholder, {
  label: "ARCHIVE \xB7 Workshop floor, Liscarroll, c. 1978",
  ratio: "21/9",
  tone: "paper"
})), /*#__PURE__*/React.createElement("div", {
  className: "heritage-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 32,
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement(FadeUp, {
  delay: 100
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: "ARCHIVE \xB7 First milk tank, 1973",
  ratio: "4/3",
  tone: "navy"
})), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 200
}, /*#__PURE__*/React.createElement(Placeholder, {
  label: "ARCHIVE \xB7 Plant floor, 1989",
  ratio: "4/3",
  tone: "steel"
})))));
const Timeline = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    padding: "120px 0",
    borderBottom: `1px solid ${TOKENS.hairline}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 72
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 28
  }
}, "The timeline")), /*#__PURE__*/React.createElement(FadeUp, {
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
}, "A reputation, hammered out."))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: `1px solid ${TOKENS.hairline}`
  }
}, TIMELINE.map(([year, title, body], i) => /*#__PURE__*/React.createElement(FadeUp, {
  key: year,
  delay: i * 50
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: 32,
    padding: "36px 0",
    borderBottom: `1px solid ${TOKENS.hairline}`,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 56,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    lineHeight: 1
  }
}, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 18,
    fontWeight: 500,
    color: TOKENS.navy,
    margin: "0 0 10px 0",
    letterSpacing: "0.01em"
  }
}, title), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    lineHeight: 1.65,
    color: TOKENS.body,
    margin: 0,
    maxWidth: 640
  }
}, body))))))));
const Quote = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.navy,
    color: "#E8ECF1",
    padding: "140px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 32px",
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 80,
    color: TOKENS.steel,
    lineHeight: 1,
    display: "block",
    marginBottom: 24
  }
}, "\"")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(36px, 5vw, 64px)",
    lineHeight: 1.1,
    letterSpacing: "0.02em",
    color: "#fff",
    margin: 0,
    textTransform: "uppercase"
  }
}, "We have only ever made one promise \u2014 that what leaves our floor will outlast what we made the year before.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 240
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48,
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    color: "#9DBED5",
    letterSpacing: "0.20em",
    textTransform: "uppercase"
  }
}, "Liscarroll Engineering \xB7 Est. 1973"))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "our-heritage.html"
}), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(HeritageImages, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(Quote, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));