import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

export default function SuspendedScreen({ navigation }) {
  const { dispatch } = useApp();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigation.reset({
      index: 0,
      routes: [{ name: 'EnterInvite' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="ban" size={72} color={COLORS.danger} />
      </View>
      
      <Text style={styles.title}>Account Suspended</Text>
      <Text style={styles.subtitle}>
        Your Vizehelp Buddy account has been suspended. Please contact your enterprise administrator or platform support for further details.
      </Text>

      <View style={styles.detailsBox}>
        <Text style={styles.detailsTitle}>Enterprise Details:</Text>
        <Text style={styles.detailsText}>Enterprise Name: ABC Home Services</Text>
        <Text style={styles.detailsText}>Contact: support@abchomeservices.com</Text>
      </View>

      <TouchableOpacity style={styles.btnSupport} onPress={() => navigation.navigate('Support')}>
        <Ionicons name="chatbubble-ellipses-outline" size={20} color={COLORS.white} />
        <Text style={styles.btnSupportText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color={COLORS.danger} />
        <Text style={styles.btnLogoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  iconContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFF3F3', justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.xl },
  title: { ...FONTS.title, color: COLORS.danger, marginBottom: SPACING.md, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', lineHeight: 22, paddingHorizontal: SPACING.md, marginBottom: SPACING.xl },
  detailsBox: { width: '100%', backgroundColor: COLORS.background, borderRadius: 14, padding: SPACING.md, borderLeftWidth: 4, borderLeftColor: COLORS.danger, marginBottom: SPACING.xl },
  detailsTitle: { ...FONTS.medium, fontWeight: '700', marginBottom: SPACING.xs },
  detailsText: { ...FONTS.regular, color: COLORS.darkGray, marginBottom: 2 },
  btnSupport: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center', ...SHADOWS.small, marginBottom: SPACING.md },
  btnSupportText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  btnLogout: { flexDirection: 'row', borderWidth: 1.5, borderColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center', gap: SPACING.sm, width: '100%', justifyContent: 'center' },
  btnLogoutText: { color: COLORS.danger, fontSize: 16, fontWeight: '600' },
});
