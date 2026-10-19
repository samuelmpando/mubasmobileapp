import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeSection({ name, programme, year, semester }) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <View style={styles.welcome}>
      <Text style={styles.greeting}>{getGreeting()}, {name} 👋</Text>
      <Text style={styles.programme}>{programme}</Text>
      <Text style={styles.details}>Year {year} • Semester {semester}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  programme: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  details: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
});