import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import { theme } from '../../../theme'
import Block from '../../common/Block'
import MyInput from '../../common/MyInput/MyInput'
import ButtonUser from '../Reuse/ButtonUser'
import OpenDrawer from '../Reuse/OpenDrawer'
import HeaderProfile from '../Reuse/HeaderProfile'
import { support } from '../../../api/userApi'
import TextFormError from '../Reuse/TextFormError'

const Support = ({ navigation }) => {
  const [title, settitle] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkForm, setCheckForm] = useState(false)

  const handleSendSupport = async () => {
    if (title.trim() === '' || message.trim() === '') {
      return setCheckForm(true)
    }
    setLoading(true)
    const res = await support({ title, message })
    setLoading(false)
    if (res.status) {
      clearForm()
    }
    alert(res.message)
  }

  const clearForm = () => {
    settitle('')
    setMessage('')
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      <HeaderProfile text={'Support'} />
      <Block width={'100%'} alignCenter>
        <Block
          width={'80%'}
          alignCenter
          marginTop={10}
        >
          <MyInput
            value={title}
            setValue={settitle}
            width={'100%'}
            height={40}
            hint={'Title'}
            borderWidth={1}
            borderColor={theme.colors.grayBorderInput}
            paddingHorizontal={10}
            paddingLeft={10}
            paddingRight={10}
            marginBottom={10}
          />
          {(checkForm && title.trim() === '') && <TextFormError text={'Title is empty'} />}

          <MyInput
            value={message}
            setValue={setMessage}
            width={'100%'}
            height={40}
            hint={'Message'}
            borderWidth={1}
            borderColor={theme.colors.grayBorderInput}
            paddingHorizontal={10}
            paddingLeft={10}
            paddingRight={10}
            marginBottom={10}
          />
          {(checkForm && message.trim() === '') && <TextFormError text={'Message is empty'} />}

          <ButtonUser
            onPress={handleSendSupport}
            text={'Submit'}
            loading={loading}
          />
        </Block>
      </Block>
    </ScroollAreaView>
  )
}

export default Support

const styles = StyleSheet.create({})
