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

## Production (static export)

This project is configured for **static export** (`output: "export"` → `./out`).

```bash
npm install
npm run build        # outputs static site to ./out
```

### Deploy: GitHub Pages (automatic)

A GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
builds and deploys to GitHub Pages on every push to `main`.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment →
Source: GitHub Actions**. Live URL: `https://aditiyapohan.github.io/Compro-Aeterion/`.

The build uses a base path (`NEXT_PUBLIC_BASE_PATH=/Compro-Aeterion`, set by the
workflow) because the site is served from a sub-folder. Locally that env is
empty, so `npm run dev` serves from the root as usual. For other hosts (Vercel,
cPanel) leave the base path empty and serve `out/` at the domain root.

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
