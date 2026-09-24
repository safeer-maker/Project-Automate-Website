// Questions for Intrusion Detection, the sensor layer of estate security:
// what the sensors cover, arming, false alarms and who responds. Questions
// about the security system as a whole live on /security-systems/.
//
// `published` answers only restate what the site already says (`basis` names
// where). Anything that needs a new fact waits for the client: kept here for
// the client document, never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Which sensors are included, and will we see them?',
		status: 'published',
		a: 'Motion detectors, glass-break sensors and perimeter controls, placed with care so they cover every approach to the residence and stay out of sight. They rest through ordinary life and act the moment something is wrong.',
		basis:
			'/intrusion-detection-systems/ "Precise Sensors" ("Motion detectors, glass-break sensors and perimeter controls, placed with care so they cover every approach and stay out of sight") and intro ("They rest through ordinary life ... and act the moment something is wrong").',
	},
	{
		q: 'Can I arm and disarm the system from my phone?',
		status: 'published',
		a: 'Yes. One touch arms every sensor across the property, confirmed instantly on your device, and the whole system can be monitored and managed remotely, from anywhere. Coming home, disarming is a single touch away.',
		basis:
			'/intrusion-detection-systems/ scenes "Arming" ("One touch arms every sensor across the property, confirmed instantly on your device") and "Return Home" ("disarming is a single touch away"); "Remote Management" ("Monitor and manage the whole system remotely").',
	},
	{
		q: 'What happens when a sensor is triggered?',
		status: 'published',
		a: 'An instant alert reaches the device you prefer, so you know the moment something is wrong, wherever you are. After dark, a sensor at the edge of the property can also raise the path and facade lighting while the cameras record.',
		basis:
			'/intrusion-detection-systems/ "Instant Alerts" ("Real-time notifications, delivered at once to the device you prefer") and scene "Perimeter Breach"; "Perimeter watch" scenario (src/data/integrations.ts: "path and facade lighting rise, the cameras record").',
	},
	{
		q: 'Is the alarm professionally monitored, and who responds?',
		status: 'needs-client',
		clientPrompt:
			'Do you provide 24/7 professional monitoring (your own monitoring centre or a partner)? Is it a separate monthly fee? When an alarm goes off, who is contacted and in what order, is police dispatch requested, and can camera footage be used to confirm the alarm? Can you provide the alarm certificate that home insurers often ask for?',
	},
	{
		q: 'How do you avoid false alarms with pets, staff or guests in the house?',
		status: 'needs-client',
		clientPrompt:
			'How are sensors chosen and set up to avoid false alarms (pet-friendly motion sensors, zones, entry delays)? How do staff and guests get their own codes? What happens if someone sets the alarm off by mistake?',
	},
	{
		q: 'Can the doors and windows be armed at night while we move around inside?',
		status: 'needs-client',
		clientPrompt:
			'Do you set up separate modes (for example Home, Night and Away) so doors, windows and the perimeter are armed while the interior motion sensors rest? Can the Goodnight scene arm the night mode automatically?',
	},
	{
		q: 'What if the power or internet goes out, or someone tampers with the system?',
		status: 'needs-client',
		clientPrompt:
			'Does the alarm panel have battery backup and a cellular connection, so it keeps working and still reports an alarm without power or internet? For roughly how long? Is there an alert if someone tries to remove a sensor or the panel?',
	},
	{
		q: 'Are the sensors wired or wireless, and can they go into a finished home?',
		status: 'needs-client',
		clientPrompt:
			'Do you use wired sensors in new builds and wireless ones in finished homes? How discreet are they (for example contacts recessed into the door frame)? For wireless sensors, how long do batteries last and who replaces them?',
	},
	{
		q: 'Can the system also watch for smoke, carbon monoxide or water leaks?',
		status: 'needs-client',
		clientPrompt:
			'Do you install and connect smoke or heat, carbon monoxide and water-leak sensors (and automatic water shut-off) to the alarm, and are they monitored? Is there anything about fire-alarm codes or licensing a homeowner should know?',
	},
	{
		q: 'What does intrusion detection cost?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range for sensors on the doors, windows, glass and perimeter of a $5M+ estate, and any monthly monitoring fee.',
	},
];

export default faqs;
