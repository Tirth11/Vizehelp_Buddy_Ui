import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function BackgroundCheckScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 6 of 11</Text>
      <Text style={styles.title}>Background Check</Text>
      <Text style={styles.subtitle}>We partner with Checkr to run a standard background check</Text>

      <View style={styles.card}>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Criminal record check</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Sex offender registry</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Motor vehicle records (if applicable)</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={22} color={COLORS.secondary} />
          <Text style={styles.checkText}>Identity verification</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Ionicons name="time-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>Background checks typically complete within 3-5 business days. You'll be notified once approved.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SelectServices')}>
        <Text style={styles.btnText}>Authorize & Continue</Text>
      </TouchableOpacity>

      <Text style={styles.legal}>By continuing, you authorize Vizehelp to conduct a background check through our third-party provider.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  card: { backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.lg, gap: SPACING.md, marginBottom: SPACING.lg },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  checkText: { ...FONTS.medium },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  legal: { ...FONTS.small, textAlign: 'center', marginTop: SPACING.lg, fontSize: 12 },
});
