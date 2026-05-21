// KYCUploadScreen is deprecated. Identity Verification is now used instead.
// This file redirects to IdentityVerificationScreen for backward compatibility.
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function KYCUploadScreen({ navigation }) {
  useEffect(() => {
    navigation.replace('IdentityVerification');
  }, []);
  return <View />;
}
