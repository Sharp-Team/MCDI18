import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  swContainer: {
    flex: 1,
    backgroundColor: '#ECEFF0',
  },
  image: {
    flex: 4,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
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

export default class SwiperOne extends React.Component {
  onChangeIndex() {
    const { changeIndex } = this.props
    changeIndex(1)
  }

  render() {
    return (
      <View style={styles.swContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://nhadatnhanh.vn/upload/news/m-a-bat-dong-san-ngay-cang-than-thien-37984.jpg',
          }}
        />
        <View style={styles.descContainer}>
          <Text style={styles.contentText}>Thân thiện, tiện lợi</Text>
          <RectButton style={styles.swButton} onPress={() => this.onChangeIndex()}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </RectButton>
        </View>
      </View>
    )
  }
}

SwiperOne.propTypes = {
  changeIndex: PropTypes.func.isRequired,
}
