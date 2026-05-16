import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function EnterInviteScreen({ navigation }) {
  const [inviteCode, setInviteCode] = useState('');
  const [mobile, setMobile] = useState('');

  const handleVerify = () => {
    if (!inviteCode.trim()) return Alert.alert('Error', 'Invite code is mandatory');
    if (mobile.length < 10) return Alert.alert('Error', 'Enter valid mobile number');
    navigation.navigate('OTPVerification', { mobile, inviteCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register with Enterprise Invite</Text>
      <Text style={styles.subtitle}>Enter the invite code shared by your enterprise.</Text>

      <TextInput style={styles.input} placeholder="Invite Code" value={inviteCode} onChangeText={setInviteCode} autoCapitalize="characters" />

      <View style={styles.mobileRow}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput style={styles.mobileInput} placeholder="Mobile Number" keyboardType="phone-pad" maxLength={10} value={mobile} onChangeText={setMobile} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleVerify}>
        <Text style={styles.btnText}>Verify Invite</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('No Invite?', 'Contact your enterprise admin to get an invite code.')}>
        <Text style={styles.linkText}>I don't have an invite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 16, marginBottom: SPACING.md },
  mobileRow: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, paddingHorizontal: SPACING.md, marginBottom: SPACING.lg },
  prefix: { fontSize: 16, color: COLORS.text, marginRight: SPACING.sm },
  mobileInput: { flex: 1, paddingVertical: SPACING.md, fontSize: 16 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.md },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  linkText: { color: COLORS.primary, fontSize: 14, textAlign: 'center', marginTop: SPACING.sm },
});
