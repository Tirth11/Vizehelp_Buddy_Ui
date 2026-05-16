import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CompleteJobScreen({ navigation, route }) {
  const job = route.params?.job;

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-done-circle" size={64} color={COLORS.primary} />
      <Text style={styles.title}>Complete Job</Text>
      <Text style={styles.subtitle}>Confirm job completion</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Job ID</Text>
        <Text style={styles.cardValue}>{job?.id || 'JOB-1001'}</Text>
        <Text style={styles.cardLabel}>Final Notes</Text>
        <Text style={styles.cardValue}>Service completed successfully</Text>
        <Text style={styles.cardLabel}>Payment Mode</Text>
        <Text style={styles.cardValue}>Online (via app)</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CustomerConfirmation', { job })}>
        <Text style={styles.btnText}>Complete Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.md },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.sm, marginBottom: SPACING.lg },
  card: { width: '100%', backgroundColor: COLORS.lightGray, padding: SPACING.lg, borderRadius: 12, marginBottom: SPACING.lg },
  cardLabel: { ...FONTS.small, marginTop: SPACING.sm },
  cardValue: { ...FONTS.medium, marginBottom: SPACING.sm },
  btn: { width: '100%', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
