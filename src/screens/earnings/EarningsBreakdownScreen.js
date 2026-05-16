import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';

const breakdownData = [
  { id: 'JOB-1003', base: 70, incentive: 10, bonus: 5, deduction: 0, net: 85, status: 'Paid' },
  { id: 'JOB-1005', base: 40, incentive: 0, bonus: 0, deduction: 0, net: 40, status: 'Pending' },
  { id: 'JOB-1006', base: 35, incentive: 5, bonus: 0, deduction: 5, net: 35, status: 'Paid' },
];

export default function EarningsBreakdownScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Earnings Breakdown</Text>
      <Text style={styles.subtitle}>Job-wise earning details</Text>

      {breakdownData.map(item => (
        <View key={item.id} style={[styles.card, SHADOWS.small]}>
          <View style={styles.cardHeader}>
            <Text style={styles.jobId}>{item.id}</Text>
            <Text style={[styles.status, item.status === 'Paid' ? styles.paid : styles.pending]}>{item.status}</Text>
          </View>
          <Row label="Base Earning" value={`$${item.base}`} />
          <Row label="Incentive" value={`$${item.incentive}`} color={COLORS.success} />
          <Row label="Bonus" value={`$${item.bonus}`} color={COLORS.success} />
          <Row label="Deduction" value={`-$${item.deduction}`} color={COLORS.danger} />
          <View style={styles.netRow}>
            <Text style={styles.netLabel}>Net Earning</Text>
            <Text style={styles.netValue}>${item.net}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function Row({ label, value, color }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, color && { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.md },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.sm },
  jobId: { ...FONTS.medium },
  status: { fontSize: 12, fontWeight: '600', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 10, overflow: 'hidden' },
  paid: { backgroundColor: '#E8F5E9', color: COLORS.success },
  pending: { backgroundColor: '#FFF8E1', color: COLORS.warning },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.xs },
  rowLabel: { ...FONTS.regular, color: COLORS.gray },
  rowValue: { ...FONTS.regular },
  netRow: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: SPACING.sm, borderTopWidth: 1, borderTopColor: COLORS.lightGray, marginTop: SPACING.sm },
  netLabel: { ...FONTS.medium },
  netValue: { ...FONTS.bold, color: COLORS.success },
});
