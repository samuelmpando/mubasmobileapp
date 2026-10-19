import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnim, {
        toValue: 1,
        friction: 3,
        tension: 50,
        useNativeDriver: true,
      }),
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to login after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#454FA8" />

      {/* Background with decorative elements */}
      <View style={styles.background}>
        <Animated.View 
          style={[
            styles.decorativeCircle1,
            { transform: [{ rotate: spin }] }
          ]}
        />
        <Animated.View 
          style={[
            styles.decorativeCircle2,
            { transform: [{ rotate: spin }] }
          ]}
        />
        <Animated.View 
          style={[
            styles.decorativeCircle3,
            { transform: [{ rotate: spin }] }
          ]}
        />
      </View>

      <View style={styles.content}>
        {/* Logo Container */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                { translateY: bounceAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0],
                })}
              ]
            }
          ]}
        >
          <View style={styles.logoWrapper}>
            {/* Actual MUBAS Logo Image */}
            <Image 
              source={require('../assets/images/mubas-logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.universityName}>
            Malawi University of Business and Applied Sciences
          </Text>
          <Text style={styles.universityMotto}>
            Excellence in Education, Research and Service
          </Text>
        </Animated.View>

        {/* Loading Progress Bar */}
        <Animated.View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <Animated.View 
              style={[
                styles.progressFill,
                { width: progressWidth }
              ]} 
            />
          </View>
          <View style={styles.loadingTextContainer}>
            <Text style={styles.loadingText}>Loading</Text>
            <View style={styles.loadingDots}>
              <Animated.View 
                style={[
                  styles.dot,
                  { 
                    opacity: progressAnim.interpolate({
                      inputRange: [0, 0.3, 0.6, 1],
                      outputRange: [0.3, 1, 0.3, 0.3],
                    })
                  }
                ]} 
              />
              <Animated.View 
                style={[
                  styles.dot,
                  { 
                    opacity: progressAnim.interpolate({
                      inputRange: [0, 0.3, 0.6, 1],
                      outputRange: [0.3, 0.3, 1, 0.3],
                    })
                  }
                ]} 
              />
              <Animated.View 
                style={[
                  styles.dot,
                  { 
                    opacity: progressAnim.interpolate({
                      inputRange: [0, 0.3, 0.6, 1],
                      outputRange: [0.3, 0.3, 0.3, 1],
                    })
                  }
                ]} 
              />
            </View>
          </View>
        </Animated.View>

        {/* Version Info */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.copyrightText}>© 2026 MUBAS</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454FA8',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.05)',
    top: -100,
    right: -50,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.08)',
    bottom: 50,
    left: -50,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.03)',
    top: '40%',
    right: -30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  universityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 8,
    letterSpacing: 1,
  },
  universityMotto: {
    fontSize: 12,
    fontWeight: '300',
    color: '#DDE1FF',
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  loadingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  loadingText: {
    fontSize: 14,
    color: '#DDE1FF',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  loadingDots: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 3,
  },
  versionContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: 1,
  },
  copyrightText: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.3)',
    marginTop: 2,
  },
});