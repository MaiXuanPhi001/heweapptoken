import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import Cell from './Cell'
import { useSelector } from 'react-redux'
import { emailSelector } from '../../../redux/selectors/userSelector'
import { theme } from '../../../theme'

const TransferHistoryItem = ({ item }) => {
    const email = useSelector(emailSelector)

    return (
        <Block row borderBottomWidth={1} borderColor={theme.colors.lightGreen2}>
            <Cell
                text={item.email}
                width={130}
            />
            <Cell
                text={item.emailTo}
                width={130}
            />
            <Cell
                text={item.email === email ? '- ' + item.amount : '+ ' + item.amount}
                width={100}
            />
            <Cell
                text={item.created_at}
                width={200}
            />
        </Block>
    )
}

export default TransferHistoryItem

const styles = StyleSheet.create({})