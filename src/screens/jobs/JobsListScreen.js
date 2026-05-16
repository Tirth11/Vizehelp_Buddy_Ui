import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

const TABS = ['New', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];

export default function JobsListScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Completed');
  const [search, setSearch] = useState('');

  const statusMap = { 'New': 'new', 'Accepted': 'accepted', 'In Progress': 'inProgress', 'Completed': 'completed', 'Cancelled': 'cancelled' };
  const filtered = MOCK_JOBS.filter(j => j.status === statusMap[activeTab]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs</Text>

      <TextInput style={styles.search} placeholder="Search jobs..." value={search} onChangeText={setSearch} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.list}>
        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="briefcase-outline" size={48} color={COLORS.gray} />
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} jobs</Text>
          </View>
        ) : (
          filtered.map(job => (
            <TouchableOpacity key={job.id} style={styles.jobCard} onPress={() => {
              if (job.status === 'completed') navigation.navigate('CompletedJobDetail', { job });
              else if (job.status === 'cancelled') navigation.navigate('CancelledJobDetail', { job });
              else navigation.navigate('JobDetails', { job });
            }}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobType}>{job.type}</Text>
                <Text style={styles.jobEarning}>₹{job.earning}</Text>
              </View>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <View style={styles.jobFooter}>
                <Text style={styles.jobId}>{job.id}</Text>
                <Text style={styles.jobDistance}>{job.distance}</Text>
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
  title: { ...FONTS.title, paddingHorizontal: SPACING.md, marginBottom: SPACING.md },
  search: { marginHorizontal: SPACING.md, backgroundColor: COLORS.white, borderRadius: 12, padding: SPACING.md, marginBottom: SPACING.md },
  tabsContainer: { maxHeight: 44, paddingHorizontal: SPACING.md, marginBottom: SPACING.md },
  tab: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, backgroundColor: COLORS.white, marginRight: SPACING.sm },
  tabActive: { backgroundColor: COLORS.primary },
  tabText: { fontSize: 13, color: COLORS.text },
  tabTextActive: { color: COLORS.white, fontWeight: '600' },
  list: { flex: 1, paddingHorizontal: SPACING.md },
  empty: { alignItems: 'center', marginTop: SPACING.xxl },
  emptyText: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.md },
  jobCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.sm },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.xs },
  jobType: { ...FONTS.medium },
  jobEarning: { ...FONTS.bold, color: COLORS.success },
  jobLocation: { ...FONTS.small, marginBottom: SPACING.sm },
  jobFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  jobId: { ...FONTS.small, color: COLORS.gray },
  jobDistance: { ...FONTS.small, color: COLORS.primary },
});
