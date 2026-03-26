@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static nonprofit website for **Youth & Community Empowerment Center** (youthnyc.org), a Brooklyn-based charitable organization focused on youth empowerment through education, training, and civic engagement.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui (base-ui primitives, NOT radix)
- **Animations**: `motion` library (NOT framer-motion)
- **Package Manager**: pnpm

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Development server
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # ESLint
pnpm dlx shadcn@latest add <component>  # Add shadcn component
```

## Architecture

### Content-Driven Static Site

All page content lives in `src/data/content.ts` — a single source of truth for text, program descriptions, contact info, and donation links.

### Key shadcn/ui Convention (base-ui)

This project uses **base-ui** (not radix). The key difference for Buttons used as links:

```tsx
// CORRECT (base-ui):
<Button render={<Link href="/path" />} nativeButton={false}>Label</Button>

// WRONG (radix pattern — will NOT compile):
<Button asChild><Link href="/path">Label</Link></Button>
```

Same pattern applies to SheetTrigger and other trigger components — use `render` prop instead of `asChild`.

### Pages (App Router)

```
src/app/
├── page.tsx              # Home — hero, mission, programs, volunteer CTA, contact
├── programs/page.tsx     # Programs — sports, educational, language, after-school
├── gallery/page.tsx      # Gallery — responsive image grid
├── about/page.tsx        # About — mission, vision, values
├── donate/page.tsx       # Donate — impact messaging, external donation link
└── layout.tsx            # Root layout with Navbar + Footer
```

### Components

```
src/components/
├── navbar.tsx            # Sticky desktop nav + mobile hamburger trigger
├── mobile-nav.tsx        # Sheet-based mobile navigation
├── footer.tsx            # Multi-column footer
├── hero.tsx              # Full-width hero with overlay
├── section-header.tsx    # Reusable section title + subtitle
├── cta-section.tsx       # Call-to-action blocks
├── program-card.tsx      # Program display card
├── gallery-grid.tsx      # Responsive image grid
├── contact-block.tsx     # Contact info display
├── page-header.tsx       # Interior page header
├── donation-marquee.tsx  # Scrolling donation banner
└── ui/                   # shadcn/ui primitives (auto-generated)
```

### Key Directories

- `src/data/` — Content data files (single source of truth)
- `src/lib/` — Utility functions (cn helper)
- `public/images/` — Static images and assets

## Design Conventions

- Use semantic colors (`bg-primary`, `text-muted-foreground`), never raw Tailwind colors
- Use `gap-*` instead of `space-y-*`
- Use `size-*` for equal width/height
- Use `cn()` for conditional classes
- Animations: use `motion` library, keep subtle (fade-in/slide-up on scroll, hover effects)
- Typography: Playfair Display for headings (`font-heading`), DM Sans for body (`font-sans`)
- Color palette: deep navy primary, warm coral/red accent

## Content Updates

Edit `src/data/content.ts` to change any site content. Replace images in `public/images/`.