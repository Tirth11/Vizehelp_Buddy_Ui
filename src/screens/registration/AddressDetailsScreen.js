import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function AddressDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ address: '', city: '', state: '', pin: '', landmark: '' });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Address Details</Text>
      <Text style={styles.subtitle}>Your residential and service area details</Text>

      <TouchableOpacity style={styles.locationBtn}>
        <Ionicons name="location" size={20} color={COLORS.primary} />
        <Text style={styles.locationText}>Use Current Location</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Current Address *" multiline value={form.address} onChangeText={v => setForm({ ...form, address: v })} />
      <TextInput style={styles.input} placeholder="City *" value={form.city} onChangeText={v => setForm({ ...form, city: v })} />
      <TextInput style={styles.input} placeholder="State *" value={form.state} onChangeText={v => setForm({ ...form, state: v })} />
      <TextInput style={styles.input} placeholder="PIN Code *" keyboardType="number-pad" maxLength={6} value={form.pin} onChangeText={v => setForm({ ...form, pin: v })} />
      <TextInput style={styles.input} placeholder="Landmark" value={form.landmark} onChangeText={v => setForm({ ...form, landmark: v })} />

      <Text style={styles.label}>Service Area Preference</Text>
      <TextInput style={styles.input} placeholder="e.g., Indiranagar, Koramangala" />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('KYCUpload')}>
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
