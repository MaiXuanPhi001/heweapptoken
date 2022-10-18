import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import { theme } from '../../../theme'

const Pin = () => {
    return (
        <Block
            width={40}
            height={40}
            radius={50}
            backgroundColor={'rgba(242, 182, 89, 0.25)'}
            justifyCenter
            alignCenter
        >
            <Block
                width={20}
                height={20}
                radius={50}
                backgroundColor={theme.colors.white}
                justifyCenter
                alignCenter
            >
                <Block
                    width={10}
                    height={10}
                    radius={50}
                    backgroundColor={theme.colors.orange2}
                    justifyCenter
                    alignCenter
                />
            </Block>
        </Block>
    )
}

export default Pin

const styles = StyleSheet.create({})