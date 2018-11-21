import React from 'react'
import { View } from 'react-native'
import Profile from './Profile'

export default () => {
  const styles = {
    profileWraper: {
      flex: 1,
    },
  }
  return (
    <View style={styles.profileWraper}>
      <Profile />
    </View>
  )
}
