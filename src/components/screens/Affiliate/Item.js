import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../../common/MyText'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import Img from '../../common/Img'

const Item = ({caption, referral, onPress, img}) => {
    return (
        <>
            <MyText fontWeightBold size={15}>{caption}</MyText>
            <Block
                row
                alignCenter
                justifySpaceBetween
            >
                <MyText marginVertical={10} >{referral}</MyText>
                <MyButton
                    onPress={onPress}
                >
                    <Img
                        width={20}
                        height={20}
                        url={img}
                    />
                </MyButton>
            </Block>
        </>

    )
}

export default Item

const styles = StyleSheet.create({})