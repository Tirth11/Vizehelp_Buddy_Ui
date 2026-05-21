import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function EnterInviteScreen({ navigation }) {
  const [enterpriseCode, setEnterpriseCode] = useState('');
  const [mobile, setMobile] = useState('');

  const handleContinue = () => {
    navigation.navigate('OTPVerification', { mobile: mobile || '9999999999', enterpriseCode: enterpriseCode || 'DEMO' });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.topSection}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>
        <Text style={styles.appName}>Vizehelp Buddyonly</Text>
        <Text style={styles.tagline}>Login with your enterprise invite to start{'\n'}your Buddy onboarding.</Text>
      </View>

      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Enterprise Invite ID"
          placeholderTextColor={COLORS.gray}
          value={enterpriseCode}
          onChangeText={setEnterpriseCode}
          autoCapitalize="characters"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={COLORS.gray}
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />

        <TouchableOpacity style={styles.btn} onPress={handleContinue}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpBtn} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="help-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.helpText}>Need Help?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  topSection: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: SPACING.xxl },
  logo: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md, ...SHADOWS.medium },
  logoText: { fontSize: 36, fontWeight: '800', color: COLORS.white },
  appName: { fontSize: 28, fontWeight: '800', color: COLORS.text, letterSpacing: -0.5, marginBottom: SPACING.sm },
  tagline: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', lineHeight: 22 },
  formSection: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xxl },
  input: { backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md, fontSize: 16, color: COLORS.text, marginBottom: SPACING.md },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 12, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  helpBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: SPACING.lg, gap: 6 },
  helpText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
