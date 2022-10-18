import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Containers from './src/components/navigations/Containers'

const App = () => {
  return (
    <SafeAreaProvider>
      <Containers />
    </SafeAreaProvider>
  )
}

export default App