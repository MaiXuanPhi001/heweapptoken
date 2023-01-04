import { StyleSheet } from 'react-native'
import React from 'react'
import Scroll from '../../common/Scroll'
import HeaderUser from '../Reuse/HeaderUser'
import FormSignUp from './FormSignUp'
import KeyboardAvoid from '../Reuse/KeyboardAvoid'

const SignUp = () => {
  return (
    <KeyboardAvoid>
      <Scroll
        flexGrow={1}
        alignCenter
        paddingBottom={50}
      >
        <HeaderUser text={'Sign Up'} />
        <FormSignUp />
      </Scroll>
    </KeyboardAvoid>
  )
}

export default SignUp

const styles = StyleSheet.create({})