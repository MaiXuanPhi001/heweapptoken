import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'
import HeaderPosition from './HeaderPosition'
import SpeedPosition from './SpeedPosition'
import Pause from './Pause'

const Position = ({ pause, setPause, second, distance, pace, coin, arrPosition }) => {
    return (
        <Block
            backgroundColor={theme.colors.lightGreen}
            paddingHorizontal={10}
        >
            <HeaderPosition arrPosition={arrPosition} distance={distance} />
            <SpeedPosition
                second={second}
                distance={distance}
                pace={pace}
            />
            <Pause
                pause={pause}
                setPause={setPause}
                coin={coin}
            />
        </Block>
    )
}

export default Position

const styles = StyleSheet.create({})