import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SummaryCards({ gpa, feeBalance, studentName }) {
  return (
    <View style={styles.summaryRow}>
      <View style={styles.summaryCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="school-outline" size={24} color="#454FA8" />
        </View>
        <Text style={styles.cardLabel}>GPA</Text>
        <Text style={styles.cardValue}>{gpa}</Text>
        <Text style={styles.cardSubtext}>Academic Standing</Text>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="wallet-outline" size={24} color="#454FA8" />
        </View>
        <Text style={styles.cardLabel}>Fee Balance</Text>
        <Text style={styles.cardValueSmall}>{feeBalance}</Text>
        <Text style={styles.cardSubtext}>Student #{studentName || 'N/A'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },
  cardLabel: {
    fontSize: 12,
    color: '#888',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 2,
  },
  cardValueSmall: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginTop: 5,
  },
  cardSubtext: {
    fontSize: 10,
    color: '#AAA',
    marginTop: 4,
  },
});