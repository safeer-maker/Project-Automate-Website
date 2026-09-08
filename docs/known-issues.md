# Known Issues & Open Work

Living list of things to fix, in the order they were found. This is a rebuild of
`projectautomate.com` in Astro — the site works and builds cleanly, but it was
assembled quickly from scraped WordPress content, so treat everything below as
real, worth doing before this fully replaces the live site.

Checkbox = not started. Strike through / move to "Resolved" as you go.

---

## Priority 1 — Blocks going live

- [ ] **Forms don't send anywhere.** Every form on the site (Get Started, Outdoor
      Lighting & Audio, Schedule, the Footer newsletter) is a client-side-only
      placeholder (`PlaceholderFormScript.astro`) — it just hides the form and shows
      a "thanks" message. Nothing is emailed, stored, or sent to a CRM. Needs real
      submission handling (GoHighLevel, a Cloudflare Worker + email API, etc.) before
      this can replace the live site, which uses MetForm.
      See `src/components/forms/PlaceholderFormScript.astro` and every page that
      imports it.

- [ ] **`/thank-you/` is unreachable.** It exists as a page but nothing redirects to
      it — forms currently show an inline success message instead. Once real form
      handling is wired up, decide whether to redirect there or keep the inline
      pattern, and remove whichever approach isn't used.

- [ ] **A2P/SMS compliance is still pending on your end**, per the checklist you sent:
  - IRS CP-575 or 147C letter — not yet provided
  - Industry / vertical classification — not yet provided
  - Decision: SMS opt-in via chat widget only, vs. checkbox on forms — not yet decided
    (the current forms already have an SMS-consent checkbox baked in, e.g.
    `src/pages/get-started/index.astro`, so if you decide "chat-widget only" those
    checkboxes should come out)
  - Approved sample SMS wording — not yet provided
  - Review of GoHighLevel's default Privacy Policy / Terms pages — not yet started
    (once your GHL sub-account/funnel is live)

- [ ] **No deployment yet.** The Cloudflare Workers adapter (`@astrojs/cloudflare`)
      is wired up and the site builds cleanly, but nothing has been pushed to GitHub
      or connected to a Cloudflare Workers project. `wrangler.jsonc` is a local
      config file only — no `wrangler deploy` has been run.

## Priority 2 — Real gaps vs. the live site

- [ ] **9 pages exist but aren't linked from anywhere on the site**: `/brands/`,
      `/outdoor-lighting-audio/`, `/access-control-and-intercom/`,
      `/hvac-and-climate-integration/`, `/intrusion-detection-systems/`,
      `/surveillance-systems/`, `/success-stories/`, `/project-single/`,
      `/thank-you/`. They're only reachable by typing the URL directly. Either add
      them to the header/footer nav (`src/data/nav.ts`, `src/data/site.ts`) or
      confirm they're meant to be long-tail/SEO-only pages.

- [ ] **The live site's own `/hvac-and-climate-integration/` page is broken** — its
      WordPress content is a byte-for-byte copy of the Home Cinema page (confirmed
      by diffing the scraped HTML). Our version was written from scratch using
      real climate-control language pulled from elsewhere on the site, since there
      was no usable source copy. Worth a copywriting pass once you have real HVAC
      copy — it's currently the least "sourced" page on the site.

- [ ] **HTA Budget Calculator numbers are estimates, not real pricing.** The live
      site's calculator is a third-party iframe (`htacertified.org`) that exposes no
      underlying figures anywhere in the scraped data. The tier names (Foundation /
      Elevated / Ultra-Luxury) and the "Infrastructure/Experience/Protection"
      framing are real; the dollar amounts and per-sq-ft/per-room rates in
      `src/pages/budget-calculator/index.astro` are reasonable placeholders someone
      needs to sign off on or replace with real numbers.

- [ ] **A handful of blog posts had their source content quietly fixed** during
      the rebuild because the live WordPress site itself has cross-contaminated
      content (copy from one post bleeding into another — a pre-existing CMS bug,
      not something introduced here). Worth a skim before publishing:
  - `how-motorized-window-coverings-can-enhance-your-interior-design` — body was
    rebuilt from the post's excerpt field, since the live `content` field is
    entirely unrelated (Barco projector copy)
  - `keep-your-peace-of-mind-with-a-top-level-alarm-system` — had outdoor-TV
    paragraphs removed
  - `how-ketra-lighting-design-can-radically-change-your-indoor-experience` — had
    an unrelated outdoor-audio paragraph removed
  - `take-your-entertainment-outside-with-a-stellar-outdoor-tv` — had a mismatched
    "Bullet Lights" section removed
  - `high-end-tvs-for-luxurious-outdoor-entertainment` — the live post's content is
    a straight duplicate of `the-must-have-elements-of-a-home-theater-system`; ours
    keeps this post's real title/subtitle but pulls real outdoor-TV facts from a
    third, related post instead of duplicating
  - `intrusion-detection-systems` (solution page, not a blog post) — the live
    page's hero headline was literally "Smarter Energy for Modern Living" (leftover
    from the Energy Management page); corrected to match the page's own real body
    copy

- [ ] **Skipped on purpose, confirm you agree:**
  - The WordPress `testing` page was not rebuilt (looked like a scratch/QA page)
  - `3-unique-security-solutions-that-will-make-your-home-a-safer-place-copy` was
    not rebuilt — it's a duplicate slug of the non-`-copy` post

- [ ] **Only the homepage has been directly diffed against the live site section by
      section.** That comparison caught real gaps (missing sections, wrong CTA
      copy/buttons, a completely different footer structure) that are now fixed —
      see `src/pages/index.astro` and `src/components/home/*`. The other 33 rebuilt
      pages were written from the scraped WordPress content but not individually
      screenshot-compared against the live equivalents. Worth spot-checking the
      higher-traffic ones (brand pages, top solution pages) the same way.

## Priority 3 — Technical / SEO hygiene

- [ ] **No `sitemap.xml` or `robots.txt`.** Add `@astrojs/sitemap` (trivial with
      `astro add sitemap`) and a `public/robots.txt`.
- [ ] **No custom 404 page** — add `src/pages/404.astro`.
- [ ] **No analytics installed** — no GA4, GTM, or Meta Pixel. Decide what you want
      and add it to `src/layouts/BaseLayout.astro`.
- [ ] **Structured data is minimal.** A `LocalBusiness` JSON-LD block was added to
      every page (`src/layouts/BaseLayout.astro`) with the real legal name, address,
      and phone — but there's no per-service or per-article structured data yet
      (e.g. `Service`, `BlogPosting`, breadcrumbs).
- [ ] **Accessibility hasn't had a dedicated pass** — no skip-to-content link, focus
      states haven't been checked against the new cream/charcoal palette, and color
      contrast hasn't been formally verified (should be fine — bronze accent and
      dark text both read well on the cream background — but wasn't run through a
      contrast checker).
- [ ] **No image optimization pipeline beyond the one-time WebP conversion.** All
      raster images are now `.webp` (converted from the original 31MB of scraped
      jpg/png/gif down to ~14MB), but they're plain `<img>` tags — no responsive
      `srcset`, no Astro `<Image />` component, no lazy-loading audit beyond what
      individual pages already set.
- [ ] **The homepage hero video is an embedded YouTube iframe**
      (`src/components/home/HeroSection.astro`), same as the live site. That's
      simple but pulls in YouTube's own JS/tracking on every homepage visit and
      autoplays muted — worth deciding if a self-hosted, compressed background
      video would load faster and avoid the third-party dependency.

## Resolved this session (for reference — don't re-open)

- ~~Entire color theme was inverted~~ — the rebuild had used a black background
  with white text; the real site is a warm cream/ivory theme (`#FFFCEF`) with dark
  charcoal text and bronze/gold accents. Fixed centrally in `src/styles/tokens.css`
  plus the handful of components that had hardcoded light-on-dark assumptions
  (`Header`, `Footer`, `Button`, hero sections, `CtaBanner`, `FormField`).
- ~~Homepage didn't match production~~ — missing "Our Approach" and "Technical
  Silence" sections, wrong solutions-grid heading/items, wrong CTA copy and button
  destinations, and a footer with a completely different link structure than the
  real one (missing the Quick Links and full Services columns, missing the email
  newsletter signup). All rebuilt from the real site's actual DOM content.
- ~~Legal name wasn't used anywhere~~ — the registered entity, **Project Automate
  Inc.**, doing business as **PROJECT: automate**, is now used in the footer
  copyright line, the Privacy Policy's "Company" definition and signature block,
  the Terms & Conditions page (which already had it from the source content), and
  the site-wide `LocalBusiness` structured data (`legalName` vs. `alternateName`).
  The EIN you provided was **not** published anywhere on the site — that's not
  something that belongs on a public page.
- ~~Media wasn't WebP / repo was cluttered~~ — all images converted to WebP
  (~31MB → ~14MB), the 852-file raw WordPress scrape dump was untracked from git
  (kept locally as reference, gitignored going forward), a dead extraction script
  was removed, and the Cloudflare adapter was added.
