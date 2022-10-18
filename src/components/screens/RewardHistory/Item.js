import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cell from '../HistoryTransfer/Cell'
import Block from '../../common/Block'

const Item = ({ item, index }) => {
    return (
        <Block row>
            <Cell
                text={item.email}
                width={'40%'}
                index={index}
            />
            <Cell
                text={item.amountReceive}
                width={'20%'}
                index={index}
            />
            <Cell
                text={item.created_at}
                width={'40%'}
                index={index}
            />
        </Block>
    )
}

export default Item

const styles = StyleSheet.create({})