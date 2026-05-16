import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function JobCompletionSuccessScreen({ navigation, route }) {
  const job = route.params?.job;

  return (
    <View style={styles.container}>
      <View style={styles.successIcon}>
        <Ionicons name="checkmark-circle" size={80} color={COLORS.success} />
      </View>
      <Text style={styles.title}>Job Completed! 🎉</Text>
      <Text style={styles.subtitle}>Great work! The job has been successfully completed.</Text>

      <View style={styles.card}>
        <Row label="Job ID" value={job?.id || 'JOB-1001'} />
        <Row label="Earning" value={`₹${job?.earning || 450}`} highlight />
        <Row label="Time Taken" value={job?.duration || '2 hrs'} />
        <Row label="Customer Rating" value="Pending" />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] })}>
          <Text style={styles.homeBtnText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.earningsBtn} onPress={() => navigation.navigate('MainTabs', { screen: 'Earnings' })}>
          <Text style={styles.earningsBtnText}>View Earnings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Row({ label, value, highlight }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, highlight && { color: COLORS.success, fontSize: 18 }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  successIcon: { marginBottom: SPACING.md },
  title: { ...FONTS.title, color: COLORS.success },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginTop: SPACING.sm, marginBottom: SPACING.lg },
  card: { width: '100%', backgroundColor: COLORS.lightGray, padding: SPACING.lg, borderRadius: 12, marginBottom: SPACING.lg },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm },
  rowLabel: { ...FONTS.regular, color: COLORS.gray },
  rowValue: { ...FONTS.medium },
  buttons: { width: '100%', gap: SPACING.md },
  homeBtn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  homeBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  earningsBtn: { borderWidth: 1, borderColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  earningsBtnText: { color: COLORS.primary, fontSize: 16, fontWeight: '600' },
});
