import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const ENTERPRISES = [
  { id: 1, name: 'Vizehelp Marketplace', status: 'Active', color: COLORS.success },
  { id: 2, name: 'CleanPro Services', status: 'Active', color: COLORS.success },
  { id: 3, name: 'QuickClean USA', status: 'Pending', color: COLORS.warning },
  { id: 4, name: 'CarePlus Senior Help', status: 'Suspended', color: COLORS.danger },
];

export default function MyEnterprisesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My Enterprises</Text>
      <Text style={styles.subtitle}>Organizations you're connected to</Text>

      {ENTERPRISES.map(e => (
        <View key={e.id} style={[styles.card, SHADOWS.small]}>
          <View style={[styles.avatar, { backgroundColor: e.color + '18' }]}>
            <Ionicons name="business" size={22} color={e.color} />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{e.name}</Text>
            <View style={styles.statusRow}>
              <View style={[styles.dot, { backgroundColor: e.color }]} />
              <Text style={[styles.status, { color: e.color }]}>{e.status}</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color={COLORS.gray} />
        </View>
      ))}

      <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('JoinEnterprise')}>
        <Ionicons name="add-circle-outline" size={22} color={COLORS.primary} />
        <Text style={styles.joinText}>Join Another Enterprise</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, gap: SPACING.md },
  avatar: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  info: { flex: 1 },
  name: { ...FONTS.medium },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginTop: 2 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  status: { fontSize: 13, fontWeight: '600' },
  joinBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderRadius: 14, borderWidth: 1.5, borderColor: COLORS.primary, marginTop: SPACING.md },
  joinText: { color: COLORS.primary, fontSize: 15, fontWeight: '700' },
});
