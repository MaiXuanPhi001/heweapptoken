import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { Modal } from 'react-native-paper'
import Img from '../../common/Img'
import MyText from '../../common/MyText'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'

const ModalWarn = ({ show, setShow, onWithdraw }) => {
    return (
        <Modal
            visible={show}
            transparent={true}
            style={{ flex: 1 }}
        >
            <Block
                flex={1}
                alignCenter
                justifyCenter
                backgroundColor={'rgba(0,0,0,0.5)'}
            >
                <Block
                    width={'80%'}
                    height={220}
                    backgroundColor={'white'}
                >
                    <Block
                        row
                        alignCenter
                        padding={10}
                    >
                        <Img
                            width={20}
                            height={20}
                            marginRight={5}
                            url={require('../../../assets/images/warn-red.png')}
                        />
                        <MyText color='red' fontWeightBold>ATTENTION: </MyText>
                    </Block>
                    <Block width={'100%'} height={1} backgroundColor={theme.colors.grayBorder}></Block>
                    <Block padding={10}>
                        <MyText fontWeightBold>
                            BEP20 is required
                            Please making sure your ewallet address is correct before confirmed the transaction.
                            We are not responsible for any transaction error and lost.
                        </MyText>
                        <Block row marginTop={40} justifySpaceBetween>
                            <MyButton
                                onPress={() => setShow(false)}
                                backgroundColor={theme.colors.blueLight2}
                                padding={10}
                                alignCenter
                                justifyCenter
                                width={'48%'}
                            >
                                <MyText fontWeightBold color={'white'}>Cancel</MyText>
                            </MyButton>

                            <MyButton
                                onPress={onWithdraw}
                                backgroundColor={theme.colors.lightGreen2}
                                padding={10}
                                alignCenter
                                justifyCenter
                                width={'48%'}
                            >
                                <MyText fontWeightBold color={'white'}>Confirm</MyText>
                            </MyButton>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Modal>
    )
}

export default ModalWarn

const styles = StyleSheet.create({})