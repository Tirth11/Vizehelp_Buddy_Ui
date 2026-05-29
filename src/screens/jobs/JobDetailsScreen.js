import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, getStatusColor } from '../../constants/theme';
import { MOCK_JOBS } from '../../data/mockData';

export default function JobDetailsScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[0];
  const status = getStatusColor(job.status);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <View style={styles.back} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <Text style={styles.jobId}>{job.id}</Text>
          <View style={[styles.statusPill, { backgroundColor: status.bg }]}>
            <Text style={[styles.statusPillText, { color: status.fg }]}>{status.label}</Text>
          </View>
        </View>

        <View style={[styles.heroCard, SHADOWS.small]}>
          <Text style={styles.serviceType}>{job.type}</Text>
          <Text style={styles.earning}>${job.earning}</Text>
        </View>

        <Section title="Customer">
          <View style={styles.row}>
            <View style={styles.avatar}><Ionicons name="person" size={18} color={COLORS.primary} /></View>
            <Text style={styles.rowValue}>{job.customer}</Text>
          </View>
        </Section>

        <Section title="Location">
          <View style={styles.row}>
            <View style={styles.avatar}><Ionicons name="location" size={18} color={COLORS.primary} /></View>
            <Text style={[styles.rowValue, { flex: 1 }]}>{job.location}</Text>
          </View>
          <View style={styles.mapPlaceholder}>
            <Ionicons name="map-outline" size={36} color={COLORS.textLight} />
            <Text style={styles.mapText}>Map Preview</Text>
          </View>
        </Section>

        {job.instructions && (
          <Section title="Instructions">
            <Text style={styles.instructionText}>{job.instructions}</Text>
          </Section>
        )}

        <Section title="Job Info">
          <View style={styles.grid}>
            <DetailItem icon="navigate-outline" label="Distance" value={job.distance} />
            <DetailItem icon="time-outline"     label="Duration" value={job.duration} />
            <DetailItem icon="alarm-outline"    label="Start By" value={job.slaTime} />
            <DetailItem icon="cash-outline"     label="Payment" value="Online" />
          </View>
        </Section>
      </ScrollView>

      {job.status === 'new' && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RejectJob', { job })} activeOpacity={0.85}>
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job })} activeOpacity={0.85}>
            <Ionicons name="checkmark" size={20} color={COLORS.white} />
            <Text style={styles.acceptText}>Accept Job</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <View style={styles.detailItem}>
      <Ionicons name={icon} size={18} color={COLORS.primary} />
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SPACING.lg, paddingTop: SPACING.xl, paddingBottom: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  back: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { ...FONTS.subtitle },

  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md },
  jobId: { ...FONTS.small, color: COLORS.textLight, fontWeight: '700' },
  statusPill: { paddingHorizontal: SPACING.sm + 2, paddingVertical: 4, borderRadius: RADIUS.pill },
  statusPillText: { fontSize: 12, fontWeight: '700' },

  heroCard: { backgroundColor: COLORS.white, padding: SPACING.lg, borderRadius: RADIUS.md, marginBottom: SPACING.lg, borderWidth: 1, borderColor: COLORS.border, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  serviceType: { ...FONTS.subtitle, fontSize: 18 },
  earning: { fontSize: 26, fontWeight: '900', color: COLORS.success },

  section: { marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.caption, color: COLORS.textLight, fontWeight: '700', marginBottom: SPACING.sm },
  row: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border },
  avatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  rowValue: { ...FONTS.medium, fontSize: 15 },
  instructionText: { ...FONTS.regular, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, lineHeight: 21, borderWidth: 1, borderColor: COLORS.border },

  mapPlaceholder: { height: 120, backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, justifyContent: 'center', alignItems: 'center', marginTop: SPACING.sm },
  mapText: { ...FONTS.small, marginTop: SPACING.xs },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  detailItem: { width: '48%', backgroundColor: COLORS.background, padding: SPACING.md, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border },
  detailLabel: { ...FONTS.small, marginTop: SPACING.xs },
  detailValue: { ...FONTS.bold, fontSize: 15, marginTop: 2 },

  footer: { flexDirection: 'row', gap: SPACING.sm, padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  rejectBtn: { flex: 1, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: COLORS.danger, backgroundColor: COLORS.white },
  rejectText: { color: COLORS.danger, fontSize: 16, fontWeight: '800' },
  acceptBtn: { flex: 2, flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '800' },
});
