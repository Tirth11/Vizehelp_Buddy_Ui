import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Button, TextInput } from '../../components';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    if (!mobile) {
      setError('Mobile number is required');
      return;
    }
    if (mobile.length < 10) {
      setError('Mobile number must be 10 digits');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoginOTP', { mobile: mobile || '9999999999' });
    }, 1000);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerSection}>
        <View style={styles.logoCircle}>
          <Ionicons name="person-circle" size={60} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Enter your registered mobile number to login</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <TextInput
          label="Mobile Number"
          placeholder="Enter your 10-digit mobile"
          icon="call"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={(text) => {
            setMobile(text);
            setError('');
          }}
          error={error}
        />

        <Button
          title="Send OTP"
          onPress={handleSendOTP}
          loading={loading}
          fullWidth
          icon="send"
          iconPosition="right"
        />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or get help</Text>
          <View style={styles.divider} />
        </View>

        {/* Help Link */}
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => navigation.navigate('Support')}
        >
          <Ionicons name="help-circle-outline" size={18} color={COLORS.primary} />
          <Text style={styles.helpText}>I need assistance with login</Text>
          <Ionicons name="chevron-forward" size={18} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Footer Info */}
      <View style={styles.footerSection}>
        <Text style={styles.footerText}>
          Don't have an account? Contact your enterprise admin to receive an invitation link.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxl,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: SPACING.xxxl,
    marginTop: SPACING.xl,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    ...SHADOWS.md,
  },
  title: {
    ...FONTS.h2,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    maxWidth: '90%',
  },
  formSection: {
    marginBottom: SPACING.xxl,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    ...FONTS.small,
    marginHorizontal: SPACING.md,
    color: COLORS.textLight,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.primaryLight,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.primary,
    gap: SPACING.md,
  },
  helpText: {
    ...FONTS.labelSmall,
    color: COLORS.primary,
    flex: 1,
    fontWeight: '600',
  },
  footerSection: {
    paddingVertical: SPACING.lg,
  },
  footerText: {
    ...FONTS.small,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
});
