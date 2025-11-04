# Romantic Website for Alena

## Overview
A personal romantic website created for Alena featuring a dark theme with glowing pink aesthetics. The site includes three main sections: a romantic home page, a story timeline, and a password-protected photo gallery. All content is written in natural Indonesian language to create an intimate, personal experience. The design emphasizes emotional connection through floating particle animations, soft glows, and elegant royal typography.

## Recent Changes
- **November 4, 2025**: Updated with new features
  - Added interactive "Do You Love Me?" popup that appears on first visit
  - Popup has playful behavior: entire box moves to random position when hovering/clicking "No"
  - Updated to elegant royal fonts: Playfair Display (main) and Cormorant Garamond (serif)
  - Gallery updated with 4 real photos from attached assets
  - Removed password hint from gallery login for cleaner UI
  - All changes use localStorage to remember popup dismissal

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework**: React SPA with client-side routing
- **Router**: Wouter for lightweight, declarative routing
- **State Management**: TanStack Query (React Query) for server state and API interactions
- **UI Framework**: Shadcn UI components with Radix UI primitives
- **Styling**: Tailwind CSS with extensive customization for dark theme and pink glow effects

**Design System**:
- **Color Scheme**: Dark background with glowing pink accents (HSL 330, 85%, 42% primary)
- **Typography**: Playfair Display for elegant body text, Cormorant Garamond for serif, Pacifico for romantic headings
- **Animation**: Custom canvas-based particle system, CSS hover/active elevation effects, moving popup
- **Theme**: Dark mode only with pink glow shadows and HSLA-based effects
- **Component Pattern**: Shared UI components from Shadcn with custom romantic styling

**Key Pages**:
- **Home** (`/`): Hero message with animated particle background
- **Our Story** (`/cerita-kita`): Timeline narrative with story cards
- **Gallery** (`/galeri`): Password-protected photo viewer
- **404**: Not found page

**Custom Components**:
- `Particles.tsx`: Canvas-based floating pink particle animation system
- `Navigation.tsx`: Fixed top navigation with active state indicators
- `LovePopup.tsx`: Interactive "Do You Love Me?" popup with playful moving behavior - entire box relocates when user tries to click "No", with confetti effects on "Yes" and localStorage persistence

### Backend Architecture
**Framework**: Express.js with TypeScript
- **Server Setup**: Vite development server in middleware mode for HMR
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Storage**: In-memory storage implementation (MemStorage class)
- **Validation**: Zod schemas for request validation

**API Endpoints**:
- `POST /api/gallery/verify`: Password verification for gallery access (hardcoded password: "mommy")

**Build Process**:
- Development: TSX execution with Vite middleware
- Production: Vite build for client + esbuild bundle for server
- Static serving: Vite-built assets served from Express in production

### External Dependencies

**Database**: 
- Drizzle ORM configured for PostgreSQL (@neondatabase/serverless)
- Schema defined but no active database usage in current implementation
- Migration support via drizzle-kit

**Third-Party Services**:
- Google Fonts: Pacifico and Playfair Display/Cormorant Garamond font families
- None required for core functionality (self-contained application)

**Notable Libraries**:
- Form handling: React Hook Form with Hookform Resolvers
- Date utilities: date-fns
- UI components: Comprehensive Radix UI component suite
- Carousel: Embla Carousel React
- Validation: Zod with Drizzle-Zod integration

**Development Tools**:
- Replit-specific plugins for error overlay, cartographer, and dev banner
- PostCSS with Tailwind and Autoprefixer
- TypeScript with strict mode enabled

### Architectural Decisions

**Monorepo Structure**: Client, server, and shared code in single repository
- **Rationale**: Simplifies development for small personal project, enables code sharing
- **Trade-off**: Less modularity, but appropriate for project scale

**In-Memory Storage**: Gallery password stored in MemStorage class
- **Rationale**: Simplicity for single password use case, no database overhead
- **Trade-off**: Password resets require code deployment, no persistence across restarts

**Canvas Particles**: Custom implementation instead of particle library
- **Rationale**: Full control over romantic aesthetic, lightweight performance
- **Benefit**: Precise pink glow effects, smooth animations, mobile optimization

**Shadcn UI Pattern**: Component library via copy-paste instead of npm package
- **Rationale**: Full customization control, no version lock-in, tree-shakeable
- **Benefit**: Easy theme modifications for romantic pink/dark aesthetic

**Client-Side Routing**: Wouter instead of React Router
- **Rationale**: Minimal bundle size, sufficient for 3-page application
- **Trade-off**: Fewer features, but meets current needs

**TypeScript Strict Mode**: Enabled for type safety
- **Rationale**: Catch errors early, better IDE support, code quality
- **Configuration**: Path aliases for clean imports (@/, @shared/, @assets/)