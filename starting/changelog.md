# Emojidates Changelog

## YYYY-MM-DD: Initial Setup & Auth Implementation
- **Project Scaffolding**: Initialized Next.js project with TypeScript, Tailwind CSS, and Shadcn UI.
- **Supabase Integration**: Configured Supabase client, server, and middleware for authentication.
- **Email/Password Auth**: Implemented and tested a fully functional login/signup flow with email and password.
- **Next Steps**: Configure and implement social login provider (Google).

## 2024-06-10: Project Initialization

### Project Overview
- **Emojidates.com** is a platform for generating, sharing, and celebrating emoji-based date ideas, with a focus on virality, engagement, and community-driven content.

### Key Documents & Features
- **setupChecklist.md**: Technical, legal, moderation, admin, marketing, mobile, engagement, and community requirements outlined.
- **monetization.md**: Freemium, microtransactions, merchandising, sponsorships, affiliate, donations, and B2B data strategies.
- **engagementStrategy.md**: Streaks, reminders, UGC, surprise rewards, and social loops for habit formation.
- **acheivements.md**: Gamified badge system, unlocks, and reward logic for user actions and milestones.
- **emojiPool.md**: 100-core emoji pool, unlockable/seasonal packs, and combination logic.
- **featuresDoc.md**: Viral features, UGC galleries, achievement system, automations, and social integrations.
- **planningDoc.md**: Stepwise build plan from setup, design, emoji logic, backend/frontend, sharing, accounts, QA, analytics, and launch.

### Current Status
- Project goals, core features, and engagement strategies defined.
- Monetization and achievement systems planned.
- Emoji pool and unlock logic established.
- MVP requirements and technical roadmap outlined.

### Next Steps
- Finalize wireframes and UI/UX flows.
- Begin backend and emoji logic implementation.
- Set up analytics, legal docs, and compliance tools.
- Start frontend build with mobile-first, responsive design.
- Prepare for UGC moderation and sharing features.

## 2024-06-12: Production-Grade Rate Limiting & API Refactor
- **API Refactor:** Emoji date generation moved to a dedicated API route (`/api/generate-date`).
- **Supabase Writes Secured:** Client-side Supabase writes removed; all generation and DB writes now go through the API.
- **Distributed Rate Limiting:** Implemented Upstash Redis-based rate limiting in middleware for `/api/generate-date`.
  - Limits: 10 requests per minute per IP and per authenticated user.
  - Clever, date-themed error messages for rate limit violations.
- **Ready for Production:** Solution is serverless-friendly and works across multiple instances/environments.

## 2024-06-12: Facebook Share Message Attempt (Not Supported)
- **Attempted Feature:** Tried to prefill Facebook shares with a custom message using the 'quote' parameter.
- **Technical Limitation:** Facebook does not reliably honor the 'quote' parameter for all domains; only the link preview (from OG tags) is shown.
- **Decision:** Skipped this feature for now. Facebook shares will only display the link preview as defined by Open Graph tags.

---

_This changelog will be updated as major milestones, decisions, and releases occur._

# EmojiDates.com Decision Log

This document records the key architectural and technical decisions for the EmojiDates.com project.

---

## Block 1: Core Stack & Platform (YYYY-MM-DD)

*   **Framework**: **Next.js**
    *   **Reasoning**: Aligns with stakeholder preference and excels in performance (RSC), ease of implementation, and has a strong ecosystem for modules (auth, UI). It's the optimal choice for a modern, scalable web application.

*   **Platform Strategy**: **Progressive Web App (PWA) First**
    *   **Reasoning**: Provides an installable, app-like experience on all devices directly from the web, satisfying the immediate need for a public web app while creating a clear path for future native mobile migration. This is the fastest route to market.

*   **Hosting**: **Vercel**
    *   **Reasoning**: Offers zero-configuration, Git-based deployments tailored for Next.js. The generous free tier keeps initial costs low, while its serverless infrastructure provides seamless scalability, matching project requirements perfectly. 

---

## Block 2: UI & Design (YYYY-MM-DD)

*   **UI Components & Styling**: **Shadcn UI + Tailwind CSS**
    *   **Reasoning**: Provides a collection of composable, accessible components that can be owned and customized directly within the project. This avoids dependency overhead and aligns with the user's Tailwind CSS familiarity, enabling rapid development of a lean, on-brand UI.

*   **Accessibility (a11y)**: **Radix UI (via Shadcn UI)**
    *   **Reasoning**: Radix UI primitives, which power Shadcn UI, provide accessibility (keyboard nav, ARIA roles) out-of-the-box, fulfilling the requirement for a standards-compliant web application with minimal configuration.

*   **Internationalization (i18n)**: **`next-intl` Library**
    *   **Reasoning**: As the standard for i18n in the Next.js App Router, `next-intl` offers robust support for locale-based routing and content, making it the ideal choice for future multi-language requirements. 

---

## Block 3: Emoji Logic & Generation (YYYY-MM-DD)

*   **Data Source**: **Static JSON/TypeScript Files (Initially)**
    *   **Reasoning**: For the MVP, defining emoji pools and categories in version-controlled code is the fastest, simplest, and most cost-effective approach. It ensures zero-latency performance for the core generation feature.

*   **Generation Strategy**: **Category-Based Randomization**
    *   **Reasoning**: To ensure logical and appealing combinations, the generator will pull emojis from distinct categories (e.g., activity, food, location) rather than pure random selection. This prevents nonsensical results and improves user experience.

*   **Architecture**: **Abstracted Data Layer**
    *   **Reasoning**: The data structures will be defined as if they were coming from a database (e.g., arrays of objects with IDs and relationships). This allows the data source to be swapped in the future (e.g., to a CMS or database) with minimal refactoring of the core generation logic, perfectly balancing initial speed with long-term flexibility. 

---

## Block 4: User Accounts & Authentication (YYYY-MM-DD)

*   **Primary Provider**: **Supabase (Auth + Database)**
    *   **Reasoning**: An all-in-one backend platform that provides Authentication (Google, Discord, Email) and a Postgres Database in a single, integrated service. This choice dramatically accelerates development by unifying user management and data storage.

*   **Security Model**: **Row-Level Security (RLS)**
    *   **Reasoning**: Supabase's native RLS allows for creating powerful, declarative security rules that restrict data access to the authenticated user. This is a highly secure and scalable approach compared to manual security logic.

*   **Implementation Library**: **`@supabase/ssr`**
    *   **Reasoning**: The official Supabase server-side rendering library simplifies session management and data fetching within Next.js, supporting Server Components and providing a straightforward developer experience for connecting the frontend to Supabase. 

---

## Block 5: Data, Storage & Real-time (YYYY-MM-DD)

*   **Database**: **Supabase Postgres**
    *   **Reasoning**: Leveraging the integrated Supabase stack, the Postgres database will store all structured data, including `generated_dates` and user-submitted `date_experiences`. This provides the historical record required for gamification and achievements.

*   **File Storage**: **Supabase Storage**
    *   **Reasoning**: For user-uploaded images, the integrated Supabase Storage is ideal. It is cost-effective, managed in the same ecosystem, and its security policies can be tied directly to database rules for a cohesive security model.

*   **Real-time Features**: **Supabase Realtime**
    *   **Reasoning**: To power a live-updating feed of new submissions, Supabase's built-in Realtime engine will be used. This allows the frontend to subscribe to database changes and display new content instantly without page reloads, enhancing user engagement.

*   **Backend Automation**: **Vercel Functions + Supabase Webhooks**
    *   **Reasoning**: For automated tasks like social media posting, an event-driven architecture will be used. Supabase Database Webhooks will trigger Vercel Serverless Functions to handle the logic, creating a decoupled and highly scalable system. 

---

## Block 6: Sharing & Virality (YYYY-MM-DD)

*   **Dynamic Link Previews**: **Vercel Edge Functions with `ImageResponse`**
    *   **Reasoning**: To ensure shared links have high visual appeal on social media, the native Next.js `ImageResponse` API will be used to dynamically generate Open Graph (OG) images on Vercel's Edge Functions. This allows the specific emojis from a date to be embedded in the link preview, boosting virality.

*   **Sharing UI**: **Custom Share Component**
    *   **Reasoning**: A lightweight, custom React component will be built to handle share intents for platforms like X/Twitter and Facebook. This provides full UI control and avoids adding an unnecessary external library, keeping the application lean.

*   **Shared Content Pages**: **Dynamic Server-Side Rendering (SSR)**
    *   **Reasoning**: Shared URLs will be handled by dynamically rendered pages, fetching all relevant data (original date, user submissions) from Supabase on the server. This ensures content is always up-to-date, complete, and optimized for SEO. 

---

## Block 7: Moderation, Security & Compliance (YYYY-MM-DD)

*   **Content Moderation**: **Manual via Supabase Dashboard**
    *   **Reasoning**: For the MVP, a `status` field (`pending`, `approved`) will be added to user content tables. An admin will manually approve submissions in the Supabase UI. This is the simplest effective method, leveraging the existing stack.

*   **Spam & Abuse Prevention**: **Vercel Rate Limiter**
    *   **Reasoning**: To protect server endpoints from abuse, Vercel's native rate-limiting utilities will be used to apply IP-based limits. This provides a crucial layer of security with minimal implementation overhead.

*   **GDPR Compliance**: **Foundational Steps**
    *   **Reasoning**: To meet basic GDPR requirements, a clear Privacy Policy, a cookie consent banner, and a manual process for data deletion requests (handled via the Supabase dashboard) will be implemented.

*   **COPPA Compliance**: **Age Gate**
    *   **Reasoning**: To comply with regulations concerning minors, a mandatory age gate will be implemented during the registration flow to ensure users are 13 years of age or older. 

---

## Block 8: Analytics & Feedback (YYYY-MM-DD)

*   **Analytics Provider**: **Google Analytics 4 (GA4)**
    *   **Reasoning**: Aligns with user preference for powerful, event-based analytics. It will provide deep insights into user funnels, retention, and the effectiveness of viral features.

*   **Implementation Strategy**: **Custom Wrapper Component**
    *   **Reasoning**: A custom component will manage GA4 initialization, handle GDPR consent, and provide a simple `trackEvent()` helper function. This ensures clean and consistent tracking for key events: `generate_date`, `share_date`, `submit_experience`, and `unlock_achievement`.

---

## Block 9: Deployment & Maintenance (YYYY-MM-DD)

*   **Testing Strategy**: **Manual QA (Initially)**
    *   **Reasoning**: For the MVP, manual testing is the most direct path to launch. The application will be structured to allow for future integration of automated testing frameworks (e.g., Playwright) as the project scales.

*   **Development Workflow**: **GitHub-based with Vercel Previews**
    *   **Reasoning**: A standard GitHub-flow will be used. Vercel's Git integration will provide automatic production deployments and generate preview environments for every pull request, simplifying the review process for a small team.

*   **Maintenance**: **Automated with Dependabot**
    *   **Reasoning**: To support a solo developer, GitHub's Dependabot will be enabled to automatically create pull requests for dependency updates and security patches, reducing the manual maintenance burden. 