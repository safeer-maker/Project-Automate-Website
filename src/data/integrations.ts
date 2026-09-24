// "Where systems meet": everyday moments in which several services act as one.
// Each scenario appears on the page of every service it names (via
// ServiceIntegrations) and on the /solutions/ hub.
//
// Rules for this file:
// - Stories describe capabilities the service pages already state. No
//   numbers, no brand promises, nothing about particular clients.
// - Every service appears in at least two scenarios.
// - One photograph per scenario, never shared between scenarios, never one
//   already used on a page the scenario appears on (a photo may repeat across
//   pages, never twice on one page), and never a pillar photo from
//   src/data/services.ts (the hub shows both). "Movie night" has no photo:
//   every cinema image is already on the Private Cinema page.
// - Order runs through the day; service pages show a service's first four.
import type { LibraryImageId } from '../lib/images.ts';
import type { ServiceKey } from './services.ts';

export interface Integration {
	id: string;
	title: string;
	story: string;
	services: ServiceKey[];
	image?: LibraryImageId;
	/** Describes the photograph; empty means decorative. */
	imageAlt?: string;
}

export const integrations: Integration[] = [
	{
		id: 'daylight-and-heat',
		title: 'Daylight and heat',
		story:
			'As the sun moves across the glass, shades adjust on their own to soften glare, protect art and furnishings and keep the view, easing the work of the cooling. Lighting fills in only as much as the daylight needs.',
		services: ['motorized-shades-and-drapery', 'hvac-and-climate-integration', 'lighting-control-systems'],
		image: 'solutions/control-wall-panel',
		imageAlt: 'A serene, sunlit living room with sheer drapery and a slim control panel on the wall',
	},
	{
		id: 'guest-at-the-gate',
		title: 'A guest at the gate',
		story:
			'When someone calls at the gate, the video intercom appears on the nearest touch panel, the television or your phone. See them, speak with them and let them in from wherever you are.',
		services: ['access-control-and-intercom', 'audio-video-solutions', 'control-systems'],
		image: 'solutions/control-panel-living',
		imageAlt: 'A wall-mounted touch panel beside a bright living room that opens onto the trees',
	},
	{
		id: 'sunset-on-the-terrace',
		title: 'Sunset on the terrace',
		story:
			'As the light goes, the garden and pool lighting rise softly and the music follows you outside, from speakers hidden in the planting. One touch sets the whole terrace for the evening.',
		services: ['outdoor-living', 'outdoor-lighting-audio', 'audio-video-solutions'],
		image: 'residences/malibu-cliffside',
		imageAlt: 'A cliff-top terrace and infinity pool above the ocean at sunset',
	},
	{
		id: 'arrival',
		title: 'Arrival',
		story:
			'A familiar car is recognized at the gate, and it opens as you approach. Path and entry lights rise ahead of you, the door unlocks, and the house is already at your preferred temperature.',
		services: [
			'access-control-and-intercom',
			'surveillance-systems',
			'outdoor-lighting-audio',
			'lighting-control-systems',
			'hvac-and-climate-integration',
		],
		image: 'solutions/landscape-path',
		imageAlt: 'A lit stepping-stone path leading through a garden to a glowing entry at dusk',
	},
	{
		id: 'entertaining',
		title: 'Entertaining',
		story:
			'One scene brings light, music and climate into balance for guests, indoors and out. As the evening drifts to the terrace, the music and the mood go with it.',
		services: ['lighting-control-systems', 'audio-video-solutions', 'outdoor-living', 'hvac-and-climate-integration'],
		image: 'residences/hidden-hills-courtyard',
		imageAlt: 'A pool courtyard at dusk with a lit fire table, lounge seating and string lights',
	},
	{
		id: 'game-day',
		title: 'Game day',
		story:
			'The game fills the private cinema, while the same broadcast plays in the kitchen and on the screen by the pool. Every room and every source answers to one simple interface.',
		services: ['home-theater', 'audio-video-solutions', 'outdoor-living', 'control-systems'],
		image: 'residences/hidden-hills-pool',
		imageAlt: 'A glass-walled pavilion opening onto a long pool at dusk',
	},
	{
		id: 'movie-night',
		title: 'Movie night',
		story:
			'One preset transforms the room: the lights dim, the shades close, the screen descends and the sound comes alive. When the credits roll, one touch brings the room back.',
		services: ['home-theater', 'lighting-control-systems', 'motorized-shades-and-drapery', 'audio-video-solutions'],
	},
	{
		id: 'goodnight',
		title: 'Goodnight',
		story:
			'One touch at the bedside, and the lights settle through the house, the shades and drapery close, and the property is secured for the night.',
		services: ['control-systems', 'lighting-control-systems', 'security-systems', 'motorized-shades-and-drapery'],
		image: 'residences/manhattan-beach',
		imageAlt: 'A coastal residence at sunset, its windows and garden path glowing warmly',
	},
	{
		id: 'perimeter-watch',
		title: 'Perimeter watch',
		story:
			'When a camera or sensor at the edge of the property notices movement after dark, path and facade lighting rise, the cameras record and a notification reaches you, wherever you are. Familiar faces pass without an alert.',
		services: ['surveillance-systems', 'intrusion-detection-systems', 'outdoor-lighting-audio', 'security-systems'],
		image: 'solutions/landscape-hillside',
		imageAlt: 'A hillside residence at dusk, its gardens and terraces softly uplit',
	},
	{
		id: 'away',
		title: 'Away',
		story:
			'One touch as you leave arms every sensor, lowers the shades and eases the climate back. While you are gone, lights and shades keep a lived-in rhythm, and alerts follow you wherever you are.',
		services: [
			'security-systems',
			'intrusion-detection-systems',
			'lighting-control-systems',
			'motorized-shades-and-drapery',
			'hvac-and-climate-integration',
		],
		image: 'residences/palm-drive-estate',
		imageAlt: 'A modern residence glowing at the end of a palm-lined drive at dusk',
	},
	// The two care scenarios restate the homepage ("Our concierge team then stays
	// on to care for it") and the membership page ("kept performing as it did on
	// the day it was handed over", priority service, requests "resolved
	// remotely, without waiting for a visit").
	{
		id: 'cared-for',
		title: 'Cared for',
		story:
			'After the final walkthrough, our concierge team stays on to care for the system, keeping it performing as it did on the day it was handed over.',
		services: ['technology-support-membership', 'control-systems'],
		image: 'solutions/landscape-installation',
		imageAlt: 'A technician tending the landscape lighting in a manicured garden',
	},
	{
		id: 'remote-assistance',
		title: 'Remote assistance',
		story:
			'If a camera, the gate or the intercom ever needs attention, members move to the front of the queue, and many requests are resolved remotely, without waiting for a visit.',
		services: ['technology-support-membership', 'surveillance-systems', 'access-control-and-intercom'],
		image: 'solutions/control-touch',
		imageAlt: 'Hands on a home control touchscreen mounted on a wall',
	},
];

/** Every scenario that involves this service, in the order above. */
export function integrationsFor(key: ServiceKey): Integration[] {
	return integrations.filter((integration) => integration.services.includes(key));
}
