# Story 1.7: Backend Setup for Notifications Table & Creation Logic

## Status: Draft

## Story

- As a System Administrator/Developer
- I want a `Notifications` table in the database and basic backend logic to create notification records
- so that the platform can record and store notifications for various user-facing events (e.g., help offer, help approval, XP gain, props received).

## Acceptance Criteria (ACs)

1.  A `Notifications` table is created in the Supabase database (as per `backend-architecture.md`, Service Boundary 5).
2.  The `Notifications` table schema includes fields for `notification_id` (PK), `user_id` (FK, the recipient of the notification), `type` (e.g., 'help_offer_received', 'help_offer_approved', 'help_confirmed_xp', 'props_received_xp', 'daily_checkin_xp'), `payload` (JSONB, for storing relevant data like post_id, related_user_id, xp_amount), `is_read` (BOOLEAN, default FALSE), `created_at` (TIMESTAMP).
3.  Internal backend functions (e.g., within Supabase Edge Functions for Help, Props, XP systems - Epics 2, 3, 4) are updated/designed to create records in the `Notifications` table when relevant events occur.
    *   Example: When help is confirmed (Story 3.3), notifications are created for both OP and helper regarding XP gain.
    *   Example: When props are given (Story 4.1), notifications are created for both giver and receiver regarding XP gain.
    *   Example: When a help offer is made (Story 3.1), a notification is created for the OP.
    *   Example: When a help offer is approved (Story 3.2), a notification is created for the offeror.
4.  Row Level Security (RLS) is configured for the `Notifications` table so that a user can only read their own notifications.

## Tasks / Subtasks

**Backend (referencing `backend-architecture.md` - "Notifications" module, Edge Functions):**
- [ ] Task 1 (AC: 1, 2): Define and create the `Notifications` table schema in Supabase.
    - [ ] Subtask 1.1: `notification_id` (PK, UUID or SERIAL).
    - [ ] Subtask 1.2: `user_id` (FK to `auth.users.id`).
    - [ ] Subtask 1.3: `type` (TEXT or an ENUM if preferred).
    - [ ] Subtask 1.4: `payload` (JSONB).
    - [ ] Subtask 1.5: `is_read` (BOOLEAN, DEFAULT FALSE, INDEXED).
    - [ ] Subtask 1.6: `created_at` (TIMESTAMP WITH TIME ZONE, DEFAULT `now()`, INDEXED).
- [ ] Task 2 (AC: 4): Implement RLS policies for the `Notifications` table.
    - [ ] Subtask 2.1: Users can SELECT their own notifications (`user_id = auth.uid()`).
    - [ ] Subtask 2.2: Users can UPDATE their own notifications (specifically the `is_read` status).
    - [ ] Subtask 2.3: Backend roles/functions can INSERT into the table (usually via `service_role` key in Edge Functions).
- [ ] Task 3 (AC: 3): Plan for modifications in existing backend Edge Functions (from Epics 2, 3, 4) to insert records into the `Notifications` table upon relevant events. Actual implementation of these calls will occur within those respective stories (2.1, 3.1, 3.2, 3.3, 4.1), but this story ensures the table and basic insertion principles are ready.
    - [ ] Subtask 3.1: Define standardized `type` strings and `payload` structures for each notification event (Daily Check-in XP, Help Offer, Help Approval, Help Confirmation XP, Props Given XP).

## Dev Technical Guidance

- The `type` field will be important for the frontend to determine how to render or handle different notifications.
- The `payload` field provides flexibility to store context-specific data without altering the table schema frequently.
- Ensure `user_id` in the `Notifications` table correctly identifies the recipient of the notification.
- This story focuses on the backend infrastructure. Frontend display and real-time updates will be covered in Story 1.8.

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 