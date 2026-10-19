import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BottomNav from '../../components/BottomNav';
import CustomDrawer from '../../components/CustomDrawer';
import {
  getUnreadCount,
  notificationsData,
  notificationTypes,
} from '../../data';

export default function AlertsScreen() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [filter, setFilter] = useState('All');

  const filteredNotifications = notificationsData.filter((notif) => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return !notif.read;
    if (filter === 'Read') return notif.read;
    return true;
  });

  const unreadCount = getUnreadCount(notificationsData);

  const NotificationItem = ({ notification }) => {
    const typeStyle =
      notificationTypes[notification.type] || notificationTypes.General;

    return (
      <TouchableOpacity
        style={[
          styles.notificationCard,
          !notification.read && styles.unreadCard,
        ]}
      >
        <View style={styles.notificationHeader}>
          <View style={styles.notificationLeft}>
            <View
              style={[
                styles.typeBadge,
                { backgroundColor: typeStyle.color },
              ]}
            >
              <Text style={styles.typeBadgeText}>{notification.type}</Text>
            </View>
            {!notification.read && <View style={styles.unreadDot} />}
            {notification.priority === 'high' && (
              <View style={styles.priorityBadge}>
                <Text style={styles.priorityText}>Important</Text>
              </View>
            )}
          </View>
          <Text style={styles.notificationDate}>{notification.timeAgo}</Text>
        </View>

        <Text style={styles.notificationTitle}>{notification.title}</Text>
        <Text style={styles.notificationMessage} numberOfLines={3}>
          {notification.message}
        </Text>
      </TouchableOpacity>
    );
  };

  const FilterChip = ({ label, active, onPress }) => (
    <TouchableOpacity
      style={[styles.filterChip, active && styles.filterChipActive]}
      onPress={onPress}
    >
      <Text
        style={[styles.filterChipText, active && styles.filterChipTextActive]}
      >
        {label}
      </Text>
      {label === 'Unread' && unreadCount > 0 && (
        <View style={styles.filterBadge}>
          <Text style={styles.filterBadgeText}>{unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerVisible(true)}>
            <Ionicons name="menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.logo}>Notifications</Text>
          <TouchableOpacity>
            <Ionicons name="checkmark-done-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.filterContainer}>
            <FilterChip
              label="All"
              active={filter === 'All'}
              onPress={() => setFilter('All')}
            />
            <FilterChip
              label="Unread"
              active={filter === 'Unread'}
              onPress={() => setFilter('Unread')}
            />
            <FilterChip
              label="Read"
              active={filter === 'Read'}
              onPress={() => setFilter('Read')}
            />
          </View>

          {filteredNotifications.length > 0 ? (
            <View style={styles.notificationsContainer}>
              {filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons
                name="notifications-off-outline"
                size={64}
                color="#DDE1FF"
              />
              <Text style={styles.emptyStateTitle}>No notifications</Text>
              <Text style={styles.emptyStateText}>
                {filter === 'Unread'
                  ? 'You have no unread notifications'
                  : 'All notifications are cleared'}
              </Text>
            </View>
          )}
        </ScrollView>

        <BottomNav />
      </SafeAreaView>

      <CustomDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FC' },
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
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  content: { padding: 16, paddingBottom: 25 },
  filterContainer: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  filterChipActive: {
    backgroundColor: '#454FA8',
    borderColor: '#454FA8',
  },
  filterChipText: {
    fontSize: 13,
    color: '#454FA8',
    fontWeight: '500',
  },
  filterChipTextActive: { color: '#FFFFFF' },
  filterBadge: {
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  filterBadgeText: { color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' },
  notificationsContainer: { gap: 12 },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    elevation: 1,
  },
  unreadCard: { borderLeftWidth: 4, borderLeftColor: '#454FA8' },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  typeBadge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  typeBadgeText: { color: '#FFFFFF', fontSize: 10, fontWeight: '600' },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#454FA8',
  },
  priorityBadge: {
    backgroundColor: '#FDEDEC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F5B7B1',
  },
  priorityText: { fontSize: 9, color: '#E74C3C', fontWeight: '600' },
  notificationDate: { fontSize: 11, color: '#999' },
  notificationTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  notificationMessage: { fontSize: 13, color: '#666', lineHeight: 18 },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginTop: 16,
  },
  emptyStateText: { fontSize: 14, color: '#888', marginTop: 8 },
});