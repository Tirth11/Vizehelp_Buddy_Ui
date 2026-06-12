export const COLORS = {
  // Primary
  primary: '#4F46E5',
  primaryDark: '#4338CA',
  primaryLight: '#EEF2FF',
  primaryLighter: '#F0F4FF',

  // Secondary
  secondary: '#10B981',
  secondaryDark: '#059669',
  secondaryLight: '#ECFDF5',

  // Accent & Status
  accent: '#F59E0B',
  accentLight: '#FEF3C7',
  success: '#10B981',
  successLight: '#ECFDF5',
  danger: '#EF4444',
  dangerLight: '#FEE2E2',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',

  // Neutral
  white: '#FFFFFF',
  black: '#0F172A',
  gray: '#64748B',
  grayLight: '#94A3B8',
  grayLighter: '#E2E8F0',
  grayLightest: '#F8FAFC',
  darkGray: '#334155',

  // Background & Cards
  background: '#F8FAFC',
  backgroundDark: '#F1F5F9',
  card: '#FFFFFF',
  cardAlt: '#F8FAFC',
  border: '#E2E8F0',
  borderLight: '#F1F5F9',

  // Text
  text: '#0F172A',
  textSecondary: '#64748B',
  textLight: '#94A3B8',
  textInverse: '#FFFFFF',

  // Status
  online: '#10B981',
  onlineLight: '#ECFDF5',
  offline: '#EF4444',
  offlineLight: '#FEE2E2',
  pending: '#F59E0B',
  pendingLight: '#FEF3C7',

  // Gradients
  gradientStart: '#4F46E5',
  gradientEnd: '#10B981',
  gradientAccent: '#F59E0B',
};

export const FONTS = {
  h1: { fontSize: 32, fontWeight: '800', color: COLORS.text, letterSpacing: -0.5 },
  h2: { fontSize: 26, fontWeight: '800', color: COLORS.text, letterSpacing: -0.3 },
  h3: { fontSize: 22, fontWeight: '700', color: COLORS.text, letterSpacing: -0.2 },
  h4: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  h5: { fontSize: 16, fontWeight: '600', color: COLORS.text },

  title: { fontSize: 26, fontWeight: '800', color: COLORS.text, letterSpacing: -0.5 },
  subtitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },

  body: { fontSize: 15, fontWeight: '400', color: COLORS.text, lineHeight: 22 },
  bodyMedium: { fontSize: 16, fontWeight: '500', color: COLORS.text, lineHeight: 24 },
  bodyBold: { fontSize: 16, fontWeight: '700', color: COLORS.text, lineHeight: 24 },

  label: { fontSize: 14, fontWeight: '600', color: COLORS.text },
  labelSmall: { fontSize: 13, fontWeight: '600', color: COLORS.textSecondary },

  regular: { fontSize: 15, color: COLORS.text },
  medium: { fontSize: 16, fontWeight: '500', color: COLORS.text },
  bold: { fontSize: 16, fontWeight: '700', color: COLORS.text },
  small: { fontSize: 13, color: COLORS.textLight },
  caption: { fontSize: 12, fontWeight: '500', color: COLORS.textLight, textTransform: 'uppercase', letterSpacing: 0.5 },
  tiny: { fontSize: 11, fontWeight: '400', color: COLORS.textLight },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 9999,
  full: 9999,
};

export const SHADOWS = {
  none: {},
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 12
  },
};

export const OPACITY = {
  disabled: 0.5,
  hover: 0.8,
  active: 1,
};
