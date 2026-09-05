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
	}),
});

export const collections = { blog };
