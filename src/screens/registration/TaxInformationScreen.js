import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const TAX_CLASSES = [
  { key: 'individual', label: 'Individual / Sole Proprietor' },
  { key: 'llc',         label: 'LLC' },
  { key: 'corporation', label: 'Corporation' },
  { key: 'other',       label: 'Other' },
];

export default function TaxInformationScreen({ navigation }) {
  const [form, setForm] = useState({ taxClass: 'individual', legalName: '', businessName: '', tin: '', taxAddress: '' });
  const [w9Cert, setW9Cert] = useState(false);
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = w9Cert && form.taxClass && form.legalName && form.tin;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={6}
        total={9}
        onBack={() => navigation.goBack()}
        title="Tax Information"
        subtitle="Required for payouts and yearly 1099-NEC reporting."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Tax Classification *</Text>
        <View style={styles.classList}>
          {TAX_CLASSES.map(tc => {
            const active = form.taxClass === tc.key;
            return (
              <TouchableOpacity key={tc.key} style={[styles.classBtn, active && styles.classActive]} onPress={() => update('taxClass', tc.key)} activeOpacity={0.8}>
                <View style={[styles.radio, active && styles.radioActive]}>
                  {active && <View style={styles.radioDot} />}
                </View>
                <Text style={[styles.classText, active && styles.classTextActive]}>{tc.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Field label="Legal Name *"          icon="person-outline"   value={form.legalName}    onChangeText={v => update('legalName', v)}    placeholder="As shown on Social Security card" />
        <Field label="Business Name"         icon="business-outline" value={form.businessName} onChangeText={v => update('businessName', v)} placeholder="Optional" />
        <Field label="SSN / EIN / TIN *"     icon="shield-outline"   value={form.tin}          onChangeText={v => update('tin', v)}          placeholder="•••-••-••••" keyboardType="number-pad" secureTextEntry />
        <Field label="Tax Address"           icon="home-outline"     value={form.taxAddress}   onChangeText={v => update('taxAddress', v)}   placeholder="Same as residential" />

        <TouchableOpacity style={styles.consentRow} onPress={() => setW9Cert(!w9Cert)} activeOpacity={0.7}>
          <View style={[styles.checkbox, w9Cert && styles.checkboxOn]}>
            {w9Cert && <Ionicons name="checkmark" size={16} color={COLORS.white} />}
          </View>
          <Text style={styles.consentText}>I certify that the information above is correct (W-9 Certification).</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>Form W-9 is used to report your earnings to the IRS.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('BankDetails')}
        >
          <Text style={styles.btnText}>Save & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm },
  classList: { gap: SPACING.sm, marginBottom: SPACING.lg },
  classBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1.5, borderColor: COLORS.border },
  classActive: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  radioActive: { borderColor: COLORS.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.primary },
  classText: { ...FONTS.medium, color: COLORS.text },
  classTextActive: { color: COLORS.primary },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border, marginVertical: SPACING.md },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  checkboxOn: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  consentText: { ...FONTS.regular, flex: 1, lineHeight: 20 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
