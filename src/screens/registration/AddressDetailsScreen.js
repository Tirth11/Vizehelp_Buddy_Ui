import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

export default function AddressDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ street: '', apt: '', city: '', state: '', zip: '', distance: '25' });
  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.street && form.city && form.state && form.zip.length === 5;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StepProgress
        step={3}
        total={9}
        onBack={() => navigation.goBack()}
        title="Address Details"
        subtitle="Where are you based? We'll show jobs nearby."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.locationBtn}>
          <Ionicons name="location" size={18} color={COLORS.primary} />
          <Text style={styles.locationText}>Use Current Location</Text>
        </TouchableOpacity>

        <Field label="Street Address *" icon="home-outline" value={form.street} onChangeText={v => update('street', v)} placeholder="123 Main St" />
        <Field label="Apartment / Unit" icon="business-outline" value={form.apt} onChangeText={v => update('apt', v)} placeholder="Apt 4B (optional)" />
        <Field label="City *" icon="location-outline" value={form.city} onChangeText={v => update('city', v)} placeholder="Dallas" />

        <View style={styles.row}>
          <View style={styles.flex1}>
            <Field label="State *" icon="map-outline" value={form.state} onChangeText={v => update('state', v.toUpperCase())} placeholder="TX" maxLength={2} />
          </View>
          <View style={styles.flex1}>
            <Field label="ZIP *" icon="pin-outline" value={form.zip} onChangeText={v => update('zip', v)} placeholder="75201" keyboardType="number-pad" maxLength={5} />
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Service Preferences</Text>
        <Field label="Max Travel Distance (miles)" icon="navigate-outline" value={form.distance} onChangeText={v => update('distance', v)} placeholder="25" keyboardType="number-pad" />

        <View style={styles.info}>
          <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.infoText}>You'll only get job alerts within this distance from your address.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('IdentityVerification')}
        >
          <Text style={styles.btnText}>Save & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

function Field({ label, icon, ...props }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldRow}>
        <Ionicons name={icon} size={18} color={COLORS.textLight} />
        <TextInput style={styles.input} placeholderTextColor={COLORS.textLight} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  locationBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, padding: SPACING.md, borderWidth: 1.5, borderColor: COLORS.primary, borderRadius: RADIUS.md, marginBottom: SPACING.lg },
  locationText: { color: COLORS.primary, fontSize: 14, fontWeight: '700' },
  fieldWrap: { marginBottom: SPACING.md },
  fieldLabel: { ...FONTS.small, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  fieldRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md, paddingHorizontal: SPACING.md, gap: SPACING.sm, height: 52 },
  input: { flex: 1, fontSize: 16, color: COLORS.text },
  row: { flexDirection: 'row', gap: SPACING.sm },
  flex1: { flex: 1 },
  divider: { height: 1, backgroundColor: COLORS.border, marginVertical: SPACING.md },
  sectionTitle: { ...FONTS.subtitle, fontSize: 16, marginBottom: SPACING.sm },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: RADIUS.md, marginTop: SPACING.sm },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text, lineHeight: 19 },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
