import { defineConfig } from 'astro/config';

export default defineConfig({
  // For a project GitHub Pages site hosted at https://suganworks.github.io/sugan/
  // ensure the site value matches the final public URL so generated links & RSS are correct.
  site: 'https://suganworks.github.io/sugan',
  // Base path so asset URLs include /sugan when deployed under project pages
  base: '/sugan',
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
