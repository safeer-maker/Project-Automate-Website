# 12 — Blog Post

**Route:** `/{slug}/` — ⚠️ posts sit at the **site root**, not under `/blog/`
**Sources:** `src/pages/[slug].astro` → `src/layouts/BlogPostLayout.astro`
**Content:** `src/content/blog/*.md` — 33 posts
**Target component folder:** `src/components/blog/`
**Sections:** 4

---

## Content schema

`src/content.config.ts`:

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | |
| `publishDate` | date | |
| `updatedDate` | date? | defined, **never used in the layout** |
| `excerpt` | string | doubles as the meta description |
| `coverImage` | string | root-relative path |
| `coverImageAlt` | string | |
| `category` | string | defaults `"Smart Home"` |
| `author` | string | defaults `"PROJECT: automate"` |
| `draft` | boolean | ✅ filtered on both the index and `[slug]` |

⚠️ `updatedDate` is the one declared field that's never used — it should render as
"Updated …" and feed `dateModified` in structured data. `draft` is handled
correctly in both places.

---

## Section map

| ID | Section | Target component | Background |
| --- | --- | --- | --- |
| POST-01 | Header — back link, category, H1, byline | `blog/PostHeader.astro` | Cream |
| POST-02 | Cover image | `blog/PostHeader.astro` | — |
| POST-03 | Article body (markdown) | `blog/PostBody.astro` | Cream |
| POST-04 | *(nothing)* | — | — |

---

## POST-01 / POST-02 — Header + cover

`← Back to Blog`, category eyebrow, H1, `By {author} · {date}`, then a full-width
cover image.

**Animation:** none.

**Suggestions**

1. Add reading time — derivable from the rendered content, one line of code.
2. Mask-reveal the cover image; H1 rises ahead of it.
3. ⚠️ Every post's author is the default `"PROJECT: automate"`. For content meant
   to establish expertise, a named human author with a face and a one-line bio is
   worth considerably more. Joshua is already introduced on About Us.

---

## POST-03 — Article body

Rendered markdown inside a `.post-content` container. No table of contents, no
pull quotes, no inline CTA, no images beyond the cover.

**Suggestions**

1. **Sticky table of contents** in the left margin on desktop, built from the
   `<h2>`s, with the active section highlighted as you scroll. These posts are
   long guides; this is the single most useful addition.
2. **Scroll progress hairline** in the header (see `00-global-shell.md`).
3. Style `blockquote` as a proper bronze-ruled pull quote, and give `h2` a
   hairline above it. Right now a 2,000-word guide is an undifferentiated column.
4. Inline CTA after the third `h2` — "Planning a lighting project? Book a
   consultation." Mid-article converts better than the footer.

---

## POST-04 — Missing everything after the article

⚠️ **The post ends with the last paragraph.** No related posts, no CTA, no
newsletter, no next/previous. A reader who finishes a 2,000-word guide is the
most engaged visitor on the site and is handed nothing.

**Add, in order:**

1. **Author card** — portrait, name, one line, link to About Us.
2. **Related posts** — 3 cards matched on `category`.
3. **Related solution** — one link from the post's category to the matching
   solution page (Lighting post → `/lighting-control-systems/`). This is where
   blog traffic should convert into service enquiries, and right now there is no
   path at all from a post to a service page.
4. **`CtaBanner`** — every other page has one.

---

## Page-level suggestions

1. **⚠️ Fix the URL structure.** Posts live at `/{slug}/`, competing with page
   routes at the same level (`/about-us/`, `/schedule/`). The catch-all
   `[slug].astro` will collide with any future page slug, and it means the blog has
   no URL namespace. Move to `/blog/{slug}/` with 301s from the current URLs.
   Do this alongside the other slug fixes listed in `10-solution-template.md`.
2. **Add `BlogPosting` JSON-LD** — headline, image, datePublished, dateModified,
   author, publisher. Currently every page emits only the site-wide
   `LocalBusiness` block.
3. **Render `updatedDate`** where it's set, and emit it as `dateModified`.
4. ⚠️ Six posts had cross-contaminated source content on the live WordPress site
   and were repaired during the rebuild — they're listed in
   `docs/known-issues.md` and are worth a read-through before this replaces live.
