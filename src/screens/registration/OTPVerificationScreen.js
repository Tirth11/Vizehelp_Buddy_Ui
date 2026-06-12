import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function OTPVerificationScreen({ navigation, route }) {
  const { mobile, enterpriseCode } = route.params;
  const { state, dispatch } = useApp();
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [verifying, setVerifying] = useState(false);
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = () => {
    if (!otp || otp.length < 4) {
      Alert.alert('Invalid OTP', 'Please enter a valid OTP.');
      return;
    }

    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      
      // Simulate wrong OTP verification
      if (otp !== '1234' && otp !== '123456') {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        if (newAttempts <= 0) {
          Alert.alert('Limit Reached', 'Too many failed attempts. Please request a new OTP.');
          setAttempts(3);
          setOtp('');
        } else {
          Alert.alert('Wrong OTP', `Invalid OTP entered. ${newAttempts} attempts remaining. (Use 1234 for simulation)`);
        }
        return;
      }

      checkBuddyStatus();
    }, 800);
  };

  const checkBuddyStatus = () => {
    const status = state.buddyStatus;
    
    if (status === 'New') {
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'TermsConsent', params: { enterpriseCode, mobile } }] 
      });
    } else if (status === 'UnderReview') {
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'ApprovalPending' }] 
      });
    } else if (status === 'Approved') {
      dispatch({ type: 'LOGIN', payload: MOCK_USER });
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'MainTabs' }] 
      });
    } else if (status === 'Rejected') {
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'Rejection' }] 
      });
    } else if (status === 'Suspended') {
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'Suspended' }] 
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>OTP sent to +1 {mobile}. (Use 1234 to verify)</Text>

      <TextInput
        style={styles.otpInput}
        placeholder="Enter OTP"
        placeholderTextColor={COLORS.gray}
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <Text style={styles.attemptsText}>Remaining attempts: {attempts}</Text>

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

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.changePhone}>
        <Text style={styles.linkText}>Change Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  otpInput: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 20, textAlign: 'center', letterSpacing: 8, marginBottom: SPACING.sm, color: COLORS.text },
  attemptsText: { ...FONTS.small, color: COLORS.danger, textAlign: 'center', marginBottom: SPACING.lg },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', height: 52, justifyContent: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  row: { marginTop: SPACING.lg, alignItems: 'center' },
  timerText: { color: COLORS.gray, fontSize: 14 },
  linkText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  changePhone: { marginTop: SPACING.md, alignItems: 'center' }
});
