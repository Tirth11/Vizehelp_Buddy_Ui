import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

export default function LogoutScreen({ navigation }) {
  const { dispatch } = useApp();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <View style={styles.container}>
      <Ionicons name="log-out-outline" size={64} color={COLORS.danger} />
      <Text style={styles.title}>Logout</Text>
      <Text style={styles.subtitle}>Are you sure you want to logout?</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.lg },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.sm, marginBottom: SPACING.xl },
  buttons: { width: '100%', gap: SPACING.md },
  logoutBtn: { backgroundColor: COLORS.danger, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  logoutText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  cancelBtn: { borderWidth: 1, borderColor: COLORS.border, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  cancelText: { color: COLORS.text, fontSize: 16 },
});
