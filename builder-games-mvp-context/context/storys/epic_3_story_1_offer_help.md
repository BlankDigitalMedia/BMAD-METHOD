# Story 3.1: Offer Help on a Post

## Status: Draft

## Story

- As a Registered Builder
- I want to be able to offer help on another builder's post (especially those tagged "Cry for help" or "Testers wanted")
- so that I can assist others in the community and potentially earn XP if my help is confirmed.

## Acceptance Criteria (ACs)

1.  Authenticated builders can see a `HelpButton` on `PostItem` components for relevant posts (e.g., tagged "Cry for help", "Testers wanted"). Placeholder integration was in Story 1.6.
2.  Clicking the `HelpButton` initiates an "Offer Help" action.
3.  An "Offer Help" action creates a record in a `HelpOffers` table in the database (linking the offering user, the post, and a timestamp).
4.  The PRD states: "Builders can offer help on specific posts, triggering a public system comment." For MVP, this system comment can be a simplified notification or an update to the post's display. A full public comment system might be too complex for initial MVP.
5.  The offering builder receives feedback that their offer has been submitted (e.g., Toast notification).
6.  The original poster (OP) of the post should be notified of the help offer (details in a separate notification story, or simply by seeing the offer on their post).
7.  A builder cannot offer help on their own post.
8.  The `HelpButton` UI might change state after an offer is made by the current user (e.g., "Help Offered" or disabled).

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostItem, HelpButton, Notifications):**
- [ ] Task 1 (AC: 1, 2): Implement the active state and click functionality of the `HelpButton` component (integrated as a placeholder in Story 1.6).
    - [ ] Subtask 1.1: Ensure `HelpButton` is visible/enabled only on relevant posts and for authenticated users (not the OP).
    - [ ] Subtask 1.2: On click, call a backend endpoint/function to record the help offer.
- [ ] Task 2 (AC: 5, 8): Implement UI feedback for offering help.
    - [ ] Subtask 2.1: Show loading state on `HelpButton` during the call.
    - [ ] Subtask 2.2: Display a success Toast notification (e.g., "Help offered!").
    - [ ] Subtask 2.3: Update `HelpButton` state if needed (e.g., to "Offer Sent").
- [ ] Task 3 (AC: 4): Implement a simple way to display that help has been offered on a post (e.g., text on the `PostItem` like "Help offered by X users" or list of offerors, if simple enough for MVP).

**Backend (referencing `backend-architecture.md` - "Help/Props System" module, Edge Functions):**
- [ ] Task 4 (AC: 3, 7): Define/Confirm `HelpOffers` table schema.
    - [ ] Subtask 4.1: Fields for `offer_id` (PK), `post_id` (FK), `offering_user_id` (FK), `status` (e.g., 'offered', 'approved', 'confirmed_completed', 'rejected'), `created_at`.
- [ ] Task 5 (AC: 3, 7): Implement backend logic (e.g., Supabase Edge Function) to record a help offer.
    - [ ] Subtask 5.1: Validate that the user is not the OP.
    - [ ] Subtask 5.2: Check if user already offered help on this post to prevent duplicates.
    - [ ] Subtask 5.3: Insert a new record into `HelpOffers` with 'offered' status.
- [ ] Task 6 (AC: 3): Set up RLS for `HelpOffers` table.
    - [ ] Subtask 6.1: Authenticated users can insert offers (with checks in function).
    - [ ] Subtask 6.2: OP of the post can read offers for their post.
    - [ ] Subtask 6.3: Offering user can read their own offers.

## Dev Technical Guidance

- The "public system comment" for MVP could be simplified. Instead of a full comment system, consider updating the post item directly to show offer status, or a simple notification to the OP.
- The `HelpButton` on `PostItem` (from Story 1.6) is the primary UI for this.
- Backend logic should prevent users from offering help on their own posts or multiple times on the same post.
- The `status` field in `HelpOffers` will be crucial for the subsequent approval and confirmation steps.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 