import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');

  const handleSendOTP = () => {
    if (mobile.length < 10) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }
    navigation.navigate('LoginOTP', { mobile });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buddy Login</Text>
      <Text style={styles.subtitle}>Enter your registered mobile number</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSendOTP}>
        <Text style={styles.btnText}>Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpLink} onPress={() => navigation.navigate('Support')}>
        <Text style={styles.helpText}>Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, justifyContent: 'center' },
  title: { ...FONTS.title, marginBottom: SPACING.sm },
  subtitle: { ...FONTS.regular, color: COLORS.gray, marginBottom: SPACING.xl },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, paddingHorizontal: SPACING.md, marginBottom: SPACING.lg },
  prefix: { fontSize: 16, color: COLORS.text, marginRight: SPACING.sm },
  input: { flex: 1, paddingVertical: SPACING.md, fontSize: 16 },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  helpLink: { marginTop: SPACING.lg, alignItems: 'center' },
  helpText: { color: COLORS.primary, fontSize: 14 },
});
