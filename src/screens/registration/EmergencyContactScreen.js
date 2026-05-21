import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyContactScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', relationship: '', phone: '', email: '' });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 7 of 10</Text>
      <Text style={styles.title}>Emergency Contact</Text>
      <Text style={styles.subtitle}>Add contact details for safety and emergency situations</Text>

      <TextInput style={styles.input} placeholder="Emergency Contact Name *" value={form.name} onChangeText={v => setForm({ ...form, name: v })} />

      <Text style={styles.label}>Relationship</Text>
      <View style={styles.row}>
        {['Parent', 'Spouse', 'Sibling', 'Friend', 'Other'].map(r => (
          <TouchableOpacity key={r} style={[styles.chip, form.relationship === r && styles.chipActive]} onPress={() => setForm({ ...form, relationship: r })}>
            <Text style={[styles.chipText, form.relationship === r && styles.chipTextActive]}>{r}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={styles.input} placeholder="Phone Number *" keyboardType="phone-pad" value={form.phone} onChangeText={v => setForm({ ...form, phone: v })} />
      <TextInput style={styles.input} placeholder="Email (optional)" keyboardType="email-address" value={form.email} onChangeText={v => setForm({ ...form, email: v })} />

      <View style={styles.info}>
        <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>You can add emergency contact details later from your profile.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SetAvailability')}>
        <Text style={styles.btnText}>Save and Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('SetAvailability')}>
        <Text style={styles.skipText}>Skip for Now</Text>
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
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  label: { ...FONTS.medium, marginBottom: SPACING.sm },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.md },
  chip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14 },
  chipTextActive: { color: COLORS.white },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginVertical: SPACING.md },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small, marginTop: SPACING.md },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  skipBtn: { alignItems: 'center', marginTop: SPACING.md },
  skipText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
