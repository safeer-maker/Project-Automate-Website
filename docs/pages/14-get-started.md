# 14 — Get Started

**Route:** `/get-started/`
**Source:** `src/pages/get-started/index.astro` (129 lines)
**Target component folder:** `src/components/forms/`
**Sections:** 3

⚠️ **Overlaps `/schedule/`.** Both are contact forms; both are reachable from
almost every page. See the merge note at the bottom.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| START-01 | Heading | `forms/FormHero.astro` | Cream |
| START-02 | Project request form | `forms/ProjectRequestForm.astro` | Cream |
| START-03 | *(no CTA — correct here)* | — | — |

---

## START-01 — Heading

Eyebrow "Get Started", title "Submit Your Project Request", one-line subtitle.
No badges, no imagery.

---

## START-02 — Project request form

Twelve fields — the longest form on the site:

| Field | Type |
| --- | --- |
| Name · Email · Number · City · Address · Zip Code | text / email / tel |
| Current Project Phase | select |
| Projected Start Date | date |
| Primary Project Interest | select |
| Message / Project Goals | textarea |
| First Floor plan | **file upload** |
| Second Floor plan | **file upload** |
| SMS consent | checkbox |

**🐛 Same as every form on the site — it doesn't send anywhere.**
`PlaceholderFormScript.astro` fakes the success state. Here it matters more than
elsewhere: **the two file-upload fields silently discard whatever a visitor
attaches.** Someone uploading their floor plans and seeing "Thank you" will
reasonably believe you have them.

That's the most user-visible bug in the codebase. Until real handling exists,
those two file inputs should be removed rather than left to swallow files.

**Suggestions**

1. **Wire up submission before anything else here.** Cloudflare Worker + R2 for
   the uploads (the site already deploys to Cloudflare, so the adapter is in
   place), or hand the whole form to GoHighLevel.
2. Add file-type and size limits, and show the selected filename. A bare
   `type="file"` with no feedback is unusable on mobile.
3. **Asking for a street address and floor plans as a first contact is a lot.**
   Move the uploads behind a second step that appears after the basics are filled
   in, or into a follow-up email.
4. This form deserves the reassurance panel described in `13-schedule.md` even
   more than `/schedule/` does.

---

## Page-level suggestions

1. **Merge `/get-started/` and `/schedule/`.** Today:

   | | `/schedule/` | `/get-started/` |
   | --- | --- | --- |
   | Reached from | Header button, every service hero, footer | Every `CtaBanner` |
   | Fields | 9 + consent | 12 + consent + 2 uploads |
   | Badges | ✅ | ❌ |
   | In nav as | "Contact us" | not in nav |

   Two forms asking the same question, one of which isn't in the navigation. The
   cleanest resolution:
   - `/schedule/` becomes **book a time** (calendar, minimal fields).
   - `/get-started/` becomes **submit a project** (the detailed form + uploads),
     linked *from* `/schedule/` for people who'd rather send details than book.
   - Every `CtaBanner` points at `/schedule/`, not `/get-started/`.

   Or drop `/get-started/` entirely and make its extra fields step 2 of
   `/schedule/`. Fewer pages, one funnel.
2. Whatever you choose, make the button label match the destination. "Let's Talk"
   landing on "Submit Your Project Request" with twelve fields and two file
   uploads is a jarring bait-and-switch.
