import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';
import { MOCK_USER } from '../../data/mockData';
import { showAlert } from '../../utils/alert';

export default function ProfileScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const user = state.user || MOCK_USER;

  const handleLogout = () => {
    showAlert(
      'Logout Confirmation',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            dispatch({ type: 'LOGOUT' });
            navigation.reset({
              index: 0,
              routes: [{ name: 'EnterInvite' }]
            });
          }
        }
      ]
    );
  };

  const handleRestrictedSection = (sectionName) => {
    showAlert(
      'Restricted Details',
      `Your ${sectionName} is verified. Editing this details requires administrator approval. Contact your enterprise admin to request modifications.`
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{user.name[0]}</Text></View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.buddyId}>Buddy ID: {user.id}</Text>
        <Text style={styles.enterprise}>{user.enterprise}</Text>
        
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color={COLORS.warning} />
          <Text style={styles.rating}>{user.rating}</Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>APPROVED</Text>
          </View>
        </View>
      </View>

      {/* Profile Menu Items (USA Compliance & Spec exact list) */}
      <Text style={styles.menuTitle}>Buddy Details</Text>
      
      <MenuItem 
        icon="person-outline" 
        label="Personal Details" 
        onPress={() => navigation.navigate('EditProfile')} 
      />
      <MenuItem 
        icon="location-outline" 
        label="Address Details" 
        onPress={() => navigation.navigate('EditProfile')} 
      />
      <MenuItem 
        icon="card-outline" 
        label="Documents (ID Verification)" 
        onPress={() => handleRestrictedSection('Identity Documents')} 
        restricted
      />
      <MenuItem 
        icon="document-text-outline" 
        label="Tax Status (1099/W-9)" 
        onPress={() => handleRestrictedSection('Tax Information')} 
        restricted
      />
      <MenuItem 
        icon="wallet-outline" 
        label="Payout Status (Bank Setup)" 
        onPress={() => handleRestrictedSection('Payout Details')} 
        restricted
      />
      <MenuItem 
        icon="call-outline" 
        label="Emergency Contact" 
        onPress={() => navigation.navigate('EditProfile')} 
      />
      <MenuItem 
        icon="calendar-outline" 
        label="Availability" 
        onPress={() => navigation.navigate('Availability')} 
      />
      <MenuItem 
        icon="construct-outline" 
        label="Assigned Services" 
        onPress={() => {
          Alert.alert(
            'Assigned Services', 
            `Your assigned service categories:\n\n• ${user.services.join('\n• ')}\n\nContact enterprise manager to add new skills.`
          );
        }} 
      />
      <MenuItem 
        icon="headset-outline" 
        label="Support" 
        onPress={() => navigation.navigate('Support')} 
      />
      <MenuItem 
        icon="log-out-outline" 
        label="Logout" 
        onPress={handleLogout} 
        danger 
      />
    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress, danger, restricted }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={danger ? COLORS.danger : COLORS.text} />
      <Text style={[styles.menuLabel, danger && { color: COLORS.danger }]}>{label}</Text>
      {restricted ? (
        <Ionicons name="lock-closed" size={16} color={COLORS.gray} />
      ) : (
        <Ionicons name="chevron-forward" size={18} color={COLORS.gray} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingTop: SPACING.xxl, paddingBottom: SPACING.xl },
  header: { alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.lg, marginBottom: SPACING.md, ...SHADOWS.small },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.sm },
  avatarText: { color: COLORS.white, fontSize: 32, fontWeight: '700' },
  name: { ...FONTS.title },
  buddyId: { ...FONTS.small, marginTop: 2 },
  enterprise: { ...FONTS.regular, color: COLORS.gray, marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: SPACING.sm },
  rating: { ...FONTS.medium, fontWeight: '700' },
  verifiedBadge: { backgroundColor: '#E8F8F0', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginLeft: 4 },
  verifiedText: { fontSize: 11, fontWeight: '700', color: COLORS.success },
  menuTitle: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700', paddingHorizontal: SPACING.md, marginBottom: SPACING.xs, marginTop: SPACING.sm },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, marginBottom: 1, gap: SPACING.md },
  menuLabel: { flex: 1, ...FONTS.regular, fontWeight: '500' },
});
