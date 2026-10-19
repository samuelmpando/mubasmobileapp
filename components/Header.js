import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Header({ onMenuPress, onNotificationPress }) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.logo}>MUBAS</Text>
      <TouchableOpacity onPress={onNotificationPress}>
        <Ionicons name="notifications-outline" size={27} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: '#454FA8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },
});