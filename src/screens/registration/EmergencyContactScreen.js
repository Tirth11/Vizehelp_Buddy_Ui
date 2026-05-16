import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function EmergencyContactScreen({ navigation }) {
  const [form, setForm] = useState({ name: '', relationship: '', mobile: '', alternate: '' });

  const handleSave = () => {
    if (!form.name || !form.mobile) return Alert.alert('Error', 'Name and mobile are required');
    navigation.navigate('SelectServices');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Emergency Contact</Text>
      <Text style={styles.subtitle}>Add an emergency contact for your safety</Text>

      <TextInput style={styles.input} placeholder="Contact Name *" value={form.name} onChangeText={v => setForm({ ...form, name: v })} />

      <Text style={styles.label}>Relationship</Text>
      <View style={styles.row}>
        {['Parent', 'Spouse', 'Sibling', 'Friend'].map(r => (
          <TouchableOpacity key={r} style={[styles.chip, form.relationship === r && styles.chipActive]} onPress={() => setForm({ ...form, relationship: r })}>
            <Text style={[styles.chipText, form.relationship === r && styles.chipTextActive]}>{r}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={styles.input} placeholder="Mobile Number *" keyboardType="phone-pad" maxLength={10} value={form.mobile} onChangeText={v => setForm({ ...form, mobile: v })} />
      <TextInput style={styles.input} placeholder="Alternate Contact Number" keyboardType="phone-pad" maxLength={10} value={form.alternate} onChangeText={v => setForm({ ...form, alternate: v })} />

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
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
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  label: { ...FONTS.medium, marginBottom: SPACING.sm },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.md },
  chip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: 14 },
  chipTextActive: { color: COLORS.white },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
