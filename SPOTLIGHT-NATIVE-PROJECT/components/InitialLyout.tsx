import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth, useSSO } from '@clerk/clerk-expo'
import { Stack, useRouter, useSegments } from 'expo-router'


const InitialLyout = () => {
  const {isLoaded, isSignedIn} = useAuth()
  const segments = useSegments()

  const router = useRouter()

  useEffect(() => {

    if(!isLoaded) return

    const isAuthScreen = segments[0] === "(auth)";

    if(!isSignedIn && !isAuthScreen) router.replace("/(auth)/login")
        else if(isSignedIn && isAuthScreen) router.replace("/(tabs)")

  },[isLoaded, isSignedIn, segments])

  return <Stack screenOptions={{headerShown:false}} />
}

export default InitialLyout