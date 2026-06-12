import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider, useApp } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1 }} />;
  }

  return (
    <AppProvider>
      <StatusBar style="dark" />
      <MainLayout />
    </AppProvider>
  );
}

function MainLayout() {
  const { state, dispatch } = useApp();
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web' && width > 800;

  const handleSetUrl = (url) => {
    dispatch({ type: 'SET_ENTRY_URL', payload: url });
    // If it's an invite url, reset status to New to let user register
    if (url.includes('join')) {
      dispatch({ type: 'SET_BUDDY_STATUS', payload: 'New' });
      dispatch({ type: 'LOGOUT' });
    }
  };

  const handleSetStatus = (status) => {
    dispatch({ type: 'SET_BUDDY_STATUS', payload: status });
    if (status === 'Approved') {
      // simulate logging in
      dispatch({ 
        type: 'LOGIN', 
        payload: {
          id: 'BUD-001',
          name: 'Michael Scott',
          mobile: '9999999999',
          email: 'michael.s@example.com',
          dob: '1985-03-15',
          gender: 'Male',
          enterprise: 'ABC Home Services',
          rating: 4.9,
          kycStatus: 'Approved',
          services: ['EV Buddy', 'Clean Buddy', 'Parking Buddy'],
          isApproved: true,
          profilePhoto: null,
          address: '1725 Slough Avenue, Scranton, PA 18505',
          bankAccount: '****5678',
          routingNumber: '****0246',
        }
      });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  };

  return (
    <View style={styles.wrapper}>
      {isWeb && (
        <View style={styles.webHeader}>
          <View style={styles.logoRow}>
            <Text style={styles.webTitle}>Vizehelp Buddy Portal</Text>
            <Text style={styles.webTag}>Simulator Mode</Text>
          </View>
          
          <View style={styles.urlBarContainer}>
            <Ionicons name="globe-outline" size={16} color="#8E8E93" style={styles.urlIcon} />
            <Text style={styles.urlText}>{state.entryUrl}</Text>
          </View>

          <View style={styles.urlActions}>
            <TouchableOpacity 
              style={[styles.urlBtn, state.entryUrl.includes('join') && styles.urlBtnActive]} 
              onPress={() => handleSetUrl('https://vizehelp.com/buddy/join/ABC123')}
            >
              <Ionicons name="link-outline" size={14} color={state.entryUrl.includes('join') ? '#fff' : '#6C63FF'} />
              <Text style={[styles.urlBtnText, state.entryUrl.includes('join') && styles.urlBtnTextActive]}>Invite Link</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.urlBtn, state.entryUrl.includes('login') && styles.urlBtnActive]} 
              onPress={() => handleSetUrl('https://vizehelp.com/buddy/login')}
            >
              <Ionicons name="log-in-outline" size={14} color={state.entryUrl.includes('login') ? '#fff' : '#6C63FF'} />
              <Text style={[styles.urlBtnText, state.entryUrl.includes('login') && state.entryUrl.includes('login') && styles.urlBtnTextActive]}>Direct Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={isWeb ? styles.containerWithSidebar : styles.mobileContainer}>
        <View style={styles.mobileFrame}>
          <AppNavigator />
        </View>

        {isWeb && (
          <View style={styles.sidebar}>
            <Text style={styles.sidebarTitle}>Simulation Controls</Text>
            <Text style={styles.sidebarDesc}>Use this panel to test different user states and flows in real-time:</Text>
            
            <View style={styles.statusSection}>
              <Text style={styles.sectionLabel}>Simulate Buddy Status:</Text>
              
              <TouchableOpacity 
                style={[styles.statusBtn, state.buddyStatus === 'New' && styles.statusBtnActive]} 
                onPress={() => handleSetStatus('New')}
              >
                <Ionicons name="person-add-outline" size={16} color={state.buddyStatus === 'New' ? '#fff' : '#333'} />
                <Text style={[styles.statusBtnText, state.buddyStatus === 'New' && styles.statusBtnTextActive]}>New Buddy (Onboard)</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.statusBtn, state.buddyStatus === 'UnderReview' && styles.statusBtnActive]} 
                onPress={() => handleSetStatus('UnderReview')}
              >
                <Ionicons name="time-outline" size={16} color={state.buddyStatus === 'UnderReview' ? '#fff' : '#333'} />
                <Text style={[styles.statusBtnText, state.buddyStatus === 'UnderReview' && styles.statusBtnTextActive]}>Under Review (Pending)</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.statusBtn, state.buddyStatus === 'Approved' && styles.statusBtnActive]} 
                onPress={() => handleSetStatus('Approved')}
              >
                <Ionicons name="checkmark-circle-outline" size={16} color={state.buddyStatus === 'Approved' ? '#fff' : '#333'} />
                <Text style={[styles.statusBtnText, state.buddyStatus === 'Approved' && styles.statusBtnTextActive]}>Approved Buddy (Dashboard)</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.statusBtn, state.buddyStatus === 'Rejected' && styles.statusBtnActive]} 
                onPress={() => handleSetStatus('Rejected')}
              >
                <Ionicons name="alert-circle-outline" size={16} color={state.buddyStatus === 'Rejected' ? '#fff' : '#333'} />
                <Text style={[styles.statusBtnText, state.buddyStatus === 'Rejected' && styles.statusBtnTextActive]}>Action Required (Correction)</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.statusBtn, state.buddyStatus === 'Suspended' && styles.statusBtnActive]} 
                onPress={() => handleSetStatus('Suspended')}
              >
                <Ionicons name="ban-outline" size={16} color={state.buddyStatus === 'Suspended' ? '#fff' : '#333'} />
                <Text style={[styles.statusBtnText, state.buddyStatus === 'Suspended' && styles.statusBtnTextActive]}>Suspended Buddy</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tipsBox}>
              <Text style={styles.tipTitle}>💡 Testing Tips</Text>
              <Text style={styles.tipText}>• Select **Invite Link** at the top to test the white-labeled Enterprise Landing page.</Text>
              <Text style={styles.tipText}>• Select **New Buddy** and complete OTP to walk through the 10-step USA compliance checklist onboarding.</Text>
              <Text style={styles.tipText}>• Select **Approved Buddy** to open the main Dashboard and test Jobs, Map navigation, OTP verification, In-Progress service checklist, Proof upload, and Payout Wallet.</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#11121A', alignItems: 'center', justifyContent: 'center' },
  mobileContainer: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' },
  containerWithSidebar: { flexDirection: 'row', alignItems: 'center', gap: 40, width: 780, justifyContent: 'center', paddingVertical: 20 },
  mobileFrame: { 
    width: 390, 
    height: 844, 
    backgroundColor: '#fff', 
    overflow: 'hidden', 
    borderRadius: 36, 
    borderWidth: 10,
    borderColor: '#2D2F3D',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 15 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 24, 
    elevation: 10 
  },
  webHeader: {
    width: 780,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1F29',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  logoRow: { flex: 1 },
  webTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  webTag: { color: '#6C63FF', fontSize: 11, fontWeight: '600', textTransform: 'uppercase', marginTop: 2 },
  urlBarContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#11121A',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 15,
  },
  urlIcon: { marginRight: 8 },
  urlText: { color: '#A5A6F6', fontSize: 12, fontWeight: '500' },
  urlActions: { flexDirection: 'row', gap: 8 },
  urlBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: '#6C63FF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  urlBtnActive: { backgroundColor: '#6C63FF' },
  urlBtnText: { color: '#6C63FF', fontSize: 11, fontWeight: '600' },
  urlBtnTextActive: { color: '#fff' },
  sidebar: {
    width: 320,
    backgroundColor: '#1E1F29',
    borderRadius: 24,
    padding: 20,
    height: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },
  sidebarTitle: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  sidebarDesc: { color: '#8E8E93', fontSize: 12, lineHeight: 18, marginBottom: 20 },
  statusSection: { gap: 10, marginBottom: 20 },
  sectionLabel: { color: '#fff', fontSize: 13, fontWeight: '600', marginBottom: 4 },
  statusBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#272936',
    padding: 12,
    borderRadius: 12,
  },
  statusBtnActive: { backgroundColor: '#6C63FF' },
  statusBtnText: { color: '#E5E5EA', fontSize: 13, fontWeight: '600' },
  statusBtnTextActive: { color: '#fff' },
  tipsBox: {
    backgroundColor: '#11121A',
    borderRadius: 14,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: '#6C63FF',
  },
  tipTitle: { color: '#6C63FF', fontSize: 13, fontWeight: '700', marginBottom: 6 },
  tipText: { color: '#8E8E93', fontSize: 11, lineHeight: 16, marginBottom: 4 },
});
