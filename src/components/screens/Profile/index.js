import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Item from './Item'

const Profile = () => {
  return (
    <ScroollAreaView paddingHorizontal={20}>
      <Block
        flex={1}
        backgroundColor={'white'}
      >
        <Item />
      </Block>
    </ScroollAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})