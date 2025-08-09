// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
  // GitHub Pages configuration
  // For user/organization sites like anaesh.github.io, this can be left as '/'
  // For project sites, it would be '/repo-name/'
  base: '/',
  // Site metadata for sitemap generation
  site: 'https://anaesh.github.io',
  // Sitemap configuration
  integrations: [sitemap()]
});
