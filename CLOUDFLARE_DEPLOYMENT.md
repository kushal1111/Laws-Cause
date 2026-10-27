# Deploy Laws & Cause on Cloudflare Pages

The site is a static Vite build. Cloudflare Pages Free is enough. You do not need a paid plan, a database, or a long-running server.

Framework preset: **React (Vite)**  
Build command: **`npm run build`**  
Build output directory: **`dist`**  
Production branch: **`main`**

## 1. Local setup

Install Node.js 22 or newer. From the project directory:

```bash
npm install
```

Copy `.env.example` to `.env`.

## 2. Install dependencies

`npm install` installs everything required to build, including the Tailwind compiler, the prerender script, and Sharp (used to create the Open Graph image).

## 3. Run the development server

```bash
npm run dev
```

Open the URL Vite prints. The contact form stays in demonstration mode unless you change `VITE_FORM_MODE`.

## 4. Build for production

```bash
npm run build
```

This writes the deployable site to `dist`. Every public route is a real `index.html`, not a client-only shell. `dist/404.html` is the not-found page. `dist/sitemap.xml` and `dist/robots.txt` use `VITE_SITE_URL`.

## 5. Preview the production build

```bash
npm run preview
```

Optional, with the Pages Function available locally:

```bash
npx wrangler pages dev dist
```

Put test values in `.dev.vars` (this file is gitignored). Do not commit API keys. `wrangler.toml` points Wrangler at `dist`.

## 6. Push to GitHub

Create a repository and push the `main` branch. Do not commit `.env`, `.dev.vars`, or any file that contains `RESEND_API_KEY` or `TURNSTILE_SECRET_KEY`.

## 7. Connect the repository

In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**. Choose the GitHub repository and the `main` branch.

## 8. Build settings

The current Cloudflare form runs a deploy command and does not run a separate build. Use:

| Field                  | Value                 |
| ---------------------- | --------------------- |
| Build command          | leave empty           |
| Deploy command         | `npx wrangler deploy` |
| Build output directory | `dist`                |

`wrangler.toml` has a `[build]` command of `npm run build`. Wrangler runs that before it uploads `./dist`, so a log that goes straight from `npm clean-install` to `npx wrangler deploy` still produces the site. Leave the dashboard build command empty. Setting it as well builds the site twice.

`npx wrangler deploy` publishes a Worker. The same file tells it to serve `about/index.html` for `/about` and `404.html` for unknown paths. `npx wrangler pages deploy dist` is the older Pages-only command.

Cloudflare installs devDependencies for the build, which this project needs.

Do not add a rewrite of every path to `/index.html`. The build already emits an HTML file for each route. A single-page rewrite would throw away that prerendered HTML. Unknown URLs fall through to `404.html`.

## 9. Environment variables

In the Pages project settings, add variables for the **Production** environment:

| Name                      | Exposed to the browser | Purpose                                                                    |
| ------------------------- | ---------------------- | -------------------------------------------------------------------------- |
| `VITE_SITE_URL`           | Yes                    | Canonical origin, no trailing slash                                        |
| `VITE_FORM_MODE`          | Yes                    | `demo`, `endpoint`, or `function`                                          |
| `VITE_FORM_ENDPOINT`      | Yes                    | Only for `endpoint` mode. A public form URL, not a secret                  |
| `VITE_TURNSTILE_SITE_KEY` | Yes                    | Public Turnstile site key                                                  |
| `RESEND_API_KEY`          | No                     | Resend API key                                                             |
| `CONTACT_TO`              | No                     | Inbox that receives enquiries                                              |
| `CONTACT_FROM`            | No                     | Verified Resend sender, for example `Laws & Cause <intake@yourdomain.com>` |
| `TURNSTILE_SECRET_KEY`    | No                     | Turnstile secret                                                           |

`VITE_` variables are baked in at **build** time. After changing one, redeploy so the build runs again. The four server variables are read by the Pages Function at request time.

Leave the form in `demo` until the server variables exist. The live page will say that messages are not being sent, which is the correct behaviour.

## 10. Custom domain

In the Pages project, open **Custom domains** and add the domain. Update `VITE_SITE_URL` to that origin, including `https`, and redeploy so the sitemap and canonical tags match the domain.

## 11. Contact form delivery

`functions/api/contact.ts` is a Pages Function. An assets-only `npx wrangler deploy` publishes the static site and does not upload that function. Leave `VITE_FORM_MODE` as `demo` on this pipeline, or use `endpoint` mode with an external form URL. Switch the Cloudflare project to Pages and deploy with `npx wrangler pages deploy dist` before setting the mode to `function`.

1. Create a free [Resend](https://resend.com) account and verify the domain you will send from.
2. Create a [Turnstile](https://developers.cloudflare.com/turnstile/) widget for the same domain. The managed widget is enough.
3. Set the variables in the table above.
4. Set `VITE_FORM_MODE` to `function` and redeploy.
5. Submit the form on the live site. You should receive the email, and the page should say the message was sent only after Resend accepts it.
6. Submit again with the bot check failed, or with the API key removed, and confirm the page says the message was **not** sent.

If you would rather use a hosted form endpoint, set `VITE_FORM_MODE` to `endpoint` and `VITE_FORM_ENDPOINT` to that provider’s public URL. Add the provider’s origin to `connect-src` in `public/_headers`. Still do not put a private API key in any `VITE_` variable.

## 12. Verify the deployment

- Open `/`, `/about`, `/practice-areas`, `/practice-areas/corporate-commercial-law`, `/our-team`, `/insights`, `/contact`, `/privacy-policy`, and `/legal-disclaimer`.
- Refresh each URL directly. You should see the page, not the home page and not a Cloudflare 404.
- Open `/sitemap.xml` and `/robots.txt`.
- View source on the home page and confirm the title and description are in the HTML, not only applied after JavaScript.
- Open a nonsense path and confirm the branded 404.
- Submit the contact form and confirm the message matches the mode you configured.

`_headers` is copied into the build and applies the security headers on Cloudflare. Vite’s local preview server does not apply that file; use `wrangler pages dev` if you need to test the headers.
