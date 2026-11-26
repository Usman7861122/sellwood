import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';

// Old WordPress blog posts lived at /<slug>/ and the list at /articles/
const posts = JSON.parse(readFileSync(new URL('./src/data/blogPosts.json', import.meta.url), 'utf8'));
const redirects = { '/articles/': '/blog/', ...Object.fromEntries(posts.map((p) => [`/${p.slug}/`, `/blog/${p.slug}/`])) };

export default defineConfig({
  site: 'https://sellwoodmd.com',
  redirects,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/home-2/') })],
  vite: { plugins: [tailwindcss()] },
});
