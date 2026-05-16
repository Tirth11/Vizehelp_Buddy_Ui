import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_PAYOUTS } from '../../data/mockData';

export default function PayoutHistoryScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Payout History</Text>
      <Text style={styles.subtitle}>Your payout transactions</Text>

      {MOCK_PAYOUTS.map(p => (
        <View key={p.id} style={[styles.card, SHADOWS.small]}>
          <View style={styles.cardHeader}>
            <Text style={styles.date}>{p.date}</Text>
            <Text style={[styles.status, p.status === 'Paid' ? styles.paid : styles.pending]}>{p.status}</Text>
          </View>
          <Text style={styles.amount}>${p.amount}</Text>
          <View style={styles.detailRow}>
            <Ionicons name="card-outline" size={14} color={COLORS.gray} />
            <Text style={styles.detailText}>Bank ****7823</Text>
          </View>
          <Text style={styles.ref}>Ref: {p.ref}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.md },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.sm },
  date: { ...FONTS.regular, color: COLORS.gray },
  status: { fontSize: 12, fontWeight: '600', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 10, overflow: 'hidden' },
  paid: { backgroundColor: '#E8F5E9', color: COLORS.success },
  pending: { backgroundColor: '#FFF8E1', color: COLORS.warning },
  amount: { ...FONTS.bold, fontSize: 24, color: COLORS.success, marginBottom: SPACING.sm },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  detailText: { ...FONTS.small },
  ref: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.xs },
});
