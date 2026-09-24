# 18 — Legal Pages

**Routes:** `/privacy-policy/` · `/terms-and-conditions/`
**Sources:** `src/pages/privacy-policy/index.astro` (167 lines) ·
`src/pages/terms-and-conditions/index.astro` (132 lines)
**Target component folder:** `src/components/legal/`
**Sections:** 2 each

---

## Section map (both pages)

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| LEGAL-01 | Page title + last-updated | `legal/LegalHero.astro` | Cream |
| LEGAL-02 | Prose body | `legal/LegalBody.astro` | Cream |

Both are long-form prose. No imagery, no animation, and that's correct — legal
pages should be plain and fast.

---

## Notes

- ✅ Both use the registered entity **Project Automate Inc.** rather than the
  brand name, which is right for legal documents. The public brand
  "PROJECT: automate" is used everywhere else. That distinction is handled in
  `src/data/site.ts` (`legalName` vs `name`) and is worth preserving.
- ✅ Linked from the footer legal bar on every page.
- ⚠️ No `noindex`. Fine either way, but most sites exclude these from search.

---

## Suggestions

1. **Shared layout.** Two near-identical 130–170 line prose pages should share one
   `LegalLayout.astro` that takes a title, a last-updated date, and the body. Any
   future legal page then costs one markdown file.
2. **Move the bodies to markdown.** These will be edited by a lawyer, not a
   developer. `src/content/legal/*.md` + one `[slug].astro` means changes don't
   touch `.astro` files.
3. **Add "Last updated".** Neither page shows a date. For a privacy policy that's
   close to mandatory — visitors and auditors both look for it.
4. **Anchored table of contents.** Sticky on desktop, same component as the blog
   post TOC proposed in `12-blog-post.md`.
5. **Set a comfortable measure.** Cap the body at ~70 characters per line. Legal
   text at full container width is genuinely hard to read.
6. ⚠️ **Pending review.** `docs/known-issues.md` records that GoHighLevel's default
   Privacy Policy / Terms pages still need reviewing against these once your GHL
   sub-account is live, and that several A2P/SMS compliance items are outstanding.
   The SMS-consent language used on `/schedule/` and `/get-started/` should be
   reflected in the privacy policy text — check that it is.
