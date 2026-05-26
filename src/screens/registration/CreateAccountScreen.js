import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, APP_NAME } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

export default function CreateAccountScreen({ navigation }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.firstName && form.lastName && form.phone && form.email;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={1}
        total={4}
        onBack={() => navigation.goBack()}
        title="Create Your Account"
        subtitle={`Get started as a ${APP_NAME}`}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Field label="First Name *"   icon="person-outline" value={form.firstName} onChangeText={v => update('firstName', v)} placeholder="John" />
        <Field label="Last Name *"    icon="person-outline" value={form.lastName}  onChangeText={v => update('lastName', v)}  placeholder="Smith" />
        <Field label="Mobile Number *" icon="call-outline"  value={form.phone}     onChangeText={v => update('phone', v)}     placeholder="+1 (555) 000-0000" keyboardType="phone-pad" />
        <Field label="Email Address *" icon="mail-outline"  value={form.email}     onChangeText={v => update('email', v)}     placeholder="john@example.com" keyboardType="email-address" autoCapitalize="none" />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('VerifyMobile')}
        >
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
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
