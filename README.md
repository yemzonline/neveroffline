# Never Offline — neveroffline.uk

Events, Music and Entertainment. Get connected.

A static, single-page site. No build step, no dependencies to install — open `index.html` in a browser.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site: home, about and submit sections |
| `chrome-hero.js` | The rotating 3D chrome signal arc (three.js, loaded from unpkg) |
| `nof-runtime.js` | Page runtime — required, do not rename |
| `ds/` | Never Offline design-system styles and components |
| `assets/` | Logo, favicon, share image, Akira font, photo strip |
| `robots.txt`, `sitemap.xml` | Search engine files |

## Hosting

Live on IONOS at `/neveroffline/`. To publish from this repo with GitHub Pages instead: Settings → Pages → deploy from the `main` branch, root folder.

## External requests

- three.js from unpkg.com (the chrome object)
- Anton, Archivo and JetBrains Mono from Google Fonts
- Brevo for the email sign-up form
