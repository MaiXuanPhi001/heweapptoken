import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import MyInput from '../../common/MyInput/MyInput'
import { theme } from '../../../theme'
import ButtonUser from '../Reuse/ButtonUser'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import TextFormError from '../Reuse/TextFormError'
import { sendMailSignUp, signUp } from '../../../api/userApi'
import VerifyCodeEmail from './VerifyCodeEmail'

const FormSignUp = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [referral, setReferral] = useState('hwf20022')
    const [gender, setGender] = useState(1)
    const [security, setSecurity] = useState(true)
    const [loading, setLoading] = useState(false)
    const [checkForm, setCheckForm] = useState(false)

    const handleSignUp = async () => {
        setCheckForm(true)
        if (!handleCheckForm()) return
        if (password.trim() !== confirmPassword.trim()) return alert('Confirm password incorrect')
        setLoading(true)
        const res = await signUp({ email, password, gender, codeEmail: code, referral })
        if (res.status) {
            alert('Register success')
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

    useEffect(() => {
        return () => {
            setCheckForm(false)
            setLoading(false)
        }
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
            {(checkForm && email.trim() === '') && <TextFormError text={'Email is empty'} />}

            <VerifyCodeEmail
                code={code}
                setCode={setCode}
                email={email}
            />
            {(checkForm && code.trim() === '') && <TextFormError text={'Code verification is empty'} />}

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
                hint={'Confirm password'}
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

            <MyInput
                value={referral}
                setValue={setReferral}
                width={'100%'}
                height={40}
                hint={'referral'}
                borderWidth={1}
                borderColor={theme.colors.grayBorderInput}
                paddingHorizontal={10}
                paddingLeft={40}
                paddingRight={10}
                marginBottom={10}
                iconOne={require('../../../assets/images/password.png')}
            />

            <Block row width={'100%'} alignCenter>
                {/* <MyText marginRight={10}>Gender: </MyText>
                <Block row marginRight={10} alignCenter>
                    <RadioButton
                        value={1}
                        status={gender === 1 ? 'checked' : 'unchecked'}
                        onPress={() => setGender(1)}
                    />
                    <MyText>Male</MyText>
                </Block>

                <Block row alignCenter>
                    <RadioButton
                        value={2}
                        status={gender === 2 ? 'checked' : 'unchecked'}
                        onPress={() => setGender(2)}
                    />
                    <MyText>Female</MyText>
                </Block> */}
            </Block>

            <ButtonUser
                onPress={handleSignUp}
                text={'Sign Up'}
                loading={loading}
            />

            <MyButton
                marginVertical={20}
                onPress={() => navigate(contants.screen.LOGIN)}>
                <MyText>Login now</MyText>
            </MyButton>

        </Block>
    )
}

export default FormSignUp