import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const UPCOMING_JOBS = [
  { id: 'JOB-3001', type: 'EV Charging', time: 'Today, 3:30 PM', location: 'Uptown Dallas', earning: 32 },
  { id: 'JOB-3002', type: 'Home Cleaning', time: 'Tomorrow, 9:00 AM', location: 'Oak Lawn', earning: 65 },
  { id: 'JOB-3003', type: 'Elder Care', time: 'Wed, 2:00 PM', location: 'Highland Park', earning: 45 },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DATES = [12, 13, 14, 15, 16, 17, 18];

export default function ScheduleScreen({ navigation }) {
  const [selectedDay, setSelectedDay] = useState(4);
  const [showTimeOff, setShowTimeOff] = useState(false);

  if (showTimeOff) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowTimeOff(false)}>
            <Ionicons name="arrow-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.title}>Mark Time Off</Text>
        </View>
        <Text style={styles.subtitle}>Select dates you're unavailable</Text>

        <View style={styles.timeOffCard}>
          <Ionicons name="calendar-outline" size={40} color={COLORS.primary} />
          <Text style={styles.timeOffText}>Tap dates on the calendar to mark unavailable. Jobs won't be assigned during time off.</Text>
        </View>

        <View style={styles.weekRow}>
          {DAYS.map((d, i) => (
            <TouchableOpacity key={d} style={[styles.dayCell, i === 2 && styles.dayOff]}>
              <Text style={[styles.dayLabel, i === 2 && styles.dayOffLabel]}>{d}</Text>
              <Text style={[styles.dateLabel, i === 2 && styles.dayOffLabel]}>{DATES[i]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => setShowTimeOff(false)}>
          <Text style={styles.btnText}>Save Time Off</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Schedule</Text>

      <View style={styles.weekRow}>
        {DAYS.map((d, i) => (
          <TouchableOpacity key={d} style={[styles.dayCell, selectedDay === i && styles.dayActive]} onPress={() => setSelectedDay(i)}>
            <Text style={[styles.dayLabel, selectedDay === i && styles.dayActiveLabel]}>{d}</Text>
            <Text style={[styles.dateLabel, selectedDay === i && styles.dayActiveLabel]}>{DATES[i]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
        {UPCOMING_JOBS.map(job => (
          <View key={job.id} style={[styles.jobCard, SHADOWS.small]}>
            <View style={styles.jobLeft}>
              <Text style={styles.jobType}>{job.type}</Text>
              <Text style={styles.jobTime}>{job.time}</Text>
              <Text style={styles.jobLoc}>{job.location}</Text>
            </View>
            <Text style={styles.jobEarning}>${job.earning}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.timeOffBtn} onPress={() => setShowTimeOff(true)}>
        <Ionicons name="close-circle-outline" size={20} color={COLORS.accent} />
        <Text style={styles.timeOffBtnText}>Mark Time Off</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  header: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, marginBottom: SPACING.md, paddingTop: SPACING.xxl, paddingHorizontal: SPACING.md },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg, paddingHorizontal: SPACING.md },
  weekRow: { flexDirection: 'row', gap: SPACING.xs, marginBottom: SPACING.lg, paddingHorizontal: SPACING.xs },
  dayCell: { flex: 1, alignItems: 'center', paddingVertical: 12, borderRadius: 12, backgroundColor: COLORS.white },
  dayActive: { backgroundColor: COLORS.primary },
  dayOff: { backgroundColor: COLORS.accent + '20' },
  dayLabel: { fontSize: 11, color: COLORS.gray, fontWeight: '600' },
  dateLabel: { fontSize: 16, fontWeight: '700', color: COLORS.text, marginTop: 2 },
  dayActiveLabel: { color: COLORS.white },
  dayOffLabel: { color: COLORS.accent },
  section: { marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  jobCard: { flexDirection: 'row', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, alignItems: 'center' },
  jobLeft: { flex: 1 },
  jobType: { ...FONTS.medium },
  jobTime: { ...FONTS.small, color: COLORS.primary, marginTop: 2 },
  jobLoc: { ...FONTS.small, marginTop: 2 },
  jobEarning: { ...FONTS.bold, fontSize: 18, color: COLORS.success },
  timeOffBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderRadius: 14, borderWidth: 1.5, borderColor: COLORS.accent },
  timeOffBtnText: { color: COLORS.accent, fontWeight: '600', fontSize: 15 },
  timeOffCard: { alignItems: 'center', backgroundColor: COLORS.primaryLight, borderRadius: 16, padding: SPACING.xl, marginHorizontal: SPACING.md, marginBottom: SPACING.lg, gap: SPACING.md },
  timeOffText: { ...FONTS.regular, textAlign: 'center', color: COLORS.darkGray },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', marginHorizontal: SPACING.md, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
