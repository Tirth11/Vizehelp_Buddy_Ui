import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { useApp } from '../../context/AppContext';

const CHECKS = [
  { id: 1, label: 'Identity verification approved', passed: true },
  { id: 2, label: 'Background check approved',      passed: true },
  { id: 3, label: 'Payout details active',          passed: true },
  { id: 4, label: 'Approved services assigned',     passed: true },
  { id: 5, label: 'Location permission enabled',    passed: true },
  { id: 6, label: 'No account suspension',          passed: true },
];

export default function OnlineOfflineScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const isOnline = state.isOnline;
  const allPassed = CHECKS.every(c => c.passed);

  const toggleOnline = () => {
    if (!isOnline && !allPassed) return;
    dispatch({ type: 'TOGGLE_ONLINE' });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Online Status</Text>
        <View style={styles.back} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statusSection}>
          <View style={[styles.statusCircle, { backgroundColor: isOnline ? COLORS.successLight : COLORS.lightGray }]}>
            <Ionicons name={isOnline ? 'flash' : 'flash-off'} size={48} color={isOnline ? COLORS.success : COLORS.textLight} />
          </View>
          <Text style={[styles.statusLabel, { color: isOnline ? COLORS.success : COLORS.text }]}>
            {isOnline ? "You're Online" : "You're Offline"}
          </Text>
          <Text style={styles.statusDesc}>
            {isOnline ? 'Receiving job offers in your area' : 'Go online to start receiving job alerts'}
          </Text>
        </View>

        {!isOnline && (
          <View style={styles.checksSection}>
            <Text style={styles.checksTitle}>Pre-flight Checks</Text>
            {CHECKS.map(c => (
              <View key={c.id} style={styles.checkRow}>
                <View style={[styles.checkIcon, { backgroundColor: c.passed ? COLORS.successLight : COLORS.dangerLight }]}>
                  <Ionicons name={c.passed ? 'checkmark' : 'close'} size={14} color={c.passed ? COLORS.success : COLORS.danger} />
                </View>
                <Text style={[styles.checkText, !c.passed && { color: COLORS.danger }]}>{c.label}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            { backgroundColor: isOnline ? COLORS.danger : COLORS.success },
            (!isOnline && !allPassed) && styles.toggleDisabled,
          ]}
          onPress={toggleOnline}
          disabled={!isOnline && !allPassed}
          activeOpacity={0.85}
        >
          <Ionicons name="power" size={22} color={COLORS.white} />
          <Text style={styles.toggleText}>{isOnline ? 'Go Offline' : 'Go Online'}</Text>
        </TouchableOpacity>
        {!allPassed && !isOnline && (
          <Text style={styles.errorText}>Complete all checks above before going online.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SPACING.lg, paddingTop: SPACING.xl, paddingBottom: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  back: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { ...FONTS.subtitle },
  content: { padding: SPACING.lg },
  statusSection: { alignItems: 'center', marginVertical: SPACING.xl },
  statusCircle: { width: 128, height: 128, borderRadius: 64, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  statusLabel: { ...FONTS.title, fontSize: 24, marginBottom: SPACING.xs },
  statusDesc: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center' },
  checksSection: { backgroundColor: COLORS.background, borderRadius: RADIUS.md, padding: SPACING.md, marginBottom: SPACING.lg, borderWidth: 1, borderColor: COLORS.border },
  checksTitle: { ...FONTS.medium, marginBottom: SPACING.md },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.xs },
  checkIcon: { width: 22, height: 22, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  checkText: { ...FONTS.regular, flex: 1 },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  toggleBtn: { flexDirection: 'row', padding: SPACING.md + 4, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.medium },
  toggleDisabled: { opacity: 0.4 },
  toggleText: { color: COLORS.white, fontSize: 18, fontWeight: '800' },
  errorText: { ...FONTS.small, color: COLORS.danger, textAlign: 'center', marginTop: SPACING.sm, fontWeight: '600' },
});
