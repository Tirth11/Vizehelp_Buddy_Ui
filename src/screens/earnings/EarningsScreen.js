import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_EARNINGS } from '../../data/mockData';

// Job-wise mock earnings data
const JOB_EARNINGS = [
  { id: 'JOB-1003', service: 'Home Cleaning', date: '06/05/2026', completed: '06/05/2026', base: 70, tip: 10, bonus: 5, deduction: 0, total: 85, status: 'Paid' },
  { id: 'JOB-1002', service: 'Parking Assistance', date: '06/06/2026', completed: '06/06/2026', base: 30, tip: 5, bonus: 0, deduction: 0, total: 35, status: 'Paid' },
  { id: 'JOB-1001', service: 'EV Charging Support', date: '06/07/2026', completed: '06/07/2026', base: 35, tip: 10, bonus: 0, deduction: 0, total: 45, status: 'Pending' }
];

export default function EarningsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Earnings Dashboard</Text>

      {/* Main Stats Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryGrid}>
          <EarnBox label="Today" value={`$${MOCK_EARNINGS.today}`} />
          <EarnBox label="This Week" value={`$${MOCK_EARNINGS.weekly}`} />
          <EarnBox label="This Month" value={`$${MOCK_EARNINGS.monthly}`} />
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryGrid}>
          <EarnBox label="Total Earned" value="$3,530" />
          <EarnBox label="Pending Payout" value={`$${MOCK_EARNINGS.pendingPayout}`} />
          <EarnBox label="Paid Payout" value={`$${MOCK_EARNINGS.paidPayout}`} />
        </View>
      </View>

      {/* Additional Stats Row */}
      <Text style={styles.sectionTitle}>Breakdown Categories</Text>
      <View style={styles.statsRow}>
        <StatCard icon="happy-outline" label="Tips Received" value="$125" color={COLORS.success} />
        <StatCard icon="gift-outline" label="Bonuses" value={`$${MOCK_EARNINGS.incentives}`} color={COLORS.primary} />
        <StatCard icon="trending-down-outline" label="Deductions" value={`$${MOCK_EARNINGS.deductions}`} color={COLORS.danger} />
      </View>

      {/* Payout Security Notice */}
      <View style={styles.noticeBox}>
        <Ionicons name="shield-checkmark-outline" size={16} color={COLORS.secondary} />
        <Text style={styles.noticeText}>
          Payouts represent your direct Buddy earnings. Enterprise margins and platform service fees are hidden for billing privacy.
        </Text>
      </View>

      {/* Job-wise Earnings Table */}
      <Text style={styles.sectionTitle}>Job-wise Earnings</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tableScroll}>
        <View style={styles.table}>
          {/* Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.th, { width: 90 }]}>Booking ID</Text>
            <Text style={[styles.th, { width: 120 }]}>Service</Text>
            <Text style={[styles.th, { width: 80 }]}>Job Date</Text>
            <Text style={[styles.th, { width: 80 }]}>Completed</Text>
            <Text style={[styles.th, { width: 60, textAlign: 'right' }]}>Base</Text>
            <Text style={[styles.th, { width: 50, textAlign: 'right' }]}>Tip</Text>
            <Text style={[styles.th, { width: 55, textAlign: 'right' }]}>Bonus</Text>
            <Text style={[styles.th, { width: 55, textAlign: 'right' }]}>Ded.</Text>
            <Text style={[styles.th, { width: 65, textAlign: 'right' }]}>Total</Text>
            <Text style={[styles.th, { width: 80, textAlign: 'center' }]}>Status</Text>
          </View>

          {/* Rows */}
          {JOB_EARNINGS.map(job => (
            <View key={job.id} style={styles.tableRow}>
              <Text style={[styles.td, { width: 90, fontWeight: '700', color: COLORS.primary }]}>{job.id}</Text>
              <Text style={[styles.td, { width: 120, fontWeight: '600' }]}>{job.service}</Text>
              <Text style={[styles.td, { width: 80 }]}>{job.date}</Text>
              <Text style={[styles.td, { width: 80 }]}>{job.completed}</Text>
              <Text style={[styles.td, { width: 60, textAlign: 'right' }]}>${job.base}</Text>
              <Text style={[styles.td, { width: 50, textAlign: 'right', color: COLORS.success }]}>${job.tip}</Text>
              <Text style={[styles.td, { width: 55, textAlign: 'right', color: COLORS.primary }]}>${job.bonus}</Text>
              <Text style={[styles.td, { width: 55, textAlign: 'right', color: COLORS.danger }]}>${job.deduction}</Text>
              <Text style={[styles.td, { width: 65, textAlign: 'right', fontWeight: '700', color: COLORS.text }]}>${job.total}</Text>
              <View style={[styles.td, { width: 80, alignItems: 'center' }]}>
                <View style={[
                  styles.statusBadge, 
                  job.status === 'Paid' ? styles.statusSuccess : styles.statusWarning
                ]}>
                  <Text style={[
                    styles.statusBadgeText,
                    job.status === 'Paid' ? { color: COLORS.success } : { color: COLORS.warning }
                  ]}>
                    {job.status}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ height: 40 }} />
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
  summaryCard: { backgroundColor: COLORS.primary, borderRadius: 18, padding: SPACING.md, marginBottom: SPACING.lg, ...SHADOWS.medium },
  summaryGrid: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 4 },
  earnBox: { flex: 1, alignItems: 'center' },
  earnValue: { color: COLORS.white, fontSize: 20, fontWeight: '800' },
  earnLabel: { color: COLORS.white, fontSize: 11, opacity: 0.8, marginTop: 4 },
  sectionTitle: { ...FONTS.subtitle, marginTop: SPACING.md, marginBottom: SPACING.sm },
  statsRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  statCard: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, alignItems: 'center' },
  statValue: { ...FONTS.bold, fontSize: 16, marginTop: SPACING.xs },
  statLabel: { fontSize: 11, color: COLORS.textLight, marginTop: 2, textAlign: 'center' },
  noticeBox: { flexDirection: 'row', gap: 8, backgroundColor: '#E8FFF5', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  noticeText: { fontSize: 11, color: COLORS.darkGray, flex: 1, lineHeight: 16 },
  tableScroll: { marginBottom: SPACING.lg },
  table: { backgroundColor: COLORS.white, borderRadius: 14, overflow: 'hidden', padding: SPACING.sm, ...SHADOWS.small },
  tableHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingVertical: SPACING.sm, backgroundColor: COLORS.lightGray, borderRadius: 8, paddingHorizontal: SPACING.sm },
  th: { fontSize: 11, fontWeight: '700', color: COLORS.darkGray },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingVertical: SPACING.md, alignItems: 'center', paddingHorizontal: SPACING.sm },
  td: { fontSize: 12, color: COLORS.text },
  statusBadge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  statusSuccess: { backgroundColor: '#E8F8F0' },
  statusWarning: { backgroundColor: '#FFF9E6' },
  statusBadgeText: { fontSize: 10, fontWeight: '700' },
});
