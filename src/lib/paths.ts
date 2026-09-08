/**
 * Prefix a root-relative path with Astro's configured `base`.
 *
 * Production (Cloudflare) runs at the domain root, so BASE_URL is "/" and
 * paths pass through unchanged. The GitHub Pages build runs under
 * "/Project-Automate-Website/", where every internal link and asset needs
 * that prefix or it 404s.
 *
 * Anything that isn't root-relative (external URLs, mailto:, tel:, #anchors)
 * is returned untouched.
 */
export function withBase(path: string): string {
	if (!path.startsWith('/')) return path;
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	if (!base) return path;
	// Idempotent: a path that already carries the base is returned untouched,
	// so passing values through several components can't double-prefix them.
	if (path === base || path.startsWith(`${base}/`)) return path;
	return `${base}${path}`;
}
