import { Button, Dimensions, Image, StyleSheet, Text, View, Platform, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import { useDispatch, useSelector } from 'react-redux'
import { emailSelector, firstSelector, ranSelector, userInfoSelector } from '../../../redux/selectors/userSelector'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'
import ProgressBarWalk from '../Reuse/ProgressBarWalk'
import { ranLimitSelector } from '../../../redux/selectors/walkSelector'
import { onGetRan, sendPositionRunStart } from '../../../redux/slices/waklSlice'
import MyText from '../../common/MyText'
import Geolocation from 'react-native-geolocation-service'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import { unwrapResult } from '@reduxjs/toolkit'
import LottieAnimation from '../Reuse/LottieAnimation'

const Session = ({ navigation }) => {
  const userInfo = useSelector(userInfoSelector)
  const ranLimit = useSelector(ranLimitSelector)
  const ran = useSelector(ranSelector)
  const [loading, setLoading] = useState(false)
  const [permision, setPermission] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(onGetRan())
    // getCurrentLocation()
  }, [])

  const getCurrentLocation = async () => {
    const getLocationPermission = await locationPermission()
    setPermission(getLocationPermission)
  }

  const locationPermission = () => new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
      try {
        const permissionStatus = await Geolocation.requestAuthorization('whenInUse')
        if (permissionStatus === 'granted') {
          return resolve('granted')
        }
        reject('permission not granted')
      } catch (error) {
        return reject(error)
      }
    }
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then((granted) => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return resolve('granted')
      }
      return reject('Location Permission denied')
    }).catch((error) => {
      console.log('Ask Location permission error: ', error)
      return reject(error)
    })
  })

  const handleRunStart = async () => {
    if (permision === 'granted') {
      navigate(contants.screen.STARTRUN)
    } else {
      alert('You have denied location access!')
    }
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
        // onPress={(handleRunStart)}
        onPress={() => navigate(contants.screen.RUN_START)}
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