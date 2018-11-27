import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

const SwiperThree = ({ navigation }) => {
  const styles = {
    swContainer: {
      flex: 1,
    },
    skipWraper: {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 15,
      justifyContent: 'center',
    },
    skipText: {
      fontSize: 16,
      color: '#000',
    },
    titleWraper: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      color: '#469C29',
      fontSize: 48,
      fontWeight: 'bold',
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
      <View style={styles.skipWraper}>
        <RectButton onPress={() => navigation.navigate('Test')}>
          <Text style={styles.skipText}>Bỏ qua</Text>
        </RectButton>
      </View>
      <View style={styles.titleWraper}>
        <Text style={styles.titleText}>Hình ảnh</Text>
      </View>
      <View style={styles.contentWraper}>
        <Text style={styles.contentText}>Kết nối công việc</Text>
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
