import { withBase } from '../lib/paths.ts';
import { imageUrl } from '../lib/images.ts';
import { pillars, services, type PillarKey, type ServiceKey } from './services.ts';

type Link = { label: string; href: string };

/** Apply the deploy base to every internal href once, at the source. */
function linkify<T extends Link>(links: T[]): T[] {
	return links.map((link) => ({ ...link, href: withBase(link.href) }));
}

/** The /solutions/ hub: every service, grouped by pillar. */
export const solutionsHub = withBase('/solutions/');

export interface MenuService {
	key: ServiceKey;
	label: string;
	href: string;
	/** Preview photograph for the desktop mega menu (the page's own hero). */
	image: string;
	/** One calm line, shown under the preview. */
	line: string;
}

export interface ServiceGroup {
	key: PillarKey;
	title: string;
	/** The pillar's block on the hub. */
	hubHref: string;
	/** The pillar's lead service (its first member), for the footer. */
	leadHref: string;
	services: MenuService[];
}

// The membership's short title ("Concierge Care") repeats its group's name, so
// the menu calls it what the closing banners do.
const MENU_LABELS: Partial<Record<ServiceKey, string>> = {
	'technology-support-membership': 'Technology Support',
};

/**
 * The header mega menu, the off-canvas menu and the footer, grouped the way the
 * hub is: one group per pillar, home members only (the hub shows the overlaps;
 * listing a service under three headings here would only read as clutter).
 * Previews are 640w: sharp in the ~300px preview slot on a 2x screen, and light
 * enough to warm all thirteen when the menu first opens.
 * Energy Management is deliberately absent (unlinked site-wide).
 */
export const serviceGroups: ServiceGroup[] = pillars.map((pillar) => ({
	key: pillar.key,
	title: pillar.title,
	hubHref: withBase(`/solutions/#${pillar.key}`),
	leadHref: withBase(services[pillar.services[0]].href),
	services: pillar.services.map((key) => {
		const service = services[key];
		return {
			key,
			label: MENU_LABELS[key] ?? service.shortTitle,
			href: withBase(service.href),
			image: imageUrl(service.image, 640),
			line: service.line,
		};
	}),
}));

/** Idle mega-menu image and caption, shown before any service link is hovered/focused. */
export const megaMenuDefaultImage = imageUrl('residences/hidden-hills-pool', 640);
export const megaMenuDefaultLine = 'One home, every system, designed as one.';

export const primaryNav = linkify([
	{ label: 'About Us', href: '/about-us/' },
	{ label: 'Design Partner', href: '/design-partners/' },
	{ label: 'Journal', href: '/blog/' },
	{ label: 'HTA Budget Calculator', href: '/budget-calculator/' },
	{ label: 'Contact Us', href: '/schedule/' },
]);

export const brandLinks = linkify([
	{ label: 'Savant', href: '/brands/savant/' },
	{ label: 'Control4', href: '/brands/control4/' },
	{ label: 'Lutron', href: '/brands/lutron/' },
	{ label: 'Crestron', href: '/brands/crestron/' },
	{ label: 'Basalte', href: '/brands/basalte/' },
	{ label: 'Josh.ai', href: '/brands/josh-ai/' },
]);
