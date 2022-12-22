import { SafeAreaView, StyleSheet } from 'react-native'
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

const data =
    [
        {
            id: 0,
            lable: 'Home',
            screen: contants.screen.HOME,
        },
        {
            id: 1,
            lable: 'Change password',
            screen: contants.screen.CHANGE_PASSWORD,
        },
        {
            id: 2,
            lable: 'Transfer',
            screen: contants.screen.TRANSFER,
        },
        {
            id: 3,
            lable: 'History transfer',
            screen: contants.screen.HISTORY_TRANSFER,
        },
        {
            id: 4,
            lable: 'Total distance',
            screen: contants.screen.TOTAL_DISTANCE,
        },
        {
            id: 5,
            lable: 'KYC',
            screen: contants.screen.KYC,
        },
        {
            id: 6,
            lable: 'Withdraw',
            screen: contants.screen.WITHDRAW,
        },
        {
            id: 7,
            lable: 'History withdraw',
            screen: contants.screen.HISTORY_WITHDRAW,
        },
        {
            id: 8,
            lable: 'Affiliate',
            screen: contants.screen.AFFILIATE,
        },
        {
            id: 9,
            lable: 'Support',
            screen: contants.screen.SUPPORT,
        },
        {
            id: 10,
            lable: 'Delete account',
            screen: contants.screen.DELETE_ACCOUNT,
        },
    ]

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
                        {data.map(item =>
                            <DrawerItem
                                key={item.id}
                                label={item.lable}
                                onPress={() => { props.navigation.navigate(item.screen) }}
                            />
                        )}
                    </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section>
                    <Drawer.Item label='Sign out' onPress={async () => {
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