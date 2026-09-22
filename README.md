# aakashbuilds.dev — new site (v2)

Complete rebuild, v2: Swiss / International Typographic Style.
White background, black grotesque type (Archivo), one cobalt-blue accent.
No gradients, no serif display type, no decorative effects.

## Files

- `index.html` — all content and structure
- `styles.css` — design system (`:root` block at top)
- `app.js` — header border on scroll, reveal-on-scroll, footer year
- `assets/hero-art.webp` — geometric poster artwork (blue rectangle, black bars)

## Sections

01 Work · 02 Writing · 03 Services · 04 About · 05 Contact

Services are written for business owners (report/ops automation + practical AI).
No pricing, no timelines, no guarantees on the site — those live in conversation.

## Preview locally

```bash
cd aakashbuilds-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (pick one)

**Vercel**: drag the `aakashbuilds-site` folder into https://vercel.com/new,
then add custom domain `aakashbuilds.dev` in Settings → Domains.

**Netlify**: drag the folder into https://app.netlify.com/drop, then add the
custom domain and follow the DNS steps.

**GitHub Pages**: push folder contents to a repo, enable Pages from `main`,
add the custom domain in Settings → Pages.

## Editing

- Copy lives in `index.html`, sectioned 01–05.
- Colors/type live in the `:root` block at the top of `styles.css`.
- The Calendly link appears in 4 places (header, hero, services CTA, contact) —
  search for `calendly.com` to update.

<!-- deploy-trigger: kick off Vercel git deployment -->
