# Mathew Alexander — AI Engineer Portfolio

A creative, dark-theme portfolio built with Next.js and designed for static deployment.

## Positioning
AI Engineer · Generative AI · Agentic Systems · Python Backend Engineering

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
```
The project uses Next.js static export (`output: "export"`).

## GitHub Pages deployment
1. Create a GitHub repository named `mathew-alexander-portfolio` (or choose your preferred name).
2. Push this project to the `main` branch.
3. For a repository site, configure `basePath` and `assetPrefix` in `next.config.ts` to match the repository name. For a user site named `USERNAME.github.io`, these are normally not needed.
4. Add a GitHub Actions workflow to build the site and publish the generated `out/` directory using GitHub Pages.
5. Add the published URL to your CV and LinkedIn.

## Important content rules
- Company projects are portfolio case studies, not open-source releases.
- Do not publish employer-owned source code, private screenshots, credentials, customer information or confidential architecture.
- The CodelessIQ demo should be independently recreated and clearly labelled as a portfolio demonstration.
- Replace all TODO markers and verify project details before publishing.
- Add your GitHub username, approved resume PDF and real contact links.

## Project documentation
See `docs/project-documentation/` and `docs/architecture/`.
