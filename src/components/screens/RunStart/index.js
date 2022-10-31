import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScroollAreaView from '../Reuse/ScroollAreaView'
import Block from '../../common/Block'
import MyText from '../../common/MyText'
import GetLocation from 'react-native-get-location'
import * as turf from '@turf/turf'

const RunStart = () => {
  const [second, setSecond] = useState(0)
  const [pause, setPause] = useState(false)
  const [distance, setDistance] = useState(0)
  const [pace, setPace] = useState(0)
  const [arrayPosition, setArrayPosition] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setSecond(second + 1)
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        })
          .then(location => {
            console.log(location)
            // addPosition(location)
          })
          .catch(err => {
            console.warn(err);
          })
      }

    }, 1000);
    return () => clearInterval(interval);
  })

  const addPosition = (location) => {

    if (arrayPosition.length > 0) {
      const kilomet = distanceBetween({ longitude: location.longitude, latitude: location.latitude }, arrayPosition[arrayPosition.length - 1])
      setDistance(kilomet)
    } 
    setArrayPosition([...arrayPosition, { longitude: location.longitude, latitude: location.latitude }])
  }

  const distanceBetween = (coord, arrPosition) => {
    var from = turf.point([coord.longitude, coord.latitude])
    var to = turf.point([arrPosition.longitude, arrPosition.latitude])
    var options = { units: 'kilometers' };

    return turf.distance(from, to, options)
  }

  return (
    <ScroollAreaView>
      <Block isPaddingAdnroid>
        <MyText>second: {second}</MyText>
        <MyText>Quãng đường: {distance}</MyText>
        {arrayPosition.length > 0 &&
          <MyText>Tạo đô: latitude: {arrayPosition[arrayPosition.length - 1].latitude} || longitude: {arrayPosition[arrayPosition.length - 1].longitude}</MyText>
        }
        <Button title={pause ? 'continue' : 'Stop'} onPress={() => setPause(!pause)} />
      </Block>
    </ScroollAreaView>
  )
}

export default RunStart

const styles = StyleSheet.create({})