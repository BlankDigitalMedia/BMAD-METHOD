# Story 2.1: Daily Check-in for XP

## Status: Draft

## Story

- As a Registered Builder
- I want to be able to perform a daily check-in
- so that I can earn XP and be encouraged to engage with the platform regularly.

## Acceptance Criteria (ACs)

1.  Authenticated builders have a clear way to perform a "daily check-in" (e.g., a button in the `HUDHeader` or on their profile).
2.  A builder can only perform one successful check-in per 24-hour period.
3.  Upon a successful daily check-in, a predefined amount of XP is awarded to the builder.
4.  The builder's XP balance is updated in the `Profiles` table (as per `backend-architecture.md`, "Profiles & XP" module).
5.  The builder receives visual feedback of the successful check-in and XP gain (e.g., Shadcn Toast/Alert).
6.  If a builder attempts to check-in more than once in a 24-hour period, they receive a message indicating they have already checked in.
7.  The system accurately tracks the last check-in time for each builder to enforce the 24-hour rule.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - HUDHeader, Profile Page, Notifications):**
- [ ] Task 1 (AC: 1): Design and implement the UI element for daily check-in (e.g., a button).
    - [ ] Subtask 1.1: Decide placement (e.g., `HUDHeader`, Profile Page, or a dedicated section).
- [ ] Task 2 (AC: 3, 5, 6): Implement client-side logic for handling the check-in action.
    - [ ] Subtask 2.1: On click, call a backend endpoint/function to process the check-in.
    - [ ] Subtask 2.2: Display success (XP gained) or informational (already checked-in) messages using Shadcn Toast/Alert.
    - [ ] Subtask 2.3: Potentially update the displayed XP on the profile page in real-time (or on next load).

**Backend (referencing `backend-architecture.md` - "Profiles & XP" module, Edge Functions potentially):**
- [ ] Task 3 (AC: 2, 4, 7): Implement backend logic for daily check-in (e.g., a Supabase Edge Function).
    - [ ] Subtask 3.1: Verify if the user is eligible for check-in (check last check-in timestamp).
    - [ ] Subtask 3.2: If eligible, award XP (update `xp_balance` in `Profiles` table) and record the new check-in timestamp.
    - [ ] Subtask 3.3: Return success/failure status to the client.
- [ ] Task 4 (AC: 4, 7): Add/Confirm fields in the `Profiles` table schema for `xp_balance` (INTEGER) and `last_check_in_at` (TIMESTAMP).
- [ ] Task 5 (AC: 4): Ensure XP transactions are atomic and consistent (PRD Reliability: Data Integrity; Supabase transactions in Edge Functions can help).

## Dev Technical Guidance

- The 24-hour period should be clearly defined (e.g., rolling 24 hours from last check-in, or a fixed daily reset time UTC).
- The amount of XP for daily check-in should be a configurable value (e.g., an environment variable or a constants file).
- Consider time zone issues if using a fixed daily reset time. A rolling 24-hour window is often simpler.
- Ensure the backend logic is idempotent or handles concurrency safely if multiple rapid requests are made, though client-side UI should prevent this.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 