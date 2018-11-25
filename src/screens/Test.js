import React from 'react'
import { View } from 'react-native'
// import Profile from './Profile'
import Notification from './Notification'

export default () => {
  const styles = {
    profileWraper: {
      flex: 1,
    },
  }
  return (
    <View style={styles.profileWraper}>
      <Notification />
    </View>
  )
}
