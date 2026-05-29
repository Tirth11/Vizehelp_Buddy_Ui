import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_EARNINGS } from '../../data/mockData';

export default function EarningsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Earnings</Text>
      <Text style={styles.subtitle}>Track your income & payouts</Text>


      {/* Main Earnings Card */}
      <View style={[styles.mainCard, SHADOWS.large]}>
        <View style={styles.mainCardHeader}>
          <Text style={styles.mainCardTitle}>Total Balance</Text>
          <View style={styles.mainCardBadge}>
            <Ionicons name="trending-up" size={12} color={COLORS.success} />
            <Text style={styles.mainCardBadgeText}>+12%</Text>
          </View>
        </View>
        <Text style={styles.mainCardValue}>${MOCK_EARNINGS.monthly.toLocaleString()}</Text>
        <Text style={styles.mainCardSub}>This month's earnings</Text>
        <View style={styles.mainCardDivider} />
        <View style={styles.mainCardRow}>
          <View style={styles.mainCardStat}>
            <Text style={styles.miniValue}>${MOCK_EARNINGS.today}</Text>
            <Text style={styles.miniLabel}>Today</Text>
          </View>
          <View style={styles.mainCardStatDivider} />
          <View style={styles.mainCardStat}>
            <Text style={styles.miniValue}>${MOCK_EARNINGS.weekly}</Text>
            <Text style={styles.miniLabel}>This Week</Text>
          </View>
          <View style={styles.mainCardStatDivider} />
          <View style={styles.mainCardStat}>
            <Text style={styles.miniValue}>{MOCK_EARNINGS.completedJobs}</Text>
            <Text style={styles.miniLabel}>Jobs</Text>
          </View>
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={[styles.statCard, SHADOWS.small]}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.successLight }]}>
            <Ionicons name="trending-up" size={18} color={COLORS.success} />
          </View>
          <Text style={styles.statValue}>${MOCK_EARNINGS.incentives}</Text>
          <Text style={styles.statLabel}>Incentives</Text>
        </View>
        <View style={[styles.statCard, SHADOWS.small]}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.dangerLight }]}>
            <Ionicons name="trending-down" size={18} color={COLORS.danger} />
          </View>
          <Text style={styles.statValue}>${MOCK_EARNINGS.deductions}</Text>
          <Text style={styles.statLabel}>Deductions</Text>
        </View>
      </View>


      {/* Payout Summary */}
      <View style={[styles.payoutCard, SHADOWS.small]}>
        <Text style={styles.payoutTitle}>Payout Summary</Text>
        <View style={styles.payoutRow}>
          <View style={styles.payoutLeft}>
            <View style={[styles.payoutDot, { backgroundColor: COLORS.success }]} />
            <Text style={styles.payoutLabel}>Paid Payout</Text>
          </View>
          <Text style={[styles.payoutValue, { color: COLORS.success }]}>${MOCK_EARNINGS.paidPayout.toLocaleString()}</Text>
        </View>
        <View style={styles.payoutRow}>
          <View style={styles.payoutLeft}>
            <View style={[styles.payoutDot, { backgroundColor: COLORS.accent }]} />
            <Text style={styles.payoutLabel}>Pending Payout</Text>
          </View>
          <Text style={[styles.payoutValue, { color: COLORS.accent }]}>${MOCK_EARNINGS.pendingPayout}</Text>
        </View>
      </View>

      {/* Action Links */}
      <View style={styles.actionsSection}>
        <ActionLink icon="analytics-outline" label="Earnings Breakdown" desc="View detailed breakdown" onPress={() => navigation.navigate('EarningsBreakdown')} />
        <ActionLink icon="receipt-outline" label="Payout History" desc="Past transactions" onPress={() => navigation.navigate('PayoutHistory')} />
        <ActionLink icon="gift-outline" label="Incentives & Bonuses" desc="Rewards & penalties" onPress={() => navigation.navigate('Incentives')} />
        <ActionLink icon="flash-outline" label="Instant Payout" desc="Withdraw instantly" onPress={() => navigation.navigate('InstantPayout')} color={COLORS.accent} />
      </View>
    </ScrollView>
  );
}

function ActionLink({ icon, label, desc, onPress, color }) {
  return (
    <TouchableOpacity style={[styles.actionLink, SHADOWS.small]} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.actionLinkIcon, { backgroundColor: (color || COLORS.primary) + '12' }]}>
        <Ionicons name={icon} size={20} color={color || COLORS.primary} />
      </View>
      <View style={styles.actionLinkInfo}>
        <Text style={styles.actionLinkLabel}>{label}</Text>
        <Text style={styles.actionLinkDesc}>{desc}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color={COLORS.textLight} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.h2, marginBottom: 2 },
  subtitle: { ...FONTS.bodySmall, marginBottom: SPACING.lg },
  mainCard: { backgroundColor: COLORS.primary, borderRadius: RADIUS.xl, padding: SPACING.lg, marginBottom: SPACING.lg },
  mainCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.xs },
  mainCardTitle: { color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: '500' },
  mainCardBadge: { flexDirection: 'row', alignItems: 'center', gap: 3, backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: SPACING.sm, paddingVertical: 2, borderRadius: RADIUS.full },
  mainCardBadgeText: { color: COLORS.success, fontSize: 11, fontWeight: '700' },
  mainCardValue: { color: COLORS.white, fontSize: 36, fontWeight: '800', letterSpacing: -1 },
  mainCardSub: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 },
  mainCardDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.12)', marginVertical: SPACING.md },
  mainCardRow: { flexDirection: 'row', justifyContent: 'space-between' },
  mainCardStat: { alignItems: 'center', flex: 1 },
  mainCardStatDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.12)' },
  miniValue: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  miniLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 2 },
  statsGrid: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  statCard: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.lg, alignItems: 'center' },
  statIcon: { width: 36, height: 36, borderRadius: RADIUS.sm, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  statValue: { ...FONTS.bold, fontSize: 18, marginTop: SPACING.xs },
  statLabel: { ...FONTS.caption, marginTop: 2, fontSize: 10 },
  payoutCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.lg },
  payoutTitle: { ...FONTS.h4, fontSize: 14, marginBottom: SPACING.md },
  payoutRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SPACING.sm },
  payoutLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  payoutDot: { width: 8, height: 8, borderRadius: 4 },
  payoutLabel: { ...FONTS.body, fontSize: 14 },
  payoutValue: { ...FONTS.bold, fontSize: 16 },
  actionsSection: { gap: SPACING.sm },
  actionLink: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.lg },
  actionLinkIcon: { width: 40, height: 40, borderRadius: RADIUS.md, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.sm },
  actionLinkInfo: { flex: 1 },
  actionLinkLabel: { ...FONTS.medium, fontSize: 14, fontWeight: '600' },
  actionLinkDesc: { ...FONTS.bodySmall, fontSize: 12, marginTop: 1 },
});
