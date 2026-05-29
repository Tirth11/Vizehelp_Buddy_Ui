import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

export default function CompleteProfileScreen({ navigation }) {
  const [form, setForm] = useState({ dob: '', ssn: '', address: '', city: '', state: '', zip: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.dob && form.address && form.city && form.state && form.zip.length === 5;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={4}
        total={4}
        onBack={() => navigation.goBack()}
        title="Complete Your Profile"
        subtitle="A few more details to set up your account."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Field label="Date of Birth *"      icon="calendar-outline" value={form.dob}     onChangeText={v => update('dob', v)}     placeholder="MM/DD/YYYY" />
        <Field label="Last 4 of SSN"        icon="shield-outline"   value={form.ssn}     onChangeText={v => update('ssn', v)}     placeholder="••••" maxLength={4} keyboardType="number-pad" secureTextEntry />
        <Field label="Street Address *"     icon="home-outline"     value={form.address} onChangeText={v => update('address', v)} placeholder="123 Main St" />

        <View style={styles.row}>
          <View style={styles.flex2}>
            <Field label="City *" icon="location-outline" value={form.city} onChangeText={v => update('city', v)} placeholder="Dallas" />
          </View>
          <View style={styles.flex1}>
            <Field label="State *" icon="map-outline" value={form.state} onChangeText={v => update('state', v.toUpperCase())} placeholder="TX" maxLength={2} />
          </View>
          <View style={styles.flex1}>
            <Field label="ZIP *" icon="pin-outline" value={form.zip} onChangeText={v => update('zip', v)} placeholder="75201" maxLength={5} keyboardType="number-pad" />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.btn, !valid && styles.btnDisabled]} disabled={!valid} onPress={() => navigation.navigate('IdentityVerification')}>
          <Text style={styles.btnText}>Continue</Text>
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
  row: { flexDirection: 'row', gap: SPACING.sm },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
