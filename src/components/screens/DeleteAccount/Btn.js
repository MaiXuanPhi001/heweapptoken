import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'


const Btn = ({ text, onPress }) => {
    return (
        <MyButton
            onPress={onPress}
            marginHorizontal={10}
            backgroundColor={theme.colors.lightGreen2}
            width={100}
            height={40}
            alignCenter
            justifyCenter
            radius={10}
        >
            <MyText color={theme.colors.white} fontWeightBold>
                {text}
            </MyText>
        </MyButton>
    )
}

export default Btn

const styles = StyleSheet.create({})