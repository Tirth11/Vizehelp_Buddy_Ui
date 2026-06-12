import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ProofUploadScreen({ navigation, route }) {
  const job = route.params?.job;
  const [notes, setNotes] = useState('');
  const [uploads, setUploads] = useState({ before: false, after: false, evPhoto: false, signature: false });
  const [loading, setLoading] = useState(false);

  const toggleUpload = (key) => {
    setUploads(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Proof Submitted', 
        'Service status updated to "Completed by Buddy". Waiting for customer confirmation.',
        [
          { text: 'Proceed', onPress: () => navigation.navigate('CustomerConfirmation', { job }) }
        ]
      );
    }, 500);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Upload Service Proof</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>Upload photos and signature as audit proof of task completion.</Text>

      {/* Upload Cards */}
      <UploadItem 
        icon="camera-outline" 
        title="Before Photo *" 
        desc="Photo of vehicle prior to starting" 
        done={uploads.before} 
        onPress={() => toggleUpload('before')} 
      />
      <UploadItem 
        icon="checkmark-done-circle-outline" 
        title="After Photo *" 
        desc="Photo after completing the service" 
        done={uploads.after} 
        onPress={() => toggleUpload('after')} 
      />
      <UploadItem 
        icon="battery-charging-outline" 
        title="EV Charging Photo *" 
        desc="Photo showing active charger connection" 
        done={uploads.evPhoto} 
        onPress={() => toggleUpload('evPhoto')} 
      />
      <UploadItem 
        icon="pencil-outline" 
        title="Customer Signature (Optional)" 
        desc="Digital sign-off on device" 
        done={uploads.signature} 
        onPress={() => toggleUpload('signature')} 
      />

      <Text style={styles.label}>Service Completion Notes *</Text>
      <TextInput 
        style={styles.notesInput} 
        placeholder="Add details about charging levels, vehicle state, or general notes..." 
        placeholderTextColor={COLORS.gray}
        multiline 
        numberOfLines={3}
        value={notes} 
        onChangeText={setNotes} 
      />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <>
            <Text style={styles.btnText}>Mark Service Completed</Text>
            <Ionicons name="checkmark-done" size={20} color={COLORS.white} />
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

function UploadItem({ icon, title, desc, done, onPress }) {
  return (
    <TouchableOpacity style={[styles.uploadCard, done && styles.uploadCardDone]} onPress={onPress}>
      <View style={[styles.iconBg, done && styles.iconBgDone]}>
        <Ionicons name={icon} size={22} color={done ? COLORS.success : COLORS.primary} />
      </View>
      <View style={styles.info}>
        <Text style={[styles.uploadTitle, done && { color: COLORS.success }]}>{title}</Text>
        <Text style={styles.uploadSub}>{desc}</Text>
      </View>
      <Ionicons 
        name={done ? 'checkmark-circle' : 'cloud-upload-outline'} 
        size={22} 
        color={done ? COLORS.success : COLORS.gray} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.lg },
  navHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.md },
  navTitle: { ...FONTS.subtitle, fontWeight: '700' },
  subtitle: { ...FONTS.regular, color: COLORS.gray, lineHeight: 18, marginBottom: SPACING.lg },
  uploadCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 14, marginBottom: SPACING.sm, ...SHADOWS.small, borderWidth: 1, borderColor: COLORS.white },
  uploadCardDone: { borderColor: COLORS.success },
  iconBg: { width: 44, height: 44, borderRadius: 12, backgroundColor: COLORS.primaryLight, justifyContent: 'center', alignItems: 'center', marginRight: SPACING.sm },
  iconBgDone: { backgroundColor: '#E8F8F0' },
  info: { flex: 1 },
  uploadTitle: { ...FONTS.medium, fontWeight: '700' },
  uploadSub: { ...FONTS.small, fontSize: 11 },
  label: { ...FONTS.medium, fontWeight: '700', marginTop: SPACING.md, marginBottom: SPACING.sm },
  notesInput: { backgroundColor: COLORS.white, borderRadius: 12, padding: SPACING.md, height: 80, textAlignVertical: 'top', marginBottom: SPACING.lg, color: COLORS.text, borderWidth: 1, borderColor: COLORS.border },
  btn: { flexDirection: 'row', backgroundColor: COLORS.success, padding: SPACING.md + 2, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: 8, ...SHADOWS.small, marginBottom: SPACING.lg },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
