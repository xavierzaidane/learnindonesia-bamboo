## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- lucide-react icons
- Embla Carousel for horizontal content browsing
- next-themes for theme support
- sonner for toast notifications
- motion for animation-enhanced interactions

## Product Flow

The application follows a simple learning journey:

1. Users arrive on the homepage and are introduced to the platform through the hero, feature highlights, latest courses, latest blogs, and FAQ sections.
2. Users browse the courses catalog to filter by level, category, and popularity.
3. Course detail pages present the learning path, syllabus, lesson breakdown, reviews, and enrollment action.
4. The knowledge library provides topic-based learning and an AI-style chat interface for guided exploration.
5. The forum supports peer discussion through thread listings and detailed thread views.
6. The news section surfaces platform updates and language-learning articles.

This flow keeps the experience focused on discovery first, then deeper learning and community engagement.

## Project Structure

- `app/` - route-level pages and layouts
- `components/` - reusable UI and feature components
- `lib/data/` - mock content and structured data sources
- `lib/types/` - shared TypeScript types
- `public/assets/` - static images and media used across the app

## Core Routes

- `/` - landing page
- `/courses` - course listing
- `/courses/[slug]` - course detail page
- `/library` - knowledge library
- `/library/[slug]` - topic chat page
- `/forum` - forum listing
- `/forum/[slug]` - forum thread page
- `/blog` - blog listing
- `/blog/[slug]` - blog article page
- `/news` - news listing
- `/news/[slug]` - news article page
- `/about` - platform overview

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Implementation Notes

- The root layout injects the global navigation and footer for consistent framing across pages.
- Fonts are loaded through `next/font` for optimized delivery.
- Content pages rely on typed data files, which keeps the UI predictable and easy to extend.
- Shared components are built to be reused across multiple sections of the site.

## Deployment

The application is ready to deploy on Vercel or any platform that supports Next.js applications.

For production builds, run:

```bash
npm run build
```

Then serve the generated output with:

```bash
npm run start
```
