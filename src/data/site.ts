import { withBase } from '../lib/paths.ts';

type Link = { label: string; href: string };

const studioPhone = '(310) 740-5375';
const smsPhone = '(310) 402-4818';

/** Apply the deploy base to every internal href once, at the source. */
const linkify = (links: Link[]): Link[] =>
	links.map((link) => ({ ...link, href: withBase(link.href) }));

export const siteInfo = {
	name: 'PROJECT: automate',
	// Registered legal entity name — used for copyright lines and legal documents
	// (Privacy Policy, Terms & Conditions). "PROJECT: automate" is the public brand
	// name used everywhere else on the site.
	legalName: 'Project Automate Inc.',
	tagline: 'The art of invisible intelligence. Custom smart home systems for the world’s most refined residences.',
	url: 'https://projectautomate.com',
	email: 'sales@projectautomate.com',
	phones: [studioPhone, smsPhone],
	// Contact details for the SMS program, quoted in the Terms and Privacy
	// Policy. A2P 10DLC reviewers check that they match the brand registration,
	// so the footer shows this number only, and the legal pages use this email.
	smsPhone,
	legalEmail: 'josh@projectautomate.com',
	address: {
		line1: '1600 Rosecrans Ave Building 7, Suite 400',
		line2: 'Manhattan Beach, CA 90266',
	},
	// Also the business node's sameAs in BaseLayout. Each `icon` names its
	// logo in public/images/social/ (sized in Footer.astro).
	social: [
		{ label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/project_automate' },
		{ label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/projectautomate/' },
		{ label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/ProjectAutomate' },
		{ label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/project-automate' },
		{ label: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@projectautomate' },
	] as const,
	credit: { label: 'Powered by AI Media', href: 'https://aimedia.design/' },
};

export const footerQuickLinks = linkify([
	{ label: 'Home', href: '/' },
	{ label: 'About Us', href: '/about-us/' },
	{ label: 'Design Partner', href: '/design-partners/' },
	{ label: 'Journal', href: '/blog/' },
	{ label: 'Contact Us', href: '/schedule/' },
]);

// Design Partner lives in Quick Links only (it used to appear here too as
// "Partners"), and the membership in the Services column only (as Concierge
// Care, see serviceGroups in nav.ts). Energy Management is intentionally
// unlinked site-wide.
export const footerMenu = linkify([
	{ label: 'Success Stories', href: '/success-stories/' },
	{ label: 'Inspiration', href: '/get-inspired/' },
	{ label: 'Brands', href: '/brands/' },
	{ label: 'HTA Budget Calculator', href: '/budget-calculator/' },
]);

export const legalLinks = linkify([
	{ label: 'Privacy Policy', href: '/privacy-policy/' },
	{ label: 'Terms & Conditions', href: '/terms-and-conditions/' },
]);

/**
 * Where the studio works, as schema.org places. Mirrors the business node's
 * areaServed (research-luxury-seo.md §D) so every Service node can reuse it.
 */
export const areaServed = [
	{ '@type': 'City', name: 'Los Angeles' },
	{ '@type': 'City', name: 'Beverly Hills' },
	{ '@type': 'City', name: 'Malibu' },
	{ '@type': 'City', name: 'Manhattan Beach' },
	{ '@type': 'City', name: 'Hermosa Beach' },
	{ '@type': 'City', name: 'Palos Verdes Estates' },
	{ '@type': 'City', name: 'Rolling Hills' },
	{ '@type': 'City', name: 'Hidden Hills' },
	{ '@type': 'City', name: 'Calabasas' },
	{ '@type': 'City', name: 'Santa Monica' },
	{ '@type': 'Place', name: 'Bel Air, Los Angeles' },
	{ '@type': 'Place', name: 'Brentwood, Los Angeles' },
	{ '@type': 'Place', name: 'Pacific Palisades, Los Angeles' },
	{ '@type': 'Place', name: 'Holmby Hills, Los Angeles' },
	{ '@type': 'AdministrativeArea', name: 'Los Angeles County' },
];
