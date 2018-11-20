import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  swContainer: {
    flex: 1,
    backgroundColor: '#ECEFF0',
  },
  titleContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#469C29',
    fontSize: 48,
    fontWeight: 'bold',
  },
  descContainer: {
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  swButton: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  contentText: {
    fontSize: 18,
    color: '#000',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default class SwiperTwo extends React.Component {
  onChangeIndex() {
    const { changeIndex } = this.props
    changeIndex(2)
  }

  render() {
    return (
      <View style={styles.swContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Go Green</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.contentText}>Kết nối công việc</Text>
          <RectButton style={styles.swButton} onPress={() => this.onChangeIndex()}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </RectButton>
        </View>
      </View>
    )
  }
}

SwiperTwo.propTypes = {
  changeIndex: PropTypes.func.isRequired,
}
