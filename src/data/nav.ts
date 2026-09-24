import { withBase } from '../lib/paths.ts';
import { imageUrl } from '../lib/images.ts';

type Link = { label: string; href: string };
type ServiceLink = Link & { image: string };

/** Apply the deploy base to every internal href once, at the source. */
function linkify<T extends Link>(links: T[]): T[] {
	return links.map((link) => ({ ...link, href: withBase(link.href) }));
}

/**
 * Preview imagery for the desktop mega menu: each service's own hero from the
 * photo library, so the preview matches the page the link opens. 800w is sharp
 * in the ~340px preview slot on a 2x screen and keeps the swap instant.
 * Energy Management is deliberately absent (unlinked, see SPEC §0.7).
 */
export const coreServices: ServiceLink[] = linkify([
	{ label: 'Control Systems', href: '/control-systems/', image: imageUrl('solutions/control-wall-panel', 800) },
	{ label: 'Security Systems', href: '/security-systems/', image: imageUrl('solutions/security-driveway-gate', 800) },
	{ label: 'Lighting', href: '/lighting-control-systems/', image: imageUrl('solutions/lighting-kitchen', 800) },
	{ label: 'Outdoor Living', href: '/outdoor-living/', image: imageUrl('residences/malibu-coastal', 800) },
	{ label: 'Home Theater', href: '/home-theater/', image: imageUrl('solutions/cinema-tiered', 800) },
	{ label: 'Audio & Video Solutions', href: '/audio-video-solutions/', image: imageUrl('solutions/cinema-media-room', 800) },
	{ label: 'Motorized Shades and Draperies', href: '/motorized-shades-and-drapery/', image: imageUrl('solutions/shades-glass-wall', 800) },
]);

/** Idle mega-menu image, shown before any service link is hovered/focused. */
export const megaMenuDefaultImage = imageUrl('residences/hidden-hills-pool', 800);

export const primaryNav = linkify([
	{ label: 'About us', href: '/about-us/' },
	{ label: 'Design partner', href: '/design-partners/' },
	{ label: 'Journal', href: '/blog/' },
	{ label: 'HTA Budget Calculator', href: '/budget-calculator/' },
	{ label: 'Contact us', href: '/schedule/' },
]);

export const brandLinks = linkify([
	{ label: 'Savant', href: '/brands/savant/' },
	{ label: 'Control4', href: '/brands/control4/' },
	{ label: 'Lutron', href: '/brands/lutron/' },
	{ label: 'Crestron', href: '/brands/crestron/' },
	{ label: 'Basalte', href: '/brands/basalte/' },
	{ label: 'Josh.ai', href: '/brands/josh-ai/' },
]);
