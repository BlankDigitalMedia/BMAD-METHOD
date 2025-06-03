# Builder Games Product Requirements Document (PRD)

## Goal, Objective and Context

The primary goal of Builder Games is to transform startup building into a competitive arena where founders "show up, ship live, and prove it" through public, gamified MVP sprints. Traditional startup validation relies on decks, docs, and slow networking, and there is no real-time, public proof layer for early-stage execution. Founders lack efficient ways to build momentum, earn credibility, and attract support early, and users are stuck in pitch loops instead of building reputational assets through action.

**Vision:** To create a public-proof system where startup builders gain XP, build artifacts, and grow reputations by playing live, focused initially on individual progress and proof of execution. The end goal is a new infrastructure for startup careers: Playbook → Arena → Track Record.

**Primary Goals (MVP by end of Q2 2025):**
* Launch MVP with functional Builder Profile/initial Playbook creation, an individual-focused Arena Mode (for logging and proof), and public Drop Proof pages.
* Support live Drops with personal XP generation, artifact creation, and shareable Drop Proof pages through ad-hoc and checkpoint updates.
* Onboard 100 active builders in the first month post-launch, primarily demonstrating the value of structured public proof and individual progress. Early adopters may earn legacy badges, XP boosts, or profile perks for joining the first cohort of 100 Drops.
* Enable automatic Highlight capture and sharing from Drops.
* Measure user retention via 7-day and 30-day active Drop replays, focusing on continued individual engagement with the proof engine.

**Success Metrics (Initial Ideas):**
* Number of completed Drops
* Volume of public artifacts generated
* XP progression per user
* Social sharing rate of Proof Pages and Highlights
* Retention rate of builders across multiple Drops

## Functional Requirements (MVP)

The MVP for Builder Games will focus on delivering a robust **Epic 1: Core Builder Profile & Activity Feed**, providing immediate value through public visibility, social interaction, and gamified progress.

* **Builder Profiles & Feeds:**
    * Builders can create personal profiles.
    * Profiles will display a feed of their updates.
    * A main feed will aggregate updates from all builders.
    * Updates can be text-only for MVP.
    * Updates will include show-and-tell, calls for help, and milestones.
    * Posts can include predefined tags (e.g., "Update", "Cry for help", "Celebration", "Testers wanted", "Knowledge Share").
* **XP & Gamification:**
    * XP will be generated through daily check-ins.
    * Bonus XP will be awarded for offering and confirming help.
    * Bonus XP will be awarded for giving and receiving "props" on "Knowledge Share" posts.
    * XP balance and reputation metrics ("Helped X Builders", "Received X Props") will be displayed on builder profiles.
* **Help & Knowledge Sharing:**
    * Builders can offer help on specific posts, triggering a public system comment.
    * Original posters can approve and confirm help received, also via public system comments, awarding XP to both parties.
    * Builders can give "props" to "Knowledge Share" posts, awarding XP to both the giver and recipient.

## Non Functional Requirements (MVP)

### Performance Requirements
* **Responsiveness:**
    * Profile and feed loading time: All visible content on a builder's personal profile feed and the main activity feed should load within **2 seconds** on a typical broadband connection.
    * Post submission: Text updates, "Offer Help," "Approve Help," "Confirm Help," and "Give Props" actions should process and reflect visually within **1 second** of user interaction.
    * Filtering the main feed: Filtering actions should apply and re-render the feed within **1 second**.
* **Scalability:**
    * The platform should support at least **500 concurrent active users** without significant performance degradation during MVP.
    * The system should be designed to scale to **10,000 registered builders** within 6 months post-MVP.
* **Throughput:**
    * The system should handle at least **100 posts per minute** during peak usage.
    * The system should handle at least **50 "Offer/Confirm Help" or "Give Props" actions per minute** during peak usage.

### Security & Compliance
* **Authentication & Authorization:**
    * User authentication (login/signup) must be secure, using industry-standard hashing for passwords.
    * Only authenticated users can post updates, offer help, approve/confirm help, or give props.
    * Only the original poster of a "Cry for Help" / "Testers Wanted" post can "Approve Help" or "Confirm Help" for offers on their post.
    * A builder cannot give props to their own posts.
* **Data Protection:**
    * User data (email, password hashes, profile information, posts, XP) must be stored securely.
    * Data in transit must be encrypted (HTTPS/SSL for all communications).
    * No sensitive personal identifiable information (PII) beyond username and email should be collected or stored in MVP.
* **Vulnerability Prevention:**
    * The application must be protected against common web vulnerabilities (e.g., XSS, SQL Injection, CSRF, as per OWASP Top 10 guidelines).

### Reliability & Resilience
* **Availability:**
    * The platform should target **99.5% uptime** for core functionalities (profile, feeds, posting, help/props actions).
* **Error Handling:**
    * User-facing error messages should be clear, concise, and user-friendly, without exposing sensitive system details.
    * System-level errors should be logged internally for debugging and monitoring.
* **Data Integrity:**
    * All XP transactions must be atomic and consistent (e.g., XP is either fully awarded and recorded, or not at all).

### Usability & Accessibility (High-Level)
* **Intuitive UI:** The user interface for profile creation, posting, feed viewing, check-ins, and the help/props interactions should be intuitive and easy to navigate without extensive training.
* **Responsiveness (UI):** The UI should adapt gracefully across common desktop browser sizes.
* **Accessibility:** The MVP should aim for basic WCAG 2.1 AA compliance where practical for core features (e.g., keyboard navigation for primary actions, sufficient color contrast for text).

### Maintainability & Operability
* **Code Quality:** Code should adhere to established coding standards (to be defined in architecture).
* **Logging:** Comprehensive logging should be in place for critical application events, errors, and performance metrics.
* **Monitoring:** Basic monitoring capabilities should be in place to track application health, performance, and errors.

## User Interaction and Design Goals

* **Overall Vision & Experience:** The desired look and feel for Builder Games is **"Kinetic UI/UX"**, featuring a **HUD-like interface** and a **default dark mode**. The overall experience should be **action-forward**, motivating builders to "show up, ship live, and prove it" through visible progress and community engagement. UI components should leverage **Shadcn** wherever possible to ensure a consistent, modern aesthetic and efficient development.
* **Key Interaction Paradigms:** The core interaction will revolve around posting updates (text-only for MVP), daily check-ins, and clear, gamified buttons for "Offer Help," "Approve Help," "Confirm Help," and "Give Props." These interactions should feel intuitive and directly contribute to public proof and reputation.
* **Core Screens/Views (Conceptual):**
    * **Login/Signup Screen:** A clear entry point.
    * **Builder Profile Page:** The central hub for a builder's identity, personal activity feed, XP display, and reputation metrics ("Helped X Builders", "Received X Props").
    * **Main Activity Feed:** The aggregated, public stream of all builder updates, with filtering by tags.
    * **Post Composition Interface:** A streamlined interface for creating new text updates and selecting tags.
* **Accessibility Aspirations:** The platform should aim for basic usability by screen reader users and maintain sufficient color contrast, especially with the default dark mode.
* **Branding Considerations (High-Level):** The UI/UX must embody the "public proof as a first-class design principle". Content must be **shareable, stream-friendly, and async-friendly**.
* **Target Devices/Platforms:** Primarily a **web desktop** experience, with responsiveness to adapt across common desktop browser sizes.

### Visual Design & Component Principles

To guide the aesthetic and structural implementation, the following principles from the provided design system apply:

* **Typography System:** Uses **Space Grotesk** for headings (Normal, Medium, Bold weights) and **Inter** for body text (Normal, Medium, Semibold weights), including smaller text for captions and metadata.
* **Color System (Core Narrative States):**
    * **Primary:** Pink
    * **Progression:** Purple
    * **Live/Chaos:** Red
    * **Success:** Green
    * **Discovery:** Blue
    * **Momentum:** Orange
* **Glow Effects:**