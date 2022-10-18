import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import MyText from '../../common/MyText'
import OpenDrawer from '../Reuse/OpenDrawer'
import Block from '../../common/Block'
import InputUser from '../Reuse/InputUser'
import ChooseImg from './ChooseImg'
import ModalAlert from '../Reuse/ModalAlert'
import ButtonUser from '../Reuse/ButtonUser'
import TextFormError from '../Reuse/TextFormError'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '../../../redux/selectors/userSelector'
import { contants } from '../../../utils/contants'
import { checkKYC } from '../../../api/kycApi'
import RadioBtn from '../Reuse/RadioBtn'

const initValue = {
  firtName: '',
  lastName: '',
  gender: 1,
  passport: '',
  country: '',
  phone: '',
  img1: '',
  img2: '',
  img3: '',
  checkForm: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value
      }
  }
}

const KYC = ({ navigation }) => {
  const [data, dataDispatch] = useReducer(reducer, initValue)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [checkKYCUser, setCheckKYCUser] = useState(false)

  const userInfo = useSelector(userInfoSelector)

  useEffect(() => {
    checkKYCAPI()
  }, [])

  const checkKYCAPI = async () => {
    setLoading(true)
    const res = await checkKYC()
    console.log('res: ', res)
    if (res.status) {
      setCheckKYCUser(true)
    }
    setLoading(false)
  }

  const handleDataDispatch = (type, field, value) => {
    dataDispatch({ type, field, value })
  }

  const handleKYC = async () => {
    if (data.firtName.trim() === '' || data.lastName.trim() === '' || data.passport.trim() === ''
      || data.country.trim() === '' || data.phone.trim() === '' || data.img1.trim() === ''
      || data.img2.trim() === '' || data.img3.trim() === '') {
      return handleDataDispatch('CHANGE', 'checkForm', true)
    }
    setLoading(true)
    fetchKYCAPI()
  }

  const fetchKYCAPI = () => {
    let formdata = new FormData();
    formdata.append('userid', userInfo.id)
    formdata.append('firstname', data.firtName)
    formdata.append('lastname', data.lastName)
    formdata.append('gender', data.gender)
    formdata.append('passport', data.passport)
    formdata.append('country', data.country)
    formdata.append('phone', data.phone)
    formdata.append('photo', { uri: Platform.OS === 'ios' ? data.img1.replace('file://', '') : data.img1, name: 'image.jpg', type: 'image/jpg' })
    formdata.append('photo', { uri: Platform.OS === 'ios' ? data.img2.replace('file://', '') : data.img2, name: 'image.jpg', type: 'image/jpg' })
    formdata.append('photo', { uri: Platform.OS === 'ios' ? data.img3.replace('file://', '') : data.img3, name: 'image.jpg', type: 'image/jpg' })

    fetch(contants.HOSTING + '/api/user/kycUser', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
    }).then(res => res.json())
      .then(res => {
        console.log('ress: ', JSON.stringify(res))
        alert(res.message)
      })
      .catch(err => {
        console.log('err: ', JSON.stringify(err))
        alert('Has an error please try again')
      })
    setLoading(false)
  }

  const pickImage = async (img) => {
    // const result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // if (!result.cancelled) {
    //   img === 1 && handleDataDispatch('CHANGE', 'img1', result.uri)
    //   img === 2 && handleDataDispatch('CHANGE', 'img2', result.uri)
    //   img === 3 && handleDataDispatch('CHANGE', 'img3', result.uri)
    // }
  }

  if (loading) {
    return (
      <Block flex={1} alignCenter justifyCenter>
        <MyText>Loading...</MyText>
      </Block>
    )
  }

  if (!loading && checkKYCUser) {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Block
          flex={1}
          isPaddingAdnroid
          paddingHorizontal={10}
        >
          <OpenDrawer navigation={navigation} />
          <Block
            flex={1}
            alignCenter
            justifyCenter
          >
            <MyText fontWeightBold size={15}>The user has performed kyc</MyText>
          </Block>
        </Block>
      </SafeAreaView>

    )
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      <Block alignCenter paddingHorizontal={20}>
        <MyText fontWeightBold size={20}>KYC</MyText>
        <InputUser
          value={data.firtName}
          setValue={text => handleDataDispatch('CHANGE', 'firtName', text)}
          hint={'Firtname'}
        />
        {(data.checkForm && data.firtName.trim() === '') && <TextFormError text={'Firtname is empty'} />}

        <InputUser
          value={data.lastName}
          setValue={text => handleDataDispatch('CHANGE', 'lastName', text)}
          hint={'Lastname'}
        />
        {(data.checkForm && data.lastName.trim() === '') && <TextFormError text={'Lastname is empty'} />}
        <Block
          row
          width={'100%'}
          alignCenter
          marginVertical={10}
        >
          <MyText marginRight={10}>Gender: </MyText>
          <RadioBtn
            text={'Male'}
            onPress={() => handleDataDispatch('CHANGE', 'gender', 1)}
            checked={data.gender === 1 ? true : false}
          />
          <RadioBtn
            text={'Female'}
            onPress={() => handleDataDispatch('CHANGE', 'gender', 2)}
            checked={data.gender === 2 ? true : false}
          />
        </Block>

        <InputUser
          value={data.passport}
          setValue={text => handleDataDispatch('CHANGE', 'passport', text)}
          hint={'Passport'}
        />
        {(data.checkForm && data.passport.trim() === '') && <TextFormError text={'Passport is empty'} />}

        <InputUser
          value={data.country}
          setValue={text => handleDataDispatch('CHANGE', 'country', text)}
          hint={'Country'}
        />
        {(data.checkForm && data.country.trim() === '') && <TextFormError text={'Country is empty'} />}

        <InputUser
          value={data.phone}
          setValue={text => handleDataDispatch('CHANGE', 'phone', text)}
          hint={'Phone'}
        />
        {(data.checkForm && data.phone.trim() === '') && <TextFormError text={'Phone is empty'} />}

        <ChooseImg
          uri={data.img1}
          onPress={() => pickImage(1)}
          text={'Identily card 1:'}
        />
        {(data.checkForm && data.img1.trim() === '') && <TextFormError text={'Identily is empty'} />}

        <ChooseImg
          uri={data.img2}
          onPress={() => pickImage(2)}
          text={'Identily card 2:'}
        />
        {(data.checkForm && data.img2.trim() === '') && <TextFormError text={'Identily is empty'} />}

        <ChooseImg
          uri={data.img3}
          onPress={() => pickImage(3)}
          text={'Portrait:'}
        />
        {(data.checkForm && data.img3.trim() === '') && <TextFormError text={'Portrait is empty'} />}

        <ButtonUser
          loading={loading}
          onPress={handleKYC}
          text={'Submit'}
        />
      </Block>
      <ModalAlert
        show={showModal}
        setShow={setShowModal}
      />
    </ScroollAreaView>
  )
}

export default KYC

const styles = StyleSheet.create({})
