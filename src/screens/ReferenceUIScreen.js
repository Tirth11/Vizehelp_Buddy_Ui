import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, SHADOWS } from '../constants/theme';

export default function ReferenceUIScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Reference UI</Text>
      <Text style={styles.subtitle}>VizehelpBuddy Design System</Text>

      {/* Colors */}
      <Text style={styles.sectionTitle}>Colors</Text>
      <View style={styles.colorRow}>
        <ColorDot color={COLORS.primary} label="Primary" />
        <ColorDot color={COLORS.secondary} label="Secondary" />
        <ColorDot color={COLORS.accent} label="Accent" />
        <ColorDot color={COLORS.warning} label="Warning" />
        <ColorDot color={COLORS.success} label="Success" />
      </View>

      {/* Typography */}
      <Text style={styles.sectionTitle}>Typography</Text>
      <View style={[styles.card, SHADOWS.small]}>
        <Text style={FONTS.title}>Title Text</Text>
        <Text style={FONTS.subtitle}>Subtitle Text</Text>
        <Text style={FONTS.medium}>Medium Text</Text>
        <Text style={FONTS.regular}>Regular Text</Text>
        <Text style={FONTS.small}>Small Text</Text>
        <Text style={FONTS.caption}>CAPTION TEXT</Text>
      </View>

      {/* Buttons */}
      <Text style={styles.sectionTitle}>Buttons</Text>
      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.btnPrimaryText}>Primary Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOutline}>
        <Text style={styles.btnOutlineText}>Outline Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSecondary}>
        <Ionicons name="flash" size={18} color={COLORS.white} />
        <Text style={styles.btnSecondaryText}>With Icon</Text>
      </TouchableOpacity>

      {/* Input */}
      <Text style={styles.sectionTitle}>Input</Text>
      <TextInput style={styles.input} placeholder="Enter something..." placeholderTextColor={COLORS.gray} />

      {/* Cards */}
      <Text style={styles.sectionTitle}>Cards</Text>
      <View style={[styles.card, SHADOWS.small]}>
        <View style={styles.cardRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="briefcase" size={22} color={COLORS.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={FONTS.medium}>Job Card Example</Text>
            <Text style={FONTS.small}>Plumbing • 2.3 km away</Text>
          </View>
          <Text style={{ ...FONTS.bold, color: COLORS.success }}>$45</Text>
        </View>
      </View>

      <View style={[styles.card, SHADOWS.small, { borderLeftWidth: 4, borderLeftColor: COLORS.warning }]}>
        <Text style={FONTS.medium}>Alert Card</Text>
        <Text style={FONTS.small}>This is a notification-style card</Text>
      </View>

      {/* Status Badges */}
      <Text style={styles.sectionTitle}>Badges</Text>
      <View style={styles.badgeRow}>
        <View style={[styles.badge, { backgroundColor: COLORS.success + '20' }]}>
          <Text style={[styles.badgeText, { color: COLORS.success }]}>Online</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: COLORS.danger + '20' }]}>
          <Text style={[styles.badgeText, { color: COLORS.danger }]}>Offline</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: COLORS.warning + '20' }]}>
          <Text style={[styles.badgeText, { color: COLORS.warning }]}>Pending</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: COLORS.primary + '20' }]}>
          <Text style={[styles.badgeText, { color: COLORS.primary }]}>Active</Text>
        </View>
      </View>

      {/* Icons */}
      <Text style={styles.sectionTitle}>Icons</Text>
      <View style={styles.iconRow}>
        {['home', 'briefcase', 'wallet', 'calendar', 'person', 'notifications', 'settings', 'headset'].map(name => (
          <View key={name} style={styles.iconItem}>
            <Ionicons name={name} size={24} color={COLORS.primary} />
            <Text style={styles.iconLabel}>{name}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

function ColorDot({ color, label }) {
  return (
    <View style={styles.colorItem}>
      <View style={[styles.colorDot, { backgroundColor: color }]} />
      <Text style={styles.colorLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: 2 },
  subtitle: { ...FONTS.small, marginBottom: SPACING.lg },
  sectionTitle: { ...FONTS.subtitle, marginTop: SPACING.lg, marginBottom: SPACING.sm },
  card: { backgroundColor: COLORS.card, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm },
  iconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center' },
  colorRow: { flexDirection: 'row', gap: SPACING.md, flexWrap: 'wrap' },
  colorItem: { alignItems: 'center' },
  colorDot: { width: 40, height: 40, borderRadius: 20 },
  colorLabel: { ...FONTS.small, marginTop: 4, fontSize: 11 },
  btnPrimary: { backgroundColor: COLORS.primary, paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.sm },
  btnPrimaryText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  btnOutline: { borderWidth: 2, borderColor: COLORS.primary, paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.sm },
  btnOutlineText: { color: COLORS.primary, fontWeight: '700', fontSize: 15 },
  btnSecondary: { backgroundColor: COLORS.secondary, paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.sm, flexDirection: 'row', justifyContent: 'center', gap: 8 },
  btnSecondaryText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  input: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 15, color: COLORS.text },
  badgeRow: { flexDirection: 'row', gap: SPACING.sm, flexWrap: 'wrap' },
  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  iconRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.md },
  iconItem: { alignItems: 'center', width: 60 },
  iconLabel: { ...FONTS.small, fontSize: 10, marginTop: 4, textAlign: 'center' },
});
