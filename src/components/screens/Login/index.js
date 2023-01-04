import React from 'react'
import HeaderUser from '../Reuse/HeaderUser'
import FormLogin from './FormLogin'
import Scroll from '../../common/Scroll'
import KeyboardAvoid from '../Reuse/KeyboardAvoid'

const Login = () => {
  return (
    <KeyboardAvoid>
      <Scroll
        flexGrow={1}
        alignCenter
        paddingBottom={50}
      >
        <HeaderUser text={'Login'} />
        <FormLogin />
      </Scroll>
    </KeyboardAvoid>
  )
}

export default Login