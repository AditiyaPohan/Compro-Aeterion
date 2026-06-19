# Aetherion Zynera — Company Profile (V2)

Premium corporate company profile for **PT Aetherion Zynera Indonesia**.
Modernized experience (~80% reference layout / 20% motion) while keeping a
clean, trustworthy corporate appearance.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config)
- **GSAP** + **ScrollTrigger** (hero parallax / zoom)
- **Lenis** smooth scroll (synced with ScrollTrigger)
- **Framer Motion** (reveals, stagger, slider, hover)
- **lucide-react** icons
- All illustrations & textures are **local SVG** (`/public/assets`) — no external image assets.

## Sections

1. Fixed header (transparent → solid on scroll, mobile menu)
2. Hero — parallax background, floating particles, text reveal, SVG illustration
3. Services — `Aetherion Core Services`, 5 staggered cards
4. About — logo card + "Why Choose" checklist + animated counters
5. Featured Projects — 4 cards, hover zoom + lift
6. Achievements — count-up statistics
7. Testimonials — auto-sliding corporate carousel
8. Contact — CTA + form (demo, no backend)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm install
npm run build
npm run start
```

## Colors

| Token | Hex |
| --- | --- |
| Primary Blue | `#1E5AA8` |
| Secondary Blue | `#2F7DE1` |
| Gold Accent | `#D4AF37` |
| White | `#FFFFFF` |
| Light Gray | `#F5F7FA` |

Content is centralized in [`lib/data.ts`](lib/data.ts).
Accessibility: respects `prefers-reduced-motion` (disables Lenis, parallax,
floats, and count-up animations).
