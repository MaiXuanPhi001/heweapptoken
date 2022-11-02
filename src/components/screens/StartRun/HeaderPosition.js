import React, { useEffect } from 'react'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import { alertGoBack } from '../../../method/alert'

const HeaderPosition = ({ walkEnd }) => {
    const onBack = () => {
        alertGoBack(walkEnd)
    }

    return (
        <Block
            width={'80%'}
            row
            height={60}
            paddingHorizontal={10}
            justifySpaceBetween
            alignCenter
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
        >
            <MyButton onPress={onBack}>
                <Img
                    resizeMode={'contain'}
                    width={30}
                    url={require('../../../assets/images/left-arrow.png')}
                />
            </MyButton>
            <MyText
                fontWeightBold
                size={20}
                color={'white'}
            >
                Walking
            </MyText>
            <Block
                row
                alignCenter
                backgroundColor={'#4B4B4B'}
                padding={4}
                radius={10}
            >
                <MyText color={'white'}>GPS</MyText>
                <Img
                    resizeMode={'contain'}
                    width={20}
                    height={15}
                    url={require('../../../assets/images/signal.png')}
                />
            </Block>
        </Block>
    )
}

export default HeaderPosition