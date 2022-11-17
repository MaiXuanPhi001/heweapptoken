import { Linking, SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef, useState } from 'react';
import OpenDrawer from '../Reuse/OpenDrawer'
import { useSelector } from 'react-redux'
import { referralSelector } from '../../../redux/selectors/userSelector'
import Block from '../../common/Block'
import Scroll from '../../common/Scroll'
import ButtonUser from '../Reuse/ButtonUser'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import Clipboard from '@react-native-clipboard/clipboard'
import CustomToast from '../Reuse/CustomToast';
import Url from './Url';
import ID from './ID';
import { styled } from '../../../theme/styled';

const Affiliate = ({ navigation }) => {
  const referral = useSelector(referralSelector)

  const [toastType, setToastType] = useState('success')
  const [title, setTitle] = useState('Success')

  const slideAnim = useRef(new Animated.Value(120)).current;

  const copyreferal = (text) => {
    showToast('success', 'Copy')
    Clipboard.setString(text)
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
      backgroundColor={'white'}
      isPaddingAdnroid
      paddingHorizontal={10}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Scroll flexGrow={1}>
          <OpenDrawer navigation={navigation} />
          <Block width={'100%'} alignCenter>
            <Block
              style={styled.shadow}
              width={'97%'}
              radius={15}
              backgroundColor={'white'}
              paddingHorizontal={20}
              paddingVertical={15}
              marginTop={15}
            >
              <Url
                referral={referral}
                copyreferal={copyreferal}
              />

              <ID
                referral={referral}
                copyreferal={copyreferal}
              />
            </Block>
            <ButtonUser
              width={'97%'}
              onPress={() => navigate(contants.screen.REWARDHISTORY)}
              text={'Reward history'}
            />
          </Block>
        </Scroll>
      </SafeAreaView>
      <Animated.View
        style={{ transform: [{ translateY: slideAnim }], marginBottom: 25 }}
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