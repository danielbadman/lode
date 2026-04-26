import { TabScreen } from '@/components/tab-screen'
import { useAppTheme } from '@/hooks/use-app-theme'
import { supabase } from '@/lib/supabase'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  const theme = useAppTheme()

  return (
    <TabScreen title="Profile" subtitle="Account settings and sign-out controls.">
      <View className="flex-1 items-center justify-center px-6">
        <Text className={`mb-4 text-2xl font-bold ${theme.isDark ? 'text-slate-50' : 'text-gray-900'}`}>
          You are logged in
        </Text>

        <TouchableOpacity
          className={`rounded-lg px-6 py-3 ${theme.isDark ? 'bg-red-600' : 'bg-red-500'}`}
          onPress={() => supabase.auth.signOut()}
        >
          <Text className="font-semibold text-white">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </TabScreen>
  )
}
