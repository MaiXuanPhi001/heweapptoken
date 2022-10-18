import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { center } from '@turf/turf'

const Pin = () => {
    return (
        <View style={styles.outerPin}>
            <View style={styles.pin}>
                <View style={styles.innerPin} />
            </View>
        </View>
    )
}

export default Pin

const styles = StyleSheet.create({
    outerPin: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'rgba(242, 182, 89, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pin: {
        width: 20,
        height: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    innerPin: {
        width: 10,
        height: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1D957',
    }
})