// Vercel serverless function: receives contact form submissions and emails
// them via Resend (https://resend.com).
//
// Env vars required (set in Vercel project settings):
//   RESEND_API_KEY    — your Resend API key
//   CONTACT_EMAIL_TO  — recipient address, e.g. info@liscarrollengineering.ie
//   CONTACT_EMAIL_FROM — sender address on a verified domain in Resend,
//                        e.g. "Liscarroll Website <noreply@liscarrollengineering.ie>"
//
// Optional:
//   CONTACT_REPLY_BCC — comma-separated bcc list

const ALLOWED_ORIGINS = [
  "https://liscarrollengineering.ie",
  "https://www.liscarrollengineering.ie",
];

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || ""));

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot — silent accept, drop on the floor.
  if (body.company_website && String(body.company_website).trim() !== "") {
    res.status(200).json({ ok: true });
    return;
  }

  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 200);
  const phone = String(body.phone || "").trim().slice(0, 60);
  const company = String(body.company || "").trim().slice(0, 200);
  const industry = String(body.industry || "").trim().slice(0, 60);
  const product = String(body.product || "").trim().slice(0, 120);
  const message = String(body.message || "").trim().slice(0, 5000);

  if (!name || !isEmail(email) || !message) {
    res.status(400).json({ error: "Please fill in name, a valid email, and a message." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) {
    res.status(500).json({
      error: "Email service is not configured. Please call +353 (0)22 48200 instead.",
    });
    return;
  }

  const subject = `New enquiry — ${name}${industry ? ` (${industry})` : ""}`;
  const lines = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Industry", industry || "—"],
    ["Product", product || "—"],
  ];
  const html = `
    <h2 style="font-family:Inter,Arial,sans-serif;color:#0A1628;margin:0 0 16px">New enquiry from liscarrollengineering.ie</h2>
    <table style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#0A1628;border-collapse:collapse;margin-bottom:16px">
      ${lines.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#4A5568">${escapeHtml(k)}</td><td style="padding:4px 0;font-weight:500">${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <h3 style="font-family:Inter,Arial,sans-serif;color:#0A1628;margin:24px 0 8px">Message</h3>
    <div style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#0A1628;white-space:pre-wrap;line-height:1.55">${escapeHtml(message)}</div>
  `;
  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        bcc: process.env.CONTACT_REPLY_BCC
          ? process.env.CONTACT_REPLY_BCC.split(",").map((s) => s.trim()).filter(Boolean)
          : undefined,
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("Resend send failed:", resp.status, detail);
      res.status(502).json({ error: "Could not send your message. Please email info@liscarrollengineering.ie or call +353 (0)22 48200." });
      return;
    }
  } catch (err) {
    console.error("Resend network error:", err);
    res.status(502).json({ error: "Could not reach our email service. Please email info@liscarrollengineering.ie or call +353 (0)22 48200." });
    return;
  }

  res.status(200).json({ ok: true });
};
