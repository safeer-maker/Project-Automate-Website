// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// The live deploys (Cloudflare Workers, and GitHub Pages via the
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

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  adapter: cloudflare(),
});
