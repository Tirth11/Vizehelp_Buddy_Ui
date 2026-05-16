import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

const CHECKS = [
  { id: 1, label: 'Identity verification approved', passed: true },
  { id: 2, label: 'Background check approved', passed: true },
  { id: 3, label: 'Payout details active', passed: true },
  { id: 4, label: 'At least one approved service', passed: true },
  { id: 5, label: 'Location permission enabled', passed: true },
  { id: 6, label: 'No account suspension', passed: true },
  { id: 7, label: 'No pending mandatory training', passed: true },
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
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <View style={styles.statusSection}>
        <View style={[styles.statusCircle, isOnline ? styles.onlineCircle : styles.offlineCircle]}>
          <Ionicons name={isOnline ? 'flash' : 'flash-off'} size={48} color={isOnline ? COLORS.success : COLORS.gray} />
        </View>
        <Text style={styles.statusLabel}>{isOnline ? 'You are Online' : 'You are Offline'}</Text>
        <Text style={styles.statusDesc}>{isOnline ? 'Receiving job offers in your area' : 'Go online to start receiving jobs'}</Text>
      </View>

      {!isOnline && (
        <View style={styles.checksSection}>
          <Text style={styles.checksTitle}>Pre-flight Checks</Text>
          {CHECKS.map(c => (
            <View key={c.id} style={styles.checkRow}>
              <Ionicons name={c.passed ? 'checkmark-circle' : 'close-circle'} size={20} color={c.passed ? COLORS.success : COLORS.danger} />
              <Text style={[styles.checkText, !c.passed && { color: COLORS.danger }]}>{c.label}</Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity style={[styles.toggleBtn, isOnline ? styles.offlineBtn : styles.onlineBtn]} onPress={toggleOnline}>
        <Ionicons name={isOnline ? 'power' : 'power'} size={22} color={COLORS.white} />
        <Text style={styles.toggleText}>{isOnline ? 'Go Offline' : 'Go Online'}</Text>
      </TouchableOpacity>

      {!allPassed && !isOnline && (
        <Text style={styles.errorText}>Complete all checks above before going online.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  statusSection: { alignItems: 'center', marginBottom: SPACING.xl },
  statusCircle: { width: 120, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md },
  onlineCircle: { backgroundColor: COLORS.success + '18' },
  offlineCircle: { backgroundColor: COLORS.lightGray },
  statusLabel: { ...FONTS.title, marginBottom: SPACING.xs },
  statusDesc: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center' },
  checksSection: { backgroundColor: COLORS.lightGray, borderRadius: 16, padding: SPACING.md, marginBottom: SPACING.xl },
  checksTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm },
  checkText: { ...FONTS.regular },
  toggleBtn: { flexDirection: 'row', padding: SPACING.md + 4, borderRadius: 16, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.medium },
  onlineBtn: { backgroundColor: COLORS.success },
  offlineBtn: { backgroundColor: COLORS.danger },
  toggleText: { color: COLORS.white, fontSize: 18, fontWeight: '800' },
  errorText: { ...FONTS.small, color: COLORS.danger, textAlign: 'center', marginTop: SPACING.md },
});
