import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ProofUploadScreen({ navigation, route }) {
  const job = route.params?.job;
  const [notes, setNotes] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Upload Proof</Text>
      <Text style={styles.subtitle}>Capture proof of completed work</Text>

      <TouchableOpacity style={styles.uploadCard}>
        <Ionicons name="camera" size={32} color={COLORS.primary} />
        <Text style={styles.uploadTitle}>Upload Photo</Text>
        <Text style={styles.uploadSub}>Take a photo of completed work</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadCard}>
        <Ionicons name="document-outline" size={32} color={COLORS.primary} />
        <Text style={styles.uploadTitle}>Upload Document</Text>
        <Text style={styles.uploadSub}>If any document is needed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadCard}>
        <Ionicons name="pencil-outline" size={32} color={COLORS.primary} />
        <Text style={styles.uploadTitle}>Customer Signature</Text>
        <Text style={styles.uploadSub}>Optional - get customer sign-off</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Completion Notes</Text>
      <TextInput style={styles.notesInput} placeholder="Add any notes about the completed work..." multiline value={notes} onChangeText={setNotes} />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CompleteJob', { job })}>
        <Text style={styles.btnText}>Submit Proof</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  uploadCard: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, borderStyle: 'dashed', padding: SPACING.lg, alignItems: 'center', marginBottom: SPACING.md },
  uploadTitle: { ...FONTS.medium, marginTop: SPACING.sm },
  uploadSub: { ...FONTS.small, marginTop: 2 },
  label: { ...FONTS.medium, marginTop: SPACING.md, marginBottom: SPACING.sm },
  notesInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, height: 80, textAlignVertical: 'top', marginBottom: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
