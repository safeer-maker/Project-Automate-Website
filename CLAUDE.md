## Development

Start the dev server with:

```
npm run dev
```

This runs `scripts/dev.mjs`, a thin wrapper around `astro dev` that keeps the dev server tied to the terminal's lifetime — closing the terminal or hitting Ctrl+C kills the whole process tree. Do NOT use `astro dev --background`; that starts a detached daemon that keeps running after the terminal closes.

## Deployment

Production deploys to Cloudflare Workers happen automatically via Cloudflare's own Git integration — **not** via a local or CI `wrangler deploy`. Cloudflare watches the `main` branch: when a PR merges into `main` (or anything is pushed to it), Cloudflare builds the site and redeploys it on Workers itself. There is no `stage` branch in this repo.

- `wrangler.jsonc` at the repo root is a static, minimal config (just `name`, `compatibility_date`, and `assets.directory`) that tells Cloudflare's build how to serve this static site. It is not invoked manually — no `wrangler` npm dependency or `wrangler deploy` script is needed in this repo.
- This is separate from `.github/workflows/deploy.yml`, which deploys the same static build to GitHub Pages (the noindexed staging host). It runs on every push or merge to `main`, on any branch when a pushed commit message contains `@deploy`, and manually from the Actions tab.
- `public/_headers` sets Cloudflare caching: `/_astro/*` (content-hashed) is immutable for a year; `/images/*`, `/videos/*` are cached a week with stale-while-revalidate because their filenames aren't hashed. If you ever replace an image or video in place and need it live at once, give it a new filename.
- To ship a change to production: merge into `main`. Do not add a `wrangler deploy` step back into `package.json` or CI for this.

## GoHighLevel (GHL) form, tracking & cookies

All GHL IDs live in one file: `src/data/ghl.ts` (`formId`, `formName`, `formHeight`, `trackingId`).

- **The form and the tracking code must come from the same GHL sub-account.** Both (and the booking calendars and GHL scripts) are served from the studio's own `links.projectautomate.com`. Whenever the form URL/ID changes, update `trackingId` in the same change — never one without the other.
- The form is rendered by `src/components/ghl/GhlForm.astro`: inline on the homepage (`src/pages/_ConsultationForm.astro`), `/get-started/` and `/outdoor-lighting-audio/`, and in a site-wide popup (`GhlFormModal.astro`, mounted in `BaseLayout`).
- Two GHL booking calendars (`ghlCalendars` in `src/data/ghl.ts`, rendered by `GhlCalendar.astro` inside `src/pages/schedule/_BookingSection.astro`): `consultation` at `/schedule/`, the public booking link for Google Business Profile and other outside links (its own form sits inside the calendar); `inResidence` at `/schedule/in-residence/` (noindex, out of the sitemap, unlinked), where the GHL automation sends a contact after the consultation form to book the in-residence consultation (a specialist meets them at home and shares completed work). Call it the in-residence consultation in copy, never a "site visit" (client request: it should read as a premium, private service).
- Consultation CTA buttons carry `class="cta-lux"` (plus `cta-lux-beacon` for a page's lead CTA) and render `<CtaLabel />` as their only child (`src/components/ui/CtaLabel.astro`, styles in `src/styles/cta.css`). Copy lives in `src/data/cta.ts`: "Request Your Complimentary Consultation", swapped for "Complimentary Consultation" at ≤700px so it stays on one line ("complimentary", never "free": client request). Its ambient motion animates only `transform`/`opacity`; keep it that way. Hover effects are mouse-only (`hover: hover`). Buttons are pills (`--radius-pill`).
- Any element with a `data-ghl-form-open` attribute opens the popup. Keep its `href` pointing at `/schedule/` as the no-JS / new-tab fallback. `Button` forwards the attribute.
- The popup's form preloads in the background after page load (or on CTA hover/focus/touch) so it opens instantly. While closed, the dialog stays rendered off-screen with `visibility: hidden` — don't switch it back to `display: none`, or the preloaded form loses its web fonts and sizes itself at the wrong width.
- Each copy of the form on a page needs a distinct `instance` prop — GHL's `form_embed.js` deletes iframes with duplicate ids.
- Pages where the form *is* the page (`/get-started/`, `/outdoor-lighting-audio/`) use `<GhlForm primary />`, and a booking calendar is always primary too (`/schedule/`, `/schedule/in-residence/`): the iframe `src` is written into the HTML so it starts loading during parse, and on those pages the popup never loads — `data-ghl-form-open` CTAs scroll to the page's own form instead. Both GHL scripts in `BaseLayout` are `async`; don't make `form_embed.js` `defer` again — that held every page script (and the form) behind GHL's CDN for 1–4s.
- The thank-you redirect is a GHL form setting (On submit → redirect to `/thank-you/`, with "add form values to URL" off so no personal data lands in the query string).
- Cookies: necessary only, no marketing cookies. `CookieNotice.astro` records the acknowledgement as `cookie-config=essential`, the cookie GHL's form reads (`data-cookie-consent-provider="ghl_cookie"`). Never write `all` there unless marketing cookies are deliberately introduced — and update the Privacy Policy "Cookies" section if cookie usage changes.

## Photography

Site photography is a licensed Adobe Stock set. The originals (1–23MB each) live outside the repo; `scripts/image-manifest.mjs` maps each one to a library id (e.g. `solutions/cinema-tiered`).

- `npm run images` renders responsive WebP to `public/images/library/<id>-<width>.webp`, a 1200×630 JPEG social preview to `public/images/og/<id>.jpg`, and `src/data/image-library.json`. It only renders missing files; `-- --force` re-renders all. Point `PA_IMAGE_SOURCE` at the originals folder if it isn't `C:/Users/Safeer/Downloads/pa`.
- In pages use `<Picture id="…" alt="…" sizes="…" />` (`src/components/ui/Picture.astro`) with a `sizes` that matches the slot; `priority` only for the one above-the-fold LCP image. `imageUrl()` / `ogImageUrl()` in `src/lib/images.ts` cover CSS backgrounds, data files and `og:image`.
- Raw video masters live in `media-src/videos/` — never in `public/` (Cloudflare Workers rejects assets over 25 MiB, and everything in `public/` is deployed).
- Two films: the hero (`public/videos/hero*.{mp4,webm}`) and the homepage closing film (`closing*`, the site's previous hero). Encodes trim each master's fade from/to black, and each film's poster must be its encode's exact first frame (`ffmpeg -i hero.mp4 -frames:v 1`) — a poster from mid-clip followed by a fade from black read as the video "loading twice". Both start playing only once ~3s is buffered, fade in over the poster, and pause off-screen. Shared playback code lives in `src/lib/film.ts` and keeps them working on desktop, Android and iPhone. The script picks the encode for the screen (it doesn't rely on `<source media>`) and re-picks it when the phone rotates. If autoplay is refused (Low Power Mode or battery saver), the film starts on the first tap. It resumes after iOS pauses it on an app switch or back/forward navigation, and visitors with Data Saver on get the still. Keep `muted playsinline disableremoteplayback` on the `<video>` elements. Don't add `autoplay` back. The hero has **no** pause/play button (client request); reduced-motion visitors get the still instead. The closing film keeps its button.

## Scrolling & motion

- Lenis (`src/components/layout/SmoothScroll.astro`, mounted in `BaseLayout`) eases wheel input only; touch stays native and reduced-motion disables it. It drives native scroll, so `position: sticky` and `window` scroll listeners work unchanged. Use `window.lenis?.scrollTo(target)` for programmatic scrolls, and add `data-lenis-prevent` to any nested scroll container.
- The homepage has exactly one pinned scene: `_TechnicalSilence` (frame scrub, then a hold on the lit frame — `SCRUB_END`). Don't add another.
- `_ProcessSteps` (Understand → Design → Integrate → Deliver) is deliberately **not** scroll-linked (client request: visitors could scroll past it without seeing the steps). It auto-advances every `DWELL_MS` while in view, any step is clickable, and mouse hover / keyboard focus holds it. The bronze rail's CSS animation *is* the timer (`animationend` advances), so don't drive it from JS or the scroll. Reduced motion: no autoplay.

## SEO & URLs

- `PageLayout` takes the page's own `title` (Seo.astro appends ` | PROJECT: automate` when it fits in 60 chars), `description`, `image` (use `ogImageUrl`), `noindex`, and `schema` (extra JSON-LD nodes). BaseLayout emits one `@graph`: business, website, an automatic breadcrumb trail, plus page nodes.
- Changed URLs keep a 301 in `public/_redirects` (Cloudflare) **and** an entry in `redirects` in `astro.config.mjs` (meta-refresh stubs for GitHub Pages). Add both when renaming a page, and update internal links so none go through a redirect. `trailingSlash` is `'always'`.
- The GitHub Pages (staging) build sets `PUBLIC_NOINDEX=1`, so staging is never indexed.
- Energy Management is deliberately unlinked (the page still exists at `/energy-management/`). Don't add it back to the nav, footer or homepage.

## Copy & design

- **No eyebrow text anywhere on the site.** An eyebrow (also called a kicker or overline) is the small label above a headline, like "Home Technology · Manhattan Beach" above the homepage hero title. Never add one to a new page, section or component. Headlines stand on their own. Generic section labels ("Our Approach", "Our Philosophy", "How We Work"…) read as templated/bot design. Labels that carry real content stay, e.g. the "01 Morning" scene captions in A Day at Home or the "Integrated with the world's finest platforms" marquee title.
- **Space between sections comes from `--section-pad`** (`tokens.css`, ~94px at 1440 / 64px on phones) as each homepage section's top and bottom padding; `--section-pad-tight` where a section runs into a closely related one (Why → platforms marquee). Don't hand-roll bigger `padding-block` clamps per section; they stacked into ~280px gaps.
- **A section's supporting text sits directly under its headline**, never in a column beside it, so the two read as one thought. Only a link (e.g. "Explore all solutions") may sit on the side.
- **Full-bleed hero copy sits in the corners, never centered**, so the video or photo stays clear: the headline block (and its subtitle) in the bottom-right corner, the CTA actions in the bottom-left. Both hug the screen's own gutter (not capped at `--page-max`), `--hero-copy-bottom` (`tokens.css`) off the bottom edge. This applies to the homepage and every inner photo hero (ServiceLayout, BrandLayout, Solutions, Support). Exception: `/thank-you/` puts its thank-you (tick, headline, subtitle) bottom-left and the "Expect our call" card bottom-right (client request). On phones (≤700px) everything stacks in one left-aligned column.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
