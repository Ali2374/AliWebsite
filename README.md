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
