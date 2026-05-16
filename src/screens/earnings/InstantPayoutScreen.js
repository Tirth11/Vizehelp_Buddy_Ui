import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function InstantPayoutScreen({ navigation }) {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <View style={styles.container}>
        <View style={styles.successIcon}>
          <Ionicons name="checkmark-circle" size={64} color={COLORS.success} />
        </View>
        <Text style={styles.title}>Payout Processing</Text>
        <Text style={styles.desc}>$72.50 is being transferred to your debit card ending in ****7823. Estimated arrival: within minutes.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back to Earnings</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.title}>Instant Payout</Text>
      <Text style={styles.subtitle}>Get your earnings faster</Text>

      <View style={[styles.card, SHADOWS.small]}>
        <Text style={styles.label}>Available for Payout</Text>
        <Text style={styles.amount}>$72.50</Text>

        <View style={styles.row}>
          <Ionicons name="card-outline" size={18} color={COLORS.gray} />
          <Text style={styles.rowText}>Transfer to debit card ****7823</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="cash-outline" size={18} color={COLORS.gray} />
          <Text style={styles.rowText}>Fee: $0.99</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="flash-outline" size={18} color={COLORS.gray} />
          <Text style={styles.rowText}>Estimated arrival: Within minutes</Text>
        </View>
      </View>

      <View style={styles.netCard}>
        <Text style={styles.netLabel}>You'll receive</Text>
        <Text style={styles.netAmount}>$71.51</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => setConfirmed(true)}>
        <Ionicons name="flash" size={20} color={COLORS.white} />
        <Text style={styles.btnText}>Confirm Instant Payout</Text>
      </TouchableOpacity>

      <Text style={styles.note}>Standard payouts (free) are processed every Tuesday and Friday.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  card: { backgroundColor: COLORS.lightGray, borderRadius: 16, padding: SPACING.lg, marginBottom: SPACING.lg },
  label: { ...FONTS.caption, marginBottom: SPACING.xs },
  amount: { ...FONTS.title, fontSize: 36, color: COLORS.success, marginBottom: SPACING.lg },
  row: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm },
  rowText: { ...FONTS.regular },
  netCard: { backgroundColor: COLORS.primaryLight, borderRadius: 14, padding: SPACING.md, alignItems: 'center', marginBottom: SPACING.xl },
  netLabel: { ...FONTS.small, marginBottom: 4 },
  netAmount: { ...FONTS.title, color: COLORS.primary },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  note: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.lg },
  successIcon: { alignItems: 'center', marginBottom: SPACING.lg, marginTop: SPACING.xxl },
  desc: { ...FONTS.regular, textAlign: 'center', color: COLORS.gray, marginBottom: SPACING.xl, paddingHorizontal: SPACING.md },
});
