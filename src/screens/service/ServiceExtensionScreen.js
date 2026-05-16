import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function ServiceExtensionScreen({ navigation }) {
  const [reason, setReason] = useState('');
  const [time, setTime] = useState('');
  const [charges, setCharges] = useState('');

  const handleSubmit = () => {
    if (!reason) return Alert.alert('Required', 'Please provide a reason');
    Alert.alert('Submitted', 'Extension request sent for customer approval.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Extension</Text>
      <Text style={styles.subtitle}>Request extra time or report additional work</Text>

      <Text style={styles.label}>Extra Work Reason *</Text>
      <TextInput style={styles.input} placeholder="Describe the extra work needed" multiline value={reason} onChangeText={setReason} />

      <Text style={styles.label}>Additional Time</Text>
      <TextInput style={styles.input} placeholder="e.g., 30 minutes" value={time} onChangeText={setTime} />

      <Text style={styles.label}>Additional Charges (if applicable)</Text>
      <TextInput style={styles.input} placeholder="₹0" keyboardType="number-pad" value={charges} onChangeText={setCharges} />

      <View style={styles.noteBox}>
        <Text style={styles.noteText}>⚠️ Customer approval is required for additional charges.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  label: { ...FONTS.medium, marginBottom: SPACING.xs, marginTop: SPACING.md },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16 },
  noteBox: { backgroundColor: '#FFF8E1', padding: SPACING.md, borderRadius: 12, marginTop: SPACING.lg },
  noteText: { ...FONTS.regular, color: COLORS.darkGray },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
