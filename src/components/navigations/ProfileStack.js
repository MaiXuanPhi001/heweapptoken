import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import DeleteAccount from '../screens/DeleteAccount'
import { contants } from '../../utils/contants';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={contants.screen.PROFILE} component={Profile} />
            <Stack.Screen name={contants.screen.DELETE_ACCOUNT} component={DeleteAccount} />
        </Stack.Navigator>
    )
}

export default ProfileStack