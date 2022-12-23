import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import OpenDrawer from '../Reuse/OpenDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { dataTransferSelector, loadingTransferSelector } from '../../../redux/selectors/transferSelector'
import Block from '../../common/Block'
import HeaderTable from './HeaderTable'
import { onGetHistoryTransfer } from '../../../redux/slices/transferSlice'
import TransferHistoryItem from './TransferHistoryItem'
import Scroll from '../../common/Scroll'
import Header from './Header'
import { unwrapResult } from '@reduxjs/toolkit'

const HistoryTransfer = ({ navigation }) => {
  const loading = useSelector(loadingTransferSelector)
  const data = useSelector(dataTransferSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getAPI(1)
    })
    return willFocusSubscription
  }, [])

  const getAPI = async (page) => {
    const payload = unwrapResult(
      await dispatch(onGetHistoryTransfer({
        limit: 10,
        page,
      }))
    )

    payload.error && alert('Connection errors!')
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      <Header getAPI={getAPI} />
      {!loading &&
        <Scroll horizontal marginTop={10}>
          <Block>
            <Block row>
              <HeaderTable text={'From'} width={130} />
              <HeaderTable text={'To'} width={130} />
              <HeaderTable text={'Amount'} width={100} />
              <HeaderTable text={'Time'} width={200} />
            </Block>
            {data.map(item =>
              <TransferHistoryItem
                key={item.id}
                item={item}
              />)
            }
          </Block>
        </Scroll>
      }
    </ScroollAreaView>
  )
}

export default HistoryTransfer

const styles = StyleSheet.create({})
