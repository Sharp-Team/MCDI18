import React from 'react'
import { View, Text, Image } from 'react-native'

const SwiperOne = () => {
  const styles = {
    swContainer: {
      flex: 1,
    },
    image: {
      flex: 6,
      alignSelf: 'stretch',
      width: undefined,
      height: undefined,
      resizeMode: 'cover',
    },
    contentWraper: {
      flex: 4,
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'flex-start',
    },
    contentText: {
      fontSize: 18,
      color: '#000',
    },
  }
  return (
    <View style={styles.swContainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://nhadatnhanh.vn/upload/news/m-a-bat-dong-san-ngay-cang-than-thien-37984.jpg',
        }}
      />
      <View style={styles.contentWraper}>
        <Text style={styles.contentText}>Thân thiện, tiện lợi</Text>
      </View>
    </View>
  )
}

export default SwiperOne
