import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER, MOCK_EARNINGS, MOCK_JOBS } from '../../data/mockData';

export default function HomeScreen({ navigation }) {
  const { state } = useApp();
  const user = state.user || MOCK_USER;
  const isOnline = state.isOnline;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hey, {user.name.split(' ')[0]} 👋</Text>
          <Text style={styles.enterprise}>{user.enterprise}</Text>
        </View>
        <TouchableOpacity style={[styles.statusBadge, isOnline ? styles.online : styles.offline]} onPress={() => navigation.navigate('OnlineOffline')}>
          <View style={[styles.dot, { backgroundColor: isOnline ? COLORS.online : COLORS.offline }]} />
          <Text style={[styles.statusText, { color: isOnline ? COLORS.online : COLORS.offline }]}>{isOnline ? 'Online' : 'Offline'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <StatCard icon="cash-outline" label="Today's Earnings" value={`$${MOCK_EARNINGS.today}`} color={COLORS.success} />
        <StatCard icon="checkmark-done-outline" label="Jobs Done" value="3" color={COLORS.primary} />
        <StatCard icon="star-outline" label="Rating" value={user.rating.toString()} color={COLORS.warning} />
      </View>

      {MOCK_JOBS.filter(j => j.status === 'new').length > 0 && (
        <TouchableOpacity style={[styles.alertCard, SHADOWS.small]} onPress={() => navigation.navigate('NewJobAlert', { job: MOCK_JOBS[0] })}>
          <View style={styles.alertIcon}>
            <Ionicons name="flash" size={22} color={COLORS.warning} />
          </View>
          <View style={styles.alertInfo}>
            <Text style={styles.alertTitle}>New Job Request!</Text>
            <Text style={styles.alertSub}>{MOCK_JOBS[0].type} • {MOCK_JOBS[0].distance} • ${MOCK_JOBS[0].earning}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
        </TouchableOpacity>
      )}

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <ActionBtn icon="power" label="Go Online" onPress={() => navigation.navigate('OnlineOffline')} color={COLORS.success} />
        <ActionBtn icon="briefcase" label="My Jobs" onPress={() => navigation.navigate('Jobs')} color={COLORS.primary} />
        <ActionBtn icon="wallet" label="Earnings" onPress={() => navigation.navigate('Earnings')} color={COLORS.warning} />
        <ActionBtn icon="headset" label="Support" onPress={() => navigation.navigate('Support')} color={COLORS.darkGray} />
      </View>

      <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
      {MOCK_JOBS.filter(j => j.status === 'accepted').map(job => (
        <TouchableOpacity key={job.id} style={[styles.jobCard, SHADOWS.small]} onPress={() => navigation.navigate('AcceptedJobSummary', { job })}>
          <View style={styles.jobInfo}>
            <Text style={styles.jobType}>{job.type}</Text>
            <Text style={styles.jobLocation}>{job.location}</Text>
            <Text style={styles.jobTime}>SLA: {job.slaTime}</Text>
          </View>
          <Text style={styles.jobEarning}>${job.earning}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <View style={[styles.statCard, SHADOWS.small]}>
      <Ionicons name={icon} size={22} color={color} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ActionBtn({ icon, label, onPress, color }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <View style={[styles.actionIcon, { backgroundColor: color + '18' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  greeting: { ...FONTS.title },
  enterprise: { ...FONTS.small, marginTop: 2 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: SPACING.md, borderRadius: 20 },
  online: { backgroundColor: '#E8F8F0' },
  offline: { backgroundColor: '#FDE8E8' },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: SPACING.xs },
  statusText: { fontSize: 13, fontWeight: '700' },
  statsRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  statCard: { flex: 1, backgroundColor: COLORS.card, padding: SPACING.md, borderRadius: 14, alignItems: 'center' },
  statValue: { ...FONTS.bold, fontSize: 20, marginTop: SPACING.xs },
  statLabel: { ...FONTS.small, marginTop: 2, textAlign: 'center' },
  alertCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.lg, borderLeftWidth: 4, borderLeftColor: COLORS.warning },
  alertIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.warning + '18', justifyContent: 'center', alignItems: 'center' },
  alertInfo: { flex: 1, marginLeft: SPACING.sm },
  alertTitle: { ...FONTS.medium },
  alertSub: { ...FONTS.small, marginTop: 2 },
  sectionTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.lg },
  actionBtn: { alignItems: 'center', width: '22%' },
  actionIcon: { width: 52, height: 52, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.small, textAlign: 'center', fontWeight: '600' },
  jobCard: { flexDirection: 'row', backgroundColor: COLORS.card, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, alignItems: 'center' },
  jobInfo: { flex: 1 },
  jobType: { ...FONTS.medium },
  jobLocation: { ...FONTS.small, marginTop: 2 },
  jobTime: { ...FONTS.small, color: COLORS.primary, marginTop: 2 },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 20 },
});
