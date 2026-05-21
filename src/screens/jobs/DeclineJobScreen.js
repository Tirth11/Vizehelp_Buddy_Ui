import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const REASONS = [
  'Too far',
  'Not available',
  'Wrong service type',
  'Low payout',
  'Safety concern',
  'Do not have required tools',
  'Other',
];

export default function DeclineJobScreen({ navigation }) {
  const [selected, setSelected] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.title}>Decline Job</Text>
      <Text style={styles.subtitle}>Please select a reason for declining</Text>

      <View style={styles.reasons}>
        {REASONS.map(r => (
          <TouchableOpacity key={r} style={[styles.reasonBtn, selected === r && styles.reasonActive]} onPress={() => setSelected(r)}>
            <Ionicons name={selected === r ? 'radio-button-on' : 'radio-button-off'} size={20} color={selected === r ? COLORS.primary : COLORS.gray} />
            <Text style={[styles.reasonText, selected === r && styles.reasonTextActive]}>{r}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selected === 'Other' && (
        <TextInput style={styles.input} value={notes} onChangeText={setNotes} placeholder="Tell us more..." multiline placeholderTextColor={COLORS.textLight} />
      )}

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AvailableJobs')}>
        <Text style={styles.btnText}>Submit & Return to Jobs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  reasons: { gap: SPACING.sm, marginBottom: SPACING.lg },
  reasonBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray },
  reasonActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  reasonText: { ...FONTS.medium, color: COLORS.darkGray },
  reasonTextActive: { color: COLORS.primary },
  input: { backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md, fontSize: 15, minHeight: 80, textAlignVertical: 'top', marginBottom: SPACING.lg, color: COLORS.text },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
