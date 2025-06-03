# Builder Games MVP - Development Story Order & Guide

## 🔄 Project Handoff Status

**Current Phase:** Sprint Planning & Story Refinement  
**Last Updated:** [Date to be filled by team]  
**Project Status:** Ready for Sprint 0 execution  

### Key Handoff Information
- **Total Stories Identified:** 16 stories across 4 epics
- **Sprint 0 Foundation Stories:** 5 critical setup stories
- **Sprint 1 Core Features:** 7 user-facing feature stories  
- **Future Sprints:** 4+ gamification and interaction stories

### Critical Dependencies & Blockers
- All Sprint 1+ stories depend on Sprint 0 completion
- Supabase backend setup is prerequisite for all data-driven features
- Theme/UI foundation required before any frontend components

### Next Actions Required
- [ ] Sprint 0 story refinement and estimation
- [ ] Technical spike planning for Supabase integration
- [ ] UI/UX design system validation
- [ ] Development environment setup verification

This document outlines the recommended order for tackling user stories to build the Builder Games MVP. While story filenames might reflect their initial epic grouping (e.g., some foundational work might be in files named `epic_1_story_X`), this guide provides the logical development sequence.

## Sprint 0: Project Bootstrap & Foundational Setup (Conceptual Epic 0)

These stories establish the absolute groundwork. They should be completed before any significant feature development.

1.  **Story: Initialize Next.js Project & Version Control**
    *   File: `storys/epic_0_story_1_init_nextjs_git.md`
    *   Goal: Clean Next.js boilerplate with TypeScript and Git.

2.  **Story: Supabase Project Setup & Environment Configuration**
    *   File: `storys/epic_0_story_2_supabase_project_setup.md`
    *   Goal: Supabase backend ready and frontend connected securely.

3.  **Story: Theme & Typography Implementation (Shadcn UI, Tailwind CSS)**
    *   File: `storys/epic_1_story_9_theme_typography_implementation.md`
    *   Goal: Global theme (dark/light, colors) and typography setup using Shadcn UI & Tailwind.
    *   *Note: Conceptually part of Epic 0, filename reflects original grouping.*

4.  **Story: Core UI Shell & Navigation Implementation**
    *   File: `storys/epic_1_story_10_core_ui_shell_navigation.md`
    *   Goal: Main app layout, HUD-like header, navigation, and theme toggle integration.
    *   *Note: Conceptually part of Epic 0, filename reflects original grouping.*

5.  **Story: Backend Setup for Notifications Table & Creation Logic**
    *   File: `storys/epic_1_story_7_backend_notifications_setup.md`
    *   Goal: `Notifications` table created and backend ready to record notifications.
    *   *Note: Conceptually part of Epic 0, filename reflects original grouping.*

## Sprint 1: Core User Access & Initial Features (Building on Epic 0)

Focuses on delivering the first set of usable features, building upon the foundational work from Sprint 0.

1.  **Story: Builder Account Creation & Login**
    *   File: `storys/epic_1_story_1_account_creation_login.md`
    *   Dependencies: Foundational stories from Sprint 0, especially Theme & UI Shell.

2.  **Story: Builder Profile Creation & Display**
    *   File: `storys/epic_1_story_2_builder_profile_creation_display.md`
    *   Dependencies: Story 1.1 (Account Creation).

3.  **Story: Builder Post Creation (Text-Only)**
    *   File: `storys/epic_1_story_3_builder_post_creation.md`
    *   Dependencies: Story 1.1 (Account Creation).

4.  **Story: `PostItem` Component Implementation**
    *   File: `storys/epic_1_story_6_postitem_component_implementation.md`
    *   Dependencies: Theme & Typography (from Sprint 0). Will be used by feed stories.

5.  **Story: Main Activity Feed Display**
    *   File: `storys/epic_1_story_4_main_activity_feed_display.md`
    *   Dependencies: Post Creation (1.3), PostItem (1.6).

6.  **Story: Builder Personal Feed Display (Profile Page)**
    *   File: `storys/epic_1_story_5_builder_personal_feed_display.md`
    *   Dependencies: Profile Creation (1.2), Post Creation (1.3), PostItem (1.6).

7.  **Story: Frontend Display of Notifications (Toasts & Real-time Updates)**
    *   File: `storys/epic_1_story_8_frontend_notifications_display.md`
    *   Dependencies: Backend Notifications Setup (Sprint 0), UI Shell (Sprint 0).

## Sprint 2 onwards: Expanding Gamification & Interaction

These epics build upon the core platform established in Sprints 0 and 1.

### Epic 2: XP & Gamification (Base XP & Display)

1.  **Story: Daily Check-in for XP**
    *   File: `storys/epic_2_story_1_daily_checkin_xp.md`
2.  **Story: Display XP Balance on Builder Profile**
    *   File: `storys/epic_2_story_2_display_xp_balance_profile.md`
3.  **Story: Display Reputation Metrics on Builder Profile**
    *   File: `storys/epic_2_story_3_display_reputation_metrics_profile.md`

### Epic 3: Help System (Offer, Approve, Confirm & XP)

1.  **Story: Offer Help on a Post**
    *   File: `storys/epic_3_story_1_offer_help.md`
2.  **Story: Approve Help Offer**
    *   File: `storys/epic_3_story_2_approve_help_offer.md`
3.  **Story: Confirm Help Received & Award XP**
    *   File: `storys/epic_3_story_3_confirm_help_award_xp.md`

### Epic 4: Props System (Give Props & XP)

1.  **Story: Give Props to a "Knowledge Share" Post**
    *   File: `storys/epic_4_story_1_give_props.md`

---

This guide should be updated as the project evolves or if priorities change. 