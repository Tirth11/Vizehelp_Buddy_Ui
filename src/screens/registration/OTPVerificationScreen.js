import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function OTPVerificationScreen({ navigation, route }) {
  const { mobile } = route.params;
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    if (otp.length < 4) return Alert.alert('Error', 'Enter valid OTP');
    navigation.navigate('TermsConsent');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>OTP sent to +91 {mobile}</Text>

      <TextInput style={styles.otpInput} placeholder="Enter OTP" keyboardType="number-pad" maxLength={6} value={otp} onChangeText={setOtp} />

      <TouchableOpacity style={styles.btn} onPress={handleVerify}>
        <Text style={styles.btnText}>Verify OTP</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        {timer > 0 ? (
          <Text style={styles.timerText}>Resend in {timer}s</Text>
        ) : (
          <TouchableOpacity onPress={() => setTimer(30)}>
            <Text style={styles.linkText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Change Mobile Number</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  otpInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 20, textAlign: 'center', letterSpacing: 8, marginBottom: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  row: { marginTop: SPACING.lg, alignItems: 'center' },
  timerText: { color: COLORS.gray, fontSize: 14 },
  linkText: { color: COLORS.primary, fontSize: 14, textAlign: 'center', marginTop: SPACING.sm },
});
