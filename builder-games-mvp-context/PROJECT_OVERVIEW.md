# Builder Games MVP - Project Overview

## 🚨 CRITICAL: Project Location
**Working Directory**: `./builder-games-mvp/`
All development commands and file operations must be executed from this subdirectory.

## Project Identity
- **Name**: Builder Games MVP
- **Type**: Next.js 15.3.3 web application
- **Purpose**: Gamified startup building arena - "show up, ship live, and prove it" through public MVP sprints

## MVP Scope (Epic 1: Core Builder Profile & Activity Feed)
- **Builder Profiles**: Personal profiles with activity feeds
- **Main Feed**: Aggregated updates from all builders (text-only MVP)
- **XP System**: Daily check-ins, helping others, giving/receiving "props"
- **Help System**: Offer help, approve/confirm help with public comments
- **Tags**: Predefined post tags ("Update", "Cry for help", "Celebration", etc.)

## Design Direction
- **UI/UX**: "Kinetic UI/UX" - action-forward experience
- **Theme**: Default dark mode
- **Components**: Shadcn/ui for consistent, modern aesthetic
- **Target**: Web desktop experience with responsive design

## Tech Stack (Confirmed)
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Development**: Turbopack enabled for faster dev server
- **Package Manager**: npm

## Quick Start
```bash
cd builder-games-mvp
npm run dev
```

## Key Files
- **Main App**: `src/app/page.tsx`
- **Layout**: `src/app/layout.tsx`
- **Styles**: `src/app/globals.css`
- **Config**: `next.config.ts`, `tailwind.config.ts` 