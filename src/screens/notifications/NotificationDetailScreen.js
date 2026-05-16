import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationDetailScreen({ navigation, route }) {
  const n = route.params?.notification || { title: 'Notification', message: 'Details here', time: 'Just now' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{n.title}</Text>
      <Text style={styles.time}>{n.time}</Text>
      <View style={styles.messageBox}>
        <Text style={styles.message}>{n.message}</Text>
      </View>

      {n.type === 'job' && (
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('JobDetails')}>
          <Ionicons name="briefcase-outline" size={18} color={COLORS.white} />
          <Text style={styles.actionText}>View Job</Text>
        </TouchableOpacity>
      )}

      {n.type === 'payment' && (
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('MainTabs', { screen: 'Earnings' })}>
          <Ionicons name="wallet-outline" size={18} color={COLORS.white} />
          <Text style={styles.actionText}>View Earnings</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back to Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  time: { ...FONTS.small, color: COLORS.gray, marginBottom: SPACING.lg },
  messageBox: { backgroundColor: COLORS.lightGray, padding: SPACING.lg, borderRadius: 12, marginBottom: SPACING.lg },
  message: { ...FONTS.regular, lineHeight: 22 },
  actionBtn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, marginBottom: SPACING.md },
  actionText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  backBtn: { alignItems: 'center', padding: SPACING.md },
  backText: { color: COLORS.primary, fontSize: 14 },
});
