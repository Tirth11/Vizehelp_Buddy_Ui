import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ArrivedScreen({ navigation, route }) {
  const job = route.params?.job;
  const [otp, setOtp] = useState('');

  const handleStart = () => {
    navigation.navigate('StartService', { job });
  };

  return (
    <View style={styles.container}>
      <Ionicons name="location" size={64} color={COLORS.success} />
      <Text style={styles.title}>Mark Arrived</Text>
      <Text style={styles.subtitle}>Confirm you have reached the service location</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Arrival Time</Text>
        <Text style={styles.infoValue}>{new Date().toLocaleTimeString()}</Text>
      </View>

      <View style={styles.geoBox}>
        <Ionicons name="checkmark-circle" size={18} color={COLORS.success} />
        <Text style={styles.geoText}>Location verified - within service radius</Text>
      </View>

      <Text style={styles.otpLabel}>Customer OTP (if required)</Text>
      <TextInput style={styles.otpInput} placeholder="Enter OTP" keyboardType="number-pad" maxLength={4} value={otp} onChangeText={setOtp} />

      <TouchableOpacity style={styles.markBtn} onPress={() => Alert.alert('Arrived', 'Arrival marked successfully')}>
        <Text style={styles.markText}>Mark Arrived</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startBtn} onPress={handleStart}>
        <Text style={styles.startText}>Start Service</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center', alignItems: 'center' },
  title: { ...FONTS.title, marginTop: SPACING.md },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginTop: SPACING.sm, marginBottom: SPACING.lg },
  infoBox: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.md },
  infoLabel: { ...FONTS.regular, color: COLORS.gray },
  infoValue: { ...FONTS.medium },
  geoBox: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, marginBottom: SPACING.lg },
  geoText: { ...FONTS.regular, color: COLORS.success },
  otpLabel: { ...FONTS.medium, alignSelf: 'flex-start', marginBottom: SPACING.sm },
  otpInput: { width: '100%', borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 18, textAlign: 'center', letterSpacing: 6, marginBottom: SPACING.lg },
  markBtn: { width: '100%', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginBottom: SPACING.md },
  markText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  startBtn: { width: '100%', backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  startText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
