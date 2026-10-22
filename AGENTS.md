<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# King Spa Chicago website

Next.js 16 (App Router, static export) + Sanity Studio embedded at `/cms`, Tailwind CSS v4, hosted on **SiteGround** as plain files. Rebuild of the WordPress + Elementor site at https://chi.kingspa.com, built by TTR Digital Marketing on the same architecture as the Beverly Hills Dental site.

- **Same site, same URLs.** Every page, the blog post and the WordPress archive pages keep their addresses (`/pricing/`, `/massagetherapy/`, `/uncategorized/the-authentic-korean-spa-experience/`, `/author/ttr/` ...). Text, prices, titles, links and images are the old site's, as they were (the owner chose to keep them unchanged).
- **Content:** each page's built-in copy is in `lib/data/pages/*.ts` (site-wide: `lib/data/site.ts`, posts: `lib/data/posts.ts`, images with alt text: `lib/data/images.ts`). The Sanity schema, the seed script and the GROQ merge are all generated from those objects (`lib/cms/spec.ts`), so a field added to a page's data appears in /cms automatically. A field left empty in /cms keeps the built-in value.
- **Design:** measured from the live pages at 1440px and 390px. Fonts as on the old site: Recoleta and Tang Garland (the same font files the old site served, self-hosted in `public/fonts/`), Mulish, Tienne and the page-specific Google fonts (self-hosted by next/font). Recoleta at weight 600+ renders in the browser's sans-serif on the old site (its bold file never loaded); that look is kept on purpose.
- **Menu:** full menu from 1025px up (the old site's breakpoint), phone menu below.
- **Third parties kept as they were:** gift card shop (store.kingspa.com, linked), Elfsight Google Reviews (embedded, loaded when scrolled near), Google Maps (lazy iframes), Google Tag Manager GTM-MR3XHJK3, the Fall Sale popup (hides itself after the end date set in /cms > Site settings > Promo popup).
- **Form:** the $45 e-coupon form posts to `/api/lead.php` (PHP on SiteGround), which forwards to a GoHighLevel inbound webhook once one is configured.

## Old URLs (`public/.htaccess`)

All page URLs are unchanged. The WordPress-only extras answer as follows: every image used on the old pages (`/wp-content/uploads/...`, any WordPress size) 301s to its new file under `/images/`; `?page_id=` / `?p=` / `?author=` / `?cat=` links 301 to their page; the WordPress sitemaps 301 to `/sitemap.xml`; `/wp-content/uploads/2026/05/counpon_chi.png` (the e-coupon image in e-mails already sent) is kept at its old address; WordPress-only paths (`/wp-admin/`, `/wp-json/`, `/wp-login.php`, `/xmlrpc.php`, feeds, theme/plugin files, unused media) answer **410 Gone**. Any other host name (the SiteGround temporary address, www.) and plain http 301 to `https://chi.kingspa.com`.

## Setup

1. **Sanity project:** set the repository variable `SANITY_PROJECT_ID` (Settings > Secrets and variables > Actions > Variables) and, locally, `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`. Dataset `production`.
2. **CORS:** sanity.io/manage > project > API > CORS origins: `https://chi.kingspa.com`, the Vercel preview URL and `http://localhost:3000`, each with "Allow credentials". Without it, /cms shows "Add CORS origin".
3. **Load the content into Sanity (once), all in the browser:**
   1. Create an Editor token: sanity.io/manage > project > API > Tokens > Add API token (permission: Editor).
   2. Add it on GitHub: this repo > Settings > Secrets and variables > Actions > New repository secret, name `SANITY_WRITE_TOKEN`.
   3. Actions > "Load content into Sanity" > Run workflow, mode **add-missing**. **overwrite** replaces the CMS with the built-in content; **dry-run** checks without writing. The optional **only** box limits a run to documents whose ID starts with the given text, e.g. `pricingPage,siteSettings`.
   4. Delete or rotate the token afterwards.

   On a computer instead: put the token in `.env.local` as `SANITY_WRITE_TOKEN`, then `npm install && npm run seed` (`-- --force` to overwrite, `-- --dry-run` to check).
4. **Run:** `npm run dev`, then http://localhost:3000 and http://localhost:3000/cms.

## Hosting on SiteGround

`npm run build` writes the whole site to `out/`: HTML pages, `_next/` scripts, `_img/` WebP photos, `api/lead.php` (the form) and `.htaccess`. Upload the **contents** of `out/` into the site's `public_html`.

Automatic deploys (`.github/workflows/deploy-siteground.yml`) build and upload over FTPS on every push to this branch or `main`, when Sanity publishes, and from Actions > "Deploy to SiteGround" > Run workflow. Only changed files are uploaded. Until the FTP secrets exist the workflow only builds (the site zip is kept as a run artifact for 14 days).

| Secret | Value |
|---|---|
| `SG_FTP_SERVER` | FTP host (Site Tools > Site > FTP Accounts > Manage > FTP credentials) |
| `SG_FTP_USERNAME` / `SG_FTP_PASSWORD` | an FTP account whose folder is the site's `public_html` |
| `GHL_WEBHOOK_URL` | the e-coupon form's GoHighLevel inbound webhook; the workflow writes it to `api/lead-config.php` (never served, see `.htaccess`) |

Repository **variables** (not secrets): `SANITY_PROJECT_ID`, `GHL_CHAT_WIDGET_ID` (shows the GoHighLevel chat, loaded after the first interaction or 4 s), `GA_ID`, `GTM_ID` (defaults to the old site's `GTM-MR3XHJK3`).

**Publish → live:** in sanity.io/manage > API > Webhooks, add a webhook: URL `https://api.github.com/repos/TTRDigital/King-Spa-Chicago/dispatches`, method POST, triggers create/update/delete, projection `{"event_type": "sanity-publish"}`, headers `Authorization: Bearer <GitHub fine-grained token with Contents: read and write on this repo>` and `Accept: application/vnd.github+json`.

## The e-coupon form

Same fields as the old form: Name, Email, Number Of Visitors (required), Visiting Date. Client and server validation, a hidden honeypot field plus a timing check (dropped only when both say spam; one alone is delivered with a `suspected-spam` tag), a per-IP rate limit, UTM/gclid attribution. Payload: flat JSON with `name`, `first_name`, `last_name`, `email`, `number_of_visitors`, `visiting_date`, `tags` (`website-lead`, `e-coupon-45`), `spam_check`, `page_url`, `landing_page`, `referrer` and the UTM fields. The old WordPress form e-mailed the coupon itself; now a GoHighLevel automation on that webhook must send it. **Without a webhook configured the form accepts requests but does not forward them** (the PHP error log says so).

## Development

```bash
npm run dev        # local site
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # WebP copies + static export to out/
```

Builds in an environment that already sets another project's Sanity variables: `env -u NEXT_PUBLIC_SANITY_PROJECT_ID -u NEXT_PUBLIC_SANITY_DATASET npm run build`.
