import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const ASSIGNED_SERVICES = [
  { name: 'Home Assistance',  icon: 'home-outline' },
  { name: 'Pickup & Drop',    icon: 'swap-horizontal-outline' },
  { name: 'Cleaning Support', icon: 'water-outline' },
  { name: 'Senior Assistance',icon: 'heart-outline' },
  { name: 'Field Support',    icon: 'construct-outline' },
];

export default function SelectServicesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StepProgress
        step={9}
        total={9}
        onBack={() => navigation.goBack()}
        title="Your Services"
        subtitle="Services your enterprise has assigned to you."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.enterpriseCard}>
          <View style={styles.enterpriseIcon}>
            <Ionicons name="business" size={20} color={COLORS.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.enterpriseLabel}>Enterprise</Text>
            <Text style={styles.enterpriseName}>ABC Home Services</Text>
          </View>
        </View>

        <Text style={styles.label}>Assigned Services</Text>
        <View style={styles.list}>
          {ASSIGNED_SERVICES.map(svc => (
            <View key={svc.name} style={styles.serviceRow}>
              <View style={styles.serviceIcon}>
                <Ionicons name={svc.icon} size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.serviceName}>{svc.name}</Text>
              <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
            </View>
          ))}
        </View>

        <View style={styles.info}>
          <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>Need different services? Contact your enterprise admin.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SubmitApproval')}>
          <Text style={styles.btnText}>Continue to Review</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  enterpriseCard: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.lg },
  enterpriseIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center' },
  enterpriseLabel: { ...FONTS.caption, color: COLORS.primary, fontWeight: '700' },
  enterpriseName: { ...FONTS.medium, color: COLORS.text },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.sm },
  list: { gap: SPACING.sm, marginBottom: SPACING.lg },
  serviceRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.background, padding: SPACING.md, borderRadius: RADIUS.md, borderWidth: 1, borderColor: COLORS.border },
  serviceIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  serviceName: { ...FONTS.medium, flex: 1 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
