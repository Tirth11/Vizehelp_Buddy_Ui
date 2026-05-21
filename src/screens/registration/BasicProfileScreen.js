import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BasicProfileScreen({ navigation }) {
  const [form, setForm] = useState({ firstName: '', middleName: '', lastName: '', email: '', phone: '', dob: '', language: '' });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Basic Profile</Text>
      <Text style={styles.subtitle}>Capture your personal details</Text>

      <TouchableOpacity style={styles.photoBtn}>
        <Ionicons name="camera" size={32} color={COLORS.primary} />
        <Text style={styles.photoText}>Profile Photo</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="First Name *" value={form.firstName} onChangeText={v => setForm({ ...form, firstName: v })} />
      <TextInput style={styles.input} placeholder="Middle Name (optional)" value={form.middleName} onChangeText={v => setForm({ ...form, middleName: v })} />
      <TextInput style={styles.input} placeholder="Last Name *" value={form.lastName} onChangeText={v => setForm({ ...form, lastName: v })} />
      <TextInput style={styles.input} placeholder="Email Address *" keyboardType="email-address" value={form.email} onChangeText={v => setForm({ ...form, email: v })} />
      <TextInput style={styles.input} placeholder="Phone Number *" keyboardType="phone-pad" value={form.phone} onChangeText={v => setForm({ ...form, phone: v })} />
      <TextInput style={styles.input} placeholder="Date of Birth (MM/DD/YYYY)" value={form.dob} onChangeText={v => setForm({ ...form, dob: v })} />

      <Text style={styles.label}>Preferred Language</Text>
      <View style={styles.row}>
        {['English', 'Spanish', 'French'].map(l => (
          <TouchableOpacity key={l} style={[styles.chip, form.language === l && styles.chipActive]} onPress={() => setForm({ ...form, language: l })}>
            <Text style={[styles.chipText, form.language === l && styles.chipTextActive]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddressDetails')}>
        <Text style={styles.btnText}>Save and Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  photoBtn: { alignItems: 'center', justifyContent: 'center', width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: COLORS.primary, borderStyle: 'dashed', alignSelf: 'center', marginBottom: SPACING.lg },
  photoText: { fontSize: 10, color: COLORS.primary, marginTop: 4 },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  label: { ...FONTS.medium, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  row: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  chip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14 },
  chipTextActive: { color: COLORS.white },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
