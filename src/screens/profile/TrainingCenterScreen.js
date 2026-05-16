import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const MODULES = [
  { id: 1, title: 'Customer Communication', duration: '15 min', status: 'completed', icon: 'chatbubbles-outline' },
  { id: 2, title: 'Safety Basics', duration: '10 min', status: 'completed', icon: 'shield-outline' },
  { id: 3, title: 'Service Checklist Training', duration: '20 min', status: 'completed', icon: 'list-outline' },
  { id: 4, title: 'Cleaning Standards', duration: '25 min', status: 'in_progress', icon: 'sparkles-outline' },
  { id: 5, title: 'Senior Assistance Basics', duration: '20 min', status: 'locked', icon: 'heart-outline' },
  { id: 6, title: 'Delivery Proof Process', duration: '15 min', status: 'locked', icon: 'camera-outline' },
  { id: 7, title: 'App Usage Training', duration: '10 min', status: 'locked', icon: 'phone-portrait-outline' },
];

export default function TrainingCenterScreen() {
  const completed = MODULES.filter(m => m.status === 'completed').length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Training Center</Text>
      <Text style={styles.subtitle}>Complete modules to unlock services</Text>

      <View style={[styles.progressCard, SHADOWS.small]}>
        <Text style={styles.progressLabel}>{completed}/{MODULES.length} Completed</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completed / MODULES.length) * 100}%` }]} />
        </View>
      </View>

      <View style={styles.modules}>
        {MODULES.map(m => (
          <TouchableOpacity key={m.id} style={[styles.moduleCard, SHADOWS.small]} disabled={m.status === 'locked'}>
            <View style={[styles.moduleIcon, { backgroundColor: m.status === 'completed' ? COLORS.success + '18' : m.status === 'in_progress' ? COLORS.primary + '18' : COLORS.lightGray }]}>
              <Ionicons name={m.icon} size={22} color={m.status === 'completed' ? COLORS.success : m.status === 'in_progress' ? COLORS.primary : COLORS.gray} />
            </View>
            <View style={styles.moduleInfo}>
              <Text style={[styles.moduleTitle, m.status === 'locked' && { color: COLORS.gray }]}>{m.title}</Text>
              <Text style={styles.moduleDuration}>{m.duration}</Text>
            </View>
            {m.status === 'completed' && <Ionicons name="checkmark-circle" size={22} color={COLORS.success} />}
            {m.status === 'in_progress' && <View style={styles.resumeBadge}><Text style={styles.resumeText}>Resume</Text></View>}
            {m.status === 'locked' && <Ionicons name="lock-closed" size={18} color={COLORS.gray} />}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  progressCard: { backgroundColor: COLORS.white, borderRadius: 14, padding: SPACING.md, marginBottom: SPACING.lg },
  progressLabel: { ...FONTS.medium, marginBottom: SPACING.sm },
  progressBar: { height: 8, backgroundColor: COLORS.lightGray, borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: COLORS.success, borderRadius: 4 },
  modules: { gap: SPACING.sm },
  moduleCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, gap: SPACING.md },
  moduleIcon: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  moduleInfo: { flex: 1 },
  moduleTitle: { ...FONTS.medium },
  moduleDuration: { ...FONTS.small },
  resumeBadge: { backgroundColor: COLORS.primaryLight, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 8 },
  resumeText: { color: COLORS.primary, fontSize: 12, fontWeight: '700' },
});
