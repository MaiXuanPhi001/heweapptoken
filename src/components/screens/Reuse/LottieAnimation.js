import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const LottieAnimation = ({ url, size = 100 }) => {
    return (
        <LottieView
            style={[
                size && {width: size}
            ]}
            resizeMode="contain"
            autoSize
            source={url}
            autoPlay
            loop
        />
    )
}

export default LottieAnimation