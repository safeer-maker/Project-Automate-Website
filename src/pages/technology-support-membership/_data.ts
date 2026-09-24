// Membership plans and FAQ, shared by the page sections and the JSON-LD in
// index.astro so the structured data can never drift from what is on screen.
// The underscore keeps this module out of Astro's routing.
//
// Prices, response times and inclusions are the client's published terms —
// reword for tone only, never change a figure without confirming it.

export interface Plan {
	name: string;
	/** Monthly price in USD, used for display and for the Offer in JSON-LD. */
	price: number;
	description: string;
	features: string[];
	featured?: boolean;
}

export const plans: Plan[] = [
	{
		name: 'Foundation Care',
		price: 125,
		description:
			'24/7 phone and email support with a guaranteed 30-minute response from Basic Support, plus access to our Advanced Support team on a first-come, first-served basis.',
		features: [
			'$125 per month, billed monthly',
			'Annual membership available, with a 10% saving',
			'24/7 Basic Support',
			'Guaranteed 60-minute Basic Support response',
			'Advanced Support, 9 to 5, Monday to Friday (remote and on-site)',
			'Advanced Support at $195/hr',
			'Concierge services at $195/hr',
		],
	},
	{
		name: 'Premier Care',
		price: 300,
		description:
			'24/7 Basic Support with guaranteed same-day on-site response. You move to the head of the line with our Advanced Support team, who begin work within 4 hours (or by noon the next business day if the issue arises after hours). Complimentary concierge service during business hours is included.',
		features: [
			'$300 per month, billed monthly',
			'Annual membership available, with a 10% saving',
			'7-day in-home and priority service',
			'24/7 Basic Support',
			'Guaranteed 30-minute Basic Support response',
			'1-hour Advanced Support response for urgent issues',
			'Advanced Support at $195/hr',
			'Complimentary concierge services during business hours',
			'Prioritized on-site support, 7 days a week',
		],
		featured: true,
	},
];

export const faqs = [
	{
		q: 'What is included in Basic Support?',
		a: 'Basic Support includes priority assistance during business hours, routine maintenance guidance, troubleshooting and access to member-only support resources. It is designed to keep every system running smoothly, with dependable help whenever you need it.',
	},
	{
		q: 'What qualifies as an urgent issue?',
		a: 'Any problem that causes a complete service outage, a major security concern, or significantly affects how you use your home. Urgent requests receive priority response according to your membership.',
	},
	{
		q: 'Are on-site service charges included?',
		a: 'On-site visits are not included in standard memberships unless your plan states otherwise. Members receive preferred on-site rates and priority scheduling whenever a visit is required.',
	},
	{
		q: 'Can I change my membership later?',
		a: 'Yes. You may move between memberships at any time. Changes usually take effect at the start of your next billing cycle, and upgrades can often begin immediately.',
	},
	{
		q: 'How does annual billing work?',
		a: 'Annual billing covers a full year of membership in a single payment, with a 10% saving compared with monthly billing.',
	},
];
