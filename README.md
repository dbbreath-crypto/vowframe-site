# Wedding film website prototypes

Two separate local website prototypes for a custom AI wedding film service. Their enquiry forms are visual demos and do not send or store data.

- `index.html` — selection page for browsing both sites from the repository root
- `dist/` — English site, Vowframe
- `zh-site/` — Chinese site, “婚礼电影计划” (working title), with its own design and copy

## Preview locally

From this directory, run the English site:

```sh
python3 -m http.server 8768 --bind 127.0.0.1 --directory dist
```

Then open http://127.0.0.1:8768/ .

To preview the Chinese site separately, run:

```sh
python3 -m http.server 8769 --bind 127.0.0.1 --directory zh-site
```

Then open http://127.0.0.1:8769/ .

## GitHub Pages

To browse both sites online, configure GitHub Pages to deploy from branch `main` and folder `/(root)`. The root page links to the English site at `/dist/` and the Chinese site at `/zh-site/`. This does not activate the demo enquiry forms.

## Project files

- `dist/` — English static site and visual assets
- `zh-site/` — Chinese static site and visual assets
- `ASSET_SOURCES.md` — English image provenance and publishing considerations
- `ZH_ASSET_SOURCES.md` — Chinese concept image provenance
- `LOGO_GUIDE.md` — proposed visual identity
- `SEO_GEO_PLAN.md` — search and generative discovery plan

The English photographs are user supplied visual references. Confirm rights and consent before public marketing. The Chinese travel images are generated concept visuals. The English SVG logo is a design proposal and should be checked before trademark use.
