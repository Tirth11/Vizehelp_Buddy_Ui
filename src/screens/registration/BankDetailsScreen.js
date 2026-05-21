import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function BankDetailsScreen({ navigation }) {
  const [form, setForm] = useState({ account: '', ifsc: '', holder: '', upi: '' });

  const handleSave = () => {
    navigation.navigate('EmergencyContact');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Bank / UPI Details</Text>
      <Text style={styles.subtitle}>Add your payout details for earnings</Text>

      <TextInput style={styles.input} placeholder="Bank Account Number" keyboardType="number-pad" value={form.account} onChangeText={v => setForm({ ...form, account: v })} />
      <TextInput style={styles.input} placeholder="Routing Number" value={form.ifsc} onChangeText={v => setForm({ ...form, ifsc: v })} />
      <TextInput style={styles.input} placeholder="Account Holder Name" value={form.holder} onChangeText={v => setForm({ ...form, holder: v })} />

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <TextInput style={styles.input} placeholder="Zelle / Venmo ID (e.g., email or phone)" value={form.upi} onChangeText={v => setForm({ ...form, upi: v })} />

      <TouchableOpacity style={styles.uploadBtn}>
        <Text style={styles.uploadText}>Upload Cancelled Cheque (Optional)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Save Payment Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.lg },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: SPACING.md },
  line: { flex: 1, height: 1, backgroundColor: COLORS.border },
  orText: { marginHorizontal: SPACING.md, color: COLORS.gray },
  uploadBtn: { padding: SPACING.md, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, borderStyle: 'dashed', alignItems: 'center', marginBottom: SPACING.md },
  uploadText: { color: COLORS.primary, fontSize: 14 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
