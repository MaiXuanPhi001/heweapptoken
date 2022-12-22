import { StyleSheet } from 'react-native'
import React from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import Header from './Header'
import OpenDrawer from '../Reuse/OpenDrawer'
import HeaderTable from './HeaderTable'
import Scroll from '../../common/Scroll'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { getHistoryWidthdrawThunk } from '../../../redux/slices/withdrawSlice'
import { dataWithdrawSelector } from '../../../redux/selectors/withdrawSelector'
import Item from './Item'
import Block from '../../common/Block'

const HistoryWithdraw = ({ navigation }) => {
  const dispatch = useDispatch()

  const data = useSelector(dataWithdrawSelector)

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      getAPI(1)
    })
    return willFocusSubscription
  }, [])

  const getAPI = async (page) => {
    const payload = unwrapResult(await dispatch(
      getHistoryWidthdrawThunk({
        limit: 10,
        page,
      })
    ))

    if (payload.error) {
      alert('Connection errors')
    }
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      <Header getAPI={getAPI} />
      <Scroll horizontal>
        <Block>
          <HeaderTable />
          {data.map(item => <Item key={item.id} item={item} />)}
        </Block>
      </Scroll>
    </ScroollAreaView>
  )
}

export default HistoryWithdraw

const styles = StyleSheet.create({})