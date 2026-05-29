import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, APP_NAME } from '../../constants/theme';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

const STATUS_ITEMS = [
  { label: 'Profile Details',       status: 'submitted' },
  { label: 'Address Details',       status: 'submitted' },
  { label: 'Identity Verification', status: 'review' },
  { label: 'Background Check',      status: 'review' },
  { label: 'Tax Information',       status: 'submitted' },
  { label: 'Payout Details',        status: 'completed' },
  { label: 'Emergency Contact',     status: 'skipped' },
  { label: 'Availability',          status: 'submitted' },
  { label: 'Enterprise Approval',   status: 'pending' },
];

const STATUS_STYLE = {
  submitted: { color: COLORS.success, label: 'Submitted' },
  completed: { color: COLORS.success, label: 'Completed' },
  review:    { color: COLORS.warning, label: 'In Review' },
  pending:   { color: COLORS.warning, label: 'Pending' },
  skipped:   { color: COLORS.gray,    label: 'Skipped' },
};

export default function ApprovalPendingScreen({ navigation }) {
  const { dispatch } = useApp();
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setApproved(true), 3000);
    const t2 = setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: MOCK_USER });
      navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
    }, 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (approved) {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={56} color={COLORS.white} />
        </View>
        <Text style={styles.title}>Approved!</Text>
        <Text style={styles.subtitle}>Welcome to {APP_NAME}.{'\n'}Taking you to your dashboard…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="time-outline" size={48} color={COLORS.warning} />
        </View>
        <Text style={styles.title}>Profile Under Review</Text>
        <Text style={styles.subtitle}>Your enterprise is reviewing your details. We'll notify you once your Buddy account is approved.</Text>
      </View>

      <View style={styles.statusList}>
        {STATUS_ITEMS.map(item => {
          const sty = STATUS_STYLE[item.status];
          return (
            <View key={item.label} style={styles.statusRow}>
              <Text style={styles.statusLabel}>{item.label}</Text>
              <View style={[styles.statusPill, { backgroundColor: sty.color + '18' }]}>
                <Text style={[styles.statusValue, { color: sty.color }]}>{sty.label}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="eye-outline" size={18} color={COLORS.primary} />
          <Text style={styles.actionText}>View Submitted Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="chatbubble-outline" size={18} color={COLORS.primary} />
          <Text style={styles.actionText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl + SPACING.md },
  centerContainer: { flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  header: { alignItems: 'center', marginBottom: SPACING.xl },
  iconCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: COLORS.warningLight, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg },
  successCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: COLORS.success, alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg, ...SHADOWS.medium },
  title: { ...FONTS.title, marginBottom: SPACING.sm, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.textLight, textAlign: 'center', lineHeight: 22 },
  statusList: { backgroundColor: COLORS.background, borderRadius: RADIUS.md, padding: SPACING.sm, marginBottom: SPACING.lg, borderWidth: 1, borderColor: COLORS.border },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SPACING.sm + 2, paddingHorizontal: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  statusLabel: { ...FONTS.regular, flex: 1 },
  statusPill: { paddingHorizontal: SPACING.sm, paddingVertical: 4, borderRadius: RADIUS.pill },
  statusValue: { fontWeight: '700', fontSize: 12 },
  actions: { gap: SPACING.sm },
  actionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1.5, borderColor: COLORS.primary, borderRadius: RADIUS.md },
  actionText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
});
