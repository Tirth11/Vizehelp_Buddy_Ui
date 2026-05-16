import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_JOBS } from '../../data/mockData';

export default function NavigationToJobScreen({ navigation, route }) {
  const job = route.params?.job || MOCK_JOBS[1];

  return (
    <View style={styles.container}>
      <View style={styles.mapArea}>
        <Ionicons name="map" size={80} color={COLORS.primary} />
        <Text style={styles.mapText}>Map Navigation</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.address}>{job.location}</Text>
        <View style={styles.row}>
          <View style={styles.infoItem}>
            <Ionicons name="navigate-outline" size={16} color={COLORS.primary} />
            <Text style={styles.infoText}>{job.distance}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={16} color={COLORS.primary} />
            <Text style={styles.infoText}>~15 min</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.mapsBtn}>
          <Ionicons name="open-outline" size={18} color={COLORS.primary} />
          <Text style={styles.mapsText}>Open in Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.arrivedBtn} onPress={() => navigation.navigate('Arrived', { job })}>
          <Text style={styles.arrivedText}>I Have Arrived</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  mapArea: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.lightGray },
  mapText: { ...FONTS.regular, color: COLORS.gray, marginTop: SPACING.sm },
  infoCard: { backgroundColor: COLORS.white, padding: SPACING.lg, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  address: { ...FONTS.medium, marginBottom: SPACING.md },
  row: { flexDirection: 'row', gap: SPACING.lg, marginBottom: SPACING.md },
  infoItem: { flexDirection: 'row', alignItems: 'center', gap: SPACING.xs },
  infoText: { ...FONTS.regular },
  mapsBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: SPACING.md, borderWidth: 1, borderColor: COLORS.primary, borderRadius: 12, gap: SPACING.sm, marginBottom: SPACING.md },
  mapsText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  arrivedBtn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  arrivedText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
