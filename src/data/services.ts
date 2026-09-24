// The core services and the pillars they are grouped into: one source for the
// service pages (PillarNav, ServiceIntegrations, ServiceLayout's legacy
// related row), the /solutions/ hub, the header and the footer.
//
// Hrefs are root-relative, without the deploy base: pass them through
// withBase() where they are rendered. Energy Management is deliberately
// absent (unlinked site-wide; the page still exists at /energy-management/).
import type { LibraryImageId } from '../lib/images.ts';

export type ServiceKey =
	| 'control-systems'
	| 'hvac-and-climate-integration'
	| 'lighting-control-systems'
	| 'motorized-shades-and-drapery'
	| 'home-theater'
	| 'audio-video-solutions'
	| 'outdoor-living'
	| 'outdoor-lighting-audio'
	| 'security-systems'
	| 'surveillance-systems'
	| 'access-control-and-intercom'
	| 'intrusion-detection-systems'
	| 'technology-support-membership';

export type PillarKey = 'control' | 'light-shade' | 'entertainment' | 'outdoor' | 'security' | 'care';

export interface Service {
	key: ServiceKey;
	/** Full name, as the homepage grid and the hub set it. */
	title: string;
	/** Compact name for chips and sub-navigation. */
	shortTitle: string;
	/** The page's existing URL, root-relative with a trailing slash. */
	href: string;
	/** Home pillar. */
	pillar: PillarKey;
	/** Other pillars this service also belongs to (rendered as overlap). */
	alsoIn?: PillarKey[];
	/** One calm line describing the service. */
	line: string;
	/** The page's own hero photograph. */
	image: LibraryImageId;
}

export interface Pillar {
	key: PillarKey;
	title: string;
	line: string;
	image: LibraryImageId;
	/** Home members, in order. Overlap members come from each service's `alsoIn`. */
	services: ServiceKey[];
}

// Lines carry over from ServiceLayout's former SOLUTIONS map (which followed
// the homepage "One system, every room" grid). Listed in pillar order, which
// servicesIn() relies on for overlap members.
export const services: Record<ServiceKey, Service> = {
	'control-systems': {
		key: 'control-systems',
		title: 'Smart Home Automation',
		shortTitle: 'Home Automation',
		href: '/control-systems/',
		pillar: 'control',
		line: 'Every system, every room, answered with a single, intuitive gesture.',
		image: 'solutions/control-wall-panel',
	},
	'hvac-and-climate-integration': {
		key: 'hvac-and-climate-integration',
		title: 'Climate Control',
		shortTitle: 'Climate Control',
		href: '/hvac-and-climate-integration/',
		pillar: 'control',
		line: 'Quiet, room-by-room comfort, in step with the shades and the sun.',
		image: 'solutions/control-great-room',
	},
	'lighting-control-systems': {
		key: 'lighting-control-systems',
		title: 'Lighting Control',
		shortTitle: 'Lighting',
		href: '/lighting-control-systems/',
		pillar: 'light-shade',
		alsoIn: ['outdoor'],
		line: 'Light that shifts with the hour, the season and the occasion.',
		image: 'solutions/lighting-kitchen',
	},
	'motorized-shades-and-drapery': {
		key: 'motorized-shades-and-drapery',
		title: 'Motorized Shades & Drapery',
		shortTitle: 'Shades & Drapery',
		href: '/motorized-shades-and-drapery/',
		pillar: 'light-shade',
		alsoIn: ['control'],
		line: 'Privacy, shade and daylight, adjusted without lifting a finger.',
		image: 'solutions/shades-glass-wall',
	},
	'home-theater': {
		key: 'home-theater',
		title: 'Private Cinema',
		shortTitle: 'Private Cinema',
		href: '/home-theater/',
		pillar: 'entertainment',
		line: 'Reference picture and sound, built into the architecture of the room.',
		image: 'solutions/cinema-tiered',
	},
	'audio-video-solutions': {
		key: 'audio-video-solutions',
		title: 'Whole-Home Audio & Video',
		shortTitle: 'Audio & Video',
		href: '/audio-video-solutions/',
		pillar: 'entertainment',
		alsoIn: ['outdoor'],
		line: 'Music in every room and across the terrace, with no speaker in sight.',
		image: 'solutions/cinema-media-room',
	},
	'outdoor-living': {
		key: 'outdoor-living',
		title: 'Outdoor Living',
		shortTitle: 'Outdoor Living',
		href: '/outdoor-living/',
		pillar: 'outdoor',
		line: 'Terraces, pools and gardens, as connected as the rooms inside.',
		image: 'residences/malibu-coastal',
	},
	'outdoor-lighting-audio': {
		key: 'outdoor-lighting-audio',
		title: 'Landscape Lighting & Outdoor Audio',
		shortTitle: 'Landscape Lighting & Audio',
		href: '/outdoor-lighting-audio/',
		pillar: 'outdoor',
		alsoIn: ['security', 'light-shade'],
		line: 'Gardens, paths and pools, drawn softly in light after dark.',
		image: 'solutions/landscape-water-wall',
	},
	'security-systems': {
		key: 'security-systems',
		title: 'Estate Security Systems',
		shortTitle: 'Security Systems',
		href: '/security-systems/',
		pillar: 'security',
		line: 'Gates, cameras and doors that protect quietly and answer to one interface.',
		image: 'solutions/security-driveway-gate',
	},
	'surveillance-systems': {
		key: 'surveillance-systems',
		title: 'Surveillance Systems',
		shortTitle: 'Surveillance',
		href: '/surveillance-systems/',
		pillar: 'security',
		line: 'High-resolution cameras, intelligent alerts and secure remote viewing.',
		image: 'solutions/security-camera',
	},
	'access-control-and-intercom': {
		key: 'access-control-and-intercom',
		title: 'Access Control & Intercom',
		shortTitle: 'Access & Intercom',
		href: '/access-control-and-intercom/',
		pillar: 'security',
		alsoIn: ['control'],
		line: 'Gate, door and guest access, with video intercom and mobile entry.',
		image: 'solutions/security-estate-gate',
	},
	'intrusion-detection-systems': {
		key: 'intrusion-detection-systems',
		title: 'Intrusion Detection',
		shortTitle: 'Intrusion Detection',
		href: '/intrusion-detection-systems/',
		pillar: 'security',
		line: 'Perimeter and interior sensors that stay invisible until needed.',
		image: 'solutions/security-smart-lock',
	},
	// Restates the membership page: "Your technology kept performing as it did
	// on the day it was handed over."
	'technology-support-membership': {
		key: 'technology-support-membership',
		title: 'Technology Support Membership',
		shortTitle: 'Concierge Care',
		href: '/technology-support-membership/',
		pillar: 'care',
		line: 'Concierge care that keeps the home performing as it did on the day it was handed over.',
		image: 'process/deliver',
	},
};

// Pillar photographs are kept distinct from every integration scenario's photo
// (src/data/integrations.ts), so the hub never shows one image twice.
export const pillars: Pillar[] = [
	{
		key: 'control',
		title: 'Control & Climate',
		line: 'One quiet interface for the whole residence, and comfort that keeps pace with the day.',
		image: 'solutions/control-great-room',
		services: ['control-systems', 'hvac-and-climate-integration'],
	},
	{
		key: 'light-shade',
		title: 'Light & Shade',
		line: 'Lamplight and daylight, composed together from morning to night.',
		image: 'solutions/lighting-living-room',
		services: ['lighting-control-systems', 'motorized-shades-and-drapery'],
	},
	{
		key: 'entertainment',
		title: 'Private Entertainment',
		line: 'Picture and sound, from a private cinema to music in every room.',
		image: 'solutions/cinema-tiered',
		services: ['home-theater', 'audio-video-solutions'],
	},
	{
		key: 'outdoor',
		title: 'Outdoor Living',
		line: 'Terraces, pools and gardens, lit, heard and connected like the rooms inside.',
		image: 'residences/malibu-coastal',
		services: ['outdoor-living', 'outdoor-lighting-audio'],
	},
	{
		key: 'security',
		title: 'Security & Access',
		line: 'Gates, cameras, sensors and entry, protecting quietly as one system.',
		image: 'solutions/security-estate-gate',
		services: ['security-systems', 'surveillance-systems', 'access-control-and-intercom', 'intrusion-detection-systems'],
	},
	{
		key: 'care',
		title: 'Concierge Care',
		line: 'After handover, our concierge team stays on to care for the home.',
		image: 'process/deliver',
		services: ['technology-support-membership'],
	},
];

export function pillarOf(key: ServiceKey): Pillar {
	const pillar = pillars.find((p) => p.key === services[key].pillar);
	if (!pillar) throw new Error(`Service "${key}" names an unknown pillar`);
	return pillar;
}

/** A pillar's services: its home members first, then the members it shares with other pillars. */
export function servicesIn(pillar: PillarKey): Service[] {
	const home = pillars.find((p) => p.key === pillar)?.services ?? [];
	const shared = Object.values(services).filter((s) => s.alsoIn?.includes(pillar) && !home.includes(s.key));
	return [...home.map((key) => services[key]), ...shared];
}
