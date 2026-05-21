# Vizehelp Buddyonly - USA Onboarding Screen Mockups

## App Name: Vizehelp Buddyonly

## Onboarding Flow Order

```
Enterprise Invite Login → OTP Verification → Basic Profile → USA Address →
Identity Verification → Background Check Consent → Tax Information (W-9) →
Payout Details → Emergency Contact (optional) → Availability (optional) →
Assigned Services → Review and Submit → Approval Pending → Dashboard
```

---

## Screen 1: Enterprise Invite Login

**Screen Name:** EnterInviteScreen

```
┌─────────────────────────────────┐
│                                 │
│           ┌─────┐              │
│           │  V  │  (Logo)      │
│           └─────┘              │
│                                 │
│     Vizehelp Buddyonly          │
│                                 │
│  Login with your enterprise     │
│  invite to start your Buddy    │
│  onboarding.                    │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Enterprise Invite ID      │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Phone Number              │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │        Continue           │ │
│  └───────────────────────────┘ │
│                                 │
│        ⓘ Need Help?            │
│                                 │
└─────────────────────────────────┘
```

**Fields:** Enterprise Invite ID, Phone Number
**Button:** Continue
**Help Link:** Need Help?

---

## Screen 2: OTP Verification

**Screen Name:** OTPVerificationScreen

```
┌─────────────────────────────────┐
│  ←                              │
│                                 │
│     Verify Your Number          │
│                                 │
│  We sent a 6-digit code to     │
│  +1 (XXX) XXX-XXXX             │
│                                 │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐│
│  │  │ │  │ │  │ │  │ │  │ │  ││
│  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘│
│                                 │
│  ┌───────────────────────────┐ │
│  │      Verify OTP           │ │
│  └───────────────────────────┘ │
│                                 │
│       Resend Code (30s)         │
│                                 │
└─────────────────────────────────┘
```

**Fields:** 6-digit OTP input
**Button:** Verify OTP
**Link:** Resend Code

---

## Screen 3: Basic Profile

**Screen Name:** BasicProfileScreen

```
┌─────────────────────────────────┐
│                                 │
│     Basic Profile               │
│     Capture your personal       │
│     details                     │
│                                 │
│         ┌───────┐              │
│         │ 📷    │ Profile Photo│
│         └───────┘              │
│                                 │
│  ┌───────────────────────────┐ │
│  │ First Name *              │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Middle Name (optional)    │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Last Name *               │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Email Address *           │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Phone Number *            │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Date of Birth (MM/DD/YYYY)│ │
│  └───────────────────────────┘ │
│                                 │
│  Preferred Language             │
│  [English] [Spanish] [French]   │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Save and Continue      │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Fields:** First Name*, Middle Name, Last Name*, Email*, Phone*, DOB, Profile Photo, Language
**Validation:** First/Last name mandatory, valid email, phone verified via OTP
**Skip:** Not allowed

---

## Screen 4: Address Details

**Screen Name:** AddressDetailsScreen

```
┌─────────────────────────────────┐
│                                 │
│     Address Details             │
│     Your residential address    │
│     in USA format               │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 📍 Use Current Location   │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Street Address *          │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Apartment / Unit (opt)    │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ City *                    │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ State *                   │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ ZIP Code * (5 digits)     │ │
│  └───────────────────────────┘ │
│                                 │
│  Service Area Preference (opt)  │
│  ┌───────────────────────────┐ │
│  │ Preferred Service Area    │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Max Travel Distance (mi)  │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Save and Continue      │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Fields:** Street Address*, Apt/Unit, City*, State*, ZIP Code*, Service Area, Max Distance
**Validation:** Street, City, State, ZIP mandatory; ZIP must be valid 5-digit US format
**Skip:** Address mandatory; service area can be skipped



---

## Screen 5: Identity Verification

**Screen Name:** IdentityVerificationScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 3 OF 10                   │
│                                 │
│     Identity Verification       │
│     Upload a valid government-  │
│     issued photo ID             │
│                                 │
│  Select Document Type           │
│  ┌───────────────────────────┐ │
│  │ 🪪 Driver's License       │ │
│  │    Front and back         │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 📄 State ID              │ │
│  │    Front and back         │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 🌐 U.S. Passport         │ │
│  │    Photo page             │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 👥 Permanent Resident Card│ │
│  │    If applicable          │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 💼 Employment Auth Doc    │ │
│  │    If applicable          │ │
│  └───────────────────────────┘ │
│                                 │
│  Upload Requirements            │
│  ┌───────────────────────────┐ │
│  │ ☁️ Front side of ID       │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ ☁️ Back side of ID        │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 📷 Selfie verification    │ │
│  └───────────────────────────┘ │
│                                 │
│  🛡️ Your documents are         │
│  encrypted and stored securely. │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Submit & Continue      │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Document Types:** Driver's License, State ID, U.S. Passport, Permanent Resident Card, EAD
**Upload:** Front side, Back side (if applicable), Selfie verification
**Skip:** Not allowed — identity verification is mandatory

---

## Screen 6: Background Check Consent

**Screen Name:** BackgroundCheckScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 4 OF 10                   │
│                                 │
│     Background Check Consent    │
│     Your enterprise may require │
│     background verification...  │
│                                 │
│  ┌───────────────────────────┐ │
│  │ ✓ Criminal record check   │ │
│  │ ✓ Sex offender registry   │ │
│  │ ✓ Motor vehicle records   │ │
│  │ ✓ Identity verification   │ │
│  └───────────────────────────┘ │
│                                 │
│  Verification Details           │
│  ┌───────────────────────────┐ │
│  │ Legal First Name *        │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Legal Last Name *         │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Date of Birth *           │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Current Address *         │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ SSN Last 4 (if required)  │ │
│  └───────────────────────────┘ │
│                                 │
│  ☑️ I authorize the required    │
│  background verification as     │
│  part of Buddy onboarding.      │
│                                 │
│  ⏱️ Background checks typically │
│  complete within 3-5 business   │
│  days.                          │
│                                 │
│  ┌───────────────────────────┐ │
│  │   Authorize & Continue    │ │
│  └───────────────────────────┘ │
│                                 │
│  FCRA compliance disclosure     │
└─────────────────────────────────┘
```

**Fields:** Legal First Name*, Legal Last Name*, DOB*, Current Address*, SSN Last 4
**Consent:** Checkbox required before proceeding
**Status Values:** Not Started, Consent Pending, Submitted, In Review, Passed, Failed
**Skip:** Not allowed if enterprise requires it

---

## Screen 7: Tax Information (W-9)

**Screen Name:** TaxInformationScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 5 OF 10                   │
│                                 │
│     Tax Information             │
│     Provide tax info for payout │
│     and 1099-NEC reporting      │
│                                 │
│  Tax Classification *           │
│  ┌───────────────────────────┐ │
│  │ Individual/Sole Proprietor│ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ LLC                       │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Corporation               │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Other                     │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Legal Name *              │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Business Name (optional)  │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ SSN / EIN / TIN *         │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Tax Address               │ │
│  └───────────────────────────┘ │
│                                 │
│  ☑️ I certify the information   │
│  is correct (W-9 Certification) │
│                                 │
│  ℹ️ Form W-9 provides your TIN │
│  for IRS income reporting.      │
│                                 │
│  ┌───────────────────────────┐ │
│  │     Save & Continue       │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Fields:** Tax Classification*, Legal Name*, Business Name, SSN/EIN/TIN*, Tax Address
**Consent:** W-9 Certification checkbox required
**Skip:** Not recommended — blocks approval until submitted



---

## Screen 8: Payout Details

**Screen Name:** BankDetailsScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 6 OF 10                   │
│                                 │
│     Payout Details              │
│     Add your bank account to    │
│     receive earnings in USD     │
│                                 │
│  Payout Method                  │
│  ┌────────────┐ ┌────────────┐ │
│  │ 🏦 Standard│ │ ⚡ Instant  │ │
│  │    ACH     │ │   Payout   │ │
│  └────────────┘ └────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Account Holder Name *     │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Bank Name                 │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Routing Number * (9 dig)  │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Account Number *          │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Confirm Account Number *  │ │
│  └───────────────────────────┘ │
│                                 │
│  Account Type *                 │
│  ┌────────────┐ ┌────────────┐ │
│  │  Checking  │ │  Savings   │ │
│  └────────────┘ └────────────┘ │
│                                 │
│  🛡️ Banking info encrypted     │
│  with 256-bit SSL.              │
│                                 │
│  ┌───────────────────────────┐ │
│  │     Save & Continue       │ │
│  └───────────────────────────┘ │
│         Skip for Now            │
│  (Cannot go online until done)  │
└─────────────────────────────────┘
```

**Fields:** Account Holder Name*, Bank Name, Routing Number* (9 digits), Account Number*, Confirm Account*, Account Type* (Checking/Savings)
**Optional:** Debit Card for Instant Payout
**Validation:** Routing = 9 digits, Account numbers must match
**Skip:** Allowed, but blocks going online and receiving paid jobs

---

## Screen 9: Emergency Contact

**Screen Name:** EmergencyContactScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 7 OF 10                   │
│                                 │
│     Emergency Contact           │
│     Add contact details for     │
│     safety and emergencies      │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Emergency Contact Name *  │ │
│  └───────────────────────────┘ │
│                                 │
│  Relationship                   │
│  [Parent][Spouse][Sibling]      │
│  [Friend][Other]                │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Phone Number *            │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Email (optional)          │ │
│  └───────────────────────────┘ │
│                                 │
│  ℹ️ You can add emergency       │
│  contact later from profile.    │
│                                 │
│  ┌───────────────────────────┐ │
│  │    Save and Continue      │ │
│  └───────────────────────────┘ │
│         Skip for Now            │
└─────────────────────────────────┘
```

**Fields:** Contact Name*, Relationship, Phone Number*, Email (optional)
**Skip:** Allowed — does not block onboarding

---

## Screen 10: Availability

**Screen Name:** SetAvailabilityScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 8 OF 10                   │
│                                 │
│     Availability                │
│     Define when you are         │
│     available for jobs          │
│                                 │
│  Available Days                 │
│  [Mon][Tue][Wed][Thu][Fri]      │
│  [Sat][Sun]                     │
│                                 │
│  Preferred Shift                │
│  ┌───────────────────────────┐ │
│  │ Morning    6 AM – 12 PM  │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Afternoon  12 PM – 6 PM  │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Evening    6 PM – 12 AM  │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ Full Day   6 AM – 12 AM  │ │
│  └───────────────────────────┘ │
│                                 │
│  Maximum Travel Distance        │
│  ┌───────────────────────────┐ │
│  │ Miles (e.g., 25)         │ │
│  └───────────────────────────┘ │
│                                 │
│  ℹ️ Set availability later from │
│  the Schedule section.          │
│                                 │
│  ┌───────────────────────────┐ │
│  │        Continue           │ │
│  └───────────────────────────┘ │
│         Skip for Now            │
└─────────────────────────────────┘
```

**Fields:** Available Days, Start/End Time (shift), Max Travel Distance (miles)
**Skip:** Allowed — cannot receive scheduled jobs until set



---

## Screen 11: Assigned Services

**Screen Name:** SelectServicesScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 9 OF 10                   │
│                                 │
│     Assigned Services           │
│     Services assigned by your   │
│     enterprise                  │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 🏢 ABC Home Services      │ │
│  └───────────────────────────┘ │
│                                 │
│  Assigned Service Categories    │
│  ┌───────────────────────────┐ │
│  │ 🏠 Home Assistance     ✓ │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 🔄 Pickup & Drop       ✓ │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 🧹 Cleaning Support    ✓ │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ ❤️ Senior Assistance    ✓ │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │ 🔧 Field Support       ✓ │ │
│  └───────────────────────────┘ │
│                                 │
│  ℹ️ Services are assigned by    │
│  your enterprise. Contact admin │
│  to request changes.            │
│                                 │
│  ┌───────────────────────────┐ │
│  │   Continue to Review      │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Display:** Enterprise Name, Assigned Service Categories (read-only)
**Important:** Buddy cannot freely select services — enterprise-controlled
**Skip:** Not applicable (read-only screen)

---

## Screen 12: Review and Submit

**Screen Name:** SubmitApprovalScreen

```
┌─────────────────────────────────┐
│  ←                              │
│  STEP 10 OF 10                  │
│                                 │
│     Review and Submit           │
│     Review all submitted info   │
│     before final submission     │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 👤 Profile Details    ✓  │ │
│  │ 📍 Address Details    ✓  │ │
│  │ 🪪 Identity Documents ✓  │ │
│  │ 🛡️ Background Check   ✓  │ │
│  │ 📋 Tax Information    ✓  │ │
│  │ 💳 Payout Details     ✓  │ │
│  │ 📞 Emergency Contact  ⚠️  │ │
│  │ 📅 Availability       ✓  │ │
│  │ 🔧 Assigned Services  ✓  │ │
│  └───────────────────────────┘ │
│                                 │
│  Status Legend:                  │
│  ✓ Completed  ⚠️ Skipped        │
│  ⏳ Pending   ❌ Action Required │
│                                 │
│  ┌───────────────────────────┐ │
│  │   Submit for Approval     │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Sections:** All 9 onboarding sections with status
**Button:** Submit for Approval
**Skip:** Not allowed

---

## Screen 13: Approval Pending

**Screen Name:** ApprovalPendingScreen

```
┌─────────────────────────────────┐
│                                 │
│           ⏱️                    │
│                                 │
│  Your profile is under review   │
│                                 │
│  Your enterprise is reviewing   │
│  your details. You will be      │
│  notified once approved.        │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Profile Details  Submitted│ │
│  │ Address Details  Submitted│ │
│  │ Identity Verif.  Review   │ │
│  │ Background Check In Review│ │
│  │ Tax Information  Submitted│ │
│  │ Payout Details   Completed│ │
│  │ Emergency Contact Skipped │ │
│  │ Availability     Added    │ │
│  │ Enterprise Appr. Pending  │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │  View Submitted Details   │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │    Contact Support        │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Display:** Status cards for each section
**Buttons:** View Submitted Details, Contact Support, Logout

---

## Screen 14: Action Required (Rejection/Resubmission)

**Screen Name:** RejectionScreen

```
┌─────────────────────────────────┐
│                                 │
│           ⚠️                    │
│                                 │
│     Action Required             │
│                                 │
│  Some of your submitted info    │
│  was rejected. Please correct   │
│  and resubmit.                  │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Rejection Reason:         │ │
│  │                           │ │
│  │ Government ID rejected    │ │
│  │ because the uploaded      │ │
│  │ image is unclear. Please  │ │
│  │ upload a clear image of   │ │
│  │ the front and back of     │ │
│  │ your Driver's License.    │ │
│  │                           │ │
│  │ Section: Identity Verif.  │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │  ☁️ Re-upload Document    │ │
│  └───────────────────────────┘ │
│  ┌───────────────────────────┐ │
│  │     Submit Again          │ │
│  └───────────────────────────┘ │
│       Contact Support           │
└─────────────────────────────────┘
```

**Display:** Rejected Section, Reason, Admin Comments
**Buttons:** Re-upload/Edit, Submit Again, Contact Support

---

## Field Replacement Summary

| Removed (India)         | Replaced With (USA)                                    |
|-------------------------|--------------------------------------------------------|
| Aadhaar                 | Driver's License / State ID / Passport / Gov ID        |
| PAN                     | SSN / EIN / TIN / W-9 Tax Information                  |
| UPI                     | ACH Bank Account / Debit Card Instant Payout           |
| IFSC                    | Routing Number (9 digits)                              |
| PIN Code                | ZIP Code (5 digits)                                    |
| Indian Address Format   | Street, Apt/Unit, City, State, ZIP Code                |
| INR                     | USD                                                    |
| Aadhaar KYC             | Identity Document + Selfie + Background Check          |
| Indian Bank Flow        | Account Holder, Routing, Account, Checking/Savings     |
| Indian Emergency Contact| Same with U.S. phone format                            |
| Indian Location         | Service ZIP Codes, Miles Radius, U.S. City/State       |

---

## Recommended UI Labels

Use these labels in the app:
- Identity Verification
- Background Check Consent
- Tax Information
- Payout Details
- Routing Number
- Account Number
- Account Type
- ZIP Code
- Service Area
- Maximum Travel Distance
- Assigned Services
- Submit for Approval

Avoid these labels:
- Aadhaar, PAN, UPI, IFSC, PIN Code, KYC (as India-specific wording)

---

*Document generated for Vizehelp Buddyonly USA Onboarding Flow*
*Last updated: May 21, 2026*
