import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { useApp } from '../../context/AppContext';

export default function AppSettingsScreen({ navigation }) {
  const { dispatch } = useApp();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Settings</Text>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Push Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} trackColor={{ true: COLORS.primary }} />
      </View>

      <Text style={styles.sectionTitle}>Language</Text>
      <View style={styles.langRow}>
        {['English', 'Spanish', 'French', 'Chinese'].map(l => (
          <TouchableOpacity key={l} style={[styles.langChip, language === l && styles.langActive]} onPress={() => setLanguage(l)}>
            <Text style={[styles.langText, language === l && styles.langTextActive]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Location Permission</Text>
        <Text style={styles.settingValue}>Enabled</Text>
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>App Version</Text>
        <Text style={styles.settingValue}>1.0.0</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Logout')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  settingLabel: { ...FONTS.regular },
  settingValue: { ...FONTS.regular, color: COLORS.gray },
  sectionTitle: { ...FONTS.medium, marginTop: SPACING.lg, marginBottom: SPACING.sm },
  langRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  langChip: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md, borderRadius: 20, borderWidth: 1, borderColor: COLORS.border },
  langActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  langText: { color: COLORS.text, fontSize: 14 },
  langTextActive: { color: COLORS.white },
  logoutBtn: { marginTop: SPACING.xl, padding: SPACING.md, borderWidth: 1, borderColor: COLORS.danger, borderRadius: 12, alignItems: 'center' },
  logoutText: { color: COLORS.danger, fontSize: 16, fontWeight: '600' },
});
