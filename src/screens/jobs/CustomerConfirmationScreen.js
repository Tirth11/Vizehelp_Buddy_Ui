import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { showAlert } from '../../utils/alert';

export default function CustomerConfirmationScreen({ navigation, route }) {
  const job = route.params?.job;
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleCustomerConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWaiting(false);
      showAlert(
        'Job Closed', 
        'Customer confirmed service completion satisfactorily! Earnings added to your wallet and invoice generated.',
        [
          { text: 'View Summary', onPress: () => navigation.navigate('JobCompletionSuccess', { job }) }
        ]
      );
    }, 500);
  };

  const handleCustomerRaiseIssue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showAlert(
        'Issue Raised', 
        'Customer has flagged a concern. The job is marked as "Issue Raised". ABC Home Services administration will review.',
        [
          { text: 'Return to Dashboard', onPress: () => navigation.navigate('MainTabs') }
        ]
      );
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <Ionicons name="close" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Completion Waiting</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.iconContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <Ionicons name="time" size={72} color={COLORS.warning} />
        )}
      </View>

      <Text style={styles.statusLabel}>Waiting for customer confirmation</Text>
      <Text style={styles.subtitle}>
        The completion confirmation request has been sent to the customer's Vizehelp app. 
      </Text>

      <View style={[styles.infoCard, SHADOWS.small]}>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Job Type:</Text>
          <Text style={styles.infoValue}>{job?.type || 'EV Charging Support'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>Client Name:</Text>
          <Text style={styles.infoValue}>{job?.customer || 'Sarah M.'}</Text>
        </View>
        <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.infoTitle}>Status:</Text>
          <Text style={[styles.infoValue, { color: COLORS.warning, fontWeight: '700' }]}>
            Completed by Buddy
          </Text>
        </View>
      </View>

      {/* Simulation triggers for testing flows */}
      <Text style={styles.simulationTitle}>Simulate Customer Action:</Text>
      
      <TouchableOpacity style={styles.confirmBtn} onPress={handleCustomerConfirm} disabled={loading}>
        <Ionicons name="checkmark-circle-outline" size={20} color={COLORS.white} />
        <Text style={styles.confirmBtnText}>Customer Confirms (Job Closed)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.issueBtn} onPress={handleCustomerRaiseIssue} disabled={loading}>
        <Ionicons name="alert-circle-outline" size={20} color={COLORS.danger} />
        <Text style={styles.issueBtnText}>Customer Raises Issue (Dispute)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: SPACING.md, marginBottom: SPACING.xl },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  iconContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFF9E6', justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg, alignSelf: 'center', ...SHADOWS.small },
  statusLabel: { ...FONTS.title, fontSize: 18, color: COLORS.warning, textAlign: 'center', marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', lineHeight: 20, paddingHorizontal: SPACING.md, marginBottom: SPACING.xl },
  infoCard: { width: '100%', backgroundColor: COLORS.background, borderRadius: 16, padding: SPACING.md, marginBottom: SPACING.xxl },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  infoTitle: { ...FONTS.regular, color: COLORS.gray },
  infoValue: { ...FONTS.medium, fontWeight: '700' },
  simulationTitle: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700', alignSelf: 'flex-start', marginBottom: SPACING.sm },
  confirmBtn: { flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', ...SHADOWS.small, marginBottom: SPACING.sm },
  confirmBtnText: { color: COLORS.white, fontSize: 15, fontWeight: '700' },
  issueBtn: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' },
  issueBtnText: { color: COLORS.danger, fontSize: 15, fontWeight: '700' },
});
