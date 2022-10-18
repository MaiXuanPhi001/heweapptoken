import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';
import Monitor from './Monitor';
import { distance } from '@turf/turf';
import * as turf from '@turf/turf'
import moment from 'moment';
import Pin from './Pin';

const distanceBetween = (origin, destination) => {
    var from = turf.point([origin.coords.longitude, origin.coords.latitude]);
    var to = turf.point([destination.coords.longitude, destination.coords.latitude]);
    var options = { units: 'meters' };

    return turf.distance(from, to, options);
}

const computePace = (detal, previousPosition, position) => {
    console.log('previousPosition: ' + JSON.stringify(previousPosition) + ' || ' + JSON.stringify(position))
    const time = (position.timestamp - previousPosition.timestamp)
    const pace = time / detal
    return pace
}

const Run2 = (props) => {
    const { latitude, longitude } = props
    const [positions, setPositions] = useState([])
    const [render, setRender] = useState(false)
    const [distance, setDistance] = useState(0)
    const [pace, setPace] = useState(0)

    useEffect(() => {
        // cập nhật tạo độ
        const result = changePosition()
        return () => result.remove()
    }, [])

    const changePosition = async () => {
        const options = { enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 1 }
        return await Location.watchPositionAsync(options, onPositionChange)
    }

    const onPositionChange = (position) => {
        const lastPosition = positions.length === 0 ? { coords: { latitude, longitude }, timestamp: position.timestamp } : positions[positions.length - 1]
        const detal = distanceBetween(lastPosition, position)
        const distan = distance + detal
        const pace = detal > 0 ? computePace(detal, lastPosition, position) : 0
        setPace(pace)
        setDistance(distan)
        const arr = positions
        arr.push(position)
        setPositions(arr)
        setRender(!render)
    }

    const currentPosititon = positions.length === 0 ? { coords: { latitude, longitude } } : positions[positions.length - 1]

    return (
        <View style={styles.container}>
            <Monitor distance={distance} pace={pace} />
            <MapView
                provider={'google'}
                style={styles.map}
                // annotations={markers}
                initialRegion={{  // chuyển đến vị trí marker
                    latitude,
                    longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={currentPosititon.coords}
                    pinColor={'red'}
                    title={"title"}
                    description={"description"}
                >
                    <Pin />
                </Marker>
                {/* <Polyline coordinates={positions.map(position => position.coords)} strokeWidth={10} strokeColor='#f2b659' /> */}
                <Polyline
                    coordinates={positions.map(position => position.coords)}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                />
                {/* <Polyline
                    coordinates={[
                        { latitude: 37.8025259, longitude: -122.4351431 },
                        { latitude: 37.7896386, longitude: -122.421646 },
                        { latitude: 37.7665248, longitude: -122.4161628 },
                        { latitude: 37.7734153, longitude: -122.4577787 },
                        { latitude: 37.7948605, longitude: -122.4596065 },
                        { latitude: 37.8025259, longitude: -122.4351431 }
                    ]}
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                /> */}
            </MapView>
        </View>
    )
}

export default Run2

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
})