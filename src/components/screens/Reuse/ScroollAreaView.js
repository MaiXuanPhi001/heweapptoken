import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scroll from '../../common/Scroll'

const ScroollAreaView = ({
    backgroundColor = 'white',
    paddingHorizontal = 10,
    paddingBottom = 100,
    children
}) => {
    return (
        <Scroll
            flexGrow={1}
            backgroundColor={backgroundColor}
            isPaddingAdnroid
            paddingHorizontal={paddingHorizontal}
            paddingBottom={paddingBottom}
        >
            <SafeAreaView style={{flex: 1}}>
                {children}
            </SafeAreaView>
        </Scroll>
    )
}

export default ScroollAreaView

const styles = StyleSheet.create({})