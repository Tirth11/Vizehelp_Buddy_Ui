import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function AddressDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ street: '', apt: '', city: '', state: '', zip: '' });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Address Details</Text>
      <Text style={styles.subtitle}>Your residential address in USA format</Text>

      <TouchableOpacity style={styles.locationBtn}>
        <Ionicons name="location" size={20} color={COLORS.primary} />
        <Text style={styles.locationText}>Use Current Location</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Street Address *" value={form.street} onChangeText={v => setForm({ ...form, street: v })} />
      <TextInput style={styles.input} placeholder="Apartment / Unit Number (optional)" value={form.apt} onChangeText={v => setForm({ ...form, apt: v })} />
      <TextInput style={styles.input} placeholder="City *" value={form.city} onChangeText={v => setForm({ ...form, city: v })} />
      <TextInput style={styles.input} placeholder="State *" value={form.state} onChangeText={v => setForm({ ...form, state: v })} />
      <TextInput style={styles.input} placeholder="ZIP Code *" keyboardType="number-pad" maxLength={5} value={form.zip} onChangeText={v => setForm({ ...form, zip: v })} />

      <Text style={styles.label}>Service Area Preference (optional)</Text>
      <TextInput style={styles.input} placeholder="Preferred Service Area (ZIP codes or city)" />
      <TextInput style={styles.input} placeholder="Maximum Travel Distance (miles)" keyboardType="number-pad" />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('IdentityVerification')}>
        <Text style={styles.btnText}>Save and Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  locationBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12, marginBottom: SPACING.lg },
  locationText: { color: COLORS.primary, fontSize: 14, fontWeight: '600', marginLeft: SPACING.sm },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  label: { ...FONTS.medium, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
