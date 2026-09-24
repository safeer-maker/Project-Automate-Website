// Questions for /technology-support-membership/ (Concierge Care).
//
// The five published answers are the client's own membership FAQ, moved here
// verbatim from the page (it now renders them through ServiceFaq). Their
// wording and terms are his: reword for tone only, never change a term
// without confirming it. The rest wait for the client (`needs-client`, never
// rendered); each `clientPrompt` is what he is asked to cover.
import type { Faq } from './index.ts';

const BASIS = '/technology-support-membership/ FAQ, the client\'s published membership copy';

const faqs: Faq[] = [
	{
		q: 'What is included in Basic Support?',
		status: 'published',
		a: 'Basic Support includes priority assistance during business hours, routine maintenance guidance, troubleshooting and access to member-only support resources. It is designed to keep every system running smoothly, with dependable help whenever you need it.',
		basis: BASIS,
	},
	{
		q: 'What qualifies as an urgent issue?',
		status: 'published',
		a: 'Any problem that causes a complete service outage, a major security concern, or significantly affects how you use your home. Urgent requests receive priority response according to your membership.',
		basis: BASIS,
	},
	{
		q: 'Are on-site service charges included?',
		status: 'published',
		a: 'On-site visits are not included in standard memberships unless your plan states otherwise. Members receive preferred on-site rates and priority scheduling whenever a visit is required.',
		basis: BASIS,
	},
	{
		q: 'Can I change my membership later?',
		status: 'published',
		a: 'Yes. You may move between memberships at any time. Changes usually take effect at the start of your next billing cycle, and upgrades can often begin immediately.',
		basis: BASIS,
	},
	{
		q: 'How does annual billing work?',
		status: 'published',
		a: 'Annual billing covers a full year of membership in a single payment, with a 10% saving compared with monthly billing.',
		basis: BASIS,
	},
	{
		q: 'Can I become a member if PROJECT: automate did not install my system?',
		status: 'needs-client',
		clientPrompt:
			'Can owners whose system was installed by another company join? If so, is there an onboarding visit or assessment first, is it charged, and are there systems or brands you will not support?',
	},
	{
		q: 'Do you monitor the system, and catch problems before we notice them?',
		status: 'needs-client',
		clientPrompt:
			'Do you remotely monitor members\' systems (device status, network health) and act before the owner notices a problem? Which plan includes it? Your Journal post "Our Priority Is You" says monitoring comes with the higher-end plans; confirm whether that is still true.',
	},
	{
		q: 'Can your team see our cameras, or how we use the home?',
		status: 'needs-client',
		clientPrompt:
			'When your team monitors or connects remotely, what can it see and what not? The Journal post "Our Priority Is You" says you see device status and network performance only, never how devices are used, what is watched, or camera footage. Confirm that is accurate today, and say whether owners approve each remote session.',
	},
	{
		q: 'Are software updates, repairs and replacement equipment covered?',
		status: 'needs-client',
		clientPrompt:
			'Are software and firmware updates included in membership? Are repairs, parts or replacement equipment included, discounted, or billed separately? How does the manufacturer\'s warranty work alongside membership?',
	},
	{
		q: 'Is there a minimum term, and how would I cancel?',
		status: 'needs-client',
		clientPrompt:
			'Is there a minimum commitment on monthly memberships? How much notice is needed to cancel, and what happens to an annual membership cancelled part-way through the year?',
	},
];

export default faqs;
