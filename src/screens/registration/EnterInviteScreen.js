import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, APP_NAME } from '../../constants/theme';

export default function EnterInviteScreen({ navigation }) {
  const [enterpriseCode, setEnterpriseCode] = useState('');
  const [mobile, setMobile] = useState('');

  const valid = enterpriseCode.trim().length >= 3 && mobile.length === 10;

  const handleContinue = () => {
    navigation.navigate('OTPVerification', {
      mobile: mobile || '5555550147',
      enterpriseCode: enterpriseCode || 'DEMO',
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>V</Text>
          </View>
          <Text style={styles.appName}>{APP_NAME}</Text>
          <Text style={styles.tagline}>Login with your enterprise invite to{'\n'}start your Buddy onboarding.</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Enterprise Invite ID</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="business-outline" size={18} color={COLORS.textLight} />
            <TextInput
              style={styles.input}
              placeholder="e.g. CLEANPRO"
              placeholderTextColor={COLORS.textLight}
              value={enterpriseCode}
              onChangeText={setEnterpriseCode}
              autoCapitalize="characters"
            />
          </View>

          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputWrap}>
            <Text style={styles.prefix}>+1</Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="555 000 0000"
              placeholderTextColor={COLORS.textLight}
              keyboardType="phone-pad"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <TouchableOpacity style={[styles.btn, !valid && styles.btnDisabled]} onPress={handleContinue} disabled={!valid}>
            <Text style={styles.btnText}>Continue</Text>
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpBtn} onPress={() => navigation.navigate('Support')}>
            <Ionicons name="help-circle-outline" size={16} color={COLORS.primary} />
            <Text style={styles.helpText}>Need an invite ID?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scroll: { flexGrow: 1, justifyContent: 'space-between', paddingTop: SPACING.xxl + SPACING.md, paddingBottom: SPACING.xl },
  topSection: { alignItems: 'center', paddingVertical: SPACING.xl },
  logo: { width: 76, height: 76, borderRadius: RADIUS.lg + 4, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md, ...SHADOWS.medium },
  logoText: { fontSize: 36, fontWeight: '900', color: COLORS.white, letterSpacing: -1 },
  appName: { fontSize: 28, fontWeight: '800', color: COLORS.text, letterSpacing: -0.3, marginBottom: SPACING.xs },
  tagline: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center', lineHeight: 21 },
  formSection: { paddingHorizontal: SPACING.lg },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm },
  inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, height: 56, marginBottom: SPACING.md, gap: SPACING.sm },
  prefix: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  divider: { width: 1, height: 24, backgroundColor: COLORS.border },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, marginTop: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  helpBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: SPACING.lg, gap: 6 },
  helpText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
