import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
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
      style={styles.campusCard}
      activeOpacity={0.9}
    >
      {/* Real Image */}
      <Image source={item.image} style={styles.campusImage} resizeMode="cover" />
      
      {/* Dark Overlay to make text readable */}
      <View style={styles.overlay} />
      
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
  
  // Updated Card Style
  campusCard: {
    width: width - 32,
    height: 200,
    borderRadius: 18,
    marginRight: 12,
    overflow: 'hidden', // This makes sure the image respects the rounded corners
    elevation: 3,
  },
  
  // Image Style
  campusImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  
  // Dark overlay
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', // 40% black opacity
  },
  
  campusContent: { 
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  campusTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  campusSubtitle: { color: '#E0E0E0', fontSize: 13, marginBottom: 8 },
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