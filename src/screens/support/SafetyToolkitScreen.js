import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SafetyToolkitScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Safety Toolkit</Text>
      <Text style={styles.subtitle}>Your safety is our priority</Text>

      <TouchableOpacity style={styles.sosBtn} onPress={() => Linking.openURL('tel:911')}>
        <Ionicons name="alert-circle" size={28} color={COLORS.white} />
        <View>
          <Text style={styles.sosTitle}>Emergency SOS</Text>
          <Text style={styles.sosDesc}>Call 911 immediately</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.actions}>
        <ActionCard icon="call-outline" label="Call 911" desc="Emergency services" color={COLORS.danger} onPress={() => Linking.openURL('tel:911')} />
        <ActionCard icon="headset-outline" label="Call Vizehelp Support" desc="24/7 safety line" color={COLORS.primary} onPress={() => {}} />
        <ActionCard icon="location-outline" label="Share Live Location" desc="With emergency contact" color={COLORS.success} onPress={() => {}} />
        <ActionCard icon="flag-outline" label="Report Unsafe Customer" desc="File a safety report" color={COLORS.warning} onPress={() => {}} />
        <ActionCard icon="people-outline" label="Emergency Contact" desc="Notify your trusted person" color={COLORS.darkGray} onPress={() => {}} />
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>Safety Tips</Text>
        <Tip text="Always verify customer identity before starting service" />
        <Tip text="Share your live location with a trusted contact" />
        <Tip text="Trust your instincts — leave if you feel unsafe" />
        <Tip text="Keep your phone charged during jobs" />
        <Tip text="Park in well-lit, visible areas" />
      </View>
    </ScrollView>
  );
}

function ActionCard({ icon, label, desc, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.actionCard, SHADOWS.small]} onPress={onPress}>
      <View style={[styles.actionIcon, { backgroundColor: color + '18' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <View style={styles.actionInfo}>
        <Text style={styles.actionLabel}>{label}</Text>
        <Text style={styles.actionDesc}>{desc}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={COLORS.gray} />
    </TouchableOpacity>
  );
}

function Tip({ text }) {
  return (
    <View style={styles.tipRow}>
      <Ionicons name="shield-checkmark-outline" size={16} color={COLORS.success} />
      <Text style={styles.tipText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  sosBtn: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, backgroundColor: COLORS.danger, padding: SPACING.lg, borderRadius: 16, marginBottom: SPACING.lg },
  sosTitle: { color: COLORS.white, fontSize: 18, fontWeight: '800' },
  sosDesc: { color: COLORS.white, fontSize: 13, opacity: 0.9 },
  actions: { gap: SPACING.sm, marginBottom: SPACING.lg },
  actionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, gap: SPACING.md },
  actionIcon: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  actionInfo: { flex: 1 },
  actionLabel: { ...FONTS.medium },
  actionDesc: { ...FONTS.small },
  tips: { backgroundColor: COLORS.white, borderRadius: 16, padding: SPACING.md, ...SHADOWS.small },
  tipsTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  tipRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, marginBottom: SPACING.sm },
  tipText: { ...FONTS.regular, flex: 1 },
});
