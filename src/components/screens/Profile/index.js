import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const Profile = () => {
  return (
    <ScroollAreaView>
      <Block
        flex={1}
        backgroundColor={'white'}
        justifyCenter
        alignCenter
      >
        <MyText>Feature is developing...</MyText>
      </Block>
    </ScroollAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})