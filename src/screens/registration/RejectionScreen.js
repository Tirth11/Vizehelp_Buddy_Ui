import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';

export default function RejectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="alert-circle" size={56} color={COLORS.danger} />
      </View>

      <Text style={styles.title}>Action Required</Text>
      <Text style={styles.subtitle}>Some of your information needs to be corrected. Please review and resubmit.</Text>

      <View style={styles.reasonBox}>
        <Text style={styles.reasonLabel}>Reason</Text>
        <Text style={styles.reasonText}>Government ID image is unclear. Please re-upload a clear photo of the front and back of your Driver's License.</Text>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Ionicons name="document-text-outline" size={16} color={COLORS.textLight} />
          <Text style={styles.sectionText}>Section: Identity Verification</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('IdentityVerification')}>
        <Ionicons name="cloud-upload-outline" size={20} color={COLORS.white} />
        <Text style={styles.btnText}>Re-upload Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('Support')}>
        <Ionicons name="chatbubble-outline" size={18} color={COLORS.primary} />
        <Text style={styles.secondaryText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: COLORS.dangerLight, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.sm, color: COLORS.danger, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center', marginBottom: SPACING.xl, lineHeight: 22 },
  reasonBox: { width: '100%', backgroundColor: COLORS.dangerLight, borderRadius: RADIUS.md, padding: SPACING.md, borderLeftWidth: 4, borderLeftColor: COLORS.danger, marginBottom: SPACING.lg },
  reasonLabel: { ...FONTS.caption, color: COLORS.danger, fontWeight: '700', marginBottom: SPACING.xs },
  reasonText: { ...FONTS.regular, color: COLORS.text, lineHeight: 22 },
  divider: { height: 1, backgroundColor: COLORS.danger + '30', marginVertical: SPACING.sm },
  section: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  sectionText: { ...FONTS.small, color: COLORS.textLight },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  secondaryBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginTop: SPACING.md, padding: SPACING.sm },
  secondaryText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
