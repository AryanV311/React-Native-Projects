import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen, Stack } from 'expo-router';


SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  },)

  return (
    <>
        <Stack screenOptions={{headerShown:false}} />
      {
        isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />
      }
    </>
  )
}

export default RootLayout;