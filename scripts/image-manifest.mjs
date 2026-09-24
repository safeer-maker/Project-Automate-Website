// Source photography (Adobe Stock, licensed for PROJECT: automate) → optimized
// WebP renditions under public/images/. Run `npm run images` after editing.
//
// `src` is relative to the source folder (PA_IMAGE_SOURCE, default below) —
// the originals are 1–23MB each and are deliberately NOT committed.
// `preset` picks the rendition widths (see PRESETS in optimize-images.mjs).
// `aspect` (optional, w/h) centre-crops before resizing — use `position`
// ('top' | 'bottom' | 'left' | 'right' | 'centre', or sharp's attention/entropy)
// to steer the crop. Leave it off to keep the photo's native ratio.
//
// Photos deliberately left out of the set: 143932456, 322927699, 392047688
// (realtor-style consultations that read mid-market), 2009400699 (consumer
// thermostat), 1563860855 (trade-show garden, ceiling visible), 2080609289
// (rustic lantern), 862052972 (saturated purple pool), 567657283 (hard hats).

export const SOURCE_DIR = process.env.PA_IMAGE_SOURCE || 'C:/Users/Safeer/Downloads/pa';

export const images = [
	// ── Residences (homepage, Get Inspired, Success Stories) ──────────────
	{ id: 'residences/malibu-cliffside', src: 'inspiration/malibu/AdobeStock_2000920280.jpeg', preset: 'full' },
	{ id: 'residences/malibu-stone-court', src: 'inspiration/malibu/AdobeStock_2077490728.jpeg', preset: 'full' },
	{ id: 'residences/malibu-coastal', src: 'inspiration/malibu/AdobeStock_2147746831.jpeg', preset: 'full' },
	{ id: 'residences/hidden-hills-pool', src: 'inspiration/Hidden Hills/AdobeStock_1863839098.jpeg', preset: 'full' },
	{ id: 'residences/hidden-hills-courtyard', src: 'inspiration/Hidden Hills/AdobeStock_2152775886.jpeg', preset: 'full' },
	{ id: 'residences/manhattan-beach', src: 'inspiration/Manhattan Beach/AdobeStock_2179354830.jpeg', preset: 'full' },
	{ id: 'residences/stone-estate-wide', src: 'Process/04 Hand over/AdobeStock_974255100.jpeg', preset: 'full' },
	{ id: 'residences/palm-drive-estate', src: 'Process/04 Hand over/AdobeStock_1786129501.jpeg', preset: 'full' },

	// ── Process: Understand → Design → Integrate → Deliver ────────────────
	{ id: 'process/understand', src: 'Process/01 Understand/AdobeStock_2018534706.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design', src: 'Process/02 Design/AdobeStock_2188980877.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design-studio', src: 'Process/02 Design/AdobeStock_2169424332.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design-plans', src: 'Process/02 Design/AdobeStock_857629299.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design-collaboration', src: 'Process/02 Design/AdobeStock_653522884.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design-team', src: 'Process/02 Design/AdobeStock_934164635.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/design-review', src: 'Process/02 Design/AdobeStock_659274633.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/integrate', src: 'Process/03 Integrate/AdobeStock_2177475006.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/integrate-site', src: 'Process/03 Integrate/AdobeStock_1080055737.jpeg', preset: 'card', aspect: 3 / 2 },
	{ id: 'process/deliver', src: 'Process/04 Hand over/AdobeStock_1786129501.jpeg', preset: 'card', aspect: 3 / 2 },

	// ── Smart home automation & control ───────────────────────────────────
	{ id: 'solutions/control-wall-panel', src: 'Solutions/Smart Home Automation/AdobeStock_2191730065.jpeg', preset: 'full' },
	{ id: 'solutions/control-keypad', src: 'Solutions/Smart Home Automation/AdobeStock_2186441972.jpeg', preset: 'full' },
	{ id: 'solutions/control-panel-living', src: 'Solutions/Smart Home Automation/AdobeStock_939071322.jpeg', preset: 'full' },
	{ id: 'solutions/control-touch', src: 'Solutions/Smart Home Automation/AdobeStock_2043986034.jpeg', preset: 'full' },
	{ id: 'solutions/control-great-room', src: 'Solutions/Smart Home Automation/AdobeStock_2194498400.jpeg', preset: 'full' },
	{ id: 'solutions/lighting-living-room', src: 'Solutions/Smart Home Automation/AdobeStock_1387531574.jpeg', preset: 'full' },
	{ id: 'solutions/lighting-kitchen', src: 'Solutions/Smart Home Automation/AdobeStock_1993592572.jpeg', preset: 'full' },

	// ── Landscape & outdoor lighting ──────────────────────────────────────
	{ id: 'solutions/landscape-path', src: 'Solutions/Landscape-lighting/AdobeStock_1186203657.jpeg', preset: 'full' },
	{ id: 'solutions/landscape-hillside', src: 'Solutions/Landscape-lighting/AdobeStock_645946418.jpeg', preset: 'full' },
	{ id: 'solutions/landscape-water-wall', src: 'Solutions/Landscape-lighting/AdobeStock_735425104.jpeg', preset: 'full' },
	{ id: 'solutions/landscape-cascade', src: 'Solutions/Landscape-lighting/AdobeStock_736571873.jpeg', preset: 'full' },
	{ id: 'solutions/landscape-installation', src: 'Process/03 Integrate/AdobeStock_2177475006.jpeg', preset: 'full' },

	// ── Audio ─────────────────────────────────────────────────────────────
	{ id: 'solutions/audio-pergola', src: 'Solutions/audio/AdobeStock_2119294243.jpeg', preset: 'full' },
	{ id: 'solutions/audio-poolside', src: 'Solutions/audio/AdobeStock_2063728674.jpeg', preset: 'full' },
	{ id: 'solutions/audio-garden-speaker', src: 'Solutions/audio/outdoor_living_006.jpg', preset: 'card' },
	{ id: 'solutions/audio-bollard', src: 'Solutions/audio/dab1453827e38fb81ff93e66e69732f806193ca5.webp', preset: 'card' },
	{ id: 'solutions/audio-terrace', src: 'Solutions/audio/9048b5317eb7c92e1f3d01c7128049de48684989.webp', preset: 'card' },

	// ── Cinema & media ────────────────────────────────────────────────────
	{ id: 'solutions/cinema-tiered', src: 'Solutions/Cinema/AdobeStock_877735072.jpeg', preset: 'full' },
	{ id: 'solutions/cinema-garden', src: 'Solutions/Cinema/AdobeStock_2088977244.jpeg', preset: 'full' },
	{ id: 'solutions/cinema-midnight', src: 'Solutions/Cinema/AdobeStock_1284737205.jpeg', preset: 'full' },
	{ id: 'solutions/cinema-media-room', src: 'Solutions/Cinema/AdobeStock_2068135912.jpeg', preset: 'full' },
	{ id: 'solutions/cinema-starlight', src: 'Solutions/Cinema/AdobeStock_2200618982.jpeg', preset: 'full' },
	{ id: 'solutions/cinema-outdoor', src: 'Solutions/Cinema/AdobeStock_2125105950.jpeg', preset: 'full' },

	// ── Shades ────────────────────────────────────────────────────────────
	{ id: 'solutions/shades-glass-wall', src: 'Solutions/Shades/shading_soluation_001.jpg', preset: 'full' },

	// ── Security, access & surveillance ───────────────────────────────────
	{ id: 'solutions/security-estate-gate', src: 'Solutions/security/AdobeStock_2169177544.jpeg', preset: 'full' },
	{ id: 'solutions/security-driveway-gate', src: 'Solutions/security/AdobeStock_2063690705.jpeg', preset: 'full' },
	{ id: 'solutions/security-camera', src: 'Solutions/security/AdobeStock_2119429412.jpeg', preset: 'full' },
	{ id: 'solutions/security-smart-lock', src: 'Solutions/security/AdobeStock_2183890924.jpeg', preset: 'full' },
	{ id: 'solutions/access-lit-gate', src: 'Solutions/Landscape-lighting/AdobeStock_1692298200.jpeg', preset: 'full' },
];
