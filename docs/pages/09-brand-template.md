# 09 — Brand Page Template

Covers all six brand pages. They share one layout and one set of components, so
they're documented once here with a per-brand table at the bottom.

**Routes:** `/brands/savant-2/` · `/brands/control4/` · `/brands/lutron-2/` ·
`/brands/crestron/` · `/brands/basalte/` · `/brands/josh-ai-2/`
**Layout:** `src/layouts/BrandLayout.astro`
**Sources:** `src/pages/brands/{brand}/index.astro` (85–104 lines each)
**Target component folder:** `src/components/brands/`
**Sections:** 5

⚠️ All six are **orphaned** — see `08-brands-index.md`.

---

## Section map

| ID | Section | Component | Background | Present on |
| --- | --- | --- | --- | --- |
| BRAND-01 | Hero | `BrandLayout.astro` | Photo + dark gradient | all 6 |
| BRAND-02 | Why {Brand} — 4 features | `brands/FeatureList.astro` | Cream | all 6 |
| BRAND-03 | Capabilities — 2 image rows | `brands/CapabilityList.astro` | Cream | **Basalte, Josh.ai only** |
| BRAND-04 | Daily Experience — 4 scenes | `brands/DailyExperience.astro` | Cream | all 6 |
| BRAND-05 | Featured installation | inline `<section class="featured-install">` | Cream | all 6 |
| BRAND-06 | CTA | `home/CtaBanner.astro` | Charcoal | all 6 |

---

## BRAND-01 — Hero

From `BrandLayout`: full-bleed photo, `rgba(10,10,10, .35 → .92)` vertical
gradient, brand logo, H1, subtitle, "Schedule Consultation" button.

**Animation:** none.

**Suggestions**

1. The logo sits as a flat `<img>` above the headline. Give it a fade+rise 200ms
   ahead of the H1 so the brand lands first, then the promise.
2. Very slow `scale(1 → 1.05)` on the hero photo over 12s.
3. ⚠️ Every brand hero, every solution hero and the About Us hero use the *same*
   gradient values and the *same* button. Six brand pages in a row are visually
   indistinguishable. Tint each brand hero's scrim slightly toward that brand's
   own accent — a 6% wash is enough to differentiate without going garish.

---

## BRAND-02 — Why {Brand}

`FeatureList` — eyebrow, H2, then 4 title/description pairs. **Text only, no
images, no icons, no numbers** (except Basalte, which bakes `01 —` … `04 —` into
its titles).

**Animation:** none.

**Suggestions**

1. Bring Basalte's numbering to all six — it's the only one that reads as a
   considered sequence rather than four bullets.
2. Stagger the four in at 70ms with the standard rise.
3. Add a small icon or a product detail crop per feature. Four paragraphs of grey
   text is the dominant visual on five of these six pages.

---

## BRAND-03 — Capabilities

`CapabilityList` — alternating image + text rows.

⚠️ **Only Basalte and Josh.ai have this section.** Savant, Control4, Lutron and
Crestron jump straight from four text features to four text scenes, which means
**four of the six brand pages have exactly one image on them** (the hero) until
the featured-install shot at the bottom.

That is the main problem with this page family.

**Suggestions**

1. Add a 2–3 item `CapabilityList` to the four pages missing it. Savant has
   `power-system.webp` sitting unused in `/images/brands/savant/` already — that's
   one row written for free.
2. Mask-reveal the images, alternate direction per row.

---

## BRAND-04 — Daily Experience

`DailyExperience` — eyebrow, H2, then 4 scenes: typically **Morning ·
Entertaining · Relaxing/Movie Night · Goodnight**. Text only.

**⚠️ This section is near-identical on all six brand pages *and* on
`/control-systems/`.** Seven pages, the same four scene names, lightly reworded
copy. On the live site Basalte's version renders four literal
`Horizontal-Placeholder-PA.png.webp` placeholder images, so the intent was clearly
imagery that never arrived.

**Suggestions**

1. **This is the best animation opportunity on the site.** Make it a single
   interactive panel: one large room image that cross-fades between four states
   (morning light / evening entertaining / dimmed relaxing / night) as the visitor
   clicks or scrubs through the four scenes, with the light in the image actually
   changing. Auto-advance every 5s until interacted with.

   One room, four photographs, one component — reused on seven pages. It
   demonstrates the product instead of describing it, which is exactly what a
   lighting-and-control company should be doing.

   Reference: [ketra.com](https://www.ketra.com/) — the whole site is built on
   showing the same space under different light, and Ketra is a Lutron brand you
   already specify.
2. Failing that, at minimum give each scene a time-of-day label (`06:30`, `19:00`,
   `21:30`, `23:00`) in bronze. Costs nothing, adds specificity.
3. Vary the four scenes per brand so seven pages aren't repeating themselves.

---

## BRAND-05 — Featured installation

Inline section: centred `SectionHeading` + one wide image.

**Suggestions**

1. Make it a real mini case study — 3 facts (location, rooms, systems) plus a
   link into the project collection from `06-project-single.md`.
2. Same problem as elsewhere: several of these images are duplicates (see table
   below). A "Featured Savant Installation" that shows the same photo as the
   Josh.ai hero is worse than no photo.

---

## Per-brand detail

| Brand | H1 | Logo | Hero image | Has BRAND-03? | Featured image | Dup status |
| --- | --- | --- | --- | --- | --- | --- |
| Savant | "A Smarter Home, Personalized Around You" | `brands/savant/savant-logo.svg` 🔁 | `brands/savant/hero.webp` | ❌ | `scene-entertaining.webp` | 🔁 hero = AV-solutions hero + HVAC feature-2; featured = Josh.ai hero + shades feature-2 |
| Control4 | "Everything in Your Home, Working Together" | `logos/control4.webp` | `brands/control4/hero.webp` | ❌ | `featured-installation.webp` | 🔁 featured = home-cinema hero + project gallery + `pillar-cinema` |
| Lutron | "Beautiful Light. Intelligent Living." | `logos/lutron.webp` | `brands/lutron-2/hero.webp` | ❌ | `motorized-shades.webp` | 🔁 featured = shades hero + project gallery + `pillar-shades` |
| Crestron | "Every System. One Intelligent Experience." | `logos/crestron.webp` | `brands/crestron/hero.webp` | ❌ | `os3-feature.webp` | unique ✅ |
| Basalte | "Design for the Intelligent Home" | `logos/basalte.webp` | `brands/basalte/hero.webp` | ✅ 2 items | `featured-install.webp` | 🔁 hero = control-systems feature-3; `design-controls` unique; `basalte-home-app` = control-systems feature-2 |
| Josh.ai | "A Home That Understands Naturally" | `logos/josh-ai.svg` | `brands/josh-ai-2/hero.webp` | ✅ 2 items | `featured-install.webp` | 🔁 hero = Savant featured + shades feature-2; featured = HVAC feature-1; `discreet-intelligence` = get-inspired kitchen |

**Only Crestron's page has no duplicated imagery.** Every other brand page shares
photographs with at least one solution page. Full list in `docs/image-audit.md`.

---

## Page-family suggestions

1. **Normalise the structure.** All six should have: hero → why (4, numbered) →
   capabilities (2–3, with images) → daily experience (interactive) → featured
   install (with facts) → related solutions → CTA.
2. **Add "Related Solutions".** Lutron → Lighting + Shades. Savant → Control +
   Energy. Josh.ai → Control. Currently a brand page is a dead end; this turns six
   orphan pages into an internal-linking layer.
3. **Fix the slugs** — drop the `-2` suffixes (see `08-brands-index.md`).
4. **Differentiate the writing.** Read end to end, the six pages say the same
   thing six times. Each brand needs a reason *it specifically* gets specified:
   Crestron for scale and reliability, Lutron for light quality, Basalte for
   materials and finish, Josh.ai for voice without a cloud speaker, Savant for
   personalisation, Control4 for value. Say that plainly — a buyer choosing
   between them will trust you more for having an opinion.
5. **Consider one shared `[brand].astro` dynamic route** backed by a content
   collection. Six near-identical 85-line files is six places to make the same
   edit. Worth doing when we do the component split.
