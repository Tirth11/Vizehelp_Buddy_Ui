export const MOCK_USER = {
  id: 'BUD-001',
  name: 'Marcus Johnson',
  mobile: '+1 (512) 555-0147',
  email: 'marcus.j@example.com',
  dob: '1995-03-15',
  gender: 'Male',
  enterprise: 'CleanPro Services',
  rating: 4.8,
  kycStatus: 'Approved',
  services: ['EV Charging', 'Home Cleaning', 'Parking Assistance'],
  isApproved: true,
  profilePhoto: null,
  address: '4521 Oak Lawn Ave, Dallas, TX 75219',
  bankAccount: '****7823',
  routingNumber: '****0145',
};

export const MOCK_JOBS = [
  {
    id: 'JOB-1001',
    type: 'EV Charging',
    customer: 'Sarah M.',
    location: '2100 McKinney Ave, Dallas, TX',
    distance: '2.1 mi',
    earning: 45,
    duration: '45 min',
    status: 'new',
    slaTime: '10:00 AM',
    instructions: 'Level 2 charging setup for Tesla Model 3. Customer will provide access to garage.',
  },
  {
    id: 'JOB-1002',
    type: 'Parking Assistance',
    customer: 'James R.',
    location: '500 Commerce St, Dallas, TX',
    distance: '3.4 mi',
    earning: 35,
    duration: '30 min',
    status: 'accepted',
    slaTime: '2:00 PM',
    instructions: 'Valet parking for event. Meet at main entrance.',
  },
  {
    id: 'JOB-1003',
    type: 'Home Cleaning',
    customer: 'Emily K.',
    location: '1800 Main St, Dallas, TX',
    distance: '1.8 mi',
    earning: 85,
    duration: '2 hrs',
    status: 'completed',
    slaTime: '9:00 AM',
    completedAt: '11:15 AM',
    rating: 5,
  },
  {
    id: 'JOB-1004',
    type: 'Shopping Assistance',
    customer: 'Robert P.',
    location: '8687 N Central Expy, Dallas, TX',
    distance: '5.2 mi',
    earning: 30,
    duration: '1 hr',
    status: 'cancelled',
    cancelReason: 'Customer unavailable',
  },
];

export const MOCK_EARNINGS = {
  today: 125,
  weekly: 680,
  monthly: 2850,
  completedJobs: 42,
  incentives: 180,
  deductions: 25,
  pendingPayout: 420,
  paidPayout: 2430,
};

export const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'New Job Available', message: 'EV Charging job at McKinney Ave. $45 earning.', time: '2 min ago', type: 'job', read: false },
  { id: 2, title: 'Payment Received', message: '$420 deposited to your bank account.', time: '1 hr ago', type: 'payment', read: false },
  { id: 3, title: 'Training Reminder', message: 'Complete safety certification by Friday.', time: '3 hrs ago', type: 'training', read: true },
  { id: 4, title: 'Rating Update', message: 'You received 5★ from Emily K.', time: '5 hrs ago', type: 'rating', read: true },
  { id: 5, title: 'Service Update', message: 'New service area added: Uptown Dallas.', time: '1 day ago', type: 'announcement', read: true },
];

export const MOCK_PAYOUTS = [
  { id: 'PAY-001', date: '2026-05-14', amount: 420, status: 'Paid', ref: 'TXN78945612' },
  { id: 'PAY-002', date: '2026-05-07', amount: 510, status: 'Paid', ref: 'TXN78945589' },
  { id: 'PAY-003', date: '2026-04-30', amount: 385, status: 'Paid', ref: 'TXN78945501' },
];

export const SERVICE_CATEGORIES = [
  'EV Charging Support',
  'Home Cleaning',
  'Parking Assistance',
  'Shopping Assistance',
  'Elder Care',
  'Pickup & Drop-off',
  'EV Laundry & Detailing',
  'Field Support',
];
