# Signal & State marketing site

A static, search-friendly marketing site for a life-sciences R and Python application consultancy. The working brand is temporary and intentionally easy to replace.

## Run locally

```sh
npm install
npm run dev
```

Production checks:

```sh
npm run check
npm run build
npm run preview
```

## Change the working brand

Update [src/config.ts](src/config.ts). The name, legal name, canonical URL, email, location, and consultation label are consumed across the layout, navigation, metadata, schema, footer, and page content.

The visual mark is an original, code-native SVG in [src/components/BrandMark.astro](src/components/BrandMark.astro). Replace that component and [public/favicon.svg](public/favicon.svg) when the final identity is selected.

## Content model

- Homepage: [src/pages/index.astro](src/pages/index.astro)
- Service content: [src/data/services.ts](src/data/services.ts)
- Reusable service route: [src/pages/services/[slug].astro](src/pages/services/[slug].astro)
- Platform direction: [src/pages/platform.astro](src/pages/platform.astro)
- Founder story: [src/pages/about.astro](src/pages/about.astro)
- Contact flow: [src/pages/contact.astro](src/pages/contact.astro)
- Site schematic and content guardrails: [SITE_ARCHITECTURE.md](SITE_ARCHITECTURE.md)

## Contact behavior

The launch form opens a pre-filled email in the visitor’s local mail client. It does not transmit or store submissions. Connect it to an approved form or CRM endpoint before expecting reliable lead capture.
