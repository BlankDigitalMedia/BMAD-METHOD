# Story 1.2: Builder Profile Creation & Display

## Status: Draft

## Story

- As a Registered Builder
- I want to be able to have and view my personal profile with my basic information (avatar, username, bio)
- so that I can establish my identity on the platform and other users can see who I am.

## Acceptance Criteria (ACs)

1.  Upon first login after account creation (Story 1.1), a builder has a profile page.
2.  The builder's profile page is accessible via navigation (e.g., from HUDHeader as per `frontend-architecture.md`).
3.  The profile page displays the builder's avatar (a default avatar is shown if no custom avatar is uploaded).
4.  The profile page displays the builder's username (from their account).
5.  The profile page displays a section for the builder's bio (can be initially empty).
6.  (MVP Optional, but desirable for completeness) Builders can edit their bio.
7.  (MVP Optional) Builders can upload/change their avatar.
8.  Profile information (username, bio, avatar URL) is fetched from and stored in the Supabase `Profiles` table (as per `backend-architecture.md`, "Profiles & XP" module).
9.  The profile page utilizes the `ProfileCard` component as defined in `frontend-architecture.md` (Section B: Builder Profile Page).
10. Other users can view a builder's profile page.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Builder Profile Page components):**
- [ ] Task 1 (AC: 2, 9): Design and implement the main Builder Profile Page structure (`/profile/[username].tsx`).
    - [ ] Subtask 1.1: Integrate `ProfileCard` component into the page.
    - [ ] Subtask 1.2: Implement navigation to the profile page.
- [ ] Task 2 (AC: 3, 4, 5, 8): Implement `ProfileCard` component.
    - [ ] Subtask 2.1: Display avatar (default or fetched).
    - [ ] Subtask 2.2: Display username.
    - [ ] Subtask 2.3: Display bio.
- [ ] Task 3 (AC: 8): Implement logic to fetch user profile data (username, bio, avatar_url) from Supabase for the `ProfileCard`.
- [ ] Task 4 (AC: 6, MVP Optional): Implement UI for editing the bio (e.g., a textarea and save button within `ProfileCard` or a modal).
    - [ ] Subtask 4.1: Implement logic to update the bio in Supabase.
- [ ] Task 5 (AC: 7, MVP Optional): Implement UI for uploading/changing avatar.
    - [ ] Subtask 5.1: Integrate with Supabase Storage for avatar uploads.
    - [ ] Subtask 5.2: Implement logic to update avatar_url in the Supabase `Profiles` table.

**Backend (referencing `backend-architecture.md` - "Profiles & XP" module, Supabase Storage):**
- [ ] Task 6 (AC: 8): Define/Confirm `Profiles` table schema in Supabase.
    - [ ] Subtask 6.1: Ensure fields for `user_id` (FK to `auth.users`), `username` (can be synced from `auth.users` or distinct), `bio` (TEXT), `avatar_url` (TEXT).
    - [ ] Subtask 6.2: Create a trigger or function to automatically create a basic profile entry when a new user signs up in `auth.users` if not handled by client.
- [ ] Task 7 (AC: 8, 10): Set up Row Level Security (RLS) for the `Profiles` table.
    - [ ] Subtask 7.1: Users can read all profiles.
    - [ ] Subtask 7.2: Users can only update their own profile.
- [ ] Task 8 (AC: 7, MVP Optional): Configure Supabase Storage for user avatars if avatar upload is implemented.
    - [ ] Subtask 8.1: Create a storage bucket for avatars.
    - [ ] Subtask 8.2: Set up storage policies (e.g., authenticated users can upload, public read access for avatars).

## Dev Technical Guidance

- Fetch profile data using Supabase client SDK. Profile page route might be dynamic, e.g., `/profile/[userId]` or `/profile/[username]`.
- `frontend-architecture.md` (Section B) specifies `ProfileCard`, `XPBadge`, `Reputation Metrics`, `FeedList`, `PostComposer` on the Profile Page. This story focuses on the `ProfileCard` (avatar, username, bio). XP, Reputation, and FeedList will be covered in subsequent stories.
- If implementing avatar uploads, ensure appropriate image size/type validation and compression if necessary.
- Consider data synchronization if `username` is stored in both `auth.users` and the `Profiles` table.
- Default avatar can be a static asset in the frontend.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 