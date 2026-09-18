# 10 — Solution Page Template

Covers 12 solution pages that share one layout, plus `/outdoor-lighting-audio/`
which is a different thing entirely (see the bottom of this file).

**Layout:** `src/layouts/ServiceLayout.astro`
**Sources:** `src/pages/{slug}/index.astro` — 47–97 lines each
**Target component folder:** `src/components/solutions/`
**Sections:** 5

These 12 pages are the bulk of the site and the least differentiated part of it.
They are also the pages that rank, so they're worth the most attention.

---

## Section map

| ID | Section | Component | Background |
| --- | --- | --- | --- |
| SOL-01 | Hero | `ServiceLayout.astro` | Photo + dark gradient, 65vh |
| SOL-02 | Capabilities — 3 image rows | `brands/CapabilityList.astro` | Cream |
| SOL-03 | Daily Experience — 4 scenes | `brands/DailyExperience.astro` | Cream |
| SOL-04 | Closing heading | inline `<section>` + `SectionHeading` | Cream |
| SOL-05 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## SOL-01 — Hero

`ServiceLayout`: `min-height: 65vh`, full-bleed image, `rgba(10,10,10, .35 → .92)`
gradient, eyebrow + H1 + subtitle bottom-left, "Schedule Consultation" button.

**Media:** `/images/solutions/{slug}/hero.webp`

**Animation:** none.

**Suggestions**

1. Slow `scale(1 → 1.05)` over 12s + headline mask reveal. One change,
   12 pages improved.
2. **Replace the hero still with a 10s looping video** on the top 4 pages by
   traffic. For lighting and shading especially, a static photo cannot show what
   the product does; five seconds of shades descending does.
3. Add a one-line "jump to" bar under the hero linking the page's own sections —
   these pages are long and have no internal navigation.

---

## SOL-02 — Capabilities

`CapabilityList` — eyebrow, H2, then 3 alternating image + text rows.
`feature-1.webp` … `feature-3.webp`.

**Animation:** none.

**Suggestions**

1. Mask-reveal each image, alternating direction; text rises 150ms behind it.
2. ⚠️ The filenames `feature-1/2/3` say nothing. Rename to the capability, e.g.
   `control-systems/one-touch-every-room.webp`. See `docs/image-audit.md`.
3. Add a "systems we specify" line to each row naming the actual hardware. These
   pages are competing in search against manufacturers; specificity is the only
   edge an integrator has.

---

## SOL-03 — Daily Experience

`DailyExperience` — 4 text-only scenes.

**⚠️ Present on all 12 solution pages *and* all 6 brand pages — 18 near-identical
sections.** Mostly the same four scene names with lightly reworded copy.

See the interactive time-of-day suggestion in
[`09-brand-template.md` → BRAND-04](09-brand-template.md) — it's the single
highest-leverage animation on the site precisely because it lands on 18 pages at
once.

---

## SOL-04 — Closing heading

An inline section with a centred `SectionHeading`, then the CTA banner directly
beneath it.

**🐛 Real bug — copy-paste leak.** The eyebrow **"A Smarter Power System"** appears
on four pages where it makes no sense:

| Page | Eyebrow shown | Should be |
| --- | --- | --- |
| `/energy-moment/` | A Smarter Power System | ✅ correct here |
| `/lighting-control-systems/` | A Smarter Power System | ❌ Elegant Light Control |
| `/surveillance-systems/` | A Smarter Power System | ❌ Always Watching, Never Intrusive |
| `/intrusion-detection-systems/` | A Smarter Power System | ❌ Protection at the Perimeter |

All four also carry the identical title *"Design Your Living Experience"* and
subtitle *"Intelligent technology, designed around your lifestyle."* — which is
**also** the heading inside the `CtaBanner` immediately below, on the same screen.

**Fix:** delete SOL-04 entirely on every page and pass a per-page heading into
`CtaBanner` as a prop. It's a duplicated heading stacked on itself twelve times.

---

## SOL-05 — CTA

Shared compact `CtaBanner`.

---

## Per-page detail

| Route | H1 | Hero image dup? | Notes |
| --- | --- | --- | --- |
| `/control-systems/` | One Touch, Every Room | unique | feature-1 🔁 access-control f-3; feature-2 🔁 Basalte app; feature-3 🔁 Basalte hero |
| `/lighting-control-systems/` | Light That Moves With Your Life | unique | ⚠️ image folder is `solutions/lighting/`, not the slug. Has an extra `why-choose-us.webp` and an unused `daily-experience.webp` (🔁 `pillar-lighting`) |
| `/motorized-shades-and-drapery/` | Smart Window Treatments, Designed For Modern Living | 🔁 ×3 | hero = Lutron featured + project gallery + `pillar-shades` |
| `/audio-video-solutions/` | Audio and Video, Perfectly Integrated | 🔁 ×2 | hero = Savant hero + HVAC feature-2 |
| `/home-cinama/` | A Great Film Deserves A Home Theater That Matches The Experience | 🔁 ×3 | ⚠️ **slug is misspelled** — "cinama". Inherited from WordPress |
| `/outdoor-living/` | Outdoor Spaces Designed to Feel as Connected as Your Home | 🔁 | hero = project gallery lighting shot |
| `/energy-moment/` | Smarter Energy. Greater Independence. | unique | ⚠️ **slug is nonsense** — "energy-moment" should be `/energy-management/` |
| `/security-systems/` | Complete Protection for Every Part of Your Property | 🔁 ×3 | hero = access-control hero + project gallery + `pillar-access-control` |
| `/surveillance-systems/` | Security That Stays Quiet, Until It Matters | unique | 🐛 SOL-04 eyebrow leak |
| `/intrusion-detection-systems/` | Instant Protection | unique | 🐛 SOL-04 eyebrow leak. ⚠️ live page's H1 was *"Smarter Energy for Modern Living"* — already corrected in the rebuild ✅ |
| `/access-control-and-intercom/` | Access, Refined | 🔁 ×3 | ⚠️ **the live page's content is a copy of Home Cinema** ("Immersive Audio", "Cinematic Visuals"). Rebuild wrote real access-control copy — good, but it's unsourced |
| `/hvac-and-climate-integration/` | Comfort, Refined | 🔁 | ⚠️ **live page is a byte-for-byte copy of Home Cinema.** Rebuild copy is written from scratch. Hero image = the Hidden Hills inspiration photo |

**H1 length is wildly inconsistent** — "Instant Protection" (2 words) next to "A
Great Film Deserves A Home Theater That Matches The Experience" (11). Normalise to
4–7 words.

---

## Slug problems to fix together

| Current | Should be |
| --- | --- |
| `/home-cinama/` | `/home-cinema/` |
| `/energy-moment/` | `/energy-management/` |
| `/technology-support-memebership/` | `/technology-support-membership/` |
| `/brands/savant-2/`, `/lutron-2/`, `/josh-ai-2/` | drop the `-2` |

All inherited from WordPress. All need 301s from the old URLs. Worth doing in one
pass with `public/_redirects` since the site deploys to Cloudflare.

---

## Page-family suggestions

1. **Collapse the security family.** `/security-systems/`,
   `/surveillance-systems/`, `/intrusion-detection-systems/` and
   `/access-control-and-intercom/` are four thin pages on one topic, and three of
   the four are orphaned (only `/security-systems/` is in the nav). Either make
   the three children real and link them from a parent, or merge into one strong
   security page with four sections.
2. **Add per-page proof.** Every solution page should end with one relevant
   project from `/success-stories/` before the CTA. Twelve internal links into the
   portfolio, and every page gains evidence.
3. **Add FAQs.** Three or four real questions per solution page ("do motorised
   shades need mains power to every window?"). Cheapest possible SEO win, and
   `FAQPage` JSON-LD is well supported.
4. **Drive them from one data file.** Twelve 50-line files with identical shape
   should be `src/content/solutions/*.md` + one `[slug].astro`. Recommend doing
   this during the component split.
5. Reference:
   [lutron.com/en-US/Residential-Solutions](https://www.lutron.com/en-US/Residential-Solutions/Pages/default.aspx)
   for how deep a solution page can go while staying calm, and
   [coastalsource.com](https://www.coastalsource.com/) for outdoor AV specifically
   — they're a brand you already list as a certification.

---

## Outlier: `/outdoor-lighting-audio/`

**Source:** `src/pages/outdoor-lighting-audio/index.astro` (97 lines)
**Layout:** `PageLayout` — ⚠️ **not a solution page at all.**

It's a bare form: heading "Request a Consultation" + fields + the placeholder
success message. No hero, no imagery, no content, and ⚠️ **it's orphaned** — no
nav links to it.

**Recommendation:** make it a real solution page on `ServiceLayout` matching the
other twelve (Coastal Source landscape audio and lighting is a genuine
differentiator you're certified in and currently say nothing about), and move the
form to the bottom as one section. Then link it from `coreServices` in
`src/data/nav.ts`.
