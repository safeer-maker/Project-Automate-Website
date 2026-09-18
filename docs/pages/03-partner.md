# 03 — Design Partner (`/partner/`)

**Route:** `/partner/`
**Source:** `src/pages/partner/index.astro` (157 lines)
**Layout:** `PageLayout` + custom hero
**Target component folder:** `src/components/partner/`
**Sections:** 5

> ### ⚠️ Read this first
>
> This page and [`04-design-partners.md`](04-design-partners.md) (`/design-partners/`)
> are **near-duplicates of each other** — same H1 word for word, same four partner
> types, same four badges, same education block, same closing section. The four
> partner photos exist **twice on disk** under different names and are byte-identical:
>
> | `/images/partner/` | `/images/design-partners/` |
> | --- | --- |
> | `partner-architects.webp` | `design-partners-architects.webp` |
> | `partner-design-build-firms.webp` | `design-partners-design-build-firms.webp` |
> | `partner-interior-designers.webp` | `design-partners-interior-designers.webp` |
> | `partner-general-contractors.webp` | `design-partners-general-contractors.webp` |
>
> **This is inherited, not introduced** — the two pages are duplicates on the live
> WordPress site as well. But it's shipping now, and `/partner/` is in the main
> header nav while `/design-partners/` is only in the footer, so a trade visitor
> can easily hit both and see the same page twice.
>
> **Recommendation: merge into one page.** Decide which URL survives, 301 the
> other. My vote: keep `/design-partners/` (clearer to an architect, better
> keyword), redirect `/partner/`. See the merge plan at the bottom of `04`.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| PTNR-01 | Hero | `partner/PartnerHero.astro` | Cream |
| PTNR-02 | Who We Partner With (4 cards) | `brands/CapabilityList.astro` *(shared)* | Cream |
| PTNR-03 | Credentials + badges | `partner/Credentials.astro` | Cream |
| PTNR-04 | Continuing education (2 items) | `brands/FeatureList.astro` *(shared)* | Cream |
| PTNR-05 | Closing statement + CTA | `partner/Closing.astro` + `home/CtaBanner.astro` | Cream → Charcoal |

---

## PTNR-01 — Hero

- Eyebrow: "Partner Program"
- H1: "We help curate your client's technology systems for the perfect aesthetic goal."

**Media:** none — text-only hero on cream.

**⚠️ vs. live:** the live hero carries two trust images either side of the
headline — `HTA_Design_Partner_logo_plain-scaled.webp` and
`CertLevel_Luxury-scaled…webp`. The rebuild drops both. Local equivalents exist
(`/images/badges/hta-design-partner.webp`, `/images/badges/cert-level-luxury.webp`)
and are already imported further down this same page for PTNR-03.

**Animation today:** none.

**Suggestions**

1. A text-only cream hero is the weakest opening on the site. This page is selling
   to architects and interior designers — people who judge by imagery in the first
   two seconds. Give it a full-bleed photo of a finished install with a designer's
   drawing overlaid, or a split hero: headline left, project photo right.
2. The H1 is 15 words and has no full stop. Tighten: *"Technology your clients
   will never have to think about."*

---

## PTNR-02 — Who We Partner With

Shared `CapabilityList` component. Four alternating image/text rows: Architects ·
Design Build Firms · Interior Designers · General Contractors.

**Media:** the four `/images/partner/partner-*.webp` files. 🔁 All four are
byte-identical duplicates of `/images/design-partners/*` — see the box at the top.

⚠️ All four are **generic stock office photography** (from the live site:
`high-angle-coworkers-planning-together-office-scaled.jpg`,
`male-architect-hard-hat-construction-site-scaled.jpg`). Stock photos of people in
hard hats on a page selling to architects is the single most credibility-damaging
thing on this site.

**Animation today:** whatever `CapabilityList` does — see `09-brand-template.md`.

**Suggestions**

1. **Replace all four with real work.** A drawing set, a rack build, a keypad
   installed in a finished wall, a site walkthrough. If you have no photography
   budget, use four detail crops of your own installs before you use one more
   stock photo.
2. Alternating rows with a mask reveal that alternates direction (image wipes in
   from the outer edge each row).

---

## PTNR-03 — Credentials

- Eyebrow: "Credentials That Set the Standard"
- H2: "One of the nation's leading certified Savant dealers."
- Sub: the "hundreds of suppliers, clients, and businesses throughout Los Angeles" paragraph
- Four badges at 110×110.

**Animation today:** none.

**⚠️ Number conflict.** Live `/partner/` says **17+**; live `/design-partners/`
says **20+**; the rebuild's badge says **17+**. Pick one number and use it
everywhere (see also `02-about-us.md`, which has a third figure — "nearly three
decades").

**❌ Gap vs. live.** The live page has a "Certified. Authorized. Trusted. / The
Highest Standards. The World's Leading Brands." block listing certifications. On
live it's broken — "Cedia Certified" is repeated **four times with identical
description text**, an unfilled placeholder. The rebuild dropped it rather than
copying the bug, which was right, but the block itself is worth having *filled in
properly*: Savant, Control4, Lutron, Crestron, Basalte, Josh.ai. You have all six
logos at `/images/brands/logos/`.

**Suggestions**

1. Build the certification grid the live site meant to have — six brand logos,
   greyscale, colour on hover, each linking to its brand page. That's also six
   internal links into pages that currently get almost no traffic.
2. Add hard numbers: projects delivered, average project value band, typical
   lead time. Trade partners are assessing whether you can carry their timeline.

---

## PTNR-04 — Continuing education

Shared `FeatureList`. Two items: **CEU Courses** and **Custom Courses**. ✅ Matches
live copy closely.

**Suggestions**

1. This is the page's actual differentiator and it's buried fourth with two
   sentences. Move it to position 2 and expand: course names, accreditation body,
   how to register, next dates. A working "Register interest" form here would
   convert better than anything else on this page.
2. Add a downloadable **spec/CAD pack** for designers — symbols, keypad
   dimensions, rack elevations, power requirements. Architects will bookmark that
   page and come back to it. This is the highest-value idea in this file.

---

## PTNR-05 — Closing + CTA

- Eyebrow "Let's Start Your Journey", H2 "Step into the future with PROJECT: automate."
- Then the shared compact `CtaBanner`.

**⚠️ Two CTAs back to back.** A closing statement block immediately followed by
the closing CTA banner — both cream-to-charcoal, both saying the same thing. Drop
the standalone closing section and fold its heading into `CtaBanner` via a prop.

---

## Page-level suggestions

1. **Merge with `/design-partners/`** — see the box at the top and the plan in `04`.
2. **The CTA is wrong for this audience.** Every button on this page eventually
   lands on "Schedule Consultation" / "Let's Talk", which is the *homeowner*
   funnel. A trade visitor wants: *Join the partner program*, *Request a spec
   pack*, *Book a CEU session for my studio*. Different form, different page.
3. **No proof of partnership.** No named architecture firm, no co-branded project,
   no designer testimonial. One logo row of firms you've worked with would carry
   this entire page. Reference:
   [lutron.com/en-US/Partners](https://www.lutron.com/en-US/Pages/Partners.aspx)
   for how a manufacturer frames trade relationships.
