import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Badge({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  style,
}) {
  const styles = getStyles();

  const variantStyle = {
    primary: styles.variantPrimary,
    success: styles.variantSuccess,
    warning: styles.variantWarning,
    danger: styles.variantDanger,
    gray: styles.variantGray,
  }[variant] || styles.variantPrimary;

  const sizeStyle = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
  }[size] || styles.sizeMd;

  const colors = {
    primary: { bg: COLORS.primaryLight, text: COLORS.primary },
    success: { bg: COLORS.successLight, text: COLORS.success },
    warning: { bg: COLORS.warningLight, text: COLORS.warning },
    danger: { bg: COLORS.dangerLight, text: COLORS.danger },
    gray: { bg: COLORS.grayLightest, text: COLORS.gray },
  }[variant] || { bg: COLORS.primaryLight, text: COLORS.primary };

  return (
    <View style={[styles.badge, variantStyle, sizeStyle, style]}>
      {icon && <Ionicons name={icon} size={12} color={colors.text} style={styles.icon} />}
      <Text style={[styles.label, { color: colors.text, ...FONTS.caption }]}>
        {label}
      </Text>
    </View>
  );
}

function getStyles() {
  return StyleSheet.create({
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: BORDER_RADIUS.full,
      alignSelf: 'flex-start',
    },
    icon: {
      marginRight: SPACING.xs,
    },
    label: {
      fontWeight: '600',
      fontSize: 11,
    },

    // Variants
    variantPrimary: {
      backgroundColor: COLORS.primaryLight,
    },
    variantSuccess: {
      backgroundColor: COLORS.successLight,
    },
    variantWarning: {
      backgroundColor: COLORS.warningLight,
    },
    variantDanger: {
      backgroundColor: COLORS.dangerLight,
    },
    variantGray: {
      backgroundColor: COLORS.grayLightest,
    },

    // Sizes
    sizeSm: {
      paddingHorizontal: SPACING.sm,
      paddingVertical: SPACING.xs,
    },
    sizeMd: {
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.sm,
    },
    sizeLg: {
      paddingHorizontal: SPACING.lg,
      paddingVertical: SPACING.md,
    },
  });
}
