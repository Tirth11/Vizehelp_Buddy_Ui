import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

const TABS = ['Upcoming', 'Active', 'Completed', 'Rejected', 'Cancelled', 'Issue Raised'];

export default function JobsListScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [search, setSearch] = useState('');

  const getFilteredJobs = () => {
    return MOCK_JOBS.filter(job => {
      // Filter by Search Query
      const matchesSearch = job.type.toLowerCase().includes(search.toLowerCase()) || 
                            job.id.toLowerCase().includes(search.toLowerCase()) ||
                            job.customer.toLowerCase().includes(search.toLowerCase());
      if (!matchesSearch) return false;

      // Filter by Tab
      switch (activeTab) {
        case 'Upcoming':
          return job.status === 'new' || job.status === 'accepted';
        case 'Active':
          return job.status === 'inProgress' || job.status === 'arrived' || job.status === 'started';
        case 'Completed':
          return job.status === 'completed';
        case 'Rejected':
          return job.status === 'rejected';
        case 'Cancelled':
          return job.status === 'cancelled';
        case 'Issue Raised':
          return job.status === 'issue';
        default:
          return false;
      }
    });
  };

  const filtered = getFilteredJobs();

  const handleAction = (actionType, job) => {
    switch (actionType) {
      case 'View Details':
        navigation.navigate('JobDetails', { job });
        break;
      case 'View Proof':
        Alert.alert('Proof of Service', 'Service photos: before_photo.jpg, after_photo.jpg\nCustomer Signature: Verified\nCompleted checklist items: Checked, Charger connected.');
        break;
      case 'View Earnings':
        navigation.navigate('Earnings');
        break;
      case 'View Reason':
        if (job.status === 'rejected') {
          Alert.alert('Rejection Reason', `Reason: ${job.rejectReason || 'Too far'}\nRejected at: June 7, 2026`);
        } else {
          Alert.alert('Cancellation Reason', `Reason: ${job.cancelReason || 'Customer unavailable'}\nCancelled at: June 7, 2026`);
        }
        break;
      case 'View Issue':
        Alert.alert('Issue Details', `Type: ${job.issueType || 'Customer not available'}\nSubmitted: June 7, 2026\nDescription: Waiting for enterprise administrator review.`);
        break;
      default:
        break;
    }
  };

  const getActionText = () => {
    switch (activeTab) {
      case 'Upcoming':
      case 'Active':
        return 'View Details';
      case 'Completed':
        return 'View Proof';
      case 'Rejected':
      case 'Cancelled':
        return 'View Reason';
      case 'Issue Raised':
        return 'View Issue';
      default:
        return 'View Details';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job History</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={COLORS.gray} style={styles.searchIcon} />
        <TextInput 
          style={styles.search} 
          placeholder="Search booking ID, service..." 
          placeholderTextColor={COLORS.gray}
          value={search} 
          onChangeText={setSearch} 
        />
      </View>

      <View style={styles.tabsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          {TABS.map(tab => (
            <TouchableOpacity key={tab} style={[styles.tab, activeTab === tab && styles.tabActive]} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="briefcase-outline" size={48} color={COLORS.gray} />
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} jobs found</Text>
          </View>
        ) : (
          filtered.map(job => (
            <View key={job.id} style={[styles.jobCard, SHADOWS.small]}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobType}>{job.type}</Text>
                <Text style={styles.jobEarning}>${job.earning}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Ionicons name="finger-print-outline" size={14} color={COLORS.gray} />
                <Text style={styles.infoText}>Booking ID: {job.id}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="location-outline" size={14} color={COLORS.gray} />
                <Text style={styles.infoText}>Customer Area: {job.location.split(',')[0]}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="time-outline" size={14} color={COLORS.gray} />
                <Text style={styles.infoText}>Requested: {job.slaTime || '9:00 AM'} (June 7, 2026)</Text>
              </View>
              {job.completedAt && (
                <View style={styles.infoRow}>
                  <Ionicons name="checkmark-circle-outline" size={14} color={COLORS.success} />
                  <Text style={styles.infoText}>Completed: {job.completedAt} (June 7, 2026)</Text>
                </View>
              )}

              <View style={styles.jobFooter}>
                <View style={[styles.statusBadge, 
                  job.status === 'completed' ? styles.statusSuccess :
                  job.status === 'cancelled' || job.status === 'rejected' ? styles.statusDanger :
                  job.status === 'issue' ? styles.statusWarning : styles.statusInfo
                ]}>
                  <Text style={[styles.statusBadgeText,
                    job.status === 'completed' ? { color: COLORS.success } :
                    job.status === 'cancelled' || job.status === 'rejected' ? { color: COLORS.danger } :
                    job.status === 'issue' ? { color: COLORS.warning } : { color: COLORS.primary }
                  ]}>
                    {job.status.toUpperCase()}
                  </Text>
                </View>

                <View style={styles.actionsContainer}>
                  {activeTab === 'Completed' && (
                    <TouchableOpacity style={[styles.actionBtn, styles.secondaryActionBtn]} onPress={() => handleAction('View Earnings', job)}>
                      <Text style={styles.secondaryActionBtnText}>Earnings</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity style={styles.actionBtn} onPress={() => handleAction(getActionText(), job)}>
                    <Text style={styles.actionBtnText}>{getActionText()}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, paddingHorizontal: SPACING.md, marginBottom: SPACING.sm },
  searchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.white, 
    borderRadius: 12, 
    marginHorizontal: SPACING.md, 
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  searchIcon: { marginRight: SPACING.sm },
  search: { flex: 1, paddingVertical: SPACING.md, fontSize: 15, color: COLORS.text },
  tabsWrapper: { height: 44, marginBottom: SPACING.md },
  tabsContainer: { paddingHorizontal: SPACING.md },
  tab: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, backgroundColor: COLORS.white, marginRight: SPACING.sm, borderStyle: 'solid', borderWidth: 1, borderColor: COLORS.border, height: 34, justifyContent: 'center' },
  tabActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  tabText: { fontSize: 13, color: COLORS.text, fontWeight: '600' },
  tabTextActive: { color: COLORS.white, fontWeight: '700' },
  list: { flex: 1 },
  listContent: { paddingHorizontal: SPACING.md, paddingBottom: SPACING.xxl },
  empty: { alignItems: 'center', marginTop: SPACING.xxl },
  emptyText: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.md },
  jobCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.md },
  jobHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingBottom: SPACING.sm },
  jobType: { ...FONTS.medium, fontWeight: '700' },
  jobEarning: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  infoText: { fontSize: 13, color: COLORS.darkGray },
  jobFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SPACING.md, borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: SPACING.md },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  statusSuccess: { backgroundColor: '#E8F8F0' },
  statusDanger: { backgroundColor: '#FDE8E8' },
  statusWarning: { backgroundColor: '#FFF9E6' },
  statusInfo: { backgroundColor: '#E8E6FF' },
  statusBadgeText: { fontSize: 10, fontWeight: '700' },
  actionsContainer: { flexDirection: 'row', gap: 6 },
  actionBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  actionBtnText: { color: COLORS.white, fontSize: 12, fontWeight: '700' },
  secondaryActionBtn: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.primary },
  secondaryActionBtnText: { color: COLORS.primary, fontSize: 12, fontWeight: '700' }
});
