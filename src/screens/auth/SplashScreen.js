import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS } from '../../constants/theme';
import { useApp } from '../../context/AppContext';

const { width } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const { state } = useApp();
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Logo entrance animation
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Text fade in after logo
    setTimeout(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 400);

    // Pulse animation for loading indicator
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 0.4, duration: 800, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();

    // Navigate after splash
    const timer = setTimeout(() => {
      if (state.isLoggedIn) {
        navigation.replace('MainTabs');
      } else {
        navigation.replace('EnterInvite');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Background decoration */}
      <View style={styles.bgCircle1} />
      <View style={styles.bgCircle2} />

      <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }], opacity: logoOpacity }]}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>
      </Animated.View>

      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.appName}>Vizehelp Buddy</Text>
        <Text style={styles.tagline}>Work. Earn. Grow.</Text>
      </Animated.View>

      <Animated.View style={[styles.loadingContainer, { opacity: pulseAnim }]}>
        <View style={styles.loadingDot} />
        <View style={[styles.loadingDot, styles.loadingDotMid]} />
        <View style={styles.loadingDot} />
      </Animated.View>

      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgCircle1: {
    position: 'absolute',
    top: -width * 0.4,
    right: -width * 0.3,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  bgCircle2: {
    position: 'absolute',
    bottom: -width * 0.3,
    left: -width * 0.3,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  logoContainer: {
    marginBottom: SPACING.lg,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: RADIUS.xxl,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  logoText: {
    fontSize: 52,
    fontWeight: '800',
    color: COLORS.primary,
  },
  textContainer: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.white,
    letterSpacing: -0.5,
    marginBottom: SPACING.xs,
  },
  tagline: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.85,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  loadingContainer: {
    flexDirection: 'row',
    marginTop: SPACING.xxl,
    gap: SPACING.sm,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  loadingDotMid: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  version: {
    position: 'absolute',
    bottom: SPACING.xl,
    color: COLORS.white,
    opacity: 0.5,
    fontSize: 12,
    fontWeight: '500',
  },
});
