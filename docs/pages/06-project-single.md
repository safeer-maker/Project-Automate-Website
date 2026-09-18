# 06 — Project / Case Study (`/project-single/`)

**Route:** `/project-single/`
**Source:** `src/pages/project-single/index.astro` (261 lines)
**Target component folder:** `src/components/work/`
**Sections:** 6

⚠️ **Orphaned** — nothing links here. Also ⚠️ **the URL is a template name, not a
project.** `/project-single/` is a WordPress artefact. This should be
`/success-stories/pacific-horizon-residence/`.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| PROJ-01 | Hero heading | `work/ProjectHero.astro` | Cream |
| PROJ-02 | Hero image (full-bleed) | `work/ProjectHero.astro` | — |
| PROJ-03 | Overview | `work/ProjectOverview.astro` | Cream |
| PROJ-04 | Main system features (list) | `work/ProjectFeatures.astro` | Cream |
| PROJ-05 | Project gallery (8) | `work/ProjectGallery.astro` | Cream |
| PROJ-06 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## PROJ-01 / PROJ-02 — Hero

Eyebrow "Success Story", H1 "Pacific Horizon Residence", then a full-width
1586×992 image.

**Media:** `/images/project-single/hero-pacific-horizon.webp` — unique ✅

**Animation:** none.

**Suggestions**

1. Mask-reveal the hero image upward as the H1 rises. Standard treatment from the
   motion system in `00-global-shell.md`.
2. Add a project fact bar under the H1 — Location · Year · Size · Systems ·
   Architect. Five data points, one line, bronze dividers. It's what every case
   study on a serious architecture site opens with.

---

## PROJ-03 — Overview

Prose block describing the residence.

**Suggestion:** split into **The Brief / The Challenge / The Solution**. Three
short headed blocks read as a case study; one paragraph reads as a caption.

---

## PROJ-04 — Main system features

Eyebrow "Main System Features", heading ⚠️ **"Design Your Living Experience"** —
which is also the heading of `CtaBanner` at the bottom of this same page, and the
homepage's closing CTA, and a section heading on `/control-systems/`. That phrase
is used four times in four different roles. Replace it here with something
specific to the project.

Content is a plain `<li>` list of systems.

**Suggestions**

1. Make it a spec table: system, platform used, rooms covered. A buyer comparing
   integrators wants to see "Lutron HomeWorks QSX, 94 zones", not "Lighting".
2. Icons per system, drawn in on reveal.

---

## PROJ-05 — Project gallery

Eight images with titles.

**Media** — `/images/project-single/`

| Item | File | Status |
| --- | --- | --- |
| View | `gallery-view.webp` | unique |
| Control | `gallery-control.webp` | 🔁 = `solutions/hvac-and-climate-integration/feature-3.webp` |
| Lighting | `gallery-lighting.webp` | 🔁 = `solutions/outdoor-living/hero.webp` |
| Shading | `gallery-shading.webp` | 🔁 3 others |
| Entertainment | `gallery-entertainment.webp` | 🔁 3 others |
| Network | `gallery-network.webp` | 🔁 2 others |
| Security | `gallery-security.webp` | 🔁 3 others |
| Result | `gallery-result.webp` | unique |

**Six of eight images are reused elsewhere on the site.** On a page whose entire
job is to prove *this specific house exists and we built it*, that is the problem
to fix before any styling. A prospect who browses the solution pages then this
case study will recognise the same photographs.

**Animation:** none.

**Suggestions**

1. **Get real photography of one finished project.** One properly shot case study
   beats six stubs. This is the highest-priority content task on the site.
2. Lightbox on click, with keyboard nav and a caption. Currently the images aren't
   even clickable.
3. Vary the grid — full-bleed, then a 2-up, then a tall portrait pair. A uniform
   8-cell grid reads as a contact sheet.

---

## ❌ MISSING — Project video

The live `/project-single/` page embeds **the only video on the entire website
besides the hero**:

```
https://www.youtube.com/watch?v=dKu7G3i0O-o
```

(recorded in `extracted_projectautomate/astro_blueprint/video_embeds.json`)

The rebuild drops it entirely. **It has not been downloaded to `public/videos/`.**

**Recommendation:** pull it down, transcode to `webm` + `mp4` the same way
`hero.*` was done, and self-host it as `public/videos/pacific-horizon.webm|mp4`
with a poster frame. Place it between PROJ-03 and PROJ-04 — a walkthrough is the
most persuasive asset a case study can carry, and yours is currently the one piece
of real proof that got lost in the rebuild.

---

## Page-level suggestions

1. **Convert to a dynamic route.** `src/pages/success-stories/[slug].astro` +
   `src/content/projects/` collection, with the six projects from
   `05-success-stories.md` as entries. That kills the orphan URL, gives every
   project card somewhere to go, and makes adding project #7 a markdown file.
2. Add prev/next project navigation at the foot.
3. Add `BreadcrumbList` and `CreativeWork` JSON-LD — case studies are what rank
   for "[luxury smart home] + [city]" searches.
4. Reference for structure:
   [zaha-hadid.com/architecture](https://www.zaha-hadid.com/architecture/) — fact
   bar, brief/solution split, restrained gallery. Same shape, different industry.
