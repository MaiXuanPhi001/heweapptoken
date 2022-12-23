import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'
import MyText from '../../common/MyText'

const HeaderTable = () => {
    return (
        <Block
            row
            backgroundColor={theme.colors.lightGreen2}
            paddingHorizontal={10}
            height={40}
            alignCenter
            borderBottomWidth={1}
            borderColor={theme.colors.lightGreen2}
        >
            <Block width={100}>
                <MyText color='white'>Symbol</MyText>
            </Block>
            <Block width={100}>
                <MyText color='white'>Amount</MyText>
            </Block>
            <Block width={230}>
                <MyText color='white'>Withdrawal Address</MyText>
            </Block>
            <Block width={100}>
                <MyText color='white'>Balance Withdraw</MyText>
            </Block>
            <Block width={130}>
                <MyText color='white'>Fee Withdraw</MyText>
            </Block>
            <Block width={100}>
                <MyText color='white'>Network</MyText>
            </Block>
            <Block width={200}>
                <MyText color='white'>Time</MyText>
            </Block>
            <Block width={100}>
                <MyText color='white'>Status</MyText>
            </Block>
        </Block>
    )
}

export default HeaderTable

const styles = StyleSheet.create({})