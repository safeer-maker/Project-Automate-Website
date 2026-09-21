// Runs `astro dev` as a normal foreground process and makes sure it (and
// everything Vite spawns underneath it) dies with this process. Astro's own
// `--background` flag starts a detached daemon that survives after the
// terminal closes — this script intentionally avoids that so the dev server
// always terminates with the terminal it was started from.
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const isWindows = process.platform === 'win32';
const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
// Invoke Astro's actual JS entry point via `node` directly, rather than the
// .cmd/.sh shims in node_modules/.bin — spawning a platform shim reliably
// hits `spawn EINVAL` on Windows unless `shell: true` is used, which brings
// its own argument-quoting hazards.
const astroEntry = path.join(scriptsDir, '..', 'node_modules', 'astro', 'bin', 'astro.mjs');

const child = spawn(process.execPath, [astroEntry, 'dev', ...process.argv.slice(2)], {
	stdio: 'inherit',
	// On POSIX, give the child its own process group so we can kill the
	// whole tree (astro -> vite -> esbuild, etc.) in one shot.
	detached: !isWindows,
	env: {
		...process.env,
		// Astro auto-detects AI coding agent environments (Claude Code, Cursor,
		// etc.) and silently switches to a detached background daemon even
		// without `--background`, which is exactly the "outlives the terminal"
		// behavior this script exists to avoid. Setting this env var short-
		// circuits that auto-detection so `astro dev` stays in the foreground.
		ASTRO_DEV_BACKGROUND: '1',
	},
});

let shuttingDown = false;
function shutdown() {
	if (shuttingDown || child.exitCode !== null || child.signalCode !== null) return;
	shuttingDown = true;
	if (isWindows) {
		// /T kills the whole process tree, not just the immediate child.
		spawn('taskkill', ['/pid', String(child.pid), '/T', '/F']);
	} else {
		try {
			process.kill(-child.pid, 'SIGTERM');
		} catch {
			child.kill('SIGTERM');
		}
	}
}

for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
	process.on(signal, shutdown);
}
process.on('exit', shutdown);

child.on('exit', (code, signal) => {
	process.exit(code ?? (signal ? 1 : 0));
});
