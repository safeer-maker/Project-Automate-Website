// Questions for Access Control & Intercom: who comes and goes, and how they
// are received at the gate and the door. Questions about the security system
// as a whole live on /security-systems/.
//
// `published` answers only restate what the site already says (`basis` names
// where). Anything that needs a new fact waits for the client: kept here for
// the client document, never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Can I answer the gate from my phone?',
		status: 'published',
		a: 'Yes, from anywhere. When someone calls at the gate, the video intercom appears on the nearest touch panel, the television or your phone, so you can see them, speak with them and let them in without going to the door.',
		basis:
			'"A guest at the gate" scenario (src/data/integrations.ts: "the video intercom appears on the nearest touch panel, the television or your phone"); /access-control-and-intercom/ "Smart Entry" ("See, speak with and admit visitors from anywhere").',
	},
	{
		q: 'Will the gate open for us without a remote?',
		status: 'published',
		a: 'It can. Gates and doors recognize you and open as you approach, and a familiar car is recognized at the gate, so the family arrives home without a pause.',
		basis:
			'/access-control-and-intercom/ scene "Arriving Home" ("Gates and doors recognize you and open as you approach") and intro ("Family is welcomed without a pause"); "Arrival" scenario ("A familiar car is recognized at the gate, and it opens as you approach").',
	},
	{
		q: 'How do housekeepers, staff and deliveries get in?',
		status: 'published',
		a: 'On your terms. Staff can have access on a schedule, couriers a one-time pass and the family mobile credentials, each granted without leaving what you are doing. Entry activity can be reviewed whenever you like.',
		basis:
			'/access-control-and-intercom/ meta ("video intercom, mobile credentials and staff schedules"), scene "Deliveries" ("Grant one-time or scheduled access to couriers and staff, without leaving what you are doing") and scene "Away" ("Review entry activity and alerts").',
	},
	{
		q: 'Can the entry station be designed to suit the architecture?',
		status: 'published',
		a: 'Yes. Every system is planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline. Arrival should feel composed, never dominated by security equipment.',
		basis:
			'Homepage How We Work, Design ("Every system is planned around the architecture and interiors, in step with your architect and designer, down to each keypad and sightline"); /success-stories/pacific-horizon-residence/ ("without making the residence feel dominated by security equipment").',
	},
	{
		q: 'Who do I call if the gate or the intercom stops working?',
		status: 'published',
		a: 'Our support team, day or night: every membership includes 24/7 Basic Support. If the gate or the intercom needs attention, members move to the front of the queue, and many requests are resolved remotely, without waiting for a visit.',
		basis:
			'/technology-support-membership/ ("24/7 Basic Support on every plan"; How Support Works: "We diagnose the issue and resolve it remotely whenever possible"); "Remote assistance" scenario (src/data/integrations.ts).',
	},
	{
		q: 'Can you work with our existing gate, gate operator and door hardware?',
		status: 'needs-client',
		clientPrompt:
			'Which gate operators, locks and door hardware can you connect to, and when do you recommend replacing them? Do you coordinate with the gate or fence contractor and the locksmith, or supply that hardware yourselves?',
	},
	{
		q: 'What happens to the gate and locks in a power cut or internet outage?',
		status: 'needs-client',
		clientPrompt:
			'Can the family still get in (keypad, physical key, battery backup on the gate operator and locks)? Does the intercom still work without internet? Does the gate stay closed or open when the power is out?',
	},
	{
		q: 'Which intercom and smart lock brands do you install?',
		status: 'needs-client',
		clientPrompt:
			'Name the entry station / video intercom and smart lock brands you usually use, and say whether finishes can be matched to the architecture and door hardware.',
	},
	{
		q: 'When should access control be planned in a new build?',
		status: 'needs-client',
		clientPrompt:
			'At what stage should the architect or builder bring you in (for example before the driveway and gate are trenched)? What must be in place early: cable and power to the gate and entry post, door preparation for smart locks, anything else?',
	},
	{
		q: 'What does access control and intercom cost?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range for a gated estate: entry station with video intercom at the gate, smart locks on the main doors, mobile credentials and integration with the control system. Are there any monthly fees?',
	},
];

export default faqs;
