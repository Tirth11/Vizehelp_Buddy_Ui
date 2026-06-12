import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function TaxInformationScreen({ navigation }) {
  const [form, setForm] = useState({ taxClass: 'Individual / Sole Proprietor', legalName: '', businessName: '', tin: '', taxAddress: '' });
  const [w9Cert, setW9Cert] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const TAX_CLASSES = ['Individual / Sole Proprietor', 'LLC', 'Corporation', 'Other'];

  const getMaskedTin = () => {
    if (!form.tin) return '';
    if (isFocused) return form.tin; // Show raw input when focused
    
    // Mask SSN/TIN format
    const cleaned = form.tin.replace(/\D/g, '');
    if (cleaned.length <= 4) return cleaned;
    
    if (cleaned.length === 9) {
      return `***-**-${cleaned.slice(5)}`;
    }
    return `***-***-${cleaned.slice(-4)}`;
  };

  const handleSave = () => {
    // Non-mandatory validation for mockup simplicity
    navigation.navigate('BankDetails');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Text style={styles.step}>Step 5 of 10</Text>
      <Text style={styles.title}>Tax Details</Text>
      <Text style={styles.subtitle}>Please provide your tax details so payouts and annual tax reporting (1099-NEC) can be processed correctly.</Text>

      <Text style={styles.label}>Tax Classification *</Text>
      <View style={styles.classRow}>
        {TAX_CLASSES.map(tc => (
          <TouchableOpacity key={tc} style={[styles.classBtn, form.taxClass === tc && styles.classActive]} onPress={() => setForm({ ...form, taxClass: tc })}>
            <Text style={[styles.classText, form.taxClass === tc && styles.classTextActive]}>{tc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={styles.input} placeholder="Legal Name *" value={form.legalName} onChangeText={v => setForm({ ...form, legalName: v })} />
      <TextInput style={styles.input} placeholder="Business Name (optional)" value={form.businessName} onChangeText={v => setForm({ ...form, businessName: v })} />
      
      <TextInput 
        style={styles.input} 
        placeholder="SSN / EIN / TIN *" 
        keyboardType="numeric" 
        value={getMaskedTin()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={v => {
          // Only change if focused (editing raw text)
          if (isFocused) {
            setForm({ ...form, tin: v });
          }
        }} 
      />
      
      <TextInput style={styles.input} placeholder="Tax Address *" value={form.taxAddress} onChangeText={v => setForm({ ...form, taxAddress: v })} />

      <TouchableOpacity style={styles.consentRow} onPress={() => setW9Cert(!w9Cert)}>
        <Ionicons name={w9Cert ? 'checkbox' : 'square-outline'} size={24} color={w9Cert ? COLORS.primary : COLORS.gray} />
        <Text style={styles.consentText}>I certify that the information provided is correct (W-9 Certification). I am not subject to backup withholding unless otherwise indicated.</Text>
      </TouchableOpacity>

      <View style={styles.info}>
        <Ionicons name="information-circle-outline" size={18} color={COLORS.primary} />
        <Text style={styles.infoText}>Form W-9 is used to provide your Taxpayer Identification Number for income reporting to the IRS.</Text>
      </View>

      <TouchableOpacity style={[styles.btn, !w9Cert && styles.btnDisabled]} disabled={!w9Cert} onPress={handleSave}>
        <Text style={styles.btnText}>Save Tax Details</Text>
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
  label: { ...FONTS.small, fontWeight: '600', color: COLORS.darkGray, marginBottom: SPACING.sm },
  classRow: { gap: SPACING.sm, marginBottom: SPACING.lg },
  classBtn: { padding: SPACING.md, borderRadius: 12, backgroundColor: COLORS.lightGray },
  classActive: { backgroundColor: COLORS.primaryLight, borderWidth: 1.5, borderColor: COLORS.primary },
  classText: { ...FONTS.medium, color: COLORS.darkGray },
  classTextActive: { color: COLORS.primary },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md, color: COLORS.text },
  consentRow: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, marginVertical: SPACING.md },
  consentText: { ...FONTS.regular, flex: 1 },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.primaryLight, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.xl },
  infoText: { ...FONTS.small, color: COLORS.darkGray, flex: 1 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', ...SHADOWS.small },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
