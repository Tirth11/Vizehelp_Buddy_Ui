import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

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

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.statusBar}>
        <View style={styles.statusBadge}><Text style={styles.statusText}>In Progress</Text></View>
        <Text style={styles.timer}>{formatTime(elapsed)}</Text>
      </View>

      <Text style={styles.sectionTitle}>Checklist</Text>
      {checklist.map(item => (
        <TouchableOpacity key={item.id} style={styles.checkRow} onPress={() => toggleCheck(item.id)}>
          <Ionicons name={item.done ? 'checkbox' : 'square-outline'} size={22} color={item.done ? COLORS.success : COLORS.gray} />
          <Text style={[styles.checkLabel, item.done && styles.checkDone]}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="camera-outline" size={20} color={COLORS.primary} />
          <Text style={styles.actionText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="create-outline" size={20} color={COLORS.primary} />
          <Text style={styles.actionText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('RaiseIssue', { job })}>
          <Ionicons name="warning-outline" size={20} color={COLORS.danger} />
          <Text style={styles.actionText}>Issue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="headset-outline" size={20} color={COLORS.primary} />
          <Text style={styles.actionText}>Support</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.completeBtn} onPress={() => navigation.navigate('CompletionChecklist', { job })}>
        <Text style={styles.completeText}>Complete Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  statusBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.lg },
  statusBadge: { backgroundColor: '#E8F5E9', paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, borderRadius: 20 },
  statusText: { color: COLORS.success, fontWeight: '600', fontSize: 14 },
  timer: { ...FONTS.title, color: COLORS.primary },
  sectionTitle: { ...FONTS.subtitle, marginBottom: SPACING.md },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  checkLabel: { ...FONTS.regular },
  checkDone: { textDecorationLine: 'line-through', color: COLORS.gray },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: SPACING.lg, marginBottom: SPACING.lg },
  actionBtn: { alignItems: 'center', gap: SPACING.xs },
  actionText: { ...FONTS.small },
  completeBtn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  completeText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
