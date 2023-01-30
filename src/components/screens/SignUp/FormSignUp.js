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
import { RadioButton } from 'react-native-paper'
import RadioBtn from '../Reuse/RadioBtn'
import { useDispatch, useSelector } from 'react-redux'
import { referralSignUpSelector } from '../../../redux/selectors/userSelector'
import userSlice from '../../../redux/slices/userSlice'

const FormSignUp = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState(0)
    const [security, setSecurity] = useState(true)
    const [loading, setLoading] = useState(false)
    const [checkForm, setCheckForm] = useState(false)

    const referral = useSelector(referralSignUpSelector)
    const dispatch = useDispatch()

    const handleSignUp = async () => {
        setCheckForm(true)
        if (!handleCheckForm()) return
        if (password.trim() !== confirmPassword.trim()) return alert('Confirm password incorrect')
        setLoading(true)
        const res = await signUp({
            email,
            password,
            gender: gender === 0 || gender === 1 ? 1 : 2,
            codeEmail: code,
            referral
        })
        if (res.status) {
            clearForm()
        }
        alert(res.message)
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
                setValue={text => dispatch(userSlice.actions.changeReferral(text))}
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

            <Block width={'100%'}>
                <MyText marginRight={10} marginBottom={10}>App interface will change by gender (optional): </MyText>
                <Block row>
                    <RadioBtn
                        text={'Male'}
                        onPress={() => setGender(gender === 1 ? 0 : 1)}
                        checked={gender === 1 ? true : false}
                    />
                    <RadioBtn
                        text={'Female'}
                        onPress={() => setGender(gender === 2 ? 0 : 2)}
                        checked={gender === 2 ? true : false}
                    />
                </Block>
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