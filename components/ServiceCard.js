import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceCard({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.service} onPress={onPress}>
      <View style={styles.serviceIcon}>
        <Ionicons name={icon} size={26} color="#454FA8" />
      </View>
      <Text style={styles.serviceTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  service: {
    width: '31.5%',
    height: 105,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
  },
  serviceIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  serviceTitle: {
    fontSize: 11,
    color: '#444',
    textAlign: 'center',
  },
});