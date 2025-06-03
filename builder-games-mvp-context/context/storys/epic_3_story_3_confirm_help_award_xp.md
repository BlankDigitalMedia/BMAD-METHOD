# Story 3.3: Confirm Help Received & Award XP

## Status: Draft

## Story

- As an Original Poster (OP) of a post where I approved help
- I want to be able to confirm that help was successfully received from the approved builder
- so that both the helper and I can be awarded XP, and the help interaction is marked as completed.

## Acceptance Criteria (ACs)

1.  The OP of a post with an 'approved' help offer (status in `HelpOffers` table) can see a UI element (e.g., "Confirm Help Received" button) for that specific offer.
2.  Clicking "Confirm Help Received" updates the status of the `HelpOffers` record to 'confirmed_completed'.
3.  Upon confirmation, a predefined amount of bonus XP is awarded to the OP (original poster).
4.  Upon confirmation, a predefined amount of bonus XP is awarded to the builder who provided the help (offering_user_id from `HelpOffers`).
5.  The XP balances for both users are updated in their respective records in the `Profiles` table.
6.  The PRD states: "Original posters can...confirm help received, also via public system comments, awarding XP to both parties." For MVP, this system comment can be a simplified notification or an update to the post's display. Both users should be notified of the XP gain.
7.  The OP receives feedback that their confirmation was successful and XP was awarded.
8.  Only the OP can confirm help for offers on their post.
9.  Help can only be confirmed for an offer that is in the 'approved' state.
10. The "Helped X Builders" count on the helper's profile is incremented (logic for this update in backend).

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostItem, Notifications):**
- [ ] Task 1 (AC: 1): Design and implement UI for the OP to confirm help received for an 'approved' offer.
    - [ ] Subtask 1.1: This UI element (e.g., "Confirm Help Received" button) should be visible next to the approved offer on the `PostItem` (when viewed by OP) or related management interface.
- [ ] Task 2 (AC: 2, 7): Implement client-side logic for confirming help.
    - [ ] Subtask 2.1: On click, call a backend endpoint/function to confirm help, passing the `offer_id`.
    - [ ] Subtask 2.2: Display success notification (e.g., "Help Confirmed! XP awarded.").
    - [ ] Subtask 2.3: Update UI to reflect the offer's new 'confirmed_completed' state.

**Backend (referencing `backend-architecture.md` - "Help/Props System", "Profiles & XP" modules, Edge Functions):**
- [ ] Task 3 (AC: 2, 8, 9): Implement backend logic (e.g., Supabase Edge Function) to confirm help received.
    - [ ] Subtask 3.1: Verify that the calling user is the OP of the post linked to the offer.
    - [ ] Subtask 3.2: Verify the offer is in 'approved' status.
    - [ ] Subtask 3.3: Update the `HelpOffers` record status to 'confirmed_completed'.
- [ ] Task 4 (AC: 3, 4, 5): Implement XP awarding logic within the confirmation function.
    - [ ] Subtask 4.1: Fetch predefined XP amounts for helper and OP.
    - [ ] Subtask 4.2: Atomically update `xp_balance` for the offering builder in their `Profiles` record.
    - [ ] Subtask 4.3: Atomically update `xp_balance` for the OP in their `Profiles` record.
- [ ] Task 5 (AC: 10): Implement logic to increment `helped_builders_count` for the offering builder in their `Profiles` record.
    - [ ] Subtask 5.1: This should handle unique builders helped if the metric is defined as such.
- [ ] Task 6 (AC: 6): Implement logic for notifying both users of the XP gain and help confirmation (e.g., creating records in a `Notifications` table - details in a future Notification System story).

## Dev Technical Guidance

- XP amounts for helping and receiving confirmed help should be configurable.
- All database updates (status change in `HelpOffers`, XP updates in `Profiles`, `helped_builders_count` update) should ideally occur within a single transaction to ensure data integrity.
- Ensure RLS and function-level checks prevent unauthorized confirmations.
- This is a key gamification loop. Clear feedback to users is important.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 