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
            alignCenter
            width={'100%'}
        >
            <Block
                row
                alignCenter
                marginTop={40}
                justifySpaceAround
                width={'100%'}
            >
                <Block alignCenter>
                    <MyText
                        color={theme.colors.white}
                        size={18}
                    >
                        {formatSecond(second)}
                    </MyText>
                    <Img url={require('../../../assets/images/oclock.png')} />
                </Block>

                <Block alignCenter marginRight={25}>
                    <Progress.Circle
                        style={{ transform: [{ rotate: '-70deg' }] }}
                        size={100}
                        thickness={7}
                        animated={true}
                        progress={pace / 100}
                        color={pace >= 10 ? 'red' : theme.colors.aqua}
                        unfilledColor={theme.colors.white}
                    />
                    <Block absolute top={30} alignCenter>
                        <MyText
                            style={{ color: pace >= 10 ? 'red' : 'white' }}
                            size={17} color={theme.colors.white}
                        >
                            {pace.toFixed(1)}
                        </MyText>
                        <MyText size={17} color={theme.colors.white}>Km/h</MyText>
                    </Block>
                </Block>

                <Block alignCenter>
                    <MyText color={theme.colors.white} size={20}>0</MyText>
                    <Img url={require('../../../assets/images/bicycle.png')} />
                </Block>
            </Block>

            <Block alignCenter marginTop={20}>
                <MyText
                    color={theme.colors.white}
                    size={50}
                    fontWeightBold
                >
                    {distance.toFixed(2)}
                </MyText>
                <MyText
                    color={'#9F9F9F'}
                    size={20}
                >
                    Kilometers
                </MyText>

                <Block alignCenter row marginTop={20}>
                    <Img
                        height={45}
                        width={45}
                        marginRight={10}
                        url={require('../../../assets/images/coin.png')}
                    />
                    <MyText color={'yellow'} size={35} fontWeightBold>
                        + {distance.toFixed(2)}
                    </MyText>
                </Block>
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