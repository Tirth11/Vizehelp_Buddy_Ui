import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_USER } from '../../data/mockData';

export default function ProfileScreen({ navigation }) {
  const user = MOCK_USER;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{user.name[0]}</Text></View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.buddyId}>Buddy ID: {user.id}</Text>
        <Text style={styles.enterprise}>{user.enterprise}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color={COLORS.accent} />
          <Text style={styles.rating}>{user.rating}</Text>
          <Text style={styles.verified}>✓ Verified</Text>
        </View>
      </View>

      <View style={styles.servicesBox}>
        <Text style={styles.servicesTitle}>Services Enabled</Text>
        <View style={styles.servicesRow}>
          {user.services.map(s => <Text key={s} style={styles.serviceChip}>{s}</Text>)}
        </View>
      </View>

      <MenuItem icon="create-outline" label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
      <MenuItem icon="document-outline" label="Manage Documents" onPress={() => navigation.navigate('ManageDocuments')} />
      <MenuItem icon="card-outline" label="Bank / UPI Settings" onPress={() => navigation.navigate('BankSettings')} />
      <MenuItem icon="settings-outline" label="App Settings" onPress={() => navigation.navigate('AppSettings')} />
      <MenuItem icon="calendar-outline" label="Availability Schedule" onPress={() => navigation.navigate('Availability')} />
      <MenuItem icon="headset-outline" label="Help & Support" onPress={() => navigation.navigate('Support')} />
      <MenuItem icon="shield-outline" label="Emergency / SOS" onPress={() => navigation.navigate('EmergencySOS')} />
      <MenuItem icon="log-out-outline" label="Logout" onPress={() => navigation.navigate('Logout')} danger />
    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress, danger }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={danger ? COLORS.danger : COLORS.text} />
      <Text style={[styles.menuLabel, danger && { color: COLORS.danger }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color={COLORS.gray} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingTop: SPACING.xxl, paddingBottom: SPACING.xl },
  header: { alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.lg, marginBottom: SPACING.md },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.sm },
  avatarText: { color: COLORS.white, fontSize: 32, fontWeight: '700' },
  name: { ...FONTS.title },
  buddyId: { ...FONTS.small, marginTop: 2 },
  enterprise: { ...FONTS.regular, color: COLORS.gray, marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs, marginTop: SPACING.sm },
  rating: { ...FONTS.medium },
  verified: { color: COLORS.success, fontSize: 12, marginLeft: SPACING.sm },
  servicesBox: { backgroundColor: COLORS.white, padding: SPACING.md, marginBottom: SPACING.md },
  servicesTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  servicesRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.xs },
  serviceChip: { backgroundColor: COLORS.primary + '15', color: COLORS.primary, fontSize: 12, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, overflow: 'hidden' },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, marginBottom: 1, gap: SPACING.md },
  menuLabel: { flex: 1, ...FONTS.regular },
});
