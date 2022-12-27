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
import { useEffect } from 'react'
import { getCustom, withdraw } from '../../../api/transferApi'
import TextFormError from '../Reuse/TextFormError'
import Warn from './Warn'
import { useSelector } from 'react-redux'
import { balanceSelector } from '../../../redux/selectors/userSelector'
import ModalWarn from './ModalWarn'

const Withdraw = ({ navigation }) => {
    const [wallet, setWallet] = useState('')
    const [amount, setAmount] = useState('')
    const [receive, setReceive] = useState('')
    const [data, setData] = useState(0)
    const [checkForm, setCheckForm] = useState('')
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const balance = useSelector(balanceSelector)

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        const res = await getCustom()
        if (!res.status) {
            return alert('Has an error please try again!')
        }
        setData(res.data)
    }

    const calcAmount = (value) => {
        setAmount(value)
        const receive = parseFloat((Number(value) * (1 - data)).toFixed(3))
        setReceive(receive === 0 ? '' : receive.toString())
    }

    const handleWithdraw = async () => {
        setLoading(true)
        const res = await withdraw({ amount, toAddress: wallet })

        if (res.error) {
            alert('Connection errors')
        } else {
            alert(res.message)
        }
        setShowModal(false)
        setLoading(false)
        setCheckForm(false)
        setAmount('')
        setWallet('')
        setReceive('')
    }

    const handleCheckForm = async () => {
        if (wallet.trim() === '' || amount.trim() === '' || Number(amount) > balance || Number(amount) < 50) {
            return setCheckForm(true)
        }
        setShowModal(true)
    }

    return (
        <Block flex={1}>
            <ScroollAreaView>
                <OpenDrawer navigation={navigation} />
                <HeaderProfile text={'Withdraw'} />
                <Block
                    width={'80%'}
                    alignCenter
                    marginTop={10}
                    alignSelf={'center'}
                >
                    <Block
                        borderWidth={1}
                        borderColor={theme.colors.grayBorderInput}
                        width={'100%'}
                        marginBottom={10}
                        padding={5}
                    >
                        <Warn text={`Withdrawl fee: ${data * 100}% / transaction`} />
                        <Warn text={`Each transaction requires a minimum amount of 50 HEWE`} />
                    </Block>
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
                    {(checkForm && wallet.trim() === '') && <TextFormError text={'Wallet is empty'} />}
                    <MyInput
                        value={amount}
                        setValue={value => calcAmount(value)}
                        width={'100%'}
                        height={40}
                        hint={'Amount of HEWE'}
                        borderWidth={1}
                        borderColor={theme.colors.grayBorderInput}
                        paddingHorizontal={10}
                        paddingLeft={10}
                        paddingRight={10}
                        marginBottom={10}
                        keyboardType={'numeric'}
                    />
                    {(checkForm && amount.trim() === '') && <TextFormError text={'Amount is empty'} />}
                    {(checkForm && Number(amount) > balance) && <TextFormError text={'Insufficient balance'} />}
                    {(checkForm && Number(amount) < 50) && <TextFormError text={'Minimum amount must be 50 token'} />}

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
                        editable={false}
                        backgroundColor={'#E5E5E5'}
                    />
                    <ButtonUser
                        onPress={handleCheckForm}
                        text={'Confirm'}
                        loading={loading}
                    />
                </Block>
            </ScroollAreaView>

            <ModalWarn
                show={showModal}
                setShow={setShowModal}
                onWithdraw={handleWithdraw}
            />
        </Block >
    )
}

export default Withdraw

const styles = StyleSheet.create({})