import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../common/Block'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Img from '../common/Img'
import MyText from '../common/MyText'
import { useDispatch, useSelector } from 'react-redux'
import { userInfoSelector } from '../../redux/selectors/userSelector'
import { Drawer } from 'react-native-paper'
import { contants } from '../../utils/contants'
import { theme } from '../../theme'
import userSlice from '../../redux/slices/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeDrawerCustom = (props) => {
    const user = useSelector(userInfoSelector)
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Block isPaddingAdnroid flex={1}>
                <DrawerContentScrollView {...props}>
                    <Block alignCenter>
                        <Img
                            resizeMode={'contain'}
                            url={require('../../assets/images/avatar.png')}
                        />
                        <MyText
                            fontWeightBold
                            marginVertical={10}
                            color={theme.colors.grayBorderInput}
                        >
                            {user.email}
                        </MyText>
                        <MyText
                            fontWeightBold
                        >
                            {user.referral}
                        </MyText>
                    </Block>
                    <Drawer.Section>
                        <DrawerItem
                            label={contants.screen.HOME}
                            onPress={() => { props.navigation.navigate(contants.screen.HOME) }}
                        />
                        <DrawerItem
                            label={contants.screen.CHANGE_PASSWORD}
                            onPress={() => { props.navigation.navigate(contants.screen.CHANGE_PASSWORD) }}
                        />
                        <DrawerItem
                            label={contants.screen.TRANSFER}
                            onPress={() => { props.navigation.navigate(contants.screen.TRANSFER) }}
                        />
                        <DrawerItem
                            label={contants.screen.HISTORY_TRANSFER}
                            onPress={() => { props.navigation.navigate(contants.screen.HISTORY_TRANSFER) }}
                        />
                        <DrawerItem
                            label={contants.screen.TOTAL_DISTANCE}
                            onPress={() => { props.navigation.navigate(contants.screen.TOTAL_DISTANCE) }}
                        />
                        <DrawerItem
                            label={contants.screen.KYC}
                            onPress={() => { props.navigation.navigate(contants.screen.KYC) }}
                        />
                        <DrawerItem
                            label={contants.screen.AFFILIATE}
                            onPress={() => { props.navigation.navigate(contants.screen.AFFILIATE) }}
                        />
                        <DrawerItem
                            label={contants.screen.SUPPORT}
                            onPress={() => { props.navigation.navigate(contants.screen.SUPPORT) }}
                        />
                    </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section>
                    <Drawer.Item label='Sign Out' onPress={ async () => {
                        await AsyncStorage.setItem(contants.STORAGE_KEY, '')
                        dispatch(userSlice.actions.signOut())
                    }}
                    />
                </Drawer.Section>
            </Block>
        </SafeAreaView>
    )
}

export default HomeDrawerCustom

const styles = StyleSheet.create({})