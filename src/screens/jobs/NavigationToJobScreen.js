import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function NavigationToJobScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];

  return (
    <View style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Navigation Route</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.mapArea}>
        <Ionicons name="map" size={80} color={COLORS.primary} />
        <Text style={styles.mapText}>Simulated Turn-by-Turn GPS Map</Text>
        <Text style={styles.trackingAlert}>🛰️ GPS Tracking Active. Enterprise is monitoring live status.</Text>
      </View>

      <View style={[styles.infoCard, SHADOWS.medium]}>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Job Status:</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>On The Way</Text>
          </View>
        </View>

        <Text style={styles.address}>{job.location}</Text>
        
        <View style={styles.row}>
          <View style={styles.infoItem}>
            <Ionicons name="navigate-outline" size={16} color={COLORS.primary} />
            <Text style={styles.infoText}>{job.distance} away</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={16} color={COLORS.primary} />
            <Text style={styles.infoText}>ETA: ~12 min</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.mapsBtn}>
          <Ionicons name="open-outline" size={18} color={COLORS.primary} />
          <Text style={styles.mapsText}>Open in Google Maps / Apple Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.arrivedBtn} onPress={() => navigation.navigate('Arrived', { job })}>
          <Text style={styles.arrivedText}>Mark as Arrived</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACING.md, paddingTop: SPACING.xxl, backgroundColor: COLORS.white, paddingBottom: SPACING.sm },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  mapArea: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.lightGray },
  mapText: { ...FONTS.medium, color: COLORS.darkGray, marginTop: SPACING.sm },
  trackingAlert: { fontSize: 11, color: COLORS.primary, marginTop: SPACING.md, fontWeight: '600' },
  infoCard: { backgroundColor: COLORS.white, padding: SPACING.lg, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  statusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SPACING.sm },
  statusLabel: { ...FONTS.caption, color: COLORS.gray, fontWeight: '700' },
  statusBadge: { backgroundColor: COLORS.primaryLight, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statusText: { fontSize: 11, fontWeight: '700', color: COLORS.primary, textTransform: 'uppercase' },
  address: { ...FONTS.medium, fontWeight: '700', marginBottom: SPACING.md },
  row: { flexDirection: 'row', gap: SPACING.lg, marginBottom: SPACING.md },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  infoText: { fontSize: 14, color: COLORS.darkGray, fontWeight: '600' },
  mapsBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12, gap: SPACING.sm, marginBottom: SPACING.md },
  mapsText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  arrivedBtn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center', ...SHADOWS.small },
  arrivedText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
