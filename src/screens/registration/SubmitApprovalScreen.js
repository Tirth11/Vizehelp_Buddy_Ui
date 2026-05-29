import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';

const SECTIONS = [
  { label: 'Profile Details',         status: 'completed', icon: 'person-outline' },
  { label: 'Address Details',         status: 'completed', icon: 'location-outline' },
  { label: 'Identity Documents',      status: 'completed', icon: 'card-outline' },
  { label: 'Background Check',        status: 'completed', icon: 'shield-checkmark-outline' },
  { label: 'Tax Information',         status: 'completed', icon: 'document-text-outline' },
  { label: 'Payout Details',          status: 'completed', icon: 'wallet-outline' },
  { label: 'Emergency Contact',       status: 'skipped',   icon: 'call-outline' },
  { label: 'Availability',            status: 'completed', icon: 'calendar-outline' },
  { label: 'Assigned Services',       status: 'completed', icon: 'construct-outline' },
];

const STATUS_STYLE = {
  completed: { color: COLORS.success, label: 'Completed' },
  skipped:   { color: COLORS.warning, label: 'Skipped' },
  pending:   { color: COLORS.danger,  label: 'Pending' },
};

export default function SubmitApprovalScreen({ navigation }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => navigation.navigate('ApprovalPending'), 1200);
  };

  if (submitted) {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.spinnerWrap}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
        <Text style={styles.title}>Submitting…</Text>
        <Text style={styles.subtitle}>Please wait while we submit your profile for approval.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review & Submit</Text>
        <View style={styles.back} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.successBanner}>
          <Ionicons name="checkmark-done-circle" size={32} color={COLORS.success} />
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>You're almost done!</Text>
            <Text style={styles.bannerText}>Review your information below, then submit for enterprise approval.</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Onboarding Summary</Text>

        <View style={styles.list}>
          {SECTIONS.map(s => {
            const sty = STATUS_STYLE[s.status];
            return (
              <View key={s.label} style={styles.row}>
                <View style={styles.rowIcon}><Ionicons name={s.icon} size={18} color={COLORS.primary} /></View>
                <Text style={styles.rowLabel}>{s.label}</Text>
                <View style={[styles.statusPill, { backgroundColor: sty.color + '18' }]}>
                  <Text style={[styles.statusText, { color: sty.color }]}>{sty.label}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.notice}>
          <Ionicons name="time-outline" size={18} color={COLORS.warning} />
          <Text style={styles.noticeText}>Your enterprise will review and approve your profile within 1–3 business days.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit for Approval</Text>
          <Ionicons name="checkmark" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  centerContainer: { flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SPACING.lg, paddingTop: SPACING.xl, paddingBottom: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  back: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { ...FONTS.subtitle },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  spinnerWrap: { marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.xs, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center' },
  successBanner: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.successLight, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.lg },
  bannerTitle: { ...FONTS.medium, color: COLORS.success, fontSize: 15 },
  bannerText: { ...FONTS.small, color: COLORS.text, marginTop: 2, lineHeight: 18 },
  sectionLabel: { ...FONTS.small, fontWeight: '700', color: COLORS.text, marginBottom: SPACING.sm },
  list: { gap: SPACING.xs, marginBottom: SPACING.lg },
  row: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.background, padding: SPACING.md, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border },
  rowIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  rowLabel: { ...FONTS.medium, flex: 1, fontSize: 14 },
  statusPill: { paddingHorizontal: SPACING.sm, paddingVertical: 4, borderRadius: RADIUS.pill },
  statusText: { fontSize: 12, fontWeight: '700' },
  notice: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.warningLight, padding: SPACING.md, borderRadius: RADIUS.md },
  noticeText: { ...FONTS.small, flex: 1, color: COLORS.text, lineHeight: 19 },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
