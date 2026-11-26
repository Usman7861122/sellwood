import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Old WordPress blog posts lived at /<slug>/ and the list at /articles/
const posts = JSON.parse(readFileSync(new URL('./src/data/blogPosts.json', import.meta.url), 'utf8'));
const redirects = { '/articles/': '/blog/', ...Object.fromEntries(posts.map((p) => [`/${p.slug}/`, `/blog/${p.slug}/`])) };

// Real update dates for the sitemap: last git commit of the files that feed each section.
const gitDate = (...files) => {
  try {
    const d = execSync(`git log -1 --format=%cI -- ${files.join(' ')}`, { encoding: 'utf8' }).trim();
    return d || undefined;
  } catch { return undefined; }
};
const sources = [
  ['/blog/', ['src/data/blogPosts.json']],
  ['/providers/', ['src/data/providerPages.ts']],
  ['/locations/', ['src/data/locationPages.ts']],
  ['/services/', ['src/data/serviceCatalog.ts', 'src/data/service-bodies']],
];
const dates = Object.fromEntries(sources.map(([k, f]) => [k, gitDate(...f)]));
const fallback = gitDate('src/data/pages.json') || gitDate('src');
const lastmodFor = (url) => {
  const path = new URL(url).pathname;
  const hit = sources.find(([k]) => path.startsWith(k));
  return (hit && dates[hit[0]]) || fallback;
};

export default defineConfig({
  site: 'https://sellwoodmd.com',
  redirects,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [react(), sitemap({
    filter: (page) => !page.includes('/home-2/') && !/\/about\/$/.test(page),
    serialize: (item) => ({ ...item, lastmod: lastmodFor(item.url) }),
  })],
  vite: { plugins: [tailwindcss()] },
});
