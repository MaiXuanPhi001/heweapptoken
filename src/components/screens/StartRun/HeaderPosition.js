import React, { useEffect } from 'react'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import { alertGoBack } from '../../../method/alert'

const HeaderPosition = ({arrPosition, distance, walkEnd}) => {

    const onBack = () => {
        alertGoBack(walkEnd)
    }

    return (
        <Block
            width={'100%'}
            backgroundColor={theme.colors.white}
            row
            height={40}
            paddingHorizontal={10}
            justifySpaceBetween
            alignCenter
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
        >
            <MyButton onPress={onBack}>
                <Img
                    resizeMode={'contain'}
                    width={20}
                    url={require('../../../assets/images/leftarrow.png')}
                />
            </MyButton>
            <MyText fontWeightBold size={18}>Running</MyText>
            <Block row alignCenter>
                <Img
                    resizeMode={'contain'}
                    width={20}
                    url={require('../../../assets/images/coin.png')}
                />
                <MyText>0.5</MyText>
            </Block>
        </Block>
    )
}

export default HeaderPosition