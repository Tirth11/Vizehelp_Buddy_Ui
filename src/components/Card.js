import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';

export default function Card({
  children,
  style,
  onPress,
  variant = 'default',
  elevated = false,
  padding = true,
  ...props
}) {
  const styles = getStyles();
  const Wrapper = onPress ? TouchableOpacity : View;

  const variantStyle = {
    default: styles.cardDefault,
    elevated: styles.cardElevated,
    outline: styles.cardOutline,
    ghost: styles.cardGhost,
  }[variant] || styles.cardDefault;

  const shadowStyle = elevated ? SHADOWS.md : SHADOWS.xs;

  return (
    <Wrapper
      style={[
        styles.card,
        variantStyle,
        padding && styles.padding,
        shadowStyle,
        style,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.6 : 1}
      {...props}
    >
      {children}
    </Wrapper>
  );
}

function getStyles() {
  return StyleSheet.create({
    card: {
      borderRadius: BORDER_RADIUS.lg,
      overflow: 'hidden',
    },
    padding: {
      padding: SPACING.lg,
    },
    cardDefault: {
      backgroundColor: COLORS.white,
      borderWidth: 0,
    },
    cardElevated: {
      backgroundColor: COLORS.white,
      borderWidth: 0,
    },
    cardOutline: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    cardGhost: {
      backgroundColor: COLORS.primaryLight,
      borderWidth: 0,
    },
  });
}
