import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Block from '../../common/Block'
import MyInput from '../../common/MyInput/MyInput'
import { theme } from '../../../theme'
import ButtonUser from '../Reuse/ButtonUser'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import { useDispatch } from 'react-redux'
import { onLogin } from '../../../redux/slices/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FormLogin = () => {
    const ditpatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [security, setSecurity] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleLogin = async () => {
        if (email.trim() === '' || password.trim() === '') return alert('Email or password is empty')
        setLoading(true)
        const result = unwrapResult(await ditpatch(onLogin({ email, password })))
        if (result.error) {
            setLoading(false)
            return alert('Unable to connect to server!, please try again')
        }
        if (result.status) {
            await AsyncStorage.setItem(contants.STORAGE_KEY, result.data.token)
            navigate(contants.screen.HOME)
        }
        !result.status && alert('Incorrect account or password!')
        setLoading(false)
    }

    useEffect(() => {
        return () => setLoading(false)
    }, [])


    return (
        <Block
            width={'80%'}
            alignCenter
            marginTop={10}
        >
            <MyInput
                value={email}
                setValue={setEmail}
                width={'100%'}
                height={40}
                hint={'Email'}
                borderWidth={1}
                borderColor={theme.colors.grayBorderInput}
                paddingLeft={40}
                paddingRight={10}
                marginBottom={10}
                iconOne={require('../../../assets/images/email.png')}
            />
            <MyInput
                onPress={() => setSecurity(!security)}
                value={password}
                setValue={setPassword}
                width={'100%'}
                height={40}
                hint={'Password'}
                borderWidth={1}
                borderColor={theme.colors.grayBorderInput}
                paddingHorizontal={10}
                paddingLeft={40}
                paddingRight={10}
                marginBottom={10}
                iconOne={require('../../../assets/images/password.png')}
                iconTwo={security ?
                    require('../../../assets/images/viewpassword.png') :
                    require('../../../assets/images/hidepassword.png')
                }
                security={security}
            />
            <ButtonUser
                onPress={handleLogin}
                text={'Login'}
                loading={loading}
            />

            <MyButton
                marginVertical={20}
                onPress={() => navigate(contants.screen.SIGNUP)}>
                <MyText>No account? Register now</MyText>
            </MyButton>

            <MyButton onPress={() => navigate(contants.screen.FORGOTPASSWORD)}>
                <MyText>Forgot password</MyText>
            </MyButton>
        </Block>
    )
}

export default FormLogin

const styles = StyleSheet.create({})