import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const Empty = () => {
  return (
    <Block
        height={'90%'}
        backgroundColor="white"
        justifyCenter
        alignCenter
    >
        <MyText fontWeightBold>There is no data for this distance</MyText>
    </Block>
  )
}

export default Empty

const styles = StyleSheet.create({})