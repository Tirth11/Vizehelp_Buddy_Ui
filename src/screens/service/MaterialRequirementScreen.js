import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const materials = {
  required: ['Cleaning solution', 'Mop and bucket', 'Microfiber cloths', 'Gloves'],
  customerProvided: ['Vacuum cleaner', 'Specific cleaning products'],
  buddyProvided: ['Basic cleaning kit', 'Safety gear'],
};

export default function MaterialRequirementScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Material / Tool Requirement</Text>
      <Text style={styles.subtitle}>Items needed for this service</Text>

      <Section title="Required Tools" items={materials.required} icon="construct-outline" color={COLORS.primary} />
      <Section title="Customer-Provided Items" items={materials.customerProvided} icon="person-outline" color={COLORS.success} />
      <Section title="Buddy-Provided Items" items={materials.buddyProvided} icon="bag-outline" color={COLORS.accent} />

      <TouchableOpacity style={styles.issueBtn}>
        <Ionicons name="warning-outline" size={18} color={COLORS.danger} />
        <Text style={styles.issueText}>Report Missing Material</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Section({ title, items, icon, color }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name={icon} size={18} color={color} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {items.map((item, i) => (
        <View key={i} style={styles.itemRow}>
          <Ionicons name="ellipse" size={6} color={color} />
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  section: { marginBottom: SPACING.lg },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.sm },
  sectionTitle: { ...FONTS.medium },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, paddingVertical: SPACING.xs, paddingLeft: SPACING.lg },
  itemText: { ...FONTS.regular },
  issueBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.danger, borderRadius: 12 },
  issueText: { color: COLORS.danger, fontWeight: '600' },
});
