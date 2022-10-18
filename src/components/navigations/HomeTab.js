import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { contants } from '../../utils/contants';
import Profile from '../screens/Profile';
import HomeDrawer from './HomeDrawer';
import Img from '../common/Img';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={contants.screen.HOMEDRAWER}
        component={HomeDrawer}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) return <Img url={require('../../assets/images/tabicons/main2.png')} />
            else return <Img url={require('../../assets/images/tabicons/main.png')} />
          }
        }}
      />
      <Tab.Screen
        name={contants.screen.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) return <Img url={require('../../assets/images/tabicons/user2.png')} />
            else return <Img source={require('../../assets/images/tabicons/user.png')} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})