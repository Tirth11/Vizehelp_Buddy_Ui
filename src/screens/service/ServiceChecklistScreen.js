import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const CHECKLISTS = {
  Cleaning: ['Reach location', 'Start cleaning', 'Upload before photo', 'Complete cleaning checklist', 'Upload after photo', 'Customer confirmation'],
  'Delivery Assistance': ['Reach pickup', 'Verify item', 'Upload pickup proof', 'Navigate to drop', 'Deliver item', 'OTP confirmation'],
  'Technician Visit': ['Reach location', 'Diagnose issue', 'Add notes', 'Complete repair/service', 'Upload proof', 'Customer confirmation'],
  'Elder Assistance': ['Reach location', 'Confirm task', 'Complete assistance', 'Add remarks', 'Customer confirmation'],
};

export default function ServiceChecklistScreen({ navigation, route }) {
  const serviceType = route.params?.serviceType || 'Cleaning';
  const steps = CHECKLISTS[serviceType] || CHECKLISTS['Cleaning'];
  const [completed, setCompleted] = useState([]);

  const toggleStep = (step) => {
    setCompleted(prev => prev.includes(step) ? prev.filter(s => s !== step) : [...prev, step]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Service Checklist</Text>
      <Text style={styles.subtitle}>{serviceType}</Text>

      {steps.map((step, i) => (
        <TouchableOpacity key={i} style={styles.stepRow} onPress={() => toggleStep(step)}>
          <View style={[styles.stepNum, completed.includes(step) && styles.stepDone]}>
            {completed.includes(step) ? <Ionicons name="checkmark" size={14} color={COLORS.white} /> : <Text style={styles.stepNumText}>{i + 1}</Text>}
          </View>
          <Text style={[styles.stepLabel, completed.includes(step) && styles.stepLabelDone]}>{step}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={[styles.btn, completed.length < steps.length && styles.btnDisabled]} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Complete Checklist</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.xs },
  subtitle: { ...FONTS.regular, color: COLORS.primary, marginBottom: SPACING.lg },
  stepRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: SPACING.md, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  stepNum: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, borderColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.md },
  stepDone: { backgroundColor: COLORS.success, borderColor: COLORS.success },
  stepNumText: { fontSize: 12, color: COLORS.primary, fontWeight: '600' },
  stepLabel: { ...FONTS.regular, flex: 1 },
  stepLabelDone: { textDecorationLine: 'line-through', color: COLORS.gray },
  btn: { backgroundColor: COLORS.success, padding: SPACING.md, borderRadius: 12, alignItems: 'center', marginTop: SPACING.lg },
  btnDisabled: { opacity: 0.5 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
