# Content checklist

Publish nothing in this list until someone at the firm has confirmed it. The website is built so these gaps stay visible instead of being filled with invented detail.

## Required before launch

- [ ] Set `VITE_SITE_URL` to the real domain. The fallback `https://example.com` is a placeholder and is wrong for a public sitemap.
- [ ] Confirm the firm name, tagline, and city in `src/config/site.ts`.
- [ ] Add a confirmed telephone number to `site.phone`, or accept that the site will say “To be provided”.
- [ ] Add a confirmed email address to `site.email`, or accept the same placeholder.
- [ ] Add a street address only if the office address is verified. Do not add a map pin without one.
- [ ] Add business hours only if they are real.
- [ ] Add WhatsApp only if the number is confirmed.
- [ ] Add social profiles only as verified URLs. An empty list hides the links.
- [ ] Have a lawyer qualified in Nepal read the practice-area pages and the three draft articles before they are treated as current. The pages name statutes and institutions in general terms and avoid section numbers, fees, and timelines. They can still go out of date.
- [ ] Confirm that Laws & Cause actually offers each of the twelve practice areas. Remove any that the firm does not take.
- [ ] Decide whether the contact form should deliver mail. Until Resend (or another endpoint) is configured, the form is a demonstration and says so.

## Do not invent

- Founding year, founder names, or a history of the firm
- Nepal Bar Council numbers, chamber registration, or professional memberships
- Awards, rankings, years of experience, client counts, or success rates
- Testimonials, case studies, or named clients
- Lawyer names, photographs, education, or qualifications
- A specific office address, map location, or opening hours

Lawyer profiles are added in `src/content/team.ts`. The public team page stays on “Profiles coming soon” while that array is empty.

## Articles

Three drafts are in `src/content/articles/drafts/`:

- Understanding Company Registration in Nepal
- Legal Considerations for Foreign Investment in Nepal
- An Introduction to Property Disputes in Nepal

They have no author and no date. They are not linked and they are not in the sitemap. To publish one:

1. Set `author` to the real writer. Use “Laws & Cause” only if the firm is the author of record.
2. Set `publishedAt` to the real publication date (`YYYY-MM-DD`).
3. Set `status` to `"published"`.
4. Import it from `src/content/articles/index.ts` and append it to `publishedArticles`.
5. Rebuild.

## Legal pages

- [ ] The privacy policy describes the current build: no database, no analytics script, optional Turnstile, and optional email delivery through the configured provider. Update it in `src/content/legal.ts` before adding analytics, booking, or a different form host.
- [ ] The disclaimer states that the site is not legal advice and that an enquiry does not create a lawyer-client relationship. Keep that language if the form changes.
- [ ] `legalUpdated` in the same file is the date of that copy. Change it when the text changes.

## Images

The drawings on the home and about pages are original SVG illustrations, not photographs of the firm’s office. Replace them with licensed photographs when you have them. Do not hotlink another firm’s site.

The share image is generated from `scripts/generate-og.ts` into `public/og.png`.

## Form and hosting secrets

- [ ] `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, and `TURNSTILE_SECRET_KEY` belong in the Cloudflare dashboard only.
- [ ] `CONTACT_FROM` must be a sender Resend has verified for your domain.
- [ ] Never prefix a secret with `VITE_`. Those variables are embedded in the public JavaScript.
