import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const AVAILABLE_JOBS = [
  { id: 'JOB-2001', type: 'EV Charging', earning: 32, distance: '3.2 mi', duration: '1 hr', time: '3:30 PM', area: 'Uptown Dallas', tipEligible: true, provider: 'Vizehelp' },
  { id: 'JOB-2002', type: 'Home Cleaning', earning: 65, distance: '1.8 mi', duration: '2 hrs', time: '5:00 PM', area: 'Oak Lawn', tipEligible: true, provider: 'CleanPro Services' },
  { id: 'JOB-2003', type: 'Parking Assistance', earning: 28, distance: '4.5 mi', duration: '45 min', time: '6:15 PM', area: 'Deep Ellum', tipEligible: false, provider: 'Vizehelp' },
  { id: 'JOB-2004', type: 'Elder Care', earning: 45, distance: '2.1 mi', duration: '1.5 hrs', time: '7:00 PM', area: 'Highland Park', tipEligible: true, provider: 'CarePlus' },
];

export default function AvailableJobsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Available Jobs</Text>
      <Text style={styles.subtitle}>{AVAILABLE_JOBS.length} jobs near you</Text>

      {AVAILABLE_JOBS.map(job => (
        <TouchableOpacity key={job.id} style={[styles.card, SHADOWS.small]} onPress={() => navigation.navigate('JobDetails', { job: { ...job, customer: 'Customer', location: job.area, status: 'new', slaTime: job.time, instructions: '' } })}>
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
            <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.navigate('AcceptJob', { job: { ...job, customer: 'Customer', location: job.area, status: 'new', slaTime: job.time, instructions: '' } })}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipBtn}>
              <Text style={styles.skipText}>Skip</Text>
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
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.small, marginBottom: SPACING.lg },
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
  acceptBtn: { flex: 1, backgroundColor: COLORS.primary, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  acceptText: { color: COLORS.white, fontWeight: '700', fontSize: 14 },
  skipBtn: { flex: 1, backgroundColor: COLORS.lightGray, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  skipText: { color: COLORS.gray, fontWeight: '600', fontSize: 14 },
});
