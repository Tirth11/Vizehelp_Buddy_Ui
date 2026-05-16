import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function AvailabilityScreen({ navigation }) {
  const [schedule, setSchedule] = useState(
    DAYS.reduce((acc, d) => ({ ...acc, [d]: { active: d !== 'Sun', start: '09:00', end: '18:00' } }), {})
  );

  const toggleDay = (day) => {
    setSchedule(prev => ({ ...prev, [day]: { ...prev[day], active: !prev[day].active } }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Availability Schedule</Text>
      <Text style={styles.subtitle}>Set your working hours</Text>

      {DAYS.map(day => (
        <View key={day} style={styles.dayRow}>
          <TouchableOpacity style={[styles.dayToggle, schedule[day].active && styles.dayActive]} onPress={() => toggleDay(day)}>
            <Text style={[styles.dayText, schedule[day].active && styles.dayTextActive]}>{day}</Text>
          </TouchableOpacity>
          {schedule[day].active ? (
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>{schedule[day].start}</Text>
              <Text style={styles.timeSep}>to</Text>
              <Text style={styles.timeText}>{schedule[day].end}</Text>
            </View>
          ) : (
            <Text style={styles.offText}>Off</Text>
          )}
        </View>
      ))}

      <View style={styles.breakBox}>
        <Ionicons name="cafe-outline" size={18} color={COLORS.primary} />
        <Text style={styles.breakLabel}>Break Time: 1:00 PM - 2:00 PM</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Save Schedule</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  dayRow: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.md },
  dayToggle: { width: 48, height: 48, borderRadius: 24, borderWidth: 1, borderColor: COLORS.border, justifyContent: 'center', alignItems: 'center' },
  dayActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  dayText: { fontSize: 12, fontWeight: '600', color: COLORS.text },
  dayTextActive: { color: COLORS.white },
  timeRow: { flexDirection: 'row', alignItems: 'center', marginLeft: SPACING.md, gap: SPACING.sm },
  timeText: { backgroundColor: COLORS.lightGray, paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, borderRadius: 8, fontSize: 14 },
  timeSep: { color: COLORS.gray, fontSize: 12 },
  offText: { marginLeft: SPACING.md, color: COLORS.gray, fontSize: 14 },
  breakBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginTop: SPACING.lg, gap: SPACING.sm },
  breakLabel: { ...FONTS.regular },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
