import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function LoginOTPScreen({ navigation, route }) {
  const { dispatch } = useApp();
  const { mobile } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(30)).current;


  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideUp, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    }
  };

  const handleVerify = () => {
    dispatch({ type: 'LOGIN', payload: MOCK_USER });
    navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
  };

  const otpFilled = otp.every(d => d !== '');


  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
        <Ionicons name="arrow-back" size={22} color={COLORS.text} />
      </TouchableOpacity>

      <Animated.View style={[styles.content, { opacity: fadeIn, transform: [{ translateY: slideUp }] }]}>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="lock-closed-outline" size={24} color={COLORS.primary} />
          </View>
          <Text style={styles.title}>Verify Your Number</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit code sent to{'\n'}
            <Text style={styles.phoneText}>+1 {mobile}</Text>
          </Text>
        </View>

        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={[styles.otpBox, activeIndex === index && styles.otpBoxActive, digit && styles.otpBoxFilled]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              onFocus={() => setActiveIndex(index)}
              selectTextOnFocus
            />
          ))}
        </View>


        <TouchableOpacity style={[styles.btn, !otpFilled && styles.btnDisabled]} onPress={handleVerify} activeOpacity={0.85}>
          <Text style={styles.btnText}>Verify & Login</Text>
          <Ionicons name="checkmark-circle" size={18} color={COLORS.white} />
        </TouchableOpacity>

        <View style={styles.resendRow}>
          {timer > 0 ? (
            <View style={styles.timerBox}>
              <Ionicons name="time-outline" size={14} color={COLORS.textLight} />
              <Text style={styles.timerText}>Resend code in <Text style={styles.timerBold}>{timer}s</Text></Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.resendBtn} onPress={() => setTimer(30)}>
              <Ionicons name="refresh" size={14} color={COLORS.primary} />
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.changeLink} onPress={() => navigation.goBack()}>
          <Text style={styles.changeText}>Change Mobile Number</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  backBtn: {
    position: 'absolute', top: SPACING.xxl + SPACING.sm, left: SPACING.lg, zIndex: 10,
    width: 40, height: 40, borderRadius: RADIUS.md, backgroundColor: COLORS.lightGray,
    justifyContent: 'center', alignItems: 'center',
  },
  content: { flex: 1, paddingHorizontal: SPACING.lg, justifyContent: 'center' },
  header: { marginBottom: SPACING.xl },
  headerIcon: {
    width: 48, height: 48, borderRadius: RADIUS.md, backgroundColor: COLORS.primaryLight,
    justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md,
  },
  title: { ...FONTS.h2, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.body, color: COLORS.textSecondary, lineHeight: 24 },
  phoneText: { fontWeight: '700', color: COLORS.text },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.xl, gap: SPACING.sm },
  otpBox: {
    flex: 1, height: 56, borderWidth: 1.5, borderColor: COLORS.border, borderRadius: RADIUS.md,
    fontSize: 22, fontWeight: '700', textAlign: 'center', color: COLORS.text, backgroundColor: COLORS.lightGray,
  },
  otpBoxActive: { borderColor: COLORS.primary, backgroundColor: COLORS.white, ...SHADOWS.small },
  otpBoxFilled: { borderColor: COLORS.success, backgroundColor: COLORS.successLight },
  btn: {
    flexDirection: 'row', backgroundColor: COLORS.primary, paddingVertical: SPACING.md + 2,
    borderRadius: RADIUS.lg, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.medium,
  },
  btnDisabled: { backgroundColor: COLORS.primaryMid, opacity: 0.6 },
  btnText: { ...FONTS.button, color: COLORS.white },
  resendRow: { marginTop: SPACING.lg, alignItems: 'center' },
  timerBox: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  timerText: { color: COLORS.textLight, fontSize: 14 },
  timerBold: { fontWeight: '700', color: COLORS.textSecondary },
  resendBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: RADIUS.md, backgroundColor: COLORS.primaryLight },
  resendText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  changeLink: { marginTop: SPACING.md, alignItems: 'center' },
  changeText: { color: COLORS.primary, fontSize: 14, fontWeight: '500' },
});
