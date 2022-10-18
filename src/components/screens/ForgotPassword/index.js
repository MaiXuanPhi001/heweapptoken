import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroll from '../../common/Scroll'
import HeaderUser from '../Reuse/HeaderUser'
import FormForgot from './FormForgot'

const ForgotPassword = () => {
  return (
    <Scroll
      flexGrow={1}
      alignCenter
      paddingBottom={50}
    >
      <HeaderUser text={'Forgot password'} />
      <FormForgot />
    </Scroll>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})