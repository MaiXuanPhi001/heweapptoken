import { Alert, BackHandler, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service'
import * as turf from '@turf/turf'
import Position from './Position'
import Scroll from '../../common/Scroll'
import Map from './Map'
import { useDispatch, useSelector } from 'react-redux'
import { onSendPositionEnd, sendPositionRunStart } from '../../../redux/slices/waklSlice'
import { sendPositionEnd, sendPositionUpdate } from '../../../api/walkApi'
import { emailSelector } from '../../../redux/selectors/userSelector'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { contants } from '../../../utils/contants'
import { alertGoBack } from '../../../method/alert'
import { goBack } from '../../navigations/navigationRef'

const StartRun = () => {
  const [pause, setPause] = useState(false)
  const [second, setSecond] = useState(0)
  const [secondEnd, setSecondEnd] = useState(0)
  const [distance, setDistance] = useState(0)
  const [pace, setPace] = useState(0)
  const [paceEnabled, setPaceEnabled] = useState(false)
  const [arrayPosition, setArrayPosition] = useState([])
  const [position, setPosition] = useState(true)

  const dispatch = useDispatch()

  const emailUser = useSelector(emailSelector)

  // Đếm giây
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pause) { // nếu người dùng không bấm nút dừng thì đi tiếp
        setSecond(second + 1)
        if (paceEnabled) { // nếu paceEnabled = true có nghĩa nguời dùng đã đi dược 10m so vs khoảng cách trước đó
          if (arrayPosition.length >= 1) {
            const kilometers = distanceBetween(arrayPosition[arrayPosition.length - 1], position)
            const velocity = calculateVelocity(kilometers, second + 1, secondEnd)
            setPaceEnabled(false)
            addPosition()
            setSecondEnd(second + 1) // lưu thời gian lúc người đó di chuyển đuọcư 10m
            if (velocity >= 10) return // nếu vận tốc lớn hơn 10 return 
            setDistance(distance + kilometers) // cộng dồn khoảng cách 
            setPace(velocity)
          } else {
            dispatch(sendPositionRunStart({ longitudeStart: position.longitude, latitudeStart: position.latitude }))
          }
          // Thêm vị trí vào mảng
          addPosition()
        } else {
          if (second - secondEnd >= 20) setPace(0)
        }
      }
    }, 1000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    Geolocation.watchPosition(
      (position) => {
        setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        setPaceEnabled(true)
      },
      (error) => {
        console.log('error: ', error)
      },
      { enableHighAccuracy: true, distanceFilter: 10 }
    )

    Geolocation.getCurrentPosition(
      (position) => {
        setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        setPaceEnabled(true)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )

    const backAction = () => {
      alertGoBack(walkEnd)
      return true
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => backHandler.remove()
  }, [])

  const addPosition = () => {
    if (arrayPosition.length > 0) {
      // if tạo độ vị trí === tạo độ vị trí trước thì return
      if (arrayPosition[arrayPosition.length - 1].latitude === position.latitude &&
        arrayPosition[arrayPosition.length - 1].longitude === position.longitude) return
    }
    setArrayPosition([...arrayPosition, position])
    sendPositionUpdate(position)
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

  return (
    <Scroll
      flexGrow={1}
      isPaddingAdnroid
    >
      <SafeAreaView>
        <Position
          second={second}
          distance={distance}
          pace={pace}
          pause={pause}
          setPause={setPause}
          walkEnd={walkEnd}
        />
        {arrayPosition.length > 0 &&
          <Map arrPosition={arrayPosition} />
        }
      </SafeAreaView>
    </Scroll>
  )
}

export default StartRun

const styles = StyleSheet.create({})