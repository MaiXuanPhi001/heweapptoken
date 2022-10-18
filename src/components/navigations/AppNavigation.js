import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { isLoginUserSelector } from '../../redux/selectors/userSelector'
// import HomeTab from './HomeTab'
import UserStack from './UserStack'

const AppNavigation = () => {
    const isLogin = useSelector(isLoginUserSelector)

    return (
        <>
            {/* {isLogin ? <HomeTab /> : <UserStack />} */}
            <UserStack />
        </>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})