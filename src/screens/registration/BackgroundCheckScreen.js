import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const CHECKS = [
  'Criminal record check',
  'Sex offender registry',
  'Motor vehicle records (if applicable)',
  'Identity verification',
];

export default function BackgroundCheckScreen({ navigation }) {
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', address: '', ssn4: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = consent && form.firstName && form.lastName && form.dob;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={5}
        total={9}
        onBack={() => navigation.goBack()}
        title="Background Check"
        subtitle="Required by your enterprise. Takes 3–5 business days."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What we check</Text>
          {CHECKS.map(c => (
            <View key={c} style={styles.checkItem}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.success} />
              <Text style={styles.checkText}>{c}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.label}>Verification Details</Text>
        <Field label="Legal First Name *" icon="person-outline" value={form.firstName} onChangeText={v => update('firstName', v)} placeholder="John" />
        <Field label="Legal Last Name *"  icon="person-outline" value={form.lastName}  onChangeText={v => update('lastName', v)}  placeholder="Smith" />
        <Field label="Date of Birth *"    icon="calendar-outline" value={form.dob}     onChangeText={v => update('dob', v)}       placeholder="MM/DD/YYYY" />
        <Field label="Current Address"    icon="home-outline"   value={form.address}   onChangeText={v => update('address', v)}   placeholder="123 Main St, Dallas, TX" />
        <Field label="Last 4 of SSN"      icon="shield-outline" value={form.ssn4}      onChangeText={v => update('ssn4', v)}      placeholder="••••" maxLength={4} keyboardType="number-pad" secureTextEntry />

        <TouchableOpacity style={styles.consentRow} onPress={() => setConsent(!consent)} activeOpacity={0.7}>
          <View style={[styles.checkbox, consent && styles.checkboxOn]}>
            {consent && <Ionicons name="checkmark" size={16} color={COLORS.white} />}
          </View>
          <Text style={styles.consentText}>I authorize the required background verification as part of Buddy onboarding (FCRA-compliant).</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <Ionicons name="time-outline" size={18} color={COLORS.warning} />
          <Text style={styles.infoText}>Background checks typically complete in 3–5 business days.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('TaxInformation')}
        >
          <Text style={styles.btnText}>Authorize & Continue</Text>
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
  card: { backgroundColor: COLORS.background, borderRadius: RADIUS.md, padding: SPACING.md, marginBottom: SPACING.lg, borderWidth: 1, borderColor: COLORS.border },
  cardTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: 6 },
  checkText: { ...FONTS.regular, color: COLORS.text },
  label: { ...FONTS.medium, fontSize: 15, marginBottom: SPACING.sm },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border, marginVertical: SPACING.md },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  checkboxOn: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  consentText: { ...FONTS.regular, flex: 1, lineHeight: 20 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.warningLight, padding: SPACING.md, borderRadius: RADIUS.md },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
