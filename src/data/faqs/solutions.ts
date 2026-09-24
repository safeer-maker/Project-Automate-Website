// Questions for the /solutions/ hub: general ones, about the studio and how the
// services come together, rather than any single system.
//
// Published answers only restate what the site already says (`basis` records
// where). The rest wait for the client's own answer and are never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'How do the different systems work together?',
		status: 'published',
		a: 'Lighting, shading, climate, audio and video, and security are designed together and controlled as one system, from a single intuitive interface. Rather than managing separate technologies, one touch can set the whole scene: the lights dim, the shades lower, the temperature adjusts and the music begins.',
		basis:
			'Homepage, "One system, every room": "designed together and controlled as one"; homepage statement: "Light, climate, sound and security simply respond"; /control-systems/ hero: "One Touch, Every Room"; /brands/basalte/: "A single touch can dim the lights, lower the shades, adjust the temperature and begin your favourite music — creating the right atmosphere without managing separate technologies."',
	},
	{
		q: 'Which brands and platforms do you work with?',
		status: 'published',
		a: 'We design with Savant, Control4, Lutron, Crestron, Basalte and Josh.ai, and recommend the platform that suits how you live, not the logo. Whichever sits at the heart of the residence, it is specified, programmed and cared for by the same team.',
		basis:
			'/brands/ intro: "We design with Savant, Control4, Lutron, Crestron, Basalte and Josh.ai, and recommend the one that suits how you live, not the logo." and "Whichever platform sits at the heart of your residence, it is specified, programmed and cared for by the same team".',
	},
	{
		q: 'Will you work with my architect and interior designer?',
		status: 'published',
		a: 'Yes. Every system is planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline. On a new residence or major renovation, we can collaborate with your architect, designer and builder from the beginning, so the technology is part of the plan rather than bolted on after the fact.',
		basis:
			'Homepage "How We Work", Design: "planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline"; /success-stories/ closing: "Planning a new residence or major renovation? PROJECT: automate can collaborate with your architect, designer, and builder to integrate technology from the beginning."; /design-partners/ Architects: "not bolt it on after the fact".',
	},
	{
		q: 'What happens after the system is handed over?',
		status: 'published',
		a: 'We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it. With a Technology Support Membership, members move to the front of the queue, support is available around the clock, and many requests are resolved remotely, without waiting for a visit.',
		basis:
			'Homepage "How We Work", Deliver: "We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it."; /technology-support-membership/: "24/7 Basic Support on every plan", "Members move to the front of the queue", "Many requests are resolved remotely, without waiting for a visit."',
	},
	{
		q: 'Which areas of Los Angeles do you serve?',
		status: 'needs-client',
		clientPrompt:
			'List the cities and neighbourhoods you actively take projects in. The site\'s structured data currently names Los Angeles, Beverly Hills, Malibu, Manhattan Beach, Hermosa Beach, Palos Verdes Estates, Rolling Hills, Hidden Hills, Calabasas, Santa Monica, Bel Air, Brentwood, Pacific Palisades, Holmby Hills and Los Angeles County: confirm, add or remove. Say whether you take projects beyond Los Angeles County (Orange County, Santa Barbara and Montecito, second homes elsewhere) and whether concierge care and on-site support cover the same area.',
	},
	{
		q: 'What should we expect to invest?',
		status: 'needs-client',
		clientPrompt:
			'How you would like investment described publicly: typical ranges for a whole-home system and for a single discipline (for example a private cinema or lighting control), what moves the figure (size of the residence, number of rooms, platform, keypad and finish choices), and whether design and programming are priced separately. Note: the HTA Budget Calculator\'s dollar figures are planning estimates written for the site, not your confirmed pricing, so confirm or correct them before any answer points to it.',
	},
	{
		q: 'How long does a project take, and when should we bring you in?',
		status: 'needs-client',
		clientPrompt:
			'Typical timelines from first consultation to handover for a new build and for an existing home, the main phases (design, pre-wire or rough-in, trim, programming, commissioning and walkthrough), and the ideal point in the architect\'s schedule to involve you (for example schematic design or design development).',
	},
	{
		q: 'Do you work on existing homes, or only new construction?',
		status: 'needs-client',
		clientPrompt:
			'Whether you take on finished homes as well as new builds and renovations, what can be done without opening walls (name the wireless lighting, shading or audio products you actually use), how finishes are protected during installation, and whether you can take over, upgrade or re-program a system another integrator installed.',
	},
];

export default faqs;
