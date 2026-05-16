import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isLoggedIn: false,
  user: null,
  isOnline: false,
  currentJob: null,
  jobs: [],
  earnings: { today: 0, weekly: 0, monthly: 0 },
  notifications: [],
  registrationStep: 0,
};

const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      return { ...initialState };
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
