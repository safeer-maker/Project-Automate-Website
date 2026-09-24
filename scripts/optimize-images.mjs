// Builds responsive WebP renditions for every photo in image-manifest.mjs.
//
//   npm run images            only renders files that don't exist yet
//   npm run images -- --force re-renders everything
//
// Output: public/images/library/<id>-<width>.webp, a 1200x630 social preview
// at public/images/og/<id>.jpg, and src/data/image-library.json (widths +
// intrinsic size per id), which src/components/ui/Picture.astro reads to
// write srcset/width/height.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { images, SOURCE_DIR } from './image-manifest.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/library');
const ogDir = path.join(root, 'public/images/og');
const dataFile = path.join(root, 'src/data/image-library.json');
const force = process.argv.includes('--force');

// Widths are chosen around real layout slots: `full` covers full-bleed heroes
// and mosaic tiles up to a 1440 layout at 2x; `card` covers half-width and
// smaller panels.
const PRESETS = {
	full: [640, 1024, 1600, 2400],
	card: [480, 800, 1200, 1600],
};
// WebP q68 is visually lossless for this photography at display size and
// roughly halves q80's bytes. Effort 5 of 6 trades build time for size.
const WEBP = { quality: 68, effort: 5, smartSubsample: true };

fs.mkdirSync(outDir, { recursive: true });
const library = {};
let written = 0;
let bytes = 0;

for (const entry of images) {
	const srcPath = path.join(SOURCE_DIR, entry.src);
	if (!fs.existsSync(srcPath)) {
		console.warn(`! missing source for ${entry.id}: ${srcPath}`);
		continue;
	}

	const meta = await sharp(srcPath).metadata();
	let srcW = meta.width;
	let srcH = meta.height;

	// Crop box (in source pixels) for a fixed aspect, else the full frame.
	let crop = null;
	if (entry.aspect) {
		const want = entry.aspect;
		if (srcW / srcH > want) {
			const w = Math.round(srcH * want);
			crop = { width: w, height: srcH };
		} else {
			const h = Math.round(srcW / want);
			crop = { width: srcW, height: h };
		}
		srcW = crop.width;
		srcH = crop.height;
	}

	const widths = PRESETS[entry.preset].filter((w) => w < srcW);
	if (!widths.length || widths.at(-1) < PRESETS[entry.preset].at(-1)) widths.push(Math.min(srcW, PRESETS[entry.preset].at(-1)));
	const unique = [...new Set(widths)];

	for (const w of unique) {
		const file = path.join(outDir, `${entry.id}-${w}.webp`);
		fs.mkdirSync(path.dirname(file), { recursive: true });
		if (!force && fs.existsSync(file)) {
			bytes += fs.statSync(file).size;
			continue;
		}
		let pipeline = sharp(srcPath, { limitInputPixels: false }).rotate();
		if (crop) {
			pipeline = pipeline.resize(crop.width, crop.height, { fit: 'cover', position: entry.position ?? 'centre' });
		}
		await pipeline.resize({ width: w, withoutEnlargement: true }).webp(WEBP).toFile(file);
		const size = fs.statSync(file).size;
		bytes += size;
		written++;
		console.log(`  ${entry.id}-${w}.webp  ${Math.round(size / 1024)}KB`);
	}

	// Social preview (og:image): 1200x630 JPEG — WebP previews are still
	// unreliable across messaging apps and social platforms.
	const ogFile = path.join(ogDir, `${entry.id}.jpg`);
	fs.mkdirSync(path.dirname(ogFile), { recursive: true });
	if (force || !fs.existsSync(ogFile)) {
		let og = sharp(srcPath, { limitInputPixels: false }).rotate();
		if (crop) og = og.resize(crop.width, crop.height, { fit: 'cover', position: entry.position ?? 'centre' });
		await og.resize(1200, 630, { fit: 'cover', position: entry.position ?? 'centre' }).jpeg({ quality: 78, mozjpeg: true }).toFile(ogFile);
		written++;
	}

	const maxW = unique.at(-1);
	library[entry.id] = {
		widths: unique,
		width: maxW,
		height: Math.round((maxW * srcH) / srcW),
	};
}

fs.writeFileSync(dataFile, JSON.stringify(library, null, '\t') + '\n');
console.log(`\n${written} renditions written, ${Object.keys(library).length} images, ${(bytes / 1024 / 1024).toFixed(1)}MB total in public/images/library`);
