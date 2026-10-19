import { Ionicons as Icon, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { servicesData } from '.';
import { getServiceDetails } from './serviceDetails';

export default function ServiceDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const service = servicesData.find((s) => s.id === id);
  const details = getServiceDetails(id);

  if (!service || !details) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.logo}>Service</Text>
          <View style={{ width: 28 }} />
        </View>
        <View style={styles.emptyState}>
          <Ionicons name="alert-circle-outline" size={64} color="#DDE1FF" />
          <Text style={styles.emptyStateTitle}>Service not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderSection = (section, index) => {
    if (section.type === 'list') {
      return (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionHeading}>{section.heading}</Text>
          {section.items.map((item, i) => (
            <View key={i} style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={styles.listItemTitle}>
                  {item.name || item.course || item.code}
                </Text>
                <Text style={styles.listItemSubtitle}>
                  {item.author
                    ? item.author
                    : item.lecturer
                    ? `Lecturer: ${item.lecturer}`
                    : item.venue
                    ? `${item.time} • ${item.venue}`
                    : item.method
                    ? `${item.method}`
                    : item.date || ''}
                </Text>
                {item.credits && (
                  <Text style={styles.listItemMeta}>
                    {item.credits} credits • {item.status || ''}
                  </Text>
                )}
              </View>
              <View style={styles.listItemRight}>
                {item.grade && (
                  <Text style={styles.gradeText}>{item.grade}</Text>
                )}
                {item.progress && (
                  <Text style={styles.progressText}>{item.progress}</Text>
                )}
                {item.pending && (
                  <Text style={styles.pendingText}>{item.pending}</Text>
                )}
                {item.amount && (
                  <Text style={styles.amountText}>{item.amount}</Text>
                )}
                {item.status && !item.credits && (
                  <Text style={styles.statusText}>{item.status}</Text>
                )}
                {item.type && (
                  <Text style={styles.typeText}>{item.type}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      );
    }

    if (section.type === 'stats') {
      return (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionHeading}>{section.heading}</Text>
          <View style={styles.statsGrid}>
            {section.items.map((item, i) => (
              <View key={i} style={styles.statBox}>
                <Text style={styles.statBoxValue}>{item.value}</Text>
                <Text style={styles.statBoxLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    if (section.type === 'timetable') {
      return (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionHeading}>{section.heading}</Text>
          {section.items.map((item, i) => (
            <View key={i} style={styles.timetableItem}>
              <View style={styles.timetableDay}>
                <Text style={styles.timetableDayText}>{item.day}</Text>
              </View>
              <View style={styles.timetableInfo}>
                <Text style={styles.timetableCourse}>{item.course}</Text>
                <Text style={styles.timetableMeta}>
                  {item.time} • {item.venue}
                </Text>
              </View>
            </View>
          ))}
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.logo}>{details.title}</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Hero */}
        <View
          style={[styles.hero, { backgroundColor: service.bgColor }]}
        >
          <View style={styles.heroIconWrap}>
            <Icon name={service.icon} size={36} color={service.color} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>{details.title}</Text>
            <Text style={styles.heroSubtitle}>{details.description}</Text>
          </View>
        </View>

        {/* Sections */}
        {details.sections.map((section, index) =>
          renderSection(section, index)
        )}

        {/* Placeholder footer */}
        <View style={styles.footerNote}>
          <Ionicons
            name="information-circle-outline"
            size={16}
            color="#888"
          />
          <Text style={styles.footerNoteText}>
            Demo data • Would connect to MUBAS systems in production
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  content: { padding: 16, paddingBottom: 30 },

  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  heroIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  heroSubtitle: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    lineHeight: 16,
  },

  section: { marginBottom: 24 },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#454FA8',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 10,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    elevation: 1,
  },
  listItemLeft: { flex: 1, paddingRight: 10 },
  listItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  listItemSubtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
  },
  listItemMeta: {
    fontSize: 11,
    color: '#999',
    marginTop: 3,
  },
  listItemRight: { alignItems: 'flex-end' },
  gradeText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#454FA8',
  },
  progressText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#27AE60',
  },
  pendingText: {
    fontSize: 10,
    color: '#E67E22',
    marginTop: 2,
  },
  amountText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#222',
  },
  statusText: {
    fontSize: 11,
    color: '#27AE60',
    fontWeight: '600',
  },
  typeText: {
    fontSize: 10,
    color: '#454FA8',
    fontWeight: '600',
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statBox: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 1,
  },
  statBoxValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#454FA8',
    textAlign: 'center',
  },
  statBoxLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 6,
    textAlign: 'center',
  },

  timetableItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
    elevation: 1,
  },
  timetableDay: {
    width: 70,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    marginRight: 12,
  },
  timetableDayText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#454FA8',
  },
  timetableInfo: { flex: 1 },
  timetableCourse: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
  },
  timetableMeta: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },

  footerNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
  },
  footerNoteText: {
    fontSize: 11,
    color: '#888',
    fontStyle: 'italic',
  },

  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginTop: 12,
  },
});