import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ApprovalPendingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="time-outline" size={80} color={COLORS.accent} />
      <Text style={styles.title}>Profile Under Review</Text>
      <Text style={styles.subtitle}>Your profile is being reviewed by the enterprise. This usually takes 24-48 hours.</Text>

      <View style={styles.statusList}>
        <StatusRow label="KYC Documents" status="Submitted" />
        <StatusRow label="Enterprise Verification" status="Pending" />
        <StatusRow label="Training" status="Completed" />
        <StatusRow label="Background Check" status="In Progress" />
      </View>

      <Text style={styles.nextStep}>Next Step: You will receive a notification once approved.</Text>

      <TouchableOpacity style={styles.supportBtn} onPress={() => navigation.navigate('Support')}>
        <Ionicons name="chatbubble-outline" size={18} color={COLORS.primary} />
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

function StatusRow({ label, status }) {
  const color = status === 'Completed' || status === 'Submitted' ? COLORS.success : status === 'Pending' ? COLORS.accent : COLORS.primary;
  return (
    <View style={styles.statusRow}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={[styles.statusValue, { color }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginBottom: SPACING.lg },
  statusList: { width: '100%', backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  statusLabel: { ...FONTS.regular },
  statusValue: { fontWeight: '600', fontSize: 14 },
  nextStep: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginTop: SPACING.lg },
  supportBtn: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.lg, gap: SPACING.sm },
  supportText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
