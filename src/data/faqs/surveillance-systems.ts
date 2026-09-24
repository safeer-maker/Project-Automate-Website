// Questions for Surveillance, the camera layer of estate security: how the
// cameras look, what they tell you, and where the footage goes. Questions
// about the security system as a whole live on /security-systems/.
//
// `published` answers only restate what the site already says (`basis` names
// where). Anything that needs a new fact waits for the client: kept here for
// the client document, never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Will the cameras spoil the look of the house?',
		status: 'published',
		a: 'They should not. Each camera is placed with the architecture and landscape in mind, so it sees everything and is noticed by no one. The aim is greater awareness without the residence ever feeling dominated by security equipment.',
		basis:
			'/surveillance-systems/ intro ("Cameras should see everything and be noticed by no one. Each one is placed with the architecture and landscape in mind"); /success-stories/pacific-horizon-residence/ ("greater awareness without making the residence feel dominated by security equipment").',
	},
	{
		q: 'Will I get an alert every time the gardener or a courier arrives?',
		status: 'published',
		a: 'No. Facial recognition and automatic number plate recognition tell familiar arrivals from the unexpected, so the system speaks up only when it should. When it does, notice arrives by text, email or push notification, and only on the devices you choose.',
		basis:
			'/surveillance-systems/ "Facial Recognition" ("tell familiar arrivals from the unexpected, so the system speaks up only when it should") and "Real-Time Alerts" ("text, email or push notification, sent only to the devices you choose").',
	},
	{
		q: 'Can I see the cameras when I am away?',
		status: 'published',
		a: 'Yes. Every camera on the property can be viewed securely from anywhere, at any hour, and the moment something unexpected happens a notification reaches you at once.',
		basis:
			'/surveillance-systems/ "Remote Monitoring" ("Secure access to every camera on the property, from anywhere, at any hour") and scene "The Unexpected" ("a notification reaches you at once").',
	},
	{
		q: 'Do the cameras record all the time, or only when something moves?',
		status: 'published',
		a: 'They record continuously, in high definition, so the footage is there the moment it is needed rather than only when something happens to trigger a clip.',
		basis: '/surveillance-systems/ scene "Overnight" ("High-definition footage records continuously, ready the moment it is needed").',
	},
	{
		q: 'Where is the footage stored, and who can see it?',
		status: 'needs-client',
		clientPrompt:
			'Is video kept on a recorder inside the home, in the cloud, or both? How many days or weeks are kept as standard, and can that be extended? Who can see the footage (the family only, your support team only with permission?) and how is it protected? Mention your network and cybersecurity certifications (Sophos, Ruckus, Eero) if relevant.',
	},
	{
		q: 'What happens to the cameras if the internet or power goes down?',
		status: 'needs-client',
		clientPrompt:
			'Do cameras keep recording locally without internet? Are the recorder and network on battery backup, and for roughly how long? What can the family still see remotely during an internet outage, and what catches up afterwards?',
	},
	{
		q: 'Which cameras do you install, and how well do they see at night?',
		status: 'needs-client',
		clientPrompt:
			'Which camera brands or lines do you usually install, at what resolution, and how do they perform in low light and darkness? Are they wired (one cable for power and data) or wireless? Can housings be finished or colour-matched to the facade?',
	},
	{
		q: 'Can you work with the cameras we already have?',
		status: 'needs-client',
		clientPrompt:
			'Can you connect or reuse an existing camera system, or do you usually replace it? What decides that? Will you take over service of cameras another company installed?',
	},
	{
		q: 'What does a surveillance system cost, and are there monthly fees?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range for cameras on a $5M+ estate (per camera, or for a typical property), and say whether there are ongoing fees for cloud storage, recognition features or remote viewing, or none at all.',
	},
];

export default faqs;
