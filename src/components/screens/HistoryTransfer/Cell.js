import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../../theme'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const Cell = ({ width, text, index }) => {
    return (
        <Block
            width={width}
            margin={1}
            justifyCenter
            backgroundColor={index % 2 === 0 ? '#eeeee4' : '#bebeb6'}
        >
            <MyText
                size={12}
                color={'black'}
                margin={5}
            >
                {text}
            </MyText>
        </Block>
    )
}

export default Cell

const styles = StyleSheet.create({})