// Questions for /control-systems/ (Smart Home Automation).
//
// Published answers restate what the site already says (see each `basis`).
// Anything that needs a new fact stays `needs-client` and is never rendered;
// its `clientPrompt` is what the client is asked to cover in his own answer.
// The page already shows the ways to control the home (touch panel, phone,
// voice, keypad) and the aftercare (ProcessStrip, "Cared for"), so those are
// not repeated here.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Which control platform do you recommend: Savant, Crestron or Control4?',
		status: 'published',
		a: 'We design on Savant, Crestron and Control4, and recommend the platform that suits how you live, not the logo. Savant centers on personal scenes for every member of the household, Control4 unifies lighting, entertainment, shades and security room by room, and Crestron brings enterprise-grade reliability to the most demanding estates. Whichever sits at the heart of the residence, it is specified, programmed and cared for by the same team.',
		basis:
			'/control-systems/ intro: "We design Savant, Crestron and Control4 systems"; /brands/: "recommend the one that suits how you live, not the logo", the platform lines ("Personal scenes for every member of the household", "Lighting, entertainment, shades and security, unified room by room", "Enterprise-grade reliability for the most demanding estates") and "specified, programmed and cared for by the same team".',
	},
	{
		q: 'Can each person in the household have their own settings?',
		status: 'published',
		a: 'Yes. Scenes, schedules and interfaces are configured around the rooms and routines that matter to each person. On Savant, every member of the household can have an individual profile, with their own favorite rooms, custom scenes and interface.',
		basis:
			'/brands/control4/: "Your interfaces, scenes, schedules, and automations can be configured around the rooms, routines, and experiences that matter most to you"; /brands/savant/: "Create individual profiles, favorite rooms, custom scenes, and interfaces tailored to each person in the home."',
	},
	{
		q: 'How do you approach privacy with voice control?',
		status: 'published',
		a: 'For voice, we integrate Josh.ai, a natural-language platform that prioritizes local and edge-based processing for a more secure, privacy-conscious experience. It understands flexible, conversational requests, and its architectural microphones are designed to stay visually discreet.',
		basis:
			'/brands/josh-ai/: "Local and edge-based processing are prioritized to create a more secure and privacy-conscious smart-home experience"; "designed to understand flexible requests"; "an architectural microphone designed to remain visually discreet".',
	},
	{
		q: 'Should the system be planned during design, or can it be added to an existing home?',
		status: 'published',
		a: 'Either. We work on new builds, renovations and existing homes. When we join early, the system is planned into the architecture from concept through construction, in step with your architect and designer, rather than bolted on after the fact.',
		basis:
			'/get-started/: "New build, renovation or an existing home"; /design-partners/: "From concept through construction, we help translate technology requirements into the architectural plan — not bolt it on after the fact"; homepage How We Work: "in step with your architect and designer".',
	},
	{
		q: 'Can the system grow with us later?',
		status: 'published',
		a: 'Yes. Every platform we design on is built to scale. Control4 can begin with a single room and expand as your needs and technology evolve, Savant supports everything from focused room automation to a fully customized whole-property system, and Crestron is designed to evolve with the home and new technologies.',
		basis:
			'/brands/control4/: "Start with a single room or create a complete whole-home system that can expand as your needs and technology evolve"; /brands/savant/: "projects ranging from focused room automation to highly customized whole-property systems"; /brands/crestron/: "A scalable platform designed to evolve with your home and new technologies."',
	},
	{
		q: 'What does a whole-home control system typically cost?',
		status: 'needs-client',
		clientPrompt:
			'Give an honest typical investment range for whole-home control in the kind of residence you usually work on (say, a 6,000 to 12,000 sq ft home), and what moves it up or down: number of rooms, platform, touch panels versus keypads, new build versus existing home. Should the answer also point visitors to the HTA Budget Calculator for a first planning range?',
	},
	{
		q: 'How long does design and installation take?',
		status: 'needs-client',
		clientPrompt:
			'From first consultation to handover, how long does a typical control project take, roughly split into design, rough-in wiring, installation and programming, and commissioning? How does it differ for a new build (tied to the construction schedule) versus an existing home?',
	},
	{
		q: 'What happens if the internet or the power goes out?',
		status: 'needs-client',
		clientPrompt:
			'When the internet is down, what keeps working inside the house (keypads, touch panels, scenes, schedules) and what pauses (remote app access, streaming, any cloud voice)? For a power cut, do you install battery backup for the equipment rack and network, and roughly how long does it last? Does everything come back on its own when power returns?',
	},
	{
		q: 'How do you keep the system and our home network secure?',
		status: 'needs-client',
		clientPrompt:
			'How do you protect the control system and the home network: a dedicated or separated network, firewall, secure remote access, passwords and user accounts, software updates? Who on your team can connect remotely, and does the homeowner approve or see that access?',
	},
	{
		q: 'Can you work with equipment we already have, or take over a system someone else installed?',
		status: 'needs-client',
		clientPrompt:
			'Can you bring equipment the family already owns (televisions, speakers, thermostats, cameras, other smart devices) into the new system? Do you take over systems installed by another company, and if so is there an assessment first, and is it charged? Is there anything you will not take on?',
	},
];

export default faqs;
