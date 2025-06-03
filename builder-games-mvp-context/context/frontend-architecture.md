# Builder Games MVP – Frontend Architecture

## Introduction
This document defines the frontend architecture for the Builder Games MVP, translating the PRD's vision into a clear, actionable plan for UI/UX, component structure, and technical stack. It is designed for seamless handoff to engineering and architecture teams, and to guide implementation in alignment with the "Kinetic UI/UX" and HUD-like design goals.

---

## Visual Component Map

```mermaid
graph TD
  App[App (Next.js)]
  HUDHeader[HUDHeader]
  Sidebar[Sidebar]
  MainView[MainView (Page Content)]
  Login[Login/Signup Page]
  Profile[Builder Profile Page]
  Feed[Main Activity Feed]
  PostComposer[Post Composer]
  FeedList[Feed List]
  ProfileCard[Profile Card]
  XPBadge[XP Badge]
  Reputation[Reputation Metrics]
  Post[Post Item]
  HelpButton[Help Button]
  PropsButton[Props Button]
  TagFilter[Tag Filter]
  Notifications[Notifications/Toasts]
  ThemeToggle[Theme Toggle]
  
  App --> HUDHeader
  App --> Sidebar
  App --> MainView
  MainView --> Login
  MainView --> Profile
  MainView --> Feed
  MainView --> PostComposer
  Feed --> FeedList
  FeedList --> Post
  Post --> HelpButton
  Post --> PropsButton
  Post --> TagFilter
  Profile --> ProfileCard
  Profile --> XPBadge
  Profile --> Reputation
  App --> Notifications
  HUDHeader --> ThemeToggle
```

---

## Core Screens & Components Breakdown

### A. Login/Signup Page
- **Components:**
  - Shadcn Form (email, password, OAuth)
  - Error/Success notifications
  - Branding (logo, tagline)
- **Logic:**
  - Supabase Auth integration
  - Redirect on success

### B. Builder Profile Page
- **Components:**
  - ProfileCard (avatar, username, bio)
  - XPBadge (current XP, level)
  - Reputation Metrics (Helped X Builders, Received X Props)
  - FeedList (user's posts)
  - PostComposer (quick post)
- **Logic:**
  - Fetch user data from Supabase
  - Show only user's posts
  - Edit profile (optional for MVP)

### C. Main Activity Feed
- **Components:**
  - FeedList (all posts, paginated/infinite scroll)
  - Post (text, tags, actions)
  - TagFilter (filter by "Update", "Cry for help", etc.)
  - PostComposer (new post)
- **Logic:**
  - Fetch all posts (Supabase, React Query)
  - Real-time updates (Supabase Realtime)
  - Filter by tag

### D. Post Composer
- **Components:**
  - Shadcn Textarea/Input
  - Tag selector (dropdown or pills)
  - Submit button
- **Logic:**
  - Create post (Supabase insert)
  - Show loading/error states

### E. Post Item
- **Components:**
  - Text content
  - Tags
  - HelpButton (offer/approve/confirm help)
  - PropsButton (give props)
  - XP/Badge indicators
- **Logic:**
  - Action buttons update XP, trigger Supabase mutations
  - Only authenticated users can interact

### F. HUDHeader & Sidebar
- **Components:**
  - Navigation links (Feed, Profile, Logout)
  - ThemeToggle (dark/light)
  - Notifications/Toasts
- **Logic:**
  - Responsive, fixed positioning for HUD feel
  - Shadcn components for consistency

### G. Notifications/Toasts
- **Components:**
  - Shadcn Toast/Alert
- **Logic:**
  - Show on post success/error, XP gain, help/props actions

### H. Theme & Accessibility
- **ThemeToggle:**
  - Default to dark mode, with color system from PRD (Pink, Purple, Red, Green, Blue, Orange)
- **Accessibility:**
  - Keyboard navigation, color contrast, screen reader labels

---

## Tech Stack Recap
- **Framework:** Next.js (React, App Router)
- **UI Library:** Shadcn UI + Tailwind CSS
- **Backend:** Supabase (Auth, DB, Realtime)
- **State Management:** Zustand (UI/global state), React Query (server state)
- **Deployment:** Vercel (frontend), Supabase (backend)

---

## Theming, Color System, and Kinetic UI

- **Dual-Mode Support:**
  - All UI components must support both dark and light modes, as visually defined in the design system. The default should be dark mode, but users can toggle between modes.

- **Color System:**
  - Use the following color tokens for UI elements, as established in the PRD and design system:
    - **Primary:** Pink
    - **Progression:** Purple
    - **Live/Chaos:** Red
    - **Success:** Green
    - **Discovery:** Blue
    - **Momentum:** Orange
  - These colors should be consistently applied to badges, buttons, alerts, and other key UI elements for clear status and narrative signaling.

- **Pulse Animations:**
  - Use pulse animations for attention-grabbing UI elements (e.g., active build modes, notifications, or key call-to-action areas) to reinforce the "kinetic" and action-forward experience.

---

This document is ready for review and handoff to the Architect agent for deeper technical and infrastructure planning. 