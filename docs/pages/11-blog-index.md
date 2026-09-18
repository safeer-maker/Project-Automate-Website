# 11 — Blog Index

**Route:** `/blog/`
**Source:** `src/pages/blog/index.astro` (54 lines)
**Target component folder:** `src/components/blog/`
**Sections:** 3

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| BLOG-01 | Heading | `blog/BlogHero.astro` | Cream |
| BLOG-02 | Post grid (33) | `blog/PostGrid.astro` + `ui/PostCard.astro` | Cream |
| BLOG-03 | *(no CTA)* | — | — |

---

## BLOG-01 — Heading

Centred `SectionHeading`: eyebrow "Blog", title "Smart Home Guides & Insights".

**⚠️ vs. live.** Live opens with eyebrow "The Experience", title "Automation,
Design & Connected Living", and a real standfirst:

> Insights from the world of smart home technology, helping you create spaces that
> feel effortless, secure, and beautifully integrated.

The rebuild drops the standfirst. Bring it back — the index currently has no
copy at all.

---

## BLOG-02 — Post grid

All 33 posts from the `blog` content collection, rendered via `ui/PostCard.astro`
(image 480×320, category, title, excerpt).

**Media:** `/images/blog/` — 35 files, one per post.
🔁 Two duplicate pairs:

- `flipping-the-switch-on-the-brilliant-light-switch.webp` = `unboxing-the-budget-friendly-emylo-smart-switch.webp`
- `an-essential-guide-to-energy-management-basics.webp` = `is-your-building-burning-cash-how-bms-upgrades-actually-save-energy.webp` (also `solutions/energy-moment/feature-1.webp`)

**Animation:** none — no hover state on the cards at all.

**❌ Gaps vs. live.** The live blog index has, and the rebuild does not:

| Live feature | Status |
| --- | --- |
| Featured/latest posts strip above the main grid (10 posts) | ❌ |
| Category filter — "Veritas partner", "Legal blog" | ❌ *(those two labels are junk from a theme demo — build real ones)* |
| Post count — "55 Article" | ❌ *(and it's wrong; there are 33)* |
| Per-card `fadeIn` on scroll | ❌ |
| Pagination | ❌ — the rebuild renders **all 33 posts on one page** |

**Suggestions**

1. **Pagination or lazy-load.** 33 cards with 33 images on one route is a slow
   page and gets slower with every post. Astro's `paginate()` handles this in
   about five lines.
2. **Real categories — most of the work is already done.** `src/content.config.ts`
   already defines a `category` field (defaulting to `"Smart Home"`), and posts
   already set it (`category: "Lighting"`). `PostCard` renders it. Nothing
   *filters* by it. Add a filter row plus `/blog/category/[category]` pages — those
   category pages can then link to the matching solution page.
3. **A featured post.** First card full-width with a larger image; the rest in a
   3-up grid.
4. Card hover: image `scale(1.04)`, title colour to bronze, 3px arrow nudge —
   reuse exactly what `InspirationPreview` already does so the site feels
   consistent.
5. Reveal grid on scroll, 60ms stagger.
6. Add reading time and date to the card. Neither is shown.

---

## BLOG-03 — Missing CTA

⚠️ **This is the only page on the site with no closing CTA.** Every other page
ends with `CtaBanner`. Add it.
