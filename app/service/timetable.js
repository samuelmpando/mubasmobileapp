import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

// MUBAS Timetable URL (from official announcement)
const TIMETABLE_URL = 'https://timetable.mubas.ac.mw';

export default function TimetableWebView() {
  const router = useRouter();
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  const handleBack = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
    } else {
      router.back();
    }
  };

  const handleReload = () => {
    setError(false);
    setLoading(true);
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Class Timetable</Text>
        <TouchableOpacity onPress={handleReload}>
          <Ionicons name="refresh" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Loading Overlay */}
      {loading && !error && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#454FA8" />
          <Text style={styles.loadingText}>Loading MUBAS timetable...</Text>
          <Text style={styles.loadingSubtext}>
            Connecting to 41.70.48.214
          </Text>
        </View>
      )}

      {/* Error State */}
      {error && (
        <View style={styles.errorContainer}>
          <Ionicons name="cloud-offline-outline" size={72} color="#DDE1FF" />
          <Text style={styles.errorTitle}>Cannot Load Timetable</Text>
          <Text style={styles.errorText}>
            The MUBAS timetable server may be offline, or you are not
            connected to the campus network.
          </Text>
          <Text style={styles.errorHint}>
            Tip: The timetable server is only accessible from within the
            MUBAS network.
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleReload}>
            <Ionicons name="refresh" size={18} color="#FFFFFF" />
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* WebView */}
      {!error && (
        <WebView
          ref={webViewRef}
          source={{ uri: TIMETABLE_URL }}
          style={styles.webview}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
          }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          // Allow HTTP traffic (needed for the IP address)
          mixedContentMode="always"
          originWhitelist={['*']}
          // Give the page a mobile viewport
          injectedJavaScript={`
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            document.getElementsByTagName('head')[0].appendChild(meta);
            true;
          `}
        />
      )}
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
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  webview: { flex: 1 },

  loadingContainer: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F8FC',
    zIndex: 10,
  },
  loadingText: {
    fontSize: 15,
    color: '#454FA8',
    marginTop: 16,
    fontWeight: '600',
  },
  loadingSubtext: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },

  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginTop: 20,
  },
  errorText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  errorHint: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    lineHeight: 18,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#454FA8',
    borderRadius: 12,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});