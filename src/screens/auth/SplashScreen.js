import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { useApp } from '../../context/AppContext';

export default function SplashScreen({ navigation }) {
  const { state } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(state.isLoggedIn ? 'MainTabs' : 'Welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>
        <Text style={styles.appName}>Vizehelp Buddy</Text>
        <Text style={styles.tagline}>Work. Earn. Grow with Vizehelp.</Text>
      </View>
      <ActivityIndicator size="large" color={COLORS.white} style={styles.loader} />
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  logoContainer: { alignItems: 'center' },
  logo: { width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md },
  logoText: { fontSize: 48, fontWeight: '700', color: COLORS.primary },
  appName: { fontSize: 28, fontWeight: '700', color: COLORS.white, marginBottom: SPACING.sm },
  tagline: { fontSize: 16, color: COLORS.white, opacity: 0.9 },
  loader: { marginTop: SPACING.xxl },
  version: { position: 'absolute', bottom: SPACING.lg, color: COLORS.white, opacity: 0.7, fontSize: 12 },
});
