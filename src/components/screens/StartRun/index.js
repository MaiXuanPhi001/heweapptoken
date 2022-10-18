// import { SafeAreaView, ScrollView, StyleSheet, Text, View, BackHandler, Alert } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import * as Location from 'expo-location'
// import Position from './Position'
// import MapView, { Marker, Polyline } from 'react-native-maps'
// import * as turf from '@turf/turf'
// import Scroll from '../../common/Scroll'
// import { latiudeStartSelector, longtiudeStartSelector } from '../../../redux/selectors/walkSelector'
// import { useSelector } from 'react-redux'
// import { height } from '../../../utils/responsive'
// import Pin from './Pin'
// import { theme } from '../../../theme'
// import { goBack } from '../../navigations/navigationRef'
// import { sendPositionEnd, sendPositionUpdate } from '../../../api/walkApi'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { contants } from '../../../utils/contants'
// import { emailSelector } from '../../../redux/selectors/userSelector'

// const distanceBetween = (origin, destination) => {
//   var from = turf.point([origin.longitude, origin.latitude])
//   var to = turf.point([destination.longitude, destination.latitude])
//   var options = { units: 'kilometers' }; // kilometers

//   return turf.distance(from, to, options)
// }

// const StartRun = () => {
//   const [pause, setPause] = useState(false)
//   const [distanceTwo, setDistanceTwo] = useState(0)
//   const [arrPosition, setArrPosition] = useState([])
//   const [second, setSecond] = useState(0)
//   const [distance, setDistance] = useState(0)
//   const [timeDistance, setTimeDistance] = useState(0)
//   const [timeDistanceEnabled, setTimeDistanceEnabled] = useState(true)
//   const [pace, setPace] = useState(0)
//   const [coin, setCoin] = useState(0)
//   const [isShowModalExist, setShowModalExist] = useState(false)

//   const latitudeStart = useSelector(latiudeStartSelector)
//   const longitudeStart = useSelector(longtiudeStartSelector)
//   const emailUser = useSelector(emailSelector)

//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert("Hold on!", "Are you sure you want to go back?", [
//         {
//           text: "Cancel",
//           onPress: () => null,
//           style: "cancel"
//         },
//         { text: "YES", onPress: walkEnd }
//       ])
//       return true
//     }

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

//     // cập nhật tọa độ
//     const result = changePosition()
//     return () => {
//       result._3.remove()
//       backHandler.remove()
//     }
//   }, [])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!pause) {
//         setSecond(second + 1)
//         setDistance(distanceTwo)
//         setCoin(distanceTwo * 1000 / 100)
//         if (timeDistanceEnabled === false) {
//           setTimeDistance(second)
//           setTimeDistanceEnabled(true)
//           if (arrPosition.length > 1) {
//             calculateVelocity()
//           }
//         }
//       }
//     }, 1000)
//     return () => clearTimeout(timer)
//   })


//   const walkEnd = async () => {
//     const lastPosition = arrPosition.length === 0 ?
//       { longitude: longitudeStart, latitude: latitudeStart } :
//       arrPosition[arrPosition.length - 1]

//     await sendPositionEnd({
//       longitudeEnd: lastPosition.longitude,
//       latitudeEnd: lastPosition.latitude,
//       ran: distance.toFixed(2)
//     })
//     goBack()
//   }

//   const changePosition = async () => {
//     const options = { enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 1 }
//     return await Location.watchPositionAsync(options, onPositionChange)
//   }

//   const onPositionChange = async (position) => {
//     const arr = arrPosition
//     arr.push({ latitude: position.coords.latitude, longitude: position.coords.longitude })
//     // update position api
//     await sendPositionUpdate({ latitude: position.coords.latitude, longitude: position.coords.longitude })

//     savePositionLocal(position)

//     if (arrPosition.length > 1) {
//       if (distanceBetween(arr[arr.length - 2], arr[arr.length - 1]) > 0.005) { // 0.011
//         setDistanceTwo(preve => preve += distanceBetween(arr[arr.length - 2], arr[arr.length - 1]))
//       }
//       setTimeDistanceEnabled(false)
//     }
//     setArrPosition(arr)
//   }

//   const savePositionLocal = async (position) => {
//     const lastPositionUser = await AsyncStorage.getItem(contants.LAST_POSITION_USER)
//     if (lastPositionUser) {
//       const arrLastPositionUser = JSON.parse(lastPositionUser)
//       const arrFilter = arrLastPositionUser.filter(item => item.email !== emailUser)
//       arrFilter.push({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         ran: distance,
//         email: emailUser
//       })
//       await AsyncStorage.setItem(contants.LAST_POSITION_USER, JSON.stringify(arrFilter))
//     } else {
//       let arrLastPositionUser = []
//       arrLastPositionUser.push({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         email: emailUser
//       })
//       await AsyncStorage.setItem(contants.LAST_POSITION_USER, JSON.stringify(arrLastPositionUser))
//     }
//   }

//   const calculateVelocity = () => {
//     const s = distanceBetween(arrPosition[arrPosition.length - 2], arrPosition[arrPosition.length - 1])
//     const t = (second - timeDistance) / 3600
//     if (t === 0) return 0
//     setPace(s / t)
//   }

//   const lastPosition = arrPosition.length === 0 ? { latitude: latitudeStart, longitude: longitudeStart } : arrPosition[arrPosition.length - 1]

//   return (
//     <Scroll
//       flexGrow={1}
//       isPaddingAdnroid
//     >
//       <SafeAreaView>
//         <Position
//           pause={pause}
//           setPause={setPause}
//           second={second}
//           distance={distance}
//           pace={pace}
//           coin={coin}
//           arrPosition={arrPosition}
//         />
//         <MapView
//           provider={'google'}
//           style={styles.map}
//           initialRegion={{  // chuyển đến vị trí marker
//             latitude: lastPosition.latitude,
//             longitude: lastPosition.longitude,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01,
//           }}>
//           <Marker
//             coordinate={lastPosition}
//             pinColor={'red'}
//             title={"title"}
//             description={"description"}
//           >
//             <Pin />
//           </Marker>
//           <Polyline
//             coordinates={arrPosition.map(position => position)}
//             strokeColor={theme.colors.orange2}
//             strokeColors={[
//               theme.colors.orange2
//             ]}
//             strokeWidth={6}
//           />
//         </MapView>
//       </SafeAreaView>
//     </Scroll>
//   )
// }

// export default StartRun

// const styles = StyleSheet.create({
//   map: {
//     height: height / 2
//   }
// })

import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service'
import * as turf from '@turf/turf'
import Position from './Position'
import Scroll from '../../common/Scroll'

const StartRun = () => {
  const [pause, setPause] = useState(false)
  const [second, setSecond] = useState(0)
  const [secondTwo, setSecondTwo] = useState(0)
  const [arrayPosition, setArrayPosition] = useState([])

  // Đếm giây
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pause) {
        setSecond(second + 1)
      }
    }, 1000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pause) {
        // if second two >= 5 get lại user position
        if (secondTwo >= 5) {
          console.log('abc')
          getLocation()
          return setSecondTwo(0)
        }
        setSecondTwo(secondTwo + 1)
      }
    }, 1000)
    return () => clearTimeout(timer)
  })

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        if (arrayPosition.length > 0) {
          if (distanceBetween(arrayPosition[arrayPosition.length - 1], position.coords) >= 0.011) {
            setArrayPosition([...arrayPosition, { latitude: position.coords.latitude, longitude: position.coords.longitude }])
          }
        } else {
          setArrayPosition([...arrayPosition, { latitude: position.coords.latitude, longitude: position.coords.longitude }])
        }
      },
      (error) => {
        console.log('error: ', error)
      },
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
    )
  }

  const distanceBetween = (coord, arrPosition) => {
    var from = turf.point([coord.longitude, coord.latitude])
    var to = turf.point([arrPosition.longitude, arrPosition.latitude])
    var options = { units: 'kilometers' }; // kilometers

    return turf.distance(from, to, options)
  }

  return (
    <Scroll
      flexGrow={1}
      isPaddingAdnroid
    >
      <SafeAreaView>
        <Position
          second={second}
        />
      </SafeAreaView>
    </Scroll>
  )
}

export default StartRun

const styles = StyleSheet.create({})