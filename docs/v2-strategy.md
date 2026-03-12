# Pepe Portfolio V2 Strategy

## Current weaknesses

### 1. Impact is friendly but not premium

The original portfolio is warm and memorable, but the first impression lands as lightweight rather than high-value. The personality is there; the authority is not.

### 2. Imagery is too small and too sparse

Project proof exists, but it is presented as compact cards with limited visual drama. The work does not feel curated or cinematic.

### 3. Scroll flow feels flat

The existing site reads as a stack of sections instead of a directed experience. There is not enough contrast between arrival, proof, reflection and close.

### 4. Skills are presented as a generic list

The skills section communicates tools, but not taste, positioning or how Pepe actually works.

### 5. Contact lacks emotional payoff

The original close is useful, but it does not feel like a final scene. It does not increase desire to reach out.

### 6. The live site also has a technical problem

During review, the deployed portfolio attempted to load `/src/main.jsx` as a module and returned an HTML MIME type instead. So beyond design limitations, the current live artifact is also partially broken.

## V2 concept: Warm Orbit

Warm Orbit is a cinematic portfolio direction built around one core idea:

Pepe stays at the center as a human, approachable creative developer, while the work, proof and atmosphere orbit around him with more clarity and confidence.

The concept is not a clone of the reference site. It borrows only the useful lessons:

- stronger opening composition
- clearer visual hierarchy
- larger project proof
- more deliberate pacing

The final direction stays distinct by centering the mascot mechanic, using warmer editorial contrast, and leaning into Pepe’s specific identity as a frontend builder with visual sensitivity.

## Experience direction

### Arrival

Open with a dark cinematic stage, large serif typography, early proof cards and the living mascot in the center.

### Momentum

Use the signal strip and featured project sections to create immediate evidence of quality.

### Human depth

Shift into a lighter editorial section for about content so the experience breathes and the person behind the work becomes clearer.

### Competence

Reframe capabilities as premium strengths, not a stack dump.

### Trust

Use structured proof cards and collaboration-fit language to help recruiters and clients understand where Pepe belongs.

### Closing shot

End on a bold contact panel with strong copy, clean CTAs and a sense of invitation instead of leftover footer energy.

## Information architecture

1. Hero / arrival
2. Signal strip
3. Featured work
4. About Pepe
5. Capabilities
6. Proof and fit
7. Contact

## Motion system

- Hero reveal with blur, fade and stagger
- Floating proof cards around the avatar
- Cursor-reactive eye tracking with idle movement when the mouse rests
- Scroll-triggered section reveals
- Subtle hover lift and image zoom on work cards
- Reduced-motion fallback across the experience

## Image strategy

- Use real screenshots as early proof for featured projects
- Keep a placeholder system for private work that still feels intentional
- Build layouts that can later accept portrait photos, device mockups and more art-directed visuals without structural changes

## Copy direction

The tone shifts from casual portfolio copy to authored, confident language while preserving warmth.

Guardrails:

- no corporate jargon
- no fabricated achievements
- no cold product-marketing tone
- no junior portfolio clichés

## Implementation choices

- React + Vite for a clean static portfolio architecture
- Framer Motion for consistent, maintainable section motion
- Centralized content in `src/data/siteContent.ts`
- Custom illustration component for the mascot so the signature mechanic remains owned by the site itself
