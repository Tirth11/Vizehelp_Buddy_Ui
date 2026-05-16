import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerConfirmationScreen({ navigation, route }) {
  const job = route.params?.job;
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={64} color={COLORS.primary} />
      <Text style={styles.title}>Customer Confirmation</Text>
      <Text style={styles.subtitle}>Get final confirmation from the customer</Text>

      <Text style={styles.label}>Customer OTP</Text>
      <TextInput style={styles.otpInput} placeholder="Enter customer OTP" keyboardType="number-pad" maxLength={4} value={otp} onChangeText={setOtp} />

      <TouchableOpacity style={styles.signatureBtn}>
        <Ionicons name="pencil-outline" size={20} color={COLORS.primary} />
        <Text style={styles.signatureText}>Get Customer Signature</Text>
      </TouchableOpacity>

      <Text style={styles.confirmMsg}>Customer confirms the service has been completed satisfactorily.</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('JobCompletionSuccess', { job })}>
        <Text style={styles.btnText}>Confirm Completion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.md },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.sm, marginBottom: SPACING.lg },
  label: { ...FONTS.medium, alignSelf: 'flex-start', marginBottom: SPACING.sm },
  otpInput: { width: '100%', borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 18, textAlign: 'center', letterSpacing: 6, marginBottom: SPACING.lg },
  signatureBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, width: '100%', justifyContent: 'center', marginBottom: SPACING.lg },
  signatureText: { color: COLORS.primary, fontWeight: '600' },
  confirmMsg: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginBottom: SPACING.lg },
  btn: { width: '100%', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
