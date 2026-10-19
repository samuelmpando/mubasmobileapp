import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BottomNav from '../../components/BottomNav';
import CustomDrawer from '../../components/CustomDrawer';
import { formatCurrency, studentData } from '../../data';

export default function ProfileScreen() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { icon: 'person-outline', title: 'Personal Information' },
    { icon: 'school-outline', title: 'Academic Details' },
    { icon: 'wallet-outline', title: 'Financial Information' },
    { icon: 'book-outline', title: 'My Courses' },
    { icon: 'calendar-outline', title: 'My Timetable' },
    { icon: 'document-text-outline', title: 'My Documents' },
    { icon: 'settings-outline', title: 'Settings' },
    { icon: 'help-circle-outline', title: 'Help & Support' },
    { icon: 'log-out-outline', title: 'Logout' },
  ];

  const handleMenuItemPress = (title) => {
    if (title === 'Logout') {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          onPress: () => router.replace('/login'),
          style: 'destructive',
        },
      ]);
    } else {
      Alert.alert('Coming Soon', `${title} screen will be available soon.`);
    }
  };

  const MenuItem = ({ icon, title }) => (
    <TouchableOpacity
      style={[styles.menuItem, title === 'Logout' && styles.logoutItem]}
      onPress={() => handleMenuItemPress(title)}
    >
      <View style={styles.menuItemLeft}>
        <View
          style={[styles.menuIcon, title === 'Logout' && styles.logoutIcon]}
        >
          <Ionicons
            name={icon}
            size={22}
            color={title === 'Logout' ? '#E74C3C' : '#454FA8'}
          />
        </View>
        <Text
          style={[styles.menuTitle, title === 'Logout' && styles.logoutText]}
        >
          {title}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={title === 'Logout' ? '#E74C3C' : '#CCC'}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerVisible(true)}>
            <Ionicons name="menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.logo}>Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileImageContainer}>
              <View style={styles.profileImagePlaceholder}>
                <Text style={styles.profileImageText}>
                  {studentData.initials}
                </Text>
              </View>
              <TouchableOpacity style={styles.editPhotoButton}>
                <Ionicons name="camera" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <Text style={styles.profileName}>{studentData.fullName}</Text>
            <Text style={styles.programme}>{studentData.programme}</Text>

            <View style={styles.profileBadges}>
              <View style={styles.badge}>
                <Ionicons name="school-outline" size={14} color="#454FA8" />
                <Text style={styles.badgeText}>Year {studentData.year}</Text>
              </View>
              <View style={styles.badge}>
                <Ionicons name="calendar-outline" size={14} color="#454FA8" />
                <Text style={styles.badgeText}>
                  Semester {studentData.semester}
                </Text>
              </View>
              <View style={styles.badge}>
                <Ionicons name="card-outline" size={14} color="#454FA8" />
                <Text style={styles.badgeText}>
                  Student #{studentData.studentId}
                </Text>
              </View>
            </View>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{studentData.gpa}</Text>
              <Text style={styles.statLabel}>GPA</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{studentData.credits}</Text>
              <Text style={styles.statLabel}>Credits</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>
                {formatCurrency(studentData.feeBalance)}
              </Text>
              <Text style={styles.statLabel}>Balance</Text>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuSection}>
            <Text style={styles.menuSectionTitle}>Account Settings</Text>
            {menuItems.slice(0, 3).map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

            <View style={styles.divider} />

            <Text style={styles.menuSectionTitle}>Academic</Text>
            {menuItems.slice(3, 6).map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}

            <View style={styles.divider} />

            <Text style={styles.menuSectionTitle}>General</Text>
            {menuItems.slice(6).map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </View>
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  profileImageContainer: { position: 'relative', marginBottom: 12 },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#454FA8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: { color: '#FFFFFF', fontSize: 28, fontWeight: 'bold' },
  editPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#454FA8',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileName: { fontSize: 20, fontWeight: '700', color: '#222' },
  programme: { fontSize: 14, color: '#666', marginTop: 2 },
  profileBadges: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EEF0FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { fontSize: 12, color: '#454FA8', fontWeight: '500' },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    elevation: 1,
  },
  statValue: { fontSize: 18, fontWeight: '700', color: '#454FA8' },
  statLabel: { fontSize: 11, color: '#888', marginTop: 4 },
  menuSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 4,
    elevation: 1,
  },
  menuSectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  logoutItem: { marginTop: 4 },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: { backgroundColor: '#FDEDEC' },
  menuTitle: { fontSize: 15, color: '#222' },
  logoutText: { color: '#E74C3C' },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginHorizontal: 12 },
});