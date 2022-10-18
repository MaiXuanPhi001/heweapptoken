import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyInput from '../../common/MyInput/MyInput'
import { theme } from '../../../theme'

const InputUser = ({ value, setValue, hint }) => {
    return (
        <MyInput
            value={value}
            setValue={setValue}
            width={'100%'}
            height={40}
            hint={hint}
            borderWidth={1}
            borderColor={theme.colors.grayBorderInput}
            paddingHorizontal={10}
            paddingLeft={10}
            paddingRight={10}
            marginBottom={10}
        />
    )
}

export default InputUser

const styles = StyleSheet.create({})