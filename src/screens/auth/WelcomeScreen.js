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
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('CreateAccount')}>
          <Ionicons name="person-add-outline" size={20} color={COLORS.white} />
          <Text style={styles.primaryBtnText}>Register as Vizehelp Buddy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('EnterInvite')}>
          <Ionicons name="business-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryBtnText}>Join with Enterprise Invite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textBtnText}>Already have an account? <Text style={styles.textBtnBold}>Log In</Text></Text>
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
  secondaryBtn: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm },
  secondaryBtnText: { color: COLORS.primary, fontSize: 16, fontWeight: '600' },
  textBtn: { alignItems: 'center', paddingVertical: SPACING.md },
  textBtnText: { fontSize: 15, color: COLORS.gray },
  textBtnBold: { color: COLORS.primary, fontWeight: '700' },
  footer: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.xl, fontSize: 12 },
});
