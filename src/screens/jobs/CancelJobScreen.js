import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { showAlert } from '../../utils/alert';

const REASONS = ['Customer unavailable', 'Personal emergency', 'Vehicle breakdown', 'Wrong job assigned', 'Safety concern', 'Other'];

export default function CancelJobScreen({ navigation, route }) {
  const [reason, setReason] = useState('');

  const handleCancel = () => {
    if (!reason) return showAlert('Required', 'Please select a cancellation reason');
    showAlert('Cancelled', 'Job has been cancelled.', [{ text: 'OK', onPress: () => navigation.navigate('MainTabs') }]);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="close-circle-outline" size={48} color={COLORS.danger} />
      <Text style={styles.title}>Cancel Job</Text>

      <View style={styles.warningBox}>
        <Ionicons name="warning-outline" size={18} color={COLORS.accent} />
        <Text style={styles.warningText}>Repeated cancellations may affect your rating and earnings.</Text>
      </View>

      <Text style={styles.label}>Cancellation Reason *</Text>
      {REASONS.map(r => (
        <TouchableOpacity key={r} style={[styles.reasonCard, reason === r && styles.reasonActive]} onPress={() => setReason(r)}>
          <Text style={[styles.reasonText, reason === r && styles.reasonTextActive]}>{r}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.penaltyBox}>
        <Text style={styles.penaltyLabel}>Penalty:</Text>
        <Text style={styles.penaltyValue}>$50 deduction may apply</Text>
      </View>

      <TouchableOpacity style={[styles.btn, !reason && styles.btnDisabled]} onPress={handleCancel}>
        <Text style={styles.btnText}>Confirm Cancellation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl, alignItems: 'center' },
  title: { ...FONTS.title, color: COLORS.danger, marginTop: SPACING.sm, marginBottom: SPACING.md },
  warningBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF8E1', padding: SPACING.md, borderRadius: 12, gap: SPACING.sm, width: '100%', marginBottom: SPACING.lg },
  warningText: { ...FONTS.regular, flex: 1, color: COLORS.darkGray },
  label: { ...FONTS.medium, alignSelf: 'flex-start', marginBottom: SPACING.sm },
  reasonCard: { width: '100%', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.sm },
  reasonActive: { backgroundColor: COLORS.danger, borderColor: COLORS.danger },
  reasonText: { ...FONTS.regular },
  reasonTextActive: { color: COLORS.white },
  penaltyBox: { flexDirection: 'row', width: '100%', backgroundColor: '#FDE8E8', padding: SPACING.md, borderRadius: 12, marginTop: SPACING.md, gap: SPACING.sm },
  penaltyLabel: { ...FONTS.medium, color: COLORS.danger },
  penaltyValue: { ...FONTS.regular },
  btn: { width: '100%', backgroundColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
