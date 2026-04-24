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
    <View className="flex-1 justify-center px-6 bg-white">
      {/* Title */}
      <Text className="text-3xl font-bold text-center mb-8">
        Lode
      </Text>

      {/* Email */}
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-6"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Log In */}
      <TouchableOpacity
        className="bg-blue-500 rounded-lg py-3 mb-3"
        onPress={signIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-center font-semibold">
            Log In
          </Text>
        )}
      </TouchableOpacity>

      {/* Sign Up */}
      <TouchableOpacity
        className="bg-gray-200 rounded-lg py-3"
        onPress={signUp}
        disabled={loading}
      >
        <Text className="text-center font-semibold text-gray-700">
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text className="text-center text-gray-500 mt-6">
        Track workouts, sets, and progress.
      </Text>
    </View>
  )
}
