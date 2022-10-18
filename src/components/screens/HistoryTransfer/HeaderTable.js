import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'

const HeaderTable = ({ text, width }) => {
    return (
        <Block
            height={50}
            width={width}
            margin={1}
            justifyCenter
            paddingHorizontal={5}
            backgroundColor={theme.colors.lightGreen2}
        >
            <MyText size={12} color={'white'}>{text}</MyText>
        </Block>
    )
}

export default HeaderTable

const styles = StyleSheet.create({})