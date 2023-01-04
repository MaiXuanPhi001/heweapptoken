import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import OpenDrawer from '../Reuse/OpenDrawer'
import HeaderProfile from '../Reuse/HeaderProfile'
import Block from '../../common/Block'
import ButtonUser from '../Reuse/ButtonUser'
import InputPassword from '../Reuse/InputPassword'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import TextFormError from '../Reuse/TextFormError'
import { changePassword } from '../../../api/userApi'
import KeyboardAvoid from '../Reuse/KeyboardAvoid'

const initValue = {
  oldPassword: '',
  securityOldPassword: true,
  newPassword: '',
  securityNewPassword: true,
  confirmNewPassword: '',
  securityConfirmNewPassword: true,
  loading: false,
  checkForm: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE/TEXT':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'CHANGE/SECURITY':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'CHANGE/LOADING':
      return {
        ...state,
        loading: action.value
      }
    case 'CLEARFORM':
      return {
        ...state,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }
    default: return state
  }
}

const ChangePassword = ({ navigation }) => {
  const [data, dataDispatch] = useReducer(reducer, initValue)

  useEffect(() => {
    return () => dataDispatch({ type: 'CHANGE/LOADING', value: false })
  }, [])

  const hadleDispatch = (type, field, value) => {
    dataDispatch({ type, field, value })
  }

  const handleChangePassword = async () => {
    if (data.oldPassword.trim() === '' || data.newPassword.trim() === '' || data.confirmNewPassword.trim() === ''
      || (data.confirmNewPassword.trim() !== data.newPassword.trim())) {
      return dataDispatch({ type: 'CHANGE/TEXT', field: 'checkForm', value: true })
    }
    dataDispatch({ type: 'CHANGE/LOADING', value: true })
    const res = await changePassword({ password: data.oldPassword, newPassword: data.newPassword })
    res.status && clearForm()
    dataDispatch({ type: 'CHANGE/LOADING', value: false })
    alert(res.message)
  }

  const clearForm = () => {
    dataDispatch({ type: 'CLEARFORM' })
  }

  return (
    <KeyboardAvoid>
      <ScroollAreaView>
        <OpenDrawer navigation={navigation} />
        <HeaderProfile text={'Change password'} />
        <Block width={'100%'} alignCenter>
          <Block
            width={'80%'}
            alignCenter
            marginTop={10}
          >
            <InputPassword
              onPress={() => hadleDispatch('CHANGE/SECURITY', 'securityOldPassword', !data.securityOldPassword)}
              value={data.oldPassword}
              setValue={text => hadleDispatch('CHANGE/TEXT', 'oldPassword', text)}
              security={data.securityOldPassword}
              hint={'Old password'}
            />
            {(data.checkForm && data.oldPassword.trim() === '') && <TextFormError text={'Old password is empty'} />}

            <InputPassword
              onPress={() => hadleDispatch('CHANGE/SECURITY', 'securityNewPassword', !data.securityNewPassword)}
              value={data.newPassword}
              setValue={text => hadleDispatch('CHANGE/TEXT', 'newPassword', text)}
              security={data.securityNewPassword}
              hint={'New password'}
            />
            {(data.checkForm && data.newPassword.trim() === '') && <TextFormError text={'New password is empty'} />}

            <InputPassword
              onPress={() => hadleDispatch('CHANGE/SECURITY', 'securityConfirmNewPassword', !data.securityConfirmNewPassword)}
              value={data.confirmNewPassword}
              setValue={text => hadleDispatch('CHANGE/TEXT', 'confirmNewPassword', text)}
              security={data.securityConfirmNewPassword}
              hint={'Confirm new password'}
            />
            {(data.checkForm && data.confirmNewPassword.trim() === '') && <TextFormError text={'Confirm new password is empty'} />}
            {(data.checkForm && data.confirmNewPassword.trim() !== '' && (data.confirmNewPassword.trim() !== data.newPassword.trim())) &&
              <TextFormError text={'confirm new password different password'} />}

            <ButtonUser
              onPress={handleChangePassword}
              text={'Change password'}
              loading={data.loading}
            />
          </Block>
        </Block>
      </ScroollAreaView >
    </KeyboardAvoid>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  contaienr: {
    alignContent: 'center'
  }
})

