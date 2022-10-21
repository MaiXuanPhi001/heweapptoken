import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import OpenDrawer from '../Reuse/OpenDrawer'
import Block from '../../common/Block'
import { useDispatch, useSelector } from 'react-redux'
import { totalRunSelector } from '../../../redux/selectors/walkSelector'
import { getTotalRun } from '../../../redux/slices/waklSlice'
import TotalRunItem from './TotalRunItem'

const TotalDistance = ({ navigation }) => {

  const totalRun = useSelector(totalRunSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatchAPI()
    const willFocusSubscription = navigation.addListener('focus', () => {
      dispatchAPI()
    })
    return willFocusSubscription
  }, [])

  const dispatchAPI = () => {
    dispatch(getTotalRun())
  }

  return (
    <ScroollAreaView>
      <OpenDrawer navigation={navigation} />
      <Block>
        {totalRun.map(item => {
          if (item.ran === 0) return 
          return <TotalRunItem key={item.id} item={item} />
        })}
      </Block>
    </ScroollAreaView>
  )
}

export default TotalDistance

const styles = StyleSheet.create({})