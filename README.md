# busitech-ir-lux.github.io

A resume/portfolio website built with Astro, featuring dark mode, responsive design, and Decap CMS for content management.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:4322 to view the site.

4. For content management, visit http://localhost:4322/admin/ (requires GitHub setup).

## CMS Setup

To use the CMS:
- Create a GitHub repo named `busitech-ir-lux.github.io` (or update `config.yml` with your repo name).
- Push the code to GitHub.
- The CMS will authenticate via GitHub and allow editing of `resume.json`.

## Build

To build for production:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```