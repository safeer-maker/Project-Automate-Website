## Development

Start the dev server with:

```
npm run dev
```

This runs `scripts/dev.mjs`, a thin wrapper around `astro dev` that keeps the dev server tied to the terminal's lifetime — closing the terminal or hitting Ctrl+C kills the whole process tree. Do NOT use `astro dev --background`; that starts a detached daemon that keeps running after the terminal closes.

## Deployment

Production deploys to Cloudflare Workers happen automatically via Cloudflare's own Git integration — **not** via a local or CI `wrangler deploy`. When a PR merges into the `stage` branch, Cloudflare detects the change on that branch directly, builds the site, and redeploys it on Workers itself.

- `wrangler.jsonc` at the repo root is a static, minimal config (just `name`, `compatibility_date`, and `assets.directory`) that tells Cloudflare's build how to serve this static site. It is not invoked manually — no `wrangler` npm dependency or `wrangler deploy` script is needed in this repo.
- This is separate from `.github/workflows/deploy.yml`, which deploys the same static build to GitHub Pages independently.
- To ship a change to production: merge into `stage`. Do not add a `wrangler deploy` step back into `package.json` or CI for this.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
