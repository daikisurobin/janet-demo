# AGENTS.md

## Cursor Cloud specific instructions

### Repository state
- The `main` branch is a placeholder: it contains only `README.md`. There is **no application source, no dependency manifest (no `package.json`/`requirements.txt`/etc.), and no build system** on `main`. Nothing needs to be installed to work on `main`.
- The only runnable application in the repo lives on the feature branch `origin/cursor/auto-dash-game-fd10` as a single self-contained file, `index.html` ("Auto Dash" — a vanilla HTML5 Canvas + JavaScript game with **zero dependencies** and no build step).

### Available runtimes (preinstalled, no setup required)
- Node.js 22, npm 10, Python 3.12, and Chrome (`/usr/local/bin/google-chrome`) are already available.

### Running the static app
- The game is a static file. Serve it with any static server, e.g. `python3 -m http.server 8000` from the directory containing `index.html`, then open `http://localhost:8000/`. Opening `index.html` directly in a browser also works since it has no dependencies.
- Controls: move left/right (arrow keys, `A`/`D`, or pointer/touch drag) to dodge oncoming traffic.

### Update script
- Since `main` has no dependencies, the startup update script is effectively a no-op (guarded to run `npm install` only if a `package.json` ever appears). Do not add build/service/migration steps to it.
