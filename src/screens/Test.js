import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text } from 'react-native'

const Test = ({ navigation }) => {
  const styles = {
    profileWraper: {
      flex: 1,
    },
  }
  return (
    <View style={styles.profileWraper}>
      <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
        <Text>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CardScan')}>
        <Text>CardScan</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePwd')}>
        <Text>ChangePwd</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

Test.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Test
