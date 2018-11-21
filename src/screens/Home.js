import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

const Home = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <RectButton
      onPress={() => {
        navigation.navigate('Test')
      }}
    >
      <Text>Go to Test Screen</Text>
    </RectButton>
    <RectButton
      onPress={() => {
        navigation.navigate('PopupDetail')
      }}
    >
      <Text>Go to Test Screen</Text>
    </RectButton>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape.isRequired,
}

export default Home
