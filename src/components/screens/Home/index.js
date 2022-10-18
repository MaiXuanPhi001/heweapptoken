import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onGetProfile } from '../../../redux/slices/userSlice'
import Session from './Session'
import OpenDrawer from '../Reuse/OpenDrawer'
import Block from '../../common/Block'
import { ImageBackground, SafeAreaView } from 'react-native'
import Scroll from '../../common/Scroll'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()

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
      <SafeAreaView style={{ flex: 1 }}>
        <Block
          flex={1}
          isPaddingAdnroid
          paddingHorizontal={10}
        >
          <Scroll paddingBottom={100}>
            <OpenDrawer navigation={navigation} />
            <Session />
          </Scroll>
        </Block>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home
