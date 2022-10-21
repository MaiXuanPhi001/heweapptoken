import { BackHandler, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import Pin from '../StartRun/Pin'
import { theme } from '../../../theme'
import Block from '../../common/Block'
import Img from '../../common/Img'
import MyButton from '../../common/MyButton'
import moment from 'moment'
import MyText from '../../common/MyText'
import { goBack, navigate } from '../../navigations/navigationRef'
import { contants } from '../../../utils/contants'

const Map = ({ data }) => {
    const formatSecond = second => moment.utc(moment.duration(second, 's').asMilliseconds()).format('H:mm:ss')

    const formatDate = (dateServer) => {
        var created_date = new Date(dateServer)
        var year = created_date.getFullYear()
        var month = created_date.getMonth() + 1
        var date = created_date.getDate()
        var hour = created_date.getHours()
        var min = created_date.getMinutes()
        var sec = created_date.getSeconds()
        return date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec
    }

    return (
        <SafeAreaView>
            <Block
                paddingHorizontal={20}
                backgroundColor={'white'}
                isPaddingAdnroid
            >
                <MyText marginVertical={10}>{formatDate(data.detailRun.created_at)}</MyText>
                <Block
                    row
                    alignCenter
                    marginBottom={15}
                >
                    <Img
                        width={60}
                        height={60}
                        url={require('../../../assets/images/running.png')} />
                    <Block marginLeft={10} justifyCenter>
                        <MyText fontWeightBold size={20}>{data.detailRun.ran} Km</MyText>
                        <MyText>
                            {formatSecond(data.detailRun.created_time_end - data.detailRun.created_time_start)}
                        </MyText>
                    </Block>
                    <MyButton
                        onPress={() => navigate(contants.screen.TOTAL_DISTANCE)}
                        marginLeft={20}
                        height={30}
                        width={45}
                        justifyCenter
                        alignCenter
                        radius={10}
                        backgroundColor={theme.colors.lightGreen2}
                    >
                        <MyText color={'white'} fontWeightBold>Back</MyText>
                    </MyButton>
                </Block>
            </Block>

            <MapView
                style={{ height: '100%' }}
                initialRegion={{  // chuyển đến vị trí marker
                    latitude: data.array[data.array.length - 1].latitude,
                    longitude: data.array[data.array.length - 1].longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>

                <Marker
                    coordinate={{
                        latitude: data.array[data.array.length - 1].latitude,
                        longitude: data.array[data.array.length - 1].longitude
                    }}
                    pinColor={'red'}
                    title={"title"}
                    description={"description"}
                >
                    <Pin />
                </Marker>
                <Polyline
                    coordinates={data.array.map(position => ({ latitude: position.latitude, longitude: position.longitude }))}
                    strokeColor={theme.colors.orange2}
                    strokeColors={[
                        theme.colors.orange2
                    ]}
                    strokeWidth={6}
                />
            </MapView>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({})