import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Block from '../../common/Block'
import moment from 'moment/moment'
import MyText from '../../common/MyText'

const Monitor = (props) => {
    const [duration, setDuration] = useState(0)
    const { distance, pace } = props

    useEffect(() => {
        const interval = setTimeout(() => setDuration(duration + 1), 1000)
        return () => clearTimeout(interval)
    })

    const formatDuration = duration => moment.utc(moment.duration(duration, 's').asMilliseconds()).format('mm:ss')

    return (
        <Block isPaddingAdnroid height={300} backgroundColor={'#29252b'}>
            <MyText color={'white'}>Quãng đường: {distance}</MyText>
            <Block column>
                <Block row>
                    <MyText color={'white'} marginRight={30}>Vận tốc: </MyText>
                    <MyText color={'white'}>{formatDuration(pace)}</MyText>
                </Block>
                <Block row>
                    <MyText color={'white'}>Giờ: </MyText>
                    <MyText color={'white'}>{formatDuration(duration)}</MyText>
                </Block>
            </Block>
        </Block>
    )
}

export default Monitor

const styles = StyleSheet.create({})