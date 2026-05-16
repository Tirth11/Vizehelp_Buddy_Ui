import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function KYCUploadScreen({ navigation }) {
  const [docs, setDocs] = useState({ aadhaar: null, pan: null, license: null, selfie: null });

  const DocUpload = ({ label, field, required }) => (
    <TouchableOpacity style={styles.uploadCard} onPress={() => setDocs({ ...docs, [field]: 'uploaded' })}>
      <Ionicons name={docs[field] ? 'checkmark-circle' : 'cloud-upload-outline'} size={28} color={docs[field] ? COLORS.success : COLORS.primary} />
      <View style={styles.uploadInfo}>
        <Text style={styles.uploadLabel}>{label} {required && '*'}</Text>
        <Text style={styles.uploadStatus}>{docs[field] ? 'Uploaded' : 'Tap to upload'}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>KYC Document Upload</Text>
      <Text style={styles.subtitle}>Upload identity verification documents</Text>

      <DocUpload label="Aadhaar / Government ID" field="aadhaar" required />
      <DocUpload label="PAN Card" field="pan" />
      <DocUpload label="Driving License" field="license" />
      <DocUpload label="Selfie Verification" field="selfie" required />

      <View style={styles.statusBox}>
        <Text style={styles.statusLabel}>KYC Status</Text>
        <Text style={styles.statusValue}>Not Submitted</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BankDetails')}>
        <Text style={styles.btnText}>Submit KYC</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  uploadCard: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.md },
  uploadInfo: { flex: 1, marginLeft: SPACING.md },
  uploadLabel: { ...FONTS.medium },
  uploadStatus: { ...FONTS.small, marginTop: 2 },
  statusBox: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginTop: SPACING.lg, flexDirection: 'row', justifyContent: 'space-between' },
  statusLabel: { ...FONTS.medium },
  statusValue: { color: COLORS.accent, fontWeight: '600' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
