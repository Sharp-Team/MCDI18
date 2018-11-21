import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

export default class test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Test Screen</Text>
        <RectButton
          onPress={() => {
            navigation.navigate('PopupDetail')
          }}
        >
          <Text>Go to Test Screen</Text>
        </RectButton>
      </View>
    )
  }
}

test.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
