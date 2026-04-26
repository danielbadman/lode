import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import '../global.css'

import { AuthProvider } from '@/context/AuthContext'
import { useAppTheme } from '@/hooks/use-app-theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = useAppTheme()

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style={theme.statusBar} />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
