import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function AddPayoutScreen({ navigation }) {
  const [method, setMethod] = useState('bank');
  const [routing, setRouting] = useState('');
  const [account, setAccount] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.step}>Step 10 of 11</Text>
        <Text style={styles.title}>Add Payout Details</Text>
        <Text style={styles.subtitle}>How would you like to get paid?</Text>

        <View style={styles.methods}>
          <TouchableOpacity style={[styles.methodBtn, method === 'bank' && styles.methodActive]} onPress={() => setMethod('bank')}>
            <Ionicons name="business-outline" size={20} color={method === 'bank' ? COLORS.primary : COLORS.gray} />
            <Text style={[styles.methodText, method === 'bank' && styles.methodTextActive]}>Bank Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.methodBtn, method === 'debit' && styles.methodActive]} onPress={() => setMethod('debit')}>
            <Ionicons name="card-outline" size={20} color={method === 'debit' ? COLORS.primary : COLORS.gray} />
            <Text style={[styles.methodText, method === 'debit' && styles.methodTextActive]}>Debit Card</Text>
          </TouchableOpacity>
        </View>

        {method === 'bank' && (
          <View style={styles.form}>
            <Input label="Routing Number" value={routing} onChangeText={setRouting} placeholder="9 digits" keyboardType="number-pad" icon="grid-outline" />
            <Input label="Account Number" value={account} onChangeText={setAccount} placeholder="Account number" keyboardType="number-pad" icon="lock-closed-outline" />
            <Input label="Confirm Account Number" value={confirm} onChangeText={setConfirm} placeholder="Re-enter account number" keyboardType="number-pad" icon="lock-closed-outline" />
          </View>
        )}

        <View style={styles.info}>
          <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.secondary} />
          <Text style={styles.infoText}>Your banking info is encrypted with 256-bit SSL. We'll deposit a small amount to verify your account.</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SubmitApproval')}>
          <Text style={styles.btnText}>Save & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <View style={styles.inputWrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <Ionicons name={icon} size={18} color={COLORS.gray} />
        <TextInput style={styles.input} placeholderTextColor={COLORS.textLight} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  methods: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  methodBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray },
  methodActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  methodText: { ...FONTS.medium, color: COLORS.gray },
  methodTextActive: { color: COLORS.primary },
  form: { gap: SPACING.sm, marginBottom: SPACING.lg },
  inputWrap: { marginBottom: SPACING.sm },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.xs },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: 12, paddingHorizontal: SPACING.md, gap: SPACING.sm },
  input: { flex: 1, paddingVertical: 14, fontSize: 16, color: COLORS.text },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: '#E8FFF5', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
