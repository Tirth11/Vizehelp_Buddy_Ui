import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_EARNINGS } from '../../data/mockData';

export default function EarningsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Earnings</Text>

      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <EarnBox label="Today" value={`$${MOCK_EARNINGS.today}`} />
          <EarnBox label="This Week" value={`$${MOCK_EARNINGS.weekly}`} />
          <EarnBox label="This Month" value={`$${MOCK_EARNINGS.monthly.toLocaleString()}`} />
        </View>
      </View>

      <View style={styles.statsGrid}>
        <StatCard icon="checkmark-done" label="Jobs Completed" value={MOCK_EARNINGS.completedJobs.toString()} color={COLORS.primary} />
        <StatCard icon="trending-up" label="Incentives" value={`$${MOCK_EARNINGS.incentives}`} color={COLORS.success} />
        <StatCard icon="trending-down" label="Deductions" value={`$${MOCK_EARNINGS.deductions}`} color={COLORS.danger} />
        <StatCard icon="time" label="Pending Payout" value={`$${MOCK_EARNINGS.pendingPayout}`} color={COLORS.warning} />
      </View>

      <View style={styles.payoutSummary}>
        <View style={styles.payoutRow}>
          <Text style={styles.payoutLabel}>Paid Payout</Text>
          <Text style={styles.payoutValue}>${MOCK_EARNINGS.paidPayout.toLocaleString()}</Text>
        </View>
        <View style={styles.payoutRow}>
          <Text style={styles.payoutLabel}>Pending Payout</Text>
          <Text style={[styles.payoutValue, { color: COLORS.warning }]}>${MOCK_EARNINGS.pendingPayout}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('EarningsBreakdown')}>
        <Text style={styles.linkText}>View Earnings Breakdown</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('PayoutHistory')}>
        <Text style={styles.linkText}>Payout History</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkBtn} onPress={() => navigation.navigate('Incentives')}>
        <Text style={styles.linkText}>Incentives & Penalties</Text>
        <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
      </TouchableOpacity>
    </ScrollView>
  );
}

function EarnBox({ label, value }) {
  return (
    <View style={styles.earnBox}>
      <Text style={styles.earnValue}>{value}</Text>
      <Text style={styles.earnLabel}>{label}</Text>
    </View>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <View style={[styles.statCard, SHADOWS.small]}>
      <Ionicons name={icon} size={20} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  summaryCard: { backgroundColor: COLORS.primary, borderRadius: 18, padding: SPACING.lg, marginBottom: SPACING.lg },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between' },
  earnBox: { alignItems: 'center' },
  earnValue: { color: COLORS.white, fontSize: 22, fontWeight: '800' },
  earnLabel: { color: COLORS.white, fontSize: 12, opacity: 0.8, marginTop: 4 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.lg },
  statCard: { width: '48%', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, alignItems: 'center' },
  statValue: { ...FONTS.bold, fontSize: 18, marginTop: SPACING.xs },
  statLabel: { ...FONTS.small, marginTop: 2, textAlign: 'center' },
  payoutSummary: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.lg, ...SHADOWS.small },
  payoutRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm },
  payoutLabel: { ...FONTS.regular },
  payoutValue: { ...FONTS.bold, color: COLORS.success },
  linkBtn: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, ...SHADOWS.small },
  linkText: { ...FONTS.medium, color: COLORS.primary },
});
