import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function JobDetailsScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[0];
  const isActive = job.status === 'accepted';

  const handleCall = () => {
    Alert.alert('Calling Customer', 'Connecting to client +1 (512) 555-0147 (Number masked for privacy)');
  };

  const handleMessage = () => {
    Alert.alert('Messaging Customer', 'Opening secure in-app message terminal to client');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{isActive ? 'Active Job' : 'Job Details'}</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.header}>
        <Text style={styles.jobId}>Booking ID: {job.id}</Text>
        <View style={styles.typeBadge}><Text style={styles.typeText}>{job.type}</Text></View>
      </View>

      {/* Customer section */}
      <View style={[styles.section, SHADOWS.small]}>
        <Text style={styles.sectionTitle}>Customer Information</Text>
        <Text style={styles.sectionValue}>{isActive ? job.customer : 'Masked Customer Name (Accept to view)'}</Text>
        
        {isActive && (
          <View style={styles.commsRow}>
            <TouchableOpacity style={styles.commBtn} onPress={handleCall}>
              <Ionicons name="call" size={16} color={COLORS.primary} />
              <Text style={styles.commText}>Call Client</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commBtn} onPress={handleMessage}>
              <Ionicons name="chatbubble" size={16} color={COLORS.primary} />
              <Text style={styles.commText}>Message</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Location Section */}
      <View style={[styles.section, SHADOWS.small]}>
        <Text style={styles.sectionTitle}>Service Address</Text>
        <Text style={styles.sectionValue}>{job.location}</Text>
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map-outline" size={32} color={COLORS.gray} />
          <Text style={styles.mapText}>Simulated Route Preview Map</Text>
        </View>
      </View>

      {/* Instructions Section */}
      <View style={[styles.section, SHADOWS.small]}>
        <Text style={styles.sectionTitle}>Client Instructions</Text>
        <Text style={styles.sectionValue}>{job.instructions || 'No special instructions uploaded.'}</Text>
      </View>

      {/* Details Grid */}
      <View style={styles.detailsGrid}>
        <DetailItem label="Distance" value={job.distance} />
        <DetailItem label="Duration" value={job.duration} />
        <DetailItem label="Est. Earning" value={`$${job.earning}`} highlight />
        <DetailItem label="SLA Time" value={job.slaTime || '12:00 PM'} />
        <DetailItem label="Payment Type" value="Online/Credit" />
      </View>

      {/* Buttons based on Active State */}
      {isActive ? (
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('NavigationToJob', { job })}>
            <Ionicons name="navigate-outline" size={20} color={COLORS.white} />
            <Text style={styles.acceptText}>Start Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RaiseIssue', { job })}>
            <Text style={styles.rejectText}>Report Issue during Job</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job })}>
            <Text style={styles.acceptText}>Accept Job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectBtn} onPress={() => navigation.navigate('RejectJob', { job })}>
            <Text style={styles.rejectText}>Reject Job</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

function DetailItem({ label, value, highlight }) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={[styles.detailValue, highlight && { color: COLORS.success, fontSize: 18 }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.lg },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: SPACING.md },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md, backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12 },
  jobId: { ...FONTS.medium, fontWeight: '700', color: COLORS.darkGray },
  typeBadge: { backgroundColor: COLORS.primaryLight, paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, borderRadius: 20 },
  typeText: { color: COLORS.primary, fontSize: 11, fontWeight: '700' },
  section: { marginBottom: SPACING.md, backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14 },
  sectionTitle: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700', marginBottom: 4 },
  sectionValue: { ...FONTS.medium, fontWeight: '600' },
  commsRow: { flexDirection: 'row', gap: 10, marginTop: SPACING.md, borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: SPACING.md },
  commBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: COLORS.background, paddingVertical: 10, borderRadius: 8 },
  commText: { color: COLORS.primary, fontSize: 12, fontWeight: '700' },
  mapPlaceholder: { height: 120, backgroundColor: COLORS.lightGray, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: SPACING.md },
  mapText: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.xs },
  detailsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.lg },
  detailItem: { width: '48%', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12 },
  detailLabel: { ...FONTS.caption, color: COLORS.gray },
  detailValue: { ...FONTS.bold, marginTop: SPACING.xs },
  buttons: { gap: SPACING.md },
  acceptBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: 8, ...SHADOWS.small },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  rejectBtn: { borderWidth: 1.5, borderColor: COLORS.danger, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  rejectText: { color: COLORS.danger, fontSize: 16, fontWeight: '700' },
});
