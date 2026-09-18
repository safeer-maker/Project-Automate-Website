# 05 — Success Stories

**Route:** `/success-stories/`
**Source:** `src/pages/success-stories/index.astro` (202 lines)
**Target component folder:** `src/components/work/`
**Sections:** 4

⚠️ **This page is orphaned** — nothing in the header or footer nav links to it.
Same for `/project-single/`. Two portfolio pages exist and are unreachable, while
the homepage's three Inspiration cards all point at `/get-inspired/` instead.
See the routing fix in the page-level suggestions.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| WORK-01 | Hero heading | `work/WorkHero.astro` | Cream |
| WORK-02 | Project grid (6) | `work/ProjectGrid.astro` | Cream |
| WORK-03 | Closing statement | `work/Closing.astro` | Cream |
| WORK-04 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## WORK-01 — Hero heading

Text-only `SectionHeading` on cream. Eyebrow "Success Stories", title "Spaces
Made Intelligent.", one-line subtitle.

**Animation:** none.

**Suggestion:** a portfolio index that opens with no image is a missed
opportunity. Lead with one full-bleed hero project, then the grid.

---

## WORK-02 — Project grid

Six cards: image, name, `View Project →` where a link exists.

**Media** — `/images/success-stories/`, **all six unique** ✅ (the cleanest image
folder in the project)

| Project | File |
| --- | --- |
| Pacific Horizon Residence | `pacific-horizon-residence.webp` |
| Canyon Glass House | `canyon-glass-house.webp` |
| Manhattan Beach Modern | `manhattan-beach-modern.webp` |
| Bel Air Cinema Suite | `bel-air-cinema-suite.webp` |
| Malibu Cliffside Retreat | `malibu-cliffside-retreat.webp` |
| Sunset Courtyard Estate | `sunset-courtyard-estate.webp` |

**Animation:** none — not even the `scale(1.04)` hover the homepage tiles get.

**⚠️ Only one of the six links anywhere.** `/project-single/` exists for Pacific
Horizon; the other five are dead cards. A visitor clicking five of six projects
gets nothing.

**Suggestions**

1. Bring the homepage tile hover here — image scale + scrim deepen + title lift.
2. Add metadata under each name: location, year, and the systems installed as
   bronze tags. Right now a project name alone tells a buyer nothing.
3. **Filter bar** — All · Lighting · Cinema · Security · Outdoor · Whole-home.
   Filtering with a FLIP layout animation is genuinely useful here and is the one
   place on this site where a showy interaction is justified.
4. Reveal on scroll: mask wipe, 70ms stagger, alternating card heights so the grid
   isn't a perfect rectangle.

---

## WORK-03 — Closing statement

Eyebrow "Start Your Project", heading, subtitle about collaborating with the
client's architect, designer and builder.

⚠️ Immediately followed by `CtaBanner`, which says almost the same thing. Same
doubled-CTA pattern as the partner pages — fold this heading into the banner.

---

## WORK-04 — CTA

Shared compact `CtaBanner`.

---

## Page-level suggestions

1. **Fix the routing.** This is the highest-value change on the page:
   - Add "Success Stories" to `primaryNav` in `src/data/nav.ts`.
   - Point the homepage's three Inspiration cards (`HOME-06`) at individual
     projects instead of three identical `/get-inspired/` links.
   - Convert `/project-single/` into `/success-stories/[slug].astro` driven by a
     content collection, so all six projects get a real page.
2. **These need to become case studies, not a gallery.** The luxury trade buys on
   evidence. Per project: the brief, the constraint, what was specified, what it
   solved, and one client or architect quote. Six proper case studies would be
   worth more than every other change in this documentation set combined.
3. Reference:
   [cinemascapes.com/portfolio](https://www.cinemascapes.com/portfolio/) for how a
   direct competitor structures project pages, and
   [1stdibs.com/interior-designers](https://www.1stdibs.com/interior-designers/)
   for the metadata-rich project card pattern worth copying.
4. **Overlap with `/get-inspired/`.** Both pages are "here are projects." See
   `07-get-inspired.md` — one of them should become the gallery and the other the
   case-study index, or they should merge.
