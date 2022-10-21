import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalAlert from '../Reuse/ModalAlert'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'

const ModalChooseImg = ({ show, setShow }) => {
    return (
        <ModalAlert
            show={show}
            setShow={setShow}
            animation={'slide'}
        >
            <Block
                style={styles.container}
            >
                <MyButton marginVertical={10}>
                    <MyText>Library</MyText>
                </MyButton>
                <MyButton marginVertical={10}>
                    <MyText>Camera</MyText>
                </MyButton>
            </Block>
        </ModalAlert>
    )
}

export default ModalChooseImg

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})