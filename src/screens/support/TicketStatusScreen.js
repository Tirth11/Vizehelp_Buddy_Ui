import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const tickets = [
  { id: 'TKT-2001', category: 'Payment Issue', status: 'Open', date: '2026-05-15', response: null },
  { id: 'TKT-1998', category: 'App Bug', status: 'In Review', date: '2026-05-12', response: 'Our team is investigating.' },
  { id: 'TKT-1990', category: 'Job Issue', status: 'Resolved', date: '2026-05-08', response: 'Issue resolved. Penalty reversed.' },
];

const statusColor = { 'Open': COLORS.accent, 'In Review': COLORS.primary, 'Resolved': COLORS.success, 'Closed': COLORS.gray };

export default function TicketStatusScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My Tickets</Text>

      {tickets.map(t => (
        <View key={t.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.ticketId}>{t.id}</Text>
            <Text style={[styles.status, { color: statusColor[t.status], backgroundColor: statusColor[t.status] + '15' }]}>{t.status}</Text>
          </View>
          <Text style={styles.category}>{t.category}</Text>
          <Text style={styles.date}>{t.date}</Text>
          {t.response && (
            <View style={styles.responseBox}>
              <Text style={styles.responseLabel}>Support Response:</Text>
              <Text style={styles.responseText}>{t.response}</Text>
            </View>
          )}
          {t.status === 'Resolved' && (
            <TouchableOpacity style={styles.reopenBtn}>
              <Text style={styles.reopenText}>Reopen Ticket</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  card: { backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.md },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm },
  ticketId: { ...FONTS.medium },
  status: { fontSize: 12, fontWeight: '600', paddingVertical: 2, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden' },
  category: { ...FONTS.regular },
  date: { ...FONTS.small, color: COLORS.gray, marginTop: SPACING.xs },
  responseBox: { backgroundColor: COLORS.lightGray, padding: SPACING.sm, borderRadius: 8, marginTop: SPACING.sm },
  responseLabel: { ...FONTS.small, fontWeight: '600', marginBottom: 2 },
  responseText: { ...FONTS.regular },
  reopenBtn: { marginTop: SPACING.sm, alignSelf: 'flex-start' },
  reopenText: { color: COLORS.primary, fontSize: 13, fontWeight: '600' },
});
