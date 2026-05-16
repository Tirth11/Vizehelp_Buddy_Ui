import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function RejectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={80} color={COLORS.danger} />
      <Text style={styles.title}>Resubmission Required</Text>
      <Text style={styles.subtitle}>Some of your documents were rejected. Please correct and resubmit.</Text>

      <View style={styles.reasonBox}>
        <Text style={styles.reasonTitle}>Rejection Reason:</Text>
        <Text style={styles.reasonText}>Aadhaar document is blurry and unreadable. Please upload a clear photo.</Text>
        <Text style={styles.docName}>Document: Aadhaar / Government ID</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('KYCUpload')}>
        <Ionicons name="cloud-upload-outline" size={20} color={COLORS.white} />
        <Text style={styles.btnText}>Re-upload Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('ApprovalPending')}>
        <Text style={styles.submitText}>Submit Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportBtn} onPress={() => navigation.navigate('Support')}>
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg, marginBottom: SPACING.sm, color: COLORS.danger },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginBottom: SPACING.lg },
  reasonBox: { width: '100%', backgroundColor: '#FFF3F3', borderRadius: 12, padding: SPACING.md, borderLeftWidth: 4, borderLeftColor: COLORS.danger, marginBottom: SPACING.lg },
  reasonTitle: { ...FONTS.medium, color: COLORS.danger, marginBottom: SPACING.xs },
  reasonText: { ...FONTS.regular, marginBottom: SPACING.sm },
  docName: { ...FONTS.small, color: COLORS.gray },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  submitBtn: { marginTop: SPACING.md, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12, width: '100%', alignItems: 'center' },
  submitText: { color: COLORS.primary, fontSize: 16, fontWeight: '600' },
  supportBtn: { marginTop: SPACING.md },
  supportText: { color: COLORS.primary, fontSize: 14 },
});
