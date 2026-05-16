import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SubmitApprovalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name="rocket-outline" size={56} color={COLORS.primary} />
      </View>

      <Text style={styles.title}>You're Almost There!</Text>
      <Text style={styles.subtitle}>Review your application and submit for approval</Text>

      <View style={styles.checklist}>
        <CheckItem label="Account Created" done />
        <CheckItem label="Phone Verified" done />
        <CheckItem label="Email Verified" done />
        <CheckItem label="Profile Completed" done />
        <CheckItem label="Identity Verified" done />
        <CheckItem label="Background Check Authorized" done />
        <CheckItem label="Services Selected" done />
        <CheckItem label="Service Area Set" done />
        <CheckItem label="Availability Set" done />
        <CheckItem label="Payout Details Added" done />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ApprovalPending')}>
        <Ionicons name="send-outline" size={20} color={COLORS.white} />
        <Text style={styles.btnText}>Submit for Approval</Text>
      </TouchableOpacity>

      <Text style={styles.note}>You'll receive a notification once your application is reviewed. This typically takes 1-3 business days.</Text>
    </View>
  );
}

function CheckItem({ label, done }) {
  return (
    <View style={styles.checkRow}>
      <Ionicons name={done ? 'checkmark-circle' : 'ellipse-outline'} size={20} color={done ? COLORS.secondary : COLORS.gray} />
      <Text style={styles.checkText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  iconWrap: { width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, textAlign: 'center', marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, textAlign: 'center', color: COLORS.gray, marginBottom: SPACING.lg },
  checklist: { backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.md, gap: SPACING.sm, marginBottom: SPACING.xl },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  checkText: { ...FONTS.regular },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  note: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.lg },
});
