import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../../common/MyButton'
import LottieAnimation from './LottieAnimation'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'

const ButtonUser = ({
    onPress,
    text,
    height = 40,
    width = '100%',
    loading,
    marginTop = 20
}) => {
    return (
        <MyButton
            onPress={onPress}
            backgroundColor={theme.colors.lightGreen2}
            height={height}
            width={width}
            alignCenter
            justifyCenter
            marginTop={marginTop}
            disabled={loading}
        >
            {loading ?
                <LottieAnimation url={require('../../../assets/lotties/loading.json')} /> :
                <MyText fontWeightBold color={theme.colors.white}>
                    {text}
                </MyText>}
        </MyButton>
    )
}

export default ButtonUser

const styles = StyleSheet.create({})