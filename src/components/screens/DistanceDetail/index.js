// import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { distanceDetail } from '../../../api/walkApi'
// import { theme } from '../../../theme'
// import LottieAnimation from '../Reuse/LottieAnimation'
// import Block from '../../common/Block'
// import Map from './Map'
// import { useSelector } from 'react-redux'
// import { loadingSelector, runDetailSelector } from '../../../redux/selectors/walkSelector'
// import { navigate } from '../../navigations/navigationRef'
// import { contants } from '../../../utils/contants'

// const DistanceDetail = () => {
//   const data = useSelector(runDetailSelector)
//   const loading = useSelector(loadingSelector)

//   useEffect(() => {
//     const backAction = () => {
//       navigate(contants.screen.TOTAL_DISTANCE)
//       return true
//     }

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

//     return () => {
//       backHandler.remove()
//     }
//   }, [])

//   return (
//     <Block flex={1}>
//       {loading ?
//         <Block
//           flex={1}
//           backgroundColor={theme.colors.lightGreen2}
//           alignCenter
//           justifyCenter
//         >
//           <LottieAnimation url={require('../../../assets/lotties/loading.json')} />
//         </Block>
//         :
//         <Map data={data} />
//       }
//     </Block>
//   )
// }

// export default DistanceDetail

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DistanceDetail = () => {
  return (
    <View>
      <Text>DistanceDetail</Text>
    </View>
  )
}

export default DistanceDetail

const styles = StyleSheet.create({})