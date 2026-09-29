# minuteminder.io: new site

Static site. No build step: deploy this folder as is (it is the site root).

## Pages (URL → file)

| URL | File |
|---|---|
| `/` | `index.html` (Home) |
| `/features` | `Features.dc.html` |
| `/how-to-use` | `HowToUse.dc.html` |
| `/pricing` | `Pricing.dc.html` |
| `/security` | `Security.dc.html` (privacy overview) |
| `/privacy` | `Privacy.dc.html` (Privacy Policy) |
| `/terms` | `Terms.dc.html` |
| `/online-calls-timer-and-AI-reminders` | `Landing.dc.html` (ad landing page: no menu, `noindex`) |

- The URL mapping is already set in `vercel.json` (Vercel) and `_redirects` (Netlify). Use the file for your host.
- 301 redirects kept from the old site: `/privacy-policy` → `/privacy`, `/terms-and-conditions` → `/terms`, `/support` → the support Google Form.
- Keep URLs without a trailing slash (`trailingSlash: false` in `vercel.json`). The pages load `support.js` and `assets/` by relative path from the root.

## How the pages work

- Each `.dc.html` page renders through `support.js` (the Claude Design runtime). Do not remove it.
- The menu and footer are shared components: `SiteNav.dc.html`, `SiteFooter.dc.html`. The runtime loads them from the root.

## Already included

- **Tracking:** `site-tracking.js` loads Google Tag Manager `GTM-MFKNJHRB` with Consent Mode v2 (denied by default) and the cookie banner (vanilla-cookieconsent 3.1.0, self-hosted in `vendor/`). Same setup as the old site. Every button and link has a `data-gtm` attribute. Landing page names start with `landing-`.
- **SEO:** each page has title, meta description, canonical, Open Graph, Twitter tags, and JSON-LD (SoftwareApplication, FAQPage, HowTo, BreadcrumbList).
- **Social previews:** `og/og-*.png` (1200×630).
- **Root files:** `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest`, favicons, `assets/logo-512.png` (used by JSON-LD).

## Checked locally (2026-09-28)

All 8 URLs return 200 and render with menu, footer, cookie banner, and GTM. No console errors. Redirects return 301. Every asset referenced by the pages exists.

## To do on deploy

1. Deploy this folder.
2. Check a few pages on the live domain, and test a link preview (for example with the LinkedIn Post Inspector) to refresh cached social images.
3. Submit `https://minuteminder.io/sitemap.xml` in Google Search Console.
