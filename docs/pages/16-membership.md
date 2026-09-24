# 16 — Technology Support Membership

**Route:** `/technology-support-memebership/` — ⚠️ **"memebership" is misspelled**
(inherited from WordPress; fix the slug and 301)
**Source:** `src/pages/technology-support-memebership/index.astro` (308 lines)
**Target component folder:** `src/components/membership/`
**Sections:** 6

This is the only page on the site that sells a **recurring product with published
prices**. It deserves more attention than it currently gets.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| MEMB-01 | Hero | `membership/MembershipHero.astro` | Cream |
| MEMB-02 | Why Become a Member (4 benefits) | `brands/FeatureList.astro` *(shared)* | Cream |
| MEMB-03 | Membership plans (2 tiers) | `membership/PlanCards.astro` | Cream |
| MEMB-04 | How Support Works (3 steps) | `membership/SupportSteps.astro` | Cream |
| MEMB-05 | FAQ | `membership/Faq.astro` | Cream |
| MEMB-06 | CTA | `home/CtaBanner.astro` | Charcoal |

---

## MEMB-01 — Hero

Eyebrow, "Reliable Support for Every Connected Home", subtitle. Text only on cream.

**Suggestion:** a page selling peace of mind should open on an image that conveys
it — a technician at a rack, or a support call in progress. Text-only heroes are
this site's default and they're weakest here.

---

## MEMB-02 — Why Become a Member

Four numbered benefits via the shared `FeatureList`.

**🐛 The descriptions are truncated mid-sentence:**

| Benefit | Current description |
| --- | --- |
| 01 — Priority Support | "Move ahead in the queue when your system." |
| 02 — Faster response | "Get dependable help with clearly defined." |
| 03 — Remote assist | "Resolve many issues quickly without wait." |
| 04 — Ongoing care | "Keep your technology performing reliably after install." |

Three of the four end without a complete clause. This is shipping copy on a page
asking for $125–$300 a month. Fix before anything else on this page.

---

## MEMB-03 — Membership plans

Two tiers:

| | Foundation Care | Premier Care |
| --- | --- | --- |
| Price | **$125** / month | **$300** / month (featured) |
| Basic support | 24/7 | 24/7 |
| Guaranteed response | 60 min | 30 min |
| Advanced support | 9–5 M–F | 1 hr for urgent |
| On-site | — | 7 days, prioritised |
| Concierge | $195/hr | Complimentary in hours |
| Annual | 10% discount | 10% discount |

**🐛 Internal contradiction.** Foundation Care's paragraph says *"a 30-minute
response time from Basic Support"*, while its own feature list says
*"Guaranteed 60-minute Basic Support Response"* — and 30 minutes is what Premier
Care promises. One of the two is wrong, and as written the cheaper plan appears to
match the expensive one.

**Animation:** none.

**Suggestions**

1. **Fix the response-time contradiction**, then make the two plans a proper
   comparison table with a shared row set — right now they're two prose blocks with
   different feature lists, so nobody can tell what the extra $175 buys.
2. **Add a third tier.** Two options invite a binary "cheap or expensive" read.
   Three, with the middle one featured, is the standard because it works — and an
   "Estate" tier above Premier would suit your actual clientele.
3. Featured card styling is minimal — `.plan-card.featured` only changes
   `border-color` to bronze. Add a lift on hover, a soft shadow, and a "Most
   popular" tag so the recommendation actually reads as one.
4. Reveal cards with a 100ms stagger; animate the price with a count-up.
5. Both cards have a "Get Started" button, but ⚠️ **both point at `/schedule/`** —
   the generic consultation form. Someone choosing a $300/month plan shouldn't land
   on "tell us about your project". Label them per plan ("Join Premier Care") and
   route them to a membership signup.

---

## MEMB-04 — How Support Works

Three steps: Contact us → Remote assistance → On-site support.

**Suggestion:** same self-drawing connector treatment proposed for the homepage
process steps (`01-homepage.md` → HOME-02), so the two "process" sections on the
site share one visual language.

---

## MEMB-05 — FAQ

A list of Q&A pairs.

**Suggestions**

1. Make them accordions (`<details>` + a `grid-template-rows` transition) — a wall
   of open Q&A is hard to scan.
2. Add `FAQPage` JSON-LD. This is the most natural place on the site for it and it
   earns rich results.

---

## MEMB-06 — CTA

Shared `CtaBanner` → "Let's Talk" / `/get-started/`.

⚠️ Wrong destination for this page. Someone who has read two pricing tiers wants
to *join*, not submit a project request with floor-plan uploads. Needs its own CTA
and its own short form.

---

## Page-level suggestions

1. **Fix the slug** — `/technology-support-membership/` with a 301.
2. **Link it properly.** Currently only in `footerMenu`. A recurring-revenue
   product should be in the main nav, offered at the end of every solution page,
   and mentioned in the post-install follow-up.
3. **Add proof** — number of members, average resolution time, a member quote.
   Support is sold on evidence of reliability more than on feature lists.
4. Reference:
   [savant.com/support](https://www.savant.com/support) and, for tier/pricing card
   structure that stays premium,
   [bang-olufsen.com/en/us/services](https://www.bang-olufsen.com/en/us/services).
