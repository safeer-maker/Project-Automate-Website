// Questions for /outdoor-living/. A `published` answer only restates what the
// site already says (see `basis`); everything that needs a new fact waits for
// the client (`needs-client`) and is never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'What does outdoor living technology include?',
		status: 'published',
		a: 'Music, film, lighting and control, carried out to the terraces, pools and gardens. Landscape speakers and subwoofers bring balanced sound outside, weather-resistant screens bring film and sport, and lighting scenes draw the architectural, landscape, path, pool and accent lighting together. Networking and control are designed in, so it all works as one.',
		basis:
			'/outdoor-living/: hero "Music, film, light and control, extended to the terraces, pools and gardens"; capabilities "Landscape speakers and subwoofers", "Weather-resistant screens, audio, networking and control are designed and installed as one", "architectural, landscape, pathway, pool and accent lighting together as one".',
	},
	{
		q: 'Will we see the speakers and equipment?',
		status: 'published',
		a: 'Very little of it, beyond a screen where you want one. The technology is quietly concealed in the landscape, and speakers and subwoofers are placed for even coverage, so the music is clear and balanced with no equipment to catch the eye.',
		basis:
			'/outdoor-living/: intro "quietly concealed in the landscape"; capability "with no equipment to catch the eye" and "placed for even coverage across the property".',
	},
	{
		q: 'How is everything controlled outside?',
		status: 'published',
		a: 'With a single touch. Scenes for dining, relaxing, entertaining or securing the property after dark set the lighting, the music and the screen together, from your phone, a keypad or your voice. The terrace answers to the same system as the rooms inside, so one scene can carry the evening indoors and out.',
		basis:
			'/outdoor-living/: capability "Set the Mood With a Single Touch" ("Scenes for dining, relaxing, entertaining or securing the property after dark"); /outdoor-lighting-audio/: "Played from your phone, a keypad or your voice"; Entertaining scenario (src/data/integrations.ts, shown on this page): "One scene brings light, music and climate into balance for guests, indoors and out".',
	},
	{
		q: 'Do you work with our architect and landscape designer?',
		status: 'published',
		a: 'Yes. Every system is planned around the architecture, in step with your architect and designer. Outside, we plan lighting and sound alongside your landscape designer, so fixtures, speakers and wiring are resolved early, never added as an afterthought.',
		basis:
			'Homepage, How we work (Design): "Every system is planned around the architecture and interiors, in step with your architect and designer"; /outdoor-lighting-audio/ After Dark: "We plan lighting and sound alongside your architect and landscape designer, so fixtures, speakers and wiring are resolved early, never added as an afterthought."',
	},
	{
		q: 'Who looks after the system once it is installed?',
		status: 'published',
		a: 'We do. We commission every scene, walk you through it and hand over complete documentation, and our concierge team then stays on to care for it. A Technology Support Membership adds 24/7 support and priority service, and many requests are resolved remotely, without waiting for a visit.',
		basis:
			'Homepage, How we work (Deliver): "We commission every scene, walk you through the home and hand over complete documentation. Our concierge team then stays on to care for it."; /technology-support-membership/: "24/7 Basic Support on every plan", "Priority Service", "Many requests are resolved remotely, without waiting for a visit."',
	},
	{
		q: 'What does an outdoor living system typically cost?',
		status: 'needs-client',
		clientPrompt:
			'Give a typical investment range, or a starting point, for a few common scopes: terrace and pool audio only; audio with landscape lighting; a full outdoor entertainment area with a screen. Name what moves the number most (number of outdoor areas, screens, trenching and cabling, property size). Say whether the answer should point to the investment calculator on the site, which lists "Outdoor Living" as a system.',
	},
	{
		q: 'How long does an outdoor project take, and when should we bring you in?',
		status: 'needs-client',
		clientPrompt:
			'The typical time from first consultation to handover for an outdoor project, and the best moment to involve you on a new build or a landscape renovation (for example, before hardscape, trenching or planting). Mention anything that commonly delays outdoor work, such as landscape schedules or permits.',
	},
	{
		q: 'Can you add this to a garden and terrace that are already finished?',
		status: 'needs-client',
		clientPrompt:
			'Whether you retrofit established gardens and finished hardscape; how cable reaches speakers, screens and lights without lifting paving (boring under paths, existing conduit, wireless where it suits); what disruption and restoration the homeowner should expect; and anything that makes a retrofit impractical.',
	},
	{
		q: 'How does the equipment stand up to sun, rain and salt air?',
		status: 'needs-client',
		clientPrompt:
			'What "weather-ready" means in practice: the brands and weather ratings of the outdoor speakers and screens you specify; whether screens suit full sun or only covered areas; what changes for oceanfront homes in Malibu, Manhattan Beach or Palos Verdes; expected lifespan; and the manufacturer or workmanship warranty that applies.',
	},
	{
		q: 'What happens outside if the power or the internet goes down?',
		status: 'needs-client',
		clientPrompt:
			'Whether outdoor lighting, music and scenes keep working without internet (local control or cloud), whether the control equipment is on battery backup, what the landscape and security lighting do during a power cut, and how everything comes back when power returns.',
	},
];

export default faqs;
