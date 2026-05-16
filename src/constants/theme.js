export const COLORS = {
  primary: '#6C63FF',
  primaryDark: '#5A52E0',
  primaryLight: '#E8E6FF',
  secondary: '#00C9A7',
  accent: '#FF6B6B',
  warning: '#FFB946',
  success: '#00C9A7',
  danger: '#FF4757',
  white: '#FFFFFF',
  black: '#1B1D28',
  gray: '#8E8E93',
  lightGray: '#F2F2F7',
  darkGray: '#3A3A3C',
  background: '#F8F9FE',
  card: '#FFFFFF',
  border: '#E5E5EA',
  text: '#1B1D28',
  textLight: '#8E8E93',
  online: '#34C759',
  offline: '#FF3B30',
  gradient1: '#6C63FF',
  gradient2: '#00C9A7',
};

export const FONTS = {
  regular: { fontSize: 15, color: COLORS.text },
  medium: { fontSize: 16, fontWeight: '500', color: COLORS.text },
  bold: { fontSize: 16, fontWeight: '700', color: COLORS.text },
  title: { fontSize: 26, fontWeight: '800', color: COLORS.text, letterSpacing: -0.5 },
  subtitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  small: { fontSize: 13, color: COLORS.textLight },
  caption: { fontSize: 11, color: COLORS.textLight, letterSpacing: 0.5, textTransform: 'uppercase' },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const SHADOWS = {
  small: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
  medium: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 4 },
};
