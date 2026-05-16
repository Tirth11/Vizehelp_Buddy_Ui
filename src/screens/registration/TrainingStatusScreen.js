import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const modules = [
  { id: 1, title: 'Safety Guidelines', type: 'video', completed: true },
  { id: 2, title: 'Customer Interaction', type: 'document', completed: true },
  { id: 3, title: 'Service Quality Standards', type: 'video', completed: false },
  { id: 4, title: 'App Usage Training', type: 'quiz', completed: false },
];

export default function TrainingStatusScreen({ navigation }) {
  const completedCount = modules.filter(m => m.completed).length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Training / Orientation</Text>
      <Text style={styles.subtitle}>Complete required training before going live</Text>

      <View style={styles.progressBox}>
        <Text style={styles.progressText}>{completedCount}/{modules.length} Completed</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completedCount / modules.length) * 100}%` }]} />
        </View>
      </View>

      {modules.map(m => (
        <View key={m.id} style={styles.moduleCard}>
          <Ionicons name={m.completed ? 'checkmark-circle' : 'play-circle-outline'} size={28} color={m.completed ? COLORS.success : COLORS.primary} />
          <View style={styles.moduleInfo}>
            <Text style={styles.moduleTitle}>{m.title}</Text>
            <Text style={styles.moduleType}>{m.type.charAt(0).toUpperCase() + m.type.slice(1)}</Text>
          </View>
          {!m.completed && (
            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startText}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ApprovalPending')}>
        <Text style={styles.btnText}>Continue after Completion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  progressBox: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  progressText: { ...FONTS.medium, marginBottom: SPACING.sm },
  progressBar: { height: 8, backgroundColor: COLORS.border, borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: COLORS.success, borderRadius: 4 },
  moduleCard: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, marginBottom: SPACING.sm },
  moduleInfo: { flex: 1, marginLeft: SPACING.md },
  moduleTitle: { ...FONTS.medium },
  moduleType: { ...FONTS.small, marginTop: 2 },
  startBtn: { paddingVertical: SPACING.xs, paddingHorizontal: SPACING.md, backgroundColor: COLORS.primary, borderRadius: 8 },
  startText: { color: COLORS.white, fontSize: 12, fontWeight: '600' },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
