import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Block from '../../common/Block'
import MyInput from '../../common/MyInput/MyInput'
import { theme } from '../../../theme'
import { contants } from '../../../utils/contants'
import ButtonUser from '../Reuse/ButtonUser'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'
import { navigate } from '../../navigations/navigationRef'
import VerifyCodeEmail from './VerifyCodeEmail'
import TextFormError from '../Reuse/TextFormError'
import { forgotPassword } from '../../../api/userApi'

const FormForgot = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [security, setSecurity] = useState(true)
    const [loading, setLoading] = useState(false)
    const [checkForm, setCheckForm] = useState(false)

    const handleForgotPassword = async () => {
        setCheckForm(true)
        if (!handleCheckForm()) return
        if (password.trim() !== confirmPassword.trim()) return alert('Confirm password incorrect')
        setLoading(true)
        const res = await forgotPassword({ email, codeEmail: Number(code), newPassword: password })
        if (res.status) {
            alert(res.message)
            setCheckForm(false)
            clearForm()
        } else {
            alert(res.message)
        }
        setLoading(false)
    }

    const handleCheckForm = () => {
        if (email.trim() === '' || code.trim() === '' || password.trim() === '' ||
            confirmPassword.trim() === '') {
            return false
        }
        return true
    }

    const clearForm = () => {
        setEmail('')
        setCode('')
        setPassword('')
        setConfirmPassword('')
    }


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
            {(checkForm && email.trim() === '') && <TextFormError text={'Email is empty'} />}

            <VerifyCodeEmail
                code={code}
                setCode={setCode}
                email={email}
            />
            {(checkForm && code.trim() === '') && <TextFormError text={'Code is empty'} />}

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
            {(checkForm && password.trim() === '') && <TextFormError text={'Password is empty'} />}

            <MyInput
                onPress={() => setSecurity(!security)}
                value={confirmPassword}
                setValue={setConfirmPassword}
                width={'100%'}
                height={40}
                hint={'Confirm new password'}
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
            {(checkForm && confirmPassword.trim() === '') && <TextFormError text={'Confirm password is empty'} />}

            <ButtonUser
                onPress={handleForgotPassword}
                text={'Submit'} loading={loading}
            />

            <MyButton
                marginVertical={20}
                onPress={() => navigate(contants.screen.LOGIN)}>
                <MyText>Login now</MyText>
            </MyButton>
        </Block>
    )
}

export default FormForgot

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: theme.colors.grayBorderInput,
        borderWidth: 1,
        paddingLeft: 40
    },
    imgVerifi: {
        position: 'absolute',
        top: 8,
        left: 8
    }
})