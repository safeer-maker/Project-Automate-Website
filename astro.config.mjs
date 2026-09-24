// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// The live deploys (Cloudflare Workers, via wrangler.jsonc, and GitHub Pages via the
// sweb.projectautomate.com custom domain) both serve from the domain root, so
// the default build below (no env vars) is correct for both as-is.
//
// BASE_PATH/SITE_URL are an escape hatch only — set them if this repo is ever
// deployed to the bare github.io/<repo-name>/ URL (no custom domain), which
// serves from a subpath instead:
//   BASE_PATH=/Project-Automate-Website SITE_URL=https://safeer-maker.github.io
// Every internal link/asset goes through withBase() in src/lib/paths.ts, which
// is a no-op when BASE_PATH is unset, so this never affects the normal build.
const base = process.env.BASE_PATH || undefined;
const site = process.env.SITE_URL || 'https://projectautomate.com';

// Old WordPress URLs → their new homes. Cloudflare answers these with real 301s
// from public/_redirects (keep the two lists in step); this copy gives GitHub
// Pages, which can't send HTTP redirects, instant meta-refresh pages instead,
// which Google also treats as permanent.
const redirects = {
	'/home-cinama': '/home-theater/',
	'/technology-support-memebership': '/technology-support-membership/',
	'/energy-moment': '/energy-management/',
	'/brands/savant-2': '/brands/savant/',
	'/brands/lutron-2': '/brands/lutron/',
	'/brands/josh-ai-2': '/brands/josh-ai/',
	'/partner': '/design-partners/',
	'/project-single': '/success-stories/pacific-horizon-residence/',
	'/top-reasons-you-need-a-contr014-system-at-home': '/top-reasons-you-need-a-control4-system-at-home/',
	'/3-unique-security-solutions-that-will-make-your-home-a-safer-place-copy':
		'/3-unique-security-solutions-that-will-make-your-home-a-safer-place/',
};
// Destinations are written from the site root; carry the deploy base when there is one.
const withBasePath = (to) => (base ? `${base.replace(/\/$/, '')}${to}` : to);

// Pages kept out of search results never belong in the sitemap: the thank-you
// page, the 404, and any blog post flagged `noindex: true` in its frontmatter.
const blogDir = path.resolve('src/content/blog');
const noindexPosts = fs.existsSync(blogDir)
	? fs
			.readdirSync(blogDir)
			.filter((file) => file.endsWith('.md'))
			.filter((file) => /^noindex:\s*true\s*$/m.test(fs.readFileSync(path.join(blogDir, file), 'utf8').split(/^---\s*$/m)[1] ?? ''))
			.map((file) => file.replace(/\.md$/, ''))
	: [];
const excludedFromSitemap = new Set(['thank-you', '404', ...noindexPosts]);

// https://astro.build/config
export default defineConfig({
	site,
	base,
	output: 'static',
	// Every URL ends in "/" — matches Cloudflare's auto-trailing-slash handling,
	// so internal links, canonicals and the sitemap never pass through its 307.
	trailingSlash: 'always',
	redirects: Object.fromEntries(Object.entries(redirects).map(([from, to]) => [from, withBasePath(to)])),
	integrations: [
		sitemap({
			filter: (page) => {
				let pathname = new URL(page).pathname;
				if (base && pathname.startsWith(base)) pathname = pathname.slice(base.replace(/\/$/, '').length);
				return !excludedFromSitemap.has(pathname.replace(/^\/|\/$/g, ''));
			},
		}),
	],
});
