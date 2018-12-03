import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

const SwiperTwo = () => {
  const styles = {
    swContainer: {
      paddingTop: 80,
      backgroundColor: '#03a373',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textIntro: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center',
    },
    image: {
      marginTop: 70,
      marginBottom: 40,
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
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
    },
  }
  return (
    <View style={styles.swContainer}>
      <Text style={styles.textIntro}>Nhận, phát thông báo công việc</Text>
      <Image style={styles.image} source={require('../../../assets/slider/slider2.png')} />
      <View style={styles.contentWraper}>
        <Text style={styles.contentText}>
          Phát thông cho nhiều worker khi có công việc cần giúp đỡ một cách đơn giản và ngay lập
          tức.
        </Text>
      </View>
    </View>
  )
}

SwiperTwo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default SwiperTwo
