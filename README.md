# SDM+ GitHub Pages Bridge

Static, constant-URL bridge for hosting **Station Details Management (SDM+)** on GitHub Pages while pointing to your deployed Google Apps Script Web App.

## Quick Setup (3 Steps)
1. Open **`encode-url.html`** locally in your browser (do not need to upload it to GitHub).
2. Paste your deployed Google Apps Script Web App URL (`https://script.google.com/macros/s/.../exec`) and click **Generate Encoded `config.js`** → **Download `config.js`**.
3. Upload **`index.html`**, **`config.js`**, **`manifest.json`**, and **`sw.js`** to your GitHub Pages repository (e.g., `main` branch root) and enable **Settings → Pages**.

## Updating Your Deployment Later
Whenever you create a new Apps Script deployment URL, just re-run `encode-url.html` to replace `config.js` — your GitHub Pages URL stays 100% constant.

## Key Capabilities & Browser Notes
- **Obfuscated URL + Closed Shadow DOM**: Your raw Apps Script URL never appears in `index.html`, `config.js`, or the inspectable DOM tree (`#shadow-root (closed)`). *(Note: Because GitHub Pages is static client-side hosting, any browser's DevTools Network tab can still observe outbound requests; true network-level hiding requires a server-side reverse proxy such as Cloudflare Workers.)*
