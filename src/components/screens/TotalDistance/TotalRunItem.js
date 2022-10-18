import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import MyButton from '../../common/MyButton'
import moment from 'moment'
import { navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'
import { useDispatch } from 'react-redux'
import { getDetailRun } from '../../../redux/slices/waklSlice'

const TotalRunItem = ({ item }) => {
    const dispatch = useDispatch()

    const formatSecond = second => moment.utc(moment.duration(second, 's').asMilliseconds()).format('H:mm:ss')

    const handleDistanceDetail = () => {
        dispatch(getDetailRun(item.id))
        navigate(contants.screen.DISTANCE_DETAIL)
    }

    return (
        <MyButton marginVertical={10} onPress={handleDistanceDetail}>
            <MyText marginVertical={10}>{item.created_at}</MyText>
            <Block row>
                <Img
                    width={60}
                    height={60}
                    url={require('../../../assets/images/running.png')} />
                <Block marginLeft={10} justifyCenter>
                    <MyText fontWeightBold size={20}>{item.ran} Km</MyText>
                    <MyText>{formatSecond(item.created_time_end - item.created_time_start)}</MyText>
                </Block>
            </Block>
        </MyButton>
    )
}

export default TotalRunItem

const styles = StyleSheet.create({})