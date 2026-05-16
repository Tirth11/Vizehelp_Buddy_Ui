# Vizehelp Buddy Worker Application — Complete User Flow & User Stories (U.S. Enterprise Model)

## 1. Worker Discovery & Invitation Flow
**User Story**
As a worker, I want to receive an invitation from an enterprise or register directly through the application, so that I can join the platform and start accepting service tasks.

**Flow**
Worker receives invite OR downloads app
↓
Open application
↓
Choose:
- Continue with Invite
- Register Directly
↓
Verify mobile number with OTP
↓
Create profile
↓
Upload verification documents
↓
Select service skills
↓
Complete background verification
↓
Submit for approval
↓
Account approved
↓
Worker can go online

## 2. Mobile Verification Flow
**User Story**
As a worker, I want to securely verify my mobile number, so that my account remains protected and authenticated.

**Flow**
Enter mobile number
↓
Receive OTP
↓
Enter OTP
↓
OTP verified
↓
Proceed to account setup

## 3. Account Setup Flow
**User Story**
As a worker, I want to create my account and personal profile, so that enterprises can identify and assign work to me.

**Flow**
Enter:
- Full name
- Email
- Password/PIN
- Emergency contact
- Address
↓
Upload profile photo
↓
Save profile

## 4. Identity Verification Flow
**User Story**
As a platform administrator, I want workers to complete identity verification before activation, so that only verified individuals can access enterprise assignments.

**Flow**
Upload:
- Driver license / ID
- Work authorization
- Tax details
- Selfie verification
↓
Document validation
↓
Background verification
↓
Manual or automated approval
↓
Verification completed

## 5. Service Selection Flow
**User Story**
As a worker, I want to choose the services I can perform, so that I receive relevant assignments only.

**Flow**
Choose services:
- EV operations
- Cleaning
- Laundry
- Parking
- Care services
- Shopping assistance
↓
Select working locations
↓
Select availability
↓
Save preferences

## 6. Worker Approval Flow
**User Story**
As an enterprise admin, I want to approve or reject workers after verification review, so that only eligible workers become active.

**Flow**
Worker profile submitted
↓
Admin reviews:
- Documents
- Background check
- Skills
- Availability
↓
Approve / Reject / Request changes
↓
Worker notified

## 7. Worker Home Dashboard Flow
**User Story**
As a worker, I want to view my daily activities and performance in one dashboard, so that I can efficiently manage my workday.

**Dashboard Sections**
- Earnings summary
- Active jobs
- Upcoming jobs
- Shift status
- Notifications
- Ratings
- Performance score
- SLA score

## 8. Online / Offline Availability Flow
**User Story**
As a worker, I want to control my availability status, so that I only receive assignments when I am ready to work.

**Flow**
Worker toggles:
- Online
- Offline
- Break
↓
System updates availability
↓
Dispatch engine uses status for assignments

## 9. Job Assignment Flow
**User Story**
As a worker, I want to receive nearby and suitable service assignments, so that I can complete tasks efficiently.

**Flow**
New task generated
↓
Dispatch engine evaluates:
- Distance
- Skill
- Availability
- SLA priority
- Performance
↓
Worker receives job request
↓
Worker accepts or declines
↓
Assignment confirmed

## 10. Navigation & Arrival Flow
**User Story**
As a worker, I want turn-by-turn navigation to the task location, so that I can arrive on time and meet SLA expectations.

**Flow**
Task accepted
↓
Navigation opens
↓
GPS tracking begins
↓
Arrival detected
↓
Worker starts task

## 11. Task Execution Flow
**User Story**
As a worker, I want guided workflows for task execution, so that service quality remains standardized.

**Flow**
Start task
↓
Follow checklist/workflow
↓
Upload evidence:
- Photos
- Notes
- QR scan
- OTP verification
↓
Mark task complete
↓
Completion recorded

## 12. Customer Verification Flow
**User Story**
As a customer or enterprise, I want service completion to be verified securely, so that disputes and fraud are minimized.

**Flow**
Worker completes task
↓
Customer receives:
- OTP
OR
- QR verification
↓
Verification successful
↓
Order closed

## 13. Earnings & Payments Flow
**User Story**
As a worker, I want visibility into my earnings and payouts, so that I can track my income transparently.

**Flow**
Task completed
↓
Earnings calculated
↓
Bonuses/incentives applied
↓
Payment added to wallet
↓
Worker views:
- Daily earnings
- Weekly earnings
- Monthly payouts
- Incentives
- Payment history

## 14. Shift Management Flow
**User Story**
As a worker, I want to manage my shifts and breaks, so that my availability is accurately reflected.

**Flow**
Start shift
↓
Clock-in recorded
↓
Break management
↓
Resume work
↓
End shift
↓
Attendance logged

## 15. Incident Reporting Flow
**User Story**
As a worker, I want to report incidents during service execution, so that safety and operational issues can be addressed quickly.

**Flow**
Open incident report
↓
Select incident type
↓
Upload:
- Photos
- Video
- Notes
↓
Submit report
↓
Enterprise/support notified

## 16. Emergency Assistance Flow
**User Story**
As a worker, I want emergency assistance during unsafe situations, so that I can receive immediate support.

**Flow**
Press emergency button
↓
Live location shared
↓
Emergency contacts notified
↓
Support escalation initiated

## 17. Worker Rating & Performance Flow
**User Story**
As an enterprise admin, I want to evaluate worker performance and service quality, so that high operational standards are maintained.

**Flow**
Task completed
↓
Customer/admin provides rating
↓
System updates:
- Rating
- SLA score
- Acceptance rate
- Completion rate
↓
Performance dashboard updated

## 18. Notifications Flow
**User Story**
As a worker, I want real-time notifications for operational updates, so that I never miss important actions.

**Notification Types**
- New assignments
- Shift reminders
- SLA alerts
- Payment updates
- Verification requests
- Support messages
- Incident responses

## 19. Support & Help Flow
**User Story**
As a worker, I want access to support and help resources, so that I can resolve issues quickly.

**Flow**
Open support center
↓
Choose:
- Chat support
- Raise ticket
- FAQ/help
- Call support
↓
Issue tracked until resolution

## 20. Logout & Session Security Flow
**User Story**
As a worker, I want secure session management, so that my account remains protected.

**Flow**
Logout initiated
↓
Session invalidated
↓
Biometric/OTP required for re-login

## 21. Enterprise Worker Management Flow
**User Story**
As an enterprise admin, I want to manage workforce operations centrally, so that enterprise services remain controlled and efficient.

**Flow**
Invite workers
↓
Review verification status
↓
Assign locations/services
↓
Monitor live activity
↓
Track performance
↓
Handle escalations

## 22. Platform Governance Flow
**User Story**
As a platform administrator, I want platform-wide operational visibility and governance, so that compliance, service quality, and financial controls are maintained.

**Flow**
Monitor enterprises
↓
Monitor workers
↓
Review claims
↓
Review reconciliation
↓
Manage platform alerts
↓
Generate reports
