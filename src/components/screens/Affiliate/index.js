import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenDrawer from '../Reuse/OpenDrawer'
import { useSelector } from 'react-redux'
import { referralSelector } from '../../../redux/selectors/userSelector'
import Block from '../../common/Block'
import Scroll from '../../common/Scroll'
import { theme } from '../../../theme'
import Item from './Item'
import ButtonUser from '../Reuse/ButtonUser'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import Clipboard from '@react-native-clipboard/clipboard'

const Affiliate = ({ navigation }) => {
  const referral = useSelector(referralSelector)

  const copyreferal = async () => {
    Clipboard.setString(referral)
  }

  return (
    <Block
      flex={1}
      backgroundColor={theme.colors.grayBorder}
      isPaddingAdnroid
      paddingHorizontal={10}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Scroll flexGrow={1}>
          <OpenDrawer navigation={navigation} />
          <Block
            radius={15}
            backgroundColor={'white'}
            paddingHorizontal={20}
            paddingVertical={15}
            marginTop={15}
          >
            <Item
              caption={'Referral URL'}
              referral={'https://hewe.club/signup/' + referral}
              img={require('../../../assets/images/web.png')}
              onPress={() => Linking.openURL('https://hewe.club/signup/' + referral)}
            />

            <Item
              caption={'Referral ID'}
              referral={referral}
              img={require('../../../assets/images/copy.png')}
              onPress={copyreferal}
            />
          </Block>
          <ButtonUser
            onPress={() => navigate(contants.screen.REWARDHISTORY)}
            text={'Reward history'}
          />
        </Scroll>
      </SafeAreaView>
    </Block>
  )
}

export default Affiliate

const styles = StyleSheet.create({})
