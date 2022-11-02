import { View, Text } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const DistanceMap = ({ value, km }) => {
    return (
        <Block alignCenter>
            <MyText size={18} fontWeightBold>{value}</MyText>
            <MyText fontWeightBold color={'#919191'}>{km}</MyText>
        </Block>
    )
}

export default DistanceMap