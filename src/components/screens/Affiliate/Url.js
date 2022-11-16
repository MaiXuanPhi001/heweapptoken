import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import MyText from '../../common/MyText'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import Img from '../../common/Img'

const Url = ({ referral, copyreferal }) => {
    const URL = 'https://hewetoken.com/signup/' + referral

    return (
        <>
            <MyText fontWeightBold size={15}>Referral URL</MyText>
            <Block
                row
                alignCenter
                justifySpaceBetween
            >
                <Block width={'85%'}>
                    <MyText marginVertical={10}>{URL}</MyText>
                </Block>

                <Block row width={'15%'} justifySpaceBetween>
                    <MyButton
                        onPress={() => Linking.openURL(URL)}
                    >
                        <Img
                            width={20}
                            height={20}
                            url={require('../../../assets/images/web.png')}
                        />
                    </MyButton>

                    <MyButton onPress={() => copyreferal(URL)}>
                        <Img
                            width={20}
                            height={20}
                            url={require('../../../assets/images/copy.png')}
                        />
                    </MyButton>
                </Block>
            </Block>
        </>

    )
}

export default Url

const styles = StyleSheet.create({})