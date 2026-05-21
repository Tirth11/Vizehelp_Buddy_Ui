import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function OTPVerificationScreen({ navigation, route }) {
  const { mobile, enterpriseCode } = route.params;
  const { dispatch } = useApp();
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      checkBuddyStatus();
    }, 500);
  };

  const checkBuddyStatus = () => {
    // For UI testing: always go to new buddy registration flow
    navigation.reset({ index: 0, routes: [{ name: 'TermsConsent', params: { enterpriseCode, mobile } }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>OTP sent to +1 {mobile}</Text>

      <TextInput
        style={styles.otpInput}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.btn} onPress={handleVerify} disabled={verifying}>
        {verifying ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={styles.btnText}>Verify & Continue</Text>
        )}
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
        <Text style={styles.linkText}>Change Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  otpInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 20, textAlign: 'center', letterSpacing: 8, marginBottom: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', height: 52, justifyContent: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  row: { marginTop: SPACING.lg, alignItems: 'center' },
  timerText: { color: COLORS.gray, fontSize: 14 },
  linkText: { color: COLORS.primary, fontSize: 14, textAlign: 'center', marginTop: SPACING.sm },
});
