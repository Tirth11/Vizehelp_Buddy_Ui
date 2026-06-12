import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function StatCard({
  icon,
  iconColor,
  label,
  value,
  subtext,
  style,
  variant = 'default',
}) {
  const styles = getStyles();

  const variantStyle = {
    default: styles.cardDefault,
    gradient: styles.cardGradient,
    outline: styles.cardOutline,
  }[variant] || styles.cardDefault;

  return (
    <View style={[styles.card, variantStyle, SHADOWS.sm, style]}>
      <View style={styles.header}>
        {icon && (
          <View style={[styles.iconContainer, { backgroundColor: iconColor ? `${iconColor}20` : COLORS.primaryLight }]}>
            <Ionicons name={icon} size={24} color={iconColor || COLORS.primary} />
          </View>
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.value}>{value}</Text>
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}
      </View>
    </View>
  );
}

function getStyles() {
  return StyleSheet.create({
    card: {
      borderRadius: BORDER_RADIUS.lg,
      padding: SPACING.lg,
      backgroundColor: COLORS.white,
    },
    cardDefault: {
      backgroundColor: COLORS.white,
    },
    cardGradient: {
      backgroundColor: COLORS.primaryLight,
    },
    cardOutline: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SPACING.md,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: BORDER_RADIUS.md,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: SPACING.md,
    },
    label: {
      ...FONTS.small,
      flex: 1,
    },
    content: {
      marginLeft: 0,
    },
    value: {
      ...FONTS.h3,
      marginBottom: SPACING.xs,
    },
    subtext: {
      ...FONTS.small,
      color: COLORS.textLight,
    },
  });
}
