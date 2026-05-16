import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { SERVICE_CATEGORIES } from '../../data/mockData';

const ICONS = {
  'EV Charging Support': 'flash-outline',
  'Home Cleaning': 'home-outline',
  'Parking Assistance': 'car-outline',
  'Shopping Assistance': 'cart-outline',
  'Elder Care': 'heart-outline',
  'Pickup & Drop-off': 'swap-horizontal-outline',
  'EV Laundry & Detailing': 'water-outline',
  'Field Support': 'construct-outline',
};

export default function SelectServicesScreen({ navigation }) {
  const [selected, setSelected] = useState([]);

  const toggle = (svc) => {
    setSelected(prev => prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 7 of 11</Text>
      <Text style={styles.title}>Select Services</Text>
      <Text style={styles.subtitle}>Choose the services you'd like to offer. You can change these later.</Text>

      <View style={styles.grid}>
        {SERVICE_CATEGORIES.map(svc => (
          <TouchableOpacity key={svc} style={[styles.card, selected.includes(svc) && styles.cardActive]} onPress={() => toggle(svc)}>
            <Ionicons name={ICONS[svc] || 'ellipse-outline'} size={26} color={selected.includes(svc) ? COLORS.primary : COLORS.gray} />
            <Text style={[styles.cardText, selected.includes(svc) && styles.cardTextActive]}>{svc}</Text>
            {selected.includes(svc) && <Ionicons name="checkmark-circle" size={18} color={COLORS.primary} style={styles.check} />}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={[styles.btn, selected.length === 0 && styles.btnDisabled]} disabled={selected.length === 0} onPress={() => navigation.navigate('SetServiceArea')}>
        <Text style={styles.btnText}>Continue ({selected.length} selected)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm, marginBottom: SPACING.xl },
  card: { width: '48%', padding: SPACING.md, borderRadius: 14, backgroundColor: COLORS.lightGray, alignItems: 'center', gap: SPACING.sm, position: 'relative' },
  cardActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  cardText: { ...FONTS.small, fontWeight: '600', textAlign: 'center', color: COLORS.darkGray },
  cardTextActive: { color: COLORS.primary },
  check: { position: 'absolute', top: 8, right: 8 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
