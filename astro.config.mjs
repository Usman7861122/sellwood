import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Build fails when a page title or description is outside the SEO range.
const seoCheck = () => ({
  name: 'seo-length-check',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const root = fileURLToPath(dir);
      const files = [];
      const walk = (d) => readdirSync(d).forEach((n) => { const f = join(d, n); statSync(f).isDirectory() ? walk(f) : n === 'index.html' && files.push(f); });
      walk(root);
      const bad = [];
      for (const f of files) {
        const h = readFileSync(f, 'utf8');
        if (h.includes('http-equiv="refresh"')) continue; // redirect pages
        const t = (h.match(/<title>(.*?)<\/title>/s)?.[1] ?? '').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"');
        const d = (h.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? '').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"');
        const rel = f.slice(root.length);
        if (t.length < 30 || t.length > 60) bad.push(`${rel} title ${t.length}: ${t}`);
        if (d && (d.length < 120 || d.length > 155)) bad.push(`${rel} description ${d.length}`);
      }
      if (bad.length) throw new Error('SEO length check failed:\n' + bad.slice(0, 40).join('\n') + (bad.length > 40 ? `\n...and ${bad.length - 40} more` : ''));
    },
  },
});

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
  integrations: [react(), seoCheck(), sitemap({
    filter: (page) => !page.includes('/home-2/') && !/\/about\/$/.test(page),
    serialize: (item) => ({ ...item, lastmod: lastmodFor(item.url) }),
  })],
  vite: { plugins: [tailwindcss()] },
});
