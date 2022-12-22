import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { contants } from '../../utils/contants'
import HomeStack from './HomeStack'
import HomeDrawerCustom from './HomeDrawerCustom'
import ChangePassword from '../screens/ChangePassword'
import Transfer from '../screens/Transfer'
import HistoryTransfer from '../screens/HistoryTransfer'
import TotalDistance from '../screens/TotalDistance'
import KYC from '../screens/KYC'
import Affiliate from '../screens/Affiliate'
import Support from '../screens/Support'
import RewardHistory from '../screens/RewardHistory'
import SignUp from '../screens/SignUp'
import DeleteAccount from '../screens/DeleteAccount'
import Withdraw from '../screens/Withdraw'
import HistoryWithdraw from '../screens/HistoryWithdraw'

const data =
    [
        {
            id: 0,
            name: contants.screen.HOMESTACK,
            component: HomeStack,
        },
        {
            id: 1,
            name: contants.screen.CHANGE_PASSWORD,
            component: ChangePassword,
        },
        {
            id: 2,
            name: contants.screen.TRANSFER,
            component: Transfer,
        },
        {
            id: 3,
            name: contants.screen.HISTORY_TRANSFER,
            component: HistoryTransfer,
        },
        {
            id: 4,
            name: contants.screen.TOTAL_DISTANCE,
            component: TotalDistance,
        },
        {
            id: 5,
            name: contants.screen.KYC,
            component: KYC,
        },
        {
            id: 6,
            name: contants.screen.WITHDRAW,
            component: Withdraw,
        },
        {
            id: 7,
            name: contants.screen.HISTORY_WITHDRAW,
            component: HistoryWithdraw,
        },
        {
            id: 8,
            name: contants.screen.AFFILIATE,
            component: Affiliate,
        },
        {
            id: 9,
            name: contants.screen.SUPPORT,
            component: Support,
        },
        {
            id: 10,
            name: contants.screen.REWARDHISTORY,
            component: RewardHistory,
        },
        {
            id: 11,
            name: contants.screen.SIGNUP,
            component: SignUp,
        },
        {
            id: 12,
            name: contants.screen.DELETE_ACCOUNT,
            component: DeleteAccount,
        },
    ]

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <HomeDrawerCustom {...props} />}
        >
            {
                data.map(item =>
                    <Drawer.Screen
                        key={item.id}
                        name={item.name}
                        component={item.component}
                    />
                )
            }
        </Drawer.Navigator>
    )
}

export default HomeDrawer

const styles = StyleSheet.create({})