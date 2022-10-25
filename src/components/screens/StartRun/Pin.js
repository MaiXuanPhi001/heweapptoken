import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'
import Img from '../../common/Img'
import { useSelector } from 'react-redux'
import { genderSelector } from '../../../redux/selectors/userSelector'

const Pin = () => {
    const gender = useSelector(genderSelector)

    return (
        <Block>
            <Image
                style={{
                    width: '100%',
                    height: '100%'
                }}
                resizeMode='contain'
                source={
                    gender === 1 ?
                        require('../../../assets/gifs/malewalk.gif') :
                        require('../../../assets/gifs/femalewalk.gif')
                }
            />
        </Block>
    )
}

export default Pin