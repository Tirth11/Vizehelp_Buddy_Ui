import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideUp, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleSendOTP = () => {
    navigation.navigate('LoginOTP', { mobile: mobile || '9999999999' });
  };

  const isValid = mobile.length >= 10;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Back button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      >
        <Ionicons name="arrow-back" size={22} color={COLORS.text} />
      </TouchableOpacity>

      <Animated.View style={[styles.content, { opacity: fadeIn, transform: [{ translateY: slideUp }] }]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="phone-portrait-outline" size={24} color={COLORS.primary} />
          </View>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Enter your registered mobile number to receive a verification code</Text>
        </View>

        {/* Input */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>MOBILE NUMBER</Text>
          <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
            <View style={styles.prefixBox}>
              <Text style={styles.flag}>🇺🇸</Text>
              <Text style={styles.prefix}>+1</Text>
            </View>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="(555) 000-0000"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="phone-pad"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {isValid && (
              <View style={styles.checkIcon}>
                <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
              </View>
            )}
          </View>
          <Text style={styles.inputHelper}>We'll send a 6-digit code to verify your number</Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.btn, !isValid && styles.btnDisabled]}
          onPress={handleSendOTP}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Send Verification Code</Text>
          <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
        </TouchableOpacity>

        {/* Help */}
        <TouchableOpacity style={styles.helpLink} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="help-circle-outline" size={16} color={COLORS.primary} />
          <Text style={styles.helpText}>Need Help?</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backBtn: {
    position: 'absolute',
    top: SPACING.xxl + SPACING.sm,
    left: SPACING.lg,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    justifyContent: 'center',
  },
  header: {
    marginBottom: SPACING.xl,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    ...FONTS.h2,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  inputSection: {
    marginBottom: SPACING.lg,
  },
  label: {
    ...FONTS.caption,
    marginBottom: SPACING.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.lightGray,
    height: 56,
  },
  inputFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    ...SHADOWS.small,
  },
  prefixBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  flag: {
    fontSize: 18,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
    paddingVertical: 0,
  },
  checkIcon: {
    marginLeft: SPACING.xs,
  },
  inputHelper: {
    ...FONTS.bodySmall,
    marginTop: SPACING.sm,
    fontSize: 12,
    color: COLORS.textLight,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md + 2,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    ...SHADOWS.medium,
  },
  btnDisabled: {
    backgroundColor: COLORS.primaryMid,
    opacity: 0.6,
  },
  btnText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  helpLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.xs,
    marginTop: SPACING.xl,
  },
  helpText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
