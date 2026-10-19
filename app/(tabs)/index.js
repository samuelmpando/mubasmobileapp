import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BottomNav from '../../components/BottomNav';
import CampusCarousel from '../../components/CampusCarousel';
import CustomDrawer from '../../components/CustomDrawer';

import {
  formatCurrency,
  getGreeting,
  homeAnnouncements,
  homeServices,
  studentData,
} from '../../data';

export default function HomeScreen() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const navigateTo = (screen) => {
    try {
      router.push(screen);
    } catch (error) {
      router.replace(screen);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerVisible(true)}>
            <Ionicons name="menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Image
              source={require('../../assets/images/mubas-logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <Text style={styles.logo}>MUBAS</Text>
          </View>
          <TouchableOpacity onPress={() => navigateTo('/alerts')}>
            <Ionicons name="notifications-outline" size={27} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* WELCOME */}
          <View style={styles.welcome}>
            <Text style={styles.greeting}>
              {getGreeting()}, {studentData.firstName} 👋
            </Text>
            <Text style={styles.programme}>{studentData.programme}</Text>
            <Text style={styles.details}>
              Year {studentData.year} • Semester {studentData.semester}
            </Text>
          </View>

          {/* SUMMARY */}
          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <View style={styles.iconCircle}>
                <Ionicons name="school-outline" size={24} color="#454FA8" />
              </View>
              <Text style={styles.cardLabel}>GPA</Text>
              <Text style={styles.cardValue}>{studentData.gpa}</Text>
            </View>

            <View style={styles.summaryCard}>
              <View style={styles.iconCircle}>
                <Ionicons name="wallet-outline" size={24} color="#454FA8" />
              </View>
              <Text style={styles.cardLabel}>Fee Balance</Text>
              <Text style={styles.cardValueSmall}>
                {formatCurrency(studentData.feeBalance)}
              </Text>
            </View>
          </View>

          {/* CAMPUS CAROUSEL */}
          <CampusCarousel />

          {/* SERVICES */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>University Services</Text>
            <TouchableOpacity onPress={() => navigateTo('/services')}>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.servicesGrid}>
            {homeServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={styles.service}
                onPress={() => navigateTo(`/service/${service.id}`)}
              >
                <View style={styles.serviceIcon}>
                  <Ionicons name={service.icon} size={26} color="#454FA8" />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ANNOUNCEMENTS */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Announcements</Text>
            <TouchableOpacity onPress={() => navigateTo('/alerts')}>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>

          {homeAnnouncements.map((announcement) => (
            <TouchableOpacity
              key={announcement.id}
              style={styles.announcement}
              onPress={() => navigateTo('/alerts')}
            >
              <View style={styles.announcementIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#454FA8"
                />
              </View>
              <View style={styles.announcementText}>
                <Text style={styles.announcementTitle}>
                  {announcement.title}
                </Text>
                <Text style={styles.announcementDescription}>
                  {announcement.summary}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <BottomNav />
      </SafeAreaView>

      {/* DRAWER */}
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
  headerCenter: { flexDirection: 'row', alignItems: 'center' },
  headerLogo: { width: 30, height: 30, marginRight: 8, borderRadius: 4 },
  logo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },
  content: { padding: 16, paddingBottom: 25 },

  welcome: { marginBottom: 20 },
  greeting: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  programme: { fontSize: 14, color: '#555', fontWeight: '500' },
  details: { fontSize: 13, color: '#888', marginTop: 4 },

  summaryRow: { flexDirection: 'row', gap: 12, marginBottom: 25 },
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
  cardLabel: { fontSize: 12, color: '#888' },
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

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 5,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  viewAll: { fontSize: 13, color: '#454FA8', fontWeight: '600' },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  service: {
    width: '31.5%',
    height: 105,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
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
  serviceTitle: { fontSize: 11, color: '#444', textAlign: 'center' },

  announcement: {
    minHeight: 75,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
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
  announcementText: { flex: 1 },
  announcementTitle: { fontSize: 14, fontWeight: '700', color: '#222' },
  announcementDescription: { fontSize: 11, color: '#777', marginTop: 3 },
});