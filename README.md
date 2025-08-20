# Bright Green PAC — Starter (Next.js + Vercel)

This repo bootstraps the Bright Green PAC site with the agreed visual system.

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
- Push to GitHub, then import into Vercel.
- Set environment variables in Vercel if integrating donations.

## Structure
- `pages/` (Pages Router)
- `components/` UI parts (Header, Footer, Button, DonateModal, EventTable)
- `styles/globals.css` (brand tokens, fonts)
- `public/hero-image.jpg` (placeholder hero)
- `data/` static JSON for events/news (swap to CMS later)

## Fonts
League Spartan (headings), Roboto (body), Pacifico (wordmark).
Linked in `_document.js` and referenced in CSS.
