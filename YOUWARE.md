# YOUWARE.md - Anushka Portfolio Project

This project is a responsive portfolio website for Anushka, a Graphic Designer, converted from a Figma design.

## Project Overview

- **Project Type**: React + TypeScript + Vite + Tailwind CSS
- **Design Source**: Figma (Portifolio)
- **Key Features**:
  - Responsive Landing Page
  - Hero Section with animations
  - Skills Carousel
  - About, Services, Portfolio, Testimonials sections
  - Framer Motion animations for entrance and interactions
  - Custom fonts (Italianno, Bricolage Grotesque, Sora, Inter)

## Architecture

### Components (`src/components/landing/`)
- `Header.tsx`: Navigation and Logo
- `Hero.tsx`: Main introduction with animated images
- `Carousel.tsx`: Infinite scrolling skills marquee
- `About.tsx`: Personal introduction and stats
- `Services.tsx`: Service cards with icons
- `Portfolio.tsx`: Project gallery with filtering
- `Testimonials.tsx`: Client reviews
- `Footer.tsx`: Contact info and social links

### Pages (`src/pages/`)
- `LandingPage.tsx`: Main page assembling all components

### Assets
- `src/assets/figma/`: Contains images and SVGs extracted from the Figma design.
- `src/assets/portfolio/`: Contains AI-themed project images.

## Development

### Commands
- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

### Styling
- **Tailwind CSS**: Configured in `tailwind.config.js` with custom colors and fonts matching the design.
- **Fonts**: Loaded via Google Fonts in `index.html`.
- **Animations**: `framer-motion` used for component animations.

## Design Tokens
- **Colors**:
  - `purple-dark`: #5B3765
  - `purple-light`: #D6A8C4
  - `pink-light`: #F3CCDE
  - `pink-dark`: #9E6899
  - `text-dark`: #1E5571
- **Fonts**:
  - `italianno`: Italianno (Cursive)
  - `bricolage`: Bricolage Grotesque
  - `sora`: Sora
  - `inter`: Inter
