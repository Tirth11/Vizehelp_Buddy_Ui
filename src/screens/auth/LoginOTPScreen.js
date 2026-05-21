import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function LoginOTPScreen({ navigation, route }) {
  const { dispatch } = useApp();
  const { mobile } = route.params;
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    dispatch({ type: 'LOGIN', payload: MOCK_USER });
    navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter OTP sent to +1 {mobile}</Text>

      <TextInput
        style={styles.otpInput}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.btn} onPress={handleVerify}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.resendRow}>
        {timer > 0 ? (
          <Text style={styles.timerText}>Resend OTP in {timer}s</Text>
        ) : (
          <TouchableOpacity onPress={() => setTimer(30)}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.changeText}>Change Mobile Number</Text>
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
  resendRow: { marginTop: SPACING.lg, alignItems: 'center' },
  timerText: { color: COLORS.gray, fontSize: 14 },
  resendText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  changeText: { color: COLORS.primary, fontSize: 14, textAlign: 'center', marginTop: SPACING.md },
});
