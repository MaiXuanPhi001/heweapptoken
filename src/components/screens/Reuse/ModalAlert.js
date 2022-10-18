import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'

const ModalAlert = ({ show, setShow, animation, children }) => {
    return (
        <Modal
            animationType={animation}
            visible={show}
            transparent={true}
            onRequestClose={() => setShow(false)}
        >
            <Block
                flex={1}
                alignCenter
                justifyCenter
                backgroundColor={'rgba(0,0,0,0.5)'}
            >
                {children}
            </Block>
        </Modal>
    )
}

export default ModalAlert

const styles = StyleSheet.create({})