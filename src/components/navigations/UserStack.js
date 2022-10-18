import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../screens/Login'
import { contants } from '../../utils/contants';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={contants.screen.LOGIN} component={Login} />
            <Stack.Screen name={contants.screen.SIGNUP} component={SignUp} />
            <Stack.Screen name={contants.screen.FORGOTPASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default UserStack