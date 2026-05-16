import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const incentives = [
  { id: 1, name: 'Peak Hour Bonus', condition: 'Complete 3 jobs between 7-9 AM', earned: 20, date: '2026-05-15' },
  { id: 2, name: 'Weekly Target', condition: 'Complete 20 jobs in a week', earned: 75, date: '2026-05-12' },
];

const penalties = [
  { id: 1, reason: 'Late cancellation', deducted: 10, date: '2026-05-10' },
  { id: 2, reason: 'No-show at job location', deducted: 15, date: '2026-05-08' },
];

export default function IncentivesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Incentives & Penalties</Text>

      <Text style={styles.sectionTitle}>Incentives Earned</Text>
      {incentives.map(i => (
        <View key={i.id} style={[styles.card, SHADOWS.small]}>
          <View style={styles.cardHeader}>
            <Ionicons name="trophy-outline" size={20} color={COLORS.success} />
            <Text style={styles.cardName}>{i.name}</Text>
            <Text style={styles.earned}>+${i.earned}</Text>
          </View>
          <Text style={styles.condition}>{i.condition}</Text>
          <Text style={styles.date}>{i.date}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Penalties</Text>
      {penalties.map(p => (
        <View key={p.id} style={[styles.penaltyCard, SHADOWS.small]}>
          <View style={styles.cardHeader}>
            <Ionicons name="warning-outline" size={20} color={COLORS.danger} />
            <Text style={styles.cardName}>{p.reason}</Text>
            <Text style={styles.deducted}>-${p.deducted}</Text>
          </View>
          <Text style={styles.date}>{p.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.subtitle, marginBottom: SPACING.md, marginTop: SPACING.md },
  card: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, borderLeftWidth: 4, borderLeftColor: COLORS.success },
  penaltyCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, borderLeftWidth: 4, borderLeftColor: COLORS.danger },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  cardName: { flex: 1, ...FONTS.medium },
  earned: { ...FONTS.bold, color: COLORS.success },
  deducted: { ...FONTS.bold, color: COLORS.danger },
  condition: { ...FONTS.small, marginTop: SPACING.xs, marginLeft: 28 },
  date: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.xs, marginLeft: 28 },
});
