import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import LottieAnimation from './LottieAnimation'

const HeaderProfile = ({ soure, text }) => {
    return (
        <Block alignCenter>
            <LottieAnimation
                url={require('../../../assets/lotties/butter.json')}
                size={'80%'}
            />
            <MyText fontWeightBold size={18}>{text}</MyText>
        </Block>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({})