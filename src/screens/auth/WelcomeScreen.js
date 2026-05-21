import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.iconWrap}>
          <Ionicons name="flash" size={48} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>Vizehelp Buddy</Text>
        <Text style={styles.subtitle}>Earn on your schedule. Join the #1 assisted services platform in the US.</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('EnterInvite')}>
          <Ionicons name="business-outline" size={20} color={COLORS.white} />
          <Text style={styles.primaryBtnText}>Enterprise Buddy Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>By continuing, you agree to our Terms of Service & Privacy Policy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  hero: { alignItems: 'center', marginBottom: SPACING.xxl },
  iconWrap: { width: 88, height: 88, borderRadius: 28, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, fontSize: 30, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, textAlign: 'center', color: COLORS.gray, lineHeight: 22, paddingHorizontal: SPACING.md },
  buttons: { gap: SPACING.md },
  primaryBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  primaryBtnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  footer: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.xl, fontSize: 12 },
});
