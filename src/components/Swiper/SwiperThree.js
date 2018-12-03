import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

const SwiperThree = ({ navigation }) => {
  const styles = {
    swContainer: {
      paddingTop: 80,
      backgroundColor: '#b802c6',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    skipWraper: {
      left: 150,
      marginBottom: 20,
    },
    skipText: {
      fontSize: 16,
      color: '#000',
    },
    textIntro: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center',
    },
    contentWraper: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    contentText: {
      fontSize: 19,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginTop: 70,
      marginBottom: 40,
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  return (
    <View style={styles.swContainer}>
      <Text style={styles.textIntro}>Chỉ đường đến tận nơi</Text>
      <Image style={styles.image} source={require('../../../assets/slider/slider3.png')} />
      <View style={styles.contentWraper}>
        <Text style={styles.contentText}>
          Chỉ đường tận nơi cho các đối tượng cần sẽ tìm được đến với nhau.
        </Text>
      </View>
      <View style={styles.skipWraper}>
        <RectButton onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.skipText}>Bỏ qua</Text>
        </RectButton>
      </View>
    </View>
  )
}

SwiperThree.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default SwiperThree
