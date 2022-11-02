import { StyleSheet, Text, View, useWindowDimensions, ImageBackground } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'
import HeaderPosition from './HeaderPosition'
import SpeedPosition from './SpeedPosition'
import Pause from './Pause'

const Position = ({ pause, setPause, second, distance, pace, walkEnd, setShowMap }) => {
    return (
        <ImageBackground
            style={styles.imgBg}
            source={require('../../../assets/images/bg-start-run.png')}
        >
            <HeaderPosition walkEnd={walkEnd} />
            <SpeedPosition
                second={second}
                distance={distance}
                pace={pace}
            />
            <Pause
                pause={pause}
                setPause={setPause}
                walkEnd={walkEnd}
                setShowMap={setShowMap}
            />
        </ImageBackground>
    )
}

export default Position

const styles = StyleSheet.create({
    imgBg: {
        height: '100%',
        alignItems: 'center'
    }
})