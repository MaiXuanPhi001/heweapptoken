import { Button, Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import { useDispatch, useSelector } from 'react-redux'
import { emailSelector, ranSelector, userInfoSelector } from '../../../redux/selectors/userSelector'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'
import ProgressBarWalk from '../Reuse/ProgressBarWalk'
import { ranLimitSelector } from '../../../redux/selectors/walkSelector'
import { onGetRan, sendPositionRunStart } from '../../../redux/slices/waklSlice'
import MyText from '../../common/MyText'
// import * as Location from 'expo-location'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import { unwrapResult } from '@reduxjs/toolkit'
import LottieAnimation from '../Reuse/LottieAnimation'

const Session = ({ navigation }) => {
  const userInfo = useSelector(userInfoSelector)
  const ranLimit = useSelector(ranLimitSelector)
  const ran = useSelector(ranSelector)
  const [loading, setLoading] = useState(false)

  const emailUser = useSelector(emailSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetRan())
  }, [])

  const handleRunStart = async () => {
    // const { status } = await Location.requestForegroundPermissionsAsync()
    // if (status !== 'granted') {
    //   alert('You have denied location access')
    //   return
    // }
    // setLoading(true)
    // const location = await Location.getCurrentPositionAsync({})
    // const payload = unwrapResult(
    //   await dispatch(sendPositionRunStart({
    //     longitudeStart: location.coords.longitude,
    //     latitudeStart: location.coords.latitude,
    //     email: emailUser
    //   }))
    // )

    // if (payload.status) {
    //   setLoading(false)
    //   navigate(contants.screen.STARTRUN)
    // } else {
    //   alert('Has an error please again!')
    //   setLoading(false)
    // }
  }

  return (
    <Block marginTop={20} alignCenter>
      <Image
        style={styles.walkGif}
        resizeMode='contain'
        source={
          userInfo.gender === 1 ?
            require('../../../assets/gifs/malewalk.gif') :
            require('../../../assets/gifs/femalewalk.gif')
        }
      />
      <ProgressBarWalk
        color={theme.colors.lightGreen2}
        unfilledColor={theme.colors.gayProgressBar}
        ran={ran}
        url={require('../../../assets/images/coin.png')}
        ranLimit={ranLimit}
      />

      <ProgressBarWalk
        color={theme.colors.blueLight2}
        unfilledColor={theme.colors.gayProgressBar}
        ran={ran}
        url={require('../../../assets/images/kmwalk.png')}
        ranLimit={ranLimit}
      />
      <MyButton
        onPress={handleRunStart}
        disabled={loading}
        backgroundColor={theme.colors.lightGreen2}
        width={100}
        height={40}
        alignCenter
        justifyCenter
        marginTop={10}
        radius={10}
      >
        {loading ?
          <LottieAnimation url={require('../../../assets/lotties/loading.json')} />
          :
          <MyText color={theme.colors.white} fontWeightBold>
            START
          </MyText>
        }
      </MyButton>
    </Block>
  )
}

export default Session

const styles = StyleSheet.create({
  walkGif: {
    width: '100%',
    height: 300
  }
})