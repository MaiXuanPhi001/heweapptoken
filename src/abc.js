import { CImage, CText, Header } from '@/Components'
import { SCREENS_NAME } from '@/Constants'
import { useAppDispatch } from '@/Hooks'
import { commonActions } from '@/ReduxSaga'
import { COLORS, Images } from '@/Themes'
import Fonts from '@/Themes/Fonts'
import { getCurrentLatLong } from '@/Utils/map'
import { goBack, navigate } from '@/Utils/NavigationService'
import { truncate } from '@/Utils/UtilCurrency'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDistance } from 'geolib'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Alert, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import GetLocation from 'react-native-get-location'
import { fontScale, scale } from 'react-native-utils-scale'
import reactotron from 'reactotron-react-native'
import { styles } from './styles'

function useInterval(callback: () => void, delay: number | undefined) {
  const intervalRef = React.useRef()
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = setInterval(() => callbackRef.current(), delay)
      return () => clearInterval(intervalRef.current)
    }
  }, [delay])

  return intervalRef
}

function StartScreens({ route }: any) {
  const { data } = route?.params
  const dispatch = useAppDispatch()
  const [second, setSecond] = useState(0)
  const [minute, setMunute] = useState(0)
  const [startLat, setStartLat] = useState<any>(null)
  const [startLong, setStartLong] = useState<any>(null)

  const [location, setLocation] = useState<any>(null)
  const [distance, setDistance] = useState<any>(0)

  const [stopTime, setStopTime] = useState<Boolean>(false)
  const [stop, setStop] = useState<Boolean>(false)

  useEffect(() => {
    getCurrentLatLong(({ lat, long }: any) => {
      setStartLat(lat)
      setStartLong(long)
    })
  }, [])
  let interval = useInterval(() => {
    if (!stopTime) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then((loca) => {
          setLocation(loca)
          let dis = getDistance(
            { latitude: startLat, longitude: startLong },
            { latitude: loca?.latitude, longitude: loca?.longitude },
          )
          if (dis / 1000 > 0.01 && dis / 1000 - distance > 0 && location?.speed > 5) {
            setDistance(distance + (dis / 1000 - distance))
          }
        })
        .catch((error) => {})
    }
  }, 1000)

  useEffect(() => {
    return () => {
      clearInterval(interval?.current)
      setLocation(null)
      setDistance(0)
    }
  }, [])

  useEffect(async () => {
    const time = await AsyncStorage.getItem('TIME')

    if (time) {
      const getTime = new Date().getTime() - new Date(JSON.parse(time)).getTime()
      const mi = getTime / 1000 / 60
      const se = (getTime / 1000) % 60
      setMunute(Math.floor(mi))
      setSecond(Math.floor(se))
    }
  }, [])

  useLayoutEffect(() => {
    let timer = setInterval(() => {
      setSecond(second + 1)
    }, 1000)
    if (second === 60) {
      setSecond(0)
      setMunute(minute + 1)
    }
    if (stopTime) {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [second, stopTime])

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewHeader}>
          <Header
            back
            onPressBack={() => {
              Alert.alert('Notification', 'Exit now?', [
                {
                  text: 'No',
                  style: 'cancel',
                },
                {
                  text: 'Confirm',
                  onPress: () => goBack(),
                },
              ])
            }}
            title="Running"
            titleStyle={styles.title}
            gpsView
            status={3}
            statusBarColor={''}
          />
          <View style={styles.form} />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.row2}>
            <View style={styles.formTime}>
              <CText bold fontSize={fontScale(30)} color={COLORS.WHITE}>
                {minute < 10 && '0'}
                {minute} : {second < 10 && '0'}
                {second}
              </CText>
              <CImage source={Images.clock} style={styles.clock} />
            </View>
            <View style={styles.formTime2}>
              <CText bold fontSize={fontScale(26)} color={COLORS.WHITE}>
                {location?.speed < 0 || isNaN(location?.speed) ? 0 : truncate(location?.speed * 4, 2)} km/h
              </CText>
              <CImage source={Images.speed} style={styles.speed} />
              <CText
                fontFamily={Fonts.TYPE.ITALIC}
                fontSize={fontScale(18)}
                style={{ marginTop: scale(8) }}
                color={'rgba(100, 255, 203, 1)'}>
                {5}-{40} km/h
              </CText>
            </View>
            <View style={styles.formTime}>
              <CText bold fontSize={fontScale(30)} color={COLORS.WHITE}>
                {distance < 0.01 ? 0 : truncate(distance, 3)}
              </CText>
              <CImage source={Images.iconBike} style={styles.clock} />
            </View>
          </View>
          <CText bold fontSize={fontScale(80)} color={COLORS.WHITE} style={styles.textkm}>
            {distance < 0.01 || isNaN(distance) ? 0 : truncate(distance, 3)}
          </CText>
          <CText
            fontFamily={Fonts.TYPE.ITALIC}
            fontSize={fontScale(30)}
            color={'rgba(157, 156, 153, 1)'}
            style={styles.textkmt}>
            Kilometers
          </CText>
          <View style={styles.row3}>
            <CImage source={Images.logoCoin} style={styles.zoro2} />
            <CText bold fontSize={fontScale(50)} color={'rgba(255, 195, 90, 1)'}>
              +{distance < 0 || isNaN(distance) ? 0 : truncate(distance, 3)}
            </CText>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ImageBackground source={Images.bgBottom} style={styles.imageBottom} resizeMode="cover">
        {stop ? (
          <View style={[styles.viewBottom, { paddingHorizontal: scale(80) }]}>
            <TouchableOpacity
              onPress={() => {
                setStopTime(true)
                Alert.alert('Notification', 'Stop now?', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => setStopTime(false),
                  },
                  {
                    text: 'Confirm',
                    onPress: () => {
                      const res = {
                        longitudeEnd: startLong,
                        latitudeEnd: startLat,
                        ran: distance,
                      }
                      dispatch(
                        commonActions.runOffRequest({
                          ...res,
                          callback: () => {
                            AsyncStorage.removeItem('TIME')
                            goBack()
                          },
                        }),
                      )
                    },
                  },
                ])
              }}
              style={styles.view}>
              <CImage source={Images.stop} style={styles.icplay} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStop(false)
                setStopTime(false)
              }}
              style={[styles.view, { backgroundColor: COLORS.GREEN_2 }]}>
              <CImage source={Images.play} style={styles.icplay} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.viewBottom}>
            <TouchableOpacity
              onPress={() =>
                navigate(SCREENS_NAME.MAP_SCREEN, {
                  data: {
                    distance: truncate(distance, 2),
                    speed: location?.speed < 0 || isNaN(location?.speed) ? 0 : truncate(location?.speed * 4, 2),
                  },
                })
              }>
              <CImage source={Images.iconMap} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStop(true)
                setStopTime(true)
              }}>
              <CImage source={Images.iconPause} style={styles.iconPause} />
            </TouchableOpacity>
            <CImage source={Images.logo} style={styles.iconBike} />
          </View>
        )}
      </ImageBackground>
    </View>
  )
}

export default React.memo(StartScreens)