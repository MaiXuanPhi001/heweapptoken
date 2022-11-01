import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'
import { alertGoBack } from '../../../method/alert'

const Pause = ({ pause, setPause, distance, walkEnd, coin }) => {

    const onBack = () => {
        alertGoBack(walkEnd)
    }

    return (
        <Block
            row
            justifySpaceAround
            alignCenter
            marginVertical={20}
        >
            <Block alignCenter>
                <MyText color={theme.colors.white} size={20}>0</MyText>
                <Img url={require('../../../assets/images/bicycle.png')} />
            </Block>
            <Block row alignCenter>
                {!pause ?
                    <MyButton onPress={() => setPause(true)}>
                        <Img
                            width={50}
                            height={50}
                            resizeMode={'contain'}
                            url={require('../../../assets/images/controllers/pause-button.png')}
                        />
                    </MyButton>
                    :
                    <>
                        <MyButton onPress={onBack}>
                            <Img
                                width={50}
                                height={50}
                                resizeMode={'contain'}
                                marginRight={10}
                                url={require('../../../assets/images/controllers/stop-button.png')}
                            />
                        </MyButton>
                        <MyButton onPress={() => setPause(false)}>
                            <Img
                                width={50}
                                height={50}
                                resizeMode={'contain'}
                                url={require('../../../assets/images/controllers/play-button.png')}
                                marginLeft={10}
                            />
                        </MyButton>
                    </>
                }
            </Block>
            <Block alignCenter>
                <MyText color={theme.colors.white} size={20}>+ {coin.toFixed(2)}</MyText>
                <Img
                    height={35}
                    width={35}
                    url={require('../../../assets/images/coin.png')}
                />
            </Block>
        </Block>
    )
}

export default Pause

const styles = StyleSheet.create({})