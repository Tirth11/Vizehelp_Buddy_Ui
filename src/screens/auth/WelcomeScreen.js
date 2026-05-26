import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, APP_NAME } from '../../constants/theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>
        <Text style={styles.title}>{APP_NAME}</Text>
        <Text style={styles.subtitle}>Earn on your schedule.{'\n'}Easy jobs. On-time pay.</Text>
      </View>

      <View style={styles.bullets}>
        <Bullet icon="briefcase" text="Get jobs from your enterprise" />
        <Bullet icon="cash" text="Track earnings in real-time" />
        <Bullet icon="shield-checkmark" text="Secure & verified work" />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('EnterInvite')}>
          <Text style={styles.primaryBtnText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>By continuing, you agree to our Terms & Privacy Policy</Text>
    </View>
  );
}

function Bullet({ icon, text }) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.bulletIcon}>
        <Ionicons name={icon} size={18} color={COLORS.primary} />
      </View>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'space-between', paddingTop: SPACING.xxl + SPACING.lg, paddingBottom: SPACING.lg },
  hero: { alignItems: 'center' },
  logo: { width: 80, height: 80, borderRadius: RADIUS.lg + 4, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg, ...SHADOWS.medium },
  logoText: { fontSize: 38, fontWeight: '900', color: COLORS.white, letterSpacing: -1 },
  title: { ...FONTS.title, fontSize: 30, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, textAlign: 'center', color: COLORS.textLight, lineHeight: 22, fontSize: 16 },
  bullets: { gap: SPACING.md, paddingHorizontal: SPACING.sm },
  bulletRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md },
  bulletIcon: { width: 40, height: 40, borderRadius: RADIUS.md, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  bulletText: { ...FONTS.medium, fontSize: 15, color: COLORS.text },
  buttons: { gap: SPACING.md },
  primaryBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  primaryBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  footer: { ...FONTS.small, textAlign: 'center', fontSize: 12 },
});
