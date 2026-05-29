export const COLORS = {
  // Primary palette - Modern indigo/violet
  primary: '#4F46E5',
  primaryDark: '#3730A3',
  primaryLight: '#EEF2FF',
  primaryMid: '#818CF8',

  // Secondary - Teal/Emerald
  secondary: '#10B981',
  secondaryLight: '#D1FAE5',

  // Accent & Status
  accent: '#F59E0B',
  accentLight: '#FEF3C7',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  success: '#10B981',
  successLight: '#D1FAE5',
  danger: '#EF4444',
  dangerLight: '#FEE2E2',
  info: '#3B82F6',
  infoLight: '#DBEAFE',

  // Neutrals
  white: '#FFFFFF',
  black: '#0F172A',
  gray: '#94A3B8',
  grayDark: '#475569',
  grayMid: '#64748B',
  lightGray: '#F1F5F9',
  darkGray: '#334155',
  background: '#F8FAFC',
  card: '#FFFFFF',
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  text: '#0F172A',
  textSecondary: '#475569',
  textLight: '#94A3B8',
  textMuted: '#CBD5E1',

  // Status indicators
  online: '#10B981',
  onlineLight: '#D1FAE5',
  offline: '#EF4444',
  offlineLight: '#FEE2E2',
  busy: '#F59E0B',
  busyLight: '#FEF3C7',

  // Gradients (for LinearGradient usage)
  gradient1: '#4F46E5',
  gradient2: '#7C3AED',
  gradient3: '#10B981',

  // Overlay
  overlay: 'rgba(15, 23, 42, 0.5)',
  overlayLight: 'rgba(15, 23, 42, 0.08)',
};

export const FONTS = {
  // Headings
  h1: { fontSize: 32, fontWeight: '800', color: COLORS.text, letterSpacing: -0.8 },
  h2: { fontSize: 26, fontWeight: '700', color: COLORS.text, letterSpacing: -0.5 },
  h3: { fontSize: 22, fontWeight: '700', color: COLORS.text, letterSpacing: -0.3 },
  h4: { fontSize: 18, fontWeight: '600', color: COLORS.text },

  // Body
  bodyLarge: { fontSize: 17, fontWeight: '400', color: COLORS.text, lineHeight: 26 },
  body: { fontSize: 15, fontWeight: '400', color: COLORS.text, lineHeight: 22 },
  bodySmall: { fontSize: 13, fontWeight: '400', color: COLORS.textSecondary, lineHeight: 20 },

  // Utility
  button: { fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
  buttonSmall: { fontSize: 14, fontWeight: '600' },
  label: { fontSize: 13, fontWeight: '600', color: COLORS.textSecondary, letterSpacing: 0.5 },
  caption: { fontSize: 11, fontWeight: '600', color: COLORS.textLight, letterSpacing: 0.8, textTransform: 'uppercase' },
  badge: { fontSize: 11, fontWeight: '700', letterSpacing: 0.3 },

  // Legacy compat
  regular: { fontSize: 15, color: COLORS.text, lineHeight: 22 },
  medium: { fontSize: 16, fontWeight: '500', color: COLORS.text },
  bold: { fontSize: 16, fontWeight: '700', color: COLORS.text },
  title: { fontSize: 28, fontWeight: '800', color: COLORS.text, letterSpacing: -0.6 },
  subtitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  small: { fontSize: 13, color: COLORS.textLight },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const RADIUS = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 999,
};

export const SHADOWS = {
  none: { shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
  small: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.04, shadowRadius: 6, elevation: 2 },
  medium: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
  large: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 24, elevation: 8 },
  colored: (color) => ({ shadowColor: color, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 6 }),
};

export const HITSLOP = { top: 12, bottom: 12, left: 12, right: 12 };

export const ANIMATION = {
  fast: 150,
  normal: 250,
  slow: 400,
};
