import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SetServiceAreaScreen({ navigation }) {
  const [zip, setZip] = useState('');
  const [radius, setRadius] = useState('10');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 8 of 11</Text>
      <Text style={styles.title}>Set Service Area</Text>
      <Text style={styles.subtitle}>Choose where you'd like to receive job offers</Text>

      <View style={styles.inputWrap}>
        <Text style={styles.label}>Your ZIP Code</Text>
        <View style={styles.inputRow}>
          <Ionicons name="location-outline" size={18} color={COLORS.gray} />
          <TextInput style={styles.input} value={zip} onChangeText={setZip} placeholder="75201" keyboardType="number-pad" placeholderTextColor={COLORS.textLight} />
        </View>
      </View>

      <View style={styles.inputWrap}>
        <Text style={styles.label}>Service Radius (miles)</Text>
        <View style={styles.radiusRow}>
          {['5', '10', '15', '25'].map(r => (
            <TouchableOpacity key={r} style={[styles.radiusBtn, radius === r && styles.radiusActive]} onPress={() => setRadius(r)}>
              <Text style={[styles.radiusText, radius === r && styles.radiusTextActive]}>{r} mi</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.mapPlaceholder}>
        <Ionicons name="map" size={48} color={COLORS.gray} />
        <Text style={styles.mapText}>Map preview of your service area</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SetAvailability')}>
        <Text style={styles.btnText}>Continue</Text>
        <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  inputWrap: { marginBottom: SPACING.lg },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: 12, paddingHorizontal: SPACING.md, gap: SPACING.sm },
  input: { flex: 1, paddingVertical: 14, fontSize: 16, color: COLORS.text },
  radiusRow: { flexDirection: 'row', gap: SPACING.sm },
  radiusBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: COLORS.lightGray, alignItems: 'center' },
  radiusActive: { backgroundColor: COLORS.primary },
  radiusText: { ...FONTS.medium, color: COLORS.gray },
  radiusTextActive: { color: COLORS.white },
  mapPlaceholder: { flex: 1, minHeight: 160, backgroundColor: COLORS.lightGray, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.lg },
  mapText: { ...FONTS.small, marginTop: SPACING.sm },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
