# 04 — Design Partners (`/design-partners/`)

**Route:** `/design-partners/`
**Source:** `src/pages/design-partners/index.astro` (208 lines)
**Layout:** `PageLayout` + custom hero
**Target component folder:** `src/components/partner/` *(shared with `/partner/`)*
**Sections:** 6

> ⚠️ **Duplicate of [`03-partner.md`](03-partner.md)** — same H1, same four partner
> cards, same badges, same education block, same closing. Read that file's warning
> box first. This page is the **richer** of the two (it has the certification list
> and the Lunch & Learn CTA), which is why the merge plan below keeps this URL.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| DP-01 | Hero | `partner/PartnerHero.astro` | Cream |
| DP-02 | Who We Partner With (4 cards) | `brands/CapabilityList.astro` *(shared)* | Cream |
| DP-03 | Program + Lunch & Learn CTA | `partner/ProgramIntro.astro` | Cream |
| DP-04 | Credentials + badges + 17 certifications | `partner/Credentials.astro` | Cream |
| DP-05 | Continuing education (2 items) | `brands/FeatureList.astro` *(shared)* | Cream |
| DP-06 | Closing statement + CTA | `partner/Closing.astro` + `home/CtaBanner.astro` | Cream → Charcoal |

---

## DP-01 — Hero

- Eyebrow: "Partner With Purpose"
- H1: "We help curate your client's technology systems for the perfect aesthetic goal."
  — ⚠️ **identical to the `/partner/` H1, word for word.**

**Media:** none, text-only on cream.
**Animation:** none.

⚠️ Live `/design-partners/` opens with a plain H1 "Design Partners" and no hero
statement at all; the rebuild borrowed `/partner/`'s headline. That's an
improvement on live, but it's what created the exact duplication.

**Suggestion:** if this is the surviving page, this headline stays and `/partner/`
goes. Then differentiate the eyebrow: "Design Partner Program".

---

## DP-02 — Who We Partner With

Shared `CapabilityList`. Architects · Design Build Firms · Interior Designers ·
General Contractors.

**Media:** `/images/design-partners/design-partners-*.webp` — 🔁 all four
byte-identical to `/images/partner/partner-*.webp`. Same stock-photo problem
described in `03-partner.md`. On merge, **delete one folder.**

---

## DP-03 — Program + Lunch & Learn

Two paragraphs explaining the design-build support model and CEDIA-certified
Design Build Partner status, then a large primary button:
**"Schedule a Lunch & Learn Event"** → `/schedule/`.

🆕 Rebuild only — a good addition, this is the page's most concrete offer.

**Animation:** none.

**Suggestions**

1. This is the strongest CTA on either partner page and it's sitting in the middle
   of a wall of grey text. Give it its own band — charcoal, centred, with the CEDIA
   mark beside it.
2. It routes to `/schedule/`, the general homeowner consultation form. A Lunch &
   Learn needs different fields: firm name, number of attendees, preferred date,
   office address. Either add a `?type=lunch-learn` variant of the schedule form
   or a dedicated page.
3. Pull the number forward — "*n* studios hosted this year" if you have it.

---

## DP-04 — Credentials

- Eyebrow "Credentials That Set the Standard"
- H2 "Certified. Authorized. Trusted."
- Long subtitle, four 110px badges, then a **17-item certification list**:

  Cedia · Automation Programmer · Lutron Motorized Shades · Coastal Source
  Landscape Audio & Lighting · Sophos · Alarm.com · Home Technology Association ·
  Crestron · Lutron Homeworks · Josh.ai · Eero · Qolsys · Control4 Authorized Gold
  Dealer · Savant · Ruckus · KNC · Rega

🆕 **This list is rebuild-only and it's the single best asset on either page.**
Live has a broken version — "Cedia Certified" repeated four times with the same
description, clearly an unfilled placeholder. The rebuild filled it in properly.

**Animation:** none.

**Suggestions**

1. **Make it visual.** Seventeen lines of plain text undersells seventeen
   certifications. Render as a logo wall — you already have Savant, Control4,
   Lutron, Crestron, Basalte, Josh.ai at `/images/brands/logos/`; the other eleven
   are easy to source. Greyscale at rest, colour on hover, 50ms stagger reveal.
2. Group them: *Control* · *Lighting & Shading* · *Security* · *Network* · *Audio*.
   Seventeen unsorted names is a list; five categories is a capability map.
3. Six of these link to brand pages you've already built. Do it.

---

## DP-05 — Continuing education

Identical to `PTNR-04`. See `03-partner.md` — including the **spec/CAD pack**
suggestion, which belongs on whichever page survives.

---

## DP-06 — Closing + CTA

Same doubled-CTA problem as `PTNR-05`. Fold the closing heading into `CtaBanner`.

---

## Merge plan: `/partner/` + `/design-partners/` → one page

**Keep `/design-partners/`.** It has DP-03 and DP-04, which `/partner/` lacks.
301 `/partner/` → `/design-partners/`.

Target section order for the merged page:

| | Section | Comes from | Note |
| --- | --- | --- | --- |
| 1 | Hero | DP-01 | Needs a real image — see `03` PTNR-01 |
| 2 | Program + Lunch & Learn | DP-03 | Promoted; it's the actual offer |
| 3 | Who We Partner With | DP-02 | Replace the four stock photos |
| 4 | Continuing education + spec pack | DP-05 | Expanded |
| 5 | Credentials + logo wall | DP-04 | 17 certs as logos, grouped |
| 6 | Partner firms / testimonial | 🆕 | Doesn't exist yet, needed most |
| 7 | Trade CTA | DP-06 | Trade form, not the homeowner one |

Then:

- Update `src/data/site.ts` — `footerMenu` points at `/design-partners/`.
- Update `src/data/nav.ts` — `primaryNav` currently sends "Design partner" to
  `/partner/`; repoint it.
- Delete `public/images/partner/` (4 files, all duplicates).
- Delete `src/pages/partner/index.astro`, add the redirect.
