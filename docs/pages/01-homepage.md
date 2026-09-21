# 01 — Homepage

**Route:** `/`
**Source:** `src/pages/index.astro` (pure composition, all content lives in components)
**Component location:** `src/pages/_*.astro` — underscore-prefixed siblings of `index.astro`,
which Astro excludes from routing. *(An earlier draft of this file claimed
`src/components/home/`; that folder does not exist.)*
**Sections:** 8 in the rebuild · 11 on the live site

---

## Section map

| ID | Section | Component | Background | Height | Motion |
| --- | --- | --- | --- | --- | --- |
| HOME-01 | Hero | `_HeroSection.astro` | Black + video *(no scrim)* | `100vh` | Headline rise + lede |
| HOME-02 | Logo marquee ✅ | `_LogoMarquee.astro` | `#FFF1D4` | auto | Two opposed scrolls |
| HOME-03 | Our Process | `_ProcessSteps.astro` | Cream | `100vh` | Auto-advancing stepper (3s) |
| HOME-04 | Our Approach (statement) | `_StatementSection.astro` | Cream | auto | Word reveal |
| — | ❌ Technology That Elevates (4 cards) | *missing* | — | — | — |
| HOME-05 | The Experience (7 tiles) | `_SolutionsGrid.astro` | Cream | auto | Image scale on hover |
| HOME-06 | Technical Silence | `_TechnicalSilence.astro` | Cream | `100vh` | None |
| — | ❌ Why PROJECT:automate / 17 years | *missing* | — | — | — |
| HOME-07 | Inspiration | `_InspirationPreview.astro` | Cream | `100vh` | Image scale + arrow nudge |
| HOME-08 | Closing CTA | `ui/CtaBanner.astro` (`variant="feature"`) | Black + video | `100vh` | None |

The intro statement is no longer its own section — it now lives inside the hero as a
sub-line. See HOME-01.

The marquee band at `#FFF1D4` breaks what used to be five unbroken cream sections.
HOME-03 → HOME-07 still all sit on `#FFFCEF` — see the suggestion at the bottom of
this file for putting Technical Silence on charcoal.

---

## HOME-01 — Hero

**What it is:** Full-viewport autoplaying muted video, headline, sub-line and one
button bottom-**right** (bottom-left on mobile).

**Copy**

- H1: *Tailored* / *Luxury* / *Technologies*
- Lede: *"Lighting, climate, sound and security — designed to work as one, and to disappear."*
- Button: "Book a Consultation" → `/schedule/`

**Changed from the original rebuild**

- ✅ **Intro statement absorbed here.** It was going to be its own cream section
  under the hero; standalone it read as a stranded paragraph and duplicated the job
  of HOME-04. As a hero sub-line it does real work — the H1 is three adjectives and
  a plural noun, and this is the line that says what the company actually installs.
  "Disappear" also plants the thesis that HOME-06 pays off.
- ✅ **Scrim removed.** The `.hero-scrim` gradient (black at 15–75%) is gone; the
  video now plays at full brightness. Headline and lede keep their `text-shadow`
  for legibility. ⚠️ Worth re-checking if the hero video is ever replaced with a
  brighter clip — there is no overlay left to protect the type.
- ✅ **"Call Now" button removed.** A phone number as a primary-weight hero CTA was
  direct-response, not luxury. The number still appears in the header, footer and
  on the contact pages.

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
- Lede reuses the same `rise` keyframe at `0.42s` delay, so it trails the third
  headline word rather than arriving with it.
- Button: background colour transition only.
- Respects `prefers-reduced-motion`. ✅

**Suggestions**

1. **Hold the video still for ~400ms before the words arrive.** Right now the
   headline animates while the video is still fading up from poster. Sequence it:
   video settles → words rise. Costs one `animation-delay`.
2. **Slow the video.** Play at `0.85×` via `video.playbackRate`. Almost
   subliminal, and it's the single most common trick on high-end property sites.
3. **A scroll cue.** 100vh with nothing indicating more content below is a real
   bounce risk. A 1px bronze line that draws downward on a 2s loop, bottom-centre.
4. ~~**Buttons.**~~ ✅ Done — the phone CTA is gone, "Book a Consultation" is the
   single hero action.
5. ~~**Headline.**~~ ✅ Partly done — the H1 is unchanged, but it now has a sub-line
   that carries the meaning. Still worth revisiting the H1 itself at some point.

Reference for hero treatment:
[molteni.it](https://www.molteni.it/en) (video hold + single line of type) and
[savant.com](https://www.savant.com/) (closest direct competitor doing it well).

---

## ✅ RESOLVED — Intro statement

The live site ran this as a centred line under the hero:

> Integrated technology, thoughtfully designed to make luxury homes more
> intuitive, comfortable, connected, and effortless.

**What was built instead:** the line moved *into* the hero rather than returning as
its own section, and the copy was rewritten to name the systems:

> Lighting, climate, sound and security — designed to work as one, and to disappear.

A standalone version was built first (`_HeroStatement.astro`) and deleted — on cream
with nothing around it, it read as a stranded paragraph, and it duplicated the job of
HOME-04's word-reveal statement. See HOME-01.

---

## ✅ RESOLVED — Scrolling marquee

**What live had:** a horizontal text ticker repeating *"Tailored Luxury Technology
Systems Designed for your lifestyle"* six times, driven by custom JS
(`.containerholder` + `scrolled-into-view`, `transform: translateX(100%)`,
`transition: transform 2s ease`).

**What was built:** a **logo marquee** instead — see HOME-02 below. The text ticker
was deliberately not rebuilt; it repeated a phrase already used as the H1 and read
as filler.

---

## HOME-02 — Logo marquee ✅ NEW

**What it is:** two logo strips scrolling in opposite directions on a warm
`#FFF1D4` band, hairline-bordered top and bottom. Sits directly under the hero.

| Row | Content | Direction | Duration |
| --- | --- | --- | --- |
| 1 | 12 manufacturer logos | left → right | 36s |
| 2 | 3 certification badges | right → left | 30s |

**Media** — `/images/vendors/` (renamed from the original Canva exports)

`savant` · `control4` · `lutron` · `crestron` · `josh-ai` · `alarm-com` · `qolsys` ·
`ruckus` · `sophos` · `eero` · `rega` · `coastal-source`

Certifications reuse `/images/badges/`: `cedia-certified`, `hta-design-partner`,
`cert-level-luxury`.

**How it works**

- Each row renders its set twice and animates `translateX` between `0` and `-50%`,
  so the second half is exactly where the first half started when the loop wraps.
- ⚠️ **Spacing must stay as `margin-inline` on the items, never `gap` on the track.**
  A track of 2N items has 2N−1 gaps, so its midpoint falls half a gap short of where
  the duplicate half actually begins, and the loop visibly jumps by that half gap
  (44px at desktop) every cycle. This was a real bug and it is easy to reintroduce.
- Sets are repeated up to a floor of 10 items per half (`repeatToFill`) so a half is
  always wider than the viewport — with only 3 certifications, two copies would leave
  a blank stretch on anything wider than ~700px.
- Logos sit at full colour and full opacity on the band. **No grayscale filter** —
  the backgrounds were stripped on the design side specifically so the band colour
  shows through.
- Aspect ratios run from 1.6:1 to 8.2:1, so each logo sits in a fixed box and
  contains within it. Sizing by height alone would make Crestron eight times wider
  than Sophos.

**Open issue — the certification row**

The three badge assets predate this section and have **not** had the same treatment
as the vendor logos:

| Badge | Problem |
| --- | --- |
| `cert-level-luxury.webp` | White box + grey bar baked in — reads as a rectangle on the cream band |
| `hta-design-partner.webp` | Only 280×40; renders blurry and nearly invisible |
| `cedia-certified.webp` | ✅ Fine — circular, transparent |

Replacements should be background-removed and ~800px wide minimum. Also note the
header and footer already display all four badges, so this row currently repeats
what is elsewhere on the page.

---

## HOME-03 — Our Process

**What it is:** Eyebrow "Our Process", split intro (heading left / paragraph right),
then a **two-column auto-advancing stepper** — the four steps listed down the left,
one photograph on the right that swaps with the active step.

```
01  Understand          ┌────────────────────┐
    description shown   │                    │
    for the active step │       IMAGE        │
02  Design              │   (swaps with the  │
03  Integrate           │    active step)    │
04  Refine              └────────────────────┘
```

**Copy** — "From Vision to Effortless Living."
Steps: **Understand** · **Design** · **Integrate** · **Refine**

**Behaviour**

- Sequence starts when the section reaches `threshold: 0.4`, then advances every
  **3s**: 01 → 02 → 03 → 04 → back to 01, looping while in view.
- Pauses when the section scrolls out of view and resumes on return, so it is never
  running against an empty screen.
- **Clicking a step takes over** — it jumps there and stops the reel. Steps are real
  `<button>`s, so they are keyboard-reachable and carry `aria-expanded`.
- Dwell time lives in one place: `dwellMs` in the frontmatter, passed to CSS as
  `--dwell` and to JS as `data-dwell`.

**Animation**

- Active step: number and title go to full opacity, inactive sit at `0.35`.
- Description collapses/expands with `grid-template-rows: 0fr → 1fr`, so no height
  is hard-coded and a paragraph can wrap freely.
- A bronze rail fills top-to-bottom through the active step over `--dwell`, which
  makes the 3s wait legible rather than arbitrary. It only animates while
  `.is-playing` — once a visitor clicks, the rail sits full instead of implying a
  countdown that is no longer running.
- Image crossfades over `--dur-slow` with a slow `scale(1.04 → 1)` settle.
- Respects `prefers-reduced-motion` — no autoplay, no crossfade, steps stay clickable.

**Media** — `/images/home/process/`

| Step | File | Placeholder sourced from |
| --- | --- | --- |
| 01 Understand | `understand.webp` | `home/pillar-lighting.webp` — woman at a wall panel |
| 02 Design | `design.webp` | `home/pillar-shades.webp` — bright architectural interior |
| 03 Integrate | `integrate.webp` | `home/pillar-energy.webp` — rack, panel and EV charger |
| 04 Refine | `refine.webp` | `home/pillar-control.webp` — app in hand |

⚠️ **All four are placeholders.** There is no process/behind-the-scenes photography
anywhere in the repo — every image on the site is finished-room work — so these were
picked from the unused `pillar-*` set to read roughly as *person → architecture →
hardware → personalisation*. Replace them at these exact paths and no code changes
are needed. `integrate.webp` is the weakest: it is a 2:1 source cropped to 3:2 and
leaves a lot of dead wall.

**Now unused:** `step-1.webp` … `step-4.webp` — the large outlined numerals from the
previous 4-column layout. The stepper renders `01`–`04` as text, so these assets are
no longer referenced. Kept on disk rather than deleted, in case the numerals get
reused elsewhere.

**Superseded**

The previous 4-column row (icon + title + description, staggered reveal, bronze
hairline threading the four numerals) was replaced wholesale by this stepper. The
old doc suggestions — self-drawing SVG icons, a connecting hairline, bronze step
numbers, 70ms column stagger — no longer apply to this layout.

**Suggestions**

1. **Get real process photography.** This section now has four image slots and
   nothing genuine to put in them. A consultation at a dining table, a drawing set
   or elevation, a rack being terminated, a hand on a keypad at dusk — four shots
   would do more for this page than any further animation.
2. **Consider 4s rather than 3s.** The Design and Integrate descriptions run two
   lines; 3s is slightly tight to read one and register the image change.

---

## HOME-04 — Our Approach (statement)

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
HOME-04 and HOME-05. But **cut it to three cards** and drop "Entertainment" —
it overlaps "Audio Solutions", and three reads more confident than four.

⚠️ The 8 `pillar-*.webp` files in `/images/home/` were almost certainly staged for
this section, then abandoned. All 8 are byte-identical duplicates of images used
elsewhere (see `docs/image-audit.md`), so this section needs **new, unique
photography** — not those.

---

## HOME-05 — The Experience (7 tiles)

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

## HOME-06 — Technical Silence

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
3. ⚠️ Eyebrow is "The Experience" here **and** on HOME-05. Two adjacent sections
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

## HOME-07 — Inspiration

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
4. Reveal: mask wipe, 70ms stagger, same as HOME-05.

---

## HOME-08 — Closing CTA

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
| `hero.mp4` / `hero.webm` | HOME-01 **and** HOME-08 | Already extracted ✅ |
| `youtube.com/watch?v=dKu7G3i0O-o` | Live `/project-single/` only | ❌ not downloaded — see `06-project-single.md` |

Those are the only two videos on the entire live site. Places a third and fourth
would genuinely earn their cost:

1. **A 20–30s "Technical Silence" ambient loop** for HOME-06 — no people, no
   product, just light changing in a beautiful room. This is the one that sells.
2. **A distinct closing-CTA clip** for HOME-08, per the note above.
3. Per-solution 10s loops for the 13 solution-page heroes, replacing static
   `hero.webp`. Highest effort, so treat as phase 3.

---

## Page-level suggestions

1. **Break the cream monotony.** Partly addressed — the HOME-02 marquee band at
   `#FFF1D4` now interrupts the run. But HOME-03 → HOME-07 are still five
   consecutive sections on `#FFFCEF`. Put HOME-06 (Technical Silence) on charcoal
   with cream type. The page then reads dark → light → **dark** → light → dark,
   which gives the scroll a shape. This is a one-line change and it remains the
   highest-impact edit on the page.
2. **Height budget.** Five sections at `min-height: 100vh` makes the homepage
   roughly 8 screens tall. Release HOME-03 and HOME-07 from `100vh` and let them
   size to content.
3. **Section order.** Suggested target order once the missing sections return:

   | | Section | Note |
   | --- | --- | --- |
   | 1 | Hero *(with intro line)* | ✅ built |
   | 2 | Logo marquee | ✅ built |
   | 3 | The Experience — 7 tiles | **move up** — what you sell, above the fold+1 |
   | 4 | Our Approach (statement) | |
   | 5 | Technical Silence | **on charcoal** |
   | 6 | Our Process | ✅ animated |
   | 7 | Why PROJECT:automate + numbers | ❌ restore |
   | 8 | Inspiration | expand to 6 |
   | 9 | Closing CTA | new video |

   ⚠️ **Still outstanding:** the live order is unchanged, so a first-time visitor
   reads a 4-step process (HOME-03) before learning what the company installs
   (HOME-05). Moving The Experience above Our Process is a reorder of two lines in
   `index.astro`.
4. **Missing entirely, on both versions: a client voice.** No testimonial, no
   architect quote, no named project. For a referral-driven luxury trade, one
   pull-quote from an interior designer between HOME-07 and HOME-08 would do more
   than any animation in this document.
