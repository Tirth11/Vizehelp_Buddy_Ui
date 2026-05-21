import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const ASSIGNED_SERVICES = [
  { name: 'Home Assistance', icon: 'home-outline' },
  { name: 'Pickup & Drop', icon: 'swap-horizontal-outline' },
  { name: 'Cleaning Support', icon: 'water-outline' },
  { name: 'Senior Assistance', icon: 'heart-outline' },
  { name: 'Field Support', icon: 'construct-outline' },
];

export default function SelectServicesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 9 of 10</Text>
      <Text style={styles.title}>Assigned Services</Text>
      <Text style={styles.subtitle}>Services assigned by your enterprise. These are managed by your admin.</Text>

      <View style={styles.enterpriseCard}>
        <Ionicons name="business" size={22} color={COLORS.primary} />
        <Text style={styles.enterpriseName}>ABC Home Services</Text>
      </View>

      <Text style={styles.label}>Assigned Service Categories</Text>
      <View style={styles.list}>
        {ASSIGNED_SERVICES.map(svc => (
          <View key={svc.name} style={styles.serviceRow}>
            <Ionicons name={svc.icon} size={22} color={COLORS.primary} />
            <Text style={styles.serviceName}>{svc.name}</Text>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
          </View>
        ))}
      </View>

      <View style={styles.info}>
        <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>Services are assigned by your enterprise. Contact your admin to request changes.</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SubmitApproval')}>
        <Text style={styles.btnText}>Continue to Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  enterpriseCard: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  enterpriseName: { ...FONTS.medium, color: COLORS.primary },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm },
  list: { gap: SPACING.sm, marginBottom: SPACING.lg },
  serviceRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12 },
  serviceName: { ...FONTS.medium, flex: 1 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
