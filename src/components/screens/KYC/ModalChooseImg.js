import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalAlert from '../Reuse/ModalAlert'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'
import ImagePicker from 'react-native-image-crop-picker';

const ModalChooseImg = ({ show, setShow, data, handleDataDispatch }) => {

    const takePhotoFromToCamera = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 300,
            cropping: true,
        }).then(image => {
            handleDataDispatch('CHANGE', data.imgChoose, image.path)
            setShow(false)
        }).catch(err => console.log(err))
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 300,
            cropping: true,
            multiple: false
        }).then(image => {
            handleDataDispatch('CHANGE', data.imgChoose, image.path)
            setShow(false)
        }).catch(err => console.log(err))
    }

    return (
        <ModalAlert
            show={show}
            setShow={setShow}
            animation={'slide'}
        >
            <Block
                style={styles.container}
            >
                <MyButton marginVertical={10} onPress={choosePhotoFromLibrary}>
                    <MyText size={16}>Library</MyText>
                </MyButton>
                <MyButton marginVertical={10} onPress={takePhotoFromToCamera}>
                    <MyText size={16}>Camera</MyText>
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