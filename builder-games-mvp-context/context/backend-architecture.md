# Builder Games MVP – Backend & System Architecture

## Introduction
This document defines the backend and system architecture for the Builder Games MVP, aligning with the frontend and product requirements. It is designed for rapid MVP delivery, scalability, and future modularization.

---

## Architectural Pattern & Rationale
- **Pattern:** Monolithic (MVP) with Modular Service Boundaries
- **Rationale:**
  - Fastest path for MVP and early-stage products
  - Simple deployment and management
  - Structure codebase and database for future migration to SOA or microservices as the product scales
  - Industry best practice for MVPs ([reference](https://medium.com/@hanxuyang0826/roadmap-to-backend-programming-master-architectural-patterns-c763c9194414))

---

## Supabase as Backend Platform
- **Database:** PostgreSQL (managed by Supabase)
- **Auth:** Supabase Auth (OAuth, email/password)
- **APIs:** Auto-generated RESTful/GraphQL endpoints, client SDKs
- **Realtime:** Supabase Realtime for live feeds and notifications
- **Storage:** Supabase Storage for user assets (e.g., avatars)
- **Edge Functions:** For custom business logic, webhooks, and integrations

---

## Service Boundaries (Logical Modules)
1. **Authentication & Authorization**
   - Supabase Auth for user management
   - Row Level Security (RLS) for access control
2. **Profiles & XP**
   - Profiles table (user info, XP, badges, stats)
   - XP transactions table (atomic, auditable)
3. **Posts & Feeds**
   - Posts table (text, tags, timestamps, user_id)
   - Feed aggregation via SQL views or client-side
4. **Help/Props System**
   - HelpOffers, HelpConfirmations, Props tables
   - Triggers/functions for XP/stat updates
5. **Notifications**
   - Notifications table (user_id, type, payload, read/unread)
   - Supabase Realtime for push updates
6. **Audit & Logging**
   - Supabase logging, optional audit table for critical actions

---

## API & Integration Layer
- **Direct Client SDK:** For most CRUD, use Supabase's client SDK
- **Edge Functions:** For complex business logic, multi-table transactions, webhooks
- **External Integrations:** Use Edge Functions or Vercel serverless functions as needed

---

## Scalability, Security & Monitoring
- **Twelve-Factor App Principles:** Env vars, stateless functions, treat DB as a backing service
- **Realtime:** Use Supabase Realtime for live updates, with graceful fallback
- **Security:** RLS for all tables, validate input in Edge Functions
- **Monitoring:** Supabase logs, Vercel analytics, optional Sentry for error tracking

---

## Deployment
- **Frontend:** Vercel (auto-deploy from GitHub)
- **Backend:** Supabase (managed, scalable, with backups and monitoring)
- **Edge Functions:** Deploy via Supabase CLI

---

## Summary
- Monolithic MVP with modular service boundaries for future scaling
- Supabase for all backend needs (Auth, DB, Realtime, Storage, Edge Functions)
- Secure, scalable, and cloud-native
- All technology choices are stable, modern, and best-in-class

This document is ready for review and handoff to engineering or for further architectural refinement. 