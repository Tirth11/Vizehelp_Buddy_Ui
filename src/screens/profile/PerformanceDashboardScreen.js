import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const METRICS = [
  { label: 'Customer Rating', value: '4.8', icon: 'star', color: COLORS.warning, suffix: '/5' },
  { label: 'Completed Jobs', value: '42', icon: 'checkmark-done', color: COLORS.primary, suffix: '' },
  { label: 'Acceptance Rate', value: '92', icon: 'thumbs-up', color: COLORS.success, suffix: '%' },
  { label: 'Cancellation Rate', value: '3', icon: 'close-circle', color: COLORS.danger, suffix: '%' },
  { label: 'On-time Arrival', value: '96', icon: 'time', color: COLORS.success, suffix: '%' },
  { label: 'Response Time', value: '< 2', icon: 'flash', color: COLORS.primary, suffix: ' min' },
  { label: 'Disputes', value: '0', icon: 'flag', color: COLORS.success, suffix: '' },
  { label: 'Profile Strength', value: '95', icon: 'person', color: COLORS.primary, suffix: '%' },
];

const TIPS = [
  'Maintain a 95%+ acceptance rate to unlock priority jobs',
  'Respond to job offers within 60 seconds for best results',
  'Complete all training modules to boost profile strength',
  'Keep cancellation rate below 5% to avoid restrictions',
];

export default function PerformanceDashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Performance</Text>
      <Text style={styles.subtitle}>Your stats this month</Text>

      <View style={styles.grid}>
        {METRICS.map(m => (
          <View key={m.label} style={[styles.card, SHADOWS.small]}>
            <Ionicons name={m.icon} size={22} color={m.color} />
            <Text style={styles.cardValue}>{m.value}<Text style={styles.cardSuffix}>{m.suffix}</Text></Text>
            <Text style={styles.cardLabel}>{m.label}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.tipsCard, SHADOWS.small]}>
        <Text style={styles.tipsTitle}>Improvement Tips</Text>
        {TIPS.map((t, i) => (
          <View key={i} style={styles.tipRow}>
            <Ionicons name="bulb-outline" size={16} color={COLORS.warning} />
            <Text style={styles.tipText}>{t}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.lg },
  card: { width: '48%', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, alignItems: 'center' },
  cardValue: { ...FONTS.bold, fontSize: 24, marginTop: SPACING.sm },
  cardSuffix: { fontSize: 14, color: COLORS.gray },
  cardLabel: { ...FONTS.small, marginTop: 4, textAlign: 'center' },
  tipsCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: SPACING.md },
  tipsTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  tipRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, marginBottom: SPACING.sm },
  tipText: { ...FONTS.regular, flex: 1 },
});
