import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

const AVAILABLE_JOBS = [
  { id: 'JOB-2001', type: 'EV Charging Support', earning: 32, distance: '3.2 mi', duration: '1 hr', time: '3:30 PM', area: 'Uptown Dallas', tipEligible: true, provider: 'ABC Home Services' },
  { id: 'JOB-2002', type: 'Home Cleaning', earning: 65, distance: '1.8 mi', duration: '2 hrs', time: '5:00 PM', area: 'Oak Lawn', tipEligible: true, provider: 'ABC Home Services' },
  { id: 'JOB-2003', type: 'Parking Assistance', earning: 28, distance: '4.5 mi', duration: '45 min', time: '6:15 PM', area: 'Deep Ellum', tipEligible: false, provider: 'ABC Home Services' },
  { id: 'JOB-2004', type: 'Senior Buddy Support', earning: 45, distance: '2.1 mi', duration: '1.5 hrs', time: '7:00 PM', area: 'Highland Park', tipEligible: true, provider: 'ABC Home Services' },
];

export default function AvailableJobsScreen({ navigation }) {
  const { state } = useApp();

  const handleAccept = (job) => {
    if (!state.isOnline) {
      Alert.alert('Go Online Required', 'You must go Online to accept available jobs. Toggle status from your Dashboard.');
      return;
    }
    
    navigation.navigate('AcceptJob', { 
      job: { 
        ...job, 
        customer: 'Customer', 
        location: job.area, 
        status: 'new', 
        slaTime: job.time, 
        instructions: 'Follow standard enterprise procedures.' 
      } 
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Available Jobs</Text>
      <Text style={styles.subtitle}>{AVAILABLE_JOBS.length} open jobs in your approved service areas</Text>

      {!state.isOnline && (
        <View style={styles.offlineWarning}>
          <Ionicons name="warning-outline" size={18} color={COLORS.offline} />
          <Text style={styles.offlineWarningText}>You are currently offline. Go online on the Home screen to accept these jobs.</Text>
        </View>
      )}

      {AVAILABLE_JOBS.map(job => (
        <TouchableOpacity 
          key={job.id} 
          style={[styles.card, SHADOWS.small]} 
          onPress={() => navigation.navigate('JobDetails', { job: { ...job, customer: 'Customer', location: job.area, status: 'new', slaTime: job.time, instructions: '' } })}
        >
          <View style={styles.cardTop}>
            <View style={styles.typeBadge}>
              <Text style={styles.typeText}>{job.type}</Text>
            </View>
            {job.tipEligible && (
              <View style={styles.tipBadge}>
                <Ionicons name="gift-outline" size={12} color={COLORS.success} />
                <Text style={styles.tipText}>Tip Eligible</Text>
              </View>
            )}
          </View>

          <View style={styles.cardBody}>
            <View style={styles.earningRow}>
              <Text style={styles.earning}>${job.earning}.00</Text>
              <Text style={styles.duration}>{job.duration}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="location-outline" size={14} color={COLORS.gray} />
              <Text style={styles.detailText}>{job.area} • {job.distance}</Text>
            </View>
            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={14} color={COLORS.gray} />
              <Text style={styles.detailText}>Start: {job.time}</Text>
            </View>
            <View style={styles.detailRow}>
              <Ionicons name="business-outline" size={14} color={COLORS.gray} />
              <Text style={styles.detailText}>{job.provider}</Text>
            </View>
          </View>

          <View style={styles.cardActions}>
            <TouchableOpacity style={styles.acceptBtn} onPress={() => handleAccept(job)}>
              <Text style={styles.acceptText}>Accept Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.goBack()}>
              <Text style={styles.skipText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.sm },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.small, marginBottom: SPACING.md },
  offlineWarning: { flexDirection: 'row', gap: 8, backgroundColor: '#FDE8E8', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.md },
  offlineWarningText: { fontSize: 12, color: COLORS.offline, flex: 1, fontWeight: '600' },
  card: { backgroundColor: COLORS.white, borderRadius: 16, padding: SPACING.md, marginBottom: SPACING.md },
  cardTop: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.sm },
  typeBadge: { backgroundColor: COLORS.primaryLight, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 8 },
  typeText: { color: COLORS.primary, fontSize: 12, fontWeight: '700' },
  tipBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#E8FFF5', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8 },
  tipText: { color: COLORS.success, fontSize: 11, fontWeight: '600' },
  cardBody: { marginBottom: SPACING.md },
  earningRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm },
  earning: { ...FONTS.bold, fontSize: 22, color: COLORS.success },
  duration: { ...FONTS.small, backgroundColor: COLORS.lightGray, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginBottom: 4 },
  detailText: { ...FONTS.small },
  cardActions: { flexDirection: 'row', gap: SPACING.sm },
  acceptBtn: { flex: 1.5, backgroundColor: COLORS.primary, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  acceptText: { color: COLORS.white, fontWeight: '700', fontSize: 14 },
  skipBtn: { flex: 1, backgroundColor: COLORS.lightGray, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  skipText: { color: COLORS.gray, fontWeight: '600', fontSize: 14 },
});
