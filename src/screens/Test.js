import React from 'react'
import { View } from 'react-native'
// import Profile from './Profile'
// import Map from './Map'
import CardScan from './CardScan'

export default () => {
  const styles = {
    profileWraper: {
      flex: 1,
    },
  }
  return (
    <View style={styles.profileWraper}>
      <CardScan />
    </View>
  )
}
