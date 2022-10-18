import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroll from '../../common/Scroll'
import HeaderUser from '../Reuse/HeaderUser'
import FormSignUp from './FormSignUp'

const SignUp = () => {
  return (
    <Scroll
      flexGrow={1}
      alignCenter
      paddingBottom={50}
    >
      <HeaderUser text={'Sign Up'} />
      <FormSignUp />
    </Scroll>
  )
}

export default SignUp

const styles = StyleSheet.create({})