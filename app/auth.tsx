import AuthScreen from '@/components/AuthScreen'
import { useAuth } from '@/context/AuthContext'
import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

export default function AuthPage() {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator />
      </View>
    )
  }

  if (session) {
    return <Redirect href="/(tabs)" />
  }

  return <AuthScreen />
}
