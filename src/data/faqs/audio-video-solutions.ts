// Whole-Home Audio & Video (/audio-video-solutions/). Published answers only
// restate what the site already says (see `basis`); everything else waits for
// the client's own answer and is never rendered. Order is the order the page
// shows them in.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Will we see the speakers and screens?',
		status: 'published',
		a: 'Only if you want to. We design around the architecture, with invisible speakers and concealed displays, and every speaker, keypad and panel is placed to support the interior design, never to compete with it. Outdoors, landscape speakers are hidden in the planting and placed for even coverage across the property.',
		basis:
			'/audio-video-solutions/ intro: "invisible speakers, concealed displays"; hero: "speakers you never see"; /design-partners/ Interior Designers: "Every keypad, panel, and speaker is placed to support the design — never to compete with it."; /outdoor-living/: "Landscape speakers and subwoofers are placed for even coverage across the property."; integration "Sunset on the terrace": "from speakers hidden in the planting".',
	},
	{
		q: 'How do we choose what plays, and where?',
		status: 'published',
		a: 'From your phone, a keypad, a remote or a touch panel, or by voice through Josh.ai, which prioritizes local processing for privacy. Play the same music everywhere or something different in every room, at a level tuned to each space. Music and video answer to the same system as the lighting, shades and climate.',
		basis:
			'/audio-video-solutions/ Effortless Control: "Every room and every source, from your phone, a keypad, a remote or a touch panel."; Whole-Home Entertainment: "Play the same thing everywhere, or something different in every space, all from one intuitive system."; Morning Playlist: "at a level tuned to each room"; /brands/josh-ai/: "Local and edge-based processing are prioritized"; /control-systems/: "Lights, shades, climate, music, video and security respond as one".',
	},
	{
		q: 'Can an ordinary television go out on the terrace?',
		status: 'published',
		a: 'We advise against it. Indoor televisions are not built for the sun, heat, moisture and temperature swings of life outside. Outdoors we use displays made for exterior living, bright enough to hold their picture against daylight and built to stay mounted year-round.',
		basis:
			'Journal, Take Your Entertainment Outside with a Stellar Outdoor TV: "we strongly advise against this — indoor TVs aren\'t equipped or designed for the rigors of an outdoor environment", "your screen\'s picture has to compete with natural sunlight", "stay mounted year-round"; /outdoor-living/: "displays made for exterior living. Weather-resistant screens".',
	},
	{
		q: 'What should we expect to invest in whole-home audio and video?',
		status: 'needs-client',
		clientPrompt:
			'Give the range you are comfortable publishing, per room or for a typical whole-home system, e.g. "a room of invisible speakers typically starts around $X; whole-home audio and video for an estate typically falls between $Y and $Z", and what moves it most: number of rooms, invisible or in-ceiling speakers, outdoor coverage, displays and how they are concealed.',
	},
	{
		q: 'Can whole-home audio be added to a finished home, or does it need new wiring?',
		status: 'needs-client',
		clientPrompt:
			'Say whether you prefer hard-wired speakers and displays, what you can do in a finished home without opening walls (wireless streaming, existing wiring, concealed runs), how disruptive a retrofit usually is, and what should be pre-wired during a build or renovation so rooms can be added later.',
	},
	{
		q: 'Which brands and streaming services do you work with?',
		status: 'needs-client',
		clientPrompt:
			'List the speaker, amplifier, streaming, display and outdoor audio brands you typically specify, and the services and sources the system plays (e.g. Spotify, Apple Music, AirPlay, TIDAL, cable or satellite TV, a turntable). The Design Partners page lists Coastal Source (landscape audio) and Rega certifications, and the Journal mentions Séura and Samsung Terrace outdoor TVs: please confirm which are current.',
	},
	{
		q: 'Can you use the televisions and speakers we already own?',
		status: 'needs-client',
		clientPrompt:
			'Say when you can bring existing TVs, speakers, receivers or a Sonos system into the design, what you would usually recommend replacing and why, and how existing equipment joins the same control.',
	},
	{
		q: 'What happens if the internet goes down?',
		status: 'needs-client',
		clientPrompt:
			'Say what keeps working without internet (the control system, keypads and touch panels, local sources and music libraries, broadcast TV) and what pauses (streaming services, remote access, cloud voice services), and whether you include power protection or battery backup for the equipment rack.',
	},
	{
		q: 'Can we add rooms, or the terrace, later?',
		status: 'published',
		a: 'Yes. The control platforms we design on scale from a single room to a complete whole-home system, and are built to expand as your needs and technology evolve. More rooms, the terrace or the garden can join the same system when you are ready.',
		basis:
			'/brands/control4/: "Start with a single room or create a complete whole-home system that can expand as your needs and technology evolve."; /brands/savant/: "Savant Hosts support projects ranging from focused room automation to highly customized whole-property systems."; /brands/crestron/: "A scalable platform designed to evolve with your home and new technologies."',
	},
	{
		q: 'Who looks after the system once it is installed?',
		status: 'published',
		a: 'We do. At handover we commission every scene, walk you through the home and leave complete documentation, and our concierge team then stays on to care for it. A Technology Support Membership adds 24/7 support and priority service, and many requests are resolved remotely, without waiting for a visit.',
		basis:
			'Homepage and /about-us/ process, Deliver: "We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it."; /technology-support-membership/ hero: "24/7 support, guaranteed response times and priority service"; Remote Assistance: "Many requests are resolved remotely, without waiting for a visit."',
	},
];

export default faqs;
