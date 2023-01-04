import { StyleSheet } from 'react-native'
import React from 'react'
import Scroll from '../../common/Scroll'
import HeaderUser from '../Reuse/HeaderUser'
import FormForgot from './FormForgot'
import KeyboardAvoid from '../Reuse/KeyboardAvoid'

const ForgotPassword = () => {
  return (
    <KeyboardAvoid>
      <Scroll
        flexGrow={1}
        alignCenter
        paddingBottom={50}
      >
        <HeaderUser text={'Forgot password'} />
        <FormForgot />
      </Scroll>
    </KeyboardAvoid>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})