import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

const REASONS = ['Too far', 'Not available', 'Wrong skill', 'Personal reason', 'Other'];

export default function RejectJobScreen({ navigation, route }) {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!reason) return Alert.alert('Required', 'Please select a reason');
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reject Job</Text>
      <Text style={styles.subtitle}>Please select a reason for rejecting this job.</Text>

      {REASONS.map(r => (
        <TouchableOpacity key={r} style={[styles.reasonCard, reason === r && styles.reasonActive]} onPress={() => setReason(r)}>
          <Text style={[styles.reasonText, reason === r && styles.reasonTextActive]}>{r}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={[styles.btn, !reason && styles.btnDisabled]} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  reasonCard: { padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.sm },
  reasonActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  reasonText: { ...FONTS.medium },
  reasonTextActive: { color: COLORS.white },
  btn: { backgroundColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
