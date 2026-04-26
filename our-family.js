/* global React, ReactDOM */
const {
  TOKENS,
  FadeUp,
  PageFade,
  Placeholder,
  Kicker,
  ctaPrimary,
  ctaSecondary,
  Nav,
  Footer
} = window;
const TEAM = [{
  name: "John O'Sullivan",
  role: "Founder & Managing Director",
  bio: "Founded Liscarroll Engineering in 1973. Still on the floor most days.",
  joined: "1973"
}, {
  name: "Mary O'Sullivan",
  role: "Operations Director",
  bio: "Runs scheduling, supplier relations and the books — the engine room.",
  joined: "1985"
}, {
  name: "Patrick O'Sullivan",
  role: "Head of Fabrication",
  bio: "Coded welder. Trains every new fabricator who comes through our doors.",
  joined: "2002"
}, {
  name: "Aoife Murphy",
  role: "Quality & Compliance",
  bio: "ISO lead. If a weld leaves our shop, it has her sign-off.",
  joined: "2014"
}, {
  name: "Declan Walsh",
  role: "Senior CNC Engineer",
  bio: "Twenty years on 5-axis. Will out-precision any spec sheet you give him.",
  joined: "2008"
}, {
  name: "Ciara Kelly",
  role: "Project Manager — Pharma & Food",
  bio: "Runs our regulated-industry projects from quote to handover.",
  joined: "2019"
}, {
  name: "Brian Lynch",
  role: "Senior Welder",
  bio: "Coded to EN ISO 9606. Mirror-finish specialist. Quiet. Brilliant.",
  joined: "2011"
}, {
  name: "Sinead Ryan",
  role: "Design Engineer",
  bio: "Takes the napkin sketches and turns them into manufacturing drawings.",
  joined: "2021"
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
}, "The people who build it")), /*#__PURE__*/React.createElement(FadeUp, {
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
}, "Our family.")), /*#__PURE__*/React.createElement(FadeUp, {
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
}, "Three generations of the O'Sullivan family, plus the engineers, welders and project managers who have made Liscarroll their working home. Every project you commission is in their hands."))));
const TeamGrid = () => /*#__PURE__*/React.createElement("section", {
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
  className: "team-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32
  }
}, TEAM.map((p, i) => /*#__PURE__*/React.createElement(FadeUp, {
  key: p.name,
  delay: i % 4 * 80
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Placeholder, {
  label: `PORTRAIT · ${p.name}`,
  ratio: "3/4",
  tone: i % 2 === 0 ? "navy" : "steel"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.steel,
    marginBottom: 8
  }
}, "Joined ", p.joined), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 26,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: "0 0 4px 0",
    textTransform: "uppercase",
    lineHeight: 1.05
  }
}, p.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: TOKENS.body,
    marginBottom: 12
  }
}, p.role), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13.5,
    lineHeight: 1.55,
    color: TOKENS.body,
    margin: 0
  }
}, p.bio))))))));
const Standards = () => /*#__PURE__*/React.createElement("section", {
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
    marginBottom: 72,
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  dark: true,
  style: {
    marginBottom: 28
  }
}, "How we work")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(40px, 5vw, 72px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: "#fff",
    margin: 0,
    textTransform: "uppercase"
  }
}, "The standards we hold each other to."))), /*#__PURE__*/React.createElement("div", {
  className: "cap-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    borderTop: "1px solid rgba(192,200,209,0.25)"
  }
}, [["01", "Coded welders", "Every welder on-site is certified to international weld code. No exceptions, ever.", "EN ISO 9606"], ["02", "ISO accreditation", "Quality management verified to international standards. Auditable end-to-end.", "ISO 9001"], ["03", "AISI 304 default", "Food-grade stainless as our baseline. Higher grades on request and engineered for the job.", "EN13732"]].map(([n, t, b, s], i, arr) => /*#__PURE__*/React.createElement(FadeUp, {
  key: n,
  delay: i * 80
}, /*#__PURE__*/React.createElement("div", {
  className: "cap-cell",
  style: {
    padding: "48px 32px 48px 0",
    paddingLeft: i === 0 ? 0 : 32,
    borderRight: i === arr.length - 1 ? "none" : "1px solid rgba(192,200,209,0.25)",
    borderBottom: "1px solid rgba(192,200,209,0.25)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: "#9DBED5",
    marginBottom: 28
  }
}, n), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 36,
    letterSpacing: "0.02em",
    color: "#fff",
    margin: "0 0 18px 0",
    textTransform: "uppercase",
    lineHeight: 1
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14.5,
    lineHeight: 1.65,
    color: "#9DBED5",
    margin: 0
  }
}, b), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    paddingTop: 20,
    borderTop: "1px solid rgba(192,200,209,0.25)",
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontSize: 11,
    letterSpacing: "0.10em",
    color: "#9DBED5",
    textTransform: "uppercase"
  }
}, s)))))));
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "our-family.html"
}), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TeamGrid, null), /*#__PURE__*/React.createElement(Standards, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));