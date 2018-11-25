import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'expo'

const CardLocation = () => {
  const styles = {
    cardLocationContainer: {
      marginTop: 15,
      backgroundColor: '#fff',
      padding: 15,
      flexDirection: 'row',
    },
    detailContainer: {
      flex: 9,
    },
    title: {
      fontSize: 15,
      color: '#333',
      fontWeight: '500',
    },
    location: {
      fontSize: 16,
      color: '#666',
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
    },
  }
  return (
    <View style={styles.cardLocationContainer}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Vị trí của bạn</Text>
        <Text style={styles.location}>
          Km29 - Đại Lộ Thăng Long - Thạch Thất - Hòa Lạc - Hà Nội
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon.Ionicons name="ios-brush" size={16} color="#bbb" />
      </View>
    </View>
  )
}

export default CardLocation
