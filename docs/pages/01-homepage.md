# 01 — Homepage

**Route:** `/`
**Source:** `src/pages/index.astro` (pure composition, all content lives in components)
**Component location:** `src/pages/_*.astro` — underscore-prefixed siblings of `index.astro`,
which Astro excludes from routing. *(An earlier draft of this file claimed
`src/components/home/`; that folder does not exist.)*
**Sections:** 10 in the rebuild · 11 on the live site
**Nothing in this file is outstanding except the items under "Blocked on assets"
below.**

---

## Section map

Order follows the target sequence agreed at the bottom of this file — what you
sell comes before how you work.

| # | Section | Component | Background | Height | Motion |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | `_HeroSection.astro` | Black + video *(no scrim)* | `100vh` | Held rise, 0.85× video, scroll cue |
| 2 | Logo marquee | `_LogoMarquee.astro` | `#FFF1D4` | auto | Single scroll, left → right |
| 3 | Technology That Elevates | `_ExperiencePillars.astro` | Cream | auto | Staggered reveal + drawing rules |
| 4 | Our Solutions (7 tiles) | `_SolutionsGrid.astro` | Cream | auto | Mask wipe in, hover scrim + description |
| 5 | Our Approach (statement) | `_StatementSection.astro` | Cream | auto | Scroll-driven word reveal |
| 6 | Technical Silence | `_TechnicalSilence.astro` | Black + scrubbed frames | `100vh` | Scroll-scrubbed lighting reveal |
| 7 | Our Process | `_ProcessSteps.astro` | Cream | auto | Auto-advancing stepper (4s) |
| 8 | Why PROJECT:automate | `_WhyProjectAutomate.astro` | `#FAF5EE` | auto | Counting stats |
| 9 | Inspiration | `_InspirationPreview.astro` | Cream | auto | Mask wipe + arrow nudge |
| 10 | Closing CTA | `ui/CtaBanner.astro` (`variant="feature"`) | Black + video | `100vh` | Video fades in on intersection |

**Not placed:** `_CertificationMarquee.astro` — the certification strip, split out
of the logo marquee and left unwired so it can be dropped wherever it is wanted.
Add with one import plus `<CertificationMarquee />`.

The intro statement is no longer its own section — it lives inside the hero as a
sub-line. See section 1.

The page now reads dark → light → **dark** → light → dark, broken up by the
`#FFF1D4` marquee band and the `#FAF5EE` trust block.

---

## 1 — Hero

**What it is:** Full-viewport autoplaying muted video, headline, sub-line and one
button bottom-**right** (bottom-left on mobile).

**Copy**

- H1: *Tailored Luxury* / *Technologies* (two lines)
- Lede: *"Lighting, climate, sound and security, designed to work as one, and to disappear."* (two lines)
- Button: "Book a Consultation" → `/schedule/`

**Changed from the original rebuild**

- ✅ **Intro statement absorbed here.** It was going to be its own cream section
  under the hero; standalone it read as a stranded paragraph and duplicated the job
  of section 5. As a hero sub-line it does real work — the H1 is three adjectives and
  a plural noun, and this is the line that says what the company actually installs.
  "Disappear" also plants the thesis that section 6 pays off.
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
| Video (mp4), desktop | `/videos/hero.mp4` | 8.3 MB | Primary source (H.264, broad hw decode), `min-width: 701px`, 1600×900 |
| Video (webm), desktop | `/videos/hero.webm` | 7.5 MB | Fallback (VP9), `min-width: 701px`, 1600×900 |
| Video (mp4), mobile | `/videos/hero-mobile.mp4` | 2.9 MB | Primary source, `max-width: 700px`, 960×540 |
| Video (webm), mobile | `/videos/hero-mobile.webm` | 3.3 MB | Fallback, `max-width: 700px`, 960×540 |
| Poster | `/images/home/hero/poster.webp` | 150 KB | |

mp4/H.264 is listed first in each `<source>` group (browsers play whichever
source they hit first that they support — they don't benchmark). VP9
hardware-decode support is inconsistent across GPUs, and software VP9 decode at
1080p was causing visible stutter; H.264 hardware decode is close to universal.
Resolution is capped below source res and both codecs use a hard bitrate
ceiling (`-maxrate`/`-bufsize`, or `-b:v` as ceiling for VP9's constrained-quality
mode) so there are no bitrate spikes for the decoder to fall behind on.

Desktop sources re-encoded from `/videos/Homepage/project-automate-hero-1080.mp4`,
mobile from `/videos/Homepage/project-automate-hero-720.mp4` (raw source clips,
1920×1080/30fps/~50s each, kept for reference/regeneration).

✅ Self-hosted, not a YouTube iframe. *(`docs/known-issues.md` still claims this is
a YouTube embed — that note is stale, the code self-hosts.)*

**Animation today** ✅

- `@keyframes rise` on the two headline lines: `opacity 0→1`,
  `translateY(0.6em→0)`, `0.9s cubic-bezier(0.22, 1, 0.36, 1)`, 120ms apart, all
  held behind a **0.4s delay** so the video settles out of its poster first.
- Lede reuses `rise` at `0.7s`, trailing the second headline line.
- Video plays at **0.85×** (`video.playbackRate`, reapplied on `loadeddata`
  because some browsers reset it when the source finishes loading).
- Scroll cue: a 1px bronze line travelling down a 56px track on a 2s loop,
  bottom-centre. Hidden below 700px.
- Button: background colour transition only.
- Respects `prefers-reduced-motion`. ✅

**Layout**

The headline, lede and button sit in a fixed **544px text box** anchored bottom
right. The box is right-aligned on the page but its type is left-aligned — a
ragged right edge fought the reading order. Headline and lede are each broken to
two lines; the lede's break is released below 700px where it would wrap anyway.

**Suggestions**

1. ~~**Hold the video before the words arrive.**~~ ✅ Done — 0.4s.
2. ~~**Slow the video to 0.85×.**~~ ✅ Done.
3. ~~**A scroll cue.**~~ ✅ Done — bronze line, 2s loop, bottom-centre.
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
section 5's word-reveal statement. See section 1.

---

## ✅ RESOLVED — Scrolling marquee

**What live had:** a horizontal text ticker repeating *"Tailored Luxury Technology
Systems Designed for your lifestyle"* six times, driven by custom JS
(`.containerholder` + `scrolled-into-view`, `transform: translateX(100%)`,
`transition: transform 2s ease`).

**What was built:** a **logo marquee** instead — see section 2 below. The text ticker
was deliberately not rebuilt; it repeated a phrase already used as the H1 and read
as filler.

---

## 2 — Logo marquee ✅ NEW

**What it is:** a single strip of 12 manufacturer logos scrolling left → right
over 36s, on a warm `#FFF1D4` band, hairline-bordered top and bottom. Sits
directly under the hero.

The certification strip that originally sat beneath it was **split into its own
component**, `_CertificationMarquee.astro` — same seamless-loop technique,
scrolling right → left over 30s, on cream rather than the warm band so it works
anywhere. It is **not currently placed on the page**; wire it in with one import
plus `<CertificationMarquee />` wherever it is wanted.

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

**⛔ Blocked on assets — the certification badges**

This is the one thing on the homepage that cannot be finished in code. The three
badge assets predate this work and have **not** had the same treatment as the
vendor logos:

| Badge | Problem |
| --- | --- |
| `cert-level-luxury.webp` | White box + grey bar baked in — reads as a rectangle on any background |
| `hta-design-partner.webp` | Only 280×40, white text on transparent; renders blurry and nearly invisible on cream |
| `cedia-certified.webp` | ✅ Fine — circular, transparent |

Replacements should be background-removed and ~800px wide minimum. Until then:

- `_CertificationMarquee.astro` is built but unplaced.
- The badge row under the stats in section 8 was **left out** for the same reason.
- The header and footer still show all four, so nothing is actually lost.

---

## 7 — Our Process

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

## 5 — Our Approach (statement)

**What it is:** Eyebrow "Our Approach", then one display sentence that reveals word
by word as you scroll through it.

**Copy:** *"We create intelligent living environments where comfort, control and
design work seamlessly as one, enhancing everyday life with clarity, simplicity,
and precision."*

**Animation today** ✅ scroll-driven

- Word opacity is mapped directly to scroll position — no timer, no stagger.
  Progress runs from the heading's top passing **85%** of the viewport to reaching
  **30%**, a little over half a screen of scrolling, so the sentence finishes while
  it is still comfortably in view.
- The leading edge is feathered across **4 words** rather than switching each word
  on individually, which reads as a sweep instead of a stutter.
- Words rest at `opacity: 0.14` and resolve to `1`.
- Scroll listener is rAF-throttled and only attached while the heading is within
  `100px` of the viewport, so it costs nothing on the rest of the page.
- **Progressive enhancement:** the dimming is applied by JS, not CSS. Without
  JS the sentence renders fully legible rather than nearly invisible.
- Reduced motion: fully lit, no scroll handler attached at all.

**Fixed along the way:** the copy used to be a hard-coded array of four "display
lines", but each line was wider than the `24ch` measure and wrapped *again*,
orphaning the word "work" onto a line of its own. It is now a single string that
wraps naturally inside a `32ch` measure with `text-wrap: balance`, giving four even
lines.

**Suggestions**

1. ~~**Drive it by scroll position, not a timer.**~~ ✅ Done — see above. Reference
   was [apple.com/airpods-pro](https://www.apple.com/airpods-pro/).
2. ~~**Eyebrow.**~~ ✅ Done — now reads "Our Approach", matching the live site's
   human label rather than the SEO phrase.
3. ~~**Missing comma.**~~ ✅ Done — "work seamlessly as one**,** enhancing everyday
   life". ⚠️ The error is still live on the production site.

---

## 3 — Technology That Elevates ✅ RESTORED

**Component:** `_ExperiencePillars.astro`. Eyebrow "The Experience", heading
"Technology that elevates everyday life.", then three cards.

Cut from four to three as recommended — live's "Entertainment" overlapped "Audio
Solutions", and three reads more confident:

| Card | Copy |
| --- | --- |
| Control | Every system, every room — answered with a single, intuitive gesture. |
| Atmosphere | Light, warmth and shade compose for the mood of every moment. |
| Audio Solutions | Immersive entertainment that blends beautifully into every living space. |

**Built typographic, with no photography.** The doc's warning still holds — the 8
`pillar-*.webp` files staged for this section are byte-identical duplicates of
images used elsewhere, and two of them now back the process stepper. Rather than
repeat imagery across the page, each card leads with a bronze rule that draws in,
then the title and copy. The writing carries it, which was the point: this is the
strongest copy on the live site.

**Animation:** cards stagger in at 70ms (`opacity` + `translateY`), each card's
rule wiping `scaleX(0→1)` over 1s at a further 120ms offset. Fires once on
`IntersectionObserver` at `threshold: 0.25`. Reduced motion handled.

**Suggestion:** if photography is ever shot for this section, it needs to be
*new and unique* — not the `pillar-*` set.

---

## 4 — Our Solutions (7 tiles)

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

⚠️ Eyebrow is **"Our Solutions"**, not "The Experience" — that belongs to section 3
directly above, and two adjacent sections sharing an eyebrow is the mistake this
rebuild already had to fix once at Technical Silence.

**Animation today** ✅

- Tiles wipe in on scroll: `clip-path: inset(0 0 100% 0) → inset(0)`, 900ms on
  `--ease-out-expo`, **70ms stagger** on a flat index running down the mosaic
  rather than restarting each row. Fires once at `threshold: 0.1`.
- Scrim rests at `0.55` opacity and deepens to `1` on hover, so the photography
  leads and the label follows.
- Title block slides up 8px on hover as the scrim deepens.
- Each tile now carries a one-line description that expands on hover
  (`grid-template-rows: 0fr → 1fr`), giving the hover state a reason to exist.
- Image `scale(1.04)` on hover; arrow button fills bronze.
- Below 800px there is no hover, so descriptions and the full scrim are shown
  permanently. Reduced motion handled.

**Suggestions**

1. ~~**Reveal the tiles on scroll.**~~ ✅ Done.
2. ~~**Scrim should be a hover state.**~~ ✅ Done — 0.55 → 1.
3. ~~**Titles slide up ~8px on hover.**~~ ✅ Done.
4. ~~**One-line descriptions, revealed on hover.**~~ ✅ Done — copy written to match
   the live site's tone; swap in live's exact strings if they are preferred.
5. ~~**Drop the `!important`.**~~ ✅ Done — the row split is passed as a `--cols`
   custom property instead of an inline `grid-template-columns`, so the mobile
   breakpoint overrides it without needing to outrank an inline style.

---

## 6 — Technical Silence

**What it is:** Full-viewport, **on dark**. Eyebrow "Our Philosophy", then "Technical
Silence." at `--text-display-xl` (160px at 1440) in white, with a short paragraph
pushed to the right — all over a **scroll-scrubbed frame sequence** of landscape
lighting coming up across an estate at night.

**Animation today** ✅ scroll-scrubbed video

The section's background is a `<canvas>` playing a 75-frame sequence whose frame
index is driven by scroll position. The clip is a *reveal* — the estate starts
essentially unlit and the landscape lighting comes up over 5 seconds — so scrolling
into the section literally turns the lights on. That makes the motion argue the
section's point instead of decorating it.

- Progress runs from the section's top being one viewport below the fold to it
  reaching the top of the viewport — one screen of scrolling, ~12px per frame — so
  the lighting finishes coming up as the section fills the screen and then **holds
  lit** while you read.
- **Adjacent frames are crossfaded** by the fractional part of the frame index. The
  camera is static and only the light level changes, so blending reads as a
  continuous ramp with no ghosting. This is what lets 75 frames feel smooth; without
  it you would need roughly double the frames and double the bytes.
- Frames preload in parallel; until a given frame lands the canvas falls back to the
  nearest loaded one, so scrubbing never shows a blank. Scroll listener is
  rAF-throttled and only attached within `150%` of the viewport.
- Canvas is a 1280×720 bitmap with `object-fit: cover` — `object-fit` applies to
  `<canvas>` as a replaced element, so one bitmap fills any viewport undistorted.
- **Phones and save-data** skip the sequence entirely and get the final lit frame as
  a still. 3.7MB is not worth spending on a phone.
- ⚠️ **Deliberately not gated on `prefers-reduced-motion`,** unlike every other
  animation on this page. The camera in this clip is static — nothing travels across
  the screen, only the light level changes — so the scrub is a cross-fade rather than
  motion. Gating it silently disabled the entire effect for anyone who had turned
  Windows *Settings → Accessibility → Visual effects → Animation effects* off, which
  is a common performance tweak. If the clip is ever replaced with one that pans or
  moves, put the reduced-motion gate back.

**Media** — `/images/home/technical-silence/frame-001.webp` … `frame-075.webp`

| | |
| --- | --- |
| Source | `/videos/Homepage/Landscapre_lighting_video.mp4` (1920×1080, 60fps, 5.0s, 4.9MB) |
| Sampling | every 4th frame → 75 frames |
| Encode | scaled to 1280 wide, WebP quality 72 |
| Total | ~3.7MB (≈50KB per frame) — comparable to `hero.webm` at 2.9MB |

Regenerate after swapping the clip:

```
ffmpeg -i <clip> -vf "select='not(mod(n\,4))',scale=1280:-2" -vsync 0 \
  -c:v libwebp -quality 72 -compression_level 6 \
  public/images/home/technical-silence/frame-%03d.webp
```

Measured alternatives, for when this gets revisited: 1920-wide q72 averages 95KB per
frame (13MB at 150 frames) and 1600-wide q72 averages 69KB. AVIF was tested and
rejected — marginal size win, much slower encode, and slower decode, which matters
when 75 images must decode during a scroll.

⚠️ **The source .mp4 still sits in `public/`,** so it ships to production as 4.9MB of
dead weight — nothing references it now that the frames exist. Move it out of
`public/` (or delete it) before the next deploy.

**Suggestions**

1. ~~Reveal "Technical" and "Silence." as two mask-wipes.~~ Superseded — the section
   now has the scrubbed background as its deliberate moment. A type reveal on top of
   it would be one effect too many.
2. ~~**Then take the sound out** — a near-silent ambient loop at 8% opacity.~~ ✅ Done,
   and better than specified: a real clip at full opacity, driven by scroll rather
   than playing on its own.
3. ~~⚠️ Eyebrow duplicated with section 4.~~ ✅ Done — this one is now "Our Philosophy".
4. 🆕 **This resolves page-level suggestion 1** (see the bottom of this file): the
   cream run is now broken by a genuinely dark section, and the page reads
   dark → light → dark → light → **dark** → light → dark.

---

## 8 — Why PROJECT:automate ✅ RESTORED

**Component:** `_WhyProjectAutomate.astro`, on `#FAF5EE` with hairline borders so
it reads as a distinct trust block rather than more cream.

`/images/badges/17-years-badge.webp` — previously unused — now sits beside the
eyebrow "Why PROJECT: automate" and the heading "Seventeen years of getting it
right quietly."

**The numbers**

| | |
| --- | --- |
| 17+ | Years of smart home expertise |
| 400+ | Residences integrated |
| 6 | Manufacturer certifications |
| 24/7 | Concierge support |

🔴 **400+ is a placeholder and must be replaced with the real figure before this
goes near production.** It is the one invented number on the page. The other three
are verifiable from existing site copy.

**Animation:** counters run 0 → target over 1.2s on an ease-out-expo curve when
the section hits `threshold: 0.3`, once. Values use `font-variant-numeric:
tabular-nums` so the row does not twitch as digit widths change mid-count. Stats
stagger in at 70ms. Reduced motion skips straight to final values.

**Left out:** the CEDIA / HTA / Cert-Level-Luxury badge row that was to sit
beneath the stats — two of the three assets render broken (see section 2's
blocked-on-assets note), and all four already appear in the header and footer.
Add it back once the badges are re-exported.

---

## 9 — Inspiration

**What it is:** Split intro ("Inspiration" left, one line right), then 3 project
cards — image, location + year, name with arrow.

**Media** — `/images/home/inspiration/`

| Project | File | Status |
| --- | --- | --- |
| Oceanfront Villa — Malibu, 2025 | `malibu.webp` | 🔁 dup of `get-inspired/inspiration-malibu.webp` |
| Marazul Estate — Hidden Hills, 2024 | `hidden-hills.webp` | 🔁 triple dup — also the `/hvac-and-climate-integration/` hero |
| Alpine Retreat — Manhattan Beach, 2023 | `manhattan-beach.webp` | 🔁 dup of `get-inspired/` copy |

~~⚠️ There is a second, redundant copy of all three at
`/images/home/inspiration-*.webp`.~~ ✅ Deleted — they were unreferenced (the
`/images/get-inspired/` copies are a different, live set). Recoverable from git
if ever needed.

**Animation today** ✅ mask wipe on scroll, 900ms, 70ms stagger — same treatment as
the solutions mosaic. Image `scale(1.04)` on hover, arrow translates `(3px, -3px)`.
Released from `min-height: 100vh`.

**Suggestions — all three remaining need content, not code**

1. **All three cards link to `/get-inspired/`** — the same URL, three times. Left
   as-is deliberately: `/project-single/` is a single static page, so deep-linking
   would need per-project routes and per-project content that does not exist yet.
   Pointing three cards at one identical "case study" would be worse than pointing
   them at the gallery.
2. Only 3 projects for a 17-year firm undersells you. Six, in a 2-row grid, with
   the first full-width — needs three more projects and their photography.
3. Systems-installed tags under each name ("Lighting · Cinema · Shading") — not
   added, because it would mean inventing which systems went into named
   residences. Supply the real lists and it is a small change.
4. ~~Reveal: mask wipe, 70ms stagger.~~ ✅ Done.

---

## 10 — Closing CTA

**What it is:** Full-viewport black with the **same hero video** replayed behind a
left-to-right gradient scrim. "Design your / Living Experience", one line, one
bronze button → `/get-started/`.

**Component:** `home/CtaBanner.astro` with `variant="feature"`. The `"compact"`
variant of this same component closes most other pages.

**Animation today** ✅ the video no longer autoplays. It starts on
`IntersectionObserver` at `threshold: 0.2` and fades `opacity 0→1` over 600ms, with
the poster held as a `background-image` on the media layer underneath so there is
no black gap while it is faded out. `preload="none"` is kept, so the 4MB clip stays
off the initial page load.

**Suggestions**

1. ⚠️ **Reusing the hero video here is still the weakest decision on the page.** The
   first and last thing a visitor sees are the same 4MB clip. Needs a second clip —
   a slow interior dolly at dusk, lights coming up. **Now that the landscape
   lighting clip has proven the frame-sequence pipeline works, this is the obvious
   next candidate for the same treatment.**
2. ~~`preload="none"` causes a poster-to-video pop.~~ ✅ Done — see above.
3. ~~Two different CTAs to two different pages.~~ ✅ Done — unified on
   **"Schedule a Consultation" → `/schedule/`**, matching the header and the hero.
   ⚠️ **This is a site-wide change:** `CtaBanner` closes most other pages in its
   `"compact"` variant, so every one of them now points at `/schedule/` instead of
   `/get-started/`. `/get-started/` still exists and is still routable — it is
   simply no longer linked from the closing CTA.

---

## Video inventory

| Video | Where | Source |
| --- | --- | --- |
| `hero.mp4` / `hero.webm` | section 1 **and** section 10 | Already extracted ✅ |
| `youtube.com/watch?v=dKu7G3i0O-o` | Live `/project-single/` only | ❌ not downloaded — see `06-project-single.md` |

Those are the only two videos on the entire live site. Places a third and fourth
would genuinely earn their cost:

1. **A 20–30s "Technical Silence" ambient loop** for section 6 — no people, no
   product, just light changing in a beautiful room. This is the one that sells.
2. **A distinct closing-CTA clip** for section 10, per the note above.
3. Per-solution 10s loops for the 13 solution-page heroes, replacing static
   `hero.webp`. Highest effort, so treat as phase 3.

---

## Page-level suggestions

1. ~~**Break the cream monotony.**~~ ✅ Done. The section 2 marquee band at `#FFF1D4`
   interrupts the run, and section 6 (Technical Silence) is now genuinely dark — black
   with a scrubbed night-lighting background and white type. The page reads
   dark → light → dark → light → **dark** → light → dark, which gives the scroll a
   shape.
2. ~~**Height budget.**~~ ✅ Partly. Our Process and Inspiration are released from
   `min-height: 100vh` and size to content; only Hero, Technical Silence and the
   closing CTA still claim a full viewport, which is correct for all three. The
   page is now **10.8 screens** across 10 sections — taller than the old 8, but
   that is two restored sections, and the per-section budget went *down*.
3. ~~**Section order.**~~ ✅ Done. `index.astro` now runs:

   | | Section | |
   | --- | --- | --- |
   | 1 | Hero *(with intro line)* | ✅ |
   | 2 | Logo marquee | ✅ |
   | 3 | Technology That Elevates | ✅ restored |
   | 4 | Our Solutions — 7 tiles | ✅ **moved up** — what you sell, above the fold+1 |
   | 5 | Our Approach (statement) | ✅ |
   | 6 | Technical Silence | ✅ on black, scrubbed video |
   | 7 | Our Process | ✅ |
   | 8 | Why PROJECT:automate + numbers | ✅ restored |
   | 9 | Inspiration | ✅ *(still 3 projects — needs content to reach 6)* |
   | 10 | Closing CTA | ✅ *(still needs its own clip)* |

   A first-time visitor now learns what the company installs before reading how it
   works.
4. ⛔ **Missing entirely, on both versions: a client voice.** No testimonial, no
   architect quote, no named project. **Not implemented, deliberately** — a
   pull-quote attributed to a designer or client cannot be invented; it has to be a
   real person who really said it. Supply one quote, a name and a practice and it
   drops in between sections 9 and 10. For a referral-driven luxury trade this
   would still do more than any animation in this document.

---

## Blocked on assets

Everything in this file is implemented except the following, none of which can be
finished in code:

| # | Blocker | Unblocks |
| --- | --- | --- |
| 1 | `hta-design-partner.webp` and `cert-level-luxury.webp` need background-removed re-exports at ~800px | The certification marquee (built, unplaced) and the badge row in section 8 |
| 2 | Real process photography — consultation, drawing set, rack being terminated, hand on a keypad | Four placeholder images in section 7 |
| 3 | The real "residences integrated" figure | 🔴 `400+` in section 8 is invented |
| 4 | Three more projects + photography | Inspiration at 6 rather than 3 |
| 5 | Per-project case-study content | Deep links from the Inspiration cards |
| 6 | Systems-installed lists for the three named residences | Bronze capability tags |
| 7 | One real client or designer quote | The missing client voice |
| 8 | A second video clip for the closing CTA | Stops the hero clip being reused first and last |
