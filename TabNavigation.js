import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen from './Screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (

        
            <Tab.Navigator>
                <Tab.Screen name="Screen2" component={Screen2} />
                <Tab.Screen name="Screen3" component={Screen3} />
                <Tab.Screen name="Screen4" component={Screen4} />
                <Tab.Screen name="Screen" component={Screen} />
            </Tab.Navigator>
        

    )
}

export default TabNavigation

const styles = StyleSheet.create({})