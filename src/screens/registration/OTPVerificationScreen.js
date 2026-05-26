import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';

const OTP_LENGTH = 6;

export default function OTPVerificationScreen({ navigation, route }) {
  const { mobile, enterpriseCode } = route.params;
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(30);
  const [verifying, setVerifying] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text, idx) => {
    const v = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[idx] = v;
    setDigits(next);
    if (v && idx < OTP_LENGTH - 1) inputs.current[idx + 1]?.focus();
  };

  const handleKeyPress = (e, idx) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const otp = digits.join('');
  const valid = otp.length === OTP_LENGTH;

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      navigation.reset({ index: 0, routes: [{ name: 'TermsConsent', params: { enterpriseCode, mobile } }] });
    }, 600);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="arrow-back" size={22} color={COLORS.text} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>OTP sent to <Text style={styles.bold}>+1 {mobile}</Text></Text>

        <View style={styles.otpRow}>
          {digits.map((d, i) => (
            <TextInput
              key={i}
              ref={r => (inputs.current[i] = r)}
              style={[styles.otpBox, d && styles.otpBoxFilled]}
              value={d}
              onChangeText={(t) => handleChange(t, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={i === 0}
            />
          ))}
        </View>

        <TouchableOpacity style={[styles.btn, (!valid || verifying) && styles.btnDisabled]} onPress={handleVerify} disabled={!valid || verifying}>
          {verifying ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.btnText}>Verify & Continue</Text>}
        </TouchableOpacity>

        <View style={styles.resendRow}>
          {timer > 0 ? (
            <Text style={styles.timerText}>Resend OTP in <Text style={styles.bold}>{timer}s</Text></Text>
          ) : (
            <TouchableOpacity onPress={() => setTimer(30)}>
              <Text style={styles.linkText}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.changeBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.changeText}>Change Mobile Number</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, paddingTop: SPACING.xxl, paddingHorizontal: SPACING.lg },
  back: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md },
  content: { flex: 1 },
  title: { ...FONTS.title, fontSize: 28, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, marginBottom: SPACING.xl },
  bold: { fontWeight: '700', color: COLORS.text },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.xl, gap: SPACING.sm },
  otpBox: { flex: 1, height: 56, borderRadius: RADIUS.md, backgroundColor: COLORS.lightGray, textAlign: 'center', fontSize: 22, fontWeight: '700', color: COLORS.text, borderWidth: 1.5, borderColor: 'transparent' },
  otpBoxFilled: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', height: 54, ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  resendRow: { marginTop: SPACING.lg, alignItems: 'center' },
  timerText: { color: COLORS.textLight, fontSize: 14 },
  linkText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
  changeBtn: { alignItems: 'center', marginTop: SPACING.md },
  changeText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
