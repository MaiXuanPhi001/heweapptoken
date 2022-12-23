import React from 'react'
import { useEffect } from 'react'
import { Alert, Linking } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Containers from './src/components/navigations/Containers'
import DeepLinking from 'react-native-deep-linking'
import { navigate } from './src/components/navigations/navigationRef'
import { contants } from './src/utils/contants'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from './src/redux/slices/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const APP_SCHEME = 'hewetoken://'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // DeepLinking.addScheme(APP_SCHEME)

    // Linking.getInitialURL().then(url => {
    //   if (url) {
    //     DeepLinking.evaluateUrl(url)
    //   }
    // })

    // Linking.addListener('url', ({ url }) => {
    //   if (url) {
    //     DeepLinking.evaluateUrl(url)
    //   }
    // })

    // DeepLinking.addRoute('/signup/:referral', async res => {
    //   await logout()
    // })
  }, [])

  const logout = async () => {
    await AsyncStorage.setItem(contants.STORAGE_KEY, '')
    dispatch(userSlice.actions.signOut())
    console.log('aksj')
  }

  return (
    <SafeAreaProvider>
      <Containers />
    </SafeAreaProvider>
  )
}

export default App