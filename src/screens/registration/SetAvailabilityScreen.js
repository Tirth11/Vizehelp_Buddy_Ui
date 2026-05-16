import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function SetAvailabilityScreen({ navigation }) {
  const [selected, setSelected] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [shift, setShift] = useState('full');

  const toggle = (day) => {
    setSelected(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 9 of 11</Text>
      <Text style={styles.title}>Set Availability</Text>
      <Text style={styles.subtitle}>When are you available to work?</Text>

      <Text style={styles.label}>Available Days</Text>
      <View style={styles.daysRow}>
        {DAYS.map(day => (
          <TouchableOpacity key={day} style={[styles.dayBtn, selected.includes(day) && styles.dayActive]} onPress={() => toggle(day)}>
            <Text style={[styles.dayText, selected.includes(day) && styles.dayTextActive]}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Preferred Shift</Text>
      <View style={styles.shifts}>
        {[{ key: 'morning', label: 'Morning', time: '6 AM - 12 PM' }, { key: 'afternoon', label: 'Afternoon', time: '12 PM - 6 PM' }, { key: 'evening', label: 'Evening', time: '6 PM - 12 AM' }, { key: 'full', label: 'Full Day', time: '6 AM - 12 AM' }].map(s => (
          <TouchableOpacity key={s.key} style={[styles.shiftBtn, shift === s.key && styles.shiftActive]} onPress={() => setShift(s.key)}>
            <Text style={[styles.shiftLabel, shift === s.key && styles.shiftLabelActive]}>{s.label}</Text>
            <Text style={[styles.shiftTime, shift === s.key && styles.shiftTimeActive]}>{s.time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddPayout')}>
        <Text style={styles.btnText}>Continue</Text>
        <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm },
  daysRow: { flexDirection: 'row', gap: SPACING.xs, marginBottom: SPACING.xl },
  dayBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: COLORS.lightGray, alignItems: 'center' },
  dayActive: { backgroundColor: COLORS.primary },
  dayText: { fontSize: 13, fontWeight: '600', color: COLORS.gray },
  dayTextActive: { color: COLORS.white },
  shifts: { gap: SPACING.sm, marginBottom: SPACING.xl },
  shiftBtn: { padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray },
  shiftActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  shiftLabel: { ...FONTS.medium, color: COLORS.darkGray },
  shiftLabelActive: { color: COLORS.primary },
  shiftTime: { ...FONTS.small },
  shiftTimeActive: { color: COLORS.primary },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
