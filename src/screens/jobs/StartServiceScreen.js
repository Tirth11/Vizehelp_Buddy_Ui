import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function StartServiceScreen({ navigation, route }) {
  const job = route.params?.job;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Ionicons name="play-circle" size={64} color={COLORS.primary} style={styles.icon} />
      <Text style={styles.title}>Start Service</Text>
      <Text style={styles.subtitle}>Review checklist and begin the service</Text>

      <View style={styles.checklist}>
        <Text style={styles.checkTitle}>Job Checklist</Text>
        <CheckItem label="Verified customer identity" />
        <CheckItem label="Confirmed service requirements" />
        <CheckItem label="Tools and materials ready" />
        <CheckItem label="Safety precautions taken" />
      </View>

      <View style={styles.instructionBox}>
        <Text style={styles.instructionTitle}>Customer Instructions</Text>
        <Text style={styles.instructionText}>{job?.instructions || 'No special instructions'}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('InProgress', { job })}>
        <Ionicons name="play" size={20} color={COLORS.white} />
        <Text style={styles.btnText}>Start Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CheckItem({ label }) {
  return (
    <View style={styles.checkRow}>
      <Ionicons name="square-outline" size={20} color={COLORS.primary} />
      <Text style={styles.checkLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl, alignItems: 'center' },
  icon: { marginBottom: SPACING.md },
  title: { ...FONTS.title },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  checklist: { width: '100%', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  checkTitle: { ...FONTS.medium, marginBottom: SPACING.md },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.sm },
  checkLabel: { ...FONTS.regular },
  instructionBox: { width: '100%', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.lg },
  instructionTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  instructionText: { ...FONTS.regular, color: COLORS.gray },
  btn: { flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, width: '100%' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
