import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { showAlert } from '../../utils/alert';

const CATEGORIES = ['Job Issue', 'Payment Issue', 'App Bug', 'Account Issue', 'KYC Issue', 'Other'];

export default function RaiseTicketScreen({ navigation }) {
  const [category, setCategory] = useState('');
  const [jobId, setJobId] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!category || !description) return showAlert('Required', 'Category and description are required');
    showAlert('Ticket Raised', 'Your support ticket has been submitted. Ticket ID: TKT-2001', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Raise Support Ticket</Text>

      <Text style={styles.label}>Issue Category *</Text>
      <View style={styles.catGrid}>
        {CATEGORIES.map(c => (
          <TouchableOpacity key={c} style={[styles.catChip, category === c && styles.catActive]} onPress={() => setCategory(c)}>
            <Text style={[styles.catText, category === c && styles.catTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Related Job ID (Optional)</Text>
      <TextInput style={styles.input} placeholder="e.g., JOB-1001" value={jobId} onChangeText={setJobId} />

      <Text style={styles.label}>Description *</Text>
      <TextInput style={styles.textArea} placeholder="Describe your issue..." multiline value={description} onChangeText={setDescription} />

      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons name="attach-outline" size={20} color={COLORS.primary} />
        <Text style={styles.uploadText}>Upload Attachment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit Ticket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  label: { ...FONTS.medium, marginBottom: SPACING.sm, marginTop: SPACING.md },
  catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  catChip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  catActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  catText: { fontSize: 13, color: COLORS.text },
  catTextActive: { color: COLORS.white },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16 },
  textArea: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, height: 100, textAlignVertical: 'top', fontSize: 16 },
  uploadBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, borderStyle: 'dashed', gap: SPACING.sm, marginTop: SPACING.md },
  uploadText: { color: COLORS.primary, fontWeight: '600' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
