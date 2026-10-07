# Giuseppe Aceto — Personal Website

Personal site for Giuseppe Aceto: critical and speculative design — tools, laboratories, and writing.

Built with [Astro](https://astro.build). Licensed under [AGPL-3.0](./LICENSE).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/i18n/` — copy and routes (IT / EN)
- `src/views/` — page compositions shared by locale routes
- `src/components/` — UI sections and figures
- `src/pages/` — Astro routes (`/` and `/en/…`)
- `src/styles/global.css` — design tokens
