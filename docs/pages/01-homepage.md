# 01 — Homepage

**Route:** `/`
**Source:** `src/pages/index.astro` (23 lines — pure composition, all content lives in components)
**Target component folder:** `src/components/home/` *(already split — this page is the model for all the others)*
**Sections:** 7 in the rebuild · 11 on the live site

---

## Section map

| ID | Section | Component | Background | Height | Motion |
| --- | --- | --- | --- | --- | --- |
| HOME-01 | Hero | `home/HeroSection.astro` | Black + video | `100vh` | Headline rise |
| — | ❌ Intro statement | *missing* | — | — | — |
| — | ❌ Scrolling marquee | *missing* | — | — | — |
| HOME-02 | Our Process | `home/ProcessSteps.astro` | Cream | `100vh` | None |
| HOME-03 | Our Approach (statement) | `home/StatementSection.astro` | Cream | auto | Word reveal |
| — | ❌ Technology That Elevates (4 cards) | *missing* | — | — | — |
| HOME-04 | The Experience (7 tiles) | `home/SolutionsGrid.astro` | Cream | auto | Image scale on hover |
| HOME-05 | Technical Silence | `home/TechnicalSilence.astro` | Cream | `100vh` | None |
| — | ❌ Why PROJECT:automate / 17 years | *missing* | — | — | — |
| HOME-06 | Inspiration | `home/InspirationPreview.astro` | Cream | `100vh` | Image scale + arrow nudge |
| HOME-07 | Closing CTA | `home/CtaBanner.astro` (`variant="feature"`) | Black + video | `100vh` | None |

Four consecutive cream sections (HOME-02 → HOME-06) all sit on `#FFFCEF`. There is
no visual rhythm between them — see the suggestion at the bottom of this file.

---

## HOME-01 — Hero

**What it is:** Full-viewport autoplaying muted video, dark gradient scrim,
headline and two buttons bottom-**right** (bottom-left on mobile).

**Copy**

- H1: *Tailored* / *Luxury* / *Technologies*
- Buttons: "Book a Consultation" → `/schedule/` · "Call Now: (310) 402-4818" → `tel:`

**Media**

| Asset | Path | Size | Note |
| --- | --- | --- | --- |
| Video (webm) | `/videos/hero.webm` | 2.9 MB | Primary source |
| Video (mp4) | `/videos/hero.mp4` | 4.0 MB | Fallback |
| Poster | `/images/home/hero/poster.webp` | | |

✅ Self-hosted, not a YouTube iframe. *(`docs/known-issues.md` still claims this is
a YouTube embed — that note is stale, the code self-hosts.)*

**Animation today**

- `@keyframes rise` — each of the 3 headline words: `opacity 0→1`,
  `translateY(0.6em→0)`, `0.9s cubic-bezier(0.22, 1, 0.36, 1)`, 120ms stagger.
- Buttons: background colour transition only.
- Respects `prefers-reduced-motion`. ✅

**Suggestions**

1. **Hold the video still for ~400ms before the words arrive.** Right now the
   headline animates while the video is still fading up from poster. Sequence it:
   video settles → scrim deepens → words rise. Costs one `animation-delay`.
2. **Slow the video.** Play at `0.85×` via `video.playbackRate`. Almost
   subliminal, and it's the single most common trick on high-end property sites.
3. **A scroll cue.** 100vh with nothing indicating more content below is a real
   bounce risk. A 1px bronze line that draws downward on a 2s loop, bottom-centre.
4. **Buttons.** "Call Now: (310) 402-4818" as a primary-weight hero CTA is
   direct-response, not luxury. Consider "Private Consultation" as the single
   hero action and move the phone number to a small bronze line beneath it.
5. **Headline.** "Tailored Luxury Technologies" is three adjectives and a plural
   noun — it does not say what you do. The live site's own sub-line is stronger:
   *"Integrated technology, thoughtfully designed to make luxury homes more
   intuitive, comfortable, connected, and effortless."* That line is currently
   dropped entirely (see next section).

Reference for hero treatment:
[molteni.it](https://www.molteni.it/en) (video hold + single line of type) and
[savant.com](https://www.savant.com/) (closest direct competitor doing it well).

---

## ❌ MISSING — Intro statement

**On live, not in rebuild.** Directly under the hero, a single centred line:

> Integrated technology, thoughtfully designed to make luxury homes more
> intuitive, comfortable, connected, and effortless.

**Recommendation:** bring it back as `home/HeroStatement.astro`. One sentence on
cream, large, lots of air, word-reveal on scroll. It's the only place on the page
that plainly states what the company does.

---

## ❌ MISSING — Scrolling marquee

**On live, not in rebuild.** A horizontal ticker repeating *"Tailored Luxury
Technology Systems Designed for your lifestyle"* six times, driven by custom JS
in the live page (`.containerholder` + `scrolled-into-view`, `transform:
translateX(100%)`, `transition: transform 2s ease`).

**Recommendation:** **do not rebuild this one.** A text marquee is a 2021 Elementor
tic and it repeats a phrase already used as the H1 — it reads as filler. If you want
a band there, make it a **logo marquee** instead: Savant, Control4, Lutron, Crestron,
Basalte, Josh.ai. You already have all six logos at `/images/brands/logos/`, and they
are currently only used on `/brands/`. That band does real work — it borrows six
brands' credibility on the homepage.

Reference: the partner strip on
[cinemascapes.com](https://www.cinemascapes.com/) — same industry, same device.

---

## HOME-02 — Our Process

**What it is:** Eyebrow "Our Process", split intro (heading left / paragraph
right), then a 4-column row of icon + title + description.

**Copy** — "From Vision to Effortless Living."
Steps: **Understand** · **Design** · **Integrate** · **Refine**

**Media**

| Step | Path | Proposed rename |
| --- | --- | --- |
| Understand | `/images/home/process/step-1.webp` | `process-01-understand.webp` |
| Design | `/images/home/process/step-2.webp` | `process-02-design.webp` |
| Integrate | `/images/home/process/step-3.webp` | `process-03-integrate.webp` |
| Refine | `/images/home/process/step-4.webp` | `process-04-refine.webp` |

Rendered at 165×146. On live these are PNGs named
`Heading-1-→-Design-technology_and-living-—-as_one.png` — meaningless export names,
correctly cleaned up in the rebuild, but `step-1`…`step-4` still don't say what
they are.

**Animation today:** none.

**Suggestions**

1. **These should be SVG, not WebP.** They're line icons. As inline SVG you get a
   self-drawing stroke (`stroke-dasharray` / `stroke-dashoffset` over 1.2s) as each
   step enters view — the single best-value animation on this page, and it makes
   the process feel like a process.
2. **Connect the steps.** A hairline running through all four icons that draws
   left-to-right as the row reveals. Turns four cards into one sequence.
3. **Number them.** `01 / 02 / 03 / 04` in bronze above each title. There's already
   a `counter-reset: step` in the CSS that is never used.
4. Stagger the four columns in at 70ms.

---

## HOME-03 — Our Approach (statement)

**What it is:** Eyebrow "Luxury Smart Home Automation", then four display lines
revealed word by word on scroll.

**Copy:** *"We create intelligent living environments where comfort, control and
design work seamlessly as one enhancing everyday life with clarity, simplicity,
and precision."*

**Animation today** ✅ the best thing on the site

- Words start at `opacity: 0.14`, transition to `1` over `0.5s`, 45ms stagger,
  triggered by `IntersectionObserver` at `threshold: 0.3`, observer disconnects
  after firing. Reduced-motion handled.

**Suggestions**

1. **Drive it by scroll position, not a timer.** Right now the section can be
   fully past before the animation finishes, or finish before you've read it. Map
   word opacity to the section's scroll progress so the text literally reveals as
   you scroll. Reference:
   [apple.com/airpods-pro](https://www.apple.com/airpods-pro/) — the canonical
   version of this.
2. The eyebrow says "Luxury Smart Home Automation" but live labels it
   "Our Approach". Pick one — ⚠️ the rebuild currently shows the SEO phrase where
   the live site shows the human label.
3. The copy is missing a comma and runs two clauses together ("work seamlessly as
   one enhancing everyday life"). Same error is on live. Worth fixing here.

---

## ❌ MISSING — "Technology That Elevates Everyday Life" (4 cards)

**On live, not in rebuild.** A four-card row under eyebrow "The Experience":

| Card | Live copy |
| --- | --- |
| Control | Every system, every room — answered with a single, intuitive gesture. |
| Atmosphere | Light, warmth and shade compose for the mood of every moment. |
| Audio Solutions | Immersive entertainment that blends beautifully into every living space. |
| Entertainment | Cinematic sound and vision, redefined for the architecture of your home. |

**This is the strongest writing on the entire live site and it was dropped.**

**Recommendation:** rebuild as `home/ExperiencePillars.astro`, placed between
HOME-03 and HOME-04. But **cut it to three cards** and drop "Entertainment" —
it overlaps "Audio Solutions", and three reads more confident than four.

⚠️ The 8 `pillar-*.webp` files in `/images/home/` were almost certainly staged for
this section, then abandoned. All 8 are byte-identical duplicates of images used
elsewhere (see `docs/image-audit.md`), so this section needs **new, unique
photography** — not those.

---

## HOME-04 — The Experience (7 tiles)

**What it is:** Asymmetric mosaic. Four rows with deliberately uneven column
splits mirroring the live site at 1440px: `38/60` · `58/40` · `100` · `40/58`.
Each tile is a full-bleed image, bottom gradient scrim, title + arrow button.

**Copy:** "Every system, / Working as one."

**Media** — all in `/images/home/experience/`

| Tile | File | Links to | Status |
| --- | --- | --- | --- |
| Security Solution | `security.webp` | `/security-systems/` | |
| Cinema Rooms & Media Spaces | `cinema.webp` | `/home-cinama/` | |
| Smart Home Automation | `automation.webp` | `/control-systems/` | |
| Lighting Control | `lighting.webp` | `/lighting-control-systems/` | |
| Audio Solutions | `audio.webp` | `/audio-video-solutions/` | 🔁 dup of `home/pillar-audio.webp` |
| Energy Management | `energy.webp` | `/energy-moment/` | |
| Motorized Shades and Draperies | `shades.webp` | `/motorized-shades-and-drapery/` | |

**Animation today**

- Image `scale(1.04)` on hover, `0.6s cubic-bezier(0.22, 1, 0.36, 1)`.
- Arrow button fills bronze on hover, `0.25s`.

**Suggestions**

1. **Reveal the tiles on scroll** with the mask reveal from the motion system —
   `clip-path: inset(0 0 100% 0) → inset(0)`, 900ms, 70ms stagger down the rows.
   This section is the visual centrepiece and currently just appears.
2. **Scrim should be a hover state, not permanent.** Right now every tile is
   darkened at the bottom all the time. Start at 35% opacity, deepen to 70% on
   hover so the photography leads and the label follows.
3. **Titles should slide up ~8px on hover** as the scrim deepens. Three properties,
   one gesture.
4. The live site gives each tile a one-line description ("Integrated security that
   keeps your home protected and connected"). ⚠️ The rebuild shows **title only**.
   Reveal the description on hover — it gives the hover state a reason to exist.
5. Drop the `!important` on the mobile `grid-template-columns` override. Move the
   row spans into a `data-span` attribute so CSS owns the breakpoint cleanly.

---

## HOME-05 — Technical Silence

**What it is:** Full-viewport. Eyebrow "The Experience", then "Technical Silence."
at `--text-display-xl` (160px at 1440), with a short paragraph pushed to the right.

**Animation today:** none. The biggest type on the site just sits there.

**Suggestions**

1. This is the page's thesis statement and it should be its most deliberate
   moment. Reveal "Technical" and "Silence." as two separate mask-wipes, 200ms
   apart, then the paragraph fades in 400ms later.
2. **Then take the sound out.** Literally: on entering this section, fade the
   HOME-01 hero video's implied energy by using a near-silent, very slow-moving
   ambient loop as a barely-visible background at 8% opacity. Optional, but it
   makes the section land.
3. ⚠️ Eyebrow is "The Experience" here **and** on HOME-04. Two adjacent sections
   sharing an eyebrow is a mistake on live and it was copied over. Change this one
   to "Our Philosophy".

---

## ❌ MISSING — Why PROJECT:automate / 17+ Years

**On live, not in rebuild.** A trust block between Technical Silence and
Inspiration:

- Badge image: `project-automate-17-years-badge…webp`
- "WHY PROJECT:automate?"
- "17+ YEARS OF SMART HOME EXPERTISE"

The local asset already exists: `/images/badges/17-years-badge.webp` — **unused**.

**Recommendation:** rebuild it, and make it earn its place by adding numbers next
to the badge. A luxury buyer wants proof, not adjectives:

| | |
| --- | --- |
| 17+ | Years |
| 400+ | Residences integrated *(replace with your real figure)* |
| 6 | Manufacturer certifications |
| 24/7 | Concierge support |

Count up on scroll, 1.2s, `--ease-out-expo`. Plus the CEDIA / HTA / Cert Level
Luxury badges in a row beneath.

---

## HOME-06 — Inspiration

**What it is:** Split intro ("Inspiration" left, one line right), then 3 project
cards — image, location + year, name with arrow.

**Media** — `/images/home/inspiration/`

| Project | File | Status |
| --- | --- | --- |
| Oceanfront Villa — Malibu, 2025 | `malibu.webp` | 🔁 dup of `get-inspired/inspiration-malibu.webp` |
| Marazul Estate — Hidden Hills, 2024 | `hidden-hills.webp` | 🔁 triple dup — also the `/hvac-and-climate-integration/` hero |
| Alpine Retreat — Manhattan Beach, 2023 | `manhattan-beach.webp` | 🔁 dup of `get-inspired/` copy |

⚠️ There is a **second, redundant copy of all three** at `/images/home/inspiration-*.webp`
(flat, no subfolder) that nothing references. Delete.

**Animation today:** image `scale(1.04)` on hover, arrow translates `(3px, -3px)`.

**Suggestions**

1. **All three cards link to `/get-inspired/`** — the same URL, three times. With
   `/success-stories/` and `/project-single/` both built and both orphaned, these
   should deep-link to individual case studies.
2. Only 3 projects for a 17-year firm undersells you. Six, in a 2-row grid, with
   the first one full-width.
3. Add the systems installed as small bronze tags under each name ("Lighting ·
   Cinema · Shading") — it converts a pretty picture into a capability proof.
4. Reveal: mask wipe, 70ms stagger, same as HOME-04.

---

## HOME-07 — Closing CTA

**What it is:** Full-viewport black with the **same hero video** replayed behind a
left-to-right gradient scrim. "Design your / Living Experience", one line, one
bronze button → `/get-started/`.

**Component:** `home/CtaBanner.astro` with `variant="feature"`. The `"compact"`
variant of this same component closes most other pages.

**Animation today:** none.

**Suggestions**

1. ⚠️ **Reusing the hero video here is the weakest decision on the page.** The
   first and last thing a visitor sees are the same 4MB clip. Shoot or source a
   second one — a slow interior dolly at dusk, lights coming up. If that isn't
   possible soon, use a still with a very slow `scale(1 → 1.06)` over 20s instead.
2. `preload="none"` on this video is correct, but it means a poster-to-video pop
   when it scrolls into view. Start playback on `IntersectionObserver` and fade
   `opacity 0→1` over 600ms as it begins.
3. The button says "Let's Talk" → `/get-started/`, while the header button says
   "Schedule Consultation" → `/schedule/`. ⚠️ Two different CTAs to two different
   pages, both asking for the same thing. Pick one destination.

---

## Video inventory

| Video | Where | Source |
| --- | --- | --- |
| `hero.mp4` / `hero.webm` | HOME-01 **and** HOME-07 | Already extracted ✅ |
| `youtube.com/watch?v=dKu7G3i0O-o` | Live `/project-single/` only | ❌ not downloaded — see `06-project-single.md` |

Those are the only two videos on the entire live site. Places a third and fourth
would genuinely earn their cost:

1. **A 20–30s "Technical Silence" ambient loop** for HOME-05 — no people, no
   product, just light changing in a beautiful room. This is the one that sells.
2. **A distinct closing-CTA clip** for HOME-07, per the note above.
3. Per-solution 10s loops for the 13 solution-page heroes, replacing static
   `hero.webp`. Highest effort, so treat as phase 3.

---

## Page-level suggestions

1. **Break the cream monotony.** HOME-02 → HOME-06 are five consecutive sections
   on `#FFFCEF`. Put HOME-05 (Technical Silence) on charcoal with cream type. The
   page then reads dark → light → **dark** → light → dark, which gives the scroll a
   shape. This is a one-line change and it is the highest-impact edit on the page.
2. **Height budget.** Five sections at `min-height: 100vh` makes the homepage
   roughly 8 screens tall with 7 sections of content. Release HOME-02 and HOME-06
   from `100vh` and let them size to content.
3. **Section order.** Suggested target order once the missing sections return:

   | | Section | Note |
   | --- | --- | --- |
   | 1 | Hero | |
   | 2 | Intro statement | ❌ restore |
   | 3 | Brand logo marquee | 🆕 replaces the text marquee |
   | 4 | The Experience — 7 tiles | **moved up** — what you sell, above the fold+1 |
   | 5 | Our Approach (statement) | |
   | 6 | Technical Silence | **on charcoal** |
   | 7 | Our Process | |
   | 8 | Why PROJECT:automate + numbers | ❌ restore |
   | 9 | Inspiration | expand to 6 |
   | 10 | Closing CTA | new video |

   The current order makes a first-time visitor read a 4-step process before
   learning what the company installs.
4. **Missing entirely, on both versions: a client voice.** No testimonial, no
   architect quote, no named project. For a referral-driven luxury trade, one
   pull-quote from an interior designer between HOME-06 and HOME-07 would do more
   than any animation in this document.
