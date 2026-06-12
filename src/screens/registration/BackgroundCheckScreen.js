import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BackgroundCheckScreen({ navigation }) {
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '', address: '' });
  const handleContinue = () => {
    // Non-mandatory validation for mockup simplicity
    navigation.navigate('TaxInformation');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 4 of 10</Text>
      <Text style={styles.title}>Background Check</Text>
      <Text style={styles.subtitle}>Your enterprise requires background verification before your Buddy account is approved.</Text>

      <View style={styles.card}>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Criminal record check</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Sex offender registry check</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Identity verification check</Text>
        </View>
      </View>

      <Text style={styles.label}>Verification Details</Text>
      <TextInput style={styles.input} placeholder="Legal First Name *" value={form.firstName} onChangeText={v => setForm({ ...form, firstName: v })} />
      <TextInput style={styles.input} placeholder="Legal Last Name *" value={form.lastName} onChangeText={v => setForm({ ...form, lastName: v })} />
      <TextInput style={styles.input} placeholder="Date of Birth (MM/DD/YYYY) *" value={form.dob} onChangeText={v => setForm({ ...form, dob: v })} />
      <TextInput style={styles.input} placeholder="Current Address *" value={form.address} onChangeText={v => setForm({ ...form, address: v })} />

      <TouchableOpacity style={styles.consentRow} onPress={() => setConsent(!consent)}>
        <Ionicons name={consent ? 'checkbox' : 'square-outline'} size={24} color={consent ? COLORS.primary : COLORS.gray} />
        <Text style={styles.consentText}>I authorize the required background verification as part of Buddy onboarding.</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Ionicons name="time-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>Background checks typically complete within 3–5 business days. You'll be notified once approved.</Text>
      </View>

      <TouchableOpacity style={[styles.btn, !consent && styles.btnDisabled]} disabled={!consent} onPress={handleContinue}>
        <Text style={styles.btnText}>I Agree and Continue</Text>
      </TouchableOpacity>

      <Text style={styles.legal}>By continuing, you authorize Vizehelp to conduct a background check through our third-party provider in compliance with the Fair Credit Reporting Act (FCRA).</Text>
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
  card: { backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.lg, gap: SPACING.md, marginBottom: SPACING.lg },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  checkText: { ...FONTS.medium },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md, color: COLORS.text },
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, marginVertical: SPACING.md },
  consentText: { ...FONTS.regular, flex: 1 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  legal: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.lg, fontSize: 12 },
});
