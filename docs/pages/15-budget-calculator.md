# 15 — HTA Budget Calculator

**Route:** `/budget-calculator/`
**Source:** `src/pages/budget-calculator/index.astro` (509 lines — **the largest
file in the project**)
**Target component folder:** `src/components/calculator/`
**Sections:** 5

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| CALC-01 | Hero / intro | `calculator/CalculatorHero.astro` | Cream |
| CALC-02 | Interactive estimator | `calculator/Estimator.astro` | Cream |
| CALC-03 | Why It Matters (3 points) | `calculator/WhyItMatters.astro` | Cream |
| CALC-04 | What HTA Considers (3 groups) | `calculator/HtaCategories.astro` | Cream |
| CALC-05 | Closing CTA | inline + `home/CtaBanner.astro` | Cream → Charcoal |

---

## CALC-01 — Hero / intro

Eyebrow "How the Estimator Helps", title "Plan with confidence before the project
begins.", plus an explanatory paragraph.

---

## CALC-02 — Interactive estimator

Client-side calculator producing a range across three tiers — **Foundation /
Elevated / Ultra-Luxury** — from home size and room count, split across
**Infrastructure / Experience / Protection**.

🆕 **Rebuild-only and a genuine improvement.** The live site just iframes
`htacertified.org/home-technology-installation-budget-tool/19414` — a third-party
tool, off-brand, with none of the numbers exposed.

**Animation:** the only page outside the homepage with real interaction JS.

**⚠️ The numbers are placeholders.** Per `docs/known-issues.md`: the tier names and
the Infrastructure/Experience/Protection framing are real HTA concepts, but the
dollar figures and per-sq-ft / per-room rates were invented as reasonable
placeholders and **need sign-off or replacement before this goes live.** Publishing
invented pricing to luxury buyers is the highest-risk item in this documentation
set.

**Suggestions**

1. **Get the real numbers signed off.** Nothing else on this page matters until
   that's done.
2. **Animate the result.** Count the figure up over ~800ms with `--ease-out-expo`
   when it changes, and animate the three category bars to their new widths. Right
   now the number snaps, which makes it feel like a spreadsheet rather than a tool.
3. **Use sliders, not number inputs** for size and room count, with the estimate
   updating live as you drag. This is the one place on the site where immediate
   feedback is the whole point.
4. **Show the tiers side by side** rather than one at a time, so a visitor can see
   what more money buys. That comparison is the actual sales argument.
5. **Add "email me this estimate"** — a genuinely wanted action that captures a
   qualified lead at the exact moment of highest intent. This is the best
   lead-capture opportunity on the entire site and it isn't there.
6. Add a visible disclaimer: planning range, not a quote.

---

## CALC-03 — Why It Matters

Three points: *Define the scope* · *Set realistic expectations* · *Budget with
confidence*.

**Animation:** none. Add the standard rise + 70ms stagger.

---

## CALC-04 — What HTA Considers

Three groups: **Infrastructure** · **Experience** · **Protection**.

**Suggestions**

1. Link each group's items to the matching solution pages. Infrastructure →
   networking/control, Experience → AV/lighting/cinema, Protection → security.
   Right now the page explains categories and offers no route into the services
   that fulfil them.
2. Icons per group, drawn in on reveal.

---

## CALC-05 — Closing CTA

"Ready to Turn This Range Into a Plan?" then `CtaBanner`. Same doubled-CTA pattern
as elsewhere — fold the heading into the banner.

**Suggestion:** this CTA should carry the estimate forward — "Book a consultation
about your $X–$Y project" with the tier pre-filled into the form. High-intent
handoff, small amount of work.

---

## Page-level suggestions

1. **This is the site's best lead magnet and it's buried.** It's in `primaryNav`
   as "HTA Budget Calculator" (behind the hamburger) and in the footer, and
   nowhere else. Put a link to it on every solution page and in the blog sidebar.
2. **509 lines in one file.** Definitely split — `Estimator.astro` with the
   calculation logic in a separate `src/lib/budget.ts`, so the numbers can be
   reviewed and changed without touching markup.
3. Reference:
   [htacertified.org/home-technology-installation-budget-tool](https://htacertified.org/home-technology-installation-budget-tool/)
   — the tool the live site embeds, useful for checking your tier boundaries
   against theirs.
