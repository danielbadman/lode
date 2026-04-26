import { TabScreen } from '@/components/tab-screen'
import { supabase } from '@/lib/supabase'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <TabScreen title="Profile" subtitle="Account settings and sign-out controls.">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-4 text-2xl font-bold text-gray-900">You are logged in</Text>

        <TouchableOpacity
          className="rounded-lg bg-red-500 px-6 py-3"
          onPress={() => supabase.auth.signOut()}
        >
          <Text className="font-semibold text-white">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </TabScreen>
  )
}
