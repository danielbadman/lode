import { HapticTab } from '@/components/haptic-tab'
import { IconSymbol } from '@/components/ui/icon-symbol'
import { useAuth } from '@/context/AuthContext'
import { Colors } from '@/constants/theme'
import { useAppTheme } from '@/hooks/use-app-theme'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Redirect, Tabs } from 'expo-router'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const theme = useAppTheme()

  const { session, loading } = useAuth()

  if (loading) {
    return (
      <View
        className={`flex-1 items-center justify-center ${
          theme.isDark ? 'bg-slate-950' : 'bg-white'
        }`}
      >
        <ActivityIndicator color={theme.activity} />
      </View>
    )
  }

  if (!session) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: theme.isDark ? '#94a3b8' : '#64748b',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="figure.strengthtraining.traditional" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
