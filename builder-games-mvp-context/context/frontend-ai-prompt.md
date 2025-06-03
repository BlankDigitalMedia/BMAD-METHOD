# AI Frontend Prompt – Builder Games MVP

**Project:** Builder Games MVP
**Goal:** Scaffold the frontend UI using Next.js (React), Shadcn UI, Tailwind CSS, and Supabase integration, supporting both dark and light modes, and implementing a kinetic, action-forward experience.

---

## 1. Tech Stack & Libraries
- Framework: Next.js (App Router, TypeScript)
- UI Library: Shadcn UI (with Tailwind CSS)
- State Management: Zustand (UI/global), React Query (server state)
- Backend: Supabase (Auth, DB, Realtime)
- Deployment: Vercel (frontend), Supabase (backend)

---

## 2. Theming & Color System
- Support both dark and light modes (default: dark)
- Use these color tokens for UI elements:
  - Primary: Pink
  - Progression: Purple
  - Live/Chaos: Red
  - Success: Green
  - Discovery: Blue
  - Momentum: Orange
- Apply colors consistently to badges, buttons, alerts, and key UI elements

---

## 3. Core Screens & Components

**A. Login/Signup Page**
- Shadcn Form (email, password, OAuth)
- Error/success notifications
- Branding (logo, tagline)
- Supabase Auth integration

**B. Builder Profile Page**
- ProfileCard (avatar, username, bio)
- XPBadge (current XP, level)
- Reputation metrics (Helped X Builders, Received X Props)
- FeedList (user's posts)
- PostComposer (quick post)

**C. Main Activity Feed**
- FeedList (all posts, paginated/infinite scroll)
- Post (text, tags, actions)
- TagFilter (filter by "Update", "Cry for help", etc.)
- PostComposer (new post)
- Real-time updates (Supabase Realtime)

**D. Post Composer**
- Shadcn Textarea/Input
- Tag selector (dropdown or pills)
- Submit button

**E. Post Item**
- Text content, tags
- HelpButton (offer/approve/confirm help)
- PropsButton (give props)
- XP/Badge indicators

**F. HUDHeader & Sidebar**
- Navigation links (Feed, Profile, Logout)
- ThemeToggle (dark/light)
- Notifications/Toasts

**G. Notifications/Toasts**
- Shadcn Toast/Alert for feedback

**H. Theme & Accessibility**
- ThemeToggle for dark/light mode
- Keyboard navigation, color contrast, screen reader labels

---

## 4. Kinetic UI & Animations
- Use pulse animations for attention-grabbing UI elements (e.g., active build modes, notifications, key call-to-action areas)
- Ensure transitions and feedback are smooth and responsive

---

## 5. Folder Structure (suggested)

```
/components
  /ui
  HUDHeader.tsx
  Sidebar.tsx
  ProfileCard.tsx
  XPBadge.tsx
  FeedList.tsx
  PostComposer.tsx
  PostItem.tsx
  HelpButton.tsx
  PropsButton.tsx
  TagFilter.tsx
  Notifications.tsx
  ThemeToggle.tsx
/pages
  /profile/[username].tsx
  /feed.tsx
  /login.tsx
  /signup.tsx
/lib
/hooks
/styles
```

---

## 6. Implementation Notes
- Use Supabase client SDK for data fetching/mutations
- Use Zustand for UI/global state, React Query for server state
- All components must be accessible and responsive
- Default to dark mode, but allow user toggle
- Apply color system and pulse animations as described

---

**Prompt for AI:**

> Generate the full set of React (Next.js) components and pages for the Builder Games MVP as described above, using Shadcn UI and Tailwind CSS. Implement dual-mode theming, the specified color system, and pulse animations for kinetic UI. Integrate Supabase for authentication and real-time data. Scaffold the folder structure and provide code for each core component and page, focusing on MVP features only. 