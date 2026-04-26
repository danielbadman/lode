import { useAppTheme } from '@/hooks/use-app-theme'
import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { supabase } from '../lib/supabase'

export default function AuthScreen() {
  const theme = useAppTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signIn() {
    try {
      setLoading(true)

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        Alert.alert('Sign in failed', error.message)
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown error signing in'
      console.error('signIn exception', error)
      Alert.alert('Network error', message)
    } finally {
      setLoading(false)
    }
  }

  async function signUp() {
    try {
      setLoading(true)

      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        Alert.alert('Sign up failed', error.message)
      } else {
        Alert.alert('Account created!')
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown error signing up'
      console.error('signUp exception', error)
      Alert.alert('Network error', message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={`flex-1 justify-center px-6 ${theme.isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <Text
        className={`mb-8 text-center text-3xl font-bold ${
          theme.isDark ? 'text-slate-50' : 'text-slate-900'
        }`}
      >
        Lode
      </Text>

      <TextInput
        className={`mb-4 rounded-lg border px-4 py-3 ${
          theme.isDark
            ? 'border-slate-700 bg-slate-900 text-slate-50'
            : 'border-gray-300 bg-white text-slate-900'
        }`}
        placeholder="Email"
        placeholderTextColor={theme.placeholder}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className={`mb-6 rounded-lg border px-4 py-3 ${
          theme.isDark
            ? 'border-slate-700 bg-slate-900 text-slate-50'
            : 'border-gray-300 bg-white text-slate-900'
        }`}
        placeholder="Password"
        placeholderTextColor={theme.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className={`mb-3 rounded-lg py-3 ${theme.isDark ? 'bg-slate-200' : 'bg-blue-500'}`}
        onPress={signIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={theme.isDark ? '#0f172a' : 'white'} />
        ) : (
          <Text
            className={`text-center font-semibold ${
              theme.isDark ? 'text-slate-950' : 'text-white'
            }`}
          >
            Log In
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className={`rounded-lg py-3 ${theme.isDark ? 'bg-slate-800' : 'bg-gray-200'}`}
        onPress={signUp}
        disabled={loading}
      >
        <Text
          className={`text-center font-semibold ${
            theme.isDark ? 'text-slate-100' : 'text-gray-700'
          }`}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text className={`mt-6 text-center ${theme.isDark ? 'text-slate-400' : 'text-gray-500'}`}>
        Track workouts, sets, and progress.
      </Text>
    </View>
  )
}
