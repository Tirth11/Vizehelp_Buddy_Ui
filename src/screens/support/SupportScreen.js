import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SupportScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Help & Support</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RaiseTicket')}>
        <Ionicons name="create-outline" size={24} color={COLORS.primary} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Raise Ticket</Text>
          <Text style={styles.cardSub}>Submit a support issue</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="call-outline" size={24} color={COLORS.success} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Call Support</Text>
          <Text style={styles.cardSub}>Talk to our support team</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="help-circle-outline" size={24} color={COLORS.accent} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>FAQ</Text>
          <Text style={styles.cardSub}>Frequently asked questions</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Ionicons name="chatbubbles-outline" size={24} color={COLORS.primary} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Chat Support</Text>
          <Text style={styles.cardSub}>Chat with our team</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TicketStatus')}>
        <Ionicons name="list-outline" size={24} color={COLORS.darkGray} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>My Tickets</Text>
          <Text style={styles.cardSub}>View your support tickets</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingTop: SPACING.xxl },
  title: { ...FONTS.title, marginBottom: SPACING.lg },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: SPACING.md, borderRadius: 12, marginBottom: SPACING.sm },
  cardInfo: { flex: 1, marginLeft: SPACING.md },
  cardTitle: { ...FONTS.medium },
  cardSub: { ...FONTS.small, marginTop: 2 },
});
