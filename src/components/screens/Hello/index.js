import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Block from '../../common/Block'
import { contants } from '../../../utils/contants';
import LottieAnimation from '../Reuse/LottieAnimation';
import MyText from '../../common/MyText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginRemember } from '../../../redux/slices/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const Hello = ({ navigation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(async () => {
            const token = await AsyncStorage.getItem(contants.STORAGE_KEY)
            if (token) {
                await dispatch(loginRemember())
            }
            navigation.replace(contants.screen.APPNAVIGATION)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Block
            flex={1}
            isPaddingAdnroid
            justifyCenter
            alignCenter
        >
            <LottieAnimation
                size={200}
                url={require('../../../assets/lotties/walk.json')}
            />
            <MyText fontWeightBold>{'Health & Wealth'}</MyText>
        </Block>
    )
}

export default Hello

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})