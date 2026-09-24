// Questions for /lighting-control-systems/. Published answers only restate
// what the site already says (see each `basis`); everything that needs a new
// fact waits for the client's own answer and is never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Should our lighting control be wired or wireless?',
		status: 'published',
		a: 'It comes down to where the project stands. A wired system runs every lighting circuit to a central panel out of sight, clearing the walls of switch banks so keypads go only where they are wanted, and it is best planned from the start of a new build or major renovation. A wireless system fits existing wall boxes without opening walls, so it suits a finished home, and it can be adjusted later just as simply.',
		basis:
			'Journal, /should-i-choose-lutron-wired-or-wireless-lighting-control/: wired "wires all lighting loads to a centralized control panel", "eliminate banks of switches… selectively choose where wall keypads go", "a fantastic choice for new builds… at the start of the build process"; wireless "install into existing wall boxes", "doesn\'t require any wire reruns", "make changes down the line without needing to open walls"; "comes down to the project\'s timeline and scope". /success-stories/: "Planning a new residence or major renovation?… integrate technology from the beginning".',
	},
	{
		q: 'Which lighting brands do you work with?',
		status: 'published',
		a: 'We design lighting control with Lutron: HomeWorks and RadioRA 3 for control, Ketra for tunable light, and keypads from Lutron or Basalte. It can then join the rest of the home through Savant, Crestron or Control4, so the lights answer to the same panels and app as everything else. We recommend the platform that suits how you live, not the logo.',
		basis:
			'/lighting-control-systems/ intro: "We design it with Lutron and Ketra". /brands/lutron/: "powered by Ketra, HomeWorks, and RadioRA 3", "Works alongside leading smart home platforms". /brands/basalte/: "Control lights, shades, scenes and music through intuitive touch-sensitive surfaces". /control-systems/: "We design Savant, Crestron and Control4 systems that bring every part of the residence together". /brands/: "recommend the one that suits how you live, not the logo".',
	},
	{
		q: 'What is Ketra, and where does tunable light make a difference?',
		status: 'published',
		a: 'Ketra is Lutron’s tunable, full-spectrum light. It can follow the pattern of the sun, cool and bright in the morning and warm amber in the evening, and its Vibrancy setting tunes white light to bring out art, texture and rich materials. Living spaces and rooms built around art tend to benefit most, and because fixtures are placed and tuned room by room, it is best planned with the rest of the lighting design.',
		basis:
			'Journal, /how-ketra-lighting-design-can-radically-change-your-indoor-experience/: "tunable, full-spectrum lighting", Vibrancy "tune white light… artwork", "living spaces and art-focused rooms tend to be natural starting points", "best planned alongside the rest of your lighting design". Journal, /why-interior-designers-should-partner-with-a-lutron-dealer/: "mimicking the patterns of the sun… cool, bright lighting… in the morning to warm, amber lighting… in the evening". /brands/lutron/: "Ketra tunable light".',
	},
	{
		q: 'What is a typical investment for lighting control?',
		status: 'needs-client',
		clientPrompt:
			'Give a realistic range for a $5M+ Los Angeles residence: whole-home lighting control in a new build (wired) and in an existing home (wireless), and what Ketra adds. Say what moves the figure most (number of rooms and circuits, keypad finishes, Ketra fixtures, exterior lighting) and whether the HTA calculator on the site is a fair starting point. A range or "from" figure is fine, or say you prefer to discuss it in consultation.',
	},
	{
		q: 'How long do design and installation take?',
		status: 'needs-client',
		clientPrompt:
			'Typical time from first consultation to handover for (a) a new build, where wiring goes in at rough-in and programming at the end, and (b) an existing home. Include roughly how long programming and commissioning take on site, any lead times for keypads or Ketra fixtures, and how early in a build you need to be involved.',
	},
	{
		q: 'Will you work with our architect and interior designer?',
		status: 'published',
		a: 'Yes, and the earlier the better. Every system is planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline. Bringing us in before fixtures and finishes are locked in lets the lighting be drawn into the plans rather than added afterward.',
		basis:
			'Homepage and /about-us/ process, Design: "planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline". /design-partners/: "translate technology requirements into the architectural plan — not bolt it on after the fact". Journal, /why-interior-designers-should-partner-with-a-lutron-dealer/: "early in the design process — before fixtures and finishes are locked in".',
	},
	{
		q: 'Do you design the lighting layout itself, or work alongside a lighting designer?',
		status: 'needs-client',
		clientPrompt:
			'Do you plan fixture types and placement yourselves, or control the fixtures an independent lighting designer or the architect specifies (or both, depending on the project)? Who selects and supplies the fixtures, including Ketra? One or two sentences on how the handoff with a lighting designer usually works.',
	},
	{
		q: 'What happens to the lights if the internet or power goes down?',
		status: 'needs-client',
		clientPrompt:
			'Do keypads and scenes keep working with no internet (is control processed locally in the home)? What pauses without internet (the app away from home, voice control)? In a power cut, what do the lights do when power returns, is the lighting processor on battery backup (UPS), and do you connect to a generator? Note any difference between wired and wireless systems.',
	},
	{
		q: 'Can we start with a few rooms, or keep lighting we already have, and add more later?',
		status: 'needs-client',
		clientPrompt:
			'Can a project be phased (for example, main living areas first, then bedrooms or the garden)? Can you take over or extend an existing Lutron system (Caséta, RadioRA 2, HomeWorks) or one installed by another company, and what are the limits? After handover, how are scene changes handled: remotely, as part of a Technology Support Membership, or billed by the hour?',
	},
	{
		q: 'Who looks after the lighting once we have moved in?',
		status: 'published',
		a: 'The same team that designed it. We commission every scene, walk you through the home and hand over complete documentation, and our concierge team then stays on to care for it. Every Technology Support Membership includes 24/7 Basic Support.',
		basis:
			'Homepage process, Deliver: "We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it." /technology-support-membership/: "24/7 — Basic Support on every plan". /brands/: "specified, programmed and cared for by the same team".',
	},
];

export default faqs;
