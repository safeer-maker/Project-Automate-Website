# 13 — Schedule

**Route:** `/schedule/`
**Source:** `src/pages/schedule/index.astro` (172 lines)
**Target component folder:** `src/components/forms/`
**Sections:** 3

This is the site's primary conversion page. Almost every button on every page
lands here.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| SCHED-01 | Heading + badge row | `forms/FormHero.astro` | Cream |
| SCHED-02 | Consultation form | `forms/ScheduleForm.astro` | Cream |
| SCHED-03 | *(no CTA — correct here)* | — | — |

---

## SCHED-01 — Heading + badges

Eyebrow "Schedule", title "Schedule Your Consultation", subtitle, then the four
certification badges at 64×64.

**Media:** the four `/images/badges/*.webp`. ✅ Good use — trust marks next to a
form is exactly right.

**Animation:** none.

---

## SCHED-02 — Consultation form

Nine fields plus an SMS-consent checkbox:

| Field | Type | Required |
| --- | --- | --- |
| Name | text | ✅ |
| Email | email | ✅ |
| Phone | tel | ✅ |
| City | text | |
| Preferred Date | date | ✅ |
| Preferred Time | select (time windows) | ✅ |
| Primary Project Interest | select | |
| How Did You Hear About Us? | select | |
| Tell Us About Your Project | textarea | |
| SMS consent | checkbox | |

**🐛 The form does not send anywhere.** `PlaceholderFormScript.astro` intercepts
submit, hides the form, and shows "Thank you — we'll be in touch." Nothing is
emailed, stored, or posted. This is already Priority 1 in `docs/known-issues.md`
and it applies to every form on the site.

**❌ Functional regression vs. live.** The live page embeds a **real booking
calendar** — Simply Schedule Appointments, `consultation-phone-call` type, served
from `/wp-json/ssa/v1/embed-inner`. A visitor picks an actual available slot and
gets a confirmed appointment.

The rebuild replaced that with a "Preferred Date" picker and a "Preferred Time"
dropdown — a *request*, not a *booking*. That's a meaningful downgrade on the
page that matters most.

**Suggestions**

1. **Restore real booking.** Cal.com or Calendly embed, or keep SSA. For a luxury
   service, "pick your time, confirmed" beats "we'll get back to you" by a wide
   margin — and it removes a day of back-and-forth from your sales cycle.
2. **Shorten the form.** Nine fields plus consent is a lot of friction for a first
   contact. Name, email, phone, and "tell us about your project" is enough; ask
   the rest on the call. If the calendar comes back, the date/time fields go away
   anyway.
3. **Two-step, if you keep it long.** Step 1: contact details. Step 2: project
   details. Progress indicator between them. Perceived effort drops sharply.
4. **Add reassurance beside the form** — response time ("we reply within one
   business day"), what happens next (3 steps), and the concierge phone number for
   people who'd rather call. Right now the page asks and offers nothing in return.
5. Field focus: bronze hairline underline rather than a full border box, matching
   the footer newsletter suggestion in `00-global-shell.md`.
6. ⚠️ The SMS-consent checkbox is baked in, but `docs/known-issues.md` records
   that the opt-in mechanism (form checkbox vs. chat widget only) is still an open
   A2P compliance decision. If you go chat-widget-only, this checkbox comes out.

---

## Page-level suggestions

1. **Two CTAs compete site-wide.** Header and most pages say "Schedule
   Consultation" → `/schedule/`; `CtaBanner` says "Let's Talk" → `/get-started/`.
   Two pages, two forms, one intent. See `14-get-started.md` for the merge.
2. No `/thank-you/` redirect — see `17-thank-you.md`.
