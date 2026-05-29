import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS } from '../constants/theme';

/**
 * StepProgress — top header for onboarding/registration screens.
 * Shows back button, "Step X of N" label, and a slim progress bar.
 *
 * Props:
 *  - step: current step (1-based)
 *  - total: total steps
 *  - onBack: optional back handler
 *  - title: screen title
 *  - subtitle: optional subtitle
 */
export default function StepProgress({ step, total, onBack, title, subtitle }) {
  const pct = Math.max(0, Math.min(1, step / total));

  return (
    <View style={styles.wrap}>
      <View style={styles.topRow}>
        {onBack ? (
          <TouchableOpacity style={styles.backBtn} onPress={onBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Ionicons name="arrow-back" size={22} color={COLORS.text} />
          </TouchableOpacity>
        ) : (
          <View style={styles.backBtn} />
        )}
        <Text style={styles.stepLabel}>Step {step} of {total}</Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${pct * 100}%` }]} />
      </View>

      {!!title && <Text style={styles.title}>{title}</Text>}
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: Platform.OS === 'ios' ? SPACING.xl : SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: COLORS.white,
  },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SPACING.sm },
  backBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  stepLabel: { ...FONTS.caption, color: COLORS.primary, fontWeight: '700' },
  barTrack: { height: 6, backgroundColor: COLORS.lightGray, borderRadius: RADIUS.pill, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: RADIUS.pill },
  title: { ...FONTS.title, fontSize: 24, marginTop: SPACING.lg },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, marginTop: SPACING.xs, lineHeight: 21 },
});
