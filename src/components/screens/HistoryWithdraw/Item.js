import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'

const Item = ({ item }) => {
    return (
        <Block
            row
            paddingHorizontal={10}
            height={50}
            alignCenter
            borderBottomWidth={1}
            borderColor={theme.colors.lightGreen2}
        >
            <Block width={100}>
                <MyText>{item.symbol}</MyText>
            </Block>
            <Block width={100}>
                <MyText>{item.amount}</MyText>
            </Block>
            <Block width={230} paddingRight={20}>
                <MyText>{item.toAddress}</MyText>
            </Block>
            <Block width={100}>
                <MyText>{item.balanceWidthdraw}</MyText>
            </Block>
            <Block width={130}>
                <MyText>{item.feeWidthdraw}</MyText>
            </Block>
            <Block width={100}>
                <MyText>{item.network}</MyText>
            </Block>
            <Block width={200}>
                <MyText>{item.created_at}</MyText>
            </Block>
            <Block width={100}>
                <MyText>
                    {item.status === 0 ? 'Cancel' : item.status === 1 ? 'Success' : 'Pending'}
                </MyText>
            </Block>
        </Block>
    )
}

export default Item

const styles = StyleSheet.create({})