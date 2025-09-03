import { defineConfig } from 'astro/config';

// Derive site URL dynamically so it works on Vercel preview / production and locally.
// Vercel sets: VERCEL_URL (e.g. my-app.vercel.app) and on production you may set SITE env.
const deploymentSite = process.env.SITE || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4321');

export default defineConfig({
  site: deploymentSite,
  output: 'static',
  scopedStyleStrategy: 'class',
  vite: {
    ssr: {
      noExternal: ['three']
    },
    build: {
      rollupOptions: {
        input: {
          main: './src/client/main.ts'
        }
      }
    }
  }
});
