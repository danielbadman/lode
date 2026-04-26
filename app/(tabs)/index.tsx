import { TabScreen } from '@/components/tab-screen'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <TabScreen title="Home" subtitle="Your dashboard and daily training overview.">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-gray-900">Home</Text>
      </View>
    </TabScreen>
  )
}
