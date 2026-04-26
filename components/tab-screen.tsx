import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'

type TabScreenProps = {
  title: string
  subtitle?: string
  children: ReactNode
  contentClassName?: string
}

export function TabScreen({
  title,
  subtitle,
  children,
  contentClassName = '',
}: TabScreenProps) {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-slate-50">
      <View className="border-b border-slate-200 bg-white px-4 pb-4 pt-3">
        <Text className="text-3xl font-bold text-slate-900">{title}</Text>
        {subtitle ? (
          <Text className="mt-1 text-sm text-slate-600">{subtitle}</Text>
        ) : null}
      </View>

      <View className={`flex-1 ${contentClassName}`}>{children}</View>
    </SafeAreaView>
  )
}
