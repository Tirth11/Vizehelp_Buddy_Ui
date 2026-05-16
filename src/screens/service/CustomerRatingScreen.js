import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function CustomerRatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Feedback</Text>

      <View style={styles.ratingCard}>
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map(i => (
            <Ionicons key={i} name="star" size={32} color={i <= 5 ? COLORS.accent : COLORS.lightGray} />
          ))}
        </View>
        <Text style={styles.ratingText}>5.0 / 5.0</Text>
      </View>

      <View style={styles.feedbackBox}>
        <Text style={styles.feedbackLabel}>Customer Feedback</Text>
        <Text style={styles.feedbackText}>"Excellent service! Very professional and thorough. Will definitely request again."</Text>
      </View>

      <View style={styles.scoreBox}>
        <Text style={styles.scoreLabel}>Job Quality Score</Text>
        <Text style={styles.scoreValue}>95/100</Text>
      </View>

      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>Performance Tips</Text>
        <Text style={styles.tipItem}>✓ Great punctuality</Text>
        <Text style={styles.tipItem}>✓ Excellent communication</Text>
        <Text style={styles.tipItem}>✓ High quality work</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'MainTabs' }] })}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, textAlign: 'center', marginBottom: SPACING.lg },
  ratingCard: { alignItems: 'center', marginBottom: SPACING.lg },
  starsRow: { flexDirection: 'row', gap: SPACING.xs },
  ratingText: { ...FONTS.bold, fontSize: 20, marginTop: SPACING.sm },
  feedbackBox: { backgroundColor: COLORS.lightGray, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  feedbackLabel: { ...FONTS.small, marginBottom: SPACING.sm },
  feedbackText: { ...FONTS.regular, fontStyle: 'italic' },
  scoreBox: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#E8F5E9', padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.lg },
  scoreLabel: { ...FONTS.medium },
  scoreValue: { ...FONTS.bold, color: COLORS.success, fontSize: 18 },
  tipsBox: { marginBottom: SPACING.lg },
  tipsTitle: { ...FONTS.medium, marginBottom: SPACING.sm },
  tipItem: { ...FONTS.regular, paddingVertical: SPACING.xs },
  btn: { backgroundColor: COLORS.primary, padding: SPACING.md, borderRadius: 12, alignItems: 'center' },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
