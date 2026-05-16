import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function AcceptedJobSummaryScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Accepted ✓</Text>
      <View style={styles.card}>
        <Text style={styles.jobId}>{job.id}</Text>
        <Text style={styles.location}>{job.location}</Text>
        <Text style={styles.time}>Start by: {job.slaTime}</Text>
      </View>

      <View style={styles.actions}>
        <ActionBtn icon="navigate" label="Navigate" color={COLORS.primary} onPress={() => navigation.navigate('NavigationToJob', { job })} />
        <ActionBtn icon="call" label="Call Customer" color={COLORS.success} />
        <ActionBtn icon="chatbubble" label="Message" color={COLORS.accent} />
      </View>

      <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.navigate('CancelJob', { job })}>
        <Text style={styles.cancelText}>Cancel Job</Text>
      </TouchableOpacity>
    </View>
  );
}

function ActionBtn({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <View style={[styles.actionIcon, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, color: COLORS.success, textAlign: 'center', marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.lightGray, padding: SPACING.lg, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.lg },
  jobId: { ...FONTS.small, marginBottom: SPACING.sm },
  location: { ...FONTS.medium, textAlign: 'center' },
  time: { ...FONTS.regular, color: COLORS.primary, marginTop: SPACING.sm },
  actions: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: SPACING.xl },
  actionBtn: { alignItems: 'center' },
  actionIcon: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.small },
  cancelBtn: { borderWidth: 1, borderColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  cancelText: { color: COLORS.danger, fontSize: 14, fontWeight: '600' },
});
