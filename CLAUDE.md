## Development

Start the dev server with:

```
npm run dev
```

This runs `scripts/dev.mjs`, a thin wrapper around `astro dev` that keeps the dev server tied to the terminal's lifetime — closing the terminal or hitting Ctrl+C kills the whole process tree. Do NOT use `astro dev --background`; that starts a detached daemon that keeps running after the terminal closes.

## Deployment

Production deploys to Cloudflare Workers happen automatically via Cloudflare's own Git integration — **not** via a local or CI `wrangler deploy`. When a PR merges into the `stage` branch, Cloudflare detects the change on that branch directly, builds the site, and redeploys it on Workers itself.

- `wrangler.jsonc` at the repo root is a static, minimal config (just `name`, `compatibility_date`, and `assets.directory`) that tells Cloudflare's build how to serve this static site. It is not invoked manually — no `wrangler` npm dependency or `wrangler deploy` script is needed in this repo.
- This is separate from `.github/workflows/deploy.yml`, which deploys the same static build to GitHub Pages independently.
- To ship a change to production: merge into `stage`. Do not add a `wrangler deploy` step back into `package.json` or CI for this.

## GoHighLevel (GHL) form, tracking & cookies

All GHL IDs live in one file: `src/data/ghl.ts` (`formId`, `formName`, `formHeight`, `trackingId`).

- **The form and the tracking code must come from the same GHL sub-account.** The current values point at a **temporary** sub-account. Whenever the form URL/ID changes (e.g. moving to the permanent sub-account), update `trackingId` in the same change — never one without the other.
- The form is rendered by `src/components/ghl/GhlForm.astro`: inline on the homepage (`src/pages/_ConsultationForm.astro`), `/schedule/`, `/get-started/` and `/outdoor-lighting-audio/`, and in a site-wide popup (`GhlFormModal.astro`, mounted in `BaseLayout`).
- Any element with a `data-ghl-form-open` attribute opens the popup. Keep its `href` pointing at `/schedule/` as the no-JS / new-tab fallback. `Button` forwards the attribute.
- The popup's form preloads in the background after page load (or on CTA hover/focus/touch) so it opens instantly. While closed, the dialog stays rendered off-screen with `visibility: hidden` — don't switch it back to `display: none`, or the preloaded form loses its web fonts and sizes itself at the wrong width.
- Each copy of the form on a page needs a distinct `instance` prop — GHL's `form_embed.js` deletes iframes with duplicate ids.
- Pages where the form *is* the page (`/schedule/`, `/get-started/`, `/outdoor-lighting-audio/`) use `<GhlForm primary />`: the iframe `src` is written into the HTML so it starts loading during parse, and on those pages the popup never loads — `data-ghl-form-open` CTAs scroll to the page's own form instead. Both GHL scripts in `BaseLayout` are `async`; don't make `form_embed.js` `defer` again — that held every page script (and the form) behind GHL's CDN for 1–4s.
- The thank-you redirect is a GHL form setting (On submit → redirect to `/thank-you/`, with "add form values to URL" off so no personal data lands in the query string).
- Cookies: necessary only, no marketing cookies. `CookieNotice.astro` records the acknowledgement as `cookie-config=essential`, the cookie GHL's form reads (`data-cookie-consent-provider="ghl_cookie"`). Never write `all` there unless marketing cookies are deliberately introduced — and update the Privacy Policy "Cookies" section if cookie usage changes.

## Photography

Site photography is a licensed Adobe Stock set. The originals (1–23MB each) live outside the repo; `scripts/image-manifest.mjs` maps each one to a library id (e.g. `solutions/cinema-tiered`).

- `npm run images` renders responsive WebP to `public/images/library/<id>-<width>.webp`, a 1200×630 JPEG social preview to `public/images/og/<id>.jpg`, and `src/data/image-library.json`. It only renders missing files; `-- --force` re-renders all. Point `PA_IMAGE_SOURCE` at the originals folder if it isn't `C:/Users/Safeer/Downloads/pa`.
- In pages use `<Picture id="…" alt="…" sizes="…" />` (`src/components/ui/Picture.astro`) with a `sizes` that matches the slot; `priority` only for the one above-the-fold LCP image. `imageUrl()` / `ogImageUrl()` in `src/lib/images.ts` cover CSS backgrounds, data files and `og:image`.
- Raw video masters live in `media-src/videos/` — never in `public/` (Cloudflare Workers rejects assets over 25 MiB, and everything in `public/` is deployed).
- Two films: the hero (`public/videos/hero*.{mp4,webm}`) and the homepage closing film (`closing*`, the site's previous hero). Encodes trim each master's fade from/to black, and each film's poster must be its encode's exact first frame (`ffmpeg -i hero.mp4 -frames:v 1`) — a poster from mid-clip followed by a fade from black read as the video "loading twice". Both start playing only once ~3s is buffered, fade in over the poster, pause off-screen, and have a pause button. Don't add `autoplay` back.

## Scrolling & motion

- Lenis (`src/components/layout/SmoothScroll.astro`, mounted in `BaseLayout`) eases wheel input only; touch stays native and reduced-motion disables it. It drives native scroll, so `position: sticky` and `window` scroll listeners work unchanged. Use `window.lenis?.scrollTo(target)` for programmatic scrolls, and add `data-lenis-prevent` to any nested scroll container.
- The homepage has exactly two pinned scenes: `_TechnicalSilence` (frame scrub, then a hold on the lit frame — `SCRUB_END`) and `_ProcessSteps` (Understand → Design → Integrate → Deliver). Keep it at two.

## SEO & URLs

- `PageLayout` takes the page's own `title` (Seo.astro appends ` | PROJECT: automate` when it fits in 60 chars), `description`, `image` (use `ogImageUrl`), `noindex`, and `schema` (extra JSON-LD nodes). BaseLayout emits one `@graph`: business, website, an automatic breadcrumb trail, plus page nodes.
- Changed URLs keep a 301 in `public/_redirects` (Cloudflare) **and** an entry in `redirects` in `astro.config.mjs` (meta-refresh stubs for GitHub Pages). Add both when renaming a page, and update internal links so none go through a redirect. `trailingSlash` is `'always'`.
- The GitHub Pages (staging) build sets `PUBLIC_NOINDEX=1`, so staging is never indexed.
- Energy Management is deliberately unlinked (the page still exists at `/energy-management/`). Don't add it back to the nav, footer or homepage.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
