# Story 0.2: Supabase Project Setup & Environment Configuration

## Status: Draft

## Story

- As a Developer
- I want to set up a Supabase project and configure environment variables for the Next.js application to connect to it
- so that the frontend has a backend to persist data, handle authentication, and utilize other BaaS features, and so that API keys are managed securely.

## Acceptance Criteria (ACs)

1.  A new Supabase project is created on the Supabase platform.
2.  The Supabase project's API URL and anon key are obtained.
3.  The Next.js project has a mechanism for managing environment variables (e.g., `.env.local` file).
4.  The Supabase API URL and anon key are stored as environment variables in the Next.js project (e.g., `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
5.  The `.env.local` file (or equivalent) is included in `.gitignore` to prevent committing secrets.
6.  A Supabase client is initialized in the Next.js application, using the environment variables, allowing the frontend to interact with Supabase.
7.  Basic connectivity to Supabase is verified (e.g., a simple test query or auth check from a test page/script, though full auth is Story 1.1).

## Tasks / Subtasks

**Development Setup (Supabase & Next.js):**
- [ ] Task 1 (AC: 1, 2): Create a new project in the Supabase dashboard.
    - [ ] Subtask 1.1: Navigate to supabase.com and create an organization/project.
    - [ ] Subtask 1.2: Note down the Project API URL and `anon` public key from Project Settings > API.
- [ ] Task 2 (AC: 3, 4, 5): Configure environment variables in the Next.js project.
    - [ ] Subtask 2.1: Create a `.env.local` file in the root of the Next.js project.
    - [ ] Subtask 2.2: Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` with the values from Supabase.
    - [ ] Subtask 2.3: Ensure `.env.local` is in the `.gitignore` file (should be there from Story 0.1 if using standard Next.js gitignore).
    - [ ] Subtask 2.4: Create an example environment file (e.g., `.env.example`) with placeholder values, to be committed to Git.
- [ ] Task 3 (AC: 6): Install and initialize the Supabase client library in Next.js.
    - [ ] Subtask 3.1: Install `@supabase/supabase-js` package (`npm install @supabase/supabase-js` or `yarn add @supabase/supabase-js`).
    - [ ] Subtask 3.2: Create a Supabase client utility/module (e.g., `lib/supabaseClient.ts`) that initializes the client using the environment variables.
- [ ] Task 4 (AC: 7): Perform a basic connectivity test.
    - [ ] Subtask 4.1: (Optional) Create a temporary test page or script that attempts to use the initialized Supabase client (e.g., fetch a non-existent table to check for API errors vs. connection errors).

## Dev Technical Guidance

- Follow official Supabase documentation for project creation and Next.js integration.
- Prefix client-side environment variables with `NEXT_PUBLIC_` in Next.js.
- Ensure `service_role` key and other private keys are NEVER exposed on the client-side; they are for backend functions (Edge Functions) only and should be set as secrets in Supabase project settings if needed by Edge Functions.
- This story sets up the connection. Subsequent stories (e.g., 1.1 for Auth, 1.7 for Notifications table) will define and interact with specific Supabase features and tables.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 