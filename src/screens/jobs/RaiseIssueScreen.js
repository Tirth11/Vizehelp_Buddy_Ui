import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = ['Customer unavailable', 'Wrong address', 'Unsafe location', 'Payment issue', 'Service mismatch', 'App issue', 'Other'];

export default function RaiseIssueScreen({ navigation }) {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!category) return Alert.alert('Required', 'Select an issue category');
    Alert.alert('Submitted', 'Issue raised successfully. Support will contact you.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Raise Job Issue</Text>
      <Text style={styles.subtitle}>Report a problem with the current job</Text>

      <Text style={styles.label}>Issue Category *</Text>
      {CATEGORIES.map(c => (
        <TouchableOpacity key={c} style={[styles.catCard, category === c && styles.catActive]} onPress={() => setCategory(c)}>
          <Text style={[styles.catText, category === c && styles.catTextActive]}>{c}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.descInput} placeholder="Describe the issue..." multiline value={description} onChangeText={setDescription} />

      <TouchableOpacity style={styles.photoBtn}>
        <Ionicons name="camera-outline" size={20} color={COLORS.primary} />
        <Text style={styles.photoText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportBtn} onPress={() => navigation.navigate('Support')}>
        <Ionicons name="headset-outline" size={18} color={COLORS.primary} />
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit Issue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  label: { ...FONTS.medium, marginBottom: SPACING.sm, marginTop: SPACING.md },
  catCard: { padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.sm },
  catActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  catText: { ...FONTS.regular },
  catTextActive: { color: COLORS.white },
  descInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, height: 80, textAlignVertical: 'top', marginBottom: SPACING.md },
  photoBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, borderStyle: 'dashed', gap: SPACING.sm, marginBottom: SPACING.md },
  photoText: { color: COLORS.primary, fontWeight: '600' },
  supportBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, marginBottom: SPACING.lg },
  supportText: { color: COLORS.primary, fontWeight: '600' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
