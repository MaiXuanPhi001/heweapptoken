import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../../common/MyText'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import Img from '../../common/Img'

const ID = ({ referral, copyreferal}) => {
    return (
        <>
            <MyText fontWeightBold size={15}>Referral ID</MyText>
            <Block
                row
                alignCenter
                justifySpaceBetween
            >
                <MyText marginVertical={10} >{referral}</MyText>
                <MyButton
                    onPress={() => copyreferal(referral)}
                >
                    <Img
                        width={20}
                        height={20}
                        url={require('../../../assets/images/copy.png')}
                    />
                </MyButton>
            </Block>
        </>

    )
}

export default ID

const styles = StyleSheet.create({})