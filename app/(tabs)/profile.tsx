import { supabase } from '@/lib/supabase'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold mb-4 text-gray-900">You are logged in</Text>

      <TouchableOpacity
        className="bg-red-500 rounded-lg px-6 py-3"
        onPress={() => supabase.auth.signOut()}
      >
        <Text className="text-white font-semibold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
