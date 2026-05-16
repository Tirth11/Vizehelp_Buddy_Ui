import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function AcceptJobScreen({ navigation, route }) {
  const job = route.params?.job;

  const handleAccept = () => {
    navigation.navigate('AcceptedJobSummary', { job });
  };

  return (
    <View style={styles.container}>
      <Ionicons name="help-circle-outline" size={64} color={COLORS.primary} />
      <Text style={styles.title}>Accept this Job?</Text>
      <Text style={styles.subtitle}>Are you sure you want to accept this job?</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>{job?.type} • {job?.location}</Text>
        <Text style={styles.earning}>₹{job?.earning}</Text>
      </View>

      <Text style={styles.note}>Once accepted, you should not receive another overlapping job.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.acceptBtn} onPress={handleAccept}>
          <Text style={styles.acceptText}>Yes, Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.sm, textAlign: 'center' },
  infoBox: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, width: '100%', alignItems: 'center', marginTop: SPACING.lg },
  infoText: { ...FONTS.medium },
  earning: { ...FONTS.bold, color: COLORS.success, fontSize: 24, marginTop: SPACING.sm },
  note: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.md },
  buttons: { width: '100%', gap: SPACING.md, marginTop: SPACING.xl },
  acceptBtn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  acceptText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  cancelBtn: { borderWidth: 1, borderColor: COLORS.border, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  cancelText: { color: COLORS.text, fontSize: 16 },
});
