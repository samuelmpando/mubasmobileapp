import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
  BackHandler,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Prevent going back to splash screen
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const handleLogin = () => {
    if (!studentId.trim() || !password.trim()) {
      Alert.alert(
        'Validation Error',
        'Please enter both Student ID and Password'
      );
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Reset Password',
      'Please contact the ICT Helpdesk or visit the student portal to reset your password.',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo and Header */}
          <View style={styles.headerSection}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/mubas-logo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
              <View style={styles.logoTextContainer}>
                <Text style={styles.logoTitle}>MUBAS</Text>
                <Text style={styles.logoSubtitle}>Mobile</Text>
              </View>
            </View>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.subtitleText}>
              Sign in to access your student portal
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.formSection}>
            {/* Student ID Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Student ID</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 2024-001"
                  placeholderTextColor="#999"
                  value={studentId}
                  onChangeText={setStudentId}
                  autoCapitalize="none"
                  keyboardType="default"
                />
                {studentId.length > 0 && (
                  <TouchableOpacity onPress={() => setStudentId('')}>
                    <Ionicons name="close-circle" size={18} color="#CCC" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons 
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'} 
                    size={20} 
                    color="#888" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Options Row */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={[
                  styles.checkbox,
                  rememberMe && styles.checkboxActive,
                ]}>
                  {rememberMe && (
                    <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                  )}
                </View>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Text style={styles.loginButtonText}>Sign In</Text>
                  <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
                </>
              )}
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={24} color="#DB4437" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-microsoft" size={24} color="#0078D4" />
                <Text style={styles.socialButtonText}>Microsoft</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By signing in, you agree to our
            </Text>
            <View style={styles.footerLinks}>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.footerDot}>•</Text>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
  },
  headerSection: {
    marginBottom: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 10,
  },
  logoTextContainer: {
    flexDirection: 'column',
  },
  logoTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    letterSpacing: 1,
  },
  logoSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    letterSpacing: 2,
    marginTop: -4,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  formSection: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    paddingVertical: 14,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxActive: {
    backgroundColor: '#454FA8',
    borderColor: '#454FA8',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#666',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#454FA8',
    fontWeight: '500',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#454FA8',
    borderRadius: 14,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#454FA8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    color: '#888',
    fontSize: 13,
    paddingHorizontal: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    gap: 10,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  footerLink: {
    fontSize: 13,
    color: '#454FA8',
    fontWeight: '500',
  },
  footerDot: {
    color: '#888',
    marginHorizontal: 8,
  },
});