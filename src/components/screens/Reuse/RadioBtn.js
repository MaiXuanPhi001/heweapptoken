import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'

const RadioBtn = ({ onPress, checked, text }) => {
    return (
        <Block
            row
            alignCenter
            marginRight={20}
        >
            <MyButton
                onPress={onPress}
                borderWidth={2}
                radius={50} width={20}
                height={20}
                justifyCenter
                alignCenter
                marginRight={5}
            >
                {checked &&
                    <Block
                        width={12}
                        height={12}
                        radius={50}
                        backgroundColor={'#73e8fb'}
                    />
                }
            </MyButton>

            <MyText>{text}</MyText>
        </Block>
    )
}

export default RadioBtn

const styles = StyleSheet.create({})