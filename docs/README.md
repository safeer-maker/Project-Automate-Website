# PROJECT: automate — Site Schema

Working documentation for the Astro rebuild of `projectautomate.com`.
One file per page. Each file lists **every section on that page**, what it says,
what media it uses, what animation it currently has, and what I'd change.

## How to use these docs

1. Open the page file you care about (e.g. `pages/01-homepage.md`).
2. Each section has a stable ID like `HOME-03`. Reference that ID when you tell
   me what to change — "add a testimonial after HOME-05", "kill HOME-04".
3. Every section also names its **target component file**. Once you've marked up
   the docs, I split each page into those files and we edit section by section.

## Conventions used in every page file

| Marker | Meaning |
| --- | --- |
| ✅ | Matches the live site |
| ⚠️ | Differs from the live site on purpose or by accident — read the note |
| ❌ | Exists on the live site, **missing** from the rebuild |
| 🆕 | Exists in the rebuild only, not on the live site |
| 🔁 | Image is a duplicate reused elsewhere on the site — needs a unique asset |

`Live` = `projectautomate.com` (WordPress + Elementor), captured in
`extracted_projectautomate/pages_html/`.
`Rebuild` = what's in `src/` today.

## Index

| # | Page | Route | Sections | File |
| --- | --- | --- | --- | --- |
| 00 | Global shell (header, footer, tokens, motion) | — | 4 | [00-global-shell.md](pages/00-global-shell.md) |
| 01 | Homepage | `/` | 7 | [01-homepage.md](pages/01-homepage.md) |
| 02 | About Us | `/about-us/` | 6 | [02-about-us.md](pages/02-about-us.md) |
| 03 | Design Partner | `/partner/` | 5 | [03-partner.md](pages/03-partner.md) |
| 04 | Design Partners | `/design-partners/` | 6 | [04-design-partners.md](pages/04-design-partners.md) |
| 05 | Success Stories | `/success-stories/` | 4 | [05-success-stories.md](pages/05-success-stories.md) |
| 06 | Project (case study) | `/project-single/` | 6 | [06-project-single.md](pages/06-project-single.md) |
| 07 | Get Inspired | `/get-inspired/` | 5 | [07-get-inspired.md](pages/07-get-inspired.md) |
| 08 | Brands index | `/brands/` | 3 | [08-brands-index.md](pages/08-brands-index.md) |
| 09 | Brand page template | `/brands/*/` | 5 | [09-brand-template.md](pages/09-brand-template.md) |
| 10 | Solution page template | 13 routes | 5 | [10-solution-template.md](pages/10-solution-template.md) |
| 11 | Blog index | `/blog/` | 3 | [11-blog-index.md](pages/11-blog-index.md) |
| 12 | Blog post | `/{slug}/` | 5 | [12-blog-post.md](pages/12-blog-post.md) |
| 13 | Schedule | `/schedule/` | 3 | [13-schedule.md](pages/13-schedule.md) |
| 14 | Get Started | `/get-started/` | 3 | [14-get-started.md](pages/14-get-started.md) |
| 15 | Budget Calculator | `/budget-calculator/` | 5 | [15-budget-calculator.md](pages/15-budget-calculator.md) |
| 16 | Support Membership | `/technology-support-memebership/` | 6 | [16-membership.md](pages/16-membership.md) |
| 17 | Thank You | `/thank-you/` | 1 | [17-thank-you.md](pages/17-thank-you.md) |
| 18 | Legal pages | `/privacy-policy/`, `/terms-and-conditions/` | 2 | [18-legal.md](pages/18-legal.md) |

Also here:

- [known-issues.md](known-issues.md) — pre-existing punch list (forms, deploy, SEO).
- [image-audit.md](image-audit.md) — every duplicate/misfiled image and its proposed new name.
