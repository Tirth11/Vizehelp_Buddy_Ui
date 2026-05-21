import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.mobileFrame}>
        <AppProvider>
          <StatusBar style="dark" />
          <AppNavigator />
        </AppProvider>
      </View>
    </View>
  );
}

const styles = {
  wrapper: { flex: 1, backgroundColor: '#1a1a2e', alignItems: 'center', justifyContent: 'center' },
  mobileFrame: { width: 390, height: '100%', maxHeight: 844, backgroundColor: '#fff', overflow: 'hidden', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 },
};
