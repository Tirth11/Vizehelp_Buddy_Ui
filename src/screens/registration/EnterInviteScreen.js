import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../../context/AppContext';

export default function EnterInviteScreen({ navigation }) {
  const { state, dispatch } = useApp();
  const [showLanding, setShowLanding] = useState(false);
  const [enterpriseCode, setEnterpriseCode] = useState('');
  const [mobile, setMobile] = useState('');

  // Check if entryUrl is an invite URL
  useEffect(() => {
    if (state.entryUrl.includes('/join/')) {
      setShowLanding(true);
      const parts = state.entryUrl.split('/join/');
      if (parts.length > 1) {
        setEnterpriseCode(parts[1]);
      } else {
        setEnterpriseCode('ABC123');
      }
    } else {
      setShowLanding(false);
      setEnterpriseCode('');
    }
  }, [state.entryUrl]);

  const handleContinue = () => {
    navigation.navigate('OTPVerification', { mobile: mobile || '9999999999', enterpriseCode: enterpriseCode || 'DEMO' });
  };

  const handleContinueAsBuddy = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return (
      <View style={styles.landingContainer}>
        <ScrollView contentContainerStyle={styles.landingContent}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Enterprise Invitation</Text>
          </View>
          
          <View style={styles.logoContainer}>
            <View style={styles.enterpriseLogo}>
              <Ionicons name="business" size={40} color={COLORS.primary} />
            </View>
            <Text style={styles.enterpriseName}>ABC Home Services</Text>
            <Text style={styles.whiteLabelTag}>White-label Partner</Text>
          </View>

          <View style={styles.messageCard}>
            <Text style={styles.joiningTitle}>You are joining ABC Home Services as a Buddy on Vizehelp.</Text>
            <Text style={styles.joiningDesc}>
              Welcome to our frontline service team. Complete your verification to start receiving EV, cleaning, and assistance tasks.
            </Text>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Invite ID:</Text>
              <Text style={styles.detailValue}>{enterpriseCode}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleContinueAsBuddy}>
            <Text style={styles.btnText}>Continue as Buddy</Text>
            <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topSection}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>V</Text>
          </View>
          <Text style={styles.appName}>Vizehelp Buddy</Text>
          <Text style={styles.tagline}>Login with your enterprise invite to start{'\n'}your Buddy onboarding.</Text>
        </View>

        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Enterprise Invite ID"
            placeholderTextColor={COLORS.gray}
            value={enterpriseCode}
            onChangeText={setEnterpriseCode}
            autoCapitalize="characters"
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor={COLORS.gray}
            keyboardType="phone-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />

          <TouchableOpacity style={styles.btn} onPress={handleContinue}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpBtn} onPress={() => navigation.navigate('Support')}>
            <Ionicons name="help-circle-outline" size={18} color={COLORS.primary} />
            <Text style={styles.helpText}>Need Help?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollContent: { flexGrow: 1, justifyContent: 'space-between' },
  topSection: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: SPACING.xxl, paddingBottom: SPACING.md },
  logo: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md, ...SHADOWS.medium },
  logoText: { fontSize: 36, fontWeight: '800', color: COLORS.white },
  appName: { fontSize: 28, fontWeight: '800', color: COLORS.text, letterSpacing: -0.5, marginBottom: SPACING.sm },
  tagline: { ...FONTS.regular, color: COLORS.gray, textAlign: 'center', lineHeight: 22 },
  formSection: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xxl },
  input: { backgroundColor: COLORS.lightGray, borderRadius: 12, padding: SPACING.md, fontSize: 16, color: COLORS.text, marginBottom: SPACING.md },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 8, ...SHADOWS.small },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  helpBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: SPACING.lg, gap: 6 },
  helpText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  
  // Landing Page styles
  landingContainer: { flex: 1, backgroundColor: COLORS.white },
  landingContent: { padding: SPACING.lg, paddingTop: SPACING.xxl, alignItems: 'center', justifyContent: 'center', flexGrow: 1 },
  badge: { backgroundColor: COLORS.primaryLight, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: SPACING.lg },
  badgeText: { color: COLORS.primary, fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
  logoContainer: { alignItems: 'center', marginBottom: SPACING.xl },
  enterpriseLogo: { width: 90, height: 90, borderRadius: 24, backgroundColor: COLORS.background, borderWidth: 1, borderColor: COLORS.border, justifyContent: 'center', alignItems: 'center', marginBottom: SPACING.md, ...SHADOWS.small },
  enterpriseName: { ...FONTS.title, fontSize: 24, marginBottom: 4 },
  whiteLabelTag: { fontSize: 12, color: COLORS.gray, fontWeight: '600' },
  messageCard: { width: '100%', backgroundColor: COLORS.background, borderRadius: 16, padding: SPACING.lg, marginBottom: SPACING.xl, borderLeftWidth: 4, borderLeftColor: COLORS.primary, ...SHADOWS.small },
  joiningTitle: { ...FONTS.medium, color: COLORS.text, fontWeight: '700', lineHeight: 22, marginBottom: SPACING.sm },
  joiningDesc: { ...FONTS.regular, color: COLORS.gray, lineHeight: 20, marginBottom: SPACING.md },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: SPACING.sm },
  detailLabel: { ...FONTS.small, fontWeight: '700' },
  detailValue: { ...FONTS.small, color: COLORS.primary, fontWeight: '700' },
});
