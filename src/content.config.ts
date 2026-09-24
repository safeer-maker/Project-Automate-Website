import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		excerpt: z.string(),
		coverImage: z.string(),
		coverImageAlt: z.string(),
		category: z.string().default('Smart Home'),
		author: z.string().default('PROJECT: automate'),
		draft: z.boolean().default(false),
		// SEO overrides: a search title when the headline isn't the searched
		// phrase, and noindex for legacy posts that no longer fit the brand
		// (kept live so old links still resolve; also dropped from the sitemap).
		seoTitle: z.string().optional(),
		// Meta description override: the excerpt doubles as /blog/ card copy, so
		// when it runs short or long for a search snippet (~140–160 chars) we
		// write the snippet here instead of reshaping the card text.
		seoDescription: z.string().optional(),
		noindex: z.boolean().default(false),
	}),
});

export const collections = { blog };
