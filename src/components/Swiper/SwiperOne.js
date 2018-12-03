import React from 'react'
import { View, Text, Image } from 'react-native'

const SwiperOne = () => {
  const styles = {
    swContainer: {
      paddingTop: 80,
      backgroundColor: '#0485a4',
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
      <Text style={styles.textIntro}>Quét, tìm kiếm khách hàng, người làm việc</Text>
      <Image style={styles.image} source={require('../../../assets/slider/slider1.png')} />
      <View style={styles.contentWraper}>
        <Text style={styles.contentText}>
          Có thể quét và tìm kiếm được tại vị trí xung quanh họ để kiểm tra xem có đối tượng phù hợp
          với công việc của họ.
        </Text>
      </View>
    </View>
  )
}

export default SwiperOne
