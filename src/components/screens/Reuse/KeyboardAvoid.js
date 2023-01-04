import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const KeyboardAvoid = ({ children }) => {
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === 'android' ? -1000 : 0}
            behavior="padding"
            style={{ flex: 1 }}
            enabled
        >
            {children}
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoid

const styles = StyleSheet.create({})