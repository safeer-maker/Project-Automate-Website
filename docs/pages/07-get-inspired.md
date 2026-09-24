# 07 — Get Inspired

**Route:** `/get-inspired/`
**Source:** `src/pages/get-inspired/index.astro` (196 lines)
**Target component folder:** `src/components/inspiration/`
**Sections:** 5

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| INSP-01 | Hero heading | `inspiration/InspirationHero.astro` | Cream |
| INSP-02 | Featured story rows (3) | `inspiration/StoryRows.astro` | Cream |
| INSP-03 | Gallery heading | `inspiration/GalleryGrid.astro` | Cream |
| INSP-04 | Gallery grid (3) | `inspiration/GalleryGrid.astro` | Cream |
| INSP-05 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## INSP-01 — Hero heading

⚠️ **The information architecture here is inverted.** Eyebrow reads *"West
Hollywood — Haslam Terrace"* and the title reads *"Get Inspired"*, with a subtitle
describing the Haslam Terrace project specifically.

So a page named "Get Inspired" opens with the *name of one project* as its
eyebrow, and then shows three unrelated projects below. Either:

- this is the **Haslam Terrace case study**, in which case the H1 should be
  "Haslam Terrace" and it belongs under `/success-stories/`; or
- this is the **inspiration index**, in which case the eyebrow should be
  "Inspiration" and the Haslam Terrace copy moves into INSP-02 as one entry.

My vote: the second. Then fold Haslam Terrace into the project collection from
`06-project-single.md`.

**Animation:** none.

---

## INSP-02 — Featured story rows

Three alternating image/text rows drawn from the Haslam Terrace project.

**Media** — `/images/get-inspired/`

| Story | File | Status |
| --- | --- | --- |
| Kitchen lighting | `kitchen-lighting.webp` | 🔁 = `brands/josh-ai-2/discreet-intelligence.webp` |
| Privacy shading | `privacy-shading.webp` | unique ✅ |
| Pool lighting | `pool-lighting.webp` | 🔁 = `solutions/audio-video-solutions/feature-1.webp` |

**Animation:** none.

**Suggestions**

1. Alternate the mask-reveal direction per row so the scroll has a rhythm.
2. Add a before/after slider on at least one row. For lighting work specifically,
   a day/night or off/on comparison is the most convincing thing you can show, and
   it's a genuinely useful interaction rather than decoration.
3. ⚠️ The pool-lighting image is doing double duty as an *audio* feature image on
   another page. Needs a unique asset.

---

## INSP-03 / INSP-04 — Gallery

Eyebrow "Gallery", "More Projects, More Inspiration", then 3 cards.

**Media** — 🔁 **all three are duplicates of the homepage Inspiration cards**

| Project | File | Also at |
| --- | --- | --- |
| Malibu | `inspiration-malibu.webp` | `home/inspiration/malibu.webp`, `home/inspiration-malibu.webp` |
| Hidden Hills | `inspiration-hidden-hills.webp` | `home/inspiration/hidden-hills.webp`, `home/inspiration-hidden-hills.webp`, **and the `/hvac-and-climate-integration/` hero** |
| Manhattan Beach | `inspiration-manhattan-beach.webp` | `home/inspiration/manhattan-beach.webp`, `home/inspiration-manhattan-beach.webp` |

Each of these three photos exists **three or four times on disk**. The Hidden
Hills shot is additionally serving as a *climate control* hero. Consolidate — see
`docs/image-audit.md`.

**Animation:** none.

**Suggestions**

1. A "gallery" with three items that a visitor has already seen on the homepage
   isn't a gallery. Either populate it properly (12–20 images, masonry, lightbox)
   or remove it and let INSP-02 be the page.
2. If it stays: masonry layout, lazy-loaded, mask-reveal on scroll, lightbox with
   keyboard nav.

---

## Page-level suggestions

1. **Decide what this page is, versus `/success-stories/`.** Right now:

   | Page | Has | Linked from |
   | --- | --- | --- |
   | `/get-inspired/` | 1 project's details + 3 duplicate cards | Footer, and all 3 homepage cards |
   | `/success-stories/` | 6 unique projects | Nothing |

   The page with unique content is invisible; the page with duplicate content gets
   all the traffic. Simplest fix: make `/get-inspired/` a **visual gallery**
   (rooms, details, lighting moods — browse-y, no project structure) and
   `/success-stories/` the **case-study index** (named projects, specs, outcomes).
   Link them to each other.
2. **Or merge them** and keep `/get-inspired/` as the single portfolio URL, since
   it already has the inbound links. Less work, fewer thin pages.
3. Reference for a gallery that stays luxurious at scale:
   [molteni.it/en/inspiration](https://www.molteni.it/en/inspiration) — filterable,
   image-led, almost no chrome.
