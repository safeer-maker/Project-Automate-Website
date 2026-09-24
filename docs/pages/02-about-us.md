# 02 — About Us

**Route:** `/about-us/`
**Source:** `src/pages/about-us/index.astro` (241 lines — all sections inline, needs splitting)
**Layout:** `ServiceLayout.astro` ⚠️ *(this is a company page, not a service page — see note)*
**Target component folder:** `src/components/about/`
**Sections:** 6

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| ABOUT-01 | Hero | `about/AboutHero.astro` *(currently `ServiceLayout`)* | Photo + dark scrim |
| ABOUT-02 | Our Philosophy | `about/Philosophy.astro` | Cream |
| ABOUT-03 | 17 Years + certification badges | `about/Credentials.astro` | Cream-alt, hairline top/bottom |
| ABOUT-04 | Founder | `about/Founder.astro` | Cream |
| ABOUT-05 | Our Process (4 steps) | `about/ProcessSteps.astro` | Cream |
| ABOUT-06 | Closing CTA | `home/CtaBanner.astro` (compact) | Charcoal |

---

## ABOUT-01 — Hero

Inherited from `ServiceLayout`: 65vh photo, `rgba(10,10,10, .35 → .92)` vertical
gradient, content bottom-left, one button.

- Eyebrow: "About PROJECT: automate"
- H1: "Intelligent Living, Designed With Purpose."
- Sub: "We create intelligent environments where every detail works in harmony — quietly, beautifully, completely."
- Button: "Schedule Consultation" → `/schedule/`

**Media:** `/images/about-us/hero-smart-home-control.webp` — unique to this page ✅

**Animation today:** none.

**⚠️ Structural note.** About Us uses `ServiceLayout`, which hardcodes a
"Schedule Consultation" button into the hero. Every solution page, every brand
page and this page therefore open identically. About Us should get its own hero
component so it can open differently — this is the page where a person, not a
product, should be the first thing you see.

**Suggestions**

1. Open on the founder or the team, not a product shot. The current hero image is
   a keypad — indistinguishable from the eight solution-page heroes.
2. Slow `scale(1 → 1.05)` on the hero image over 12s (Ken Burns, imperceptible).
3. Headline mask-reveal, single wipe, 900ms.

---

## ABOUT-02 — Our Philosophy

Two-column: image left, eyebrow + heading + two paragraphs right.

- Eyebrow: "Our Philosophy" · H2: "Technology, made invisible."
- **Media:** `/images/about-us/philosophy-keypad-and-view.webp` — unique ✅

**Animation today:** none.

**❌ Gap vs. live.** The live page carries a standalone pull-quote between this
section and the next:

> One system. Every experience connected.

and repeats the "best smart homes are not the ones that demand attention" line as
a large centred statement. The rebuild folds both into body copy, which loses the
page's only moment of emphasis.

**Suggestions**

1. Restore "One system. Every experience connected." as a full-width centred
   statement on charcoal, with the word-reveal treatment. It's the company's
   tagline and it currently appears nowhere on the site at display size.
2. Image should mask-reveal from the bottom as the text rises — offset by 150ms so
   they don't move in lockstep.

---

## ABOUT-03 — 17 Years + certification badges

Horizontal band on `--color-surface` with hairline borders. One bold line left,
four 80×80 badges right.

**Media** — 🆕 **rebuild only, the live site shows no badges on this page**

| Badge | Path |
| --- | --- |
| 17+ Years | `/images/badges/17-years-badge.webp` |
| CEDIA Certified | `/images/badges/cedia-certified.webp` |
| Cert Level: Luxury | `/images/badges/cert-level-luxury.webp` |
| HTA Design Partner | `/images/badges/hta-design-partner.webp` |

This page is the **only** place in the entire codebase where these four files are
used. Good addition — it should be reused in the footer and on the homepage (see
`00-global-shell.md` and `01-homepage.md`).

**Animation today:** none.

**Suggestions**

1. Badges at 80px with `opacity: 0.9` are a compromise that satisfies nobody.
   Either go 56px and fully desaturated as a quiet trust line, or go 120px and
   full colour as a proper credentials block. Pick a side.
2. Add the numbers from `01-homepage.md` here too — years, residences,
   certifications, response time — counting up on scroll.
3. Each badge should link out to its issuing body (CEDIA, HTA). Verifiable
   credentials are worth more than decorative ones.

---

## ABOUT-04 — Founder

320px portrait left, text right. Eyebrow "Founder & CEO", H2 "Joshua Trevithick",
one paragraph.

**Media:** `/images/about-us/founder-joshua-trevithick.webp` — unique, 3:4 ✅

**Animation today:** none.

**⚠️ Copy conflict.** This section says *"nearly three decades of personal
experience"*, ABOUT-03 directly above says *"For over 17 years"*, and the homepage
badge says *"17+ YEARS"*. Both numbers are probably true (personal career vs.
company age) but presented 200px apart they read as an error. Rewrite to
*"17 years at the helm of PROJECT: automate, and nearly three decades in AV."*

**Suggestions**

1. **Add a signature.** A scanned signature under the paragraph, in bronze, is the
   single cheapest luxury signal in this document.
2. **Add a quote.** One sentence in the founder's own voice, in display type,
   pulled out of the paragraph. As written this reads like third-person marketing
   copy about a person rather than from them.
3. Portrait should mask-reveal vertically; text staggers in after.
4. Reference:
   [taylorhowes.co.uk/about](https://www.taylorhowes.co.uk/about/) — founder-led
   luxury interiors studio; note how the portrait, the quote and the signature do
   the work together.

---

## ABOUT-05 — Our Process (4 steps)

Centred heading "From idea to installation.", then 4 columns with a bronze
`01`–`04`, a title, and a line of copy. Each column has a hairline top border.

**Animation today:** none.

**⚠️ Duplicate of HOME-02.** The homepage has the *same* four steps (Understand /
Design / Integrate / Refine) with *slightly different* copy and with icons. Two
versions of one company process, on the two most-visited pages, that don't match.

The live site has this problem too, and worse — its numbering renders as
`/01 · /02 · /01 · /01`. The rebuild correctly fixed that to `01–04`. ✅

**❌ Gap vs. live.** The live version has an intro line the rebuild drops:

> Four deliberate stages. Every decision documented, every detail considered so
> that the system you live with feels obvious, never overwhelming.

That's good copy. Bring it back.

**Suggestions**

1. **Pick one canonical process** and share a single component between this page
   and the homepage, with a prop for "icons" vs "numbers". Right now the same
   information exists twice in two files.
2. This is the version that should go deeper — the homepage gets one line per
   step, About Us gets three, plus a typical duration for each stage. Buyers
   spending six figures want the timeline.
3. Bronze rule between steps that draws left-to-right as the row reveals.

---

## ABOUT-06 — Closing CTA

`CtaBanner` compact variant, charcoal, "Design your Living Experience" →
`/get-started/`. ✅ matches live.

---

## Page-level suggestions

1. **This page has no proof.** Six sections, zero client names, zero project
   references, zero testimonials, no team beyond the founder. For a company
   selling 17 years of expertise, About Us is where that has to be evidenced.
   Add between ABOUT-04 and ABOUT-05:
   - **The team** — 4–6 portraits with roles. Says "this is a firm", not "a guy with a van".
   - **Manufacturer certifications** — the six brand logos you already have at
     `/images/brands/logos/`, framed as "certified and trained on".
   - **One client or architect quote.**
2. **Give it its own layout.** Move off `ServiceLayout` to a dedicated
   `about/AboutHero.astro` so this page can open on a human being.
3. **Missing: a location/studio section.** You're in Manhattan Beach with a real
   address in the footer. Luxury trade buyers care where you are and how far you
   travel. A short "Where we work" block naming the served areas (Malibu, Hidden
   Hills, Manhattan Beach — all already referenced on the homepage) would carry
   real SEO value too.
4. **Reading order.** Move ABOUT-03 (credentials) below ABOUT-04 (founder). Right
   now a badge wall interrupts the philosophy → founder narrative.
