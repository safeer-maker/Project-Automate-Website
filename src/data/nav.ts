import { withBase } from '../lib/paths.ts';

type Link = { label: string; href: string };

/** Apply the deploy base to every internal href once, at the source. */
const linkify = (links: Link[]): Link[] =>
	links.map((link) => ({ ...link, href: withBase(link.href) }));

export const coreServices = linkify([
	{ label: 'Control Systems', href: '/control-systems/' },
	{ label: 'Security Systems', href: '/security-systems/' },
	{ label: 'Lighting', href: '/lighting-control-systems/' },
	{ label: 'Outdoor Living', href: '/outdoor-living/' },
	{ label: 'Home Cinema', href: '/home-cinama/' },
	{ label: 'Audio & Video Solutions', href: '/audio-video-solutions/' },
	{ label: 'Motorized Shades and Draperies', href: '/motorized-shades-and-drapery/' },
	{ label: 'Energy Management', href: '/energy-moment/' },
]);

export const primaryNav = linkify([
	{ label: 'About us', href: '/about-us/' },
	{ label: 'Design partner', href: '/partner/' },
	{ label: 'Blogs', href: '/blog/' },
	{ label: 'HTA Budget Calculator', href: '/budget-calculator/' },
	{ label: 'Contact us', href: '/schedule/' },
]);

export const brandLinks = linkify([
	{ label: 'Savant', href: '/brands/savant-2/' },
	{ label: 'Control4', href: '/brands/control4/' },
	{ label: 'Lutron', href: '/brands/lutron-2/' },
	{ label: 'Crestron', href: '/brands/crestron/' },
	{ label: 'Basalte', href: '/brands/basalte/' },
	{ label: 'Josh.ai', href: '/brands/josh-ai-2/' },
]);
