import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, APP_NAME, APP_TAGLINE } from '../../constants/theme';
import { useApp } from '../../context/AppContext';

export default function SplashScreen({ navigation }) {
  const { state } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.isLoggedIn) navigation.replace('MainTabs');
      else navigation.replace('EnterInvite');
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <Text style={styles.tagline}>{APP_TAGLINE}</Text>
      </View>
      <ActivityIndicator size="small" color={COLORS.white} style={styles.loader} />
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  center: { alignItems: 'center' },
  logo: {
    width: 96, height: 96, borderRadius: RADIUS.lg + 8,
    backgroundColor: COLORS.white,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  logoText: { fontSize: 48, fontWeight: '900', color: COLORS.primary, letterSpacing: -1 },
  appName: { fontSize: 30, fontWeight: '800', color: COLORS.white, letterSpacing: -0.5 },
  tagline: { fontSize: 15, color: COLORS.white, opacity: 0.85, marginTop: SPACING.xs },
  loader: { marginTop: SPACING.xxl },
  version: { position: 'absolute', bottom: SPACING.lg, color: COLORS.white, opacity: 0.6, fontSize: 12 },
});
