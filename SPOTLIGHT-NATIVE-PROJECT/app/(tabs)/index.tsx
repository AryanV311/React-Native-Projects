import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

const index = () => {

  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{color: "black"}}>Signout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        fontSize:24,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default index;