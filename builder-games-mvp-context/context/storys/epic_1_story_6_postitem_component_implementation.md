# Story 1.6: PostItem Component Implementation

## Status: Draft

## Story

- As a Registered Builder
- I want to see individual posts in the feeds rendered clearly with their content, tags, and available actions (Help, Props)
- so that I can understand and interact with each post effectively.

## Acceptance Criteria (ACs)

1.  A `PostItem` component (`PostItem.tsx` as per `frontend-architecture.md`) is created.
2.  The `PostItem` component displays the post's text content.
3.  The `PostItem` component displays the post's tags (e.g., as pills or labels).
4.  The `PostItem` component displays information about the author (e.g., avatar, username - may link to their profile).
5.  The `PostItem` component displays the timestamp of the post (e.g., "Posted 2 hours ago").
6.  A `HelpButton` component is integrated into `PostItem` for posts tagged "Cry for help" or "Testers wanted" (details in Help System stories - Epic 1, Part 2 or separate Epic).
7.  A `PropsButton` component is integrated into `PostItem` for posts tagged "Knowledge Share" (details in Props System stories - Epic 1, Part 2 or separate Epic).
8.  (Visual) XP/Badge indicators related to the post or its interactions might be displayed (details TBD, may relate to Help/Props outcomes).
9.  The `PostItem` is designed to be reusable in both the `FeedList` for the Main Activity Feed and the personal profile feed.
10. Only authenticated users can see/use interactive elements like `HelpButton` or `PropsButton`.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - PostItem, HelpButton, PropsButton components):**
- [ ] Task 1 (AC: 1, 2, 3, 4, 5): Design and implement the basic structure and content display of the `PostItem` component.
    - [ ] Subtask 1.1: Display post text.
    - [ ] Subtask 1.2: Display post tags.
    - [ ] Subtask 1.3: Display author information (avatar, username).
    - [ ] Subtask 1.4: Display post timestamp.
- [ ] Task 2 (AC: 6): Integrate the `HelpButton` component placeholder. (Full functionality of HelpButton will be a separate story).
    - [ ] Subtask 2.1: Conditionally display `HelpButton` based on post tags.
- [ ] Task 3 (AC: 7): Integrate the `PropsButton` component placeholder. (Full functionality of PropsButton will be a separate story).
    - [ ] Subtask 3.1: Conditionally display `PropsButton` based on post tags.
- [ ] Task 4 (AC: 8, Optional for initial `PostItem`): Design and integrate any immediate XP/Badge indicators if applicable at the post level (e.g. if a post received a lot of props already).
- [ ] Task 5 (AC: 10): Ensure interactive elements are only enabled/visible for authenticated users.

**Backend (referencing `backend-architecture.md` - "Posts & Feeds" module):**
- [ ] Task 6 (AC: 4): Ensure `Posts` data fetched for feeds includes necessary author information (e.g., `user_id` to join with `Profiles` table, or denormalized author username/avatar_url if preferred for performance).
    - [ ] Subtask 6.1: If joining `Profiles` on the client, ensure `Profiles` RLS allows fetching other users' basic info.
    - [ ] Subtask 6.2: If denormalizing, ensure data consistency if author profile changes.

## Dev Technical Guidance

- This component is central to feed usability. Ensure it's clear and performant.
- Author information might require fetching related profile data (e.g., from a `Profiles` table linked to `user_id` on the post).
- The `HelpButton` and `PropsButton` are complex interactions that will have their own dedicated stories for full logic implementation. This story focuses on integrating their placeholder display within `PostItem`.
- Consider using a date formatting library for human-readable timestamps (e.g., `date-fns` or `dayjs`).
- Profile links from author username should navigate to the respective `Builder Profile Page` (Story 1.2).

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 