import { StyleSheet, Text, View, useWindowDimensions, ImageBackground } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'
import HeaderPosition from './HeaderPosition'
import SpeedPosition from './SpeedPosition'
import Pause from './Pause'

const Position = ({ pause, setPause, second, distance, pace, arrPosition, walkEnd, coin }) => {
    return (
        <ImageBackground
            source={require('../../../assets/images/backgroupmobile.png')}
        >
            <HeaderPosition
                arrPosition={arrPosition}
                distance={distance}
                walkEnd={walkEnd}
            />
            <SpeedPosition
                second={second}
                distance={distance}
                pace={pace}
            />
            <Pause
                pause={pause}
                setPause={setPause}
                distance={distance}
                walkEnd={walkEnd}
                coin={coin}
            />
        </ImageBackground>
    )
}

export default Position

const styles = StyleSheet.create({})