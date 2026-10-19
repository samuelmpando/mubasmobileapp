import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { campusData } from '../data';

const { width } = Dimensions.get('window');

export default function CampusCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.campusCard, { backgroundColor: item.color }]}
      activeOpacity={0.9}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="business-outline" size={60} color="#FFFFFF" />
      </View>
      <View style={styles.campusContent}>
        <Text style={styles.campusTitle}>{item.title}</Text>
        <Text style={styles.campusSubtitle}>{item.subtitle}</Text>
        <View style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / (width - 32)
    );
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Campus at a Glance</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Explore</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={campusData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width - 32}
        decelerationRate="fast"
        onScroll={handleScroll}
        contentContainerStyle={styles.carouselContent}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.pagination}>
        {campusData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  viewAll: { fontSize: 13, color: '#454FA8', fontWeight: '600' },
  carouselContent: { paddingHorizontal: 0 },
  campusCard: {
    width: width - 32,
    height: 200,
    borderRadius: 18,
    padding: 24,
    marginRight: 12,
    justifyContent: 'flex-end',
    elevation: 3,
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    opacity: 0.3,
  },
  campusContent: { justifyContent: 'flex-end' },
  campusTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  campusSubtitle: { color: '#DDE1FF', fontSize: 13, marginBottom: 8 },
  exploreButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  exploreButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDE1FF',
    marginHorizontal: 6,
  },
  paginationDotActive: { backgroundColor: '#454FA8', width: 24 },
});