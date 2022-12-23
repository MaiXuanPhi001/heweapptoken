import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { pageTransferSelector, totalTransferSelector } from '../../../redux/selectors/transferSelector'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'
import Img from '../../common/Img'

const Header = ({ getAPI }) => {
  const page = useSelector(pageTransferSelector)
  const total = useSelector(totalTransferSelector)

  return (
    <Block
      row
      justifySpaceBetween
      justifyCenter
      alignCenter
      marginVertical={10}
    >
      <MyText
        fontWeightBold
        size={16}
        color={theme.colors.lightGreen2}
      >
        Transfer history
      </MyText>

      <Block row alignCenter>
        <MyButton
          onPress={() => getAPI(page - 1)}
          disabled={page < 2}
          borderColor={'#4B4E5B'}
          borderWidth={1}
          height={30}
          width={30}
          alignCenter
          justifyCenter
          radius={5}
          opacity={page < 2 ? .1 : .5}
        >
          <Img
            width={15}
            height={15}
            source={require('../../../assets/images/back-page.png')}
          />
        </MyButton>

        <Block
          borderColor={theme.colors.lightGreen2}
          borderWidth={1}
          height={32}
          width={32}
          alignCenter
          justifyCenter
          radius={5}
          marginHorizontal={2}
        >
          <MyText>{page}</MyText>
        </Block>

        <MyButton
          onPress={() => getAPI(page + 1)}
          disabled={!(total >= 1 + page * 10)}
          borderColor={'#4B4E5B'}
          borderWidth={1}
          height={30}
          width={30}
          alignCenter
          justifyCenter
          radius={5}
          opacity={!(total >= 1 + page * 10) ? .1 : .5}
        >
          <Img
            width={15}
            height={15}
            source={require('../../../assets/images/next-page.png')}
          />
        </MyButton>
      </Block>
    </Block>
  )
}

export default Header

const styles = StyleSheet.create({})