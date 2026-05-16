import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BankSettingsScreen({ navigation }) {
  const [upi, setUpi] = useState('rahul@upi');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank / UPI Settings</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Bank Account</Text>
        <View style={styles.maskedRow}>
          <Ionicons name="card-outline" size={18} color={COLORS.primary} />
          <Text style={styles.maskedText}>****4521 (HDFC Bank)</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>UPI ID</Text>
        <TextInput style={styles.input} value={upi} onChangeText={setUpi} />
      </View>

      <Text style={styles.note}>OTP verification required before saving changes.</Text>

      <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Saved', 'Payment details updated', [{ text: 'OK', onPress: () => navigation.goBack() }])}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.md },
  label: { ...FONTS.small, marginBottom: SPACING.sm },
  maskedRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  maskedText: { ...FONTS.medium },
  input: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16 },
  note: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.md },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
