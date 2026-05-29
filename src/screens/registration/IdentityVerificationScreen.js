import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SPACING, RADIUS, SHADOWS } from '../../constants/theme';
import StepProgress from '../../components/StepProgress';

const DOC_TYPES = [
  { key: 'license',  icon: 'card-outline',      label: "Driver's License",          desc: 'Front & back of ID' },
  { key: 'stateId',  icon: 'document-outline',  label: 'State ID',                  desc: 'Front & back of ID' },
  { key: 'passport', icon: 'globe-outline',     label: 'U.S. Passport',             desc: 'Photo page only' },
  { key: 'resident', icon: 'people-outline',    label: 'Permanent Resident Card',   desc: 'If applicable' },
];

export default function IdentityVerificationScreen({ navigation }) {
  const [selectedDoc, setSelectedDoc] = useState('license');
  const [uploads, setUploads] = useState({ front: false, back: false, selfie: false });

  const upload = (key) => setUploads(p => ({ ...p, [key]: true }));
  const valid = selectedDoc && uploads.front && uploads.selfie;

  return (
    <View style={styles.container}>
      <StepProgress
        step={4}
        total={9}
        onBack={() => navigation.goBack()}
        title="Identity Verification"
        subtitle="Upload a valid government-issued photo ID."
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>1. Choose Document Type</Text>
        <View style={styles.docList}>
          {DOC_TYPES.map(doc => {
            const active = selectedDoc === doc.key;
            return (
              <TouchableOpacity key={doc.key} style={[styles.docOption, active && styles.docActive]} onPress={() => setSelectedDoc(doc.key)} activeOpacity={0.8}>
                <View style={[styles.docIcon, active && styles.docIconActive]}>
                  <Ionicons name={doc.icon} size={22} color={active ? COLORS.white : COLORS.primary} />
                </View>
                <View style={styles.docInfo}>
                  <Text style={styles.docLabel}>{doc.label}</Text>
                  <Text style={styles.docDesc}>{doc.desc}</Text>
                </View>
                <View style={[styles.radio, active && styles.radioActive]}>
                  {active && <View style={styles.radioDot} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>2. Upload Photos</Text>
        <UploadRow done={uploads.front}  label="Front side of ID"           onPress={() => upload('front')}  icon="card-outline" />
        <UploadRow done={uploads.back}   label="Back side of ID (optional)" onPress={() => upload('back')}   icon="card-outline" />
        <UploadRow done={uploads.selfie} label="Selfie verification"        onPress={() => upload('selfie')} icon="camera-outline" />

        <View style={styles.info}>
          <Ionicons name="lock-closed-outline" size={18} color={COLORS.success} />
          <Text style={styles.infoText}>Documents are encrypted and only used for verification.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, !valid && styles.btnDisabled]}
          disabled={!valid}
          onPress={() => navigation.navigate('BackgroundCheck')}
        >
          <Text style={styles.btnText}>Submit & Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function UploadRow({ done, label, onPress, icon }) {
  return (
    <TouchableOpacity style={[styles.uploadRow, done && styles.uploadRowDone]} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.uploadIcon, done && styles.uploadIconDone]}>
        <Ionicons name={done ? 'checkmark' : icon} size={20} color={done ? COLORS.white : COLORS.primary} />
      </View>
      <Text style={[styles.uploadLabel, done && styles.uploadLabelDone]}>{label}</Text>
      {!done && <Ionicons name="cloud-upload-outline" size={20} color={COLORS.primary} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  label: { ...FONTS.medium, fontSize: 15, color: COLORS.text, marginBottom: SPACING.sm, marginTop: SPACING.sm },
  docList: { gap: SPACING.sm, marginBottom: SPACING.lg },
  docOption: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, backgroundColor: COLORS.background, borderRadius: RADIUS.md, borderWidth: 1.5, borderColor: COLORS.border, gap: SPACING.md },
  docActive: { borderColor: COLORS.primary, backgroundColor: COLORS.primaryLight },
  docIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  docIconActive: { backgroundColor: COLORS.primary },
  docInfo: { flex: 1 },
  docLabel: { ...FONTS.medium, fontSize: 15 },
  docDesc: { ...FONTS.small, marginTop: 2 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  radioActive: { borderColor: COLORS.primary },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.primary },
  uploadRow: { flexDirection: 'row', alignItems: 'center', gap: SPACING.md, padding: SPACING.md, backgroundColor: COLORS.background, borderWidth: 1.5, borderColor: COLORS.border, borderRadius: RADIUS.md, marginBottom: SPACING.sm },
  uploadRowDone: { backgroundColor: COLORS.successLight, borderColor: COLORS.success },
  uploadIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.primaryLight, alignItems: 'center', justifyContent: 'center' },
  uploadIconDone: { backgroundColor: COLORS.success },
  uploadLabel: { ...FONTS.medium, flex: 1 },
  uploadLabelDone: { color: COLORS.success },
  info: { flexDirection: 'row', alignItems: 'flex-start', gap: SPACING.sm, backgroundColor: COLORS.successLight, padding: SPACING.md, borderRadius: RADIUS.md, marginTop: SPACING.md },
  infoText: { ...FONTS.small, flex: 1, color: COLORS.text },
  footer: { padding: SPACING.lg, borderTopWidth: 1, borderTopColor: COLORS.border, backgroundColor: COLORS.white },
  btn: { flexDirection: 'row', backgroundColor: COLORS.primary, padding: SPACING.md + 2, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center', gap: SPACING.sm, ...SHADOWS.small },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
