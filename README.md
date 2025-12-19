# Sampatt Editable Template

This is a lightweight editable template inspired by https://sampatt.com. It recreates the main layout and provides in-browser editing tools so you can change text and export HTML.

Quick start

1. Open `index.html` in your browser (double-click or serve with a static server).
2. Click `Edit` to toggle content editing. Editable elements are highlighted.
3. Click `Save` to save edits to `localStorage` and `Load` to restore them.
4. Click `Export HTML` to download a standalone HTML file with your changes.

Files

- `index.html` — main template
- `css/styles.css` — styling
- `js/script.js` — edit/save/export helpers

Helper scripts

- `open-in-browser.sh` — cross-platform helper for Git Bash (Linux/macOS/Windows Git Bash fallback).
- `open-in-browser.bat` — Windows batch script to open `index.html` in the default browser.
- `open-in-browser.ps1` — PowerShell script to open `index.html`.

Notes

- This template is a starting point. Replace images, add pages, or integrate a CMS as needed.
- To deploy, upload the folder contents to your static host (Netlify, Vercel, GitHub Pages, etc.).

Jekyll / GitHub Pages

To use this project with Jekyll and GitHub Pages (deploy to `https://alitalib.com`):

1. The repository already includes `_config.yml` with `url: "https://alitalibov.com"` and a `CNAME` file set to `alitalibov.com`.
2. In your GitHub repository settings -> Pages, set the source to branch `main` (root) and enable the site.
3. Add the DNS `A` records and/or CNAME for `alitalibov.com` pointing to GitHub Pages as described in GitHub docs.
4. If you want to use a GitHub Pages theme, set `theme:` in `_config.yml` and ensure compatibility.

After Pages builds, the custom domain `alitalibov.com` will be used automatically (DNS + Pages settings required).

How to open from Git Bash (Windows)

```bash
cd sampatt-template
chmod +x open-in-browser.sh
./open-in-browser.sh
```

Direct Windows (cmd) command from Git Bash

```bash
cd sampatt-template
cmd.exe /c start "" "$(pwd -W)/index.html"
```

Using the Windows batch helper

```powershell
cd sampatt-template
open-in-browser.bat
```

Using PowerShell

```powershell
cd sampatt-template
.\open-in-browser.ps1
```
