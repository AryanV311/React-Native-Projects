import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>visit notifictions here</Link>
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

export default Index;