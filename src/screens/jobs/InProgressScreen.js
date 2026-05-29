import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS, getStatusColor } from '../../constants/theme';

export default function InProgressScreen({ navigation, route }) {
  const job = route.params?.job;
  const [elapsed, setElapsed] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'Initial assessment done', done: false },
    { id: 2, label: 'Main service in progress', done: false },
    { id: 3, label: 'Quality check', done: false },
    { id: 4, label: 'Cleanup completed', done: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  const status = getStatusColor('inProgress');
  const completedCount = checklist.filter(c => c.done).length;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={[styles.statusPill, { backgroundColor: status.bg }]}>
            <View style={[styles.statusDot, { backgroundColor: status.fg }]} />
            <Text style={[styles.statusText, { color: status.fg }]}>{status.label}</Text>
          </View>
          <Text style={styles.timer}>{formatTime(elapsed)}</Text>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Checklist Progress</Text>
          <Text style={styles.progressValue}>{completedCount} of {checklist.length}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(completedCount / checklist.length) * 100}%` }]} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Checklist</Text>
        {checklist.map(item => (
          <TouchableOpacity key={item.id} style={[styles.checkRow, item.done && styles.checkRowDone]} onPress={() => toggleCheck(item.id)} activeOpacity={0.8}>
            <View style={[styles.checkbox, item.done && styles.checkboxOn]}>
              {item.done && <Ionicons name="checkmark" size={16} color={COLORS.white} />}
            </View>
            <Text style={[styles.checkLabel, item.done && styles.checkDone]}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <ActionBtn icon="camera-outline"     label="Photo"   color={COLORS.primary} />
          <ActionBtn icon="create-outline"     label="Notes"   color={COLORS.primary} />
          <ActionBtn icon="warning-outline"    label="Issue"   color={COLORS.danger}  onPress={() => navigation.navigate('RaiseIssue', { job })} />
          <ActionBtn icon="headset-outline"    label="Support" color={COLORS.darkGray} onPress={() => navigation.navigate('Support')} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.completeBtn} onPress={() => navigation.navigate('CompletionChecklist', { job })} activeOpacity={0.85}>
          <Ionicons name="checkmark-circle-outline" size={22} color={COLORS.white} />
          <Text style={styles.completeText}>Complete Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ActionBtn({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.actionIcon, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl + SPACING.md, paddingBottom: SPACING.xl },

  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  statusPill: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 6, paddingHorizontal: SPACING.sm + 2, borderRadius: RADIUS.pill },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  statusText: { fontSize: 12, fontWeight: '700' },
  timer: { ...FONTS.title, fontSize: 28, color: COLORS.primary, fontWeight: '900', letterSpacing: 1 },

  progressCard: { backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, marginBottom: SPACING.lg },
  progressLabel: { ...FONTS.caption, color: COLORS.primary, fontWeight: '700' },
  progressValue: { ...FONTS.bold, fontSize: 18, marginTop: 4, marginBottom: SPACING.sm },
  progressBar: { height: 6, backgroundColor: COLORS.white, borderRadius: RADIUS.pill, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: RADIUS.pill },

  sectionTitle: { ...FONTS.subtitle, fontSize: 16, marginBottom: SPACING.sm, marginTop: SPACING.sm },

  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, marginBottom: SPACING.xs, borderWidth: 1, borderColor: COLORS.border },
  checkRowDone: { backgroundColor: COLORS.successLight, borderColor: COLORS.success + '40' },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  checkboxOn: { backgroundColor: COLORS.success, borderColor: COLORS.success },
  checkLabel: { ...FONTS.regular, flex: 1 },
  checkDone: { textDecorationLine: 'line-through', color: COLORS.textLight },

  actionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: SPACING.sm },
  actionBtn: { alignItems: 'center', flex: 1 },
  actionIcon: { width: 52, height: 52, borderRadius: RADIUS.md, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xs },
  actionLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text },

  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  completeBtn: { flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  completeText: { color: COLORS.white, fontSize: 16, fontWeight: '800' },
});
