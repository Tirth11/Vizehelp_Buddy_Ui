import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const RELATIONS = ['Parent', 'Spouse', 'Sibling', 'Friend', 'Other'];

export default function EmergencyContactScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', relationship: '', phone: '', email: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.name && form.relationship && form.phone;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={8}
        total={9}
        onBack={() => navigation.goBack()}
        title="Emergency Contact"
        subtitle="Optional — but helpful for safety on the job."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Field label="Contact Name *" icon="person-outline" value={form.name} onChangeText={v => update('name', v)} placeholder="Full name" />

        <Text style={styles.label}>Relationship *</Text>
        <View style={styles.row}>
          {RELATIONS.map(r => (
            <TouchableOpacity key={r} style={[styles.chip, form.relationship === r && styles.chipActive]} onPress={() => update('relationship', r)} activeOpacity={0.8}>
              <Text style={[styles.chipText, form.relationship === r && styles.chipTextActive]}>{r}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Field label="Phone Number *" icon="call-outline" value={form.phone} onChangeText={v => update('phone', v)} placeholder="+1 (555) 000-0000" keyboardType="phone-pad" />
        <Field label="Email"           icon="mail-outline" value={form.email} onChangeText={v => update('email', v)} placeholder="Optional" keyboardType="email-address" autoCapitalize="none" />

        <View style={styles.info}>
          <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>We'll only contact this person in an emergency.</Text>
        </View>

        <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('SetAvailability')}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('SetAvailability')}
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
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.md },
  chip: { paddingVertical: SPACING.sm + 2, paddingHorizontal: SPACING.md, borderRadius: RADIUS.pill, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.white },
  chipActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14, fontWeight: '600' },
  chipTextActive: { color: COLORS.primary },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, marginVertical: SPACING.sm },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  skipBtn: { alignItems: 'center', marginTop: SPACING.md, padding: SPACING.sm },
  skipText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
