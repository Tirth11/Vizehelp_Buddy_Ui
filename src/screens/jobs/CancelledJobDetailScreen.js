import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function CancelledJobDetailScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[3];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="close-circle" size={32} color={COLORS.danger} />
        <Text style={styles.status}>Cancelled</Text>
      </View>

      <View style={styles.card}>
        <Row label="Job ID" value={job.id} />
        <Row label="Service Type" value={job.type} />
        <Row label="Location" value={job.location} />
        <Row label="Cancellation Reason" value={job.cancelReason || 'N/A'} />
        <Row label="Cancelled By" value="Buddy" />
        <Row label="Penalty" value="₹50" danger />
      </View>

      <TouchableOpacity style={styles.supportBtn} onPress={() => navigation.navigate('Support')}>
        <Ionicons name="chatbubble-outline" size={18} color={COLORS.primary} />
        <Text style={styles.supportText}>Raise Support Ticket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Row({ label, value, danger }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, danger && { color: COLORS.danger }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  header: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg },
  status: { ...FONTS.title, color: COLORS.danger },
  card: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm },
  rowLabel: { ...FONTS.regular, color: COLORS.gray },
  rowValue: { ...FONTS.medium, flex: 1, textAlign: 'right' },
  supportBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12 },
  supportText: { color: COLORS.primary, fontWeight: '600' },
});
