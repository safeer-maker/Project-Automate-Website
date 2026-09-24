# Known Issues & Open Work

Living list of things to fix, in the order they were found. This is a rebuild of
`projectautomate.com` in Astro — the site works and builds cleanly, but it was
assembled quickly from scraped WordPress content, so treat everything below as
real, worth doing before this fully replaces the live site.

Checkbox = not started. Strike through / move to "Resolved" as you go.

---

## Priority 1 — Blocks going live

- [x] ~~**Forms don't send anywhere.**~~ Resolved: the Schedule, Get Started and
      Outdoor Lighting & Audio forms, the new homepage section, and a site-wide
      popup now all embed the GoHighLevel form (`src/components/ghl/`, IDs in
      `src/data/ghl.ts`). The Footer newsletter is still a client-side placeholder.
      Note the GHL IDs point at a temporary sub-account — see CLAUDE.md.

- [ ] **Point the GHL form at `/thank-you/`.** The page is now a full client-facing
      page (what happens next, what to prepare, direct line). In the GHL form
      builder set On submit → redirect to `https://projectautomate.com/thank-you/`,
      and turn OFF "add form values to URL". Confirm the timings it promises
      (reply within one business day, 30–45 min discovery call, walkthrough within
      ~2 weeks, proposal ~2–3 weeks later).

- [ ] **GHL form content needs a pass in the form builder (not in this repo):**
      the SMS-consent checkbox says "…from Project:automate about **Land Scaping**"
      (template leftover from the temporary sub-account), the submit button says
      "Submit" (suggested: "Request a Consultation"), and the field "What budget
      range are you considering?" is worth rewording for $5M+ clients (e.g.
      "Anticipated investment").

- [ ] **A2P/SMS compliance is still pending on your end**, per the checklist you sent:
  - IRS CP-575 or 147C letter — not yet provided
  - Industry / vertical classification — not yet provided
  - Decision: SMS opt-in via chat widget only, vs. checkbox on forms — not yet decided
    (any SMS-consent checkbox now lives in the GHL form builder, not in this repo)
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

- [ ] **No analytics installed** — no GA4, GTM, or Meta Pixel. Decide what you want
      and add it to `src/layouts/BaseLayout.astro`.
- [ ] **Accessibility hasn't had a dedicated pass** — no skip-to-content link, focus
      states haven't been checked against the new cream/charcoal palette, and color
      contrast hasn't been formally verified (should be fine — bronze accent and
      dark text both read well on the cream background — but wasn't run through a
      contrast checker).
## Resolved — luxury storytelling rebuild (Sept 2026)

- ~~No sitemap / robots.txt / 404~~ — `@astrojs/sitemap`, `public/robots.txt`, branded
  `src/pages/404.astro` (Cloudflare `not_found_handling: 404-page`).
- ~~Minimal structured data~~ — one `@graph` per page: business, website, breadcrumbs,
  `Service` on solution/brand pages, `BlogPosting` on posts.
- ~~No responsive images~~ — photo library + `<Picture>` with srcset (see CLAUDE.md
  "Photography"). Old `/images/home/*` experience/process/inspiration files are no
  longer referenced.
- ~~Hero video is a YouTube iframe~~ — self-hosted since; raw masters moved out of
  `public/` to `media-src/videos/` (a 72 MiB master would have failed the Workers deploy).
- ~~Typo / WordPress slugs~~ — `/home-theater/`, `/technology-support-membership/`,
  `/energy-management/`, `/brands/savant|lutron|josh-ai/`,
  `/success-stories/pacific-horizon-residence/`; `/partner/` merged into
  `/design-partners/`. 301s in `public/_redirects`.
- ~~Energy Management on the homepage/nav~~ — removed everywhere; page kept unlinked.

## Needs client confirmation (copy written during the rebuild)

- Residence names/photos: Oceanfront Villa, Marazul Estate, Alpine Retreat and the
  Success Stories projects are shown with licensed stock photography — confirm the
  projects are real, or supply real photography.
- "24/7 concierge support", "6 manufacturer certifications", Control4 Gold vs
  Platinum dealer status (brand titles say "Integrator" until confirmed).
- Membership plan response times contradict each other (30 vs 60 minutes; 24/7 vs
  business hours) — kept as found.
- areaServed in structured data includes Hermosa Beach, Rolling Hills, Calabasas,
  Santa Monica and Holmby Hills — confirm these are real service areas.
- Four off-tone posts (eMylo "budget-friendly", three Brilliant-switch posts) are
  `noindex` — revert if Search Console shows they bring qualified traffic.
- The footer newsletter field still sends nowhere — wire it to GHL or remove it.

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
