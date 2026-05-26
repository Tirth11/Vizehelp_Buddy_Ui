import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';

export default function AcceptJobScreen({ navigation, route }) {
  const job = route.params?.job;

  const handleAccept = () => {
    navigation.navigate('AcceptedJobSummary', { job });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="help-circle-outline" size={56} color={COLORS.primary} />
      </View>
      <Text style={styles.title}>Accept this Job?</Text>
      <Text style={styles.subtitle}>Once accepted, you'll be assigned this job and can start it.</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>{job?.type}</Text>
        <Text style={styles.infoLocation}>{job?.location}</Text>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowLabel}>You'll earn</Text>
          <Text style={styles.earning}>${job?.earning}</Text>
        </View>
      </View>

      <Text style={styles.note}>You won't receive overlapping job alerts after accepting.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn} onPress={handleAccept} activeOpacity={0.85}>
          <Ionicons name="checkmark" size={20} color={COLORS.white} />
          <Text style={styles.acceptText}>Yes, Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.xs, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center', marginBottom: SPACING.lg, lineHeight: 22 },
  infoBox: { backgroundColor: COLORS.background, padding: SPACING.md, borderRadius: RADIUS.md, width: '100%', borderWidth: 1, borderColor: COLORS.border, marginBottom: SPACING.md },
  infoLabel: { ...FONTS.medium, fontSize: 16 },
  infoLocation: { ...FONTS.small, marginTop: 2 },
  divider: { height: 1, backgroundColor: COLORS.border, marginVertical: SPACING.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowLabel: { ...FONTS.regular, color: COLORS.textLight },
  earning: { fontSize: 22, fontWeight: '900', color: COLORS.success },
  note: { ...FONTS.small, textAlign: 'center', marginBottom: SPACING.xl, paddingHorizontal: SPACING.md },
  buttons: { width: '100%', flexDirection: 'row', gap: SPACING.sm },
  cancelBtn: { flex: 1, padding: SPACING.md + 2, borderWidth: 1.5, borderColor: COLORS.border, borderRadius: RADIUS.md, alignItems: 'center', backgroundColor: COLORS.white },
  cancelText: { color: COLORS.text, fontSize: 16, fontWeight: '700' },
  acceptBtn: { flex: 2, flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '800' },
});
