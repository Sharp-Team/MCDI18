import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const SwiperThree = ({ navigation }) => {
  const styles = {
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
  }
  return (
    <View style={styles.swContainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'http://akishop.com.vn/data/media/1453/images/ket%20noi%20con%20nguoi.jpg',
        }}
      />
      <View style={styles.descContainer}>
        <Text style={styles.contentText}>Kết nối con người</Text>
        <RectButton
          style={styles.swButton}
          onPress={() => {
            navigation.navigate('Test')
          }}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </RectButton>
      </View>
    </View>
  )
}

SwiperThree.propTypes = {
  navigation: PropTypes.shape.isRequired,
}

export default SwiperThree
