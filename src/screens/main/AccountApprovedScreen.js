import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function AccountApprovedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name="checkmark-circle" size={72} color={COLORS.success} />
      </View>

      <Text style={styles.title}>Congratulations! 🎉</Text>
      <Text style={styles.subtitle}>Your Vizehelp Buddy account is approved.</Text>
      <Text style={styles.desc}>You can now go online, accept jobs, complete services, and earn in dollars.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.replace('MainTabs')}>
          <Ionicons name="home-outline" size={20} color={COLORS.white} />
          <Text style={styles.primaryText}>Go to Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.replace('MainTabs', { screen: 'Schedule' })}>
          <Ionicons name="calendar-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryText}>Set Availability</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={() => navigation.navigate('ManageDocuments')}>
          <Ionicons name="shield-checkmark-outline" size={20} color={COLORS.primary} />
          <Text style={styles.secondaryText}>View Approved Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconWrap: { marginBottom: SPACING.lg },
  title: { ...FONTS.title, fontSize: 28, textAlign: 'center', marginBottom: SPACING.sm },
  subtitle: { ...FONTS.medium, textAlign: 'center', marginBottom: SPACING.xs },
  desc: { ...FONTS.regular, textAlign: 'center', color: COLORS.gray, marginBottom: SPACING.xl, paddingHorizontal: SPACING.md },
  buttons: { width: '100%', gap: SPACING.md },
  primaryBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  primaryText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  secondaryBtn: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.primary, padding: SPACING.md, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm },
  secondaryText: { color: COLORS.primary, fontSize: 15, fontWeight: '600' },
});
