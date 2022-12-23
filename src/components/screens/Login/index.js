import React, { useEffect } from 'react'
import HeaderUser from '../Reuse/HeaderUser'
import FormLogin from './FormLogin'
import Scroll from '../../common/Scroll'
import DeepLinking from 'react-native-deep-linking'
import { Alert, Linking } from 'react-native'
import { contants } from '../../../utils/contants'
import { useDispatch } from 'react-redux'
import userSlice from '../../../redux/slices/userSlice'
import { navigate } from '../../navigations/navigationRef'

const Login = () => {

  const dispatch = useDispatch()

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