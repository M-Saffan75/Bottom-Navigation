import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const Screen2 = ({navigation}) => {
  return (
    <View style={{height:'100%' , alignItems:'center' , justifyContent:'center'}}>
      <Text style={{color:'#fff' , backgroundColor:'#000' , padding:15, borderRadius:10,}}
      onPress={ () => navigation.navigate('SignUp')}
      >Go to Screen 3</Text>
      <FontAwesome5 name={'facebook'} size={20} color={'#000'}/>
      <FontAwesome5 name={'github'} size={20} color={'#000'}/>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})