import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../screens/Login'
import { contants } from '../../utils/contants';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import { useEffect } from 'react';
import DeepLinking from 'react-native-deep-linking';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import userSlice from '../../redux/slices/userSlice';
import { navigate } from './navigationRef';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        DeepLinking.addScheme(contants.APP_SCHEME)

        Linking.getInitialURL().then(url => {
            if (url) {
                DeepLinking.evaluateUrl(url)
            }
        })

        Linking.addListener('url', ({ url }) => {
            if (url) {
                DeepLinking.evaluateUrl(url)
            }
        })

        DeepLinking.addRoute('/signup/:referral', res => {
            dispatch(userSlice.actions.changeReferral(res.referral))
            navigate(contants.screen.SIGNUP)
        })

        return () => Linking.removeAllListeners('url')

    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={contants.screen.LOGIN} component={Login} />
            <Stack.Screen name={contants.screen.SIGNUP} component={SignUp} />
            <Stack.Screen name={contants.screen.FORGOTPASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default UserStack