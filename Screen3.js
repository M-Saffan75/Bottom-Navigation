import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = ({navigation}) => {
  return (
    <View style={{height:'100%' , alignItems:'center' , justifyContent:'center'}}>
    <Text style={{color:'#fff' , backgroundColor:'orange' , padding:15, borderRadius:10,}}
    onPress={ () => navigation.navigate('Screen2')}
    >Screen 3</Text>
    <Text onPress={()=> navigation.openDrawer()}>Open Drawer</Text>
  </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})
/*  <Tab.Screen name="ContactStack" component={ContactStackNavigator} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />
        ),
        tabBarLabel: () => <Text style={styles.tabBarLabel}>Contact Us</Text>
      }}
      /> */