# Summit Properties — Starter

A responsive real-estate marketing website built with **React, TypeScript, Vite and plain CSS**. No Tailwind setup required; the styling is intentionally easy to customize.

## Quick start

```bash
npm install
npm run dev
```

Vite will print a local development URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Included

- Premium responsive landing page and property-card grid
- Search by location/title and filter by property type or Buy / Rent / Invest
- Save/favourite properties (client-side state)
- Property detail modal
- Viewing-request form with date validation and client-side confirmation
- Services, process, editorial/insights, contact and footer sections
- Editable site copy and demo property data in `src/content/site.ts`
- Responsive CSS and accessible labels for key controls

## Suggested project structure

```text
src/
  content/site.ts   # Brand content, listing data, service copy
  App.tsx           # Page sections and interactions
  main.tsx          # React entry point
  styles.css        # Design system and responsive styling
```

## Important before launch

This is a front-end starter with sample listings and stock imagery. Replace all demo property data, prices, images, contact details and claims with verified information. Property photos are loaded from Unsplash URLs; download/license approved assets or use your own CDN for production.

The viewing form currently validates in the browser and displays a confirmation message only. Connect it to a backend, CRM, email provider or form service before accepting real enquiries. Favourites are stored in memory and reset on refresh. For a production property platform, consider:

1. A CMS or database for property records, availability, galleries, amenities and agent details.
2. Server-side search, pagination, map/geospatial search and filters for budget, bedrooms, location and property status.
3. Booking workflows with email notifications, calendar slots, anti-spam protection and consent handling.
4. Authentication only if saved searches, customer dashboards or agent portals are required.
5. SEO metadata, Open Graph images, analytics, error monitoring, accessibility testing and image optimization.
6. Clear disclosures and a process for verifying listing accuracy, pricing and investment-related claims.

## Suggested next phase

Keep this template as the polished public-facing marketing site. Add a backend/CMS when you need agents to manage listings without editing code, then connect viewing requests and lead capture. For a template aimed at multiple real-estate prospects, keep brand copy, theme tokens and listings in configuration rather than hard-coding them into components.
