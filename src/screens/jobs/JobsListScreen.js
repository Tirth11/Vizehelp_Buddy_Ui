import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, getStatusColor } from '../../constants/theme';
import { MOCK_JOBS } from '../../data/mockData';

const TABS = [
  { key: 'new',         label: 'New' },
  { key: 'accepted',    label: 'Accepted' },
  { key: 'inProgress',  label: 'In Progress' },
  { key: 'completed',   label: 'Completed' },
  { key: 'cancelled',   label: 'Cancelled' },
];

export default function JobsListScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('completed');
  const [search, setSearch] = useState('');

  const filtered = MOCK_JOBS
    .filter(j => j.status === activeTab)
    .filter(j => {
      if (!search) return true;
      const q = search.toLowerCase();
      return j.type.toLowerCase().includes(q) || j.location.toLowerCase().includes(q) || j.id.toLowerCase().includes(q);
    });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobs</Text>
      </View>

      {/* Search */}
      <View style={styles.searchWrap}>
        <Ionicons name="search-outline" size={18} color={COLORS.textLight} />
        <TextInput
          style={styles.search}
          placeholder="Search by service, location, or ID"
          placeholderTextColor={COLORS.textLight}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;
          const status = getStatusColor(tab.key);
          return (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tab,
                active && { backgroundColor: status.bg, borderColor: status.fg },
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, active && { color: status.fg, fontWeight: '700' }]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView style={styles.list} contentContainerStyle={{ padding: SPACING.md, paddingTop: 0 }}>
        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <View style={styles.emptyIcon}>
              <Ionicons name="briefcase-outline" size={36} color={COLORS.textLight} />
            </View>
            <Text style={styles.emptyTitle}>No jobs here yet</Text>
            <Text style={styles.emptyText}>Jobs you {activeTab === 'new' ? 'receive' : activeTab} will appear in this tab.</Text>
          </View>
        ) : (
          filtered.map(job => <JobCard key={job.id} job={job} navigation={navigation} />)
        )}
      </ScrollView>
    </View>
  );
}

function JobCard({ job, navigation }) {
  const status = getStatusColor(job.status);

  const handlePress = () => {
    if (job.status === 'completed') navigation.navigate('CompletedJobDetail', { job });
    else if (job.status === 'cancelled') navigation.navigate('CancelledJobDetail', { job });
    else navigation.navigate('JobDetails', { job });
  };

  return (
    <TouchableOpacity style={[styles.jobCard, SHADOWS.small]} onPress={handlePress} activeOpacity={0.85}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobType}>{job.type}</Text>
        <View style={[styles.statusPill, { backgroundColor: status.bg }]}>
          <Text style={[styles.statusPillText, { color: status.fg }]}>{status.label}</Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <Ionicons name="location-outline" size={14} color={COLORS.textLight} />
        <Text style={styles.metaText} numberOfLines={1}>{job.location}</Text>
      </View>

      <View style={styles.jobFooter}>
        <View style={styles.metaRow}>
          <Text style={styles.jobId}>{job.id}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>{job.distance}</Text>
        </View>
        <Text style={styles.jobEarning}>${job.earning}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: SPACING.xxl },
  header: { paddingHorizontal: SPACING.md, marginBottom: SPACING.md },
  title: { ...FONTS.title, fontSize: 24 },

  searchWrap: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginHorizontal: SPACING.md, backgroundColor: COLORS.white, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, marginBottom: SPACING.md, height: 48 },
  search: { flex: 1, fontSize: 14, color: COLORS.text },

  tabsContainer: { paddingHorizontal: SPACING.md, gap: SPACING.sm, paddingBottom: SPACING.md },
  tab: { paddingVertical: SPACING.sm + 2, paddingHorizontal: SPACING.md, borderRadius: RADIUS.pill, backgroundColor: COLORS.white, borderWidth: 1.5, borderColor: COLORS.border, marginRight: SPACING.xs },
  tabText: { fontSize: 13, color: COLORS.textLight, fontWeight: '600' },

  list: { flex: 1 },
  empty: { alignItems: 'center', marginTop: SPACING.xxl, padding: SPACING.lg },
  emptyIcon: { width: 72, height: 72, borderRadius: 36, backgroundColor: COLORS.lightGray, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md },
  emptyTitle: { ...FONTS.medium, marginBottom: SPACING.xs },
  emptyText: { ...FONTS.small, textAlign: 'center', maxWidth: 240 },

  jobCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.sm },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.xs },
  jobType: { ...FONTS.medium, fontSize: 15 },
  statusPill: { paddingHorizontal: SPACING.sm, paddingVertical: 3, borderRadius: RADIUS.pill },
  statusPillText: { fontSize: 11, fontWeight: '700' },

  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { ...FONTS.small, flex: 1 },
  jobFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SPACING.sm },
  jobId: { ...FONTS.small, color: COLORS.textLight, fontWeight: '600' },
  dot: { ...FONTS.small, color: COLORS.textLight },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
});
