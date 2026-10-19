import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        {/* Splash Screen - shown first */}
        <Stack.Screen
          name="splash"
          options={{
            headerShown: false,
          }}
        />

        {/* Login Screen - shown after splash */}
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />

        {/* Main App - accessed after login */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        {/* Service Detail Screen - dynamic route */}
        <Stack.Screen
          name="service/[id]"
          options={{
            headerShown: false,
          }}
        />

        {/* Timetable WebView Screen */}
        <Stack.Screen
          name="service/timetable"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}