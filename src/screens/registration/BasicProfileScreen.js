import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

export default function BasicProfileScreen({ navigation }) {
  const [form, setForm] = useState({
    firstName: '', middleName: '', lastName: '', email: '', phone: '', dob: '', language: 'English',
  });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.firstName && form.lastName && form.email && form.phone;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={2}
        total={9}
        onBack={() => navigation.goBack()}
        title="Basic Profile"
        subtitle="Tell us a little about yourself."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.photoBtn}>
          <View style={styles.photoCircle}>
            <Ionicons name="camera" size={28} color={COLORS.primary} />
          </View>
          <Text style={styles.photoText}>Add Profile Photo</Text>
        </TouchableOpacity>

        <Field label="First Name *" icon="person-outline" value={form.firstName} onChangeText={v => update('firstName', v)} placeholder="John" />
        <Field label="Middle Name" icon="person-outline" value={form.middleName} onChangeText={v => update('middleName', v)} placeholder="Optional" />
        <Field label="Last Name *" icon="person-outline" value={form.lastName} onChangeText={v => update('lastName', v)} placeholder="Smith" />
        <Field label="Email Address *" icon="mail-outline" value={form.email} onChangeText={v => update('email', v)} placeholder="john@example.com" keyboardType="email-address" autoCapitalize="none" />
        <Field label="Phone Number *" icon="call-outline" value={form.phone} onChangeText={v => update('phone', v)} placeholder="+1 (555) 000-0000" keyboardType="phone-pad" />
        <Field label="Date of Birth" icon="calendar-outline" value={form.dob} onChangeText={v => update('dob', v)} placeholder="MM/DD/YYYY" />

        <Text style={styles.sectionLabel}>Preferred Language</Text>
        <View style={styles.row}>
          {['English', 'Spanish', 'French'].map(l => (
            <TouchableOpacity key={l} style={[styles.chip, form.language === l && styles.chipActive]} onPress={() => update('language', l)}>
              <Text style={[styles.chipText, form.language === l && styles.chipTextActive]}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('AddressDetails')}
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
  photoBtn: { alignItems: 'center', marginBottom: SPACING.lg },
  photoCircle: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: COLORS.primary, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primaryLight },
  photoText: { fontSize: 13, color: COLORS.primary, fontWeight: '600', marginTop: SPACING.xs },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  sectionLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginTop: SPACING.sm, marginBottom: SPACING.sm },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  chip: { paddingVertical: SPACING.sm + 2, paddingHorizontal: SPACING.md, borderRadius: RADIUS.pill, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.white },
  chipActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14, fontWeight: '600' },
  chipTextActive: { color: COLORS.primary },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
