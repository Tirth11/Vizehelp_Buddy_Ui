import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const OTP_LENGTH = 6;

export default function VerifyMobileScreen({ navigation }) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  useEffect(() => {
    const i = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);

  const handleChange = (text, idx) => {
    const v = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[idx] = v;
    setDigits(next);
    if (v && idx < OTP_LENGTH - 1) inputs.current[idx + 1]?.focus();
  };
  const handleKey = (e, idx) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[idx] && idx > 0) inputs.current[idx - 1]?.focus();
  };
  const valid = digits.join('').length === OTP_LENGTH;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={2}
        total={4}
        onBack={() => navigation.goBack()}
        title="Verify Your Phone"
        subtitle="We sent a 6-digit code to +1 (555) 000-0000"
      />

      <View style={styles.content}>
        <View style={styles.otpRow}>
          {digits.map((d, i) => (
            <TextInput
              key={i}
              ref={r => (inputs.current[i] = r)}
              style={[styles.otpBox, d && styles.otpBoxFilled]}
              value={d}
              onChangeText={(t) => handleChange(t, i)}
              onKeyPress={(e) => handleKey(e, i)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={i === 0}
            />
          ))}
        </View>

        <View style={styles.resendRow}>
          {timer > 0 ? (
            <Text style={styles.timerText}>Resend code in <Text style={styles.bold}>{timer}s</Text></Text>
          ) : (
            <TouchableOpacity onPress={() => setTimer(30)}><Text style={styles.linkText}>Resend Code</Text></TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.btn, !valid && styles.btnDisabled]} disabled={!valid} onPress={() => navigation.navigate('VerifyEmail')}>
          <Text style={styles.btnText}>Verify & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { flex: 1, padding: SPACING.lg },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.lg, gap: SPACING.sm },
  otpBox: { flex: 1, height: 56, borderRadius: RADIUS.md, backgroundColor: COLORS.lightGray, textAlign: 'center', fontSize: 22, fontWeight: '700', color: COLORS.text, borderWidth: 1.5, borderColor: 'transparent' },
  otpBoxFilled: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  resendRow: { alignItems: 'center', marginTop: SPACING.sm },
  timerText: { color: COLORS.textLight, fontSize: 14 },
  bold: { color: COLORS.text, fontWeight: '700' },
  linkText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
