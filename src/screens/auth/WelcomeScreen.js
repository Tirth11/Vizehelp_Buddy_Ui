import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, StatusBar } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideUp, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Hero Section */}
      <Animated.View style={[styles.hero, { opacity: fadeIn, transform: [{ translateY: slideUp }] }]}>
        <View style={styles.iconWrap}>
          <View style={styles.iconInner}>
            <Ionicons name="flash" size={36} color={COLORS.white} />
          </View>
        </View>
        <Text style={styles.title}>Vizehelp Buddy</Text>
        <Text style={styles.subtitle}>
          Earn on your schedule. Join the #1 assisted services platform in the US.
        </Text>

        {/* Feature highlights */}
        <View style={styles.features}>
          <FeatureItem icon="shield-checkmark" text="Verified & Secure" />
          <FeatureItem icon="cash" text="Fast Payouts" />
          <FeatureItem icon="location" text="Flexible Jobs" />
        </View>
      </Animated.View>

      {/* Buttons Section */}
      <Animated.View style={[styles.buttons, { opacity: fadeIn }]}>
        <TouchableOpacity
          style={styles.primaryBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('EnterInvite')}
        >
          <View style={styles.btnIconWrap}>
            <Ionicons name="business" size={18} color={COLORS.white} />
          </View>
          <Text style={styles.primaryBtnText}>Enterprise Buddy Login</Text>
          <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryBtnText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <Text style={styles.footer}>
        By continuing, you agree to our{' '}
        <Text style={styles.footerLink}>Terms of Service</Text> &{' '}
        <Text style={styles.footerLink}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={16} color={COLORS.primary} />
      </View>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    justifyContent: 'center',
  },
  hero: {
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  iconWrap: {
    width: 100,
    height: 100,
    borderRadius: RADIUS.xxl,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  iconInner: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  title: {
    ...FONTS.h1,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...FONTS.body,
    textAlign: 'center',
    color: COLORS.textSecondary,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  features: {
    flexDirection: 'row',
    gap: SPACING.lg,
  },
  featureItem: {
    alignItems: 'center',
    gap: SPACING.xs,
  },
  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    ...FONTS.bodySmall,
    fontWeight: '600',
    color: COLORS.textSecondary,
    fontSize: 11,
  },
  buttons: {
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  primaryBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    ...SHADOWS.medium,
  },
  btnIconWrap: {
    width: 28,
    height: 28,
    borderRadius: RADIUS.sm,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    ...FONTS.button,
    color: COLORS.white,
    flex: 1,
  },
  secondaryBtn: {
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  secondaryBtnText: {
    ...FONTS.buttonSmall,
    color: COLORS.primary,
  },
  footer: {
    ...FONTS.bodySmall,
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.textLight,
  },
  footerLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
