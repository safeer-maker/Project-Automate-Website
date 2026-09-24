// Private Cinema (/home-theater/). Published answers only restate what the
// site already says (see `basis`); everything else waits for the client's own
// answer and is never rendered. Order is the order the page shows them in.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Does a private cinema need a dedicated room?',
		status: 'published',
		a: 'Not necessarily. We design dedicated private cinemas and media rooms that share their space with everyday life, with picture, sound, acoustics, seating and light planned together in both. As a rule, projection suits a room where light can be controlled, while a large-format display copes better with a bright, multi-purpose space. Motorized screens and concealed projectors let the cinema step out of sight when it is not in use.',
		basis:
			"/home-theater/ intro: \"A private cinema is a theater or media room built around film … Picture, sound, acoustics, seating and light are planned together\"; Cinematic Visuals: \"Ultra-high-definition projection and large-format displays … Motorized screens, concealed projectors\"; Journal, Ultimate Checklist for Home Theater Installation: projectors \"perform best in dark, controlled rooms\", TVs \"handle bright, multi-purpose rooms far better\"; Journal, Bespoke Projection Surface Design: \"multi-purpose living spaces often call for a motorized screen that disappears when not in use\".",
	},
	{
		q: 'What should we expect to invest in a private cinema?',
		status: 'needs-client',
		clientPrompt:
			'Give the range you are comfortable publishing for (a) a media room and (b) a dedicated private cinema, e.g. "most of our private cinemas fall between $X and $Y", and name the three or four things that move the number most (room size and seat count, projection or a large display, acoustic construction, speaker layout, seating).',
	},
	{
		q: 'How long does a private cinema take, from first drawings to first screening?',
		status: 'needs-client',
		clientPrompt:
			'Typical durations for (a) a dedicated cinema in a new build or major renovation and (b) converting a room in an existing home, and the point in construction by which you need to be involved (e.g. before framing, for pre-wire and acoustic construction). A range is fine: "typically X to Y weeks on site once the room is ready".',
	},
	{
		q: 'We are building or renovating. How do you work with our architect and designer?',
		status: 'published',
		a: 'From the beginning, ideally. We collaborate with your architect, interior designer and builder so the cinema is designed into the architectural plan rather than added after the fact. Every speaker, keypad and panel is placed to support the design, never to compete with it, and rough-in and trim are scheduled in step with the rest of the site.',
		basis:
			'/success-stories/ closing: "Planning a new residence or major renovation? PROJECT: automate can collaborate with your architect, designer, and builder to integrate technology from the beginning."; /design-partners/ Architects: "translate technology requirements into the architectural plan — not bolt it on after the fact"; Interior Designers: "Every keypad, panel, and speaker is placed to support the design — never to compete with it."; General Contractors: "Coordinated rough-in and trim schedules".',
	},
	{
		q: 'Can you create a cinema in a home that is already finished?',
		status: 'needs-client',
		clientPrompt:
			'Say whether you convert rooms in finished homes, what is achievable without opening walls and ceilings (concealed wiring, in-wall speakers, acoustic treatment, projector placement), how disruptive it usually is, and when you would recommend a media room over a full cinema.',
	},
	{
		q: 'Will the sound carry to the rest of the house?',
		status: 'needs-client',
		clientPrompt:
			'Explain how you keep cinema sound in the room and outside noise out: whether you design sound isolation yourselves or with an acoustician, the usual measures (isolated walls and ceilings, acoustic doors, quiet ventilation), and what a homeowner should expect in a new build versus an existing room. Add room guidance if useful, e.g. minimum size and ceiling height for tiered seating.',
	},
	{
		q: 'How is the cinema controlled?',
		status: 'published',
		a: 'With one touch. A single preset dims the lights, closes the shades, lowers the screen and wakes the system, and everything answers to a touch panel, your voice or one app. The cinema can run on the same Savant, Crestron or Control4 system as the rest of the home, so the whole residence answers to one interface.',
		basis:
			'/home-theater/ Intelligent Control & Lighting: "Preset scenes transform the room in a moment: lights dim, shades close, the screen descends and the system wakes. Everything answers to an elegant touch panel, your voice or a single app."; /control-systems/ intro: "We design Savant, Crestron and Control4 systems that bring every part of the residence together".',
	},
	{
		q: 'Which projector, speaker and seating brands do you use?',
		status: 'needs-client',
		clientPrompt:
			'List the brands you typically specify for projection, displays, screens, speakers, processing and seating, and which of them you hold certifications or authorized status with. Please confirm the Journal\'s statement that PROJECT: automate partners with Barco (one post calls you "a leading dealer of Barco products in the Los Angeles area"); if you are not an authorized Barco dealer, that wording needs to change.',
	},
	{
		q: 'What happens in a power cut, or if the internet goes down?',
		status: 'needs-client',
		clientPrompt:
			'Say what keeps working without internet (local media server or disc playback, the control system, touch panels and remotes) and what pauses (streaming apps, remote access, cloud voice services). Say whether you include power protection or battery backup for the equipment rack, and how the system comes back when power returns.',
	},
	{
		q: 'Who looks after the cinema once it is finished?',
		status: 'published',
		a: 'We do. At handover we commission every scene, walk you through the room and leave complete documentation, and our concierge team then stays on to care for it. A Technology Support Membership adds 24/7 support and priority service, and many requests are resolved remotely, without waiting for a visit.',
		basis:
			'Homepage and /about-us/ process, Deliver: "We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it."; /technology-support-membership/ hero: "24/7 support, guaranteed response times and priority service"; Remote Assistance: "Many requests are resolved remotely, without waiting for a visit."',
	},
];

export default faqs;
