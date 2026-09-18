# 00 — Global Shell

Everything that renders on *every* page: header, footer, design tokens, and the
motion system. Change something here and it changes site-wide, so this file is
worth reading before any of the page files.

**Source:** `src/layouts/BaseLayout.astro` → `src/layouts/PageLayout.astro`
**Target component folder:** `src/components/layout/`

---

## Section map

| ID | Section | Component | Background |
| --- | --- | --- | --- |
| SHELL-01 | Header / nav | `layout/Header.astro` | Charcoal 85% + blur, sticky |
| SHELL-02 | Off-canvas menu | `layout/Header.astro` (same file) | Charcoal panel, slides from right |
| SHELL-03 | Footer | `layout/Footer.astro` | Charcoal |
| SHELL-04 | Footer legal bar | `layout/Footer.astro` (same file) | Charcoal |

---

## SHELL-01 — Header / nav

**What it is:** Sticky translucent bar. Logo left, "Schedule Consultation"
button + hamburger right. Nothing else.

**Media**

| Asset | Path | Note |
| --- | --- | --- |
| Static logo | `/images/logo/logo-static.webp` | Default state |
| Animated logo | `/images/logo/logo-animated.webp` | Cross-fades in on hover |
| Favicon | `/images/logo/favicon.webp` | |

**Animation today**

- Logo hover: static ↔ animated cross-fade, `opacity 0.25s ease`. ✅ matches live.
- Header itself: sticky only — no shrink, no hide-on-scroll-down, no background change.

**❌ Gap vs. live — the biggest one on the site.**
The live header shows a full horizontal nav at desktop:
`Core services · About us · Design partner · Blogs · HTA Budget Calculator · Contact us`,
with a mega-menu panel that slides in (`slideInRight`) and carries preview imagery.
The rebuild puts **all** navigation behind a hamburger at every breakpoint.

Two images for that mega menu are already sitting unused in the repo:
`/images/home/nav-preview-about.webp` and `/images/home/nav-preview-core-services.webp`.

**Suggestions**

1. **Restore the desktop nav.** A hamburger-only desktop header reads as
   "portfolio site", not "company that will wire your $8M house". Luxury brands
   that go minimal still expose their categories — see the persistent top nav on
   [bang-olufsen.com](https://www.bang-olufsen.com/en/us/) and
   [lutron.com/en-US/residential](https://www.lutron.com/en-US/residential).
2. **Mega menu with imagery**, using those two unused previews: hovering
   "Core services" opens a panel with the 8 service links on the left and a
   preview image on the right that swaps as you hover each link. Reference:
   [crestron.com/Products](https://www.crestron.com/Products) — that category
   flyout is the mechanic; ours needs warmer art direction.
3. **Header state on scroll.** Over a hero the bar should be fully transparent
   (video shows through); after ~80px it settles into the blurred charcoal it has
   now. One `IntersectionObserver` on a sentinel div.
4. **Progress hairline** — 1px bronze line filling left-to-right with scroll
   depth. Blog posts and long solution pages only.

---

## SHELL-02 — Off-canvas menu

**What it is:** Right-hand 420px charcoal drawer. "Core services" is an accordion
holding the 8 service links; below it the 5 primary links; a "Schedule
Consultation" button pinned at the bottom.

**Animation today**

- Panel: `transform: translateX(100%) → 0`, `0.35s ease`. ✅ same direction as live.
- Overlay: opacity fade, `0.25s`.
- Submenu: `max-height: 0 → 600px` + opacity, `0.4s ease`.
- Escape closes, body scroll locks. Good.

**Suggestions**

1. `max-height` accordions animate at the wrong speed at both ends. Swap to a
   `grid-template-rows: 0fr → 1fr` transition — exact, and the only pure-CSS way
   to animate to auto height.
2. **Stagger the links in.** Each `<li>` fades + slides 12px on a 40ms increment
   after the panel lands. Costs nothing, reads as considered.
3. The drawer is where a luxury site can afford one indulgence: concierge phone
   number, the two certification badges, and a muted looping project clip at the
   bottom of the panel.
4. Easing: `0.35s ease` is the browser default feel. Use
   `cubic-bezier(0.22, 1, 0.36, 1)` (already used elsewhere in this codebase) at
   `0.5s` — slower and more damped reads as more expensive.

---

## SHELL-03 — Footer

**What it is:** 5-column grid on charcoal — brand + tagline + newsletter +
socials, then Quick Links, Services, More, Concierge (email, 2 phones, address,
outline "Book a Consultation" button).

**Animation today:** none. Link hovers are colour-only.

**⚠️ vs. live:** structurally matched during the last pass, but the live footer
carries three trust marks the rebuild drops:

| Live asset | Local equivalent | Status |
| --- | --- | --- |
| `logo-hta-main-large-001-32f57a4a.webp` | `/images/badges/hta-design-partner.webp` | ❌ not rendered |
| `CertLevel_Luxury-scaled…webp` | `/images/badges/cert-level-luxury.webp` | ❌ not rendered |
| `CEDIA-Smart-Home-CE-Provider_dark-bg.webp` | `/images/badges/cedia-certified.webp` | ❌ not rendered |

All four badge files exist in `public/images/badges/` and **none of them appear
anywhere in `src/`.** For a business selling trust, that is the cheapest
credibility win available.

**Suggestions**

1. Add a badge row above the legal bar: HTA · CEDIA · Cert Level Luxury · 17 Years.
   Desaturated to ~40% opacity, full colour on hover.
2. The newsletter input is a plain bordered box. Make it a single bronze hairline
   underline that thickens and brightens on focus — no box.
3. Footer reveal: columns fade up 16px on a 60ms stagger when the footer enters
   view. It's the last thing anyone sees; it shouldn't just *be* there.

---

## SHELL-04 — Footer legal bar

Copyright (`Project Automate Inc.`), Privacy Policy, Terms & Conditions,
"Powered by AI Media" credit. No animation. Fine as is.

---

## Design tokens

`src/styles/tokens.css`

| Token | Value | Used for |
| --- | --- | --- |
| `--color-cream` | `#FFFCEF` | Page background |
| `--color-charcoal` | `#161616` | Header, footer, dark sections |
| `--color-bronze` | `#9A7239` | Accent / primary button |
| `--color-gold-light` | `#AF8850` | Accent hover |
| `--font-sans` | Manrope 400–800 | Everything |
| `--transition-base` | `0.25s ease` | Every transition on the site |

**⚠️ Typography gap.** The live site loads four faces — Helvetica Neue Medium,
Century Gothic, **Moglan** (display), **Raffishly** (script). The rebuild is
Manrope-only. Manrope is a better, cleaner choice than any of those, but the site
now has one typeface at one optical flavour for every role, which is why it reads
a little flat. A single display face used *only* for the 3–4 big statement lines
(`--text-display-xl` / `-lg`) would do a lot. Candidates that stay quiet:
**Editorial New**, **Reckless Neue**, or **GT Sectra** — all high-contrast serifs
that pair well with Manrope and are the current house style for luxury property
and design studios.

---

## Motion system — the honest state of it

I grepped the whole codebase. This is every animation that exists:

| Where | What |
| --- | --- |
| `HeroSection.astro` | 3-word headline rise-in, 120ms stagger — the only `@keyframes` on the site |
| `StatementSection.astro` | Word-by-word opacity reveal on scroll, 45ms stagger |
| `SolutionsGrid.astro` | Tile image `scale(1.04)` on hover, 0.6s |
| `InspirationPreview.astro` | Same image scale + 3px arrow nudge |
| `Header.astro` | Logo cross-fade, drawer slide, submenu accordion |
| Everything else | Colour transitions only |

**That's it.** Most of the site's ~35 pages have no motion at all beyond a button
hover. The live Elementor site isn't better — counting across all 36 scraped pages
returns only `slideInRight` ×152, `fadeIn` ×132, `fadeInUp` ×22, `zoomIn` ×4, and
the overwhelming majority of those are the header/footer repeated on every page.
Neither version currently moves like a luxury product site.

### Proposed motion system

Add these tokens, then use *only* these. A consistent, restrained system beats a
variety of effects — that is the whole difference between "expensive" and "busy".

```css
--ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);    /* entrances, already in use */
--ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1); /* state changes */
--dur-fast: 200ms;   /* buttons, links, icons */
--dur-base: 400ms;   /* hovers, panels */
--dur-slow: 700ms;   /* section entrances */
--dur-image: 900ms;  /* image reveal */
--stagger: 70ms;     /* between siblings */
```

Four primitives, nothing else:

1. **Rise** — `opacity 0→1`, `translateY(24px→0)`, `--dur-slow`, `--ease-out-expo`.
   The default for every section entering the viewport.
2. **Mask reveal** — image wrapper `clip-path: inset(0 0 100% 0) → inset(0)` over
   `--dur-image`, with the image itself starting at `scale(1.08)` and settling to
   `scale(1)`. This single effect does more for perceived quality than everything
   else combined. Reference:
   [zaha-hadid.com/architecture](https://www.zaha-hadid.com/architecture/) and the
   product-story pages at
   [bang-olufsen.com/en/us/speakers/beosound-a5](https://www.bang-olufsen.com/en/us/speakers/beosound-a5).
3. **Word reveal** — what `StatementSection` already does. Reserve it for exactly
   one statement per page. It stops being special if every heading has it.
4. **Magnetic accent** — bronze buttons and arrow icons translate ~3px toward the
   cursor on hover. Small, tactile, cheap.

Ship it as one `src/scripts/reveal.ts` plus `data-reveal` / `data-reveal-stagger`
attributes, so any section opts in with an attribute instead of its own script.
Wrap the whole thing in `prefers-reduced-motion` once, centrally — right now only
two components check it.

### What not to do

- No parallax on body copy. Imagery only, under 15% travel.
- No scroll-jacking or snap-scrolling between sections. Four homepage sections are
  already `min-height: 100vh`, which is close enough to that feeling already.
- No entrance animation above the fold except the hero headline — content that
  animates in after paint reads as slow, not premium.
- Nothing longer than 900ms. Luxury is *damped*, not *slow*.
