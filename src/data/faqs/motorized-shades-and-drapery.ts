// Questions for /motorized-shades-and-drapery/. Published answers only
// restate what the site already says (see each `basis`); everything that
// needs a new fact waits for the client's own answer and is never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Wired or battery-powered: which shades suit our home?',
		status: 'published',
		a: 'Both have their place. Wired shades never need their batteries changed, but running the wires means opening walls, so they are best planned into a new build or major renovation. Battery-powered shades can be added to a finished home without opening walls, which makes them well suited to an existing home.',
		basis:
			'Journal, /3-reasons-to-power-motorized-shades-with-crestron-home/: "Motorized shades come in wired and wireless models, and there are benefits to both. While wired shades do not require replacing or recharging batteries, they are difficult to install in an already-built home since they require opening walls for long wire runs", "battery-powered shades can easily be added to a home without tearing open the walls".',
	},
	{
		q: 'Can we have sheer fabrics in some rooms and blackout in others?',
		status: 'published',
		a: 'Yes. Fabric is chosen room by room, as much a design decision as a practical one: sheers soften daylight while keeping the view, blackout suits bedrooms and media rooms, and translucent fabrics sit in between. It is worth choosing them alongside your interior designer, early in the project.',
		basis:
			'Journal, /how-motorized-window-coverings-can-enhance-your-interior-design/: "from sheer fabrics that soften daylight while keeping views intact, to opaque blackout fabrics for bedrooms and media rooms", "as much a design decision as it is a functional one", "worth talking to an integrator early in the process". Journal, /3-reasons-to-power-motorized-shades-with-crestron-home/: "blackout, translucent, or transparent".',
	},
	{
		q: 'Will we hear the motors or see the hardware?',
		status: 'published',
		a: 'Very little of either. Motors are whisper-quiet and tracks are hidden, so shades and drapery move smoothly without disturbing the room, with no pull cords or bulky valances. The cleanest result comes from planning the concealment early, in step with your architect and designer.',
		basis:
			'/motorized-shades-and-drapery/: "Hidden tracks and whisper-quiet motors move it smoothly", hero "concealed in the architecture". Journal, /how-motorized-window-coverings-can-enhance-your-interior-design/: "move smoothly and quietly", "no need for pull cords or bulky valances". Homepage process, Design: "in step with your architect and designer, down to each keypad and sightline".',
	},
	{
		q: 'Will shades protect our art and help with the heat?',
		status: 'published',
		a: 'Yes. Scheduled to follow the sun, shades ease glare and UV through the day, protecting art and furnishings from fading. Lowered in the hottest hours, they also reduce heat gain and ease the load on the cooling, and with climate control on the same system, the two work together.',
		basis:
			'/motorized-shades-and-drapery/: "Quiet adjustments ease glare and UV, protecting art and furnishings from fading". Journal, /how-motorized-window-coverings-can-enhance-your-interior-design/: "Scheduling shades to respond to the sun\'s position… protect furnishings and artwork from prolonged UV exposure", "Lowering shades during the hottest part of the day can ease the load on a home\'s cooling system". /hvac-and-climate-integration/: "Thermostats, sensors and HVAC join the same system as your lighting and shades".',
	},
	{
		q: 'Which shade brands do you work with?',
		status: 'published',
		a: 'We design motorized shading with Lutron and Crestron, and it answers to the same system as your lighting, climate and entertainment, whether that is Lutron, Savant, Crestron or Control4. We recommend the platform that suits how you live, not the logo.',
		basis:
			'/brands/lutron/: "Automated Shading… motorized shading"; /brands/: Lutron "whisper-quiet shading", "recommend the one that suits how you live, not the logo". /brands/crestron/: "Crestron unites lighting, shading, climate, entertainment and security in one platform"; journal /3-reasons-to-power-motorized-shades-with-crestron-home/. /brands/savant/ and /brands/control4/: control of "shades" on one platform.',
	},
	{
		q: 'What is a typical investment for motorized shades and drapery?',
		status: 'needs-client',
		clientPrompt:
			'A realistic range for a $5M+ Los Angeles residence, per window or per room and for a whole home. Say what moves the figure most: roller shades versus drapery, wired versus battery, fabric, very large or tall glass, recessed ceiling pockets, and how many shades follow the sun automatically. A range or "from" figure is fine, or say you prefer to discuss it in consultation.',
	},
	{
		q: 'How long do custom shades take, and when should we plan them?',
		status: 'needs-client',
		clientPrompt:
			'Typical lead time from final measurement to installation for custom shades and motorized drapery. In a new build, when do you need to be involved (pre-wiring, recessed pockets in the ceiling, measuring once the glass is in)? How long does a retrofit in an existing home take on site?',
	},
	{
		q: 'Can you motorize drapery made by our designer’s workroom?',
		status: 'needs-client',
		clientPrompt:
			'Do you supply and install motorized tracks for drapery made by the interior designer’s own workroom? Do you also supply fabric and fabrication yourselves? Can existing drapery or shades be motorized, or do they usually need replacing?',
	},
	{
		q: 'What happens to the shades in a power cut, or if the internet is down?',
		status: 'needs-client',
		clientPrompt:
			'In a power cut, do shades stay where they are, and can they be raised or lowered by hand? Do battery shades carry on working? Do keypads and schedules keep working without internet (is control local to the home)? Anything you do to protect against outages, such as battery backup for shade power supplies or a generator connection?',
	},
	{
		q: 'What maintenance do motorized shades need?',
		status: 'needs-client',
		clientPrompt:
			'How often battery shades need new batteries and whether the system warns you (the site’s Crestron journal post mentions low-battery alerts), fabric cleaning, motor and track service, and roughly how long motors last. Is this covered by a manufacturer warranty, by your own workmanship warranty, or by a Technology Support Membership, and who should the homeowner call?',
	},
];

export default faqs;
