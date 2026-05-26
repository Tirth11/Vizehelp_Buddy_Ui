import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

export default function BankDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ holder: '', bank: '', routing: '', account: '', confirmAccount: '', accountType: 'Checking' });
  const [payoutMethod, setPayoutMethod] = useState('ach');
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const accountsMatch = form.account && form.account === form.confirmAccount;
  const valid = form.holder && form.routing.length === 9 && accountsMatch && form.accountType;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={7}
        total={9}
        onBack={() => navigation.goBack()}
        title="Payout Details"
        subtitle="Add your bank account to receive earnings in USD."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Payout Method</Text>
        <View style={styles.methods}>
          <MethodBtn icon="business-outline" label="Standard ACH" desc="Free • 1–3 days" active={payoutMethod === 'ach'}     onPress={() => setPayoutMethod('ach')} />
          <MethodBtn icon="flash-outline"     label="Instant"      desc="Same day"      active={payoutMethod === 'instant'} onPress={() => setPayoutMethod('instant')} />
        </View>

        <Field label="Account Holder Name *" icon="person-outline"   value={form.holder}         onChangeText={v => update('holder', v)}         placeholder="John Smith" />
        <Field label="Bank Name"             icon="business-outline" value={form.bank}           onChangeText={v => update('bank', v)}           placeholder="Chase, Bank of America, etc." />
        <Field label="Routing Number * (9 digits)" icon="swap-horizontal-outline" value={form.routing} onChangeText={v => update('routing', v)} placeholder="•••••••••" keyboardType="number-pad" maxLength={9} />
        <Field label="Account Number *"      icon="card-outline"     value={form.account}        onChangeText={v => update('account', v)}        placeholder="••••••••••" keyboardType="number-pad" secureTextEntry />
        <Field label="Confirm Account Number *" icon="card-outline"  value={form.confirmAccount} onChangeText={v => update('confirmAccount', v)} placeholder="••••••••••" keyboardType="number-pad" />

        {form.confirmAccount && form.account !== form.confirmAccount && (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle-outline" size={16} color={COLORS.danger} />
            <Text style={styles.errorText}>Account numbers don't match</Text>
          </View>
        )}

        <Text style={styles.label}>Account Type *</Text>
        <View style={styles.typeRow}>
          {['Checking', 'Savings'].map(t => (
            <TouchableOpacity key={t} style={[styles.typeBtn, form.accountType === t && styles.typeActive]} onPress={() => update('accountType', t)}>
              <Text style={[styles.typeText, form.accountType === t && styles.typeTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {payoutMethod === 'instant' && (
          <Field label="Debit Card (for Instant Payout)" icon="card-outline" placeholder="•••• •••• •••• ••••" keyboardType="number-pad" />
        )}

        <View style={styles.info}>
          <Ionicons name="lock-closed-outline" size={18} color={COLORS.success} />
          <Text style={styles.infoText}>Your banking info is encrypted with 256-bit SSL.</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('EmergencyContact')} style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
        <Text style={styles.skipNote}>You can add payout details later, but you cannot accept paid jobs until completed.</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('EmergencyContact')}
        >
          <Text style={styles.btnText}>Save & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

function MethodBtn({ icon, label, desc, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.methodBtn, active && styles.methodActive]} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name={icon} size={22} color={active ? COLORS.primary : COLORS.textLight} />
      <Text style={[styles.methodLabel, active && styles.methodLabelActive]}>{label}</Text>
      <Text style={styles.methodDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

function Field({ label, icon, ...props }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldRow}>
        <Ionicons name={icon} size={18} color={COLORS.textLight} />
        <TextInput style={styles.input} placeholderTextColor={COLORS.textLight} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  methods: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  methodBtn: { flex: 1, padding: SPACING.md, borderRadius: RADIUS.md, backgroundColor: COLORS.background, borderWidth: 1.5, borderColor: COLORS.border, alignItems: 'center' },
  methodActive: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  methodLabel: { ...FONTS.medium, marginTop: SPACING.xs, color: COLORS.textLight },
  methodLabelActive: { color: COLORS.primary },
  methodDesc: { ...FONTS.small, fontSize: 11, marginTop: 2 },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  errorBox: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginTop: -SPACING.sm, marginBottom: SPACING.sm },
  errorText: { ...FONTS.small, color: COLORS.danger, fontWeight: '600' },
  typeRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  typeBtn: { flex: 1, paddingVertical: SPACING.md, borderRadius: RADIUS.md, backgroundColor: COLORS.background, borderWidth: 1.5, borderColor: COLORS.border, alignItems: 'center' },
  typeActive: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  typeText: { ...FONTS.medium, color: COLORS.textLight },
  typeTextActive: { color: COLORS.primary },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.successLight, padding: SPACING.md, borderRadius: RADIUS.md, marginTop: SPACING.md },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  skipBtn: { alignItems: 'center', marginTop: SPACING.lg, padding: SPACING.sm },
  skipText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  skipNote: { ...FONTS.small, textAlign: 'center', fontSize: 12 },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
