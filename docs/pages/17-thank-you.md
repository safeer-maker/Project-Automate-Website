# 17 — Thank You

**Route:** `/thank-you/`
**Source:** `src/pages/thank-you/index.astro` (49 lines)
**Target component folder:** `src/components/forms/`
**Sections:** 1

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| THX-01 | Confirmation | `forms/ThankYou.astro` | Cream |

---

## THX-01 — Confirmation

Eyebrow "Request Received", H1 "Thank you for reaching out to PROJECT: automate",
short body.

**⚠️ The page is unreachable.** Nothing redirects here. Every form on the site
uses `PlaceholderFormScript.astro`, which hides the form and swaps in an inline
"Thank you — we'll be in touch." message instead of navigating. So this page
exists, renders, and is never seen.

Two ways to resolve, pick one when form handling is built (see
`docs/known-issues.md`):

- **Redirect here** after submit — gives you a clean conversion URL to fire
  analytics and ad-platform events against, which the inline pattern can't do.
- **Keep inline** and delete this page.

**Recommendation: redirect here.** Once GA4 or a Meta pixel is installed (neither
is yet), a distinct thank-you URL is the simplest reliable conversion trigger, and
you're already running a Facebook pixel on the live site.

**Suggestions if it stays**

1. **Tell them what happens next.** "You'll hear from us within one business day.
   Here's what the first call covers." Three bullets. A thank-you page that only
   says thank you wastes the most attentive moment in the funnel.
2. Add the concierge phone number for anyone who'd rather not wait.
3. Give them somewhere to go — 3 recent projects, or 3 blog posts. Currently it's
   a dead end with only the footer as an exit.
4. A small bronze check mark that draws itself on load (SVG `stroke-dashoffset`,
   600ms). One of the few places a purely decorative animation is welcome.
