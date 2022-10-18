import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../../common/MyButton'
import Img from '../../common/Img'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import { useSelector } from 'react-redux'
import { balanceSelector } from '../../../redux/selectors/userSelector'

const OpenDrawer = ({ navigation }) => {
    const balance = useSelector(balanceSelector)

    return (
        <Block row justifySpaceBetween>
            <MyButton onPress={() => navigation.openDrawer()}>
                <Img
                    width={30}
                    resizeMode={'contain'}
                    source={require('../../../assets/images/optiondrawer.png')}
                />
            </MyButton>
            <Block row alignCenter>
                <MyText
                    marginRight={10}
                    fontWeightBold
                    size={17}
                >
                    {balance}
                </MyText>
                <Img
                    width={30}
                    resizeMode={'contain'}
                    source={require('../../../assets/images/coin.png')}
                />
            </Block>
        </Block>
    )
}

export default OpenDrawer

const styles = StyleSheet.create({})