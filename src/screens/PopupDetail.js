import React from 'react'
import { View, Text, TouchableHighlight, Modal, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  // style for modal
  modalCustom: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  modalContainer: {
    marginHorizontal: 30,
    flex: 3,
    backgroundColor: '#fff',
  },
})

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  render() {
    const { modalVisible } = this.state
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          style={styles.modalCustom}
        >
          <View style={styles.modalContainer}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: false })
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setState({ modalVisible: true })
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
