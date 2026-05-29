// VizehelpBuddy — Worker-friendly theme.
// Clean blue + green work palette: simple, readable, fast to scan.
// Use blue for primary actions, green for accept/complete/online,
// orange for pending/waiting, red only for reject/cancel/error.
//
// NOTE: This palette is the single source of truth. Token KEYS from the
// previous indigo theme are preserved (mapped onto the blue+green palette)
// so that every screen keeps rendering consistently.

export const APP_NAME = 'VizehelpBuddy';
export const APP_TAGLINE = 'Work. Earn. Grow.';

export const COLORS = {
  // Brand & actions
  primary: '#2563EB',          // Blue — main buttons, links
  primaryDark: '#1D4ED8',
  primaryLight: '#DBEAFE',     // soft tint for highlights/cards
  primaryMid: '#93C5FD',

  // Secondary (green)
  secondary: '#16A34A',
  secondaryLight: '#DCFCE7',

  // Status colors
  success: '#16A34A',          // Green — accept, completed, online
  successLight: '#DCFCE7',
  warning: '#F97316',          // Orange — pending, waiting, on-the-way
  warningLight: '#FFEDD5',
  danger: '#DC2626',           // Red — reject, cancel, error, offline
  dangerLight: '#FEE2E2',
  info: '#0EA5E9',             // Sky — informational
  infoLight: '#E0F2FE',
  accent: '#F97316',           // warning-orange (legacy alias)
  accentLight: '#FFEDD5',

  // Online / Offline / Busy
  online: '#16A34A',
  onlineLight: '#DCFCE7',
  offline: '#DC2626',
  offlineLight: '#FEE2E2',
  busy: '#F97316',
  busyLight: '#FFEDD5',

  // Surfaces
  background: '#F8FAFC',       // light gray app background
  card: '#FFFFFF',
  white: '#FFFFFF',
  black: '#111827',

  // Text & neutrals
  text: '#111827',             // dark navy — primary text
  textSecondary: '#374151',
  textLight: '#6B7280',        // secondary text
  textMuted: '#9CA3AF',
  darkGray: '#374151',
  grayDark: '#374151',
  gray: '#6B7280',
  grayMid: '#9CA3AF',
  lightGray: '#F1F5F9',        // input/chip background
  border: '#E5E7EB',
  borderLight: '#F1F5F9',

  // Gradients (kept for back-compat)
  gradient1: '#2563EB',
  gradient2: '#16A34A',
  gradient3: '#0EA5E9',

  // Overlay
  overlay: 'rgba(17, 24, 39, 0.5)',
  overlayLight: 'rgba(17, 24, 39, 0.08)',
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
  badge: { fontSize: 11, fontWeight: '700', letterSpacing: 0.3 },

  // Legacy / shared
  regular: { fontSize: 15, color: COLORS.text, lineHeight: 22 },
  medium: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  bold: { fontSize: 16, fontWeight: '700', color: COLORS.text },
  title: { fontSize: 26, fontWeight: '800', color: COLORS.text, letterSpacing: -0.3 },
  subtitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  small: { fontSize: 13, color: COLORS.textLight },
  caption: { fontSize: 11, fontWeight: '600', color: COLORS.textLight, letterSpacing: 0.5, textTransform: 'uppercase' },
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
  pill: 999,
  full: 999,
};

export const SHADOWS = {
  none: { shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 },
  small: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 1 },
  medium: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 3 },
  large: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 20, elevation: 6 },
  colored: (color) => ({ shadowColor: color, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 6 }),
};

export const HITSLOP = { top: 12, bottom: 12, left: 12, right: 12 };

export const ANIMATION = {
  fast: 150,
  normal: 250,
  slow: 400,
};

// Job status -> color map. Use this in lists, badges, headers.
export const STATUS_COLORS = {
  new:         { bg: COLORS.primaryLight, fg: COLORS.primary, label: 'New' },
  assigned:    { bg: COLORS.primaryLight, fg: COLORS.primary, label: 'Assigned' },
  accepted:    { bg: COLORS.primaryLight, fg: COLORS.primary, label: 'Accepted' },
  onTheWay:    { bg: COLORS.warningLight, fg: COLORS.warning, label: 'On the Way' },
  arrived:     { bg: COLORS.successLight, fg: COLORS.success, label: 'Arrived' },
  otpPending:  { bg: COLORS.warningLight, fg: COLORS.warning, label: 'OTP Pending' },
  inProgress:  { bg: COLORS.primaryLight, fg: COLORS.primary, label: 'In Progress' },
  proofPending:{ bg: COLORS.warningLight, fg: COLORS.warning, label: 'Proof Pending' },
  completed:   { bg: COLORS.successLight, fg: COLORS.success, label: 'Completed' },
  rejected:    { bg: COLORS.dangerLight,  fg: COLORS.danger,  label: 'Rejected' },
  cancelled:   { bg: COLORS.dangerLight,  fg: COLORS.danger,  label: 'Cancelled' },
};

export function getStatusColor(status) {
  return STATUS_COLORS[status] || STATUS_COLORS.new;
}
