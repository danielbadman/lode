import { TabScreen } from '@/components/tab-screen'
import { useAppTheme } from '@/hooks/use-app-theme'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  const theme = useAppTheme()

  return (
    <TabScreen title="Home" subtitle="Your dashboard and daily training overview.">
      <View className="flex-1 items-center justify-center px-6">
        <Text className={`text-2xl font-bold ${theme.isDark ? 'text-slate-50' : 'text-gray-900'}`}>
          Home
        </Text>
      </View>
    </TabScreen>
  )
}
