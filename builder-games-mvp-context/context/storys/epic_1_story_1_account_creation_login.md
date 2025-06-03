# Story 1.1: Builder Account Creation & Login

## Status: Draft

## Story

- As a New User
- I want to be able to create an account using email/password or OAuth, and then log in
- so that I can access Builder Games platform and its features.

## Acceptance Criteria (ACs)

1.  Users can access a signup page/form.
2.  Users can register using an email and password.
3.  Password hashing must be secure (as per PRD Security & Compliance).
4.  (Per Frontend Arch & Supabase capabilities) Users can register using OAuth providers.
5.  Users receive a confirmation or are logged in directly upon successful registration.
6.  Users can access a login page/form.
7.  Registered users can log in using their email and password.
8.  (Per Frontend Arch & Supabase capabilities) Users can log in using OAuth.
9.  Upon successful login, users are redirected to an authenticated area (e.g., Main Activity Feed or their Profile).
10. Clear error messages are displayed for failed signup or login attempts (e.g., email already exists, incorrect password).
11. Session management is handled securely.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - Login/Signup Page components, Supabase Auth integration):**
- [ ] Task 1 (AC: 1, 6): Design and implement UI for Login/Signup page (Shadcn Form, branding).
    - [ ] Subtask 1.1: Create Signup form component (email, password fields, OAuth buttons).
    - [ ] Subtask 1.2: Create Login form component (email, password fields, OAuth buttons).
- [ ] Task 2 (AC: 2, 3, 5, 10): Implement client-side logic for email/password registration using Supabase Auth SDK.
    - [ ] Subtask 2.1: Handle form submission and validation.
    - [ ] Subtask 2.2: Call Supabase `signUp` function.
    - [ ] Subtask 2.3: Display success/error notifications (Shadcn Toast/Alert).
- [ ] Task 3 (AC: 4, 8, 10): Implement client-side logic for OAuth registration/login using Supabase Auth SDK.
    - [ ] Subtask 3.1: Handle OAuth button clicks.
    - [ ] Subtask 3.2: Call Supabase `signInWithOAuth` function.
    - [ ] Subtask 3.3: Display success/error notifications.
- [ ] Task 4 (AC: 7, 9, 10): Implement client-side logic for email/password login using Supabase Auth SDK.
    - [ ] Subtask 4.1: Handle form submission and validation.
    - [ ] Subtask 4.2: Call Supabase `signInWithPassword` function.
    - [ ] Subtask 4.3: Handle redirection on successful login.
    - [ ] Subtask 4.4: Display success/error notifications.
- [ ] Task 5 (AC: 11): Implement client-side session handling (e.g., storing session, checking auth state on app load).

**Backend (referencing `backend-architecture.md` - Supabase Auth, User table):**
- [ ] Task 6 (AC: 2, 3, 4, 7, 8): Configure Supabase Auth (email/password, OAuth providers).
    - [ ] Subtask 6.1: Ensure Supabase project has Auth enabled.
    - [ ] Subtask 6.2: Configure required OAuth providers in Supabase dashboard.
- [ ] Task 7 (AC: 2, 5): Ensure Supabase `users` table (and potentially a `profiles` table linked by user_id) is correctly set up to store user information upon registration. (Supabase handles much of this automatically with Auth).
    - [ ] Subtask 7.1: Define schema for `profiles` table if custom fields beyond Supabase auth.users are needed at signup (e.g. initial username), considering "Profiles & XP" logical module from backend architecture.

## Dev Technical Guidance

- Leverage Supabase Auth for all authentication mechanisms as outlined in `backend-architecture.md` (Section: Supabase as Backend Platform, Service Boundary: Authentication & Authorization) and `frontend-architecture.md` (Section: Tech Stack Recap, Core Screens: Login/Signup Page).
- Use Shadcn UI components for forms, buttons, and notifications as specified in `frontend-architecture.md`.
- Ensure error messages are user-friendly and do not expose sensitive system details (PRD: Reliability & Resilience - Error Handling).
- All data in transit must be encrypted (HTTPS/SSL - Supabase/Vercel handle this by default, aligns with PRD Data Protection).

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 