import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_NOTIFICATIONS } from '../../data/mockData';

const iconMap = { job: 'briefcase', payment: 'card', training: 'school', rating: 'star', announcement: 'megaphone' };
const colorMap = { job: COLORS.primary, payment: COLORS.success, training: COLORS.accent, rating: COLORS.warning, announcement: COLORS.darkGray };

export default function NotificationsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Notifications</Text>

      {MOCK_NOTIFICATIONS.map(n => (
        <TouchableOpacity key={n.id} style={[styles.card, !n.read && styles.unread]} onPress={() => navigation.navigate('NotificationDetail', { notification: n })}>
          <View style={[styles.iconBox, { backgroundColor: (colorMap[n.type] || COLORS.primary) + '15' }]}>
            <Ionicons name={iconMap[n.type] || 'notifications'} size={20} color={colorMap[n.type] || COLORS.primary} />
          </View>
          <View style={styles.info}>
            <Text style={styles.notifTitle}>{n.title}</Text>
            <Text style={styles.notifMsg} numberOfLines={1}>{n.message}</Text>
            <Text style={styles.notifTime}>{n.time}</Text>
          </View>
          {!n.read && <View style={styles.dot} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.sm },
  unread: { borderLeftWidth: 3, borderLeftColor: COLORS.primary },
  iconBox: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  info: { flex: 1, marginLeft: SPACING.md },
  notifTitle: { ...FONTS.medium },
  notifMsg: { ...FONTS.small, marginTop: 2 },
  notifTime: { ...FONTS.small, color: COLORS.gray, marginTop: 2 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.primary },
});
