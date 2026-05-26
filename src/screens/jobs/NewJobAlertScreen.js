import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { MOCK_JOBS } from '../../data/mockData';

export default function NewJobAlertScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.alertBadge}>
          <Ionicons name="flash" size={28} color={COLORS.warning} />
        </View>
        <Text style={styles.title}>New Job Request</Text>
        <Text style={styles.subtitle}>Tap Accept within 60 seconds.</Text>
      </View>

      <View style={[styles.card, SHADOWS.medium]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.serviceLabel}>SERVICE</Text>
            <Text style={styles.serviceType}>{job.type}</Text>
          </View>
          <View style={styles.earningWrap}>
            <Text style={styles.earningLabel}>EARN</Text>
            <Text style={styles.earningValue}>${job.earning}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Row icon="person-outline"   label="Customer" value={job.customer} />
        <Row icon="location-outline" label="Location" value={job.location} multiline />
        <Row icon="navigate-outline" label="Distance" value={job.distance} />
        <Row icon="time-outline"     label="Duration" value={job.duration} />
        <Row icon="alarm-outline"    label="Start By" value={job.slaTime} highlight />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RejectJob', { job })} activeOpacity={0.85}>
          <Ionicons name="close" size={22} color={COLORS.danger} />
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job })} activeOpacity={0.85}>
          <Ionicons name="checkmark" size={22} color={COLORS.white} />
          <Text style={styles.acceptText}>Accept Job</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.detailsBtn} onPress={() => navigation.navigate('JobDetails', { job })}>
        <Text style={styles.detailsText}>View Full Details</Text>
        <Ionicons name="chevron-forward" size={16} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
}

function Row({ icon, label, value, highlight, multiline }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon} size={16} color={highlight ? COLORS.warning : COLORS.primary} />
      </View>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text
        style={[styles.rowValue, highlight && { color: COLORS.warning, fontWeight: '700' }]}
        numberOfLines={multiline ? 2 : 1}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.lg, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: SPACING.lg },
  alertBadge: { width: 64, height: 64, borderRadius: 32, backgroundColor: COLORS.warningLight, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md, ...SHADOWS.small },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.textLight },

  card: { backgroundColor: COLORS.white, borderRadius: RADIUS.lg, padding: SPACING.md, marginBottom: SPACING.lg },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm },
  serviceLabel: { ...FONTS.caption, color: COLORS.textLight, fontWeight: '700' },
  serviceType: { ...FONTS.subtitle, fontSize: 18, marginTop: 2 },
  earningWrap: { alignItems: 'flex-end' },
  earningLabel: { ...FONTS.caption, color: COLORS.textLight, fontWeight: '700' },
  earningValue: { fontSize: 26, fontWeight: '900', color: COLORS.success, marginTop: 2 },
  divider: { height: 1, backgroundColor: COLORS.border, marginVertical: SPACING.sm },

  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: SPACING.sm, gap: SPACING.sm },
  rowIcon: { width: 28, height: 28, borderRadius: 14, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  rowLabel: { ...FONTS.regular, color: COLORS.textLight, width: 80 },
  rowValue: { ...FONTS.medium, flex: 1, textAlign: 'right' },

  buttons: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  rejectBtn: { flex: 1, flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.danger, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, backgroundColor: COLORS.white },
  rejectText: { color: COLORS.danger, fontSize: 16, fontWeight: '800' },
  acceptBtn: { flex: 2, flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '800' },

  detailsBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4 },
  detailsText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
});
