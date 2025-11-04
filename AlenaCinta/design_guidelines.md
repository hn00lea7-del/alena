# Design Guidelines: Romantic Personal Website for Alena

## Design Approach
**Reference-Based Approach**: Drawing inspiration from romantic, personal portfolio sites with emphasis on emotional connection and intimate storytelling. Think Spotify's dark mode aesthetic meets Instagram's photo-centric layouts with custom romantic interactions.

## Core Design Principles
1. **Intimate & Personal**: Every design choice should feel handcrafted and personal, not templated
2. **Emotional Impact**: Dark backgrounds with glowing pink creates warmth and intimacy
3. **Gentle Movement**: Subtle animations that feel alive but never distracting
4. **Mobile-First Romance**: This will likely be viewed on phone - prioritize that experience

## Typography
- **Primary Font**: 'Poppins' (warm, modern, readable for Indonesian text)
- **Accent Font**: 'Dancing Script' or 'Pacifico' for romantic headings/quotes
- **Hierarchy**:
  - Hero headlines: 3xl to 5xl with medium weight
  - Body text: base to lg with normal weight
  - Romantic quotes: xl to 2xl in accent font with lighter weight
  - Navigation: sm to base with medium weight

## Layout System
- **Spacing**: Consistent use of Tailwind units: 4, 6, 8, 12, 16, 24 (p-6, mb-12, space-y-8)
- **Max Width**: max-w-4xl for content sections to maintain intimacy
- **Vertical Rhythm**: py-16 to py-24 for section spacing
- **Asymmetric Elements**: Offset text blocks and images to avoid static, centered layouts

## Color Treatment
Dark theme with pink glow system (designer will define specific values):
- Deep dark background as canvas
- Glowing pink for interactive elements, borders, and accents
- Softer pink for text highlights and particle effects
- Subtle gradient overlays on cards/sections for depth

## Page-Specific Layouts

### Home Page
- Full viewport hero with centered romantic message in Indonesian
- Large, flowing romantic text (avoid generic centering - use creative text placement)
- Floating pink particles as ambient background layer
- Minimal navigation - let the message breathe
- No traditional hero image - focus on typography and particles

### Our Story Page
- Timeline/narrative scroll layout
- Story told in 6-8 natural paragraph blocks with visual breaks
- Each story moment in its own card with subtle glow borders
- Friend shoutout section highlighted with different treatment
- Text-heavy but broken into digestible, visually interesting chunks
- Small decorative elements (hearts, stars) as section dividers

### Gallery Page (Password-Protected)
- Password gate: Centered modal with glowing pink input field and subtle romantic prompt
- Post-unlock: Masonry-style photo grid (2 columns mobile, 3 columns desktop)
- Each photo in card with romantic quote overlay on hover/tap
- Playful, teasing captions using "mommy" and flirty language
- Photo placeholders: Polaroid-style frames with pink glow borders
- Full-screen lightbox view on photo click

## Component Library

### Navigation
- Minimal floating nav bar with blur background
- 3 links: Home, Our Story, Gallery
- Active state with pink glow underline
- Mobile: Sticky bottom nav or hamburger

### Cards
- Soft rounded corners (rounded-2xl)
- Subtle pink border glow
- Gentle shadow with pink tint
- Hover: Increased glow intensity

### Password Input
- Centered modal overlay (backdrop blur)
- Single glowing pink input field with rounded edges
- Romantic placeholder text in Indonesian
- Submit button with pink glow
- Error state: Gentle shake animation with pink flash

### Photo Components
- Polaroid-style frames with slight rotation
- Pink border glow on hover
- Quote overlay appears on interaction
- Smooth scale transition

### Buttons
- Primary: Glowing pink with blur background
- Rounded-full for romantic feel
- Hover: Increased glow + subtle scale
- Active: Compressed scale

## Particle System
- 20-30 small pink particles per page
- Slow, organic floating motion (different speeds)
- Varying opacity (20-60%)
- Varying sizes (2-8px)
- Blur effect on particles for glow
- Particles layer behind content, above background
- Continuous loop animation

## Animations
- **Page Transitions**: Gentle fade-in (300ms)
- **Particle Float**: Continuous, random paths with 15-30s duration
- **Card Hover**: Glow intensity increase (200ms)
- **Password Unlock**: Expand + fade transition (400ms)
- **Photo Reveal**: Scale-in from center (300ms)
- **Scroll**: Subtle parallax on story sections

## Accessibility
- High contrast between pink glows and dark background
- Minimum text size of base (16px)
- Readable font weights for Indonesian characters
- Focus states with pink outline
- Keyboard navigation for gallery

## Images
**No large hero images needed**. This is a text and particle-focused design emphasizing intimate messaging.

**Gallery Page**: 4-5 photo placeholders (400x500px portraits) with descriptions:
1. "Sweet moment with Alena - placeholder for romantic photo"
2. "Alena smiling - placeholder for candid shot"
3. "Beautiful Alena - placeholder for portrait"
4. "Our memory - placeholder for special moment"
5. "My love - placeholder for her favorite photo"

Each photo uses placeholder service initially, to be replaced by real photos.