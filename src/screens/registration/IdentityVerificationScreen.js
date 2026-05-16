import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function IdentityVerificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 5 of 11</Text>
      <Text style={styles.title}>Identity Verification</Text>
      <Text style={styles.subtitle}>Upload a valid government-issued photo ID</Text>

      <View style={styles.options}>
        <DocOption icon="card-outline" label="Driver's License" desc="Front and back" />
        <DocOption icon="document-outline" label="State ID" desc="Front and back" />
        <DocOption icon="globe-outline" label="US Passport" desc="Photo page" />
      </View>

      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons name="camera-outline" size={24} color={COLORS.primary} />
        <Text style={styles.uploadText}>Take Photo or Upload</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Ionicons name="shield-checkmark-outline" size={18} color={COLORS.secondary} />
        <Text style={styles.infoText}>Your documents are encrypted and stored securely. We use industry-standard verification.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BackgroundCheck')}>
        <Text style={styles.btnText}>Submit & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

function DocOption({ icon, label, desc }) {
  return (
    <TouchableOpacity style={styles.docOption}>
      <Ionicons name={icon} size={22} color={COLORS.primary} />
      <View style={styles.docInfo}>
        <Text style={styles.docLabel}>{label}</Text>
        <Text style={styles.docDesc}>{desc}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={COLORS.gray} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  options: { gap: SPACING.sm, marginBottom: SPACING.lg },
  docOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, gap: SPACING.md },
  docInfo: { flex: 1 },
  docLabel: { ...FONTS.medium },
  docDesc: { ...FONTS.small },
  uploadBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, borderWidth: 2, borderColor: COLORS.primary, borderStyle: 'dashed', borderRadius: 14, padding: SPACING.lg, marginBottom: SPACING.lg },
  uploadText: { ...FONTS.medium, color: COLORS.primary },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: '#E8FFF5', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
