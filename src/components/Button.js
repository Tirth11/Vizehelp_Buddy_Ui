import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'lg',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  children,
}) {
  const styles = getStyles();

  const variantStyle = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    ghost: styles.ghostButton,
    danger: styles.dangerButton,
    success: styles.successButton,
  }[variant] || styles.primaryButton;

  const sizeStyle = {
    sm: styles.smallButton,
    md: styles.mediumButton,
    lg: styles.largeButton,
  }[size] || styles.largeButton;

  const textStyle = {
    sm: styles.smallText,
    md: styles.mediumText,
    lg: styles.largeText,
  }[size] || styles.largeText;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyle,
        sizeStyle,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'ghost' ? COLORS.primary : COLORS.white} size="small" />
      ) : (
        <View style={styles.buttonContent}>
          {icon && iconPosition === 'left' && (
            <Ionicons name={icon} size={18} color={variant === 'ghost' ? COLORS.primary : COLORS.white} style={{ marginRight: SPACING.sm }} />
          )}
          {title && <Text style={[textStyle, variant === 'ghost' && { color: COLORS.primary }]}>{title}</Text>}
          {children}
          {icon && iconPosition === 'right' && (
            <Ionicons name={icon} size={18} color={variant === 'ghost' ? COLORS.primary : COLORS.white} style={{ marginLeft: SPACING.sm }} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

function getStyles() {
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: BORDER_RADIUS.lg,
      ...SHADOWS.sm,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fullWidth: {
      width: '100%',
    },
    disabled: {
      opacity: 0.5,
    },

    // Variants
    primaryButton: {
      backgroundColor: COLORS.primary,
      borderWidth: 0,
    },
    secondaryButton: {
      backgroundColor: COLORS.primaryLight,
      borderWidth: 1.5,
      borderColor: COLORS.primary,
    },
    ghostButton: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: COLORS.primary,
    },
    dangerButton: {
      backgroundColor: COLORS.danger,
      borderWidth: 0,
    },
    successButton: {
      backgroundColor: COLORS.success,
      borderWidth: 0,
    },

    // Sizes
    smallButton: {
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
    },
    mediumButton: {
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.xl,
    },
    largeButton: {
      paddingVertical: SPACING.lg,
      paddingHorizontal: SPACING.xl,
    },

    // Text Sizes
    smallText: {
      ...FONTS.label,
      color: COLORS.white,
    },
    mediumText: {
      ...FONTS.labelSmall,
      fontSize: 15,
      fontWeight: '600',
      color: COLORS.white,
    },
    largeText: {
      ...FONTS.h5,
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '600',
    },
  });
}
