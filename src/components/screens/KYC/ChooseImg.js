import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import MyButton from '../../common/MyButton'

const ChooseImg = ({ text, onPress, uri }) => {
    return (
        <Block width={'100%'}>
            <MyText fontWeightBold size={15}>{text}</MyText>
            <MyButton
                onPress={onPress}
                width={'100%'}
                alignCenter
            >
                {uri ?
                    <Img
                        width={'50%'}
                        height={120}
                        resizeMode={'contain'}
                        url={{ uri: uri }}
                    /> :
                    <Img url={require('../../../assets/images/picture.png')} />
                }
            </MyButton>
        </Block>
    )
}

export default ChooseImg

const styles = StyleSheet.create({})