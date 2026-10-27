# Laws & Cause

A statically prerendered website for Laws & Cause, an independent law firm in Kathmandu. The production build is a set of HTML files that can be hosted on the Cloudflare Pages free plan. There is no database and no Node server in production.

## Stack

- React 19 and TypeScript (strict)
- Vite 8
- Tailwind CSS 4
- React Router 8
- Lucide, Motion, React Hook Form, and Zod
- Self-hosted Cormorant Garamond and Manrope

`npm run build` typechecks the project, builds the client, builds a server render bundle, and writes one HTML file per public route into `dist`, along with `sitemap.xml`, `robots.txt`, and `404.html`.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the example file with `Copy-Item .env.example .env`.

Set `VITE_SITE_URL` in `.env` to the real domain before a production build. Until then, canonical URLs use `https://example.com`, which is intentional and must be changed. See [CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md).

## Scripts

| Command                 | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Development server                                   |
| `npm run build`         | Production build in `dist`                           |
| `npm run preview`       | Serve the production build locally                   |
| `npm run typecheck`     | TypeScript                                           |
| `npm run lint`          | ESLint                                               |
| `npm run format`        | Prettier write                                       |
| `npm run format:check`  | Prettier check                                       |
| `npm run check:content` | Practice-area, draft, and copy checks                |
| `npm run check:dist`    | Confirms the built HTML, sitemap, and internal links |

The npm scripts call `node` on the local binaries so they still run when the project folder name contains `&`.

## Editing the site

Business facts live in [src/config/site.ts](src/config/site.ts): name, tagline, city, and the contact fields. Leave `email`, `phone`, `whatsapp`, `hours`, `streetAddress`, and `social` empty until the values are confirmed. Empty contact fields render as “To be provided”. They are not turned into `tel:` or `mailto:` links.

Practice areas live in [src/content/practiceAreas.ts](src/content/practiceAreas.ts). Adding an object publishes a new `/practice-areas/:slug` page on the next build.

Lawyer profiles live in [src/content/team.ts](src/content/team.ts). The array starts empty, and the team page explains that profiles are coming. Add a person only after the biography and qualifications are approved. A LinkedIn URL should be a verified profile.

Articles live in two places:

- Drafts: `src/content/articles/drafts/`. These are not imported by the site, not listed, and not added to the sitemap.
- Published: import the article in [src/content/articles/index.ts](src/content/articles/index.ts) after setting `status` to `"published"`, `author` to a real name, and `publishedAt` to an ISO date (`YYYY-MM-DD`).

Do not invent authors, dates, testimonials, rankings, or case results.

Navigation labels are in [src/config/navigation.ts](src/config/navigation.ts).

## Contact form

The form always validates with Zod. It reports success only when the configured delivery endpoint returns a real success.

`VITE_FORM_MODE` selects the adapter:

- `demo` (default). The page says delivery is not active. After a valid submit it says the message was **not** sent.
- `endpoint`. The browser POSTs JSON to `VITE_FORM_ENDPOINT`. Put a public form URL here, never a secret API key.
- `function`. The browser POSTs JSON to `/api/contact`, the Pages Function in [functions/api/contact.ts](functions/api/contact.ts).

The function sends mail through [Resend](https://resend.com) and can verify a Cloudflare Turnstile token. Required Cloudflare environment variables, set in the dashboard and **not** prefixed with `VITE_`:

- `RESEND_API_KEY`
- `CONTACT_TO`
- `CONTACT_FROM` (a sender on a domain you have verified in Resend)
- `TURNSTILE_SECRET_KEY` (recommended)

The matching public site key is `VITE_TURNSTILE_SITE_KEY`. If the server variables are missing, the function returns an error and the page does not claim the message was sent.

Without JavaScript, function mode still posts the form. The function answers with a short HTML page. Demo mode cannot deliver a message without JavaScript; the notice on the form says so.

## SEO

Each route’s title, description, canonical URL, Open Graph tags, and Twitter tags are written into the HTML file at build time. Client-side navigation updates the same tags after that. JSON-LD for the firm, breadcrumbs, practice FAQs, and published articles is rendered in the page body.

`public/_headers` sets caching for hashed assets and a Content Security Policy. Turnstile’s script host is already allowed. If you point the form at another domain, add that origin to `connect-src`.

## Images

Hero and about illustrations are original SVG drawings, so the site does not depend on stock photography. The share image is generated at `public/og.png` during the build. Licensed photographs can replace the SVG panels later; give them width, height, and alt text.

## Later additions

The locale field in the site config is the seam for a Nepali version. Do not add a language switch until the translations exist. Analytics, booking, and a CMS are not included. A Cloudflare Web Analytics token can be added later as a script in `index.html`; update the privacy policy in the same change.

## Deployment

See [CLOUDFLARE_DEPLOYMENT.md](CLOUDFLARE_DEPLOYMENT.md).
