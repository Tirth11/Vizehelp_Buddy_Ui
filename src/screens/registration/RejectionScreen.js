import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

export default function RejectionScreen({ navigation }) {
  const { dispatch } = useApp();

  const handleResubmit = () => {
    // When resubmitted, status goes back to UnderReview
    dispatch({ type: 'SET_BUDDY_STATUS', payload: 'UnderReview' });
    navigation.navigate('ApprovalPending');
  };

  return (
    <View style={styles.container}>
      <View style={styles.alertIcon}>
        <Ionicons name="warning-outline" size={48} color={COLORS.danger} />
      </View>
      
      <Text style={styles.title}>Action Required</Text>
      <Text style={styles.subtitle}>Your enterprise admin requested corrections to your onboarding profile.</Text>

      <View style={styles.box}>
        <Text style={styles.sectionHeader}>Section to Correct:</Text>
        <Text style={styles.sectionValue}>Identity Verification (Driver's License)</Text>

        <Text style={[styles.sectionHeader, { marginTop: SPACING.md }]}>Admin Comment:</Text>
        <Text style={styles.sectionDesc}>
          "Your Driver's License image is unclear. Please upload a clear front and back image of your license."
        </Text>
      </View>

      <TouchableOpacity style={styles.btnCorrect} onPress={() => navigation.navigate('IdentityVerification')}>
        <Ionicons name="create-outline" size={20} color={COLORS.white} />
        <Text style={styles.btnCorrectText}>Edit Identity Documents</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnResubmit} onPress={handleResubmit}>
        <Ionicons name="send-outline" size={18} color={COLORS.primary} />
        <Text style={styles.btnResubmitText}>Resubmit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportLink} onPress={() => navigation.navigate('Support')}>
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  alertIcon: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#FFF3F3', justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, color: COLORS.danger, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginBottom: SPACING.xl, lineHeight: 20 },
  box: { width: '100%', backgroundColor: COLORS.background, borderRadius: 16, padding: SPACING.lg, borderLeftWidth: 4, borderLeftColor: COLORS.danger, marginBottom: SPACING.xl, ...SHADOWS.small },
  sectionHeader: { ...FONTS.caption, color: COLORS.danger, fontWeight: '700' },
  sectionValue: { ...FONTS.medium, fontWeight: '700', marginTop: 4 },
  sectionDesc: { ...FONTS.regular, color: COLORS.darkGray, lineHeight: 20, marginTop: 4, fontStyle: 'italic' },
  btnCorrect: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center', ...SHADOWS.small, marginBottom: SPACING.md },
  btnCorrectText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  btnResubmit: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center', marginBottom: SPACING.lg },
  btnResubmitText: { color: COLORS.primary, fontSize: 16, fontWeight: '600' },
  supportLink: { marginTop: SPACING.sm },
  supportText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' }
});
