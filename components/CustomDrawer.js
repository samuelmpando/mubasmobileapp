import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { studentData } from '../data';

const { width } = Dimensions.get('window');

export default function CustomDrawer({ visible, onClose }) {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const menuItems = [
    { icon: 'home-outline', title: 'Dashboard', route: '/' },
    { icon: 'grid-outline', title: 'Services', route: '/services' },
    { icon: 'notifications-outline', title: 'Notifications', route: '/alerts' },
    { icon: 'person-outline', title: 'Profile', route: '/profile' },
    { icon: 'book-outline', title: 'My Courses', route: '/' },
    { icon: 'calendar-outline', title: 'Timetable', route: '/' },
    { icon: 'wallet-outline', title: 'Fees & Payments', route: '/' },
    { icon: 'library-outline', title: 'E-Library', route: '/' },
    { icon: 'settings-outline', title: 'Settings', route: '/' },
    { icon: 'help-circle-outline', title: 'Help & Support', route: '/' },
  ];

  const handleNavigation = (route) => {
    onClose();
    setTimeout(() => {
      router.push(route);
    }, 300);
  };

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  const handleLogout = () => {
    onClose();
    setTimeout(() => {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          onPress: () => router.replace('/login'),
          style: 'destructive',
        },
      ]);
    }, 300);
  };

  const MenuItem = ({ icon, title, route }) => {
    const isLogout = title === 'Logout';
    const handlePress = () =>
      isLogout ? handleLogout() : handleNavigation(route);

    return (
      <TouchableOpacity
        style={[styles.menuItem, isLogout && styles.logoutItem]}
        onPress={handlePress}
      >
        <View style={styles.menuItemLeft}>
          <Ionicons
            name={icon}
            size={22}
            color={isLogout ? '#E74C3C' : '#454FA8'}
          />
          <Text
            style={[styles.menuItemText, isLogout && styles.logoutText]}
          >
            {title}
          </Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={18}
          color={isLogout ? '#E74C3C' : '#CCC'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
      animationType="none"
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={handleClose}
        />
        <Animated.View
          style={[
            styles.drawer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Profile Section */}
              <View style={styles.profileSection}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleClose}
                >
                  <Ionicons name="close" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <View style={styles.profileImageContainer}>
                  <Image
                    source={require('../assets/images/mubas-logo.png')}
                    style={styles.profileImagePlaceholder}
                    resizeMode="contain"
                  />
                  <View style={styles.onlineDot} />
                </View>
                <Text style={styles.profileName}>{studentData.fullName}</Text>
                <Text style={styles.programme}>{studentData.programme}</Text>

                <View style={styles.profileStats}>
                  <View style={styles.profileStat}>
                    <Text style={styles.profileStatValue}>
                      {studentData.gpa}
                    </Text>
                    <Text style={styles.profileStatLabel}>GPA</Text>
                  </View>
                  <View style={styles.profileStatDivider} />
                  <View style={styles.profileStat}>
                    <Text style={styles.profileStatValue}>
                      Year {studentData.year}
                    </Text>
                    <Text style={styles.profileStatLabel}>
                      Semester {studentData.semester}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Menu Items */}
              <View style={styles.menuSection}>
                <Text style={styles.menuSectionTitle}>Main</Text>
                {menuItems.slice(0, 4).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}

                <View style={styles.divider} />

                <Text style={styles.menuSectionTitle}>Academic</Text>
                {menuItems.slice(4, 8).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}

                <View style={styles.divider} />

                <Text style={styles.menuSectionTitle}>General</Text>
                {menuItems.slice(8).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}

                <View style={styles.divider} />

                <Text style={styles.menuSectionTitle}>Account</Text>
                <MenuItem
                  icon="log-out-outline"
                  title="Logout"
                  route="/login"
                />
              </View>

              <View style={styles.versionSection}>
                <Text style={styles.versionText}>MUBAS Mobile v1.0.0</Text>
                <Text style={styles.versionSubtext}>© 2024 MUBAS</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  drawer: {
    width: width * 0.8,
    maxWidth: 320,
    backgroundColor: '#F7F8FC',
    height: '100%',
  },
  container: { flex: 1 },
  profileSection: {
    backgroundColor: '#454FA8',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: { alignSelf: 'flex-end', marginBottom: 12 },
  profileImageContainer: { position: 'relative', marginBottom: 12 },
  profileImagePlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    padding: 10,
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
  programme: { fontSize: 14, color: '#DDE1FF', marginBottom: 12 },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 12,
  },
  profileStat: { flex: 1, alignItems: 'center' },
  profileStatValue: { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
  profileStatLabel: { fontSize: 11, color: '#DDE1FF', marginTop: 2 },
  profileStatDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  menuSection: { paddingHorizontal: 12, paddingTop: 12 },
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
  logoutItem: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
  },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  menuItemText: { fontSize: 15, color: '#222', fontWeight: '500' },
  logoutText: { color: '#E74C3C' },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  versionSection: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: { fontSize: 13, color: '#888', fontWeight: '500' },
  versionSubtext: { fontSize: 11, color: '#BBB', marginTop: 2 },
});