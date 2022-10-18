import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './navigationRef'
import { contants } from '../../utils/contants'
import Hello from '../screens/Hello'
import AppNavigation from './AppNavigation'

const Stack = createNativeStackNavigator()

const Containers = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={contants.screen.HELLO} component={Hello} />
                <Stack.Screen name={contants.screen.APPNAVIGATION} component={AppNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Containers