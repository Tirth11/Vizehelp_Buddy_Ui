# Vizehelp Buddy Mobile App — Product & UI Documentation

## Enterprise Service Operations Platform | Worker Mobile Application

### "Manage Every Service. Verify Every Task. Optimize Every Worker."

---

## 📱 Design Philosophy

This documentation includes end-to-end UI mockup flows inspired by:

| App | UX Pattern Borrowed |
|-----|-------------------|
| **Instagram** | Stories-style onboarding, smooth transitions, visual-first proof uploads |
| **WhatsApp** | Real-time chat, quick-reply templates, notification badges |
| **Uber** | Map-first job view, swipe-to-accept, ETA tracking, earnings dashboard |
| **Urban Company** | Service selection cards, skill badges, training academy |
| **Swiggy/Zomato** | Job queue cards, status pills, gamification streaks |

---

## 📂 Document Index

| # | File | Section |
|---|------|---------|
| 01 | [Product Summary & Positioning](./01-product-summary-positioning.md) | Product overview, market positioning, taglines |
| 02 | [Target Customers & Personas](./02-target-customers-personas.md) | Enterprise segments, user personas |
| 03 | [Assignment Model](./03-assignment-model.md) | Auto, broadcast, manual, scheduled, dedicated |
| 04 | [Worker Discovery & Onboarding](./04-worker-discovery-onboarding.md) | Invite, register, verify, identity, compliance |
| 05 | [Service Skills & Approval](./05-service-skills-approval.md) | Skill selection, approval workflow |
| 06 | [Dashboard & Availability](./06-dashboard-availability.md) | Home screen, online/offline, shift status |
| 07 | [Job Assignment & Navigation](./07-job-assignment-navigation.md) | Smart dispatch, job cards, navigation |
| 08 | [Task Execution & Proof](./08-task-execution-proof.md) | Checklists, proof upload, AI validation |
| 09 | [Earnings & Payouts](./09-earnings-payouts.md) | Earnings screen, payout methods, tax docs |
| 10 | [Shift Management](./10-shift-management.md) | Clock in/out, breaks, attendance |
| 11 | [Incidents & Emergency Safety](./11-incidents-emergency-safety.md) | Incident reporting, SOS, safety check-ins |
| 12 | [Ratings, Performance & Gamification](./12-ratings-performance-gamification.md) | Scores, badges, leaderboards, streaks |
| 13 | [Training & Certification](./13-training-certification.md) | Training academy, quizzes, certificates |
| 14 | [Notifications & Communication](./14-notifications-communication.md) | Push alerts, chat, templates |
| 15 | [Support, Claims & Disputes](./15-support-claims-disputes.md) | Help center, tickets, claims workflow |
| 16 | [Offline Mode](./16-offline-mode.md) | Offline task execution, sync |
| 17 | [Location, Asset & Inventory](./17-location-asset-inventory.md) | QR/NFC scanning, asset tracking, tools |
| 18 | [Enterprise & Platform Admin](./18-enterprise-platform-admin.md) | Admin portal, governance, RBAC |
| 19 | [Fraud, Privacy & Security](./19-fraud-privacy-security.md) | Fraud detection, data protection, consent |
| 20 | [U.S. Labor Model](./20-us-labor-model.md) | Worker classification, compliance |
| 21 | [App Navigation & Job Lifecycle](./21-app-navigation-job-lifecycle.md) | Bottom nav, job status flow |
| 22 | [User Stories by Priority](./22-user-stories-priority.md) | P1, P2, P3 prioritized stories |
| 23 | [Competitive Analysis](./23-competitive-analysis.md) | Differentiation, features to win |
| 24 | [Release Scope: MVP → V2 → V3](./24-release-scope-mvp-v2-v3.md) | Phased delivery plan |
| 25 | [Metrics & Monetization](./25-metrics-monetization.md) | KPIs, revenue model |
| 26 | [Architecture & Differentiator](./26-architecture-statement-differentiator.md) | Product architecture, positioning |
| 27 | [Worker App Overview & Journey](./27-worker-app-overview-journey.md) | End-to-end worker journey |
| 28 | [Worker Stories: Onboarding](./28-worker-stories-onboarding.md) | Stories 6.1–6.17 |
| 29 | [Worker Stories: Work Execution](./29-worker-stories-work-execution.md) | Stories 6.18–6.36 |
| 30 | [Worker Stories: Earnings & Performance](./30-worker-stories-earnings-performance.md) | Stories 6.37–6.42 |
| 31 | [Worker Stories: Safety, Support & Offline](./31-worker-stories-safety-support-offline.md) | Stories 6.43–6.48 |
| 32 | [Worker Stories: Account Management](./32-worker-stories-account-management.md) | Stories 6.49–6.57 |
| 33 | [Service-Specific Stories](./33-service-specific-stories.md) | EV, Cleaning, Laundry, Parking, Hospitality, Senior Living |
| 34 | [Worker App Screens & Phases](./34-worker-app-screens-phases.md) | Screen list, MVP/Phase 2/Phase 3 |
| 35 | [Worker App Metrics & Positioning](./35-worker-app-metrics-positioning.md) | Success metrics, final positioning |

---

## 🎨 UI Mockup Legend

Throughout this documentation, UI mockups use the following notation:

```
┌─────────────────────────────────┐
│         SCREEN TITLE            │  ← Screen name
├─────────────────────────────────┤
│                                 │
│  [Element]                      │  ← Tappable button/link
│  (Input Field)                  │  ← Text input
│  {Status Pill}                  │  ← Status indicator
│  ● Radio / ○ Unselected        │  ← Selection
│  ☑ Checkbox                     │  ← Toggle
│  ▼ Dropdown                     │  ← Expandable
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │  ← Divider
│  📍 Location  📷 Camera         │  ← Icons
│  ⭐ Rating    🔔 Notification   │  ← Indicators
│                                 │
│  ┌─── Card ───────────────┐    │  ← Card component
│  │                        │    │
│  └────────────────────────┘    │
│                                 │
├─────────────────────────────────┤
│  [Home] [Jobs] [Schedule] [💰] [👤] │  ← Bottom nav
└─────────────────────────────────┘
```

### Click Flow Notation

```
[Button Click] ──→ Next Screen
[Swipe Left]  ──→ Action
[Long Press]  ──→ Options Menu
[Pull Down]   ──→ Refresh
```

---

## 🏗️ Tech & UX Principles

1. **One-thumb reachability** — Critical actions in bottom 60% of screen
2. **3-tap rule** — Any core action reachable in ≤3 taps from home
3. **Progressive disclosure** — Show only what's needed at each step
4. **Offline-first** — Core task flows work without internet
5. **Instant feedback** — Every tap produces visual/haptic response
6. **Accessibility** — WCAG 2.1 AA compliant, screen reader support
7. **Dark mode** — Full dark theme support
8. **Micro-animations** — Lottie animations for status changes

---

## 📋 Version

- **Document Version:** 1.0
- **Last Updated:** May 2026
- **Market:** United States
- **Platform:** iOS & Android (React Native / Flutter)
