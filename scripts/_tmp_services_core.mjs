import { chromium } from 'playwright';
const ids = ['process/integrate','process/integrate-site','process/deliver','process/understand','solutions/audio-bollard','solutions/audio-poolside','solutions/security-estate-gate','solutions/cinema-tiered'];
const _unused = [
	'residences/malibu-cliffside', 'residences/malibu-stone-court', 'residences/malibu-coastal', 'residences/hidden-hills-pool',
	'residences/hidden-hills-courtyard', 'residences/manhattan-beach', 'residences/stone-estate-wide', 'residences/palm-drive-estate',
	'solutions/control-wall-panel', 'solutions/control-panel-living', 'solutions/control-touch', 'solutions/control-great-room',
	'solutions/landscape-path', 'solutions/landscape-hillside', 'solutions/landscape-installation', 'process/integrate',
	'solutions/lighting-kitchen', 'solutions/lighting-living-room', 'solutions/landscape-cascade', 'solutions/landscape-water-wall',
	'solutions/cinema-outdoor', 'process/integrate-site', 'process/design-review', 'solutions/control-keypad',
];
const html = `<body style="margin:0;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font:12px sans-serif;background:#eee">${ids
	.map((id) => `<figure style="margin:0"><img src="http://localhost:4331/images/library/${id}-${id.startsWith('process') ? 800 : 640}.webp" style="width:100%;height:200px;object-fit:cover;display:block"><figcaption>${id}</figcaption></figure>`)
	.join('')}</body>`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await page.goto("http://localhost:4331/privacy-policy/", { waitUntil: "domcontentloaded" });
await page.evaluate((h) => { document.documentElement.innerHTML = h; }, html);
await page.waitForTimeout(8000); console.log(await page.evaluate(() => [...document.images].map(i => i.complete + ":" + i.naturalWidth).join(" ")));
await page.screenshot({ path: 'C:/Users/Safeer/AppData/Local/Temp/claude/C--Users-Safeer--claude/c85e9348-c693-4e34-8ad7-d3246b1593de/scratchpad/sc_contact.png', fullPage: true });
await browser.close();
