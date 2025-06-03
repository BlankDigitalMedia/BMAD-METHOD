# Story 2.3: Display Reputation Metrics on Builder Profile

## Status: Draft

## Story

- As a Registered Builder (or a visitor viewing a profile)
- I want to see reputation metrics like "Helped X Builders" and "Received X Props" on a builder's profile page
- so that I can quickly assess their contributions and engagement within the community.

## Acceptance Criteria (ACs)

1.  The Builder Profile Page (Story 1.2) displays a section for "Reputation Metrics" (as per `frontend-architecture.md`, Section B: Builder Profile Page).
2.  The "Helped X Builders" metric is displayed, showing a count of unique builders the profile owner has successfully helped (details of "help confirmed" in Epic 3).
3.  The "Received X Props" metric is displayed, showing a count of props the profile owner has received on their "Knowledge Share" posts (details of "props given" in Epic 4).
4.  These counts are fetched from corresponding fields in the `Profiles` table (e.g., `helped_builders_count`, `received_props_count`).
5.  The display is clear and easy to understand.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Builder Profile Page, Reputation Metrics component):**
- [ ] Task 1 (AC: 1): Design and implement a `ReputationMetrics` component or section within the `ProfileCard` / Builder Profile Page.
    - [ ] Subtask 1.1: Display "Helped X Builders" label and its value.
    - [ ] Subtask 1.2: Display "Received X Props" label and its value.
- [ ] Task 2 (AC: 4): Ensure the Builder Profile Page fetches and passes the `helped_builders_count` and `received_props_count` to the `ReputationMetrics` display.
    - [ ] Subtask 2.1: These counts should be part of the profile data fetched in Story 1.2.

**Backend (referencing `backend-architecture.md` - "Profiles & XP" module):**
- [ ] Task 3 (AC: 4): Add/Confirm fields in the `Profiles` table schema for `helped_builders_count` (INTEGER, DEFAULT 0) and `received_props_count` (INTEGER, DEFAULT 0).
    - [ ] Subtask 3.1: The actual incrementing logic for these fields will be handled by backend functions/triggers related to the Help System (Epic 3) and Props System (Epic 4).

## Dev Technical Guidance

- This story focuses solely on the *display* of these pre-calculated metrics.
- The `frontend-architecture.md` explicitly mentions "Reputation Metrics (Helped X Builders, Received X Props)" as part of the Builder Profile Page.
- The backend table schema should be prepared for these counts, but their population logic is out of scope for this specific story and Epic 2. This story ensures the display components and data fetching are ready.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 