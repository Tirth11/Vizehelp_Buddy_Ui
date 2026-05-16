# Vizehelp Buddy Worker App PRD

## Product overview
Vizehelp Buddy Worker App is a U.S. enterprise-grade mobile application for frontline workers who deliver assisted services such as EV charging support, EV laundry and cleaning, parking assistance, shopping assistance, care support, pickup and drop-off, and related on-demand tasks. The product is designed for enterprise-managed workforces and platform-governed operations, where workers may join through enterprise invitation or direct self-registration and must pass verification before becoming active.

The application must support the complete worker lifecycle: onboarding, verification, training, shift and availability control, assignment dispatch, guided task execution, proof of service, support, earnings visibility, safety escalation, and secure session management. The product must also provide enterprise and platform oversight through approval workflows, monitoring, exception handling, compliance controls, and auditable operational records.

## Problem statement
Enterprise service operations require more than a simple gig-work task app. Workers need structured onboarding, clear next steps, proof capture, secure customer interactions, and fast support, while enterprises need eligibility checks, workforce control, SLA visibility, and exception handling at scale.

Without a purpose-built worker application, operations become fragmented across calls, spreadsheets, and manual approvals, which increases onboarding friction, service inconsistency, fraud risk, privacy exposure, payout disputes, and missed SLA commitments. Modern onboarding and field service products perform better when flows use progress indicators, checklists, guided inputs, and role-aware interfaces instead of long unstructured forms or disconnected workflows.

## Goals
- Enable invited and direct workers to onboard and become eligible with minimal friction while maintaining enterprise verification standards.
- Ensure only approved, verified, and service-qualified workers can accept assignments.
- Give workers a fast, mobile-first workday experience with clear status, assignments, checklists, and proof-of-service steps.
- Protect customer and worker data through consent, least-privilege access, secure authentication, and auditable activity logs.
- Provide enterprise admins and platform admins with approval, monitoring, escalation, performance, and reconciliation capabilities.

## Non-goals
- Building a customer-facing marketplace discovery app in this phase.
- Supporting unmanaged peer-to-peer worker onboarding without enterprise or platform governance.
- Replacing enterprise payroll, HRIS, or external background-check vendors directly in MVP.
- Supporting every service-specific workflow variant in phase one; the first release should support configurable but standardized task templates.

## Personas
### Worker persona
A worker is a mobile-first frontline operator who wants quick onboarding, predictable assignments, transparent earnings, and simple proof-capture steps. This user often works in the field under time pressure and benefits from guided flows, visible progress, large touch targets, and low-friction forms.

### Enterprise admin persona
An enterprise admin invites workers, reviews verification outcomes, manages service eligibility, assigns locations, monitors live activity, tracks SLA risk, and handles escalations. This persona needs workforce visibility, exception alerts, and decision support rather than deep platform-level financial controls.

### Platform admin persona
A platform administrator governs cross-enterprise operations, compliance, claims, reconciliation, reporting, and critical alerts. This persona needs full auditability and policy control across workers, enterprises, payouts, and incidents.

## Product principles
- Checklist-based onboarding over long static forms, because structured onboarding improves completion and clarity.
- Role-based information exposure, so workers see only what they need at each step while admins get operational controls.
- Mobile-first execution with glanceable status, fast CTAs, and stepwise task completion.
- Privacy by design, including masked customer data, consent prompts, secure document handling, and purpose-based permissions.
- Audit-friendly proof of service through configurable combinations of photos, OTP, QR, notes, timestamps, and location data.
- Support and safety embedded in the workflow rather than hidden in settings or help menus.

## Success metrics
### Business metrics
- Worker onboarding completion rate
- Worker approval conversion rate
- Average time from registration start to approved activation
- Assignment acceptance rate
- Task completion rate
- SLA adherence rate
- Repeat worker retention rate
- Dispute rate per 1,000 tasks
- Earnings payout accuracy rate

### Experience metrics
- OTP verification success rate
- Document resubmission rate
- Time to first accepted job
- Task proof completion success rate
- Support first-response time
- Incident escalation resolution time
- Average worker dashboard engagement per active day

## Scope
### MVP scope
The MVP includes worker onboarding, OTP verification, profile setup, document upload, identity verification, background-check status handling, service selection, worker approval, dashboard, online or offline status, assignment acceptance, navigation handoff, task execution with proof capture, customer verification, earnings visibility, shift tracking, incident reporting, emergency assistance, notifications, support center, secure logout, enterprise worker management, and platform governance views.

The MVP also includes several critical additions not present in the initial draft: training and certification status, rejection and resubmission handling, cancellation and no-show logic, geofence-aware arrival, customer privacy masking, dispute intake, reimbursement submission, consent management, and audit logs for high-risk actions.

### Phase 2 scope
Phase 2 can add offline task caching, multilingual support expansion, dynamic pricing rules, advanced workforce forecasting, in-app learning modules by service category, predictive fraud detection, richer analytics benchmarks, wearable integration, and deeper external system integrations.

## Information architecture
### Worker app primary navigation
- Home
- Jobs
- Shift
- Wallet
- Support
- Profile

### Enterprise admin modules
- Worker invitations
- Verification queue
- Worker roster and status
- Location and service assignment
- Live operations monitor
- Incident and escalation queue
- Performance and SLA dashboard

### Platform admin modules
- Enterprise oversight
- Worker governance
- Claims and disputes
- Reconciliation and payouts
- Risk and alert console
- Compliance reports
- Audit log viewer

## End-to-end lifecycle
1. Worker discovery and access
2. Mobile verification
3. Account setup
4. Identity and eligibility verification
5. Service, location, and availability setup
6. Training and certification completion
7. Approval or rejection workflow
8. Go online or start shift
9. Receive and accept assignments
10. Navigate and arrive
11. Execute task and capture proof
12. Verify completion with customer or enterprise rules
13. Handle exceptions, incidents, or emergency escalation as needed
14. Close task and calculate earnings
15. View payouts, ratings, and performance
16. Access support, disputes, settings, and secure re-login

## Functional requirements
1. Worker discovery and invitation
2. Mobile verification
3. Account setup
4. Identity verification
5. Service selection and readiness
6. Training and certification
7. Worker approval
8. Worker home dashboard
9. Availability and shift management
10. Job assignment
11. Navigation and arrival
12. Task execution
13. Customer verification and order close
14. Exceptions, incidents, and emergency assistance
15. Earnings, wallet, payouts, reimbursements, and disputes
16. Ratings and performance
17. Notifications and support
18. Session security and privacy controls
19. Enterprise worker management
20. Platform governance

## Key edge cases
- OTP expired, invalid, or delivery failed
- Worker invited to multiple enterprises
- Duplicate mobile or identity conflict
- Document unreadable, mismatched, or expired
- Background check pending beyond SLA
- Worker partially onboarded and returns later
- Training expired after worker was previously approved
- Worker goes offline after assignment offer
- Worker accepts but does not start navigation
- Geofence not detected because of weak GPS
- Customer unavailable for OTP or QR verification
- Before photo captured but after photo missing
- Partial task completion because of inventory shortage or site access issue
- Worker cancellation, no-show, or repeated decline pattern
- Payment mismatch, deduction challenge, reimbursement rejection
- Lost device, suspicious login, session hijack signal
- Emergency trigger activated accidentally and then cancelled

## UX requirements
### Worker app UI
The worker app must be mobile-first with large tap targets, low text density, clear status chips, and one dominant CTA per screen.

### Dashboard UI
The home dashboard should show current shift state, one active task card, upcoming task preview, today earnings, alerts, notifications, and performance summary.

### Onboarding UI
Onboarding must use a visible stepper, completion checklist, contextual helper text, save-and-resume behavior, inline validation, and status labels.

### Job UI
Each job card must show service type, schedule, payout estimate, distance, SLA urgency, proof requirements, masked customer details, and accept or decline controls.

### Task UI
The task execution screen should include a step checklist, evidence capture buttons, notes area, incident quick action, support access, and a completion CTA.

### Wallet UI
The wallet screen should separate available balance, upcoming payout, incentives, deductions, reimbursements, and disputes.

### Support UI
Support should provide quick-access actions for unsafe situation, customer unavailable, access denied, task issue, payment issue, and document issue.

## Privacy and security requirements
- Use least-privilege access to customer details.
- Mask phone numbers and sensitive address details until assignment acceptance or arrival.
- Provide pre-permission education for location, camera, notifications, and biometrics.
- Capture explicit acknowledgment for photo-based proof, OTP-based closure, and emergency contact notifications where applicable.
- Encrypt sensitive records in transit and at rest.
- Maintain audit logs for approvals, rejections, document review, assignment changes, proof uploads, disputes, and emergency actions.

## Integrations
- SMS or OTP provider
- Identity verification vendor
- Background-check vendor
- Maps and navigation provider
- Payment or payout provider
- File storage for documents and proof
- Notification service
- Enterprise admin console and reporting stack

## MVP release checklist
- Worker onboarding end to end
- Enterprise invitation support
- OTP verification
- Profile and document capture
- Approval and rejection loop
- Service and training eligibility controls
- Worker dashboard
- Shift and availability states
- Assignment acceptance and reassignment
- Navigation handoff and arrival check
- Guided task execution with proof capture
- Customer verification and order close
- Incident and SOS flow
- Earnings and payout visibility
- Notification center and support center
- Session security and privacy controls
- Enterprise and platform admin operational views
- Audit logs for critical workflow actions

## Open questions
- Which services launch in phase one and require distinct SOPs?
- Which proof combinations are mandatory by service type: before photo, after photo, OTP, QR, signature, or notes?
- What geofence tolerance should be used for arrival and task start?
- Should workers be allowed to see full customer address before acceptance for all services or only after acceptance?
- What payout cadence and reimbursement approval policy will be used in MVP?
- Which external vendors will handle ID verification, background checks, SMS, and payouts?
- Which incidents require direct enterprise escalation versus platform support triage?
- What regional legal or labor-policy constraints apply across U.S. states in the initial rollout?

---

# Agent marketplace and model-routing requirements
*Note: This section seems to describe an AI platform/marketplace feature with NVIDIA integrations, likely carrying over from a multi-agent AI project.*

The interface should dynamically present a curated list of active agents grouped by capability category. Users should see the most suitable agents for Research, Coding, Stock and Financial Analysis, Image Generation, Vision, Creative Writing, Multilingual tasks, and General Chat, with health status, credit cost, and recommended usage clearly displayed.

Every model response should display transparent usage metadata, including model name, category, provider, credits consumed, token usage, latency, and timestamp. The platform should support login and registration through email ID and phone number with OTP verification, and all chats, preferences, selected agents, and usage history should be retained against the authenticated user profile by default.
