import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import * as Progress from 'react-native-progress';
import { theme } from '../../../theme';
import Img from '../../common/Img';
import moment from 'moment';

const SpeedPosition = ({ second, distance, pace }) => {

    const formatSecond = second => moment.utc(moment.duration(second, 's').asMilliseconds()).format('H:mm:ss')

    return (
        <Block
            row
            alignCenter
            paddingTop={20}
            justifySpaceAround
        >
            <Block alignCenter>
                <MyText
                    color={theme.colors.white}
                    size={15}
                >
                    {formatSecond(second)}
                </MyText>
                <Img url={require('../../../assets/images/oclock.png')} />
            </Block>
            <Block alignCenter>
                <Progress.Circle
                    style={{ transform: [{ rotate: '-70deg' }] }}
                    size={100}
                    thickness={7}
                    animated={true}
                    progress={pace / 100}
                    color={theme.colors.aqua}
                    unfilledColor={theme.colors.white}
                />
                <Block absolute top={30} alignCenter>
                    <MyText size={17} color={theme.colors.white}>{pace.toFixed(1)}</MyText>
                    <MyText size={17} color={theme.colors.white}>Km/h</MyText>
                </Block>
            </Block>
            <Block alignCenter>
                <MyText
                    color={theme.colors.white}
                    size={20}
                >
                    {distance.toFixed(3)}
                </MyText>
                <MyText
                    color={theme.colors.white}
                    size={20}
                    fontWeightBold
                >
                    KM
                </MyText>
            </Block>
        </Block>
    )
}

export default SpeedPosition

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        top: 40
    }
})