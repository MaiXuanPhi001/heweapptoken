import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import Img from '../../common/Img'
import MyText from '../../common/MyText'

const Warn = ({ text }) => {
    return (
        <Block
            row
            alignCenter
            marginVertical={5}
            width={'95%'}
        >
            <Img
                url={require('../../../assets/images/warn.png')}
                width={20}
                height={20}
                marginRight={10}
            />
            <Block width={'95%'}>
                <MyText size={12}>{text}</MyText>
            </Block>
        </Block>
    )
}

export default Warn

const styles = StyleSheet.create({})