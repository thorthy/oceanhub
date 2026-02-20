# OceanHub - Brazilian Boat Rental Marketplace

## Overview

OceanHub is a Brazilian boat rental marketplace (P2P platform) that connects boat owners with people looking to rent watercraft for leisure experiences. Think "Airbnb for boats" focused on the Brazilian market. The platform supports jet skis, speedboats, sailboats, fishing boats, and catamarans.

Currently, the project is a **landing page MVP** with a full-stack architecture ready for expansion. All user-facing text is in **Brazilian Portuguese (pt-BR)**. The frontend is a responsive, mobile-first single-page marketing site with animated sections, mock data, and no backend API integration yet. The backend skeleton is in place with Express and a storage layer, ready for real features like user auth, boat listings, and booking flows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query (configured but mostly unused in current MVP)
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support via CSS variables in `client/src/index.css`)
- **UI Components**: shadcn/ui (new-york style) — full component library installed under `client/src/components/ui/`
- **Icons**: Lucide React for most icons, react-icons for social media icons
- **Fonts**: Plus Jakarta Sans + Inter (loaded from Google Fonts)
- **Build Tool**: Vite with React plugin
- **Animations**: Custom intersection observer hook (`useInView`) for scroll-triggered fade-in/slide-up animations; `useCountUp` for animated number counters
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Frontend Page Structure
The landing page (`client/src/pages/Home.tsx`) assembles these sections in order:
1. **Header** — Sticky navbar with scroll-aware transparency
2. **HeroSection** — Full-viewport hero with floating search bar
3. **CategoriesSection** — Boat type cards (horizontal scroll mobile, grid desktop)
4. **FeaturedBoatsSection** — Popular boat cards with `<BoatCard />` component
5. **HowItWorksSection** — 3-step process explanation
6. **HostCTASection** — Call-to-action for boat owners
7. **DestinationsSection** — Popular destination cards with real images
8. **TestimonialsSection** — User review carousel
9. **MetricsSection** — Animated stats/counters
10. **Footer** — Links and social media

### Backend
- **Runtime**: Node.js with TypeScript (tsx for dev, esbuild for production)
- **Framework**: Express 5
- **HTTP Server**: Node's `createServer` wrapping Express
- **Dev Server**: Vite dev server integrated as middleware (see `server/vite.ts`)
- **Production**: Static file serving from `dist/public` (see `server/static.ts`)
- **API Pattern**: All API routes should be prefixed with `/api` (defined in `server/routes.ts`)
- **Build**: Custom build script (`script/build.ts`) that builds client with Vite and server with esbuild

### Data Storage
- **Current**: In-memory storage (`MemStorage` class in `server/storage.ts`) with a Map-based implementation
- **Database Ready**: Drizzle ORM configured with PostgreSQL dialect (`drizzle.config.ts`)
- **Schema**: Defined in `shared/schema.ts` using Drizzle's `pgTable`. Currently only has a `users` table with `id` (UUID), `username`, and `password`
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migration**: Uses `drizzle-kit push` for schema sync (no migration files approach)
- **Session Store**: `connect-pg-simple` is a dependency (for future session management with PostgreSQL)

### Mock Data
All frontend data is currently mock data defined in `client/src/lib/mockData.ts`. This includes boats, destinations, testimonials, and categories. The data structures are typed with TypeScript interfaces and designed to be swapped with real API calls later.

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code coexist in one repo. The `shared/` directory contains schemas and types used by both sides.
- **Mobile-First**: All components are designed mobile-first with responsive breakpoints
- **No SSR**: The app is a client-side SPA (RSC is disabled in shadcn config)
- **Storage Interface Pattern**: `IStorage` interface in `server/storage.ts` allows swapping between MemStorage and a real database implementation without changing route handlers

## External Dependencies

### Database
- **PostgreSQL** — Required for production. Connection via `DATABASE_URL` environment variable. Drizzle ORM handles all database operations.

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **express** v5 — HTTP server framework
- **@tanstack/react-query** — Server state management
- **wouter** — Client-side routing
- **zod** — Schema validation
- **react-day-picker** — Calendar/date picker component
- **embla-carousel-react** — Carousel functionality
- **vaul** — Drawer component
- **react-icons** — Social media icons (Instagram, Facebook, X)
- **recharts** — Charting library (available but not actively used yet)
- **input-otp** — OTP input component
- **react-resizable-panels** — Resizable panel layouts

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Dev tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Dev banner (dev only)

### Static Assets
- Hero background image expected at `client/public/images/hero-bg.png`
- Destination images referenced in mock data (external URLs or local paths)