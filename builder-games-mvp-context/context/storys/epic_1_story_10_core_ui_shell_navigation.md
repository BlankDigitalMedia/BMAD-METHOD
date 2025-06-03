# Story 1.10: Core UI Shell & Navigation Implementation

## Status: Draft

## Story

- As a Registered Builder
- I want a consistent and navigable core UI shell, including a header with navigation and a theme toggle
- so that I can easily move between different sections of the application (Feed, Profile, Login/Logout) and control my viewing experience.

## Acceptance Criteria (ACs)

1.  A main application layout structure is implemented in Next.js (using root layout file in App Router).
2.  The `Header.tsx` component is implemented and integrated into the main layout.
3.  The `Header` is styled with fixed positioning and consistent presence across all pages.
4.  The `Header` contains navigation links for: 
    *   Main Activity Feed (links to `/feed`)
    *   Builder Profile Page (links to current user's profile at `/profile/[username]`)
    *   Login/Signup (links to `/auth`, visible when logged out)
    *   Logout button/link (visible when logged in, performs Supabase signout).
5.  The `ThemeToggle.tsx` component is integrated into the `Header` and allows users to switch between dark and light modes.
6.  Complete Next.js App Router page structure is set up with placeholder pages for all core routes (`/feed`, `/profile/[username]`, `/auth`).
7.  The core UI shell correctly applies the global theme (Story 1.9) and typography.
8.  Full routing between all core pages is functional with proper navigation state management.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - App Layout, Header, ThemeToggle, Next.js App Router):**
- [ ] Task 1 (AC: 1): Implement the root layout for the Next.js application (`app/layout.tsx`).
    - [ ] Subtask 1.1: Integrate global theme provider (from Story 1.9).
- [ ] Task 2 (AC: 2, 3): Design and implement the `Header.tsx` component.
    - [ ] Subtask 2.1: Style with fixed positioning and consistent branding.
    - [ ] Subtask 2.2: Integrate into the root layout.
- [ ] Task 3 (AC: 4): Implement navigation links within `Header`.
    - [ ] Subtask 3.1: Link to Feed page (`/feed`).
    - [ ] Subtask 3.2: Link to current user's Profile page (requires fetching current user session/ID).
    - [ ] Subtask 3.3: Conditional Login/Signup link (visible if no active session).
    - [ ] Subtask 3.4: Logout button/action (calls Supabase `signOut`, redirects appropriately).
- [ ] Task 4 (AC: 5): Integrate and style the `ThemeToggle.tsx` component within `Header`.
    - [ ] Subtask 4.1: Ensure it correctly switches themes and persists the choice using `next-themes`.
- [ ] Task 5 (AC: 6, 8): Set up complete Next.js App Router page structure.
    - [ ] Subtask 5.1: Create `/feed/page.tsx` (placeholder for Main Activity Feed).
    - [ ] Subtask 5.2: Create `/profile/[username]/page.tsx` (placeholder for Profile pages).
    - [ ] Subtask 5.3: Create `/auth/page.tsx` (placeholder for Login/Signup).
    - [ ] Subtask 5.4: Implement proper navigation state management and active link styling.
- [ ] Task 6 (AC: 7): Verify that the overall shell correctly reflects the theme and typography from Story 1.9.

## Dev Technical Guidance

- This story ties together many foundational elements: routing, layout, global components (Header, ThemeToggle), and theming.
- Use Next.js App Router conventions for layout and page structure.
- Supabase client SDK will be needed for session checking (to show/hide Login/Logout) and the logout action.
- Theme toggle implementation should leverage `next-themes` package which integrates seamlessly with Tailwind CSS and Shadcn UI.
- Create placeholder pages with basic content - actual page functionality will be implemented in subsequent stories.
- Ensure the Header is responsive if mobile/tablet views are a consideration, though PRD targets desktop primarily.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 