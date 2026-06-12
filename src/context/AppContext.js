import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isLoggedIn: true,
  user: {
    id: 'BUD-001',
    name: 'Marcus Johnson',
    mobile: '+1 (512) 555-0147',
    email: 'marcus.j@example.com',
    dob: '1995-03-15',
    gender: 'Male',
    enterprise: 'ABC Home Services',
    rating: 4.8,
    kycStatus: 'Approved',
    services: ['EV Charging Support', 'Home Cleaning', 'Parking Assistance'],
    isApproved: true,
    profilePhoto: null,
    address: '4521 Oak Lawn Ave, Dallas, TX 75219',
    bankAccount: '****7823',
    routingNumber: '****0145',
  },
  isOnline: true,
  currentJob: null,
  jobs: [],
  earnings: { today: 125, weekly: 680, monthly: 2850 },
  notifications: [],
  registrationStep: 0,
  buddyStatus: 'Approved', // 'New', 'UnderReview', 'Approved', 'Rejected', 'Suspended'
  entryUrl: 'https://vizehelp.com/buddy/login',
};

const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      return { 
        ...initialState, 
        isLoggedIn: false, 
        user: null, 
        isOnline: false, 
        buddyStatus: 'New', 
        entryUrl: 'https://vizehelp.com/buddy/login' 
      };
    case 'SET_ONLINE':
      return { ...state, isOnline: action.payload };
    case 'TOGGLE_ONLINE':
      return { ...state, isOnline: !state.isOnline };
    case 'SET_CURRENT_JOB':
      return { ...state, currentJob: action.payload };
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'SET_EARNINGS':
      return { ...state, earnings: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    case 'SET_REGISTRATION_STEP':
      return { ...state, registrationStep: action.payload };
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } };
    case 'SET_BUDDY_STATUS':
      return { ...state, buddyStatus: action.payload };
    case 'SET_ENTRY_URL':
      return { ...state, entryUrl: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
