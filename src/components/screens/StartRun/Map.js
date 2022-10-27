import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { height } from '../../../utils/responsive'
import Pin from './Pin'
import React from 'react'
import { theme } from '../../../theme'

const Map = ({ arrPosition }) => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: arrPosition[arrPosition.length - 1].latitude,
                longitude: arrPosition[arrPosition.length - 1].longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                style={styles.market}
                coordinate={arrPosition[arrPosition.length - 1]}
                title={'Current position'}
                description={'Your current location'}
            >
                <Pin />
            </Marker>

            {/* <Polyline
                coordinates={arrPosition.map(position => position)}
                strokeColor={theme.colors.orange2}
                strokeColors={[
                    theme.colors.orange2
                ]}
                strokeWidth={6}
            /> */}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: '70%'
    },
    market: {
        width: 120,
        height: 120
    }
})