import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const valid = mobile.length === 10;

  const handleSendOTP = () => {
    navigation.navigate('LoginOTP', { mobile: mobile || '5555550147' });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Ionicons name="arrow-back" size={22} color={COLORS.text} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Enter your registered mobile number</Text>

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
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
            autoFocus
          />
        </View>

        <TouchableOpacity style={[styles.btn, !valid && styles.btnDisabled]} onPress={handleSendOTP} disabled={!valid}>
          <Text style={styles.btnText}>Send OTP</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpLink} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="help-circle-outline" size={16} color={COLORS.primary} />
          <Text style={styles.helpText}>Need Help?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, paddingTop: SPACING.xxl, paddingHorizontal: SPACING.lg },
  back: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.md },
  content: { flex: 1 },
  title: { ...FONTS.title, fontSize: 28, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, marginBottom: SPACING.xl },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, marginBottom: SPACING.lg, height: 56 },
  prefix: { fontSize: 16, fontWeight: '600', color: COLORS.text, marginRight: SPACING.sm },
  divider: { width: 1, height: 24, backgroundColor: COLORS.border, marginRight: SPACING.sm },
  input: { flex: 1, paddingVertical: SPACING.md, fontSize: 16, color: COLORS.text },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  helpLink: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.xs, marginTop: SPACING.lg },
  helpText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
