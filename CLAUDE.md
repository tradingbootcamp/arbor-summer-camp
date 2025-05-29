# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `bun run dev` (or `npm run dev`)
- **Build for production**: `bun run build` 
- **Preview production build**: `bun run preview`
- **Generate PWA assets**: `bun run pwa:generate-assets`
- **Deploy to Vercel**: `bun run vercel-build`

## Architecture Overview

This is the Arbor Summer Camp website built with Astro, featuring:

### Content Management
- **Content Collections**: Defined in `src/content/config.ts` with Zod schemas for type safety
  - `branches`: Educational program offerings with instructors, schedules, and pricing
  - `posts`: Blog entries with author metadata and tagging
  - `projects`: Portfolio items with publication dates and links
  - `authors`: Author profiles with images and descriptions

### Internationalization
- Multi-language support (English/Italian) configured in `astro.config.mjs`
- Translation strings managed in `src/i18n/ui.ts`
- Default locale: English (`en`)

### Styling & Design
- **Tailwind CSS** with custom color palette themed for camp activities
- Custom colors: `forest`, `lake`, `campfire`, `sunshine`, `gold`
- **GSAP animations** (requires premium version - see gsap-bonus.tgz)
- **DaisyUI** components (currently disabled due to dark mode issues)
- Prettier formatting with custom config (tabs, 150 char width)

### Key Components Structure
- `src/components/global/`: Site-wide components (Navigation, Footer, etc.)
- `src/components/landing/`: Homepage sections (Hero, Branches, etc.) 
- `src/components/branches/`: Branch-specific components (cards, schedules)
- `src/layouts/`: Page layout templates

### Content Structure
- Branch content in `/src/content/branches/en/` with markdown frontmatter
- Each branch has instructor info, cover images, schedules, and purchase links
- Blog posts and projects follow similar content collection patterns

### Deployment
- Configured for Vercel deployment with custom build script
- Supports Cloudflare Workers and Netlify deployment options
- PWA-ready with manifest and service worker capabilities

## Notes
- Uses premium GSAP features - standard version setup not yet documented
- Dark mode currently disabled in Tailwind config due to detection issues
- Content drafts are enabled in markdown processing