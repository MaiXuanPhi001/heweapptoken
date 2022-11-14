import { Alert, BackHandler, Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import Geolocation from 'react-native-geolocation-service'
import * as turf from '@turf/turf'
import Position from './Position'
import Scroll from '../../common/Scroll'
import Map from './Map'
import { useDispatch, useSelector } from 'react-redux'
import { onSendPositionEnd, onSendPositionUpdate, sendPositionRunStart } from '../../../redux/slices/waklSlice'
import { sendPositionEnd, sendPositionUpdate } from '../../../api/walkApi'
import { emailSelector } from '../../../redux/selectors/userSelector'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { contants } from '../../../utils/contants'
import { alertGoBack } from '../../../method/alert'
import { goBack } from '../../navigations/navigationRef'
import _BackgroundTimer from 'react-native-background-timer'
import { accelerometer, gyroscope, setUpdateIntervalForType, SensorTypes } from "react-native-sensors"

const StartRun = () => {
  const [pause, setPause] = useState(false)
  const [second, setSecond] = useState(0)
  const [secondEnd, setSecondEnd] = useState(0)
  const [distance, setDistance] = useState(0)
  const [coin, setCoin] = useState(0)
  const [pace, setPace] = useState(0)
  const [paceEnabled, setPaceEnabled] = useState(false)
  const [arrayPosition, setArrayPosition] = useState([])
  const [position, setPosition] = useState(true)
  const [showMap, setShowMap] = useState(false)
  const [timeStart, setTimeStart] = useState(new Date().getTime() / 1000)

  const [axis, setAxis] = useState(0)
  const [vector, setVector] = useState(0)

  setUpdateIntervalForType(SensorTypes.accelerometer, 2000); // defaults to 100ms

  const watchID = React.useRef(false)

  const dispatch = useDispatch()

  const emailUser = useSelector(emailSelector)

  // Đếm giây
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pause) { // nếu người dùng không bấm nút dừng thì đi tiếp
        const time = (new Date().getTime() / 1000) - timeStart.toFixed(0)
        setSecond(time)
        if (paceEnabled) {

          if ((time - secondEnd < 5) && arrayPosition.length > 0) return setPaceEnabled(false)

          if (arrayPosition.length >= 1) {
            const kilometers = distanceBetween(arrayPosition[arrayPosition.length - 1], position)

            const velocity = calculateVelocity(kilometers, time + 1, secondEnd)
            setSecondEnd(time)

            setPaceEnabled(false)
            setSecondEnd(time) // lưu thời gian lúc người đó di chuyển được 20m
            setPace(velocity * 1.5)
            if (velocity * 1.5 < 10) { // nếu vận tốc lớn hơn 10 return (km sẽ không được cộng)
              if (Platform.OS == 'android') {
                setDistance(distance + kilometers + 0.01)
                setCoin(coin + kilometers + 0.01)
              }else {
                setDistance(distance + kilometers)
                setCoin(coin + kilometers)
              }
            }
          } else {
            // if arrayPosition.length === 1 gửi vị trí bắt đầu lên server
            dispatch(sendPositionRunStart({ longitudeStart: position.longitude, latitudeStart: position.latitude }))
          }
          // Thêm vị trí vào mảng
          addPosition()
        } else {
          if (time - secondEnd >= 20) {
            setPace(0)
          }
        }
      }
    }, 1000)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    // Cập nhập lại khi vị trí bị thay đổi
    watchID.current = Geolocation.watchPosition(
      (position) => {
        setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        setPaceEnabled(true)
      },
      (error) => {
        console.log('error: ', error)
      },
      { enableHighAccuracy: true, distanceFilter: 20, fastestInterval: 1000 }
    )

    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => {
      setAxis(x)
    })

    const backAction = () => {
      alertGoBack(walkEnd)
      return true
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => {
      backHandler.remove()
      Geolocation.clearWatch(watchID.current)
      subscription.unsubscribe()
    }
  }, [])

  const addPosition = () => {
    if (arrayPosition.length > 0) {
      // if tạo độ vị trí === tạo độ vị trí trước thì return
      if (arrayPosition[arrayPosition.length - 1].latitude === position.latitude &&
        arrayPosition[arrayPosition.length - 1].longitude === position.longitude) return
    }
    setArrayPosition([...arrayPosition, position])
    dispatch(onSendPositionUpdate(position))
    savePositionLocal(position)
  }

  const calculateVelocity = (s, second, secondEnd) => {
    const t = (second - secondEnd) / 3600
    if (t === 0) return 0
    return s / t
  }

  const distanceBetween = (coord, arrPosition) => {
    var from = turf.point([coord.longitude, coord.latitude])
    var to = turf.point([arrPosition.longitude, arrPosition.latitude])
    var options = { units: 'kilometers' }; // kilometers

    return turf.distance(from, to, options)
  }

  const savePositionLocal = async (position) => {
    const lastPositionUser = await AsyncStorage.getItem(contants.LAST_POSITION_USER)
    if (lastPositionUser) {
      const arrLastPositionUser = JSON.parse(lastPositionUser)
      const arrFilter = arrLastPositionUser.filter(item => item.email !== emailUser)
      arrFilter.push({
        latitude: position.latitude,
        longitude: position.longitude,
        ran: distance,
        email: emailUser
      })
      await AsyncStorage.setItem(contants.LAST_POSITION_USER, JSON.stringify(arrFilter))
    } else {
      let arrLastPositionUser = []
      arrLastPositionUser.push({
        latitude: position.latitude,
        longitude: position.longitude,
        email: emailUser
      })
      await AsyncStorage.setItem(contants.LAST_POSITION_USER, JSON.stringify(arrLastPositionUser))
    }
  }

  const walkEnd = async () => {
    const lastPosition = arrayPosition.length === 0 ? position : arrayPosition[arrayPosition.length - 1]

    await sendPositionEnd({
      longitudeEnd: lastPosition.longitude,
      latitudeEnd: lastPosition.latitude,
      ran: distance.toFixed(2)
    })
    goBack()
  }

  if (vector >= 0) {
    if (axis < 0) {
      setCoin(coin + 0.001)
      setVector(axis)
    }
  }else {
    if (axis > 0) {
      setCoin(coin + 0.001)
      setVector(axis)
    }
  }

  useKeepAwake();

  return (
    <Scroll
      flexGrow={1}
    >
      <SafeAreaView flex={1}>
        {!showMap &&
          <Position
            second={second}
            distance={distance}
            coin={coin}
            pace={pace}
            pause={pause}
            setPause={setPause}
            walkEnd={walkEnd}
            setShowMap={setShowMap}
          />
        }

        {/* {(arrayPosition.length > 0 && showMap) &&
          <Map
            arrPosition={arrayPosition}
            distance={distance}
            pace={pace}
            setShowMap={setShowMap}
          />
        } */}
      </SafeAreaView>
    </Scroll>
  )
}

export default StartRun

const styles = StyleSheet.create({})