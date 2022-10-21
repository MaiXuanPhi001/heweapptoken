import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'

const ModalAlert = ({ show, setShow, animation, children }) => {
    // animation={'slide', 'fade', 'none'}

    return (
        <Modal
            animationType={animation}
            visible={show}
            transparent={true}
            onRequestClose={() => setShow(false)}
        >
            <Pressable style={{flex: 1}} onPress={() => setShow(false)}>
                <Block
                    flex={1}
                    alignCenter
                    justifyCenter
                    backgroundColor={'rgba(0,0,0,0.5)'}
                >
                    {children}
                </Block>
            </Pressable>
        </Modal>
    )
}

export default ModalAlert

const styles = StyleSheet.create({})