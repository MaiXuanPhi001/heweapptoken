import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../../common/MyText'

const TextFormError = ({ text }) => {
    return (
        <MyText
            alignSelf={'flex-start'}
            color='red'
            marginBottom={10}
        >
            {text}
        </MyText>
    )
}

export default TextFormError

const styles = StyleSheet.create({})