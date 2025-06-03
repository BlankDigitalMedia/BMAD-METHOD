# Story 1.9: Theme & Typography Implementation (Shadcn UI, Tailwind CSS)

## Status: Draft

## Story

- As a Developer
- I want to set up the global theme (dark/light mode, color system) and typography for the application using Shadcn UI and Tailwind CSS
- so that all components and pages adhere to the defined visual design system from the PRD and Frontend Architecture, ensuring a consistent look and feel.

## Acceptance Criteria (ACs)

1.  Tailwind CSS is configured in the Next.js project.
2.  Shadcn UI is initialized and configured in the project.
3.  The application supports dual-mode theming (dark and light mode), with dark mode as the default (PRD: User Interaction and Design Goals; `frontend-architecture.md`: Theming).
4.  The core narrative color system from the PRD is implemented as Tailwind/Shadcn theme colors:
    *   Primary: Pink
    *   Progression: Purple
    *   Live/Chaos: Red
    *   Success: Green
    *   Discovery: Blue
    *   Momentum: Orange
5.  These colors are consistently applied to relevant Shadcn UI components (buttons, badges, alerts, etc.) and can be used via Tailwind utility classes.
6.  The typography system from the PRD is implemented:
    *   Headings: Space Grotesk (Normal, Medium, Bold weights).
    *   Body Text: Inter (Normal, Medium, Semibold weights), including smaller text for captions/metadata.
7.  Global styles correctly apply these fonts, and they can be used via Tailwind utility classes (e.g., `font-sans`, `font-heading`).
8.  A `ThemeToggle` component (placeholder or basic implementation) exists to switch between dark and light modes (functionality to be fully implemented in Core UI Shell story).
9.  Basic Shadcn UI components (e.g., Button, Card, Input, Toast) render correctly with the applied theme and typography in both dark and light modes.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md`, `mvp-prd.md` - Visual Design & Component Principles, `frontend-ai-prompt.md` - Tech Stack & Theming):**
- [ ] Task 1 (AC: 1, 2): Initialize and configure Tailwind CSS and Shadcn UI in the Next.js project.
    - [ ] Subtask 1.1: Install necessary dependencies.
    - [ ] Subtask 1.2: Configure `tailwind.config.js` and `postcss.config.js`.
    - [ ] Subtask 1.3: Run Shadcn UI init script and set up `components.json`.
- [ ] Task 2 (AC: 3, 4, 5): Configure the color system in `tailwind.config.js` and/or Shadcn theme variables.
    - [ ] Subtask 2.1: Define CSS variables for the primary, progression, live/chaos, success, discovery, and momentum colors for both dark and light themes.
    - [ ] Subtask 2.2: Ensure these colors are mapped to Shadcn UI component themes where appropriate (e.g., primary button uses primary color).
- [ ] Task 3 (AC: 6, 7): Configure the typography system.
    - [ ] Subtask 3.1: Add Space Grotesk and Inter fonts to the project (e.g., via Google Fonts, local font files, or a font provider service like `next/font`).
    - [ ] Subtask 3.2: Define font families (e.g., sans for Inter, heading for Space Grotesk) in `tailwind.config.js`.
    - [ ] Subtask 3.3: Apply base body font styles globally.
- [ ] Task 4 (AC: 3, 8): Implement basic dark/light mode switching logic.
    - [ ] Subtask 4.1: Use `next-themes` or a similar library for theme management.
    - [ ] Subtask 4.2: Create a basic `ThemeToggle.tsx` component that can switch the theme (full integration into HUDHeader in a later story).
- [ ] Task 5 (AC: 9): Test a few key Shadcn UI components (Button, Card, Input, Toast, Alert, Badge) to ensure they correctly reflect the custom theme (colors, fonts) in both dark and light modes.

## Dev Technical Guidance

- Refer to Shadcn UI documentation for theming and Tailwind CSS documentation for custom font and color configuration.
- The `frontend-ai-prompt.md` also provides a good summary of the theming requirements.
- This story is foundational. Subsequent UI components (from Stories 1.1-1.6, 1.8, and future epics) will consume this theme.
- Ensure that the theme is applied at the root of the application.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 