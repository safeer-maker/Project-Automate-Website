// Questions for /outdoor-lighting-audio/ (a landing page: the questions sit
// just above its consultation form). A `published` answer only restates what
// the site already says (see `basis`); everything that needs a new fact waits
// for the client (`needs-client`) and is never rendered.
import type { Faq } from './index.ts';

const faqs: Faq[] = [
	{
		q: 'Why design landscape lighting and outdoor audio together?',
		status: 'published',
		a: 'They share the same planting, the same paths and the same evenings. Designed as one, the architecture glows, the paths are safe to walk and music reaches every terrace without a speaker in sight. Fixtures, speakers and wiring are resolved early, never added as an afterthought.',
		basis:
			'/outdoor-lighting-audio/: intro "We design landscape lighting and outdoor audio as one system … The architecture glows, the paths are safe to walk, and music reaches every terrace without a speaker in sight" (live since before this phase as "We design landscape lighting and outdoor audio together, so the architecture glows…"); heading "Two disciplines, one quiet design"; After Dark: "fixtures, speakers and wiring are resolved early, never added as an afterthought".',
	},
	{
		q: 'Will the garden look floodlit?',
		status: 'published',
		a: 'No. Each fixture is placed and aimed with care, so the garden reads as calm, never floodlit: the facade, the trees, the stonework and the water are each drawn gently out of the dark. The speakers, too, are designed to disappear into the planting.',
		basis:
			'/outdoor-lighting-audio/: After Dark caption "Each fixture placed and aimed with care, so the garden reads as calm, never floodlit"; Landscape Lighting "each drawn gently out of the dark", "Uplighting for facades, trees and stonework"; Outdoor Audio "speakers designed to disappear into the planting".',
	},
	{
		q: 'Can landscape lighting also help secure the property?',
		status: 'published',
		a: 'Yes. Linked to the cameras and perimeter sensors, path and facade lighting rise when something moves at the edge of the property after dark, while the cameras record and a notification reaches you, wherever you are. Overnight, landscape and security lighting quietly watch over the grounds.',
		basis:
			'Perimeter watch scenario (src/data/integrations.ts, shown on this page and on /solutions/): "path and facade lighting rise, the cameras record and a notification reaches you, wherever you are"; /outdoor-living/ scene After Dark: "Landscape and security lighting take over quietly to watch the property overnight."',
	},
	{
		q: 'How are the lighting and music controlled?',
		status: 'published',
		a: 'Lighting follows a schedule or changes with a single touch, with scenes for dining, entertaining and late evening. Music plays by area, at the right level for each space, from your phone, a keypad or your voice.',
		basis:
			'/outdoor-lighting-audio/ Designed Together: "Scenes for dining, entertaining and late evening", "Set on a schedule, or with a single touch", "Music by area, at the right level for each space", "Played from your phone, a keypad or your voice".',
	},
	{
		q: 'Will you work with our landscape architect?',
		status: 'published',
		a: 'Yes. We plan lighting and sound alongside your architect and landscape designer, so fixtures, speakers and wiring are resolved early, never added as an afterthought. Every system is planned around the architecture, in step with the people designing the home.',
		basis:
			'/outdoor-lighting-audio/ After Dark: "We plan lighting and sound alongside your architect and landscape designer, so fixtures, speakers and wiring are resolved early, never added as an afterthought"; homepage, How we work (Design): "planned around the architecture and interiors, in step with your architect and designer".',
	},
	{
		q: 'What does landscape lighting and outdoor audio cost?',
		status: 'needs-client',
		clientPrompt:
			'A typical investment range, or a starting point, for landscape lighting alone, outdoor audio alone and the two together, and what drives it (size of the grounds, number of fixtures and speakers, subwoofers, trenching, control). Say whether the design consultation or a lighting design carries a fee, and if so whether it is credited to the project.',
	},
	{
		q: 'Can you light a mature garden without disturbing it, and when should we involve you in a new landscape?',
		status: 'needs-client',
		clientPrompt:
			'For established gardens: how cable is run with the least disturbance to planting and hardscape, and what restoration to expect. For new landscapes: the stage to bring you in (before trenching, irrigation and planting?). For both: how long a typical project takes, from design to the first evening lit.',
	},
	{
		q: 'Which fixtures and speakers do you use?',
		status: 'needs-client',
		clientPrompt:
			'The brands and product families you specify for landscape fixtures, speakers and subwoofers; the materials (for example brass, copper or aluminum) and why; LED color temperature and dimming; low-voltage or line-voltage; and whether fixtures can be re-aimed and re-tuned after installation.',
	},
	{
		q: 'Will the light or the music bother our neighbors?',
		status: 'needs-client',
		clientPrompt:
			'How you keep light from spilling beyond the property or into the night sky (shielding, aiming, levels, any local lighting rules in hillside or coastal neighborhoods), and how you keep sound on the property (many speakers at a low level, subwoofer placement, volume limits by area, quiet-hours schedules).',
	},
	{
		q: 'How is the lighting looked after as the garden grows?',
		status: 'needs-client',
		clientPrompt:
			'What landscape lighting and outdoor audio need over time (re-aiming fixtures as trees and planting grow, cleaning lenses, checking connections), how often, whether that is covered by the Technology Support Membership or a separate seasonal visit, and the warranty on fixtures and speakers.',
	},
];

export default faqs;
