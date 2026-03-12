# Pepe Portfolio V2

A cinematic, motion-first rebuild of Pepe’s portfolio. The site keeps the warmth and personality of the original version, but upgrades it into a more premium, image-led, recruiter-friendly experience.

The V2 is built as a static React + Vite site with a reusable content model, a custom illustrated mascot with cursor-reactive eyes, real project screenshots for featured work, and a cleaner editorial flow from arrival to contact.

## Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Custom CSS design system

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project structure

```text
public/
  images/projects/        Featured project visuals used in the portfolio
src/
  components/            Reusable sections and UI building blocks
  data/siteContent.ts    Main copy, project data, capabilities and contact info
  App.tsx                Page composition and section order
  index.css              Global design system, layout and responsive styles
docs/
  v2-strategy.md         Creative direction, audit and IA decisions
```

## Updating content

### Copy and structure

All editable content lives in [src/data/siteContent.ts](/Users/daniel/Pepeligroso Protfolio/src/data/siteContent.ts). Update that file to change:

- hero copy
- featured projects
- capability cards
- proof / trust messaging
- contact links

### Project visuals

Replace the current images in [public/images/projects](/Users/daniel/Pepeligroso Protfolio/public/images/projects) with final screenshots, mockups or art-directed visuals.

Current state:

- `dicapta.png`, `morningstar.png`, `github-explorer.png` are live screenshots used as real proof
- the private Chrome extension card intentionally uses a placeholder system so a final visual can be added later without changing layout

### Mascot / character

The central character lives in [src/components/PepeAvatar.tsx](/Users/daniel/Pepeligroso Protfolio/src/components/PepeAvatar.tsx).

That component controls:

- the illustration
- cursor tracking
- idle eye movement when the mouse rests
- reduced-motion behavior

If you want to swap in a more polished illustration later, keep the same wrapper structure so the motion logic still works.

## Design notes

- Serif display + modern sans for a warmer, more editorial tone
- Dark cinematic opening balanced with sand-toned breathing sections
- Real screenshots used early to establish proof fast
- Motion focuses on reveals, hover polish and the living mascot, not gimmicks

## Deployment

This is a standard static build. After `npm run build`, deploy the `dist/` folder to Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Strategy

The redesign audit, V2 concept, experience direction and IA are documented in [docs/v2-strategy.md](/Users/daniel/Pepeligroso Protfolio/docs/v2-strategy.md).
