import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Block from '../../common/Block'
import MyButton from '../../common/MyButton'
import { goBack } from '../../navigations/navigationRef'
import MyText from '../../common/MyText'
import Img from '../../common/Img'
import { theme } from '../../../theme'
import { sendPositionEnd } from '../../../api/walkApi'
import { useSelector } from 'react-redux'
import { longtiudeStartSelector, latiudeStartSelector } from '../../../redux/selectors/walkSelector'

const HeaderPosition = ({arrPosition, distance}) => {

    const latitudeStart = useSelector(latiudeStartSelector)
    const longitudeStart = useSelector(longtiudeStartSelector)

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: walkEnd }
        ])
    }

    const walkEnd = async () => {
        const lastPosition = arrPosition.length === 0 ?
          { longitude: longitudeStart, latitude: latitudeStart } :
          arrPosition[arrPosition.length - 1]
    
        await sendPositionEnd({
          longitudeEnd: lastPosition.longitude,
          latitudeEnd: lastPosition.latitude,
          ran: distance.toFixed(2)
        })
        goBack()
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
            <MyButton onPress={backAction}>
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