import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, useWindowDimensions } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER, MOCK_EARNINGS, MOCK_JOBS } from '../../data/mockData';
import { Card, Badge, StatCard, Button } from '../../components';

export default function HomeScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const user = state.user || MOCK_USER;
  const isOnline = state.isOnline;
  const { width } = useWindowDimensions();
  const isMobileWidth = width < 600;

  const toggleOnline = () => {
    dispatch({ type: 'SET_ONLINE', payload: !isOnline });
    Alert.alert(
      !isOnline ? 'Go Online' : 'Go Offline',
      !isOnline ? 'You are now online and ready to receive jobs!' : 'You are now offline. You will not receive new jobs.'
    );
  };

  const activeJob = MOCK_JOBS.find(j => j.status === 'accepted');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.greeting}>Welcome, {user.name.split(' ')[0]}</Text>
          <Text style={styles.enterprise}>{user.enterprise}</Text>
        </View>
        <TouchableOpacity
          style={[styles.statusBadge, isOnline ? styles.statusOnline : styles.statusOffline]}
          onPress={toggleOnline}
        >
          <View style={[styles.statusDot, { backgroundColor: isOnline ? COLORS.online : COLORS.offline }]} />
          <Text style={styles.statusText}>
            {isOnline ? 'Online' : 'Offline'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Online/Offline Toggle */}
      <Card
        variant="elevated"
        padding={false}
        style={styles.toggleCard}
        onPress={toggleOnline}
      >
        <View style={[styles.toggleButton, isOnline ? styles.toggleOffline : styles.toggleOnline]}>
          <Ionicons
            name={isOnline ? 'power-sharp' : 'power-outline'}
            size={28}
            color={COLORS.white}
            style={{ marginRight: SPACING.md }}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.toggleTitle}>{isOnline ? 'You are Online' : 'You are Offline'}</Text>
            <Text style={styles.toggleSubtitle}>
              {isOnline ? 'Ready to receive jobs' : 'Tap to go online'}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={COLORS.white} />
        </View>
      </Card>

      {/* Quick Stats Grid */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Overview</Text>
      </View>
      <View style={[styles.statsGrid, isMobileWidth && styles.statsGridMobile]}>
        <StatCard
          icon="wallet-outline"
          iconColor={COLORS.success}
          label="Earnings"
          value={`$${MOCK_EARNINGS.today}`}
          subtext="Today"
          style={[styles.statCard, !isMobileWidth && { flex: 1 }]}
        />
        <StatCard
          icon="time-outline"
          iconColor={COLORS.warning}
          label="Pending Payout"
          value={`$${MOCK_EARNINGS.pendingPayout}`}
          subtext="Next week"
          style={[styles.statCard, !isMobileWidth && { flex: 1 }]}
        />
        <StatCard
          icon="star"
          iconColor={COLORS.primary}
          label="Rating"
          value={user.rating.toFixed(1)}
          subtext="Excellent"
          style={[styles.statCard, !isMobileWidth && { flex: 1 }]}
        />
      </View>

      {/* Active Job Section */}
      {activeJob && (
        <>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Job</Text>
            <Badge label="in progress" variant="warning" icon="play-circle" />
          </View>
          <Card variant="elevated" style={styles.activeJobCard} onPress={() => navigation.navigate('JobDetails', { job: activeJob })}>
            <View style={styles.activeJobTop}>
              <View>
                <Badge label="Active" variant="success" size="sm" icon="radio-button-on" />
                <Text style={styles.activeJobType}>{activeJob.type}</Text>
                <Text style={styles.activeJobLoc}>{activeJob.location}</Text>
              </View>
              <Text style={styles.activeJobEarning}>${activeJob.earning}</Text>
            </View>
            <View style={styles.activeJobFooter}>
              <View style={styles.activeJobFooterItem}>
                <Ionicons name="time-outline" size={16} color={COLORS.textSecondary} />
                <Text style={styles.activeJobFooterText}>SLA: {activeJob.slaTime}</Text>
              </View>
              <View style={styles.activeJobFooterItem}>
                <Ionicons name="checkmark-circle-outline" size={16} color={COLORS.success} />
                <Text style={[styles.activeJobFooterText, { color: COLORS.success }]}>Complete job</Text>
              </View>
            </View>
          </Card>
        </>
      )}

      {/* Jobs Dashboard */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Jobs Dashboard</Text>
      </View>
      <View style={styles.jobsGrid}>
        <DashboardCard
          icon="briefcase-outline"
          title="Available"
          desc="Jobs near you"
          count="4"
          color={COLORS.primary}
          onPress={() => navigation.navigate('AvailableJobs')}
        />
        <DashboardCard
          icon="checkmark-done"
          title="Completed"
          desc="This month"
          count={MOCK_EARNINGS.completedJobs}
          color={COLORS.success}
          onPress={() => navigation.navigate('Jobs')}
        />
      </View>

      <View style={{ height: SPACING.xl }} />
    </ScrollView>
  );
}

function DashboardCard({ icon, title, desc, count, color, onPress }) {
  return (
    <Card variant="elevated" onPress={onPress} style={styles.jobCard}>
      <View style={styles.jobCardContent}>
        <View style={[styles.jobCardIcon, { backgroundColor: `${color}15` }]}>
          <Ionicons name={icon} size={24} color={color} />
        </View>
        <View style={styles.jobCardInfo}>
          <Text style={styles.jobCardTitle}>{title}</Text>
          <Text style={styles.jobCardDesc}>{desc}</Text>
        </View>
        <View style={[styles.jobCardCount, { backgroundColor: `${color}10` }]}>
          <Text style={[styles.jobCardCountText, { color }]}>{count}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.xl,
  },
  greeting: {
    ...FONTS.h3,
    marginBottom: SPACING.xs,
  },
  enterprise: {
    ...FONTS.small,
    color: COLORS.textSecondary,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
    gap: SPACING.xs,
  },
  statusOnline: {
    backgroundColor: COLORS.successLight,
  },
  statusOffline: {
    backgroundColor: COLORS.dangerLight,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    ...FONTS.caption,
    fontSize: 12,
  },

  // Toggle Card
  toggleCard: {
    marginBottom: SPACING.xxl,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
  },
  toggleOnline: {
    backgroundColor: COLORS.online,
  },
  toggleOffline: {
    backgroundColor: COLORS.offline,
  },
  toggleTitle: {
    ...FONTS.h5,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  toggleSubtitle: {
    ...FONTS.small,
    color: 'rgba(255,255,255,0.7)',
  },

  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
    marginTop: SPACING.lg,
  },
  sectionTitle: {
    ...FONTS.h4,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  statsGridMobile: {
    flexDirection: 'column',
  },
  statCard: {
    flex: 1,
  },

  // Jobs Grid
  jobsGrid: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  jobCard: {
    flex: 1,
  },
  jobCardContent: {
    alignItems: 'center',
    gap: SPACING.md,
  },
  jobCardIcon: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobCardInfo: {
    alignItems: 'center',
  },
  jobCardTitle: {
    ...FONTS.h5,
    marginBottom: SPACING.xs,
  },
  jobCardDesc: {
    ...FONTS.small,
    color: COLORS.textSecondary,
  },
  jobCardCount: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobCardCountText: {
    ...FONTS.h5,
    fontWeight: '700',
  },

  // Active Job Card
  activeJobCard: {
    marginBottom: SPACING.xl,
  },
  activeJobTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.lg,
  },
  activeJobType: {
    ...FONTS.h5,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  activeJobLoc: {
    ...FONTS.small,
    color: COLORS.textSecondary,
  },
  activeJobEarning: {
    ...FONTS.h2,
    color: COLORS.success,
  },
  activeJobFooter: {
    flexDirection: 'row',
    gap: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  activeJobFooterItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  activeJobFooterText: {
    ...FONTS.small,
    color: COLORS.textSecondary,
  },
});
