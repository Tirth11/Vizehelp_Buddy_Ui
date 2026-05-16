import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CompleteProfileScreen({ navigation }) {
  const [dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.step}>Step 4 of 11</Text>
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>We need a few more details to set up your account</Text>

        <View style={styles.form}>
          <Input label="Date of Birth" value={dob} onChangeText={setDob} placeholder="MM/DD/YYYY" icon="calendar-outline" />
          <Input label="Last 4 of SSN" value={ssn} onChangeText={setSsn} placeholder="••••" maxLength={4} keyboardType="number-pad" icon="shield-outline" />
          <Input label="Street Address" value={address} onChangeText={setAddress} placeholder="123 Main St" icon="home-outline" />
          <View style={styles.row}>
            <View style={styles.flex}>
              <Input label="City" value={city} onChangeText={setCity} placeholder="Dallas" icon="location-outline" />
            </View>
            <View style={styles.small}>
              <Input label="State" value={state} onChangeText={setState} placeholder="TX" icon="map-outline" />
            </View>
            <View style={styles.small}>
              <Input label="ZIP" value={zip} onChangeText={setZip} placeholder="75201" keyboardType="number-pad" icon="pin-outline" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('IdentityVerification')}>
          <Text style={styles.btnText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <View style={styles.inputWrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <Ionicons name={icon} size={18} color={COLORS.gray} />
        <TextInput style={styles.input} placeholderTextColor={COLORS.textLight} {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  back: { marginBottom: SPACING.lg },
  step: { ...FONTS.caption, color: COLORS.primary, marginBottom: SPACING.xs },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  form: { gap: SPACING.sm },
  row: { flexDirection: 'row', gap: SPACING.sm },
  flex: { flex: 2 },
  small: { flex: 1 },
  inputWrap: { marginBottom: SPACING.sm },
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.xs },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.lightGray, borderRadius: 12, paddingHorizontal: SPACING.md, gap: SPACING.sm },
  input: { flex: 1, paddingVertical: 14, fontSize: 16, color: COLORS.text },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, marginTop: SPACING.xl, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
