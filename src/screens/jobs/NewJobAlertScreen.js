import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function NewJobAlertScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[0];

  return (
    <View style={styles.container}>
      <View style={styles.badge}><Ionicons name="flash" size={32} color={COLORS.accent} /></View>
      <Text style={styles.title}>New Job Request!</Text>

      <View style={styles.card}>
        <Row icon="construct-outline" label="Service" value={job.type} />
        <Row icon="person-outline" label="Customer" value={job.customer} />
        <Row icon="location-outline" label="Location" value={job.location} />
        <Row icon="navigate-outline" label="Distance" value={job.distance} />
        <Row icon="cash-outline" label="Expected Earning" value={`$${job.earning}`} highlight />
        <Row icon="time-outline" label="Duration" value={job.duration} />
        <Row icon="alarm-outline" label="SLA Time" value={job.slaTime} />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job })}>
          <Ionicons name="checkmark" size={20} color={COLORS.white} />
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RejectJob', { job })}>
          <Ionicons name="close" size={20} color={COLORS.danger} />
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.detailsBtn} onPress={() => navigation.navigate('JobDetails', { job })}>
        <Text style={styles.detailsText}>View Full Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function Row({ icon, label, value, highlight }) {
  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={18} color={COLORS.gray} />
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, highlight && { color: COLORS.success, fontWeight: '700' }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  badge: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#FFF8E1', justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.md, marginBottom: SPACING.lg },
  card: { width: '100%', backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: SPACING.sm, gap: SPACING.sm },
  rowLabel: { flex: 1, ...FONTS.regular, color: COLORS.gray },
  rowValue: { ...FONTS.medium },
  buttons: { flexDirection: 'row', gap: SPACING.md, marginTop: SPACING.lg, width: '100%' },
  acceptBtn: { flex: 1, flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  rejectBtn: { flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm },
  rejectText: { color: COLORS.danger, fontSize: 16, fontWeight: '600' },
  detailsBtn: { marginTop: SPACING.md },
  detailsText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
