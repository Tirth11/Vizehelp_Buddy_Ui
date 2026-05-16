import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function JobDetailsScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.jobId}>{job.id}</Text>
        <View style={styles.typeBadge}><Text style={styles.typeText}>{job.type}</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer</Text>
        <Text style={styles.sectionValue}>{job.customer}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionValue}>{job.location}</Text>
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map-outline" size={40} color={COLORS.gray} />
          <Text style={styles.mapText}>Map Preview</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.sectionValue}>{job.instructions}</Text>
      </View>

      <View style={styles.detailsGrid}>
        <DetailItem label="Distance" value={job.distance} />
        <DetailItem label="Duration" value={job.duration} />
        <DetailItem label="Earning" value={`$${job.earning}`} />
        <DetailItem label="SLA Time" value={job.slaTime} />
        <DetailItem label="Payment" value="Online" />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job })}>
          <Text style={styles.acceptText}>Accept Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RejectJob', { job })}>
          <Text style={styles.rejectText}>Reject Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function DetailItem({ label, value }) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  jobId: { ...FONTS.medium, color: COLORS.gray },
  typeBadge: { backgroundColor: COLORS.primary + '15', paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, borderRadius: 20 },
  typeText: { color: COLORS.primary, fontSize: 12, fontWeight: '600' },
  section: { marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.small, marginBottom: SPACING.xs },
  sectionValue: { ...FONTS.medium },
  mapPlaceholder: { height: 120, backgroundColor: COLORS.lightGray, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: SPACING.sm },
  mapText: { ...FONTS.small, marginTop: SPACING.xs },
  detailsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.lg },
  detailItem: { width: '48%', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12 },
  detailLabel: { ...FONTS.small },
  detailValue: { ...FONTS.bold, marginTop: SPACING.xs },
  buttons: { gap: SPACING.md },
  acceptBtn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  rejectBtn: { borderWidth: 1, borderColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  rejectText: { color: COLORS.danger, fontSize: 16, fontWeight: '600' },
});
