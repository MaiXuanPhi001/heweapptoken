import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import Cell from './Cell'
import { useSelector } from 'react-redux'
import { emailSelector } from '../../../redux/selectors/userSelector'

const TransferHistoryItem = ({ item, index }) => {
    const email = useSelector(emailSelector)

    return (
        <Block row>
            <Cell
                text={item.email}
                width={'27%'}
                index={index}
            />
            <Cell
                text={item.emailTo}
                width={'27%'}
                index={index}
            />
            <Cell
                text={item.email === email ? '- ' + item.amount : '+ ' + item.amount}
                width={'19%'}
                index={index}
            />
            <Cell
                text={item.created_at}
                width={'27%'}
                index={index}
            />
        </Block>
    )
}

export default TransferHistoryItem

const styles = StyleSheet.create({})