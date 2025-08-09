# EmojiDates Setup Checklist

This checklist tracks the setup and implementation status of the major project components.

## Phase 1: MVP Setup & Configuration

### Block 1: Core Stack & Platform
- [x] **Framework**: Choose Next.js
- [x] **Platform Strategy**: Decide on PWA-first
- [x] **Hosting**: Choose Vercel
- [x] **Implementation**: Scaffold Next.js project

### Block 2: UI & Design
- [x] **UI Components**: Choose Shadcn UI + Tailwind
- [x] **Accessibility**: Strategy defined (Radix)
- [x] **Internationalization**: Choose `next-intl`
- [x] **Implementation**: Initialize Shadcn UI

### Block 3: Emoji Logic & Generation
- [ ] **Data Source**: Implement static JSON/TS files
- [ ] **Generation Strategy**: Implement category-based randomization
- [ ] **Architecture**: Implement abstracted data layer

### Block 4: User Accounts & Authentication
- [x] **Primary Provider**: Choose Supabase (Auth + DB)
- [x] **Security Model**: Strategy defined (RLS)
- [x] **Implementation Library**: Choose `@supabase/ssr`
- [x] **Implementation**: Configure Supabase client, server, middleware
- [x] **Implementation**: Build and test email/password login
- [ ] **Implementation**: Add Google social login
- [ ] **Implementation**: Add Discord social login

### Block 5: Data Storage & Backend
- [ ] **Database**: Design schema for `generated_dates` and `date_experiences`
- [ ] **File Storage**: Integrate Supabase Storage for image uploads
- [ ] **Real-time Features**: Implement live feed with Supabase Realtime
- [ ] **Backend Automation**: Set up serverless functions for social posting

### Block 6: Sharing & Social Features
- [ ] **Dynamic Link Previews**: Implement OG Image generation
- [ ] **Sharing UI**: Build custom share component
- [ ] **Shared Content Pages**: Create dynamic pages for shared dates

### Block 7: Moderation & Security
- [ ] **Content Moderation**: Implement `status` field and admin view
- [ ] **Spam Prevention**: Add rate limiting to key endpoints
- [ ] **Compliance**: Add Privacy Policy, ToS, and Cookie Consent
- [ ] **Compliance**: Implement Age Gate

### Block 8: Analytics & Feedback
- [ ] **Analytics Provider**: Choose Google Analytics 4
- [ ] **Implementation**: Integrate GA4 with a custom wrapper
- [ ] **Event Tracking**: Implement tracking for key user actions

### Block 9: Deployment & Maintenance
- [x] **Testing Strategy**: Decide on Manual QA for MVP
- [x] **Development Workflow**: Set up GitHub + Vercel
- [ ] **Maintenance**: Enable Dependabot
- [ ] **Deployment**: Perform initial production deployment
