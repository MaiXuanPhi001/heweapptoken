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
import DistanceDetail from '../screens/DistanceDetail'
import RewardHistory from '../screens/RewardHistory'
import SignUp from '../screens/SignUp'
import DeleteAccount from '../screens/DeleteAccount'

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            drawerContent={props => <HomeDrawerCustom {...props} />}
        >
            <Drawer.Screen name={contants.screen.HOMESTACK} component={HomeStack} />
            <Drawer.Screen name={contants.screen.CHANGE_PASSWORD} component={ChangePassword} />
            <Drawer.Screen name={contants.screen.TRANSFER} component={Transfer} />
            <Drawer.Screen name={contants.screen.HISTORY_TRANSFER} component={HistoryTransfer} />
            <Drawer.Screen name={contants.screen.TOTAL_DISTANCE} component={TotalDistance} />
            <Drawer.Screen name={contants.screen.DISTANCE_DETAIL} component={DistanceDetail} />
            <Drawer.Screen name={contants.screen.KYC} component={KYC} />
            <Drawer.Screen name={contants.screen.AFFILIATE} component={Affiliate} />
            <Drawer.Screen name={contants.screen.SUPPORT} component={Support} />
            <Drawer.Screen name={contants.screen.REWARDHISTORY} component={RewardHistory} />
            <Drawer.Screen name={contants.screen.SIGNUP} component={SignUp} />
            <Drawer.Screen name={contants.screen.DELETE_ACCOUNT} component={DeleteAccount} />
        </Drawer.Navigator>
    )
}

export default HomeDrawer

const styles = StyleSheet.create({})