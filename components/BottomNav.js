import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const navItems = [
  { name: 'Home', icon: 'home', path: '/' },
  { name: 'Services', icon: 'grid', path: '/services' },
  { name: 'Alerts', icon: 'notifications', path: '/alerts' },
  { name: 'Profile', icon: 'person', path: '/profile' },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    return pathname === path;
  };

  const navigateTo = (path) => {
    try {
      router.push(path);
    } catch (error) {
      router.replace(path);
    }
  };

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={styles.navItem}
          onPress={() => navigateTo(item.path)}
        >
          <Ionicons
            name={isActive(item.path) ? item.icon : item.icon + '-outline'}
            size={24}
            color={isActive(item.path) ? '#454FA8' : '#888'}
          />
          <Text
            style={[
              styles.navText,
              isActive(item.path) && styles.activeNavText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 68,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#888',
    marginTop: 3,
  },
  activeNavText: {
    color: '#454FA8',
    fontWeight: '700',
  },
});