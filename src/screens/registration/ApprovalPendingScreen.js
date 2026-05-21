import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';

export default function ApprovalPendingScreen({ navigation }) {
  const { dispatch } = useApp();
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setApproved(true), 2000);
    const t2 = setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: MOCK_USER });
      navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] });
    }, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <View style={styles.container}>
      {!approved ? (
        <>
          <Ionicons name="time-outline" size={80} color={COLORS.warning} />
          <Text style={styles.title}>Profile Under Review</Text>
          <Text style={styles.subtitle}>Your profile is being reviewed by the enterprise...</Text>
          <View style={styles.statusList}>
            <StatusRow label="KYC Documents" status="Submitted" />
            <StatusRow label="Enterprise Verification" status="Reviewing..." />
            <StatusRow label="Background Check" status="Passed" />
          </View>
        </>
      ) : (
        <>
          <Ionicons name="checkmark-circle" size={80} color={COLORS.success} />
          <Text style={styles.title}>Approved! 🎉</Text>
          <Text style={styles.subtitle}>Welcome to VizeHelp Buddy. Taking you to dashboard...</Text>
        </>
      )}
    </View>
  );
}

function StatusRow({ label, status }) {
  const color = status === 'Passed' || status === 'Submitted' ? COLORS.success : COLORS.warning;
  return (
    <View style={styles.statusRow}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={[styles.statusValue, { color }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginBottom: SPACING.lg },
  statusList: { width: '100%', backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  statusLabel: { ...FONTS.regular },
  statusValue: { fontWeight: '600', fontSize: 14 },
});
