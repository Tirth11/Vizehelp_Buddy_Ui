import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_USER } from '../../data/mockData';

export default function ProfileScreen({ navigation }) {
  const user = MOCK_USER;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <View style={[styles.header, SHADOWS.small]}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.name[0]}</Text>
          </View>
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
          </View>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.buddyId}>ID: {user.id}</Text>


        <View style={styles.statsRow}>
          <View style={styles.profileStat}>
            <View style={[styles.profileStatIcon, { backgroundColor: COLORS.accentLight }]}>
              <Ionicons name="star" size={14} color={COLORS.accent} />
            </View>
            <Text style={styles.profileStatValue}>{user.rating}</Text>
            <Text style={styles.profileStatLabel}>Rating</Text>
          </View>
          <View style={styles.profileStatDivider} />
          <View style={styles.profileStat}>
            <View style={[styles.profileStatIcon, { backgroundColor: COLORS.successLight }]}>
              <Ionicons name="checkmark-done" size={14} color={COLORS.success} />
            </View>
            <Text style={styles.profileStatValue}>42</Text>
            <Text style={styles.profileStatLabel}>Jobs</Text>
          </View>
          <View style={styles.profileStatDivider} />
          <View style={styles.profileStat}>
            <View style={[styles.profileStatIcon, { backgroundColor: COLORS.primaryLight }]}>
              <Ionicons name="business" size={14} color={COLORS.primary} />
            </View>
            <Text style={styles.profileStatValue}>1</Text>
            <Text style={styles.profileStatLabel}>Enterprise</Text>
          </View>
        </View>
      </View>

      {/* Services */}
      <View style={[styles.servicesBox, SHADOWS.small]}>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesTitle}>Services Enabled</Text>
          <View style={styles.servicesBadge}>
            <Text style={styles.servicesBadgeText}>{user.services.length}</Text>
          </View>
        </View>
        <View style={styles.servicesRow}>
          {user.services.map(s => (
            <View key={s} style={styles.serviceChip}>
              <Ionicons name="checkmark" size={12} color={COLORS.primary} />
              <Text style={styles.serviceChipText}>{s}</Text>
            </View>
          ))}
        </View>
      </View>


      {/* Menu Sections */}
      <View style={styles.menuSection}>
        <Text style={styles.menuSectionTitle}>ACCOUNT</Text>
        <View style={[styles.menuGroup, SHADOWS.small]}>
          <MenuItem icon="create-outline" label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
          <MenuItem icon="document-outline" label="Manage Documents" onPress={() => navigation.navigate('ManageDocuments')} />
          <MenuItem icon="card-outline" label="Bank & Payout Settings" onPress={() => navigation.navigate('BankSettings')} />
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.menuSectionTitle}>WORK</Text>
        <View style={[styles.menuGroup, SHADOWS.small]}>
          <MenuItem icon="calendar-outline" label="Availability Schedule" onPress={() => navigation.navigate('Availability')} />
          <MenuItem icon="bar-chart-outline" label="Performance" onPress={() => navigation.navigate('Performance')} />
          <MenuItem icon="school-outline" label="Training Center" onPress={() => navigation.navigate('TrainingCenter')} />
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.menuSectionTitle}>SUPPORT & SETTINGS</Text>
        <View style={[styles.menuGroup, SHADOWS.small]}>
          <MenuItem icon="settings-outline" label="App Settings" onPress={() => navigation.navigate('AppSettings')} />
          <MenuItem icon="headset-outline" label="Help & Support" onPress={() => navigation.navigate('Support')} />
          <MenuItem icon="shield-outline" label="Emergency / SOS" onPress={() => navigation.navigate('EmergencySOS')} color={COLORS.danger} />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Logout')} activeOpacity={0.8}>
        <Ionicons name="log-out-outline" size={18} color={COLORS.danger} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>Vizehelp Buddy v1.0.0</Text>
    </ScrollView>
  );
}


function MenuItem({ icon, label, onPress, color }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.menuIcon, { backgroundColor: (color || COLORS.primary) + '10' }]}>
        <Ionicons name={icon} size={18} color={color || COLORS.primary} />
      </View>
      <Text style={[styles.menuLabel, color && { color }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={16} color={COLORS.textMuted} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingTop: SPACING.xxl + SPACING.sm, paddingBottom: SPACING.xxl },
  header: { alignItems: 'center', backgroundColor: COLORS.white, paddingVertical: SPACING.lg, paddingHorizontal: SPACING.md, marginHorizontal: SPACING.md, borderRadius: RADIUS.xl, marginBottom: SPACING.md },
  avatarWrap: { position: 'relative', marginBottom: SPACING.sm },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: COLORS.white, fontSize: 32, fontWeight: '800' },
  verifiedBadge: { position: 'absolute', bottom: 0, right: -2, backgroundColor: COLORS.white, borderRadius: 12, padding: 2 },
  name: { ...FONTS.h3, fontSize: 20 },
  buddyId: { ...FONTS.bodySmall, marginTop: 2, fontSize: 12 },
  statsRow: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.md, paddingTop: SPACING.md, borderTopWidth: 1, borderTopColor: COLORS.borderLight, width: '100%', justifyContent: 'space-around' },
  profileStat: { alignItems: 'center' },
  profileStatIcon: { width: 28, height: 28, borderRadius: RADIUS.xs, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  profileStatValue: { ...FONTS.bold, fontSize: 16 },
  profileStatLabel: { ...FONTS.caption, fontSize: 9 },
  profileStatDivider: { width: 1, height: 32, backgroundColor: COLORS.borderLight },

  servicesBox: { backgroundColor: COLORS.white, padding: SPACING.md, marginHorizontal: SPACING.md, borderRadius: RADIUS.lg, marginBottom: SPACING.md },
  servicesHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SPACING.sm },
  servicesTitle: { ...FONTS.h4, fontSize: 14 },
  servicesBadge: { backgroundColor: COLORS.primaryLight, paddingHorizontal: SPACING.sm, paddingVertical: 2, borderRadius: RADIUS.full },
  servicesBadgeText: { ...FONTS.badge, color: COLORS.primary },
  servicesRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  serviceChip: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: COLORS.primaryLight, paddingVertical: SPACING.xs + 2, paddingHorizontal: SPACING.sm + 2, borderRadius: RADIUS.full },
  serviceChipText: { fontSize: 12, fontWeight: '500', color: COLORS.primary },
  menuSection: { marginBottom: SPACING.md, paddingHorizontal: SPACING.md },
  menuSectionTitle: { ...FONTS.caption, marginBottom: SPACING.sm, marginLeft: SPACING.xs },
  menuGroup: { backgroundColor: COLORS.white, borderRadius: RADIUS.lg, overflow: 'hidden' },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.borderLight },
  menuIcon: { width: 34, height: 34, borderRadius: RADIUS.sm, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.sm },
  menuLabel: { flex: 1, ...FONTS.body, fontSize: 14, fontWeight: '500' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, marginHorizontal: SPACING.md, marginTop: SPACING.md, paddingVertical: SPACING.md, borderRadius: RADIUS.lg, borderWidth: 1.5, borderColor: COLORS.dangerLight, backgroundColor: COLORS.dangerLight },
  logoutText: { ...FONTS.button, color: COLORS.danger, fontSize: 14 },
  versionText: { ...FONTS.caption, textAlign: 'center', marginTop: SPACING.lg, fontSize: 10 },
});
