import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import LottieAnimation from './LottieAnimation'
import MyText from '../../common/MyText'

const HeaderUser = ({ text }) => {
    return (
        <Block alignCenter>
            <LottieAnimation
                size={'80%'}
                url={require('../../../assets/lotties/walk.json')}
            />
            <MyText size={20} fontWeightBold>{text}</MyText>
        </Block>
    )
}

export default HeaderUser

const styles = StyleSheet.create({})