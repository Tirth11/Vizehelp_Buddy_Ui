import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

const TABS = ['New', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];
const TAB_ICONS = { New: 'flash', Accepted: 'checkmark-circle', 'In Progress': 'play-circle', Completed: 'trophy', Cancelled: 'close-circle' };

export default function JobsListScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('New');
  const [search, setSearch] = useState('');


  const statusMap = { 'New': 'new', 'Accepted': 'accepted', 'In Progress': 'inProgress', 'Completed': 'completed', 'Cancelled': 'cancelled' };
  const filtered = MOCK_JOBS.filter(j => j.status === statusMap[activeTab]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'new': return COLORS.accent;
      case 'accepted': return COLORS.info;
      case 'inProgress': return COLORS.primary;
      case 'completed': return COLORS.success;
      case 'cancelled': return COLORS.danger;
      default: return COLORS.gray;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerArea}>
        <Text style={styles.title}>My Jobs</Text>
        <Text style={styles.subtitle}>{filtered.length} {activeTab.toLowerCase()} jobs</Text>
      </View>

      {/* Search */}
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={COLORS.textLight} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by type, location..."
            placeholderTextColor={COLORS.textMuted}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={18} color={COLORS.textLight} />
            </TouchableOpacity>
          )}
        </View>
      </View>


      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer} contentContainerStyle={styles.tabsContent}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)} activeOpacity={0.7}>
            <Ionicons name={TAB_ICONS[tab]} size={14} color={activeTab === tab ? COLORS.white : COLORS.textSecondary} />
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Job List */}
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContent}>
        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <View style={styles.emptyIcon}>
              <Ionicons name="briefcase-outline" size={40} color={COLORS.textLight} />
            </View>
            <Text style={styles.emptyTitle}>No {activeTab.toLowerCase()} jobs</Text>
            <Text style={styles.emptyText}>When you have {activeTab.toLowerCase()} jobs, they'll appear here</Text>
          </View>
        ) : (
          filtered.map(job => (
            <TouchableOpacity key={job.id} style={[styles.jobCard, SHADOWS.small]} activeOpacity={0.8} onPress={() => {
              if (job.status === 'completed') navigation.navigate('CompletedJobDetail', { job });
              else if (job.status === 'cancelled') navigation.navigate('CancelledJobDetail', { job });
              else navigation.navigate('JobDetails', { job });
            }}>
              <View style={styles.jobHeader}>
                <View style={styles.jobHeaderLeft}>
                  <View style={[styles.jobTypeIcon, { backgroundColor: getStatusColor(job.status) + '15' }]}>
                    <Ionicons name="briefcase" size={16} color={getStatusColor(job.status)} />
                  </View>
                  <View>
                    <Text style={styles.jobType}>{job.type}</Text>
                    <Text style={styles.jobId}>{job.id}</Text>
                  </View>
                </View>
                <Text style={styles.jobEarning}>${job.earning}</Text>
              </View>


              <View style={styles.jobBody}>
                <View style={styles.jobDetail}>
                  <Ionicons name="location-outline" size={14} color={COLORS.textLight} />
                  <Text style={styles.jobLocation}>{job.location}</Text>
                </View>
                <View style={styles.jobFooter}>
                  <View style={styles.jobDetail}>
                    <Ionicons name="navigate-outline" size={12} color={COLORS.primary} />
                    <Text style={[styles.jobMeta, { color: COLORS.primary }]}>{job.distance}</Text>
                  </View>
                  {job.duration && (
                    <View style={styles.jobDetail}>
                      <Ionicons name="time-outline" size={12} color={COLORS.textLight} />
                      <Text style={styles.jobMeta}>{job.duration}</Text>
                    </View>
                  )}
                  <View style={[styles.statusChip, { backgroundColor: getStatusColor(job.status) + '15' }]}>
                    <Text style={[styles.statusChipText, { color: getStatusColor(job.status) }]}>{activeTab}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: SPACING.xxl },
  headerArea: { paddingHorizontal: SPACING.md, marginBottom: SPACING.md },
  title: { ...FONTS.h2, marginBottom: 2 },
  subtitle: { ...FONTS.bodySmall, color: COLORS.textLight },
  searchWrap: { paddingHorizontal: SPACING.md, marginBottom: SPACING.md },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, borderRadius: RADIUS.lg, paddingHorizontal: SPACING.md, height: 48, borderWidth: 1, borderColor: COLORS.borderLight, gap: SPACING.sm },
  searchInput: { flex: 1, fontSize: 14, color: COLORS.text },
  tabsContainer: { maxHeight: 44, marginBottom: SPACING.md },
  tabsContent: { paddingHorizontal: SPACING.md, gap: SPACING.sm },
  tab: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: RADIUS.full, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border },
  tabActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  tabText: { fontSize: 12, fontWeight: '600', color: COLORS.textSecondary },
  tabTextActive: { color: COLORS.white },
  list: { flex: 1 },
  listContent: { paddingHorizontal: SPACING.md, paddingBottom: SPACING.xl },
  empty: { alignItems: 'center', marginTop: SPACING.xxxl },
  emptyIcon: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.lightGray, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md },
  emptyTitle: { ...FONTS.h4, marginBottom: SPACING.xs },
  emptyText: { ...FONTS.bodySmall, textAlign: 'center' },
  jobCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.sm },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm },
  jobHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  jobTypeIcon: { width: 36, height: 36, borderRadius: RADIUS.sm, justifyContent: 'center', alignItems: 'center' },
  jobType: { ...FONTS.medium, fontSize: 14, fontWeight: '600' },
  jobId: { ...FONTS.caption, fontSize: 10 },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
  jobBody: {},
  jobDetail: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  jobLocation: { ...FONTS.bodySmall, fontSize: 12, flex: 1 },
  jobFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SPACING.sm },
  jobMeta: { ...FONTS.bodySmall, fontSize: 11 },
  statusChip: { paddingVertical: 2, paddingHorizontal: SPACING.sm, borderRadius: RADIUS.full },
  statusChipText: { fontSize: 10, fontWeight: '700' },
});
