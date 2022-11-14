import { Linking, SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native'
import React, {useRef, useState} from 'react';
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
import CustomToast from '../Reuse/CustomToast';

const Affiliate = ({ navigation }) => {
  const referral = useSelector(referralSelector)

  const [toastType, setToastType] = useState('success')
  const [title, setTitle] = useState('Success')

    const slideAnim = useRef(new Animated.Value(120)).current;

  const copyreferal = async () => {
    showToast('success', 'Copy')
    Clipboard.setString(referral)
  }

  const showToast = (type, message) => {
    setToastType(type)
    setTitle(message)
    animateToast()
  };

    const animateToast = () => {
      Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
 
    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 120,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 2500);
  };

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
              referral={'https://hewetoken.com/signup/' + referral}
              img={require('../../../assets/images/web.png')}
              onPress={() => Linking.openURL('https://hewetoken.com/signup/' + referral)}
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
      <Animated.View
        style={{transform: [{translateY: slideAnim}], marginBottom: 25}}
      >
        <CustomToast
          type={toastType}
          title={title}
          subtitle={`Copy success!`}
        />
        </Animated.View>
    </Block>
  )
}

export default Affiliate

const styles = StyleSheet.create({})