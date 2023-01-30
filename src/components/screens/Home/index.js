import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import userSlice, { onGetProfile } from '../../../redux/slices/userSlice'
import Session from './Session'
import OpenDrawer from '../Reuse/OpenDrawer'
import Block from '../../common/Block'
import { ImageBackground, SafeAreaView, ScrollView, RefreshControl, StyleSheet, Linking } from 'react-native'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  const [refresh, setRefresh] = useState(false)

  const handleRefesh = () => {
    setRefresh(true)
    getProfileAPI()
    setRefresh(false)
  }

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getProfileAPI()
    })
    return willFocusSubscription
  })

  const getProfileAPI = async () => {
    dispatch(onGetProfile())
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../../assets/images/backgroupmobile.png')}
    >
      <ScrollView
        contentContainerStyle={styles.flexGrow}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={handleRefesh}
          />
        }
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Block
            flex={1}
            isPaddingAdnroid
            paddingHorizontal={10}
          >
            <OpenDrawer navigation={navigation} />
            <Session />
          </Block>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  flexGrow: 1,
  paddingBottom: 100
})

