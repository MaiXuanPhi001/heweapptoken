import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyInput from '../../common/MyInput/MyInput'
import { theme } from '../../../theme'

const InputPassword = ({ value, security, setValue, onPress, hint }) => {
    return (
        <MyInput
            onPress={onPress}
            value={value}
            setValue={setValue}
            width={'100%'}
            height={40}
            hint={hint}
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
    )
}

export default InputPassword

const styles = StyleSheet.create({})