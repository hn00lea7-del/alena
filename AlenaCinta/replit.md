# Romantic Website for Alena

## Overview
A personal romantic website created by Harsh for his girlfriend Alena. The site features a dark theme with glowing pink elements, floating particle animations, and natural Indonesian language throughout. Built as a special gift to celebrate their relationship.

## Recent Changes
- **November 4, 2024**: Initial complete implementation
  - Created three main pages: Home, Our Story, and password-protected Gallery
  - Implemented custom particle animation system with pink glowing effects
  - Built responsive navigation and page routing
  - Added backend password verification for gallery access
  - All content in natural Indonesian language

## Project Architecture

### Frontend (React SPA)
- **Framework**: React with Wouter for routing
- **Styling**: Tailwind CSS with dark theme, custom pink glow effects
- **Fonts**: Poppins (main), Pacifico (romantic headings)
- **Components**:
  - `Particles.tsx`: Canvas-based floating pink particle animation
  - `Navigation.tsx`: Fixed top navigation with active state
  - Pages: Home, OurStory, Gallery (password-protected)
- **State Management**: TanStack Query for API calls
- **UI Library**: Shadcn components (Card, Button, Input, Toast)

### Backend (Express)
- **Framework**: Express.js
- **Storage**: In-memory storage (MemStorage)
- **Endpoints**:
  - `POST /api/gallery/verify`: Validates gallery password ("mommy")

### Design System
- **Theme**: Dark background with glowing pink accents
- **Colors**: 
  - Primary: HSL(330, 85%, 42%) - Pink
  - Background: Dark theme with subtle purple tint
  - Effects: Pink glow shadows using HSLA
- **Animations**: 
  - Floating particles (20-30s duration)
  - Glow pulse effects on interactive elements
  - Smooth hover/active elevations
- **Typography**: Clear hierarchy with romantic font for special headings

## Key Features

### 1. Home Page (/)
- Romantic welcome message in Indonesian
- Animated pink particles background
- Heart icons with glow effects
- Personal message card

### 2. Our Story Page (/cerita-kita)
- 7 story cards chronicling the relationship:
  - First meeting (November 1)
  - First conversation
  - Translation love (Alena translates every message)
  - What makes her special
  - First fight
  - Message to Alena's friends
  - Learning Indonesian
- Timeline layout with icons for each moment
- Natural Indonesian storytelling (not machine-translated)

### 3. Gallery Page (/galeri)
- **Password Protection**: "mommy" (case-insensitive)
- Backend verification via API
- 5 photo placeholders with romantic captions
- Lightbox/modal view for enlarged photos
- Smooth unlock animation

## User Preferences
- **Language**: Indonesian (natural, conversational tone - not AI-like)
- **Design**: Dark theme with light glowing pink elements preferred
- **Content**: Personal, intimate, heartfelt messages
- **No Emoji**: Design guidelines prohibit emoji in UI (icons only)

## Technical Notes

### Running the Project
- Command: `npm run dev`
- Server: Express on port 5000
- Frontend: Vite dev server
- Both served on same port (Vite proxies to Express)

### Gallery Password
- Stored in `server/storage.ts`
- Current password: "mommy"
- Verified server-side for security

### Particle System
- 30 particles per page
- Canvas-based rendering
- Optimized for smooth performance
- Pink glow with varying opacity

### Mobile Responsiveness
- Breakpoints: sm, md, lg
- Responsive grid layouts
- Touch-friendly interactions
- Tested on mobile viewports

## Future Enhancements (Not Implemented)
Potential features for future development:
- Background music toggle
- Photo upload functionality
- Timeline visualization
- Interactive heart animations
- Message box for Alena to leave notes
- Additional language support

## Deployment Status
Ready for deployment. All features tested and working correctly.
