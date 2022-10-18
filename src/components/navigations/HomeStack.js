import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home';
import { contants } from '../../utils/contants';
import StartRun from '../screens/StartRun';
import Run from '../screens/Run';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={contants.screen.HOME} component={Home} />
            {/* <Stack.Screen name={contants.screen.STARTRUN} component={StartRun} />
            <Stack.Screen name={contants.screen.RUN} component={Run} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})