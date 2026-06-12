import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function InProgressScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];
  const [elapsed, setElapsed] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'Reached vehicle location', done: true },
    { id: 2, label: 'Checked charging issue', done: false },
    { id: 3, label: 'Assisted with charger', done: false },
    { id: 4, label: 'Uploaded charging proof', done: false },
    { id: 5, label: 'Completed service notes', done: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const handleComplete = () => {
    const allDone = checklist.every(c => c.done);
    if (!allDone) {
      Alert.alert('Incomplete Checklist', 'Please complete all checklist items before ending the service.');
      return;
    }
    // Proceed to upload proof page
    navigation.navigate('ProofUpload', { job });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Service In Progress</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Timer Bar */}
      <View style={[styles.timerBar, SHADOWS.small]}>
        <View>
          <Text style={styles.timerLabel}>Service Status:</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Service Started</Text>
          </View>
        </View>
        <View style={styles.timerContainer}>
          <Ionicons name="time" size={24} color={COLORS.primary} />
          <Text style={styles.timer}>{formatTime(elapsed)}</Text>
        </View>
      </View>

      <View style={styles.timeDetails}>
        <Text style={styles.timeLabel}>Started At: 10:15 AM</Text>
        <Text style={styles.timeLabel}>Est. End: 11:00 AM</Text>
      </View>

      {/* Customer Instructions */}
      <View style={[styles.sectionBox, SHADOWS.small]}>
        <Text style={styles.sectionHeader}>Customer Instructions</Text>
        <Text style={styles.instructionText}>{job.instructions || 'Level 2 charging setup. Clean detailing requested.'}</Text>
      </View>

      {/* Checklist */}
      <Text style={styles.sectionTitle}>EV Buddy Checklist</Text>
      <View style={[styles.checklistCard, SHADOWS.small]}>
        {checklist.map(item => (
          <TouchableOpacity key={item.id} style={styles.checkRow} onPress={() => toggleCheck(item.id)}>
            <Ionicons name={item.done ? 'checkbox' : 'square-outline'} size={22} color={item.done ? COLORS.success : COLORS.gray} />
            <Text style={[styles.checkLabel, item.done && styles.checkDone]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Action Row */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('RaiseIssue', { job })}>
          <Ionicons name="warning-outline" size={20} color={COLORS.danger} />
          <Text style={[styles.actionText, { color: COLORS.danger }]}>Report Issue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="headset-outline" size={20} color={COLORS.primary} />
          <Text style={styles.actionText}>Get Help</Text>
        </TouchableOpacity>
      </View>

      {/* Mark Completed Button */}
      <TouchableOpacity style={styles.btn} onPress={handleComplete}>
        <Text style={styles.btnText}>Upload Proof & Complete</Text>
        <Ionicons name="cloud-upload-outline" size={18} color={COLORS.white} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.lg },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  timerBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: 8 },
  timerLabel: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700' },
  statusBadge: { backgroundColor: '#E8FFF5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginTop: 4 },
  statusText: { fontSize: 11, fontWeight: '700', color: COLORS.success, textTransform: 'uppercase' },
  timerContainer: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  timer: { ...FONTS.title, color: COLORS.primary, fontSize: 24 },
  timeDetails: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4, marginBottom: SPACING.md },
  timeLabel: { fontSize: 12, color: COLORS.darkGray },
  sectionBox: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.md },
  sectionHeader: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700', marginBottom: 4 },
  instructionText: { ...FONTS.regular, color: COLORS.text, lineHeight: 18 },
  sectionTitle: { ...FONTS.subtitle, marginBottom: SPACING.sm },
  checklistCard: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.md },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  checkLabel: { ...FONTS.medium },
  checkDone: { textDecorationLine: 'line-through', color: COLORS.gray },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: SPACING.lg },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 8 },
  actionText: { fontSize: 13, color: COLORS.primary, fontWeight: '700' },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: 8, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
