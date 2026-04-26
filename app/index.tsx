import { useAuth } from '@/context/AuthContext'
import { useAppTheme } from '@/hooks/use-app-theme'
import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'


export default function Index() {
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

  return <Redirect href="/(tabs)" />
}
