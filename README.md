# VW ALH TDI Workshop Manual Site

A GitHub Pages-ready, search-first reference site for the Volkswagen 1.9L TDI **ALH**. It includes a 22-section workshop index, dedicated section pages, and built-in diagnostic/reference guides for common ALH tasks.

## What is included
- `index.html` — searchable main site
- `manuals/` — 22 section pages ready for your own licensed PDFs/HTML
- `guides/` — ALH timing, VCDS, MAF, boost, cooling, glow-plug, fuel and diagnostic workflows
- `assets/` — responsive CSS and search/index JavaScript
- `.nojekyll` — GitHub Pages compatibility

## GitHub Pages
1. Create a repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch → `main` → `/ (root)`**.

## Adding manuals
Place manuals you own or are licensed to redistribute in the appropriate `manuals/<section>/` folder. Then add an `<a>` link on that section's `index.html` or create additional HTML pages beside the PDFs.

This repository intentionally does **not** contain pirated scans of copyrighted Volkswagen/Bentley manuals.

## Primary references
- Volkswagen erWin: https://volkswagen.erwin-store.com/
- Bentley A4 1999–2005 service manual: https://www.bentleypublishers.com/volkswagen/repair-information/vw-golf-jetta-gti-99-05-lpv800.html
- Ross-Tech TDI/VCDS reference: https://www.ross-tech.com/vag-com/cars/tdi.html
- Ross-Tech TDI Timing Checker: https://www.register.ross-tech.com/vag-scope/TDIGraph.php
