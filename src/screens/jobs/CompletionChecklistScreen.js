import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CompletionChecklistScreen({ navigation, route }) {
  const job = route.params?.job;
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'Service completed as per requirements', done: false, mandatory: true },
    { id: 2, label: 'Area cleaned after service', done: false, mandatory: true },
    { id: 3, label: 'Customer informed about completion', done: false, mandatory: true },
    { id: 4, label: 'Tools and materials packed', done: false, mandatory: false },
  ]);
  const [notes, setNotes] = useState('');

  const toggleCheck = (id) => setChecklist(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  const mandatoryDone = checklist.filter(c => c.mandatory).every(c => c.done);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Completion Checklist</Text>
      <Text style={styles.subtitle}>Complete all mandatory steps before finishing</Text>

      {checklist.map(item => (
        <TouchableOpacity key={item.id} style={styles.checkRow} onPress={() => toggleCheck(item.id)}>
          <Ionicons name={item.done ? 'checkbox' : 'square-outline'} size={22} color={item.done ? COLORS.success : COLORS.gray} />
          <Text style={styles.checkLabel}>{item.label} {item.mandatory && '*'}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.photoSection}>
        <Text style={styles.sectionTitle}>Before/After Photos</Text>
        <View style={styles.photoRow}>
          <TouchableOpacity style={styles.photoBtn}>
            <Ionicons name="camera-outline" size={24} color={COLORS.primary} />
            <Text style={styles.photoText}>Before</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoBtn}>
            <Ionicons name="camera-outline" size={24} color={COLORS.primary} />
            <Text style={styles.photoText}>After</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Customer Remarks (Optional)</Text>
      <TextInput style={styles.notesInput} placeholder="Add notes..." multiline value={notes} onChangeText={setNotes} />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProofUpload', { job })}>
        <Text style={styles.btnText}>Proceed to Completion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  checkLabel: { ...FONTS.regular, flex: 1 },
  photoSection: { marginTop: SPACING.lg },
  sectionTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  photoRow: { flexDirection: 'row', gap: SPACING.md, marginBottom: SPACING.lg },
  photoBtn: { flex: 1, height: 80, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
  photoText: { ...FONTS.small, marginTop: SPACING.xs },
  notesInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, height: 80, textAlignVertical: 'top', marginBottom: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
