# 08 — Brands Index

**Route:** `/brands/`
**Source:** `src/pages/brands/index.astro` (73 lines)
**Target component folder:** `src/components/brands/`
**Sections:** 3

⚠️ **Orphaned** — `/brands/` is not in the header or footer nav. The six
individual brand pages are reachable only through `brandLinks` in
`src/data/nav.ts`, which nothing currently renders either. Six brand pages exist
and nothing on the site links to any of them.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| BRND-01 | Heading | `brands/BrandsHero.astro` | Cream |
| BRND-02 | Logo grid (6) | `brands/BrandGrid.astro` | Cream |
| BRND-03 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## BRND-01 — Heading

Eyebrow "Brands", title "Best-in-Class Technology Partners", one-line subtitle.

---

## BRND-02 — Logo grid

Six logo tiles, each linking to its brand page.

**Media** — `/images/brands/logos/`

| Brand | Logo file | Links to | Format |
| --- | --- | --- | --- |
| Savant | `savant.svg` | `/brands/savant-2/` | SVG ✅ |
| Control4 | `control4.webp` | `/brands/control4/` | WebP ⚠️ |
| Lutron | `lutron.webp` | `/brands/lutron-2/` | WebP ⚠️ |
| Crestron | `crestron.webp` | `/brands/crestron/` | WebP ⚠️ |
| Basalte | `basalte.webp` | `/brands/basalte/` | WebP ⚠️ |
| Josh.ai | `josh-ai.svg` | `/brands/josh-ai-2/` | SVG ✅ |

⚠️ **Mixed formats.** Two logos are SVG, four are raster. Logos should all be SVG
— they're the one asset class where a soft edge is immediately visible, and all
four manufacturers publish vector brand kits.

🔁 `brands/logos/savant.svg` and `brands/savant/savant-logo.svg` are the same file
in two places. Delete the second.

⚠️ **URL slugs carry WordPress cruft.** `/brands/savant-2/`, `/brands/lutron-2/`,
`/brands/josh-ai-2/` — the `-2` suffixes are WordPress duplicate-slug artefacts
and should be `/brands/savant/`, `/brands/lutron/`, `/brands/josh-ai/`, with
redirects from the old ones. Same for the folder names under
`public/images/brands/`, which currently mix `savant` (no suffix) with `lutron-2`
and `josh-ai-2` (with suffix) — inconsistent even with themselves.

**Animation:** none.

**Suggestions**

1. Greyscale at rest → full colour on hover, with the tile background shifting to
   `--color-surface`. Standard, and it makes a static logo grid feel alive.
2. Add one line of positioning under each logo — "Whole-home control", "Lighting
   & shading", "Natural voice". A logo grid with no copy asks the visitor to
   already know the market.
3. Reveal with a 50ms stagger on scroll.
4. This grid belongs on the **homepage** too — see the logo-marquee suggestion in
   `01-homepage.md`, which replaces the dropped text marquee.

---

## BRND-03 — CTA

Shared compact `CtaBanner`.

---

## Page-level suggestions

1. **Link it.** Add "Brands" to `primaryNav`, or add it as a second column in the
   header mega menu next to Core services (see `00-global-shell.md`).
2. **Add a comparison.** The real question a buyer has on this page is *"which one
   is right for my house?"* A short table — Savant vs Control4 vs Crestron across
   scale, interface, price band, best-for — would be the most genuinely useful
   page on the site and nothing like it exists in the category.
3. Reference:
   [crestron.com/Products](https://www.crestron.com/Products) for the category
   flyout, and [savant.com/why-savant](https://www.savant.com/why-savant) for how
   a manufacturer positions itself — useful for writing the one-liners.
