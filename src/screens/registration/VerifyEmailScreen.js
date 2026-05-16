import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyEmailScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 3 of 11</Text>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to john@example.com</Text>

      <View style={styles.codeWrap}>
        <TextInput style={styles.codeInput} value={code} onChangeText={setCode} placeholder="000000" keyboardType="number-pad" maxLength={6} textAlign="center" />
      </View>

      <TouchableOpacity style={styles.resend}>
        <Text style={styles.resendText}>Didn't receive it? <Text style={styles.resendBold}>Resend Code</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CompleteProfile')}>
        <Text style={styles.btnText}>Verify & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  codeWrap: { marginBottom: SPACING.lg },
  codeInput: { backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.md, fontSize: 28, fontWeight: '700', letterSpacing: 12, color: COLORS.text },
  resend: { alignItems: 'center', marginBottom: SPACING.xl },
  resendText: { ...FONTS.regular, color: COLORS.gray },
  resendBold: { color: COLORS.primary, fontWeight: '700' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
