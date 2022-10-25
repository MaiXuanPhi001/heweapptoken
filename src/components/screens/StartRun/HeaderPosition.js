import React, { useEffect } from 'react'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import { alertGoBack } from '../../../method/alert'
import { useSelector } from 'react-redux'
import { balanceSelector } from '../../../redux/selectors/userSelector'

const HeaderPosition = ({ arrPosition, distance, walkEnd }) => {
    const balance = useSelector(balanceSelector)

    const onBack = () => {
        alertGoBack(walkEnd)
    }

    return (
        <Block
            width={'100%'}
            backgroundColor={theme.colors.white}
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
                    url={require('../../../assets/images/leftarrow.png')}
                />
            </MyButton>
            <MyText fontWeightBold size={20}>Running</MyText>
            <Block row alignCenter>
                <Img
                    resizeMode={'contain'}
                    width={30}
                    url={require('../../../assets/images/coin.png')}
                />
                <MyText
                    marginLeft={10}
                    fontWeightBold
                    size={16}
                >
                    {balance}
                </MyText>
            </Block>
        </Block>
    )
}

export default HeaderPosition