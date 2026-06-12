import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';
import { showAlert } from '../../utils/alert';

export default function ArrivedScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];
  const [hasArrived, setHasArrived] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMarkArrived = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setHasArrived(true);
      showAlert(
        'Arrived at Location', 
        'Arrival registered successfully. Customer has been notified and sent a Start OTP.'
      );
    }, 600);
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length < 4) {
      showAlert('Required', 'Please enter the 4-digit start OTP provided by the customer.');
      return;
    }

    if (otp !== '1234') {
      showAlert('Invalid OTP', 'Invalid OTP. Please check with customer. (Use 1234 for simulation)');
      return;
    }

    // Success -> Navigate to In Progress
    showAlert('OTP Verified', 'Service started successfully! Timer is active.', [
      { text: 'Start Service', onPress: () => navigation.navigate('InProgress', { job }) }
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Arrive & Verify</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.iconContainer}>
        <Ionicons name="location" size={72} color={hasArrived ? COLORS.success : COLORS.primary} />
      </View>

      <Text style={styles.title}>{hasArrived ? 'Arrived at Site' : 'Arrive at Customer Location'}</Text>
      <Text style={styles.subtitle}>
        {hasArrived 
          ? 'Ask the customer for the Start OTP to begin the service.'
          : 'Once you reach the service location, click the button below to log your arrival.'}
      </Text>

      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Client Name:</Text>
          <Text style={styles.infoValue}>{job.customer}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>{job.location.split(',')[0]}</Text>
        </View>
        <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.infoLabel}>Status:</Text>
          <View style={[styles.statusBadge, hasArrived ? styles.arrivedBadge : styles.otwBadge]}>
            <Text style={[styles.statusText, hasArrived ? { color: COLORS.success } : { color: COLORS.primary }]}>
              {hasArrived ? 'ARRIVED' : 'ON THE WAY'}
            </Text>
          </View>
        </View>
      </View>

      {!hasArrived ? (
        <TouchableOpacity style={styles.btn} onPress={handleMarkArrived} disabled={loading}>
          <Text style={styles.btnText}>{loading ? 'Marking Arrival...' : 'Mark as Arrived'}</Text>
          <Ionicons name="location-outline" size={18} color={COLORS.white} />
        </TouchableOpacity>
      ) : (
        <View style={styles.otpSection}>
          <Text style={styles.otpLabel}>Enter Start OTP *</Text>
          <TextInput 
            style={styles.otpInput} 
            placeholder="Enter OTP (1234)" 
            placeholderTextColor={COLORS.gray}
            keyboardType="number-pad" 
            maxLength={4} 
            value={otp} 
            onChangeText={setOtp} 
          />
          
          <TouchableOpacity style={[styles.btn, styles.startBtn]} onPress={handleVerifyOtp}>
            <Text style={styles.btnText}>Verify OTP and Start Service</Text>
            <Ionicons name="play-outline" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.md, alignItems: 'center' },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: SPACING.lg },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  iconContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: COLORS.background, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md, ...SHADOWS.small },
  title: { ...FONTS.title, fontSize: 22, textAlign: 'center' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', marginTop: SPACING.xs, marginBottom: SPACING.lg, lineHeight: 20 },
  infoBox: { width: '100%', backgroundColor: COLORS.background, borderRadius: 16, padding: SPACING.md, marginBottom: SPACING.xl, ...SHADOWS.small },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: SPACING.sm, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  infoLabel: { ...FONTS.regular, color: COLORS.gray, fontWeight: '600' },
  infoValue: { ...FONTS.medium, fontWeight: '700' },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  arrivedBadge: { backgroundColor: '#E8F8F0' },
  otwBadge: { backgroundColor: '#E8E6FF' },
  statusText: { fontSize: 11, fontWeight: '700' },
  btn: { width: '100%', flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center', justifyContent: 'center', gap: 8, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  otpSection: { width: '100%', marginTop: SPACING.md },
  otpLabel: { ...FONTS.medium, fontWeight: '700', alignSelf: 'flex-start', marginBottom: SPACING.sm },
  otpInput: { width: '100%', borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: SPACING.md, fontSize: 18, textAlign: 'center', letterSpacing: 8, marginBottom: SPACING.lg, color: COLORS.text },
  startBtn: { backgroundColor: COLORS.success }
});
