import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function JoinEnterpriseScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.title}>Join Enterprise</Text>
      <Text style={styles.subtitle}>Enter the invite code from your enterprise</Text>

      <View style={styles.inputWrap}>
        <Ionicons name="key-outline" size={20} color={COLORS.gray} />
        <TextInput style={styles.input} value={code} onChangeText={setCode} placeholder="Enter invite code" placeholderTextColor={COLORS.textLight} autoCapitalize="characters" />
      </View>

      <View style={styles.info}>
        <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>Your enterprise admin will provide this code. Once submitted, the enterprise will review and approve your request.</Text>
      </View>

      <TouchableOpacity style={[styles.btn, !code && styles.btnDisabled]} disabled={!code} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Submit Request</Text>
      </TouchableOpacity>

      <View style={styles.rules}>
        <Text style={styles.rulesTitle}>Rules</Text>
        <Text style={styles.ruleText}>• You can only join active enterprises</Text>
        <Text style={styles.ruleText}>• Enterprise may approve or reject your request</Text>
        <Text style={styles.ruleText}>• Same invite code cannot be reused</Text>
        <Text style={styles.ruleText}>• You must accept enterprise-specific terms</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: 14, paddingHorizontal: SPACING.md, gap: SPACING.sm, marginBottom: SPACING.lg },
  input: { flex: 1, paddingVertical: 16, fontSize: 18, fontWeight: '600', color: COLORS.text, letterSpacing: 2 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  rules: { marginTop: SPACING.xl, backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.md },
  rulesTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  ruleText: { ...FONTS.small, marginBottom: 4 },
});
