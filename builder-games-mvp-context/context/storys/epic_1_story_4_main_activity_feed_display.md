# Story 1.4: Main Activity Feed Display

## Status: Draft

## Story

- As a Registered Builder
- I want to view a main activity feed that aggregates posts from all builders, with options to filter by tags and see real-time updates
- so that I can stay informed about what other builders are working on, discover content, and see platform activity.

## Acceptance Criteria (ACs)

1.  An authenticated builder can access the Main Activity Feed page (e.g., `/feed.tsx` as per `frontend-architecture.md`).
2.  The feed displays posts from all builders, typically sorted by most recent first.
3.  Each post in the feed is displayed using the `PostItem` component (details in Story 1.6).
4.  The feed implements pagination or infinite scroll for handling a large number of posts (PRD Performance: Feed loading within 2s).
5.  A `TagFilter` component is present, allowing users to filter the feed by predefined tags (PRD Functional Req: Posts can include predefined tags; `frontend-architecture.md` C: Main Activity Feed).
6.  Filtering actions apply and re-render the feed within 1 second (PRD Performance).
7.  The feed updates in real-time (or near real-time) with new posts using Supabase Realtime (as per `frontend-architecture.md` and `backend-architecture.md`).
8.  The `PostComposer` component is integrated into the Main Activity Feed page for creating new posts (covered in Story 1.3).
9.  Data fetching for the feed uses React Query for server state management (as per `frontend-architecture.md`).

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Main Activity Feed, FeedList, PostItem, TagFilter, React Query, Supabase Realtime):**
- [ ] Task 1 (AC: 1): Design and implement the Main Activity Feed page structure (`/feed.tsx`).
- [ ] Task 2 (AC: 2, 3, 4, 9): Implement the `FeedList` component for the main feed.
    - [ ] Subtask 2.1: Fetch all posts from Supabase (using React Query).
    - [ ] Subtask 2.2: Implement pagination or infinite scroll.
    - [ ] Subtask 2.3: Render a list of `PostItem` components (Story 1.6 will detail `PostItem`).
- [ ] Task 3 (AC: 5, 6): Implement the `TagFilter` component.
    - [ ] Subtask 3.1: Display available predefined tags.
    - [ ] Subtask 3.2: Implement logic to filter posts based on selected tag(s) (client-side or server-side filtering).
    - [ ] Subtask 3.3: Ensure filter application is performant.
- [ ] Task 4 (AC: 7): Integrate Supabase Realtime to listen for new posts and update the `FeedList`.
    - [ ] Subtask 4.1: Subscribe to post creation events on the `Posts` table.
    - [ ] Subtask 4.2: Update the React Query cache or local state to reflect new posts.
- [ ] Task 5 (AC: 8): Ensure `PostComposer` (from Story 1.3) is correctly integrated on this page.

**Backend (referencing `backend-architecture.md` - "Posts & Feeds" module, Supabase Realtime):**
- [ ] Task 6 (AC: 2, 5): Ensure `Posts` table allows efficient querying for the main feed (e.g., indexing on `created_at` and `tags`).
    - [ ] Subtask 6.1: If server-side filtering for tags is implemented, ensure queries are optimized.
- [ ] Task 7 (AC: 7): Confirm Supabase Realtime is enabled for the `Posts` table.

## Dev Technical Guidance

- Prioritize performance for feed loading and filtering as per PRD non-functional requirements.
- React Query should be used to manage caching, refetching, and optimistic updates for posts if applicable.
- Consider the structure of `tags` in the `Posts` table (e.g., `ARRAY` of `TEXT`) for efficient filtering.
- The `PostItem` component (Story 1.6) will render the individual post details. This story focuses on the overall feed structure, fetching, filtering, and real-time updates.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 