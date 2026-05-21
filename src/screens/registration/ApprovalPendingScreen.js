import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

const STATUS_ITEMS = [
  { label: 'Profile Details', status: 'Submitted' },
  { label: 'Address Details', status: 'Submitted' },
  { label: 'Identity Verification', status: 'Under Review' },
  { label: 'Background Check', status: 'In Review' },
  { label: 'Tax Information', status: 'Submitted' },
  { label: 'Payout Details', status: 'Completed' },
  { label: 'Emergency Contact', status: 'Skipped' },
  { label: 'Availability', status: 'Added' },
  { label: 'Enterprise Approval', status: 'Pending' },
];

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

  const getStatusColor = (status) => {
    if (['Submitted', 'Completed', 'Added'].includes(status)) return COLORS.success;
    if (['Under Review', 'In Review', 'Pending'].includes(status)) return COLORS.warning;
    if (status === 'Skipped') return COLORS.gray;
    return COLORS.danger;
  };

  if (approved) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="checkmark-circle" size={80} color={COLORS.success} />
        <Text style={styles.title}>Approved! 🎉</Text>
        <Text style={styles.subtitle}>Welcome to Vizehelp Buddyonly. Taking you to dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="time-outline" size={60} color={COLORS.warning} />
        <Text style={styles.title}>Your profile is under review</Text>
        <Text style={styles.subtitle}>Your enterprise is reviewing your details. You will be notified once your Buddy account is approved.</Text>
      </View>

      <View style={styles.statusList}>
        {STATUS_ITEMS.map(item => (
          <View key={item.label} style={styles.statusRow}>
            <Text style={styles.statusLabel}>{item.label}</Text>
            <Text style={[styles.statusValue, { color: getStatusColor(item.status) }]}>{item.status}</Text>
          </View>
        ))}
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
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  centerContainer: { flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', padding: SPACING.lg },
  header: { alignItems: 'center', marginBottom: SPACING.xl },
  title: { ...FONTS.title, marginTop: SPACING.lg, marginBottom: SPACING.sm, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center' },
  statusList: { backgroundColor: COLORS.lightGray, borderRadius: 14, padding: SPACING.md, marginBottom: SPACING.lg },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm + 2, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  statusLabel: { ...FONTS.regular },
  statusValue: { fontWeight: '600', fontSize: 13 },
  actions: { gap: SPACING.sm },
  actionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12 },
  actionText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
