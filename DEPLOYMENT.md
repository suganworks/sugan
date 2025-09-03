# Deployment Guide

## Vercel (Recommended Now)
1. Push current `main` branch to GitHub.
2. In Vercel dashboard: "Add New Project" → Import existing GitHub repo `suganworks/sugan`.
3. Build Settings:
   - Framework Preset: Astro (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: leave default (`npm install`)
4. Environment Variables (optional override):
   - `SITE` = `https://your-custom-domain` (only set if you add a custom domain)
5. Deploy. Preview URLs will use dynamic `VERCEL_URL`; production uses `SITE` if set.

## GitHub Pages (Previous)
Already configured via Actions. Now that Vercel is primary, you may disable Pages if you want a single canonical domain.

## Local Testing
Run `npm run build` then `npm run preview` to mimic production output.

## Notes
- `astro.config.mjs` picks site URL dynamically (SITE env or VERCEL_URL fallback).
- `vercel.json` pins dist directory and supplies a default SITE for production.
- Update `SITE` if you attach a custom domain in Vercel.
