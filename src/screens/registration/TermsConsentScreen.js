import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const ITEMS = [
  { key: 'terms',    label: 'I agree to the Terms of Service' },
  { key: 'privacy',  label: 'I agree to the Privacy Policy' },
  { key: 'location', label: 'I consent to location access for jobs' },
  { key: 'bgCheck',  label: 'I consent to background verification' },
];

export default function TermsConsentScreen({ navigation }) {
  const [agreed, setAgreed] = useState({ terms: false, privacy: false, location: false, bgCheck: false });
  const allAgreed = Object.values(agreed).every(Boolean);

  const toggle = (key) => setAgreed(prev => ({ ...prev, [key]: !prev[key] }));
  const acceptAll = () => setAgreed({ terms: true, privacy: true, location: true, bgCheck: true });

  return (
    <View style={styles.container}>
      <StepProgress
        step={1}
        total={9}
        onBack={() => navigation.goBack()}
        title="Terms & Consent"
        subtitle="Please review and accept to continue."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.summary}>
          <Ionicons name="shield-checkmark-outline" size={20} color={COLORS.primary} />
          <Text style={styles.summaryText}>Your data is encrypted and handled per US privacy laws. You can withdraw consent anytime.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Terms of Service</Text>
          <Text style={styles.cardText}>You agree to provide services per VizehelpBuddy standards, maintain professionalism, and follow enterprise guidelines.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy Policy</Text>
          <Text style={styles.cardText}>Your personal data is used only for identity verification, job allocation, and payment processing.</Text>
        </View>

        <TouchableOpacity style={styles.acceptAllBtn} onPress={acceptAll}>
          <Ionicons name="checkmark-done" size={18} color={COLORS.primary} />
          <Text style={styles.acceptAllText}>Accept All</Text>
        </TouchableOpacity>

        <View style={styles.checks}>
          {ITEMS.map(item => (
            <TouchableOpacity key={item.key} style={styles.checkRow} onPress={() => toggle(item.key)} activeOpacity={0.7}>
              <View style={[styles.checkbox, agreed[item.key] && styles.checkboxOn]}>
                {agreed[item.key] && <Ionicons name="checkmark" size={16} color={COLORS.white} />}
              </View>
              <Text style={styles.checkLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !allAgreed && styles.btnDisabled]}
          disabled={!allAgreed}
          onPress={() => navigation.navigate('BasicProfile')}
        >
          <Text style={styles.btnText}>Agree & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  summary: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, gap: SPACING.sm, marginBottom: SPACING.md },
  summaryText: { ...FONTS.small, color: COLORS.text, flex: 1, lineHeight: 19 },
  card: { backgroundColor: COLORS.background, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.md, borderWidth: 1, borderColor: COLORS.border },
  cardTitle: { ...FONTS.medium, marginBottom: SPACING.xs },
  cardText: { ...FONTS.regular, color: COLORS.textLight, lineHeight: 20 },
  acceptAllBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.xs, padding: SPACING.sm, marginVertical: SPACING.sm },
  acceptAllText: { color: COLORS.primary, fontWeight: '700', fontSize: 14 },
  checks: { gap: SPACING.sm, marginTop: SPACING.sm },
  checkRow: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border, gap: SPACING.sm },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  checkboxOn: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  checkLabel: { ...FONTS.regular, flex: 1 },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
