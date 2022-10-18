import React, { useEffect } from 'react'
import HeaderUser from '../Reuse/HeaderUser'
import FormLogin from './FormLogin'
import Scroll from '../../common/Scroll'

const Login = () => {
  return (
    <Scroll
      flexGrow={1}
      alignCenter
      paddingBottom={50}
    >
      <HeaderUser text={'Login'} />
      <FormLogin />
    </Scroll>
  )
}

export default Login