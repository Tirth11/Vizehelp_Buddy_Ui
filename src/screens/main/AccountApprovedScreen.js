import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, APP_NAME } from '../../constants/theme';

export default function AccountApprovedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="checkmark" size={64} color={COLORS.white} />
      </View>

      <Text style={styles.title}>You're Approved!</Text>
      <Text style={styles.subtitle}>Your {APP_NAME} account is ready.</Text>
      <Text style={styles.desc}>Go online, accept jobs, complete services, and earn in dollars.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.primaryText}>Go to Dashboard</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.replace('MainTabs', { screen: 'Schedule' })}>
          <Ionicons name="calendar-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryText}>Set Availability</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 112, height: 112, borderRadius: 56, backgroundColor: COLORS.success, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg, ...SHADOWS.medium },
  title: { ...FONTS.title, fontSize: 28, textAlign: 'center', marginBottom: SPACING.xs },
  subtitle: { ...FONTS.medium, fontSize: 17, textAlign: 'center', marginBottom: SPACING.sm },
  desc: { ...FONTS.regular, textAlign: 'center', color: COLORS.textLight, marginBottom: SPACING.xl, paddingHorizontal: SPACING.md, lineHeight: 22 },
  buttons: { width: '100%', gap: SPACING.md },
  primaryBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  primaryText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  secondaryBtn: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.primary, padding: SPACING.md, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm },
  secondaryText: { color: COLORS.primary, fontSize: 15, fontWeight: '700' },
});
