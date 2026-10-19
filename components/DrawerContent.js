import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DrawerContent({ navigation }) {
  const router = useRouter();

  const menuItems = [
    { icon: 'home-outline', title: 'Dashboard', route: '/' },
    { icon: 'grid-outline', title: 'Services', route: '/services' },
    { icon: 'notifications-outline', title: 'Notifications', route: '/alerts' },
    { icon: 'person-outline', title: 'Profile', route: '/profile' },
    { icon: 'book-outline', title: 'My Courses', route: '/courses' },
    { icon: 'calendar-outline', title: 'Timetable', route: '/timetable' },
    { icon: 'wallet-outline', title: 'Fees & Payments', route: '/fees' },
    { icon: 'library-outline', title: 'E-Library', route: '/library' },
    { icon: 'laptop-outline', title: 'Moodle', route: '/moodle' },
    { icon: 'settings-outline', title: 'Settings', route: '/settings' },
    { icon: 'help-circle-outline', title: 'Help & Support', route: '/help' },
    { icon: 'log-out-outline', title: 'Logout', route: '/logout' },
  ];

  const handleNavigation = (route) => {
    navigation.closeDrawer();
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileImageText}>SM</Text>
            </View>
            <View style={styles.onlineDot} />
          </View>
          <Text style={styles.profileName}>Samuel Mpando</Text>
          <Text style={styles.programme}>BSc Management Information Systems</Text>
          <View style={styles.profileStats}>
            <View style={styles.profileStat}>
              <Text style={styles.profileStatValue}>3.72</Text>
              <Text style={styles.profileStatLabel}>GPA</Text>
            </View>
            <View style={styles.profileStatDivider} />
            <View style={styles.profileStat}>
              <Text style={styles.profileStatValue}>Year 3</Text>
              <Text style={styles.profileStatLabel}>Semester 1</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {/* Main Navigation */}
          <Text style={styles.menuSectionTitle}>Main</Text>
          {menuItems.slice(0, 4).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleNavigation(item.route)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={22} color="#454FA8" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={18} color="#CCC" />
            </TouchableOpacity>
          ))}

          <View style={styles.divider} />

          {/* Academic */}
          <Text style={styles.menuSectionTitle}>Academic</Text>
          {menuItems.slice(4, 8).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleNavigation(item.route)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={22} color="#454FA8" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={18} color="#CCC" />
            </TouchableOpacity>
          ))}

          <View style={styles.divider} />

          {/* General */}
          <Text style={styles.menuSectionTitle}>General</Text>
          {menuItems.slice(8).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                item.title === 'Logout' && styles.logoutItem,
              ]}
              onPress={() => handleNavigation(item.route)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons 
                  name={item.icon} 
                  size={22} 
                  color={item.title === 'Logout' ? '#E74C3C' : '#454FA8'} 
                />
                <Text 
                  style={[
                    styles.menuItemText,
                    item.title === 'Logout' && styles.logoutText,
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <Ionicons 
                name="chevron-forward-outline" 
                size={18} 
                color={item.title === 'Logout' ? '#E74C3C' : '#CCC'} 
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* App Version */}
        <View style={styles.versionSection}>
          <Text style={styles.versionText}>MUBAS Mobile v1.0.0</Text>
          <Text style={styles.versionSubtext}>© 2024 MUBAS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  profileSection: {
    backgroundColor: '#454FA8',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profileImagePlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: {
    color: '#454FA8',
    fontSize: 28,
    fontWeight: 'bold',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#2ECC71',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  programme: {
    fontSize: 14,
    color: '#DDE1FF',
    marginBottom: 12,
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 12,
  },
  profileStat: {
    flex: 1,
    alignItems: 'center',
  },
  profileStatValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  profileStatLabel: {
    fontSize: 11,
    color: '#DDE1FF',
    marginTop: 2,
  },
  profileStatDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  menuSection: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  menuSectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  menuItemText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  logoutItem: {
    marginTop: 4,
  },
  logoutText: {
    color: '#E74C3C',
  },
  versionSection: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  versionSubtext: {
    fontSize: 11,
    color: '#BBB',
    marginTop: 2,
  },
});