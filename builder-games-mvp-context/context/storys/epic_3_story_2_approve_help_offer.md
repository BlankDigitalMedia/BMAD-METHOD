# Story 3.2: Approve Help Offer

## Status: Draft

## Story

- As an Original Poster (OP) of a post seeking help
- I want to be able to approve a help offer I have received from another builder
- so that I can formally acknowledge their intent to help and progress towards resolving my need.

## Acceptance Criteria (ACs)

1.  The OP of a post with help offers can see a list of these offers or individual offer notifications on their post or a related management interface.
2.  For each "offered" help (status in `HelpOffers` table), the OP has a clear UI element (e.g., an "Approve Offer" button) to approve it.
3.  Approving an offer updates the status of the corresponding record in the `HelpOffers` table to 'approved'.
4.  The PRD states: "Original posters can approve...help received, also via public system comments..." For MVP, this system comment can be a simplified notification or an update to the post's display. The user who offered help should be notified.
5.  The OP receives feedback that their approval was successful.
6.  Only the OP of the post can approve help offers for that post.
7.  An offer can only be approved if it is in the 'offered' state.
8.  (Optional MVP scope) The OP might be able to approve multiple offers or only one, TBD. For MVP, one approval might be simpler.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostItem, Notifications):**
- [ ] Task 1 (AC: 1, 2): Design and implement UI for the OP to view and approve help offers on their posts.
    - [ ] Subtask 1.1: This could be part of the `PostItem` when viewed by the OP, or a separate section on the post details page if one exists.
    - [ ] Subtask 1.2: Display information about each offer (offering user, timestamp).
    - [ ] Subtask 1.3: Provide an "Approve Offer" button for each offer in 'offered' state.
- [ ] Task 2 (AC: 3, 5): Implement client-side logic for approving an offer.
    - [ ] Subtask 2.1: On click, call a backend endpoint/function to approve the offer, passing the `offer_id`.
    - [ ] Subtask 2.2: Display success notification (e.g., "Offer Approved!").
    - [ ] Subtask 2.3: Update UI to reflect the offer's new 'approved' state.

**Backend (referencing `backend-architecture.md` - "Help/Props System" module, Edge Functions):**
- [ ] Task 3 (AC: 3, 6, 7): Implement backend logic (e.g., Supabase Edge Function) to approve a help offer.
    - [ ] Subtask 3.1: Verify that the calling user is the OP of the post linked to the offer.
    - [ ] Subtask 3.2: Verify the offer is in 'offered' status.
    - [ ] Subtask 3.3: Update the `HelpOffers` record status to 'approved'.
    - [ ] Subtask 3.4 (AC: 8, Optional): If only one approval is allowed, potentially update other open offers for the same post to a different status (e.g., 'closed' or 'superceded').
- [ ] Task 4 (AC: 4): Implement logic for notifying the user whose offer was approved (e.g., creating a record in a `Notifications` table - details in a future Notification System story).

## Dev Technical Guidance

- Ensure robust RLS and function-level checks to ensure only the OP can approve offers for their posts.
- The UI for managing/viewing offers needs careful consideration. It might be directly on the `PostItem` for the OP, or a more detailed view.
- Consider the workflow if multiple offers are received. Does approving one automatically reject/hide others? For MVP, simply marking one as 'approved' is likely sufficient.
- The status change in `HelpOffers` is key for the next step: confirming help completion.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 