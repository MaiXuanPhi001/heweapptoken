import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const Feed = () => {
  return <Text>Feed</Text>
}

const Article = () => {
  return <Text>Article</Text>
}

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})