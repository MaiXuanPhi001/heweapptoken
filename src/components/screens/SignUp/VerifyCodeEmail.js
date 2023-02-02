import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import { sendMailSignUp } from '../../../api/userApi'
import ButtonUser from '../Reuse/ButtonUser'
import { theme } from '../../../theme'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'
import LottieAnimation from '../Reuse/LottieAnimation'

const VerifyCodeEmail = ({ code, setCode, email }) => {
    const [loading, setLoading] = useState(false)
    const [timeCode, setTimeCode] = useState(false)
    const [second, setSecond] = useState(60)

    useEffect(() => {
        let timer

        timer = setInterval(() => {
            if (timeCode) {
                setSecond(second - 1)
                if (second < 1) {
                    setSecond(60)
                    setTimeCode(false)
                }
            }
        }, 1000)

        return () => clearInterval(timer)
    })

    const handleSendMailSignUp = async () => {
        if (email.trim() === '') return alert('Please enter email')
        setLoading(true)
        const res = await sendMailSignUp({ email })
        if (res.status) {
            alert('Please check email')
            setTimeCode(true)
        } else {
            alert('This email alrealy exists')
        }
        setLoading(false)
    }

    return (
        <Block
            row
            width={'100%'}
            marginBottom={10}
            alignCenter
        >
            <Block width={'70%'}>
                <Image
                    style={styles.imgVerifi}
                    source={require('../../../assets/images/email.png')}
                />
                <TextInput
                    value={code}
                    onChangeText={setCode}
                    placeholder='Email verification code'
                    placeholderTextColor={'#6666'}
                    style={styles.input}
                />
            </Block>
            <MyButton
                onPress={handleSendMailSignUp}
                backgroundColor={theme.colors.lightGreen2}
                height={40}
                width={'30%'}
                alignCenter
                justifyCenter
                disabled={loading}
            >
                {loading ?
                    <LottieAnimation url={require('../../../assets/lotties/loading.json')} />
                    : <MyText fontWeightBold color={theme.colors.white}>
                        {timeCode ? second : 'Send code'}
                    </MyText>
                }

            </MyButton>
        </Block>
    )
}

export default VerifyCodeEmail

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: theme.colors.grayBorderInput,
        borderWidth: 1,
        paddingLeft: 40,
        color: 'black'
    },
    imgVerifi: {
        position: 'absolute',
        top: 8,
        left: 8
    }
})