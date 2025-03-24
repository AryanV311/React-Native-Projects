import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'

const create = () => {

  const router = useRouter();

  const { user } = useUser();

  const [caption,setCaption] = useState('');
  const [selectedImage, setSelecedtImage] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false)

  if(!selectedImage){
    
  }

  return (
    <View>
      <Text>create</Text>
    </View>
  )
}

export default create