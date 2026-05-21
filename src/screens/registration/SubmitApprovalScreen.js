import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function SubmitApprovalScreen({ navigation }) {
  const { dispatch } = useApp();
  const [status, setStatus] = useState('submitting'); // submitting -> review -> approved

  useEffect(() => {
    const t1 = setTimeout(() => setStatus('review'), 1000);
    const t2 = setTimeout(() => {
      setStatus('approved');
      dispatch({ type: 'LOGIN', payload: MOCK_USER });
    }, 2500);
    const t3 = setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
    }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <View style={styles.container}>
      {status === 'submitting' && (
        <>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.title}>Submitting Application...</Text>
          <Text style={styles.subtitle}>Please wait while we submit your profile</Text>
        </>
      )}

      {status === 'review' && (
        <>
          <View style={styles.iconWrap}>
            <Ionicons name="time-outline" size={56} color={COLORS.warning} />
          </View>
          <Text style={styles.title}>Under Review</Text>
          <Text style={styles.subtitle}>Your profile is being reviewed...</Text>
          <View style={styles.statusList}>
            <StatusRow label="KYC Documents" status="Verified" />
            <StatusRow label="Background Check" status="Passed" />
            <StatusRow label="Enterprise Approval" status="Reviewing..." />
          </View>
        </>
      )}

      {status === 'approved' && (
        <>
          <View style={[styles.iconWrap, { backgroundColor: COLORS.success + '20' }]}>
            <Ionicons name="checkmark-circle" size={56} color={COLORS.success} />
          </View>
          <Text style={styles.title}>Approved! 🎉</Text>
          <Text style={styles.subtitle}>Welcome to VizeHelp Buddy. Redirecting to dashboard...</Text>
        </>
      )}
    </View>
  );
}

function StatusRow({ label, status }) {
  const color = status === 'Verified' || status === 'Passed' ? COLORS.success : COLORS.warning;
  return (
    <View style={styles.statusRow}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={[styles.statusValue, { color }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconWrap: { width: 100, height: 100, borderRadius: 50, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  title: { ...FONTS.title, textAlign: 'center', marginTop: SPACING.lg, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, textAlign: 'center', color: COLORS.gray, marginBottom: SPACING.lg },
  statusList: { width: '100%', backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md, marginTop: SPACING.md },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  statusLabel: { ...FONTS.regular },
  statusValue: { fontWeight: '600', fontSize: 14 },
});
