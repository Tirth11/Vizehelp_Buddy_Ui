import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, getStatusColor } from '../../constants/theme';
import { useApp } from '../../context/AppContext';
import { MOCK_USER, MOCK_EARNINGS, MOCK_JOBS } from '../../data/mockData';

export default function HomeScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const user = state.user || MOCK_USER;
  const isOnline = state.isOnline;

  const newJobs       = MOCK_JOBS.filter(j => j.status === 'new');
  const acceptedJobs  = MOCK_JOBS.filter(j => j.status === 'accepted');
  const completedToday = 3;

  const handleToggleOnline = () => dispatch({ type: 'TOGGLE_ONLINE' });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.greeting}>Hi, {user.name.split(' ')[0]}</Text>
          <View style={styles.enterpriseRow}>
            <Ionicons name="business-outline" size={13} color={COLORS.textLight} />
            <Text style={styles.enterprise}>{user.enterprise}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notifBtn} onPress={() => navigation.navigate('NotificationDetail', { notification: { id: 0, title: 'Notifications' } })}>
          <Ionicons name="notifications-outline" size={22} color={COLORS.text} />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* Online/Offline Card — primary work action */}
      <View style={[styles.statusCard, isOnline ? styles.statusOnline : styles.statusOffline]}>
        <View style={styles.statusLeft}>
          <View style={[styles.statusDot, { backgroundColor: isOnline ? COLORS.success : COLORS.danger }]} />
          <View>
            <Text style={[styles.statusTitle, { color: isOnline ? COLORS.success : COLORS.danger }]}>
              {isOnline ? "You're Online" : "You're Offline"}
            </Text>
            <Text style={styles.statusSub}>
              {isOnline ? 'Receiving job alerts' : 'Go online to start earning'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.toggleBtn, { backgroundColor: isOnline ? COLORS.danger : COLORS.success }]}
          onPress={handleToggleOnline}
          activeOpacity={0.85}
        >
          <Ionicons name="power" size={18} color={COLORS.white} />
          <Text style={styles.toggleText}>{isOnline ? 'Go Offline' : 'Go Online'}</Text>
        </TouchableOpacity>
      </View>

      {/* New Job Alert */}
      {isOnline && newJobs.length > 0 && (
        <TouchableOpacity
          style={[styles.alertCard, SHADOWS.medium]}
          onPress={() => navigation.navigate('NewJobAlert', { job: newJobs[0] })}
          activeOpacity={0.9}
        >
          <View style={styles.alertIcon}>
            <Ionicons name="flash" size={22} color={COLORS.white} />
          </View>
          <View style={styles.alertInfo}>
            <Text style={styles.alertTitle}>New Job Request</Text>
            <Text style={styles.alertSub}>
              {newJobs[0].type} • {newJobs[0].distance} • <Text style={styles.alertEarn}>${newJobs[0].earning}</Text>
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.warning} />
        </TouchableOpacity>
      )}

      {/* Today's Stats */}
      <Text style={styles.sectionTitle}>Today's Summary</Text>
      <View style={styles.statsRow}>
        <StatCard icon="cash-outline" label="Earnings" value={`$${MOCK_EARNINGS.today}`} color={COLORS.primary} />
        <StatCard icon="checkmark-done-outline" label="Jobs Done" value={String(completedToday)} color={COLORS.success} />
        <StatCard icon="star" label="Rating" value={String(user.rating)} color={COLORS.warning} />
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <ActionBtn icon="briefcase-outline" label="My Jobs"     color={COLORS.primary} onPress={() => navigation.navigate('Jobs')} />
        <ActionBtn icon="wallet-outline"     label="Earnings"   color={COLORS.success} onPress={() => navigation.navigate('Earnings')} />
        <ActionBtn icon="calendar-outline"   label="Schedule"   color={COLORS.warning} onPress={() => navigation.navigate('Schedule')} />
        <ActionBtn icon="headset-outline"    label="Support"    color={COLORS.darkGray} onPress={() => navigation.navigate('Support')} />
      </View>

      {/* Upcoming Jobs */}
      {acceptedJobs.length > 0 && (
        <>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
              <Text style={styles.linkText}>See All</Text>
            </TouchableOpacity>
          </View>
          {acceptedJobs.map(job => (
            <UpcomingJob key={job.id} job={job} onPress={() => navigation.navigate('AcceptedJobSummary', { job })} />
          ))}
        </>
      )}
    </ScrollView>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <View style={[styles.statCard, SHADOWS.small]}>
      <View style={[styles.statIcon, { backgroundColor: color + '18' }]}>
        <Ionicons name={icon} size={18} color={color} />
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ActionBtn({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.actionIcon, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function UpcomingJob({ job, onPress }) {
  const status = getStatusColor(job.status);
  return (
    <TouchableOpacity style={[styles.jobCard, SHADOWS.small]} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobType}>{job.type}</Text>
        <View style={[styles.statusPill, { backgroundColor: status.bg }]}>
          <Text style={[styles.statusPillText, { color: status.fg }]}>{status.label}</Text>
        </View>
      </View>
      <View style={styles.jobMetaRow}>
        <Ionicons name="location-outline" size={14} color={COLORS.textLight} />
        <Text style={styles.jobLocation} numberOfLines={1}>{job.location}</Text>
      </View>
      <View style={styles.jobFooter}>
        <View style={styles.jobMetaRow}>
          <Ionicons name="time-outline" size={14} color={COLORS.warning} />
          <Text style={styles.jobTime}>By {job.slaTime}</Text>
        </View>
        <Text style={styles.jobEarning}>${job.earning}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl, paddingBottom: SPACING.xl },

  // Header
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.lg },
  greeting: { ...FONTS.title, fontSize: 24 },
  enterpriseRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  enterprise: { ...FONTS.small },
  notifBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center', ...SHADOWS.small },
  notifDot: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.danger, borderWidth: 1.5, borderColor: COLORS.white },

  // Status card
  statusCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.md, borderWidth: 1.5 },
  statusOnline: { backgroundColor: COLORS.successLight, borderColor: COLORS.success + '40' },
  statusOffline: { backgroundColor: COLORS.dangerLight, borderColor: COLORS.danger + '40' },
  statusLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, flex: 1 },
  statusDot: { width: 12, height: 12, borderRadius: 6 },
  statusTitle: { fontSize: 16, fontWeight: '800' },
  statusSub: { ...FONTS.small, color: COLORS.text, marginTop: 2 },
  toggleBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 10, paddingHorizontal: SPACING.md, borderRadius: RADIUS.pill },
  toggleText: { color: COLORS.white, fontSize: 13, fontWeight: '800' },

  // Alert
  alertCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.warning, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.lg, gap: SPACING.sm },
  alertIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.25)', justifyContent: 'center', alignItems: 'center' },
  alertInfo: { flex: 1 },
  alertTitle: { color: COLORS.white, fontSize: 15, fontWeight: '800' },
  alertSub: { color: COLORS.white, fontSize: 13, marginTop: 2, opacity: 0.95 },
  alertEarn: { fontWeight: '800' },

  // Sections
  sectionTitle: { ...FONTS.subtitle, fontSize: 16, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm, marginTop: SPACING.sm },
  linkText: { color: COLORS.primary, fontSize: 13, fontWeight: '700' },

  // Stats
  statsRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  statCard: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.md, alignItems: 'flex-start' },
  statIcon: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.sm },
  statValue: { ...FONTS.bold, fontSize: 20 },
  statLabel: { ...FONTS.small, marginTop: 2 },

  // Action grid
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.md },
  actionBtn: { alignItems: 'center', width: '23%' },
  actionIcon: { width: 56, height: 56, borderRadius: RADIUS.md + 2, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.small, textAlign: 'center', fontWeight: '600', color: COLORS.text },

  // Upcoming Job card
  jobCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.sm },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.xs },
  jobType: { ...FONTS.medium, fontSize: 15 },
  statusPill: { paddingHorizontal: SPACING.sm, paddingVertical: 3, borderRadius: RADIUS.pill },
  statusPillText: { fontSize: 11, fontWeight: '700' },
  jobMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  jobLocation: { ...FONTS.small, flex: 1 },
  jobFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SPACING.sm },
  jobTime: { ...FONTS.small, color: COLORS.warning, fontWeight: '600' },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
});
