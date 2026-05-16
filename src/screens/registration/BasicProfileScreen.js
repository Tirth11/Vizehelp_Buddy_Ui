import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BasicProfileScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', email: '', dob: '', gender: '' });

  const handleContinue = () => {
    if (!form.name.trim()) return Alert.alert('Error', 'Full name is mandatory');
    navigation.navigate('AddressDetails');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Basic Profile Details</Text>
      <Text style={styles.subtitle}>Tell us about yourself</Text>

      <TouchableOpacity style={styles.photoBtn}>
        <Ionicons name="camera" size={32} color={COLORS.primary} />
        <Text style={styles.photoText}>Upload Profile Photo</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Full Name *" value={form.name} onChangeText={v => setForm({ ...form, name: v })} />
      <TextInput style={styles.input} placeholder="Email ID" keyboardType="email-address" value={form.email} onChangeText={v => setForm({ ...form, email: v })} />
      <TextInput style={styles.input} placeholder="Date of Birth (DD/MM/YYYY)" value={form.dob} onChangeText={v => setForm({ ...form, dob: v })} />

      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderRow}>
        {['Male', 'Female', 'Other'].map(g => (
          <TouchableOpacity key={g} style={[styles.genderBtn, form.gender === g && styles.genderActive]} onPress={() => setForm({ ...form, gender: g })}>
            <Text style={[styles.genderText, form.gender === g && styles.genderTextActive]}>{g}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Preferred Language</Text>
      <View style={styles.genderRow}>
        {['English', 'Hindi', 'Kannada'].map(l => (
          <TouchableOpacity key={l} style={[styles.genderBtn, form.language === l && styles.genderActive]} onPress={() => setForm({ ...form, language: l })}>
            <Text style={[styles.genderText, form.language === l && styles.genderTextActive]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleContinue}>
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
  genderRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  genderBtn: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  genderActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  genderText: { color: COLORS.text, fontSize: 14 },
  genderTextActive: { color: COLORS.white },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
