import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function IdentityVerificationScreen({ navigation }) {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [uploads, setUploads] = useState({ front: false, back: false, selfie: false });

  const DOC_TYPES = [
    { key: 'license', icon: 'card-outline', label: "Driver's License", desc: 'Front and back' },
    { key: 'stateId', icon: 'document-outline', label: 'State ID', desc: 'Front and back' },
    { key: 'passport', icon: 'globe-outline', label: 'U.S. Passport', desc: 'Photo page' },
    { key: 'resident', icon: 'people-outline', label: 'Permanent Resident Card', desc: 'If applicable' },
    { key: 'ead', icon: 'briefcase-outline', label: 'Employment Authorization Document', desc: 'If applicable' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 3 of 10</Text>
      <Text style={styles.title}>Identity Verification</Text>
      <Text style={styles.subtitle}>Upload a valid government-issued photo ID</Text>

      <Text style={styles.label}>Select Document Type</Text>
      <View style={styles.options}>
        {DOC_TYPES.map(doc => (
          <TouchableOpacity key={doc.key} style={[styles.docOption, selectedDoc === doc.key && styles.docActive]} onPress={() => setSelectedDoc(doc.key)}>
            <Ionicons name={doc.icon} size={22} color={selectedDoc === doc.key ? COLORS.primary : COLORS.gray} />
            <View style={styles.docInfo}>
              <Text style={styles.docLabel}>{doc.label}</Text>
              <Text style={styles.docDesc}>{doc.desc}</Text>
            </View>
            {selectedDoc === doc.key && <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Upload Requirements</Text>
      <TouchableOpacity style={styles.uploadRow} onPress={() => setUploads({ ...uploads, front: true })}>
        <Ionicons name={uploads.front ? 'checkmark-circle' : 'cloud-upload-outline'} size={22} color={uploads.front ? COLORS.success : COLORS.primary} />
        <Text style={styles.uploadText}>Front side of ID</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadRow} onPress={() => setUploads({ ...uploads, back: true })}>
        <Ionicons name={uploads.back ? 'checkmark-circle' : 'cloud-upload-outline'} size={22} color={uploads.back ? COLORS.success : COLORS.primary} />
        <Text style={styles.uploadText}>Back side of ID (if applicable)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadRow} onPress={() => setUploads({ ...uploads, selfie: true })}>
        <Ionicons name={uploads.selfie ? 'checkmark-circle' : 'camera-outline'} size={22} color={uploads.selfie ? COLORS.success : COLORS.primary} />
        <Text style={styles.uploadText}>Selfie verification</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.secondary} />
        <Text style={styles.infoText}>Your documents are encrypted and stored securely. We use industry-standard verification.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BackgroundCheck')}>
        <Text style={styles.btnText}>Submit & Continue</Text>
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
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm, marginTop: SPACING.md },
  options: { gap: SPACING.sm, marginBottom: SPACING.lg },
  docOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, gap: SPACING.md },
  docActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  docInfo: { flex: 1 },
  docLabel: { ...FONTS.medium },
  docDesc: { ...FONTS.small },
  uploadRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.sm },
  uploadText: { ...FONTS.medium, flex: 1 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: '#E8FFF5', padding: SPACING.md, borderRadius: 12, marginVertical: SPACING.lg },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
