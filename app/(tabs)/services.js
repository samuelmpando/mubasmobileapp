import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BottomNav from '../../components/BottomNav';
import CustomDrawer from '../../components/CustomDrawer';
import { serviceCategories, servicesData } from '../../data';

export default function ServicesScreen() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter services by search + category
  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // ── Service card (now navigates to detail screen) ──
  const ServiceCard = ({ service }) => (
    <TouchableOpacity
      style={styles.serviceCard}
      activeOpacity={0.8}
      onPress={() => router.push(`/service/${service.id}`)}
    >
      <View
        style={[
          styles.serviceIconContainer,
          { backgroundColor: service.bgColor },
        ]}
      >
        <Ionicons name={service.icon} size={28} color={service.color} />
      </View>
      <Text style={styles.serviceTitle}>{service.title}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
    </TouchableOpacity>
  );

  // ── Category chip ──
  const CategoryChip = ({ category, icon }) => (
    <TouchableOpacity
      style={[
        styles.categoryChip,
        selectedCategory === category && styles.categoryChipActive,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Ionicons
        name={icon}
        size={16}
        color={selectedCategory === category ? '#FFFFFF' : '#454FA8'}
      />
      <Text
        style={[
          styles.categoryChipText,
          selectedCategory === category && styles.categoryChipTextActive,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerVisible(true)}>
            <Ionicons name="menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.logo}>Services</Text>
          <View style={{ width: 30 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={20}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search services..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#888" />
              </TouchableOpacity>
            )}
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
            contentContainerStyle={styles.categoriesContainer}
          >
            {serviceCategories.map((category) => (
              <CategoryChip
                key={category.id}
                category={category.id}
                icon={category.icon}
              />
            ))}
          </ScrollView>

          {/* Results count */}
          <Text style={styles.resultsCount}>
            {filteredServices.length} services available
          </Text>

          {/* Services Grid */}
          <View style={styles.servicesGrid}>
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </View>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <View style={styles.emptyState}>
              <Ionicons name="search-outline" size={64} color="#DDE1FF" />
              <Text style={styles.emptyStateTitle}>No services found</Text>
              <Text style={styles.emptyStateText}>
                Try adjusting your search or filter
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Bottom Navigation */}
        <BottomNav />
      </SafeAreaView>

      {/* Drawer */}
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    elevation: 2,
  },
  searchIcon: { marginRight: 12 },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#222',
    paddingVertical: 8,
  },

  categoriesScroll: { marginBottom: 16 },
  categoriesContainer: { paddingHorizontal: 4 },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  categoryChipActive: {
    backgroundColor: '#454FA8',
    borderColor: '#454FA8',
  },
  categoryChipText: {
    fontSize: 13,
    color: '#454FA8',
    marginLeft: 6,
    fontWeight: '500',
  },
  categoryChipTextActive: { color: '#FFFFFF' },

  resultsCount: { fontSize: 13, color: '#888', marginBottom: 16 },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  serviceIconContainer: {
    width: 54,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  serviceDescription: { fontSize: 11, color: '#888', lineHeight: 15 },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginTop: 16,
  },
  emptyStateText: { fontSize: 14, color: '#888', marginTop: 8 },
});