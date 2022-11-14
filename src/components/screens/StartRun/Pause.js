import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import MyButton from '../../common/MyButton'
import { alertGoBack } from '../../../method/alert'

const Pause = ({ pause, setPause, walkEnd, setShowMap }) => {

    const size = 65

    const onBack = () => {
        alertGoBack(walkEnd)
    }

    return (
        <Block
            style={styles.container}
        >
            {/* <TouchableOpacity onPress={() => setShowMap(true)}>
                <Img
                    width={40}
                    height={40}
                    radius={50}
                    url={require('../../../assets/images/google-maps.png')}
                />
            </TouchableOpacity> */}
            
            <Img
                width={40}
                height={40}
                radius={50}
                url={require('../../../assets/images/icon.png')}
            />
            <Block row alignCenter>
                {!pause ?
                    <MyButton onPress={() => setPause(true)}>
                        <Img
                            width={size}
                            height={size}
                            resizeMode={'contain'}
                            url={require('../../../assets/images/controllers/pause-button.png')}
                        />
                    </MyButton>
                    :
                    <>
                        <MyButton onPress={onBack}>
                            <Img
                                width={size}
                                height={size}
                                resizeMode={'contain'}
                                marginRight={10}
                                url={require('../../../assets/images/controllers/stop-button.png')}
                            />
                        </MyButton>
                        <MyButton onPress={() => setPause(false)}>
                            <Img
                                width={size}
                                height={size}
                                resizeMode={'contain'}
                                url={require('../../../assets/images/controllers/play-button.png')}
                                marginLeft={10}
                            />
                        </MyButton>
                    </>
                }
            </Block>
            <Img
                width={40}
                height={40}
                radius={50}
                url={require('../../../assets/images/icon.png')}
            />
        </Block>
    )
}

export default Pause

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 40
    }
})