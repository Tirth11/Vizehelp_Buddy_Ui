import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function TermsConsentScreen({ navigation }) {
  const [agreed, setAgreed] = useState({ terms: false, privacy: false, location: false, bgCheck: false });

  const allAgreed = Object.values(agreed).every(Boolean);

  const toggle = (key) => setAgreed(prev => ({ ...prev, [key]: !prev[key] }));

  const handleContinue = () => {
    navigation.navigate('BasicProfile');
  };

  const CheckItem = ({ label, field }) => (
    <TouchableOpacity style={styles.checkRow} onPress={() => toggle(field)}>
      <Ionicons name={agreed[field] ? 'checkbox' : 'square-outline'} size={24} color={agreed[field] ? COLORS.primary : COLORS.gray} />
      <Text style={styles.checkLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Terms and Consent</Text>
      <Text style={styles.subtitle}>Please review and accept the following to continue.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms of Service</Text>
        <Text style={styles.sectionText}>By registering, you agree to provide services as per Vizehelp standards, maintain professionalism, and follow enterprise guidelines.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <Text style={styles.sectionText}>Your personal data will be used for identity verification, job allocation, and payment processing as per our privacy policy.</Text>
      </View>

      <View style={styles.checkboxes}>
        <CheckItem label="I agree to the Terms of Service" field="terms" />
        <CheckItem label="I agree to the Privacy Policy" field="privacy" />
        <CheckItem label="I consent to location access for job allocation" field="location" />
        <CheckItem label="I consent to background verification" field="bgCheck" />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleContinue}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  section: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.md },
  sectionTitle: { ...FONTS.medium, marginBottom: SPACING.xs },
  sectionText: { ...FONTS.regular, color: COLORS.gray },
  checkboxes: { marginVertical: SPACING.lg },
  checkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.md },
  checkLabel: { ...FONTS.regular, marginLeft: SPACING.sm, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
