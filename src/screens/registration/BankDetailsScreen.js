import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BankDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ holder: '', bank: '', routing: '', account: '', confirmAccount: '', accountType: '' });
  const [payoutMethod, setPayoutMethod] = useState('ach');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 6 of 10</Text>
      <Text style={styles.title}>Payout Details</Text>
      <Text style={styles.subtitle}>Add your bank account to receive earnings in USD</Text>

      <Text style={styles.label}>Payout Method</Text>
      <View style={styles.methods}>
        <TouchableOpacity style={[styles.methodBtn, payoutMethod === 'ach' && styles.methodActive]} onPress={() => setPayoutMethod('ach')}>
          <Ionicons name="business-outline" size={20} color={payoutMethod === 'ach' ? COLORS.primary : COLORS.gray} />
          <Text style={[styles.methodText, payoutMethod === 'ach' && styles.methodTextActive]}>Standard ACH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.methodBtn, payoutMethod === 'instant' && styles.methodActive]} onPress={() => setPayoutMethod('instant')}>
          <Ionicons name="flash-outline" size={20} color={payoutMethod === 'instant' ? COLORS.primary : COLORS.gray} />
          <Text style={[styles.methodText, payoutMethod === 'instant' && styles.methodTextActive]}>Instant Payout</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Account Holder Name *" value={form.holder} onChangeText={v => setForm({ ...form, holder: v })} />
      <TextInput style={styles.input} placeholder="Bank Name" value={form.bank} onChangeText={v => setForm({ ...form, bank: v })} />
      <TextInput style={styles.input} placeholder="Routing Number * (9 digits)" keyboardType="number-pad" maxLength={9} value={form.routing} onChangeText={v => setForm({ ...form, routing: v })} />
      <TextInput style={styles.input} placeholder="Account Number *" keyboardType="number-pad" value={form.account} onChangeText={v => setForm({ ...form, account: v })} />
      <TextInput style={styles.input} placeholder="Confirm Account Number *" keyboardType="number-pad" value={form.confirmAccount} onChangeText={v => setForm({ ...form, confirmAccount: v })} />

      <Text style={styles.label}>Account Type *</Text>
      <View style={styles.typeRow}>
        {['Checking', 'Savings'].map(t => (
          <TouchableOpacity key={t} style={[styles.typeBtn, form.accountType === t && styles.typeActive]} onPress={() => setForm({ ...form, accountType: t })}>
            <Text style={[styles.typeText, form.accountType === t && styles.typeTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {payoutMethod === 'instant' && (
        <TextInput style={styles.input} placeholder="Debit Card Number (for instant payout)" keyboardType="number-pad" />
      )}

      <View style={styles.info}>
        <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.secondary} />
        <Text style={styles.infoText}>Your banking info is encrypted with 256-bit SSL. Routing numbers identify your U.S. financial institution for ACH transfers.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EmergencyContact')}>
        <Text style={styles.btnText}>Save & Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('EmergencyContact')}>
        <Text style={styles.skipText}>Skip for Now</Text>
      </TouchableOpacity>
      <Text style={styles.skipNote}>You can add payout details later, but cannot go online or receive paid jobs until completed.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  methods: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  methodBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray },
  methodActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  methodText: { ...FONTS.medium, color: COLORS.gray },
  methodTextActive: { color: COLORS.primary },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  typeRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  typeBtn: { flex: 1, padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray, alignItems: 'center' },
  typeActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  typeText: { ...FONTS.medium, color: COLORS.darkGray },
  typeTextActive: { color: COLORS.primary },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: '#E8FFF5', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  skipBtn: { alignItems: 'center', marginTop: SPACING.md },
  skipText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  skipNote: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.xs },
});
