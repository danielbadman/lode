import { useAppTheme } from '@/hooks/use-app-theme'
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
  const theme = useAppTheme()

  return (
    <SafeAreaView
      edges={['top']}
      className={`flex-1 ${theme.isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <View
        className={`border-b px-4 pb-4 pt-3 ${
          theme.isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
        }`}
      >
        <Text className={`text-3xl font-bold ${theme.isDark ? 'text-slate-50' : 'text-slate-900'}`}>
          {title}
        </Text>
        {subtitle ? (
          <Text className={`mt-1 text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View className={`flex-1 ${contentClassName}`}>{children}</View>
    </SafeAreaView>
  )
}
