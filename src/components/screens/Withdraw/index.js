import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import OpenDrawer from '../Reuse/OpenDrawer'
import { useState } from 'react'
import { theme } from '../../../theme'
import MyInput from '../../common/MyInput/MyInput'
import ButtonUser from '../Reuse/ButtonUser'
import HeaderProfile from '../Reuse/HeaderProfile'

const Withdraw = ({ navigation }) => {
    const [wallet, setWallet] = useState('')
    const [amount, setAmount] = useState('')
    const [receive, setReceive] = useState('')

    return (
        <ScroollAreaView>
            <OpenDrawer navigation={navigation} />
            <HeaderProfile text={'Withdraw'} />
            <Block
                width={'80%'}
                alignCenter
                marginTop={10}
                alignSelf={'center'}
            >
                <MyInput
                    value={wallet}
                    setValue={setWallet}
                    width={'100%'}
                    height={40}
                    hint={'Wallet HEWE'}
                    borderWidth={1}
                    borderColor={theme.colors.grayBorderInput}
                    paddingHorizontal={10}
                    paddingLeft={10}
                    paddingRight={10}
                    marginBottom={10}
                />
                <MyInput
                    value={amount}
                    setValue={setAmount}
                    width={'100%'}
                    height={40}
                    hint={'Amount of HEWE'}
                    borderWidth={1}
                    borderColor={theme.colors.grayBorderInput}
                    paddingHorizontal={10}
                    paddingLeft={10}
                    paddingRight={10}
                    marginBottom={10}
                />
                <MyInput
                    value={receive}
                    setValue={setReceive}
                    width={'100%'}
                    height={40}
                    hint={'Amount Receive'}
                    borderWidth={1}
                    borderColor={theme.colors.grayBorderInput}
                    paddingHorizontal={10}
                    paddingLeft={10}
                    paddingRight={10}
                    marginBottom={10}
                />
                <ButtonUser
                    text={'Confirm'}
                />
            </Block>
        </ScroollAreaView>
    )
}

export default Withdraw

const styles = StyleSheet.create({})