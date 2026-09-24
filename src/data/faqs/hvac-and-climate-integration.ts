// Questions for /hvac-and-climate-integration/ (Climate Control).
//
// Published answers restate what the site already says (see each `basis`).
// Anything that needs a new fact stays `needs-client` and is never rendered;
// its `clientPrompt` is what the client is asked to cover in his own answer.
// Most climate questions turn on the mechanical system and on where the
// studio's scope ends, so most wait for the client.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'How do we adjust the temperature day to day?',
		status: 'published',
		a: 'From the same interface as the rest of the home, never a separate app or thermostat panel: a touch panel, a keypad, your phone or your voice. With Josh.ai, a single natural request can set the temperature along with the lights, shades and music.',
		basis:
			'/hvac-and-climate-integration/ features: "within one elegant interface, never a separate app or thermostat panel"; /control-systems/ features: "from a touch panel, your phone, your voice or a custom keypad"; /brands/josh-ai/: "Dim the lights, lower the shades, adjust the temperature, play music, or prepare the cinema using natural conversation."',
	},
	{
		q: 'Which control platforms can manage the climate?',
		status: 'published',
		a: 'Every platform we design on brings climate into the same interface as the lighting, shades, entertainment and security: Savant, Crestron, Control4 and Basalte Home alike. We recommend the one that suits how you live, not the logo.',
		basis:
			'/brands/savant/: "Control lighting, climate, entertainment, security, shades"; /brands/crestron/: "Manage lighting, shades, entertainment, climate, and security from one elegant interface"; /brands/control4/: "Manage lighting, entertainment, climate, shades, security, and more"; /brands/basalte/: "Basalte Home brings your lighting, shades, entertainment, climate and security into one intuitive system"; /brands/: "recommend the one that suits how you live, not the logo".',
	},
	{
		q: 'Will you coordinate with our builder and HVAC contractor?',
		status: 'published',
		a: 'Yes. We coordinate one technology scope from design development through final walkthrough, so the trades stay aligned and the timeline stays intact. Our low-voltage rough-in and trim are scheduled in step with the rest of the site.',
		basis:
			'/design-partners/: "One coordinated technology scope from design development through final walkthrough, so trades stay aligned and timelines stay intact" and "Coordinated rough-in and trim schedules that keep low-voltage work moving in step with the rest of the site."',
	},
	{
		q: 'Do you install and service the heating and cooling equipment itself?',
		status: 'needs-client',
		clientPrompt:
			'Do you supply and install HVAC equipment, or do you integrate the equipment the mechanical or HVAC contractor installs? Who provides the thermostats and sensors? After move-in, if a room is too warm, who does the owner call: you or their HVAC company, and do you coordinate with them?',
	},
	{
		q: 'Can every room be set to its own temperature?',
		status: 'needs-client',
		clientPrompt:
			'Can every room have its own temperature, or does that depend on how many zones the HVAC system has? What should the architect or mechanical engineer plan early (zoning, sensor placement) so room-by-room comfort is possible?',
	},
	{
		q: 'Will it work with the HVAC system we already have, or have specified?',
		status: 'needs-client',
		clientPrompt:
			'Which kinds of HVAC and which thermostat brands do you integrate: conventional forced air, ductless mini-splits, radiant floor heating, humidity control? Can you integrate the existing system in a finished home, and are there systems you cannot connect?',
	},
	{
		q: 'Can the thermostats be discreet, or matched to our keypads?',
		status: 'needs-client',
		clientPrompt:
			'Can wall thermostats be hidden, replaced by small remote sensors, or matched in finish to the home\'s keypads? What do you usually recommend to interior designers who want as little on the wall as possible?',
	},
	{
		q: 'Will climate integration lower our energy use?',
		status: 'needs-client',
		clientPrompt:
			'What can you honestly say here: the climate easing back when the house is empty, schedules, shades that follow the sun and ease the cooling? Would you rather make no savings claim at all? No figures will be published unless you supply them and stand behind them.',
	},
	{
		q: 'What does climate integration typically cost?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range for bringing climate into the control system, per zone or for a typical home, and what changes it: number of zones, thermostat or sensor type, and whether a control system is already in place.',
	},
	{
		q: 'If the internet or the control system goes down, can we still change the temperature?',
		status: 'needs-client',
		clientPrompt:
			'If the internet or the main control processor is offline, do the thermostats keep working on their own so the family can still change the temperature? What happens during a power cut, and does everything recover on its own afterwards?',
	},
];

export default faqs;
