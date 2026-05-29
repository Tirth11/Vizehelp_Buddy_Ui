import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER, MOCK_EARNINGS, MOCK_JOBS } from '../../data/mockData';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const { state } = useApp();
  const user = state.user || MOCK_USER;
  const isOnline = state.isOnline;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);


  return (
    <Animated.ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.avatarText}>{user.name[0]}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.greeting}>Hey, {user.name.split(' ')[0]} 👋</Text>
            <Text style={styles.enterprise}>{user.enterprise}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notifBtn} onPress={() => navigation.navigate('NotificationDetail')}>
            <Ionicons name="notifications-outline" size={22} color={COLORS.text} />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Status Toggle */}
      <TouchableOpacity
        style={[styles.statusCard, isOnline ? styles.statusOnline : styles.statusOffline]}
        onPress={() => navigation.navigate('OnlineOffline')}
        activeOpacity={0.8}
      >
        <View style={styles.statusLeft}>
          <View style={[styles.statusDot, { backgroundColor: isOnline ? COLORS.online : COLORS.offline }]} />
          <View>
            <Text style={[styles.statusTitle, { color: isOnline ? COLORS.online : COLORS.offline }]}>
              {isOnline ? 'You\'re Online' : 'You\'re Offline'}
            </Text>
            <Text style={styles.statusSub}>{isOnline ? 'Receiving job requests' : 'Tap to go online'}</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
      </TouchableOpacity>


      {/* Stats Cards */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, SHADOWS.small]}>
          <View style={[styles.statIconWrap, { backgroundColor: COLORS.successLight }]}>
            <Ionicons name="cash-outline" size={18} color={COLORS.success} />
          </View>
          <Text style={styles.statValue}>${MOCK_EARNINGS.today}</Text>
          <Text style={styles.statLabel}>Today</Text>
        </View>
        <View style={[styles.statCard, SHADOWS.small]}>
          <View style={[styles.statIconWrap, { backgroundColor: COLORS.primaryLight }]}>
            <Ionicons name="checkmark-done-outline" size={18} color={COLORS.primary} />
          </View>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Jobs Done</Text>
        </View>
        <View style={[styles.statCard, SHADOWS.small]}>
          <View style={[styles.statIconWrap, { backgroundColor: COLORS.accentLight }]}>
            <Ionicons name="star-outline" size={18} color={COLORS.accent} />
          </View>
          <Text style={styles.statValue}>{user.rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      {/* New Job Alert */}
      {MOCK_JOBS.filter(j => j.status === 'new').length > 0 && (
        <TouchableOpacity
          style={[styles.alertCard, SHADOWS.medium]}
          onPress={() => navigation.navigate('NewJobAlert', { job: MOCK_JOBS[0] })}
          activeOpacity={0.85}
        >
          <View style={styles.alertBadge}>
            <Ionicons name="flash" size={18} color={COLORS.white} />
          </View>
          <View style={styles.alertInfo}>
            <Text style={styles.alertTitle}>New Job Available!</Text>
            <Text style={styles.alertSub}>{MOCK_JOBS[0].type} • {MOCK_JOBS[0].distance} • ${MOCK_JOBS[0].earning}</Text>
          </View>
          <View style={styles.alertAction}>
            <Text style={styles.alertActionText}>View</Text>
          </View>
        </TouchableOpacity>
      )}


      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <ActionBtn icon="power" label="Go Online" onPress={() => navigation.navigate('OnlineOffline')} color={COLORS.success} bg={COLORS.successLight} />
        <ActionBtn icon="briefcase" label="My Jobs" onPress={() => navigation.navigate('Jobs')} color={COLORS.primary} bg={COLORS.primaryLight} />
        <ActionBtn icon="wallet" label="Earnings" onPress={() => navigation.navigate('Earnings')} color={COLORS.accent} bg={COLORS.accentLight} />
        <ActionBtn icon="headset" label="Support" onPress={() => navigation.navigate('Support')} color={COLORS.info} bg={COLORS.infoLight} />
      </View>

      {/* Upcoming Jobs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {MOCK_JOBS.filter(j => j.status === 'accepted').map(job => (
        <TouchableOpacity key={job.id} style={[styles.jobCard, SHADOWS.small]} onPress={() => navigation.navigate('AcceptedJobSummary', { job })} activeOpacity={0.8}>
          <View style={styles.jobLeft}>
            <View style={[styles.jobIcon, { backgroundColor: COLORS.primaryLight }]}>
              <Ionicons name="briefcase" size={18} color={COLORS.primary} />
            </View>
            <View style={styles.jobInfo}>
              <Text style={styles.jobType}>{job.type}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <View style={styles.jobMeta}>
                <Ionicons name="time-outline" size={12} color={COLORS.primary} />
                <Text style={styles.jobTime}>{job.slaTime}</Text>
                <Text style={styles.jobDot}>•</Text>
                <Ionicons name="navigate-outline" size={12} color={COLORS.textLight} />
                <Text style={styles.jobDistance}>{job.distance}</Text>
              </View>
            </View>
          </View>
          <View style={styles.jobRight}>
            <Text style={styles.jobEarning}>${job.earning}</Text>
            <Text style={styles.jobDuration}>{job.duration}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </Animated.ScrollView>
  );
}


function ActionBtn({ icon, label, onPress, color, bg }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.actionIcon, { backgroundColor: bg }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingHorizontal: SPACING.md, paddingTop: SPACING.xxl + SPACING.sm, paddingBottom: SPACING.xl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: COLORS.white, fontSize: 18, fontWeight: '700' },
  greeting: { ...FONTS.h4, fontSize: 20 },
  enterprise: { ...FONTS.bodySmall, fontSize: 12, marginTop: 1 },
  headerRight: { flexDirection: 'row', gap: SPACING.sm },
  notifBtn: { width: 40, height: 40, borderRadius: RADIUS.md, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', ...SHADOWS.small },
  notifDot: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.danger, borderWidth: 1.5, borderColor: COLORS.white },

  statusCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.lg, borderWidth: 1 },
  statusOnline: { backgroundColor: COLORS.onlineLight, borderColor: COLORS.online + '30' },
  statusOffline: { backgroundColor: COLORS.offlineLight, borderColor: COLORS.offline + '30' },
  statusLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  statusDot: { width: 10, height: 10, borderRadius: 5 },
  statusTitle: { ...FONTS.medium, fontSize: 15, fontWeight: '700' },
  statusSub: { ...FONTS.bodySmall, fontSize: 12, marginTop: 1 },
  statsRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.lg },
  statCard: { flex: 1, backgroundColor: COLORS.card, padding: SPACING.md, borderRadius: RADIUS.lg, alignItems: 'center' },
  statIconWrap: { width: 36, height: 36, borderRadius: RADIUS.sm, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  statValue: { ...FONTS.bold, fontSize: 22, marginTop: SPACING.xs },
  statLabel: { ...FONTS.caption, marginTop: 2, textAlign: 'center', fontSize: 10 },
  alertCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.lg, borderWidth: 1, borderColor: COLORS.accent + '20' },
  alertBadge: { width: 40, height: 40, borderRadius: RADIUS.md, backgroundColor: COLORS.accent, justifyContent: 'center', alignItems: 'center' },
  alertInfo: { flex: 1, marginLeft: SPACING.sm },
  alertTitle: { ...FONTS.medium, fontWeight: '700', fontSize: 14 },
  alertSub: { ...FONTS.bodySmall, marginTop: 2, fontSize: 12 },
  alertAction: { backgroundColor: COLORS.primaryLight, paddingVertical: SPACING.xs + 2, paddingHorizontal: SPACING.md, borderRadius: RADIUS.sm },
  alertActionText: { ...FONTS.buttonSmall, color: COLORS.primary, fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md },
  sectionTitle: { ...FONTS.h4, fontSize: 16, marginBottom: SPACING.md },
  seeAll: { ...FONTS.buttonSmall, color: COLORS.primary, fontSize: 13 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.lg },
  actionBtn: { alignItems: 'center', width: '23%' },
  actionIcon: { width: 52, height: 52, borderRadius: RADIUS.lg, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.bodySmall, textAlign: 'center', fontWeight: '600', fontSize: 11, color: COLORS.textSecondary },

  jobCard: { flexDirection: 'row', backgroundColor: COLORS.card, padding: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.sm, alignItems: 'center', justifyContent: 'space-between' },
  jobLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  jobIcon: { width: 40, height: 40, borderRadius: RADIUS.md, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.sm },
  jobInfo: { flex: 1 },
  jobType: { ...FONTS.medium, fontSize: 14, fontWeight: '600' },
  jobLocation: { ...FONTS.bodySmall, fontSize: 12, marginTop: 1 },
  jobMeta: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  jobTime: { ...FONTS.bodySmall, fontSize: 11, color: COLORS.primary, fontWeight: '600' },
  jobDot: { color: COLORS.textLight, fontSize: 8 },
  jobDistance: { ...FONTS.bodySmall, fontSize: 11 },
  jobRight: { alignItems: 'flex-end' },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
  jobDuration: { ...FONTS.caption, fontSize: 10, marginTop: 2 },
});
