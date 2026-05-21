import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function CompletedJobDetailScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[2];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="checkmark-circle" size={32} color={COLORS.success} />
        <Text style={styles.status}>Completed</Text>
      </View>

      <View style={styles.card}>
        <Row label="Job ID" value={job.id} />
        <Row label="Service Type" value={job.type} />
        <Row label="Date/Time" value={job.completedAt || '12:15 PM'} />
        <Row label="Location" value={job.location} />
        <Row label="Customer Rating" value={job.rating ? `${job.rating} ★` : 'Pending'} />
        <Row label="Earnings" value={`$${job.earning}`} highlight />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proof Submitted</Text>
        <View style={styles.proofPlaceholder}>
          <Ionicons name="image-outline" size={32} color={COLORS.gray} />
          <Text style={styles.proofText}>Completion photos uploaded</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completion Notes</Text>
        <Text style={styles.notes}>Service completed successfully. Customer satisfied with the work.</Text>
      </View>
    </ScrollView>
  );
}

function Row({ label, value, highlight }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, highlight && { color: COLORS.success, fontWeight: '700' }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  header: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg },
  status: { ...FONTS.title, color: COLORS.success },
  card: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm },
  rowLabel: { ...FONTS.regular, color: COLORS.gray },
  rowValue: { ...FONTS.medium },
  section: { marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  proofPlaceholder: { height: 80, backgroundColor: COLORS.lightGray, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  proofText: { ...FONTS.small, marginTop: SPACING.xs },
  notes: { ...FONTS.regular, color: COLORS.gray },
});
