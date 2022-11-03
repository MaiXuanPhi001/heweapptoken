import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Btn from './Btn'
import navigateProfile from '../../../method/navigateProfile'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { removeAccount } from '../../../redux/slices/userSlice'
import { alertConfirm } from '../../../method/alert'

const DeleteAccount = () => {
  const dispatch = useDispatch()

  const handleShowAlerRemoveAccount = async () => {
    alertConfirm('Delete account', 'Confirm account deletion', 'Confirm', handleRemoveAccount)
  }

  const handleRemoveAccount = async () => {
    const payload = unwrapResult(await dispatch(removeAccount()))
    !payload.status && Alert.alert(payload.message)
  }

  return (
    <SafeAreaView flex={1}>
      <Block
        flex={1}
        isPaddingAdnroid
        backgroundColor={'white'}
        alignCenter
        justifyCenter
        paddingHorizontal={20}
      >
        <MyText center size={18} fontWeightBold>
          Deleting your account will delete your access and all your personal information
          on this App including all rewards accomplised.
        </MyText>
        <Block row marginVertical={20}>
          <Btn text={'Go Back'} onPress={navigateProfile} />
          <Btn text={'Delete'} onPress={handleShowAlerRemoveAccount} />
        </Block>
      </Block>
    </SafeAreaView>
  )
}

export default DeleteAccount

const styles = StyleSheet.create({})