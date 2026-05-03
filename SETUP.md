# Production setup notes

This PR ships several pieces that need a small amount of one-time configuration in Vercel before they will work end-to-end.

## 1. Contact form (`/api/contact`)

The contact form posts to `api/contact.js`, a Vercel serverless function that delivers the message via [Resend](https://resend.com).

Steps:

1. Sign up at https://resend.com.
2. Add and verify the `liscarrollengineering.ie` domain (Resend will give you DNS records to add).
3. Create an API key.
4. In the Vercel project → Settings → Environment Variables, add:

   | Name                 | Value                                                            |
   | -------------------- | ---------------------------------------------------------------- |
   | `RESEND_API_KEY`     | `re_...` (your Resend key)                                       |
   | `CONTACT_EMAIL_TO`   | `info@liscarrollengineering.ie`                                  |
   | `CONTACT_EMAIL_FROM` | `Liscarroll Website <noreply@liscarrollengineering.ie>`          |
   | `CONTACT_REPLY_BCC`  | *(optional, comma-separated extra recipients)*                   |

5. Redeploy. The form will return a clear error if any of these are missing.

The function includes a hidden honeypot field (`company_website`); bots that fill it are silently dropped.

## 2. Open Graph image

`assets/og-image.svg` is the new 1200×630 social card. Most platforms render SVG OG images correctly, but **Facebook and WhatsApp prefer PNG/JPG**. To get a perfect social preview everywhere, render the SVG to PNG once:

```bash
# Option A: any online SVG → PNG converter at 1200×630
# Option B: macOS one-liner using rsvg-convert
brew install librsvg
rsvg-convert -w 1200 -h 630 assets/og-image.svg -o assets/og-image.png
```

Then update the `og:image` and `twitter:image` meta tags in every HTML file from `og-image.svg` to `og-image.png`.

## 3. Favicon

`assets/favicon.svg` is the primary favicon (modern browsers). Older browsers fall back to `assets/liscarroll-logo.png`. If you want a sharper Safari pinned-tab icon, generate `favicon.ico` (32×32 + 16×16) at e.g. https://realfavicongenerator.net and add it to `assets/`.

## 4. GDPR / cookies

- A first-party `localStorage` flag (`le_consent_v1`) records the visitor's banner choice; no cookie is set until they accept.
- Google Maps embeds are gated by that flag (`home.jsx` `LocalMap` only mounts the iframe once consent is `accepted`).
- `privacy.html` and `terms.html` are linked from the footer.

If you add any third-party tracking (e.g. Plausible, GA), wire it through the same `getConsent()` helper exported from `shared.jsx`.

## 5. Vercel clean URLs

`vercel.json` now sets `cleanUrls: true`. Once deployed, `/contact` will resolve to `/contact.html` automatically. Internal links in the codebase still use the `.html` form so nothing breaks if you self-host without Vercel.

## 6. Build

```bash
npm install
npm run build   # transpiles every *.jsx → *.js (incl. legal.jsx)
```
