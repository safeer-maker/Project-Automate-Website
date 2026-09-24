// Questions for Estate Security, the hub of the Security & Access family.
// These stay with the system as a whole; cameras, entry and sensors each keep
// their own questions on their own pages, so none is asked twice.
//
// `published` answers only restate what the site already says (`basis` names
// where). Anything that needs a new fact waits for the client: kept here for
// the client document, never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'What does an estate security system include?',
		status: 'published',
		a: 'Several layers, designed as one. Cameras watch every approach, access control and a video intercom manage the gates and doors, intrusion sensors guard the perimeter and the interior, and landscape lighting keeps paths and facades lit after dark. At the centre, an intelligent alarm detects, alerts and responds the moment something changes.',
		basis:
			'/security-systems/ intro ("alarms, cameras, gates and access control as a single system") and "Intelligent Alarms" ("detect, alert and respond the moment something changes"); /intrusion-detection-systems/ meta ("Perimeter and interior intrusion detection"); blog "3 Unique Security Solutions" (security landscape lighting "helps dissuade potential intruders").',
	},
	{
		q: 'Will security be a separate app from the rest of the house?',
		status: 'published',
		a: 'No. Cameras, gates, locks and the alarm answer to the same interface as your lighting, shades and climate, on a touch panel, a keypad or your phone. One command can secure the whole property.',
		basis:
			'/security-systems/ intro ("answering to the same interface as the rest of the home"); /control-systems/ "One Touch, Every Room" ("Lights, shades, climate, music, video and security respond as one, from a touch panel, your phone ... or a custom keypad"); /brands/crestron/ ("Secure the property ... with a single command").',
	},
	{
		q: 'Which security platforms do you work with?',
		status: 'published',
		a: 'We are Alarm.com and Qolsys certified. Security then runs through the same Savant, Crestron or Control4 system we design for the rest of the home, so everything answers to one interface.',
		basis:
			'/design-partners/ credentials ("Alarm.com Certified", "Qolsys Certified"); /control-systems/ intro ("We design Savant, Crestron and Control4 systems that bring every part of the residence together"); /brands/control4/ ("arm the security system through one simple command").',
	},
	{
		q: 'Is landscape lighting really part of security?',
		status: 'published',
		a: 'Yes, and one of its quietest parts. Landscape lighting can come on by itself as the sun goes down, which discourages intruders and keeps paths safe to walk. After dark, when a camera or sensor notices movement at the edge of the property, path and facade lighting rise with it.',
		basis:
			'Blog "3 Unique Security Solutions" ("schedule the outdoor lights to turn on automatically as the sun goes down. This helps dissuade potential intruders"); /outdoor-living/ scene "After Dark" ("Landscape and security lighting take over quietly"); "Perimeter watch" scenario (src/data/integrations.ts, shown on this page).',
	},
	{
		q: 'Do you work on existing homes as well as new builds?',
		status: 'published',
		a: 'Yes. We work on new builds, renovations and existing homes alike. Every system is planned around the architecture and interiors, in step with your architect and designer.',
		basis:
			'/get-started/ "Your residence" ("New build, renovation or an existing home"); homepage How We Work, Design ("Every system is planned around the architecture and interiors, in step with your architect and designer").',
	},
	{
		q: 'Who looks after the system once it is installed?',
		status: 'published',
		a: 'We do. After handover our concierge team stays on to care for the home, and every membership includes 24/7 Basic Support. A major security concern counts as an urgent issue and receives priority response according to your membership.',
		basis:
			'Homepage How We Work, Deliver ("Our concierge team then stays on to care for it"); /technology-support-membership/ ("24/7 Basic Support on every plan"; FAQ "What qualifies as an urgent issue?": "a major security concern ... Urgent requests receive priority response according to your membership").',
	},
	{
		q: 'What does an estate security system cost?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range for whole-property security on a $5M+ Los Angeles estate (cameras, gate and door access with intercom, alarm sensors, all tied into the control system). Say what moves it up or down: size of the property, number of gates, doors and cameras, new build or existing home. You may point people to the HTA calculator (/budget-calculator/) for an early planning range.',
	},
	{
		q: 'How long does it take to design and install?',
		status: 'needs-client',
		clientPrompt:
			'From first consultation to a working system, how long does it usually take for a new build and for an existing home? Which parts happen during construction (wiring) and which at the end? How many days on site for an occupied home, and can the family stay in the house during the work?',
	},
	{
		q: 'What happens in a power cut or an internet outage?',
		status: 'needs-client',
		clientPrompt:
			'Does the alarm keep working and still report alarms without power or internet (battery backup, cellular backup)? For roughly how long? Do cameras keep recording? Do the gates and locks still work, and how does the family get in? Do you put the network and recorders on battery backup (UPS) as standard?',
	},
	{
		q: 'Can we start with some layers and add others later?',
		status: 'needs-client',
		clientPrompt:
			'Can a client begin with, say, cameras and gate access and add alarm sensors, more cameras or landscape lighting later? What should be wired or planned now so that adding later is clean and does not mean opening walls?',
	},
];

export default faqs;
