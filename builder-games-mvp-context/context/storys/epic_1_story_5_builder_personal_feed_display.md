# Story 1.5: Builder Personal Feed Display (Profile Page)

## Status: Draft

## Story

- As a Registered Builder (or a visitor viewing a profile)
- I want to see a feed of only the specific builder's posts on their profile page
- so that I can easily review their individual activity and contributions.

## Acceptance Criteria (ACs)

1.  The Builder Profile Page (`/profile/[username].tsx`) displays a feed of the profile owner's posts.
2.  This feed uses the `FeedList` component, configured to fetch and display only posts by the specific `user_id` of the profile being viewed.
3.  Each post in this personal feed is displayed using the `PostItem` component (details in Story 1.6).
4.  The feed implements pagination or infinite scroll if the number of posts is large (aligns with PRD Performance: Profile loading within 2s).
5.  The `PostComposer` component is integrated into the Builder Profile Page for the profile owner to make quick posts (covered in Story 1.3).
6.  Data fetching for the personal feed uses React Query (as per `frontend-architecture.md`).

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Builder Profile Page, FeedList, PostItem, React Query):**
- [ ] Task 1 (AC: 1, 2, 3, 4, 6): Integrate and configure the `FeedList` component on the Builder Profile Page.
    - [ ] Subtask 1.1: Modify or parameterize the `FeedList` component (or its data fetching logic) to accept a `user_id` prop.
    - [ ] Subtask 1.2: Fetch posts from Supabase filtered by the `user_id` of the profile being viewed (using React Query).
    - [ ] Subtask 1.3: Implement pagination or infinite scroll for this personal feed.
    - [ ] Subtask 1.4: Ensure `PostItem` components are correctly rendered within this `FeedList`.
- [ ] Task 2 (AC: 5): Ensure `PostComposer` (from Story 1.3) is correctly integrated on this page for the profile owner.

**Backend (referencing `backend-architecture.md` - "Posts & Feeds" module):**
- [ ] Task 3 (AC: 2): Ensure `Posts` table allows efficient querying for a specific user's posts (e.g., indexing on `user_id` and `created_at`).

## Dev Technical Guidance

- The `FeedList` component might be reused from the Main Activity Feed (Story 1.4), but with a filter for `user_id`.
- This story assumes the `ProfileCard` and basic profile page structure are already in place (from Story 1.2).
- The `PostItem` component (Story 1.6) is crucial for displaying the actual content of each post.
- Performance of loading the profile page, including the personal feed, is important (PRD: 2 seconds).

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 