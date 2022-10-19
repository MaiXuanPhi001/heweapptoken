import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { height } from '../../../utils/responsive'
import Pin from './Pin'
import React from 'react'

const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 10.775703,
                longitude: 106.600975,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 10.775703,
                    longitude: 106.600975,
                }}
                pinColor={'red'}
                title={"title"}
                description={"description"}
            >
                <Pin />
            </Marker>
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: 500
    }
})