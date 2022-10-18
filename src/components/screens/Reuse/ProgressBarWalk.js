import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import ProgressBar from 'react-native-progress/Bar';
import Img from '../../common/Img';
import MyText from '../../common/MyText';

const ProgressBarWalk = ({ ran, ranLimit, color, unfilledColor, url }) => {
    const { height, width } = useWindowDimensions()

    return (
        <Block marginVertical={10}>
            <ProgressBar
                progress={ran / 10} width={width - 100}
                color={color}
                unfilledColor={unfilledColor}
                height={30}
                borderRadius={10}
            />
            <Block
                row
                absolute
                top={2}
                left={5}
                alignCenter
            >
                <Img marginRight={5} url={url} />
                <MyText>{ran}/</MyText>
                <MyText>{ranLimit}</MyText>
            </Block>
        </Block>
    )
}

export default ProgressBarWalk