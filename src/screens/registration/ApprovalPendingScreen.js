import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function ApprovalPendingScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    // If the simulated status changes to Approved, trigger transition
    if (state.buddyStatus === 'Approved') {
      setApproved(true);
      const timer = setTimeout(() => {
        dispatch({ type: 'LOGIN', payload: MOCK_USER });
        navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.buddyStatus]);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigation.reset({ index: 0, routes: [{ name: 'EnterInvite' }] });
  };

  const handleViewDetails = () => {
    Alert.alert('Application Submitted', 'Your onboarding forms are complete and locked for review.');
  };

  if (approved) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="checkmark-circle" size={80} color={COLORS.success} />
        <Text style={styles.title}>Approved! 🎉</Text>
        <Text style={styles.subtitle}>Welcome to Vizehelp Buddy. Taking you to dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="time-outline" size={60} color={COLORS.warning} />
        <Text style={styles.title}>Your profile is under review</Text>
        <Text style={styles.subtitle}>
          Your enterprise is reviewing your details. Once approved, you can access your dashboard and start receiving jobs.
        </Text>
      </View>

      <View style={styles.statusBox}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Submitted Date:</Text>
          <Text style={styles.detailValue}>June 7, 2026</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Enterprise Name:</Text>
          <Text style={styles.detailValue}>ABC Home Services</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Current Status:</Text>
          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Under Review</Text>
          </View>
        </View>
        <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailLabel}>Expected Review Time:</Text>
          <Text style={styles.detailValue}>24–48 Hours</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={handleViewDetails}>
          <Ionicons name="eye-outline" size={18} color={COLORS.primary} />
          <Text style={styles.actionText}>View Submitted Details</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="chatbubble-outline" size={18} color={COLORS.primary} />
          <Text style={styles.actionText}>Contact Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionBtn, styles.logoutBtn]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={18} color={COLORS.danger} />
          <Text style={[styles.actionText, { color: COLORS.danger }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl, justifyContent: 'center' },
  centerContainer: { flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  header: { alignItems: 'center', marginBottom: SPACING.xl },
  title: { ...FONTS.title, marginTop: SPACING.lg, marginBottom: SPACING.sm, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', lineHeight: 20 },
  statusBox: { backgroundColor: COLORS.background, borderRadius: 16, padding: SPACING.md, marginBottom: SPACING.xl, ...SHADOWS.small },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  detailLabel: { ...FONTS.regular, fontWeight: '600', color: COLORS.darkGray },
  detailValue: { ...FONTS.regular, fontWeight: '700', color: COLORS.text },
  statusBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF9E6', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.warning, marginRight: 6 },
  statusText: { fontSize: 12, fontWeight: '700', color: COLORS.warning },
  actions: { gap: SPACING.sm, marginBottom: SPACING.lg },
  actionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12 },
  actionText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
  logoutBtn: { borderColor: COLORS.danger },
});
