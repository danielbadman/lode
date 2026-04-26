import { TabScreen } from '@/components/tab-screen'
import { useAppTheme } from '@/hooks/use-app-theme'
import { searchExercises } from '@/lib/exercisedb'
import { ExerciseOption } from '@/types/exercise'
import { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'

function formatList(items: string[]) {
  return items.length > 0 ? items.join(', ') : 'None listed'
}

export default function WorkoutScreen() {
  const theme = useAppTheme()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ExerciseOption[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSearch() {
    const trimmedQuery = query.trim()

    setHasSearched(true)

    if (!trimmedQuery) {
      setResults([])
      return
    }

    setIsLoading(true)

    try {
      const exercises = await searchExercises(trimmedQuery)
      setResults(exercises)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TabScreen
      title="Workout"
      subtitle="Search ExerciseDB and preview normalized exercise options."
    >
      <ScrollView
        className={`flex-1 ${theme.isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
        contentContainerClassName="px-4 py-6"
      >
        <View
          className={`rounded-2xl border p-4 shadow-sm ${
            theme.isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
          }`}
        >
          <Text className={`mb-2 text-sm font-medium ${theme.isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            Exercise search
          </Text>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Try bench press, squat, curl..."
            placeholderTextColor={theme.placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            className={`rounded-xl border px-4 py-3 text-base ${
              theme.isDark
                ? 'border-slate-700 bg-slate-950 text-slate-50'
                : 'border-slate-300 bg-slate-50 text-slate-900'
            }`}
          />

          <Pressable
            onPress={handleSearch}
            disabled={isLoading}
            className={`mt-3 items-center rounded-xl px-4 py-3 ${
              isLoading
                ? theme.isDark
                  ? 'bg-slate-700'
                  : 'bg-slate-400'
                : theme.isDark
                  ? 'bg-slate-200'
                  : 'bg-slate-900'
            }`}
          >
            <Text className={`text-base font-semibold ${theme.isDark ? 'text-slate-950' : 'text-white'}`}>
              {isLoading ? 'Searching...' : 'Search Exercises'}
            </Text>
          </Pressable>
        </View>

        <View className="mt-6">
          <Text className={`text-sm font-medium uppercase tracking-wide ${theme.isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Results
          </Text>

          {isLoading ? (
            <View
              className={`mt-4 items-center rounded-2xl border p-6 ${
                theme.isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
              }`}
            >
              <ActivityIndicator size="small" color={theme.activity} />
              <Text className={`mt-3 text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Fetching exercises...
              </Text>
            </View>
          ) : null}

          {!isLoading && !hasSearched ? (
            <View
              className={`mt-4 rounded-2xl border border-dashed p-5 ${
                theme.isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
              }`}
            >
              <Text className={`text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Run a search to see exercise cards from the API.
              </Text>
            </View>
          ) : null}

          {!isLoading && hasSearched && results.length === 0 ? (
            <View
              className={`mt-4 rounded-2xl border p-5 ${
                theme.isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
              }`}
            >
              <Text className={`text-sm ${theme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                No exercises found for{' '}
                <Text className={`font-medium ${theme.isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {query.trim()}
                </Text>
                .
              </Text>
            </View>
          ) : null}

          {!isLoading && results.length > 0 ? (
            <View className="mt-4 gap-3">
              {results.map((exercise) => (
                <View
                  key={exercise.exerciseId}
                  className={`rounded-2xl border p-4 shadow-sm ${
                    theme.isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                  }`}
                >
                  <View className="flex-row items-start justify-between gap-3">
                    <View className="flex-1">
                      <Text
                        className={`text-lg font-semibold capitalize ${
                          theme.isDark ? 'text-slate-50' : 'text-slate-900'
                        }`}
                      >
                        {exercise.name}
                      </Text>
                      <Text
                        className={`mt-1 text-xs uppercase tracking-wide ${
                          theme.isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        ID {exercise.exerciseId}
                      </Text>
                    </View>

                    <View
                      className={`rounded-full px-3 py-1 ${
                        theme.isDark ? 'bg-slate-800' : 'bg-slate-100'
                      }`}
                    >
                      <Text
                        className={`text-xs font-medium ${
                          theme.isDark ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        {exercise.bodyParts[0] ?? 'Unknown'}
                      </Text>
                    </View>
                  </View>

                  <View className="mt-4 gap-3">
                    <View>
                      <Text
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          theme.isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Equipment
                      </Text>
                      <Text className={`mt-1 text-sm ${theme.isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                        {formatList(exercise.equipments)}
                      </Text>
                    </View>

                    <View>
                      <Text
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          theme.isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Target muscles
                      </Text>
                      <Text className={`mt-1 text-sm ${theme.isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                        {formatList(exercise.targetMuscles)}
                      </Text>
                    </View>

                    <View>
                      <Text
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          theme.isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Body parts
                      </Text>
                      <Text className={`mt-1 text-sm ${theme.isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                        {formatList(exercise.bodyParts)}
                      </Text>
                    </View>

                    {exercise.gifUrl ? (
                      <Text
                        className={`text-xs ${theme.isDark ? 'text-slate-400' : 'text-slate-500'}`}
                        numberOfLines={1}
                      >
                        GIF: {exercise.gifUrl}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </TabScreen>
  )
}
