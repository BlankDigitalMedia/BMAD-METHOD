# Story 4.1: Give Props to a "Knowledge Share" Post

## Status: Draft

## Story

- As a Registered Builder
- I want to be able to give "props" to a "Knowledge Share" post
- so that I can acknowledge valuable content and both the post author and I can earn XP.

## Acceptance Criteria (ACs)

1.  Authenticated builders can see a `PropsButton` on `PostItem` components for posts tagged "Knowledge Share". Placeholder integration was in Story 1.6.
2.  Clicking the `PropsButton` initiates a "Give Props" action.
3.  A builder cannot give props to their own post.
4.  (Optional, TBD) A builder might only be able to give props once per post, or there might be a daily limit on giving props.
5.  When props are successfully given:
    a.  A predefined amount of bonus XP is awarded to the builder who gave the props.
    b.  A predefined amount of bonus XP is awarded to the author of the "Knowledge Share" post.
    c.  The XP balances for both users are updated in their `Profiles` table.
    d.  A record of the props action is created in a `Props` table (linking the giving user, the post, and a timestamp).
6.  The `PropsButton` UI might change state after props are given by the current user for that post (e.g., "Props Given" or disabled).
7.  Users receive visual feedback of the successful props action and XP gain (e.g., Toast notification).
8.  The "Received X Props" count on the post author's profile is incremented.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostItem, PropsButton, Notifications):**
- [ ] Task 1 (AC: 1, 2): Implement the active state and click functionality of the `PropsButton` component (integrated as a placeholder in Story 1.6).
    - [ ] Subtask 1.1: Ensure `PropsButton` is visible/enabled only on "Knowledge Share" posts and for authenticated users (not the OP).
    - [ ] Subtask 1.2: On click, call a backend endpoint/function to process the "Give Props" action.
- [ ] Task 2 (AC: 6, 7): Implement UI feedback for giving props.
    - [ ] Subtask 2.1: Show loading state on `PropsButton` during the call.
    - [ ] Subtask 2.2: Display a success Toast notification (e.g., "Props Given! XP awarded.").
    - [ ] Subtask 2.3: Update `PropsButton` state (e.g., to indicate props given).

**Backend (referencing `backend-architecture.md` - "Help/Props System", "Profiles & XP" modules, Edge Functions):**
- [ ] Task 3 (AC: 5d): Define/Confirm `Props` table schema.
    - [ ] Subtask 3.1: Fields for `prop_id` (PK), `post_id` (FK), `giving_user_id` (FK), `receiving_user_id` (FK - author of post), `created_at`.
- [ ] Task 4 (AC: 3, 4, 5a, 5b, 5c, 5d, 8): Implement backend logic (e.g., Supabase Edge Function) to process "Give Props".
    - [ ] Subtask 4.1: Validate that the `giving_user_id` is not the author of the post.
    - [ ] Subtask 4.2 (AC: 4, Optional): Implement logic to prevent duplicate props per user per post, or enforce daily limits if decided.
    - [ ] Subtask 4.3: Fetch predefined XP amounts for giver and receiver.
    - [ ] Subtask 4.4: Atomically update `xp_balance` for the giving builder in their `Profiles` record.
    - [ ] Subtask 4.5: Atomically update `xp_balance` for the post author in their `Profiles` record.
    - [ ] Subtask 4.6: Atomically increment `received_props_count` for the post author in their `Profiles` record.
    - [ ] Subtask 4.7: Insert a new record into the `Props` table.
- [ ] Task 5 (AC: 5d): Set up RLS for `Props` table (e.g., authenticated users can insert, users can read props they gave or received).
- [ ] Task 6 (AC: 7): Implement logic for notifying both users of the XP gain (e.g., creating records in `Notifications` table - details in a future Notification System story).

## Dev Technical Guidance

- XP amounts for giving and receiving props should be configurable.
- All database updates (XP in `Profiles`, count in `Profiles`, record in `Props`) should ideally occur within a single transaction.
- Ensure RLS and function-level checks prevent users from propping their own posts or exploiting the system.
- The `PropsButton` on `PostItem` (from Story 1.6) is the primary UI.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 