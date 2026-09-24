// Questions for each service page (and the /solutions/ hub), one file per key.
//
// The client answers these himself. An answer is `published` only when it
// restates something the site already says publicly, and `basis` records
// where (page + phrase). Anything that needs a new fact (prices, timelines,
// warranties, specifications, response times, service areas) stays
// `needs-client`: kept here for the client document, never rendered.
import type { ServiceKey } from '../services.ts';
import controlSystems from './control-systems.ts';
import hvacAndClimateIntegration from './hvac-and-climate-integration.ts';
import lightingControlSystems from './lighting-control-systems.ts';
import motorizedShadesAndDrapery from './motorized-shades-and-drapery.ts';
import homeTheater from './home-theater.ts';
import audioVideoSolutions from './audio-video-solutions.ts';
import outdoorLiving from './outdoor-living.ts';
import outdoorLightingAudio from './outdoor-lighting-audio.ts';
import securitySystems from './security-systems.ts';
import surveillanceSystems from './surveillance-systems.ts';
import accessControlAndIntercom from './access-control-and-intercom.ts';
import intrusionDetectionSystems from './intrusion-detection-systems.ts';
import technologySupportMembership from './technology-support-membership.ts';
import solutions from './solutions.ts';

export interface Faq {
	/** The question as a homeowner would ask it. */
	q: string;
	status: 'published' | 'needs-client';
	/** Required when published: 2–4 plain, calm sentences. */
	a?: string;
	/** Required when published: where the site already states this (page + phrase). */
	basis?: string;
	/** Required when needs-client: what the client should cover in his answer. */
	clientPrompt?: string;
}

export type FaqKey = ServiceKey | 'solutions';

const FAQS: Record<FaqKey, Faq[]> = {
	'control-systems': controlSystems,
	'hvac-and-climate-integration': hvacAndClimateIntegration,
	'lighting-control-systems': lightingControlSystems,
	'motorized-shades-and-drapery': motorizedShadesAndDrapery,
	'home-theater': homeTheater,
	'audio-video-solutions': audioVideoSolutions,
	'outdoor-living': outdoorLiving,
	'outdoor-lighting-audio': outdoorLightingAudio,
	'security-systems': securitySystems,
	'surveillance-systems': surveillanceSystems,
	'access-control-and-intercom': accessControlAndIntercom,
	'intrusion-detection-systems': intrusionDetectionSystems,
	'technology-support-membership': technologySupportMembership,
	solutions,
};

/** Every question for this key, published or not (for the client document). */
export function faqsFor(key: FaqKey): Faq[] {
	return FAQS[key] ?? [];
}

/** Only the questions that may be shown: published, with an answer. */
export function publishedFaqsFor(key: FaqKey): Faq[] {
	return faqsFor(key).filter((faq) => {
		if (faq.status !== 'published' || !faq.a?.trim()) return false;
		if (import.meta.env.DEV && !faq.basis?.trim()) {
			console.warn(`[faqs] "${key}": published answer without a basis: "${faq.q}"`);
		}
		return true;
	});
}

/**
 * schema.org FAQPage for exactly the questions a page renders, or undefined
 * when it renders none. One per page: ServiceLayout merges it into the page's
 * @graph, and ServiceFaq emits it itself only when used outside ServiceLayout.
 */
export function faqPageSchema(key: FaqKey, pageUrl: string): Record<string, unknown> | undefined {
	const faqs = publishedFaqsFor(key);
	if (faqs.length === 0) return undefined;
	return {
		'@type': 'FAQPage',
		'@id': `${pageUrl}#faq`,
		url: pageUrl,
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a },
		})),
	};
}
