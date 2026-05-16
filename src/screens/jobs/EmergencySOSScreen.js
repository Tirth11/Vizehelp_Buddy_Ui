import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencySOSScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sosBtn}>
        <Ionicons name="alert-circle" size={64} color={COLORS.white} />
        <Text style={styles.sosText}>SOS</Text>
        <Text style={styles.sosSub}>Tap for emergency help</Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <ActionCard icon="call" label="Call Support" color={COLORS.primary} />
        <ActionCard icon="location" label="Share Live Location" color={COLORS.success} />
        <ActionCard icon="people" label="Emergency Contact" color={COLORS.accent} />
        <ActionCard icon="flag" label="Report Unsafe Location" color={COLORS.danger} />
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function ActionCard({ icon, label, color }) {
  return (
    <TouchableOpacity style={styles.actionCard}>
      <View style={[styles.actionIcon, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  sosBtn: { width: 180, height: 180, borderRadius: 90, backgroundColor: COLORS.danger, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xl },
  sosText: { color: COLORS.white, fontSize: 28, fontWeight: '700', marginTop: SPACING.sm },
  sosSub: { color: COLORS.white, fontSize: 12, opacity: 0.8 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.md, justifyContent: 'center', marginBottom: SPACING.lg },
  actionCard: { width: '45%', alignItems: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12 },
  actionIcon: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.sm },
  actionLabel: { ...FONTS.small, textAlign: 'center' },
  backBtn: { padding: SPACING.md },
  backText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
});
