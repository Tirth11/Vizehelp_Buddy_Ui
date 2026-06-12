import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const SECTIONS = [
  { label: 'Profile Details', status: 'Completed', icon: 'person-outline' },
  { label: 'Address Details', status: 'Completed', icon: 'location-outline' },
  { label: 'Identity Documents', status: 'Completed', icon: 'card-outline' },
  { label: 'Background Check Consent', status: 'Completed', icon: 'shield-checkmark-outline' },
  { label: 'Tax Information', status: 'Completed', icon: 'document-text-outline' },
  { label: 'Payout Details', status: 'Completed', icon: 'wallet-outline' },
  { label: 'Emergency Contact', status: 'Skipped', icon: 'call-outline' },
  { label: 'Availability', status: 'Completed', icon: 'calendar-outline' },
  { label: 'Service Preference', status: 'Completed', icon: 'construct-outline' },
];

export default function SubmitApprovalScreen({ navigation }) {
  const [submitted, setSubmitted] = useState(false);
  const { dispatch } = useApp();

  const handleSubmit = () => {
    setSubmitted(true);
    dispatch({ type: 'SET_BUDDY_STATUS', payload: 'UnderReview' });
    setTimeout(() => navigation.navigate('ApprovalPending'), 1500);
  };

  const getStatusColor = (status) => {
    if (status === 'Completed') return COLORS.success;
    if (status === 'Skipped') return COLORS.warning;
    return COLORS.danger;
  };

  if (submitted) {
    return (
      <View style={styles.centerContainer}>
        <View style={[styles.iconWrap, { backgroundColor: COLORS.primaryLight }]}>
          <Ionicons name="checkmark-done" size={56} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>Submitting Application...</Text>
        <Text style={styles.subtitle}>Please wait while we submit your profile for approval.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 10 of 10</Text>
      <Text style={styles.title}>Review and Submit</Text>
      <Text style={styles.subtitle}>Review all submitted onboarding information before final submission.</Text>

      <View style={styles.list}>
        {SECTIONS.map(s => (
          <View key={s.label} style={styles.row}>
            <Ionicons name={s.icon} size={20} color={COLORS.primary} />
            <Text style={styles.rowLabel}>{s.label}</Text>
            <Text style={[styles.rowStatus, { color: getStatusColor(s.status) }]}>{s.status}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit for Approval</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  centerContainer: { flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  iconWrap: { width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  list: { gap: SPACING.sm, marginBottom: SPACING.xl },
  row: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12 },
  rowLabel: { ...FONTS.medium, flex: 1 },
  rowStatus: { fontSize: 13, fontWeight: '600' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
