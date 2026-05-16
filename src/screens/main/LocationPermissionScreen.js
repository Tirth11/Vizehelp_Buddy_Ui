import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function LocationPermissionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={80} color={COLORS.primary} />
      <Text style={styles.title}>Location Permission Required</Text>
      <Text style={styles.subtitle}>We need your location to allocate nearby jobs and track service delivery.</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>• Find jobs near you</Text>
        <Text style={styles.infoText}>• Navigate to job locations</Text>
        <Text style={styles.infoText}>• Verify arrival at service location</Text>
        <Text style={styles.infoText}>• Ensure safety during active jobs</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Allow Location</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.settingsText}>Open Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginTop: SPACING.sm, marginBottom: SPACING.lg },
  infoBox: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, width: '100%', marginBottom: SPACING.lg },
  infoText: { ...FONTS.regular, paddingVertical: SPACING.xs },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', width: '100%' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  settingsBtn: { marginTop: SPACING.md, padding: SPACING.md },
  settingsText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
