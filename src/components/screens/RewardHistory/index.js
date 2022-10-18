// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import ScroollAreaView from '../Reuse/ScroollAreaView'
// import OpenDrawer from '../Reuse/OpenDrawer'
// import HeaderTable from '../HistoryTransfer/HeaderTable'
// import Block from '../../common/Block'
// import { rewardHistory } from '../../../api/userApi'
// import Item from './Item'

// const RewardHistory = ({ navigation }) => {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     const willFocusSubscription = navigation.addListener('focus', () => {
//       getRewardHistoryAPI()
//     })
//     return willFocusSubscription
//   })

//   const getRewardHistoryAPI = async () => {
//     const res = await rewardHistory()
//     if (!res.status) {
//       return alert(res.message)
//     }
//     setData(res.data)
//   }

//   return (
//     <ScroollAreaView>
//       <OpenDrawer navigation={navigation} />
//       {data !== null &&
//         <>
//           <Block row>
//             <HeaderTable text={'Email'} width={'40%'} />
//             <HeaderTable text={'Amount'} width={'20%'} />
//             <HeaderTable text={'Time'} width={'40%'} />
//           </Block>
//           {
//             data.array.map((item, index) =>
//               <Item
//                 key={item.id}
//                 item={item}
//                 index={index}
//               />)
//           }
//         </>
//       }



//     </ScroollAreaView>
//   )
// }

// export default RewardHistory

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RewardHistory = () => {
  return (
    <View>
      <Text>RewardHistory</Text>
    </View>
  )
}

export default RewardHistory

const styles = StyleSheet.create({})