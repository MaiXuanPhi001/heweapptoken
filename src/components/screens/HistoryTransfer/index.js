import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import OpenDrawer from '../Reuse/OpenDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { loadingSelector, historyTransferSelector } from '../../../redux/selectors/transferSelector'
import Block from '../../common/Block'
import HeaderTable from './HeaderTable'
import { onGetHistoryTransfer } from '../../../redux/slices/transferSlice'
import TransferHistoryItem from './TransferHistoryItem'

const HistoryTransfer = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const data = useSelector(historyTransferSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      setLoading(true)
      disPatchAPI()
    })
    return willFocusSubscription
  }, [])

  const disPatchAPI = async () => {
    await dispatch(onGetHistoryTransfer())
    setLoading(false)
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      {!loading &&
        <>
          <Block row>
            <HeaderTable text={'From'} width={'27%'} />
            <HeaderTable text={'To'} width={'27%'} />
            <HeaderTable text={'Amount'} width={'19%'} />
            <HeaderTable text={'Time'} width={'27%'} />
          </Block>
          {data.array.map((item, index) =>
            <TransferHistoryItem
              key={item.id}
              item={item}
              index={index}
            />)
          }
        </>
      }
    </ScroollAreaView>
  )
}

export default HistoryTransfer

const styles = StyleSheet.create({})
