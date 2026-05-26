// VizehelpBuddy — Worker-friendly theme.
// Clean blue + green work palette: simple, readable, fast to scan.
// Use blue for primary actions, green for accept/complete/online,
// orange for pending/waiting, red only for reject/cancel/error.

export const APP_NAME = 'VizehelpBuddy';
export const APP_TAGLINE = 'Work. Earn. Grow.';

export const COLORS = {
  // Brand & actions
  primary: '#2563EB',          // Blue — main buttons, links
  primaryDark: '#1D4ED8',
  primaryLight: '#DBEAFE',     // soft tint for highlights/cards

  // Status colors
  success: '#16A34A',          // Green — accept, completed, online
  successLight: '#DCFCE7',
  warning: '#F97316',          // Orange — pending, waiting, on-the-way
  warningLight: '#FFEDD5',
  danger: '#DC2626',           // Red — reject, cancel, error, offline
  dangerLight: '#FEE2E2',
  info: '#0EA5E9',             // Sky — informational
  infoLight: '#E0F2FE',

  // Online/Offline aliases (kept for back-compat)
  online: '#16A34A',
  offline: '#DC2626',

  // Legacy aliases used by existing screens — mapped to new palette.
  secondary: '#16A34A',        // was teal; now success-green
  accent: '#F97316',           // was coral; now warning-orange

  // Surfaces
  background: '#F8FAFC',       // light gray app background
  card: '#FFFFFF',
  white: '#FFFFFF',
  black: '#111827',

  // Text
  text: '#111827',             // dark navy — primary text
  textLight: '#6B7280',        // secondary text
  darkGray: '#374151',
  gray: '#6B7280',
  lightGray: '#F1F5F9',        // input/chip background
  border: '#E5E7EB',

  // Gradients (kept for back-compat)
  gradient1: '#2563EB',
  gradient2: '#16A34A',
};

export const FONTS = {
  regular:  { fontSize: 15, color: COLORS.text },
  medium:   { fontSize: 16, fontWeight: '600', color: COLORS.text },
  bold:     { fontSize: 16, fontWeight: '700', color: COLORS.text },
  title:    { fontSize: 26, fontWeight: '800', color: COLORS.text, letterSpacing: -0.3 },
  subtitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  small:    { fontSize: 13, color: COLORS.textLight },
  caption:  { fontSize: 11, color: COLORS.textLight, letterSpacing: 0.5, textTransform: 'uppercase' },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};

export const SHADOWS = {
  small:  { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4,  elevation: 1 },
  medium: { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 3 },
  large:  { shadowColor: '#0F172A', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 20, elevation: 6 },
};

// Job status -> color map. Use this in lists, badges, headers.
export const STATUS_COLORS = {
  new:        { bg: COLORS.primaryLight, fg: COLORS.primary,   label: 'New' },
  assigned:   { bg: COLORS.primaryLight, fg: COLORS.primary,   label: 'Assigned' },
  accepted:   { bg: COLORS.primaryLight, fg: COLORS.primary,   label: 'Accepted' },
  onTheWay:   { bg: COLORS.warningLight, fg: COLORS.warning,   label: 'On the Way' },
  arrived:    { bg: COLORS.successLight, fg: COLORS.success,   label: 'Arrived' },
  otpPending: { bg: COLORS.warningLight, fg: COLORS.warning,   label: 'OTP Pending' },
  inProgress: { bg: COLORS.primaryLight, fg: COLORS.primary,   label: 'In Progress' },
  proofPending:{ bg: COLORS.warningLight, fg: COLORS.warning,  label: 'Proof Pending' },
  completed:  { bg: COLORS.successLight, fg: COLORS.success,   label: 'Completed' },
  rejected:   { bg: COLORS.dangerLight,  fg: COLORS.danger,    label: 'Rejected' },
  cancelled:  { bg: COLORS.dangerLight,  fg: COLORS.danger,    label: 'Cancelled' },
};

export function getStatusColor(status) {
  return STATUS_COLORS[status] || STATUS_COLORS.new;
}
