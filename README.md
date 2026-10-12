# Fayis Kanthapuram — Personal Portfolio

A complete editorial redesign of Fayis’s developer portfolio: warm ivory, charcoal, vermilion accents, real photography, and project-specific visual studies. Built with Next.js App Router, React, TypeScript, and a responsive CSS design system.

## Local development

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Next.js. If port 3000 is occupied:

```sh
npm run dev -- --port 3017
```

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

The page is server-rendered. Only navigation and the optional contact form need client components. Case-study disclosures use native HTML. There is no boot screen, animation framework, cursor replacement, 3D runtime, analytics, or GitHub API dependency.

## Contact

The published email and profile links work without configuration. The existing Nodemailer backend is retained and validated. The form checks `/api/contact` before showing inputs and falls back to a direct email link when the service is not configured.

To enable delivery, set the following **server-only** environment variables in Vercel (or `.env.local` during development):

```text
EMAIL_USER=your Gmail address
EMAIL_PASS=your Gmail app password
```

Never use a `NEXT_PUBLIC_` prefix or commit actual credentials. `.env.example` documents the keys. The endpoint validates input types and lengths, bounds the body size, rejects cross-origin browser requests and a populated honeypot, and sends plain text. Success is shown only after SMTP accepts the message. Delivery requires valid SMTP credentials and has not been verified without them.

## Editing

- `src/data/portfolio.ts`: identity, project descriptions, verified links, and skills.
- `src/app/page.tsx`: server-rendered sections and editorial copy.
- `src/app/globals.css`: design tokens, component styles, responsive breakpoints, reduced-motion behavior.
- `src/components/ProjectVisual.tsx`: concept illustrations (not application screenshots).
- `public/images/`: optimized versions of the supplied photographs.
- `docs/CONTENT-AUDIT.md`: source evidence, content corrections, and unavailable project information.
- `docs/QA.md`: verification results and limits.

## Vercel deployment

Retains the Next.js framework and original canonical domain: **https://fayis-kanthapuram.vercel.app/**.

1. Connect/push this repository to the existing Vercel project.
2. Use the Next.js preset, `npm run build`, and default output directory. Use Node.js 22 or a currently supported newer LTS.
3. Add the optional email variables if form delivery is desired.
4. After deployment, confirm `/`, `/robots.txt`, `/sitemap.xml`, `/og-image.png`, `/icon.svg`, `/manifest.webmanifest`, and the preserved Google verification file return successfully.
5. Verify email delivery once with real credentials if enabling the form.

No deployment or GitHub push is performed as part of this local redesign. No additional database or backend service is needed.

## SEO and indexing

The server-rendered page includes the full-name H1, descriptive title and meta description, canonical URL, Person and WebSite JSON-LD, social preview, sitemap, robots, and icons. Existing Google Search Console verification is preserved.

After deployment, submit `https://fayis-kanthapuram.vercel.app/sitemap.xml` in Google Search Console, inspect the homepage URL, and request indexing. Keep the same identity and portfolio URL on GitHub and LinkedIn. These steps enable discovery; they do not guarantee search rankings.
