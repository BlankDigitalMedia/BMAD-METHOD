# Story 1.8: Frontend Display of Notifications (Toasts & Real-time Updates)

## Status: Draft

## Story

- As a Registered Builder
- I want to receive real-time visual notifications (e.g., toasts) for important platform events and see an indicator for unread notifications
- so that I am immediately aware of interactions relevant to me (like XP gains, help offer updates, props) and can stay informed.

## Acceptance Criteria (ACs)

1.  The application fetches a user's unread notifications upon login or app load.
2.  New notifications received while the user is active on the platform are displayed in real-time using Shadcn Toast/Alert components (as per `frontend-architecture.md` G: Notifications/Toasts).
3.  The content of the toast notification is relevant to the notification `type` and `payload` (from Story 1.7) (e.g., "You gained 10 XP for daily check-in!", "User X offered to help on your post 'Y'").
4.  Users can dismiss a toast notification, or it auto-dismisses after a certain duration.
5.  Dismissing a toast or interacting with it (if it links somewhere) marks the corresponding notification record in the database as `is_read = TRUE`.
6.  (Optional MVP - depends on complexity of a full notification center) The `HUDHeader` displays an indicator (e.g., a badge with a count) for the number of unread notifications.
7.  Supabase Realtime is used to listen for new entries in the user's `Notifications` table (as per `backend-architecture.md`, Service Boundary 5: Notifications, and Story 1.7).
8.  The `Notifications.tsx` component (mentioned in `frontend-ai-prompt.md`) is responsible for managing and displaying toast notifications.

## Tasks / Subtasks

**Frontend (referencing `frontend-architecture.md` - HUDHeader, Notifications/Toasts, `Notifications.tsx`, Supabase Realtime):**
- [ ] Task 1 (AC: 8): Implement or integrate the `Notifications.tsx` component (or a similar service/context) to manage toast notifications using Shadcn UI.
- [ ] Task 2 (AC: 1): Implement logic to fetch a user's unread notifications on app initialization.
    - [ ] Subtask 2.1: Call Supabase client SDK to query the `Notifications` table for `is_read = FALSE` and `user_id = currentUser`.
    - [ ] Subtask 2.2 (AC: 6, Optional): If displaying an unread count, update the indicator in `HUDHeader`.
- [ ] Task 3 (AC: 2, 7): Integrate Supabase Realtime to listen for new records in the `Notifications` table for the current user (table created in Story 1.7).
    - [ ] Subtask 3.1: Subscribe to INSERT events on the `Notifications` table, filtered by `user_id`.
    - [ ] Subtask 3.2: When a new notification event is received, trigger the display of a toast.
- [ ] Task 4 (AC: 3): Implement logic to format notification content for display in toasts based on `type` and `payload` (defined in Story 1.7).
- [ ] Task 5 (AC: 4, 5): Implement toast dismissal logic and marking notifications as read.
    - [ ] Subtask 5.1: Configure toast auto-dismissal and manual dismissal.
    - [ ] Subtask 5.2: On dismissal or interaction, call a backend function/update Supabase to set `is_read = TRUE` for the specific notification_id.
- [ ] Task 6 (AC: 6, Optional): Implement the unread notification indicator in `HUDHeader`.

**Backend (referencing `backend-architecture.md` - "Notifications" module, Story 1.7):**
- [ ] Task 7 (AC: 5): Ensure RLS on `Notifications` table allows users to update the `is_read` status of their own notifications (covered in Story 1.7, Task 2.2).
- [ ] Task 8 (AC: 7): Confirm Supabase Realtime is enabled for the `Notifications` table (standard Supabase feature, table setup in Story 1.7).

## Dev Technical Guidance

- Use Zustand or React Context for managing global notification state if needed (e.g., unread count, list of toasts to display).
- Toast notifications should be non-intrusive but noticeable.
- For MVP, a simple list of recent notifications (perhaps in a dropdown from the HUD indicator) could be considered if a full persistent notification center is too much. However, the PRD/Arch primarily point to toasts for immediate feedback.
- Ensure the `payload` in notifications (from Story 1.7) contains enough information to construct meaningful messages and potential links (e.g., a link to the post for a help offer notification).

## Story Progress Notes

### Agent Model Used: `<Agent Model Name/Version>`

### Completion Notes List

{Any notes about implementation choices, difficulties, or follow-up needed}

### Change Log 