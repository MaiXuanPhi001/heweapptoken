// import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import * as Location from 'expo-location';
// import Run2 from './Run2';

// const Run = () => {
//   const [location, setLocation] = useState({ ready: false })

//   useEffect(() => {
//     getLocation()
//   }, [])

//   const getLocation = async () => {
//     const { status } = await Location.requestForegroundPermissionsAsync()
//     if (status !== 'granted') {
//       alert('Could not get your location')
//       return
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     setLocation({ready: true, latitude: location.coords.latitude, longitude: location.coords.longitude})
//   }

//   if (!location.ready) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size={'large'} color={'white'} />
//       </View>
//     )
//   }

//   return (
//     <Run2
//       distance={200}
//       latitude={location.latitude}
//       longitude={location.longitude}
//     />
//   )
// }

// export default Run

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Run = () => {
  return (
    <View>
      <Text>Run</Text>
    </View>
  )
}

export default Run

const styles = StyleSheet.create({})