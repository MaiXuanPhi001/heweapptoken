import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const Profile = () => {
  return (
    <Block flex={1} justifyCenter alignCenter backgroundColor={'white'}>
      <MyText size={17}>Feature is developing</MyText>
    </Block>
  )
}

export default Profile

const styles = StyleSheet.create({})