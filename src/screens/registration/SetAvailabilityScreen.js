import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const SHIFTS = [
  { key: 'morning',   label: 'Morning',   time: '6 AM – 12 PM', icon: 'sunny-outline' },
  { key: 'afternoon', label: 'Afternoon', time: '12 PM – 6 PM', icon: 'partly-sunny-outline' },
  { key: 'evening',   label: 'Evening',   time: '6 PM – 12 AM', icon: 'moon-outline' },
  { key: 'full',      label: 'Full Day',  time: '6 AM – 12 AM', icon: 'time-outline' },
];

export default function SetAvailabilityScreen({ navigation }) {
  const [selectedDays, setSelectedDays] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const [shift, setShift] = useState('full');
  const [distance, setDistance] = useState('25');

  const toggleDay = (day) =>
    setSelectedDays(prev => (prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]));

  const valid = selectedDays.length > 0 && shift;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={9}
        total={9}
        onBack={() => navigation.goBack()}
        title="Set Your Availability"
        subtitle="When do you want to receive jobs?"
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Available Days *</Text>
        <View style={styles.daysRow}>
          {DAYS.map(day => (
            <TouchableOpacity key={day} style={[styles.dayBtn, selectedDays.includes(day) && styles.dayActive]} onPress={() => toggleDay(day)}>
              <Text style={[styles.dayText, selectedDays.includes(day) && styles.dayTextActive]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Preferred Shift *</Text>
        <View style={styles.shifts}>
          {SHIFTS.map(s => {
            const active = shift === s.key;
            return (
              <TouchableOpacity key={s.key} style={[styles.shiftBtn, active && styles.shiftActive]} onPress={() => setShift(s.key)} activeOpacity={0.8}>
                <View style={[styles.shiftIcon, active && styles.shiftIconActive]}>
                  <Ionicons name={s.icon} size={20} color={active ? COLORS.white : COLORS.primary} />
                </View>
                <View style={styles.shiftInfo}>
                  <Text style={[styles.shiftLabel, active && styles.shiftLabelActive]}>{s.label}</Text>
                  <Text style={styles.shiftTime}>{s.time}</Text>
                </View>
                {active && <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />}
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Maximum Travel Distance</Text>
        <View style={styles.fieldRow}>
          <Ionicons name="navigate-outline" size={18} color={COLORS.textLight} />
          <TextInput style={styles.input} value={distance} onChangeText={setDistance} placeholder="25" keyboardType="number-pad" />
          <Text style={styles.suffix}>miles</Text>
        </View>

        <View style={styles.info}>
          <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>You can change availability any time from the Schedule tab.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('SelectServices')}
        >
          <Text style={styles.btnText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  daysRow: { flexDirection: 'row', gap: SPACING.xs, marginBottom: SPACING.lg },
  dayBtn: { flex: 1, paddingVertical: 14, borderRadius: RADIUS.md, backgroundColor: COLORS.lightGray, alignItems: 'center', borderWidth: 1.5, borderColor: 'transparent' },
  dayActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary },
  dayText: { fontSize: 13, fontWeight: '600', color: COLORS.textLight },
  dayTextActive: { color: COLORS.primary },
  shifts: { gap: SPACING.sm, marginBottom: SPACING.lg },
  shiftBtn: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, borderRadius: RADIUS.md, backgroundColor: COLORS.background, borderWidth: 1.5, borderColor: COLORS.border, gap: SPACING.md },
  shiftActive: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  shiftIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  shiftIconActive: { backgroundColor: COLORS.primary },
  shiftInfo: { flex: 1 },
  shiftLabel: { ...FONTS.medium, fontSize: 15 },
  shiftLabelActive: { color: COLORS.primary },
  shiftTime: { ...FONTS.small, marginTop: 2 },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52, marginBottom: SPACING.md },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  suffix: { fontSize: 14, color: COLORS.textLight, fontWeight: '600' },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, marginTop: SPACING.sm },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
