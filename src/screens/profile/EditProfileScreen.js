import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { MOCK_USER } from '../../data/mockData';
import { showAlert } from '../../utils/alert';

export default function EditProfileScreen({ navigation }) {
  const [form, setForm] = useState({ name: MOCK_USER.name, email: MOCK_USER.email || '', address: MOCK_USER.address, language: 'English' });

  const handleSave = () => {
    showAlert('Saved', 'Profile updated successfully', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Edit Profile</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={form.name} onChangeText={v => setForm({ ...form, name: v })} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={form.email} onChangeText={v => setForm({ ...form, email: v })} keyboardType="email-address" />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} value={form.address} onChangeText={v => setForm({ ...form, address: v })} multiline />

      <Text style={styles.label}>Language Preference</Text>
      <View style={styles.row}>
        {['English', 'Spanish', 'French'].map(l => (
          <TouchableOpacity key={l} style={[styles.chip, form.language === l && styles.chipActive]} onPress={() => setForm({ ...form, language: l })}>
            <Text style={[styles.chipText, form.language === l && styles.chipTextActive]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.note}>Mobile number change requires OTP verification. KYC fields may need re-approval.</Text>

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  label: { ...FONTS.medium, marginBottom: SPACING.xs, marginTop: SPACING.md },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16 },
  row: { flexDirection: 'row', gap: SPACING.sm },
  chip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14 },
  chipTextActive: { color: COLORS.white },
  note: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
