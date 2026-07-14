# Launch checklist

## Required before publishing

- Select the final company name and check domain/trademark availability.
- Update every field in `src/config.ts`, especially the canonical production URL and business email.
- Verify that `hello@provenarium.com` is configured and receiving messages before launch.
- Replace the working SVG mark and favicon if the visual identity changes.
- Replace or explicitly approve the generated scientific-team placeholder photography in `public/images/`.
- Review every service and assurance statement with the intended quality/validation partner.
- Connect the contact form to an approved email, CRM, or privacy-conscious form service.
- Update `src/pages/privacy.astro` to reflect the actual form and analytics behavior.
- Add a real Open Graph image after the brand is final.

## Traffic-test instrumentation

- Add privacy-respecting analytics (for example, Plausible, Fathom, or a consent-aware GA4 setup).
- Track consultation CTA clicks, service-route depth, contact starts, and completed form submissions.
- Connect Google Search Console and Bing Webmaster Tools.
- Submit a sitemap after the final domain is configured.
- Create a robots file and verify canonical URLs in the production build.

## Recommended first content pages

1. How to retire a regulated Excel workflow.
2. When does an analytical application require GxP validation?
3. A reference architecture for validated R and Python applications.
4. How to validate a Shiny or Streamlit application.
5. From user requirements to automated end-to-end evidence.

These should become substantive search pages, not short announcement posts. Each should link to the most relevant service route and end with one workflow-specific call to action.
