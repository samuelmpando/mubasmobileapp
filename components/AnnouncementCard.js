import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AnnouncementCard({ title, text, onPress }) {
  return (
    <TouchableOpacity style={styles.announcement} onPress={onPress}>
      <View style={styles.announcementIcon}>
        <Ionicons name="notifications-outline" size={22} color="#454FA8" />
      </View>
      <View style={styles.announcementText}>
        <Text style={styles.announcementTitle}>{title}</Text>
        <Text style={styles.announcementDescription}>{text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  announcement: {
    minHeight: 75,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  announcementIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  announcementText: {
    flex: 1,
  },
  announcementTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
  },
  announcementDescription: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },
});