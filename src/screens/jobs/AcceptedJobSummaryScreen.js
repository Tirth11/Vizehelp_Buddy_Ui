import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, getStatusColor } from '../../constants/theme';
import { MOCK_JOBS } from '../../data/mockData';

export default function AcceptedJobSummaryScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];
  const status = getStatusColor('accepted');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.successBadge}>
          <Ionicons name="checkmark" size={36} color={COLORS.white} />
        </View>
        <Text style={styles.title}>Job Accepted</Text>
        <Text style={styles.subtitle}>Get ready to start your service.</Text>

        <View style={styles.card}>
          <View style={[styles.statusPill, { backgroundColor: status.bg, alignSelf: 'flex-start' }]}>
            <Text style={[styles.statusText, { color: status.fg }]}>{status.label}</Text>
          </View>
          <Text style={styles.jobId}>{job.id}</Text>
          <Text style={styles.jobType}>{job.type}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="location-outline" size={16} color={COLORS.textLight} />
            <Text style={styles.metaText}>{job.location}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="alarm-outline" size={16} color={COLORS.warning} />
            <Text style={[styles.metaText, { color: COLORS.warning, fontWeight: '700' }]}>Start by {job.slaTime}</Text>
          </View>
        </View>

        <Text style={styles.actionsTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <ActionBtn icon="navigate"   label="Navigate"     color={COLORS.primary} onPress={() => navigation.navigate('NavigationToJob', { job })} />
          <ActionBtn icon="call"       label="Call"         color={COLORS.success} />
          <ActionBtn icon="chatbubble" label="Message"      color={COLORS.warning} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.navigate('CancelJob', { job })}>
          <Text style={styles.cancelText}>Cancel Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('NavigationToJob', { job })} activeOpacity={0.85}>
          <Text style={styles.startText}>Start Trip</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ActionBtn({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.actionIcon, { backgroundColor: color + '18' }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl + SPACING.md, alignItems: 'center' },
  successBadge: { width: 76, height: 76, borderRadius: 38, backgroundColor: COLORS.success, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md, ...SHADOWS.medium },
  title: { ...FONTS.title, fontSize: 24, textAlign: 'center', marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, marginBottom: SPACING.lg, textAlign: 'center' },

  card: { backgroundColor: COLORS.background, padding: SPACING.lg, borderRadius: RADIUS.md, width: '100%', borderWidth: 1, borderColor: COLORS.border, marginBottom: SPACING.lg },
  statusPill: { paddingHorizontal: SPACING.sm + 2, paddingVertical: 4, borderRadius: RADIUS.pill, marginBottom: SPACING.sm },
  statusText: { fontSize: 11, fontWeight: '700' },
  jobId: { ...FONTS.small, color: COLORS.textLight, fontWeight: '600' },
  jobType: { ...FONTS.subtitle, fontSize: 18, marginVertical: SPACING.xs },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginTop: SPACING.xs },
  metaText: { ...FONTS.regular, color: COLORS.textLight, flex: 1 },

  actionsTitle: { ...FONTS.small, fontWeight: '700', alignSelf: 'flex-start', marginBottom: SPACING.sm },
  actions: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: SPACING.sm },
  actionBtn: { flex: 1, alignItems: 'center', backgroundColor: COLORS.background, borderWidth: 1, borderColor: COLORS.border, borderRadius: RADIUS.md, padding: SPACING.md },
  actionIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text },

  footer: { flexDirection: 'row', gap: SPACING.sm, padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  cancelBtn: { flex: 1, padding: SPACING.md + 2, borderWidth: 1.5, borderColor: COLORS.danger, borderRadius: RADIUS.md, alignItems: 'center', backgroundColor: COLORS.white },
  cancelText: { color: COLORS.danger, fontSize: 14, fontWeight: '700' },
  startBtn: { flex: 2, flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  startText: { color: COLORS.white, fontSize: 16, fontWeight: '800' },
});
