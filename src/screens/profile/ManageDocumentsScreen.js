import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const docs = [
  { name: 'Aadhaar Card', status: 'Approved', expiry: null },
  { name: 'PAN Card', status: 'Approved', expiry: null },
  { name: 'Driving License', status: 'Expiring Soon', expiry: '2026-08-15' },
  { name: 'Selfie Verification', status: 'Approved', expiry: null },
];

const statusColor = { 'Approved': COLORS.success, 'Rejected': COLORS.danger, 'Expiring Soon': COLORS.accent, 'Pending': COLORS.gray };

export default function ManageDocumentsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Manage Documents</Text>

      {docs.map(d => (
        <View key={d.name} style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text-outline" size={22} color={COLORS.primary} />
            <Text style={styles.docName}>{d.name}</Text>
            <Text style={[styles.status, { color: statusColor[d.status] }]}>{d.status}</Text>
          </View>
          {d.expiry && <Text style={styles.expiry}>Expires: {d.expiry}</Text>}
          <TouchableOpacity style={styles.reuploadBtn}>
            <Text style={styles.reuploadText}>Re-upload</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.sm },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  docName: { flex: 1, ...FONTS.medium },
  status: { fontSize: 12, fontWeight: '600' },
  expiry: { ...FONTS.small, color: COLORS.accent, marginTop: SPACING.xs, marginLeft: 30 },
  reuploadBtn: { alignSelf: 'flex-end', marginTop: SPACING.sm },
  reuploadText: { color: COLORS.primary, fontSize: 13, fontWeight: '600' },
});
