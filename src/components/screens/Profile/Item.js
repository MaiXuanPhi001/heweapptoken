import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import MyButton from '../../common/MyButton'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'

const Item = () => {
    return (
        <MyButton
            width={'100%'}
            height={35}
            borderBottomWidth={0.5}
            borderColor={'#A9A9A9'}
            marginBottom={20}
            onPress={() => navigate(contants.screen.DELETE_ACCOUNT)}
        >
            <MyText size={20} color={'#939393'}>Delete Acount</MyText>
        </MyButton>
    )
}

export default Item

const styles = StyleSheet.create({})