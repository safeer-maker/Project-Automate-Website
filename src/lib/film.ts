// Shared playback plumbing for the two background films (homepage hero,
// CtaBanner's closing film), so they behave the same on desktop, Android
// and iPhone.
//
// Each <video> lists its encodes as <source media type> children, most
// specific first. Rather than leave the choice to the browser (older Android
// Chrome ignores `media` on <source>, and no browser re-picks when a phone
// rotates), the script picks one and sets it as the video's `src`, which
// makes the browser ignore the <source> list.

/** The first <source> whose media query matches and whose type this browser plays. */
export function pickFilmSource(video: HTMLVideoElement): string | null {
	for (const source of video.querySelectorAll('source')) {
		const media = source.getAttribute('media');
		if (media && !window.matchMedia(media).matches) continue;
		if (source.type && !video.canPlayType(source.type)) continue;
		return source.getAttribute('src');
	}
	return null;
}

/** Visitors who asked their browser to save data (Android Chrome's Lite mode / Data Saver) keep the still. */
export const saveData = (): boolean =>
	Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

/** Background-film settings, re-applied from script because iOS only allows silent inline autoplay when they hold. */
export function prepareFilm(video: HTMLVideoElement): void {
	video.muted = true;
	video.defaultMuted = true;
	video.playsInline = true;
	// No Cast / picture-in-picture buttons over a background film (Android Chrome adds them).
	video.disableRemotePlayback = true;
	video.setAttribute('disablepictureinpicture', '');
}

/**
 * Re-picks the encode when the screen changes shape (a phone rotating, a
 * window dragged across 700px), keeping the playhead. The video fades back
 * in over the poster once the new encode is playing.
 */
export function keepFilmFitted(video: HTMLVideoElement, shouldPlay: () => boolean): void {
	const queries = new Set<string>();
	video.querySelectorAll('source[media]').forEach((s) => queries.add(s.getAttribute('media')!));

	const refit = () => {
		if (!video.getAttribute('src')) return; // not loaded yet; it picks when it does
		const next = pickFilmSource(video);
		if (!next || next === video.getAttribute('src')) return;
		const time = video.currentTime;
		video.classList.remove('is-playing');
		video.src = next;
		video.load();
		video.addEventListener(
			'loadedmetadata',
			() => {
				if (Number.isFinite(video.duration)) video.currentTime = time % video.duration;
				if (shouldPlay()) playFilm(video);
			},
			{ once: true },
		);
		video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
	};

	queries.forEach((q) => window.matchMedia(q).addEventListener('change', refit));
}

/**
 * play(), and if the browser refuses (iPhone Low Power Mode, Android battery
 * saver), try again on the visitor's first tap, click or key press: a play()
 * inside a user gesture is always allowed.
 */
const awaitingGesture = new WeakSet<HTMLVideoElement>();

export function playFilm(video: HTMLVideoElement): void {
	video.play().catch(() => {
		if (awaitingGesture.has(video)) return;
		awaitingGesture.add(video);
		const retry = () => {
			events.forEach((e) => window.removeEventListener(e, retry, true));
			awaitingGesture.delete(video);
			video.play().catch(() => {});
		};
		const events = ['touchend', 'click', 'keydown'];
		events.forEach((e) => window.addEventListener(e, retry, { capture: true, passive: true }));
	});
}

/**
 * iOS pauses inline video when the visitor switches apps or tabs, and a page
 * restored from the back/forward cache comes back paused. Resume it.
 */
export function resumeFilmOnReturn(video: HTMLVideoElement, shouldPlay: () => boolean): void {
	const resume = () => {
		if (document.visibilityState === 'visible' && video.paused && shouldPlay()) playFilm(video);
	};
	document.addEventListener('visibilitychange', resume);
	window.addEventListener('pageshow', resume);
}
