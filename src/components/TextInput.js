import React, { useState } from 'react';
import { View, TextInput as RNTextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function TextInput({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  rightIcon,
  onRightIconPress,
  error,
  secureTextEntry,
  keyboardType = 'default',
  editable = true,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  style,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);
  const styles = getStyles();

  const handleRightIcon = () => {
    if (secureTextEntry) {
      setShowPassword(!showPassword);
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  const finalRightIcon = secureTextEntry ? (showPassword ? 'eye-off' : 'eye') : rightIcon;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[
        styles.inputWrapper,
        isFocused && styles.inputFocused,
        error && styles.inputError,
        !editable && styles.inputDisabled,
      ]}>
        {icon && (
          <Ionicons name={icon} size={18} color={isFocused ? COLORS.primary : COLORS.textLight} style={styles.leftIcon} />
        )}
        <RNTextInput
          style={[styles.input, { paddingLeft: icon ? 0 : SPACING.lg }]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textLight}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {finalRightIcon && (
          <TouchableOpacity onPress={handleRightIcon} style={styles.rightIcon}>
            <Ionicons name={finalRightIcon} size={18} color={COLORS.textLight} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

function getStyles() {
  return StyleSheet.create({
    container: {
      marginBottom: SPACING.lg,
    },
    label: {
      ...FONTS.label,
      marginBottom: SPACING.sm,
      color: COLORS.text,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: SPACING.lg,
      borderRadius: BORDER_RADIUS.lg,
      backgroundColor: COLORS.white,
      borderWidth: 1.5,
      borderColor: COLORS.border,
      height: 52,
      ...SHADOWS.xs,
    },
    inputFocused: {
      borderColor: COLORS.primary,
      backgroundColor: COLORS.primaryLighter,
    },
    inputError: {
      borderColor: COLORS.danger,
      backgroundColor: COLORS.dangerLight,
    },
    inputDisabled: {
      backgroundColor: COLORS.grayLightest,
      opacity: 0.5,
    },
    input: {
      flex: 1,
      ...FONTS.body,
      color: COLORS.text,
      paddingVertical: SPACING.md,
      paddingRight: SPACING.md,
    },
    leftIcon: {
      marginRight: SPACING.md,
    },
    rightIcon: {
      padding: SPACING.md,
      marginRight: -SPACING.md,
    },
    errorText: {
      ...FONTS.caption,
      color: COLORS.danger,
      marginTop: SPACING.sm,
    },
  });
}
