// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import MapView, { Marker, Polyline } from 'react-native-maps'
// import { height } from '../../../utils/responsive'
// import Pin from './Pin'
// import React from 'react'
// import { theme } from '../../../theme'
// import Block from '../../common/Block'
// import MyText from '../../common/MyText'
// import DistanceMap from './DistanceMap'
// import Img from '../../common/Img'

// const Map = ({ arrPosition, distance, pace, setShowMap }) => {
//     return (
//         <Block flex={1}>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: arrPosition[arrPosition.length - 1].latitude,
//                     longitude: arrPosition[arrPosition.length - 1].longitude,
//                     latitudeDelta: 0.01,
//                     longitudeDelta: 0.01,
//                 }}
//             >

//                 <Marker
//                     style={styles.market}
//                     coordinate={arrPosition[arrPosition.length - 1]}
//                     title={'Current position'}
//                     description={'Your current location'}
//                 >
//                     <Pin />
//                 </Marker>
//             </MapView>

//             <Block width={'100%'} alignCenter absolute top={20}>
//                 <Block
//                     width={'90%'}
//                     height={90}
//                     row
//                     justifySpaceAround
//                     alignCenter
//                     backgroundColor={'white'}
//                     borderWidth={0.5}
//                     radius={10}
//                 >
//                     <DistanceMap value={distance.toFixed(2)} km={'Km'} />
//                     <DistanceMap value={pace.toFixed(2)} km={'Km/h'} />
//                 </Block>
//             </Block>
//             <TouchableOpacity 
//                 onPress={() => setShowMap(false)}
//                 style={styles.buttonCancel}
//             >
//                 <Img
//                     width={45}
//                     height={45}
//                     url={require('../../../assets/images/cancel.png')}
//                 />
//             </TouchableOpacity>
//         </Block>
//     )
// }

// export default Map

// const styles = StyleSheet.create({
//     buttonCancel: {
//         position: 'absolute',
//         alignSelf: 'center',
//         bottom: 20
//     },
//     map: {
//         flex: 1
//     },
//     market: {
//         width: 120,
//         height: 120
//     }
// })