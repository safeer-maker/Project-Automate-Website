import { withBase } from '../lib/paths.ts';

type Link = { label: string; href: string };
type ServiceLink = Link & { image: string };

/** Apply the deploy base to every internal href once, at the source. */
function linkify<T extends Link>(links: T[]): T[] {
	return links.map((link) => ({ ...link, href: withBase(link.href) }));
}

/** Preview imagery for the desktop mega menu — one real shot per service. */
export const coreServices: ServiceLink[] = linkify([
	{ label: 'Control Systems', href: '/control-systems/', image: '/images/solutions/control-systems/hero.webp' },
	{ label: 'Security Systems', href: '/security-systems/', image: '/images/solutions/security-systems/hero.webp' },
	{ label: 'Lighting', href: '/lighting-control-systems/', image: '/images/solutions/lighting/hero.webp' },
	{ label: 'Outdoor Living', href: '/outdoor-living/', image: '/images/solutions/outdoor-living/hero.webp' },
	{ label: 'Home Cinema', href: '/home-cinama/', image: '/images/solutions/home-cinama/hero.webp' },
	{ label: 'Audio & Video Solutions', href: '/audio-video-solutions/', image: '/images/solutions/audio-video-solutions/hero.webp' },
	{ label: 'Motorized Shades and Draperies', href: '/motorized-shades-and-drapery/', image: '/images/solutions/motorized-shades-and-drapery/hero.webp' },
	{ label: 'Energy Management', href: '/energy-moment/', image: '/images/solutions/energy-moment/hero.webp' },
]).map((service) => ({ ...service, image: withBase(service.image) }));

/** Idle mega-menu image, shown before any service link is hovered/focused. */
export const megaMenuDefaultImage = withBase('/images/home/nav-preview-core-services.webp');

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
