# Story 2.2: Display XP Balance on Builder Profile

## Status: Draft

## Story

- As a Registered Builder (or a visitor viewing a profile)
- I want to see the builder's current XP balance and potentially their level on their profile page
- so that I can understand their engagement and progress on the platform.

## Acceptance Criteria (ACs)

1.  The Builder Profile Page (Story 1.2) displays the builder's current XP balance.
2.  The XP balance is fetched from the `xp_balance` field in the `Profiles` table (as per `backend-architecture.md`, "Profiles & XP" module).
3.  The `XPBadge` component (defined in `frontend-architecture.md`, Section B: Builder Profile Page) is used to display this information.
4.  (Optional for MVP, depends on complexity) If a leveling system is implied or easily derivable from XP, the current level might also be displayed by `XPBadge`.
5.  The displayed XP is accurate and reflects all earned XP, including from daily check-ins (Story 2.1) and eventually from help/props actions.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Builder Profile Page, XPBadge):**
- [ ] Task 1 (AC: 1, 3): Design and implement the `XPBadge` component (`XPBadge.tsx`).
    - [ ] Subtask 1.1: Display the XP balance value.
    - [ ] Subtask 1.2 (AC: 4, Optional): If implementing levels, display the current level based on XP.
- [ ] Task 2 (AC: 1, 3): Integrate the `XPBadge` component into the `ProfileCard` or directly onto the Builder Profile Page.
- [ ] Task 3 (AC: 2, 5): Ensure the `ProfileCard` or Profile Page fetches and passes the `xp_balance` to the `XPBadge` component.
    - [ ] Subtask 3.1: This data should be part of the profile data fetched in Story 1.2 (Builder Profile Creation & Display).

**Backend (referencing `backend-architecture.md` - "Profiles & XP" module):**
- [ ] Task 4 (AC: 2): Ensure the `Profiles` table has an `xp_balance` field (INTEGER, DEFAULT 0), as established in Story 2.1.
- [ ] Task 5 (AC: 4, Optional): If a leveling system is implemented, define the XP thresholds for each level. This might involve a separate configuration or logic to calculate the level from XP.

## Dev Technical Guidance

- The `XPBadge` should be a visually distinct component that clearly communicates progress.
- If levels are implemented, the calculation logic (XP to Level) should be simple for MVP. It could be client-side calculated if thresholds are static or fetched if dynamic.
- This story focuses on *displaying* XP. The earning of XP is handled in other stories (2.1 for check-ins, and future stories for help/props).
- Ensure the `xp_balance` is correctly fetched as part of the user's profile data.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 