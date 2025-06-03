# Story 1.3: Builder Post Creation (Text-Only)

## Status: Draft

## Story

- As a Registered Builder
- I want to be able to create text-only posts with predefined tags (e.g., "Update", "Cry for help")
- so that I can share my progress, ask for help, or communicate with other builders on the platform.

## Acceptance Criteria (ACs)

1.  Authenticated builders can access a post composition interface (e.g., `PostComposer` component as per `frontend-architecture.md`).
2.  The `PostComposer` allows builders to input text for their post.
3.  The `PostComposer` allows builders to select one or more predefined tags (e.g., "Update", "Cry for help", "Celebration", "Testers wanted", "Knowledge Share" from PRD).
4.  Builders can submit their post.
5.  Upon submission, the post (text, tags, user_id, timestamp) is saved to the Supabase `Posts` table (as per `backend-architecture.md`, "Posts & Feeds" module).
6.  Post submission provides visual feedback (e.g., loading state, success/error notification via Shadcn Toast/Alert).
7.  A successfully created post appears on the builder's profile feed and the main activity feed (to be detailed in feed display stories).
8.  Only authenticated users can create posts (enforced by backend RLS and frontend checks).
9.  The `PostComposer` component is available on the Main Activity Feed and Builder Profile Page as per `frontend-architecture.md`.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostComposer, Main Activity Feed, Builder Profile Page):**
- [ ] Task 1 (AC: 1, 2, 3): Design and implement the `PostComposer` component.
    - [ ] Subtask 1.1: Use Shadcn Textarea/Input for post text.
    - [ ] Subtask 1.2: Implement a tag selector (e.g., dropdown or pills for predefined tags).
    - [ ] Subtask 1.3: Implement a submit button.
- [ ] Task 2 (AC: 4, 5, 6): Implement client-side logic for post submission.
    - [ ] Subtask 2.1: Handle form data (text, selected tags).
    - [ ] Subtask 2.2: Call Supabase client SDK to insert the new post into the `Posts` table.
    - [ ] Subtask 2.3: Display loading states and success/error notifications (Shadcn Toast/Alert).
- [ ] Task 3 (AC: 1, 9): Integrate the `PostComposer` component into the Main Activity Feed page.
- [ ] Task 4 (AC: 1, 9): Integrate the `PostComposer` component (as a "quick post" option) into the Builder Profile Page.

**Backend (referencing `backend-architecture.md` - "Posts & Feeds" module):**
- [ ] Task 5 (AC: 5): Define/Confirm `Posts` table schema in Supabase.
    - [ ] Subtask 5.1: Ensure fields for `post_id` (PK), `user_id` (FK to `auth.users`), `text_content` (TEXT), `tags` (e.g., ARRAY of TEXT or JSONB), `created_at` (TIMESTAMP).
- [ ] Task 6 (AC: 5, 8): Set up Row Level Security (RLS) for the `Posts` table.
    - [ ] Subtask 6.1: Authenticated users can insert new posts linked to their `user_id`.
    - [ ] Subtask 6.2: All users (or authenticated users, TBD by read-access policies) can read posts.
    - [ ] Subtask 6.3: Users can only update/delete their own posts (if editing/deleting is implemented later).

## Dev Technical Guidance

- Predefined tags can be managed as a constant list in the frontend or fetched from a simple configuration table if they need to be dynamic in the future (MVP: frontend constant is fine).
- Ensure input validation for post text (e.g., max length if any, prevent empty posts).
- Timestamps (`created_at`) should preferably be set by the database (`DEFAULT now()`).
- The `frontend-architecture.md` mentions `PostItem` component for displaying posts; this story focuses on creation. Display will be covered next.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 