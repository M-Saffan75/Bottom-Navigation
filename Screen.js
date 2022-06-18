import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'

const Screen = ({navigation}) => {
  return (
    <>
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', backgroundColor: 'orange', padding: 15, borderRadius: 10, }}
        onPress={()=> navigation.navigate('Screen2')}
      >Go Forward</Text>
    </View>
  
    </>
  )
}

export default Screen

const styles = StyleSheet.create({})