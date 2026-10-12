# Verification — 12 October 2026

## Automated checks

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed with Next.js 16.4.0; the portfolio is statically prerendered and the optional mail handler is server-rendered.
- `npm run test:contact` against the production server — 5 passed, 0 failed. It covers availability without credential disclosure, input bounds, malformed JSON, content type, oversized bodies, cross-origin requests, honeypot, and the unconfigured SMTP response. It does not send an email.
- `npm audit --omit=dev` — 0 production dependency vulnerabilities.
- `git diff --check` — passed.

A full `npm audit` still reports 5 high severity advisories in the existing Next.js ESLint configuration dependency tree (`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`). The installed current `eslint-config-next` version is 16.4.0; npm's suggested automatic fix would downgrade it to 14.2.35, incompatible with this Next.js 16 app. Production packages are clear. The affected packages are used for local linting, not shipped in the production dependency bundle.

## Browser checks

- Rendered the production build at desktop width and a 390 px mobile width.
- Mobile menu opens, closes after selecting a section, and responds to Escape.
- Contact button detects that SMTP is not configured and shows the direct email link.
- Project disclosure opens and reveals the case study in the accessibility tree.
- All in-page anchors resolve, the homepage contains one H1, all page images load, and the document has no horizontal overflow at 390 px.
- Browser console showed no warnings or errors.
- Homepage, sitemap, robots, social image, SVG/PNG icons, manifest, Google verification file, and optimized photos returned HTTP 200 from the production server.
- Diamond Pappadam and DailyOS live links and all three featured repository links returned HTTP 200.

Desktop and mobile visual captures are in `docs/screenshots/`.

## Limits

No Lighthouse performance score is reported. SMTP delivery needs real `EMAIL_USER` and `EMAIL_PASS` credentials and was not exercised. Deployment to Vercel and Google Search Console indexing require the owner's Vercel and Search Console accounts; the source is configured for deployment but remains local.
