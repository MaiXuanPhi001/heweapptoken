import { StyleSheet} from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'

const Cell = ({ width, text }) => {
    return (
        <Block
            width={width}
            justifyCenter
            paddingRight={20}
        >
            <MyText
                color={'black'}
                margin={5}
            >
                {text}
            </MyText>
        </Block>
    )
}

export default Cell

const styles = StyleSheet.create({})