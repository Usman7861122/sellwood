# Sellwood

Astro + React islands + Tailwind + Motion (Framer).

## Setup
```
npm install astro @astrojs/react @astrojs/sitemap @astrojs/check react react-dom motion tailwindcss @tailwindcss/vite typescript
npm install -D @types/react @types/react-dom
npm run dev
```

## Folders
- `src/pages` routes only
- `src/layouts` page shells
- `src/components` static Astro components (zero JS)
- `src/islands` React + Motion components (use `client:visible` / `client:load`)
- `src/data` content as typed data files
- `src/styles/global.css` Tailwind entry and tokens
