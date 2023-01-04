import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OpenDrawer from '../Reuse/OpenDrawer'
import HeaderProfile from '../Reuse/HeaderProfile'
import { theme } from '../../../theme'
import Block from '../../common/Block'
import MyInput from '../../common/MyInput/MyInput'
import ButtonUser from '../Reuse/ButtonUser'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import TextFormError from '../Reuse/TextFormError'
import { transfer } from '../../../api/transferApi'
import { useDispatch } from 'react-redux'
import { onGetProfile } from '../../../redux/slices/userSlice'
import KeyboardAvoid from '../Reuse/KeyboardAvoid'

const Transfer = ({ navigation }) => {
  const [toReferral, setReferral] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkForm, setCheckForm] = useState(false)

  const dispatch = useDispatch()

  const handleTransfer = async () => {
    if (toReferral.trim() === '' || amount.toString().trim() === '' || amount < 50) {
      setCheckForm(true)
      return
    }

    const res = await transfer({
      'referralTo': toReferral,
      'amount': amount,
      'api': 'transfer'
    })

    if (res.status) {
      dispatch(onGetProfile())
      setAmount('')
      setReferral('')
    }
    alert(res.message)
  }

  return (
    <KeyboardAvoid>
      <ScroollAreaView>
        <OpenDrawer navigation={navigation} />
        <HeaderProfile text={'Transfer'} />
        <Block width={'100%'} alignCenter>
          <Block
            width={'80%'}
            alignCenter
            marginTop={10}
          >
            <MyInput
              onPress={() => alert('Hello')}
              value={toReferral}
              setValue={setReferral}
              width={'100%'}
              height={40}
              hint={'To referral'}
              borderWidth={1}
              borderColor={theme.colors.grayBorderInput}
              paddingHorizontal={10}
              paddingLeft={10}
              paddingRight={10}
              marginBottom={10}
              iconTwo={require('../../../assets/images/scan.png')}
            />
            {(checkForm && toReferral.trim() === '') && <TextFormError text={'toReferral is empty'} />}

            <MyInput
              value={amount}
              setValue={setAmount}
              keyboardType={'decimal-pad'}
              width={'100%'}
              height={40}
              hint={'Amount'}
              borderWidth={1}
              borderColor={theme.colors.grayBorderInput}
              paddingHorizontal={10}
              paddingLeft={10}
              paddingRight={10}
              marginBottom={10}
            />
            {(checkForm && amount.toString().trim() === '') && <TextFormError text={'amount is empty'} />}
            {(checkForm && amount.toString().trim() !== '' && amount < 50) && <TextFormError text={'Minimum amount must be 50$'} />}

            <ButtonUser
              onPress={handleTransfer}
              text={'Confirm'}
              loading={loading}
            />
          </Block>
        </Block>
      </ScroollAreaView>
    </KeyboardAvoid>
  )
}

export default Transfer

const styles = StyleSheet.create({})